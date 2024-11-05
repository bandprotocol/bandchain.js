import { DecodeError, EncodeError, SchemaError } from "./errors";

interface KeyValuePair {
  key: string;
  encoder: ObiBase<any>;
}

abstract class ObiBase<T = any> {
  abstract encode(value: T): Buffer;
  abstract decode(buff: Buffer): [T, Buffer];
}

export class ObiInteger extends ObiBase<bigint> {
  static readonly REGEX = /^(u|i)(8|16|32|64|128|256)$/;
  private readonly isSigned: boolean;
  private readonly sizeInBytes: number;
  private readonly maxValue: bigint;

  constructor(schema: string) {
    super();
    this.isSigned = schema[0] === "i";
    this.sizeInBytes = parseInt(schema.slice(1)) / 8;
    this.maxValue = BigInt(2) ** BigInt(this.sizeInBytes * 8) - BigInt(1);
  }

  encode(value: bigint): Buffer {
    const newValue = BigInt(value);

    if (newValue > this.maxValue) {
      throw new EncodeError(
        `Value ${value} exceeds maximum size for ${this.sizeInBytes * 8} bits`
      );
    }

    const bytes = new Array(this.sizeInBytes);
    let tempValue = newValue;

    for (let i = this.sizeInBytes - 1; i >= 0; i--) {
      bytes[i] = Number(tempValue & BigInt(0xff));
      tempValue >>= BigInt(8);
    }

    return Buffer.from(bytes);
  }

  decode(buff: Buffer): [bigint, Buffer] {
    if (buff.length < this.sizeInBytes) {
      throw new DecodeError(
        `Not enough bytes. Expected ${this.sizeInBytes}, got ${buff.length}`
      );
    }

    let value = BigInt(0);
    for (let i = 0; i < this.sizeInBytes; i++) {
      value = (value << BigInt(8)) | BigInt(buff[i]);
    }

    return [value, buff.slice(this.sizeInBytes)];
  }
}

export class ObiBool extends ObiBase<boolean> {
  static readonly REGEX = /^bool$/;
  private static readonly encoder = new ObiInteger("u8");

  encode(value: boolean): Buffer {
    return ObiBool.encoder.encode(value ? BigInt(1) : BigInt(0));
  }

  decode(buff: Buffer): [boolean, Buffer] {
    const [value, remaining] = ObiBool.encoder.decode(buff);
    if (value !== BigInt(0) && value !== BigInt(1)) {
      throw new DecodeError(`Boolean value must be 0 or 1, got ${value}`);
    }
    return [value === BigInt(1), remaining];
  }
}

export class ObiVector<T> extends ObiBase<T[]> {
  static readonly REGEX = /^\[.*\]$/;
  private readonly lengthEncoder = new ObiInteger("u32");
  private readonly itemEncoder: ObiBase<T>;

  constructor(schema: string) {
    super();
    this.itemEncoder = ObiSpec.fromSpec(schema.slice(1, -1));
  }

  encode(values: T[]): Buffer {
    const lengthBuff = this.lengthEncoder.encode(BigInt(values.length));
    const itemBuffers = values.map((item) => this.itemEncoder.encode(item));
    return Buffer.concat([lengthBuff, ...itemBuffers]);
  }

  decode(buff: Buffer): [T[], Buffer] {
    const [length, remaining] = this.lengthEncoder.decode(buff);
    const result: T[] = [];
    let current = remaining;

    for (let i = 0; i < Number(length); i++) {
      const [item, next] = this.itemEncoder.decode(current);
      result.push(item);
      current = next;
    }

    return [result, current];
  }
}

export class ObiStruct extends ObiBase<Record<string, any>> {
  static readonly REGEX = /^{.*}$/;
  private readonly fields: KeyValuePair[];

  constructor(schema: string) {
    super();
    this.fields = this.parseSchema(schema);
  }

  private parseSchema(schema: string): KeyValuePair[] {
    const fields: KeyValuePair[] = [];
    let curlyCount = 0;
    let currentKey = "";
    let currentValue = "";
    let isParsingKey = true;

    try {
      for (const char of schema.slice(1)) {
        if (char === "{") {
          curlyCount++;
        } else if (char === "}") {
          if (curlyCount === 0) {
            if (currentKey && currentValue) {
              fields.push({
                key: currentKey.trim(),
                encoder: ObiSpec.fromSpec(currentValue.trim()),
              });
            }
            break;
          }
          curlyCount--;
        } else if (curlyCount === 0) {
          if (char === ":") {
            isParsingKey = false;
            continue;
          } else if (char === ",") {
            if (!currentKey || !currentValue) {
              throw new SchemaError("Invalid struct field format");
            }
            fields.push({
              key: currentKey.trim(),
              encoder: ObiSpec.fromSpec(currentValue.trim()),
            });
            currentKey = "";
            currentValue = "";
            isParsingKey = true;
            continue;
          }
        }

        if (isParsingKey) {
          currentKey += char;
        } else {
          currentValue += char;
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new SchemaError(
          `Failed to parse struct schema: ${error.message}`
        );
      }
      throw new SchemaError("Failed to parse struct schema: Unknown error");
    }

    if (fields.length === 0) {
      throw new SchemaError("Struct must have at least one field");
    }

    return fields;
  }

  encode(value: Record<string, any>): Buffer {
    try {
      const buffers = this.fields.map(({ key, encoder }) => {
        if (!(key in value)) {
          throw new EncodeError(`Missing field "${key}" in struct`);
        }
        return encoder.encode(value[key]);
      });

      return Buffer.concat(buffers);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new EncodeError(`Failed to encode struct: ${error.message}`);
      }
      throw new EncodeError("Failed to encode struct: Unknown error");
    }
  }

