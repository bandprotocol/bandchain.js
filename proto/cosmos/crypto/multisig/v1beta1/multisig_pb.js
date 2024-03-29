// source: cosmos/crypto/multisig/v1beta1/multisig.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.cosmos.crypto.multisig.v1beta1.CompactBitArray', null, global);
goog.exportSymbol('proto.cosmos.crypto.multisig.v1beta1.MultiSignature', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.crypto.multisig.v1beta1.MultiSignature.repeatedFields_, null);
};
goog.inherits(proto.cosmos.crypto.multisig.v1beta1.MultiSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crypto.multisig.v1beta1.MultiSignature.displayName = 'proto.cosmos.crypto.multisig.v1beta1.MultiSignature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.crypto.multisig.v1beta1.CompactBitArray, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.displayName = 'proto.cosmos.crypto.multisig.v1beta1.CompactBitArray';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crypto.multisig.v1beta1.MultiSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crypto.multisig.v1beta1.MultiSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    signaturesList: msg.getSignaturesList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.crypto.multisig.v1beta1.MultiSignature}
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crypto.multisig.v1beta1.MultiSignature;
  return proto.cosmos.crypto.multisig.v1beta1.MultiSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crypto.multisig.v1beta1.MultiSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crypto.multisig.v1beta1.MultiSignature}
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSignatures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crypto.multisig.v1beta1.MultiSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crypto.multisig.v1beta1.MultiSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignaturesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes signatures = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.prototype.getSignaturesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes signatures = 1;
 * This is a type-conversion wrapper around `getSignaturesList()`
 * @return {!Array<string>}
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.prototype.getSignaturesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSignaturesList()));
};


/**
 * repeated bytes signatures = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignaturesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.prototype.getSignaturesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSignaturesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.cosmos.crypto.multisig.v1beta1.MultiSignature} returns this
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.prototype.setSignaturesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.cosmos.crypto.multisig.v1beta1.MultiSignature} returns this
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.prototype.addSignatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.crypto.multisig.v1beta1.MultiSignature} returns this
 */
proto.cosmos.crypto.multisig.v1beta1.MultiSignature.prototype.clearSignaturesList = function() {
  return this.setSignaturesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crypto.multisig.v1beta1.CompactBitArray} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.toObject = function(includeInstance, msg) {
  var f, obj = {
    extraBitsStored: jspb.Message.getFieldWithDefault(msg, 1, 0),
    elems: msg.getElems_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.crypto.multisig.v1beta1.CompactBitArray}
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crypto.multisig.v1beta1.CompactBitArray;
  return proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crypto.multisig.v1beta1.CompactBitArray} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crypto.multisig.v1beta1.CompactBitArray}
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExtraBitsStored(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setElems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crypto.multisig.v1beta1.CompactBitArray} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExtraBitsStored();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getElems_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 extra_bits_stored = 1;
 * @return {number}
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.getExtraBitsStored = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.crypto.multisig.v1beta1.CompactBitArray} returns this
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.setExtraBitsStored = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes elems = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.getElems = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes elems = 2;
 * This is a type-conversion wrapper around `getElems()`
 * @return {string}
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.getElems_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getElems()));
};


/**
 * optional bytes elems = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getElems()`
 * @return {!Uint8Array}
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.getElems_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getElems()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.crypto.multisig.v1beta1.CompactBitArray} returns this
 */
proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.setElems = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.cosmos.crypto.multisig.v1beta1);
