export class DecodeError extends Error {
  constructor(message: string) {
    super(`Decode Error: ${message}`);
    this.name = "DecodeError";
  }
}

export class SchemaError extends Error {
  constructor(message: string) {
    super(`Schema Error: ${message}`);
    this.name = "SchemaError";
  }
}

export class EncodeError extends Error {
  constructor(message: string) {
    super(`Encode Error: ${message}`);
    this.name = "EncodeError";
  }
}
