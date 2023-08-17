// source: cosmos/orm/v1alpha1/schema.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor', null, global);
goog.exportSymbol('proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry', null, global);
goog.exportSymbol('proto.cosmos.orm.v1alpha1.StorageType', null, global);
goog.exportSymbol('proto.cosmos.orm.v1alpha1.moduleSchema', null, global);
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
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.repeatedFields_, null);
};
goog.inherits(proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.displayName = 'proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor';
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
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.displayName = 'proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.repeatedFields_ = [1];



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
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    schemaFileList: jspb.Message.toObjectList(msg.getSchemaFileList(),
    proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.toObject, includeInstance),
    prefix: msg.getPrefix_asB64()
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
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor;
  return proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry;
      reader.readMessage(value,proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.deserializeBinaryFromReader);
      msg.addSchemaFile(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrefix(value);
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
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.serializeBinaryToWriter
    );
  }
  f = message.getPrefix_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
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
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    protoFileName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    storageType: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry;
  return proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtoFileName(value);
      break;
    case 3:
      var value = /** @type {!proto.cosmos.orm.v1alpha1.StorageType} */ (reader.readEnum());
      msg.setStorageType(value);
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
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProtoFileName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStorageType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry} returns this
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string proto_file_name = 2;
 * @return {string}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.prototype.getProtoFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry} returns this
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.prototype.setProtoFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional StorageType storage_type = 3;
 * @return {!proto.cosmos.orm.v1alpha1.StorageType}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.prototype.getStorageType = function() {
  return /** @type {!proto.cosmos.orm.v1alpha1.StorageType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cosmos.orm.v1alpha1.StorageType} value
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry} returns this
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry.prototype.setStorageType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated FileEntry schema_file = 1;
 * @return {!Array<!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry>}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.getSchemaFileList = function() {
  return /** @type{!Array<!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry, 1));
};


/**
 * @param {!Array<!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry>} value
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor} returns this
*/
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.setSchemaFileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.addSchemaFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor} returns this
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.clearSchemaFileList = function() {
  return this.setSchemaFileList([]);
};


/**
 * optional bytes prefix = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.getPrefix = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes prefix = 2;
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {string}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.getPrefix_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrefix()));
};


/**
 * optional bytes prefix = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {!Uint8Array}
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.getPrefix_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrefix()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor} returns this
 */
proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.cosmos.orm.v1alpha1.StorageType = {
  STORAGE_TYPE_DEFAULT_UNSPECIFIED: 0,
  STORAGE_TYPE_MEMORY: 1,
  STORAGE_TYPE_TRANSIENT: 2,
  STORAGE_TYPE_INDEX: 3,
  STORAGE_TYPE_COMMITMENT: 4
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `moduleSchema`.
 * @type {!jspb.ExtensionFieldInfo<!proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor>}
 */
proto.cosmos.orm.v1alpha1.moduleSchema = new jspb.ExtensionFieldInfo(
    104503792,
    {moduleSchema: 0},
    proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[104503792] = new jspb.ExtensionFieldBinaryInfo(
    proto.cosmos.orm.v1alpha1.moduleSchema,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.serializeBinaryToWriter,
    proto.cosmos.orm.v1alpha1.ModuleSchemaDescriptor.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[104503792] = proto.cosmos.orm.v1alpha1.moduleSchema;

goog.object.extend(exports, proto.cosmos.orm.v1alpha1);
