//@ts-nocheck
/** Encoder is an enumerator that defines the mode of encoding message in tss module. */
export enum Encoder {
  /** ENCODER_UNSPECIFIED - ENCODER_UNSPECIFIED is an unspecified encoder mode. */
  ENCODER_UNSPECIFIED = 0,
  /** ENCODER_FIXED_POINT_ABI - ENCODER_FIXED_POINT_ABI is a fixed-point price abi encoder (price * 10^9). */
  ENCODER_FIXED_POINT_ABI = 1,
  /** ENCODER_TICK_ABI - ENCODER_TICK_ABI is a tick abi encoder. */
  ENCODER_TICK_ABI = 2,
  UNRECOGNIZED = -1,
}
export const EncoderSDKType = Encoder;
export const EncoderAmino = Encoder;
export function encoderFromJSON(object: any): Encoder {
  switch (object) {
    case 0:
    case "ENCODER_UNSPECIFIED":
      return Encoder.ENCODER_UNSPECIFIED;
    case 1:
    case "ENCODER_FIXED_POINT_ABI":
      return Encoder.ENCODER_FIXED_POINT_ABI;
    case 2:
    case "ENCODER_TICK_ABI":
      return Encoder.ENCODER_TICK_ABI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Encoder.UNRECOGNIZED;
  }
}
export function encoderToJSON(object: Encoder): string {
  switch (object) {
    case Encoder.ENCODER_UNSPECIFIED:
      return "ENCODER_UNSPECIFIED";
    case Encoder.ENCODER_FIXED_POINT_ABI:
      return "ENCODER_FIXED_POINT_ABI";
    case Encoder.ENCODER_TICK_ABI:
      return "ENCODER_TICK_ABI";
    case Encoder.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}