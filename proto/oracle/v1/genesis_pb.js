// source: oracle/v1/genesis.proto
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

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var oracle_v1_oracle_pb = require('../../oracle/v1/oracle_pb.js');
goog.object.extend(proto, oracle_v1_oracle_pb);
goog.exportSymbol('proto.oracle.v1.GenesisState', null, global);
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
proto.oracle.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.oracle.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.oracle.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.oracle.v1.GenesisState.displayName = 'proto.oracle.v1.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.oracle.v1.GenesisState.repeatedFields_ = [2,3];



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
proto.oracle.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.oracle.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.oracle.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracle.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && oracle_v1_oracle_pb.Params.toObject(includeInstance, f),
    dataSourcesList: jspb.Message.toObjectList(msg.getDataSourcesList(),
    oracle_v1_oracle_pb.DataSource.toObject, includeInstance),
    oracleScriptsList: jspb.Message.toObjectList(msg.getOracleScriptsList(),
    oracle_v1_oracle_pb.OracleScript.toObject, includeInstance)
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
 * @return {!proto.oracle.v1.GenesisState}
 */
proto.oracle.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.oracle.v1.GenesisState;
  return proto.oracle.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.oracle.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.oracle.v1.GenesisState}
 */
proto.oracle.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new oracle_v1_oracle_pb.Params;
      reader.readMessage(value,oracle_v1_oracle_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new oracle_v1_oracle_pb.DataSource;
      reader.readMessage(value,oracle_v1_oracle_pb.DataSource.deserializeBinaryFromReader);
      msg.addDataSources(value);
      break;
    case 3:
      var value = new oracle_v1_oracle_pb.OracleScript;
      reader.readMessage(value,oracle_v1_oracle_pb.OracleScript.deserializeBinaryFromReader);
      msg.addOracleScripts(value);
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
proto.oracle.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.oracle.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.oracle.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracle.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      oracle_v1_oracle_pb.Params.serializeBinaryToWriter
    );
  }
  f = message.getDataSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      oracle_v1_oracle_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getOracleScriptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      oracle_v1_oracle_pb.OracleScript.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.oracle.v1.Params}
 */
proto.oracle.v1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.oracle.v1.Params} */ (
    jspb.Message.getWrapperField(this, oracle_v1_oracle_pb.Params, 1));
};


/**
 * @param {?proto.oracle.v1.Params|undefined} value
 * @return {!proto.oracle.v1.GenesisState} returns this
*/
proto.oracle.v1.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.oracle.v1.GenesisState} returns this
 */
proto.oracle.v1.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.oracle.v1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DataSource data_sources = 2;
 * @return {!Array<!proto.oracle.v1.DataSource>}
 */
proto.oracle.v1.GenesisState.prototype.getDataSourcesList = function() {
  return /** @type{!Array<!proto.oracle.v1.DataSource>} */ (
    jspb.Message.getRepeatedWrapperField(this, oracle_v1_oracle_pb.DataSource, 2));
};


/**
 * @param {!Array<!proto.oracle.v1.DataSource>} value
 * @return {!proto.oracle.v1.GenesisState} returns this
*/
proto.oracle.v1.GenesisState.prototype.setDataSourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.oracle.v1.DataSource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.oracle.v1.DataSource}
 */
proto.oracle.v1.GenesisState.prototype.addDataSources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.oracle.v1.DataSource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.oracle.v1.GenesisState} returns this
 */
proto.oracle.v1.GenesisState.prototype.clearDataSourcesList = function() {
  return this.setDataSourcesList([]);
};


/**
 * repeated OracleScript oracle_scripts = 3;
 * @return {!Array<!proto.oracle.v1.OracleScript>}
 */
proto.oracle.v1.GenesisState.prototype.getOracleScriptsList = function() {
  return /** @type{!Array<!proto.oracle.v1.OracleScript>} */ (
    jspb.Message.getRepeatedWrapperField(this, oracle_v1_oracle_pb.OracleScript, 3));
};


/**
 * @param {!Array<!proto.oracle.v1.OracleScript>} value
 * @return {!proto.oracle.v1.GenesisState} returns this
*/
proto.oracle.v1.GenesisState.prototype.setOracleScriptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.oracle.v1.OracleScript=} opt_value
 * @param {number=} opt_index
 * @return {!proto.oracle.v1.OracleScript}
 */
proto.oracle.v1.GenesisState.prototype.addOracleScripts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.oracle.v1.OracleScript, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.oracle.v1.GenesisState} returns this
 */
proto.oracle.v1.GenesisState.prototype.clearOracleScriptsList = function() {
  return this.setOracleScriptsList([]);
};


goog.object.extend(exports, proto.oracle.v1);
