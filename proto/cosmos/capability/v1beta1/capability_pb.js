// source: cosmos/capability/v1beta1/capability.proto
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
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.capability.v1beta1.Capability', null, global);
goog.exportSymbol('proto.cosmos.capability.v1beta1.CapabilityOwners', null, global);
goog.exportSymbol('proto.cosmos.capability.v1beta1.Owner', null, global);
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
proto.cosmos.capability.v1beta1.Capability = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.capability.v1beta1.Capability, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.capability.v1beta1.Capability.displayName = 'proto.cosmos.capability.v1beta1.Capability';
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
proto.cosmos.capability.v1beta1.Owner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.capability.v1beta1.Owner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.capability.v1beta1.Owner.displayName = 'proto.cosmos.capability.v1beta1.Owner';
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
proto.cosmos.capability.v1beta1.CapabilityOwners = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.capability.v1beta1.CapabilityOwners.repeatedFields_, null);
};
goog.inherits(proto.cosmos.capability.v1beta1.CapabilityOwners, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.capability.v1beta1.CapabilityOwners.displayName = 'proto.cosmos.capability.v1beta1.CapabilityOwners';
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
proto.cosmos.capability.v1beta1.Capability.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.capability.v1beta1.Capability.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.capability.v1beta1.Capability} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.capability.v1beta1.Capability.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.cosmos.capability.v1beta1.Capability}
 */
proto.cosmos.capability.v1beta1.Capability.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.capability.v1beta1.Capability;
  return proto.cosmos.capability.v1beta1.Capability.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.capability.v1beta1.Capability} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.capability.v1beta1.Capability}
 */
proto.cosmos.capability.v1beta1.Capability.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndex(value);
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
proto.cosmos.capability.v1beta1.Capability.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.capability.v1beta1.Capability.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.capability.v1beta1.Capability} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.capability.v1beta1.Capability.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 index = 1;
 * @return {number}
 */
proto.cosmos.capability.v1beta1.Capability.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.capability.v1beta1.Capability} returns this
 */
proto.cosmos.capability.v1beta1.Capability.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.cosmos.capability.v1beta1.Owner.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.capability.v1beta1.Owner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.capability.v1beta1.Owner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.capability.v1beta1.Owner.toObject = function(includeInstance, msg) {
  var f, obj = {
    module: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.capability.v1beta1.Owner}
 */
proto.cosmos.capability.v1beta1.Owner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.capability.v1beta1.Owner;
  return proto.cosmos.capability.v1beta1.Owner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.capability.v1beta1.Owner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.capability.v1beta1.Owner}
 */
proto.cosmos.capability.v1beta1.Owner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModule(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.cosmos.capability.v1beta1.Owner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.capability.v1beta1.Owner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.capability.v1beta1.Owner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.capability.v1beta1.Owner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModule();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string module = 1;
 * @return {string}
 */
proto.cosmos.capability.v1beta1.Owner.prototype.getModule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.capability.v1beta1.Owner} returns this
 */
proto.cosmos.capability.v1beta1.Owner.prototype.setModule = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.cosmos.capability.v1beta1.Owner.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.capability.v1beta1.Owner} returns this
 */
proto.cosmos.capability.v1beta1.Owner.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.capability.v1beta1.CapabilityOwners.repeatedFields_ = [1];



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
proto.cosmos.capability.v1beta1.CapabilityOwners.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.capability.v1beta1.CapabilityOwners.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.capability.v1beta1.CapabilityOwners} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.capability.v1beta1.CapabilityOwners.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownersList: jspb.Message.toObjectList(msg.getOwnersList(),
    proto.cosmos.capability.v1beta1.Owner.toObject, includeInstance)
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
 * @return {!proto.cosmos.capability.v1beta1.CapabilityOwners}
 */
proto.cosmos.capability.v1beta1.CapabilityOwners.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.capability.v1beta1.CapabilityOwners;
  return proto.cosmos.capability.v1beta1.CapabilityOwners.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.capability.v1beta1.CapabilityOwners} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.capability.v1beta1.CapabilityOwners}
 */
proto.cosmos.capability.v1beta1.CapabilityOwners.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cosmos.capability.v1beta1.Owner;
      reader.readMessage(value,proto.cosmos.capability.v1beta1.Owner.deserializeBinaryFromReader);
      msg.addOwners(value);
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
proto.cosmos.capability.v1beta1.CapabilityOwners.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.capability.v1beta1.CapabilityOwners.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.capability.v1beta1.CapabilityOwners} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.capability.v1beta1.CapabilityOwners.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cosmos.capability.v1beta1.Owner.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Owner owners = 1;
 * @return {!Array<!proto.cosmos.capability.v1beta1.Owner>}
 */
proto.cosmos.capability.v1beta1.CapabilityOwners.prototype.getOwnersList = function() {
  return /** @type{!Array<!proto.cosmos.capability.v1beta1.Owner>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.capability.v1beta1.Owner, 1));
};


/**
 * @param {!Array<!proto.cosmos.capability.v1beta1.Owner>} value
 * @return {!proto.cosmos.capability.v1beta1.CapabilityOwners} returns this
*/
proto.cosmos.capability.v1beta1.CapabilityOwners.prototype.setOwnersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.capability.v1beta1.Owner=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.capability.v1beta1.Owner}
 */
proto.cosmos.capability.v1beta1.CapabilityOwners.prototype.addOwners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.capability.v1beta1.Owner, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.capability.v1beta1.CapabilityOwners} returns this
 */
proto.cosmos.capability.v1beta1.CapabilityOwners.prototype.clearOwnersList = function() {
  return this.setOwnersList([]);
};


goog.object.extend(exports, proto.cosmos.capability.v1beta1);
