// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/ack.proto

import * as jspb from "google-protobuf";

export class IncentivizedAcknowledgement extends jspb.Message {
  getAppAcknowledgement(): Uint8Array | string;
  getAppAcknowledgement_asU8(): Uint8Array;
  getAppAcknowledgement_asB64(): string;
  setAppAcknowledgement(value: Uint8Array | string): void;

  getForwardRelayerAddress(): string;
  setForwardRelayerAddress(value: string): void;

  getUnderlyingAppSuccess(): boolean;
  setUnderlyingAppSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncentivizedAcknowledgement.AsObject;
  static toObject(includeInstance: boolean, msg: IncentivizedAcknowledgement): IncentivizedAcknowledgement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncentivizedAcknowledgement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncentivizedAcknowledgement;
  static deserializeBinaryFromReader(message: IncentivizedAcknowledgement, reader: jspb.BinaryReader): IncentivizedAcknowledgement;
}

export namespace IncentivizedAcknowledgement {
  export type AsObject = {
    appAcknowledgement: Uint8Array | string,
    forwardRelayerAddress: string,
    underlyingAppSuccess: boolean,
  }
}

