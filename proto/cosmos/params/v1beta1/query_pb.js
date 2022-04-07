// source: cosmos/params/v1beta1/query.proto
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
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var cosmos_params_v1beta1_params_pb = require('../../../cosmos/params/v1beta1/params_pb.js');
goog.object.extend(proto, cosmos_params_v1beta1_params_pb);
goog.exportSymbol('proto.cosmos.params.v1beta1.QueryParamsRequest', null, global);
goog.exportSymbol('proto.cosmos.params.v1beta1.QueryParamsResponse', null, global);
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
proto.cosmos.params.v1beta1.QueryParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.params.v1beta1.QueryParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.params.v1beta1.QueryParamsRequest.displayName = 'proto.cosmos.params.v1beta1.QueryParamsRequest';
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
proto.cosmos.params.v1beta1.QueryParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.params.v1beta1.QueryParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.params.v1beta1.QueryParamsResponse.displayName = 'proto.cosmos.params.v1beta1.QueryParamsResponse';
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
proto.cosmos.params.v1beta1.QueryParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.params.v1beta1.QueryParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.params.v1beta1.QueryParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.params.v1beta1.QueryParamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subspace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.params.v1beta1.QueryParamsRequest}
 */
proto.cosmos.params.v1beta1.QueryParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.params.v1beta1.QueryParamsRequest;
  return proto.cosmos.params.v1beta1.QueryParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.params.v1beta1.QueryParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.params.v1beta1.QueryParamsRequest}
 */
proto.cosmos.params.v1beta1.QueryParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubspace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.cosmos.params.v1beta1.QueryParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.params.v1beta1.QueryParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.params.v1beta1.QueryParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.params.v1beta1.QueryParamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubspace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string subspace = 1;
 * @return {string}
 */
proto.cosmos.params.v1beta1.QueryParamsRequest.prototype.getSubspace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.params.v1beta1.QueryParamsRequest} returns this
 */
proto.cosmos.params.v1beta1.QueryParamsRequest.prototype.setSubspace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.cosmos.params.v1beta1.QueryParamsRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.params.v1beta1.QueryParamsRequest} returns this
 */
proto.cosmos.params.v1beta1.QueryParamsRequest.prototype.setKey = function(value) {
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
proto.cosmos.params.v1beta1.QueryParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.params.v1beta1.QueryParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.params.v1beta1.QueryParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.params.v1beta1.QueryParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    param: (f = msg.getParam()) && cosmos_params_v1beta1_params_pb.ParamChange.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.params.v1beta1.QueryParamsResponse}
 */
proto.cosmos.params.v1beta1.QueryParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.params.v1beta1.QueryParamsResponse;
  return proto.cosmos.params.v1beta1.QueryParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.params.v1beta1.QueryParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.params.v1beta1.QueryParamsResponse}
 */
proto.cosmos.params.v1beta1.QueryParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_params_v1beta1_params_pb.ParamChange;
      reader.readMessage(value,cosmos_params_v1beta1_params_pb.ParamChange.deserializeBinaryFromReader);
      msg.setParam(value);
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
proto.cosmos.params.v1beta1.QueryParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.params.v1beta1.QueryParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.params.v1beta1.QueryParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.params.v1beta1.QueryParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_params_v1beta1_params_pb.ParamChange.serializeBinaryToWriter
    );
  }
};


/**
 * optional ParamChange param = 1;
 * @return {?proto.cosmos.params.v1beta1.ParamChange}
 */
proto.cosmos.params.v1beta1.QueryParamsResponse.prototype.getParam = function() {
  return /** @type{?proto.cosmos.params.v1beta1.ParamChange} */ (
    jspb.Message.getWrapperField(this, cosmos_params_v1beta1_params_pb.ParamChange, 1));
};


/**
 * @param {?proto.cosmos.params.v1beta1.ParamChange|undefined} value
 * @return {!proto.cosmos.params.v1beta1.QueryParamsResponse} returns this
*/
proto.cosmos.params.v1beta1.QueryParamsResponse.prototype.setParam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.params.v1beta1.QueryParamsResponse} returns this
 */
proto.cosmos.params.v1beta1.QueryParamsResponse.prototype.clearParam = function() {
  return this.setParam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.params.v1beta1.QueryParamsResponse.prototype.hasParam = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.cosmos.params.v1beta1);
