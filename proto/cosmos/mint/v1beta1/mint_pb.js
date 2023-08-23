// source: cosmos/mint/v1beta1/mint.proto
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

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.mint.v1beta1.Minter', null, global);
goog.exportSymbol('proto.cosmos.mint.v1beta1.Params', null, global);
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
proto.cosmos.mint.v1beta1.Minter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.mint.v1beta1.Minter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.mint.v1beta1.Minter.displayName = 'proto.cosmos.mint.v1beta1.Minter';
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
proto.cosmos.mint.v1beta1.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.mint.v1beta1.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.mint.v1beta1.Params.displayName = 'proto.cosmos.mint.v1beta1.Params';
}



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
proto.cosmos.mint.v1beta1.Minter.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.mint.v1beta1.Minter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.mint.v1beta1.Minter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.mint.v1beta1.Minter.toObject = function(includeInstance, msg) {
  var f, obj = {
    inflation: jspb.Message.getFieldWithDefault(msg, 1, ""),
    annualProvisions: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.mint.v1beta1.Minter}
 */
proto.cosmos.mint.v1beta1.Minter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.mint.v1beta1.Minter;
  return proto.cosmos.mint.v1beta1.Minter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.mint.v1beta1.Minter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.mint.v1beta1.Minter}
 */
proto.cosmos.mint.v1beta1.Minter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInflation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnnualProvisions(value);
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
proto.cosmos.mint.v1beta1.Minter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.mint.v1beta1.Minter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.mint.v1beta1.Minter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.mint.v1beta1.Minter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInflation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnnualProvisions();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string inflation = 1;
 * @return {string}
 */
proto.cosmos.mint.v1beta1.Minter.prototype.getInflation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.mint.v1beta1.Minter} returns this
 */
proto.cosmos.mint.v1beta1.Minter.prototype.setInflation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string annual_provisions = 2;
 * @return {string}
 */
proto.cosmos.mint.v1beta1.Minter.prototype.getAnnualProvisions = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.mint.v1beta1.Minter} returns this
 */
proto.cosmos.mint.v1beta1.Minter.prototype.setAnnualProvisions = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.cosmos.mint.v1beta1.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.mint.v1beta1.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.mint.v1beta1.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.mint.v1beta1.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    mintDenom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inflationRateChange: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inflationMax: jspb.Message.getFieldWithDefault(msg, 3, ""),
    inflationMin: jspb.Message.getFieldWithDefault(msg, 4, ""),
    goalBonded: jspb.Message.getFieldWithDefault(msg, 5, ""),
    blocksPerYear: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.cosmos.mint.v1beta1.Params}
 */
proto.cosmos.mint.v1beta1.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.mint.v1beta1.Params;
  return proto.cosmos.mint.v1beta1.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.mint.v1beta1.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.mint.v1beta1.Params}
 */
proto.cosmos.mint.v1beta1.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMintDenom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInflationRateChange(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInflationMax(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInflationMin(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoalBonded(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlocksPerYear(value);
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
proto.cosmos.mint.v1beta1.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.mint.v1beta1.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.mint.v1beta1.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.mint.v1beta1.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMintDenom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInflationRateChange();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInflationMax();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInflationMin();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGoalBonded();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBlocksPerYear();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional string mint_denom = 1;
 * @return {string}
 */
proto.cosmos.mint.v1beta1.Params.prototype.getMintDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.mint.v1beta1.Params} returns this
 */
proto.cosmos.mint.v1beta1.Params.prototype.setMintDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string inflation_rate_change = 2;
 * @return {string}
 */
proto.cosmos.mint.v1beta1.Params.prototype.getInflationRateChange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.mint.v1beta1.Params} returns this
 */
proto.cosmos.mint.v1beta1.Params.prototype.setInflationRateChange = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string inflation_max = 3;
 * @return {string}
 */
proto.cosmos.mint.v1beta1.Params.prototype.getInflationMax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.mint.v1beta1.Params} returns this
 */
proto.cosmos.mint.v1beta1.Params.prototype.setInflationMax = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string inflation_min = 4;
 * @return {string}
 */
proto.cosmos.mint.v1beta1.Params.prototype.getInflationMin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.mint.v1beta1.Params} returns this
 */
proto.cosmos.mint.v1beta1.Params.prototype.setInflationMin = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string goal_bonded = 5;
 * @return {string}
 */
proto.cosmos.mint.v1beta1.Params.prototype.getGoalBonded = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.mint.v1beta1.Params} returns this
 */
proto.cosmos.mint.v1beta1.Params.prototype.setGoalBonded = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 blocks_per_year = 6;
 * @return {number}
 */
proto.cosmos.mint.v1beta1.Params.prototype.getBlocksPerYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.mint.v1beta1.Params} returns this
 */
proto.cosmos.mint.v1beta1.Params.prototype.setBlocksPerYear = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.cosmos.mint.v1beta1);