  decode(buff: Buffer): [Record<string, any>, Buffer] {
    try {
      const result: Record<string, any> = {};
      let remaining = buff;

      for (const { key, encoder } of this.fields) {
        const [fieldValue, nextRemaining] = encoder.decode(remaining);
        result[key] = fieldValue;
        remaining = nextRemaining;
      }

      return [result, remaining];
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DecodeError(`Failed to decode struct: ${error.message}`);
      }
      throw new DecodeError("Failed to decode struct: Unknown error");
    }
  }
}

export class ObiString extends ObiBase<string> {
  static readonly REGEX = /^string$/;
  private readonly lengthEncoder = new ObiInteger("u32");

  encode(value: string): Buffer {
    const stringBuffer = Buffer.from(value);
    return Buffer.concat([
      this.lengthEncoder.encode(BigInt(stringBuffer.length)),
      stringBuffer,
    ]);
  }

  decode(buff: Buffer): [string, Buffer] {
    const [length, remaining] = this.lengthEncoder.decode(buff);
    const stringLength = Number(length);

    if (remaining.length < stringLength) {
      throw new DecodeError(
        `Not enough bytes to decode string. Expected ${stringLength}, got ${remaining.length}`
      );
    }

    const value = remaining.slice(0, stringLength).toString("utf8");
    return [value, remaining.slice(stringLength)];
  }
}

export class ObiBytes extends ObiBase<Buffer> {
  static readonly REGEX = /^bytes$/;
  private readonly lengthEncoder = new ObiInteger("u32");

  encode(value: Buffer): Buffer {
    return Buffer.concat([
      this.lengthEncoder.encode(BigInt(value.length)),
      value,
    ]);
  }

  decode(buff: Buffer): [Buffer, Buffer] {
    const [length, remaining] = this.lengthEncoder.decode(buff);
    const bytesLength = Number(length);

    if (remaining.length < bytesLength) {
      throw new DecodeError(
        `Not enough bytes to decode bytes. Expected ${bytesLength}, got ${remaining.length}`
      );
    }

    return [
      Buffer.from(remaining.subarray(0, bytesLength)),
      Buffer.from(remaining.subarray(bytesLength)),
    ];
  }
}

export class Obi {
  private readonly inputObi: ObiBase;
  private readonly outputObi: ObiBase;

  constructor(schema: string) {
    const [inputSchema, outputSchema] = this.parseSchema(schema);
    this.inputObi = ObiSpec.fromSpec(inputSchema);
    this.outputObi = ObiSpec.fromSpec(outputSchema);
  }

  private parseSchema(schema: string): [string, string] {
    const normalizedSchema = schema.replace(/\s+/g, "");
    const [input, output] = normalizedSchema.split("/");

    if (!input || !output) {
      throw new SchemaError('Schema must be in the format "input/output"');
    }

    return [input, output];
  }

  public encodeInput(value: any): Buffer {
    try {
      return this.inputObi.encode(value);
    } catch (error: unknown) {
      throw new EncodeError(
        `Failed to encode input: ${(error as Error).message}`
      );
    }
  }

  public decodeInput(buff: Buffer): any {
    const [value, remaining] = this.inputObi.decode(buff);
    if (remaining.length !== 0) {
      throw new DecodeError("Extra bytes found after decoding input");
    }
    return value;
  }

  public encodeOutput(value: any): Buffer {
    try {
      return this.outputObi.encode(value);
    } catch (error: unknown) {
      throw new EncodeError(
        `Failed to encode output: ${(error as Error).message}`
      );
    }
  }

  public decodeOutput(buff: Buffer): any {
    const [value, remaining] = this.outputObi.decode(buff);
    if (remaining.length !== 0) {
      throw new DecodeError("Extra bytes found after decoding output");
    }
    return value;
  }
}

export class ObiSpec {
  static impls = [
    ObiInteger,
    ObiBool,
    ObiVector,
    ObiStruct,
    ObiString,
    ObiBytes,
  ];

  static fromSpec(schema: string): ObiBase {
    for (let impl of ObiSpec.impls) {
      if (schema.match(impl.REGEX)) {
        return new impl(schema);
      }
    }

    throw new SchemaError(`No schema matched: <${schema}>`);
  }
}
