// source: council/v1beta1/tx.proto
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

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var cosmos_proto_cosmos_pb = require('../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
var cosmos_params_v1beta1_params_pb = require('../../cosmos/params/v1beta1/params_pb.js');
goog.object.extend(proto, cosmos_params_v1beta1_params_pb);
var council_v1beta1_types_pb = require('../../council/v1beta1/types_pb.js');
goog.object.extend(proto, council_v1beta1_types_pb);
goog.exportSymbol('proto.council.v1beta1.MsgExecLegacyContent', null, global);
goog.exportSymbol('proto.council.v1beta1.MsgExecLegacyContentResponse', null, global);
goog.exportSymbol('proto.council.v1beta1.MsgSubmitProposal', null, global);
goog.exportSymbol('proto.council.v1beta1.MsgSubmitProposalResponse', null, global);
goog.exportSymbol('proto.council.v1beta1.MsgVote', null, global);
goog.exportSymbol('proto.council.v1beta1.MsgVoteResponse', null, global);
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
proto.council.v1beta1.MsgSubmitProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.council.v1beta1.MsgSubmitProposal.repeatedFields_, null);
};
goog.inherits(proto.council.v1beta1.MsgSubmitProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.council.v1beta1.MsgSubmitProposal.displayName = 'proto.council.v1beta1.MsgSubmitProposal';
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
proto.council.v1beta1.MsgSubmitProposalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.council.v1beta1.MsgSubmitProposalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.council.v1beta1.MsgSubmitProposalResponse.displayName = 'proto.council.v1beta1.MsgSubmitProposalResponse';
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
proto.council.v1beta1.MsgExecLegacyContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.council.v1beta1.MsgExecLegacyContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.council.v1beta1.MsgExecLegacyContent.displayName = 'proto.council.v1beta1.MsgExecLegacyContent';
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
proto.council.v1beta1.MsgExecLegacyContentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.council.v1beta1.MsgExecLegacyContentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.council.v1beta1.MsgExecLegacyContentResponse.displayName = 'proto.council.v1beta1.MsgExecLegacyContentResponse';
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
proto.council.v1beta1.MsgVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.council.v1beta1.MsgVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.council.v1beta1.MsgVote.displayName = 'proto.council.v1beta1.MsgVote';
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
proto.council.v1beta1.MsgVoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.council.v1beta1.MsgVoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.council.v1beta1.MsgVoteResponse.displayName = 'proto.council.v1beta1.MsgVoteResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.council.v1beta1.MsgSubmitProposal.repeatedFields_ = [3];



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
proto.council.v1beta1.MsgSubmitProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.council.v1beta1.MsgSubmitProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.council.v1beta1.MsgSubmitProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgSubmitProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    council: jspb.Message.getFieldWithDefault(msg, 1, 0),
    proposer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    google_protobuf_any_pb.Any.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    metadata: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.council.v1beta1.MsgSubmitProposal}
 */
proto.council.v1beta1.MsgSubmitProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.council.v1beta1.MsgSubmitProposal;
  return proto.council.v1beta1.MsgSubmitProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.council.v1beta1.MsgSubmitProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.council.v1beta1.MsgSubmitProposal}
 */
proto.council.v1beta1.MsgSubmitProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.council.v1beta1.CouncilType} */ (reader.readEnum());
      msg.setCouncil(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposer(value);
      break;
    case 3:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadata(value);
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
proto.council.v1beta1.MsgSubmitProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.council.v1beta1.MsgSubmitProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.council.v1beta1.MsgSubmitProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgSubmitProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCouncil();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProposer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMetadata();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional CouncilType council = 1;
 * @return {!proto.council.v1beta1.CouncilType}
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.getCouncil = function() {
  return /** @type {!proto.council.v1beta1.CouncilType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.council.v1beta1.CouncilType} value
 * @return {!proto.council.v1beta1.MsgSubmitProposal} returns this
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.setCouncil = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string proposer = 2;
 * @return {string}
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.getProposer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.council.v1beta1.MsgSubmitProposal} returns this
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.setProposer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated google.protobuf.Any messages = 3;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.council.v1beta1.MsgSubmitProposal} returns this
*/
proto.council.v1beta1.MsgSubmitProposal.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.council.v1beta1.MsgSubmitProposal} returns this
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.council.v1beta1.MsgSubmitProposal} returns this
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string metadata = 5;
 * @return {string}
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.council.v1beta1.MsgSubmitProposal} returns this
 */
proto.council.v1beta1.MsgSubmitProposal.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.council.v1beta1.MsgSubmitProposalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.council.v1beta1.MsgSubmitProposalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.council.v1beta1.MsgSubmitProposalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgSubmitProposalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.council.v1beta1.MsgSubmitProposalResponse}
 */
proto.council.v1beta1.MsgSubmitProposalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.council.v1beta1.MsgSubmitProposalResponse;
  return proto.council.v1beta1.MsgSubmitProposalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.council.v1beta1.MsgSubmitProposalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.council.v1beta1.MsgSubmitProposalResponse}
 */
proto.council.v1beta1.MsgSubmitProposalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposalId(value);
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
proto.council.v1beta1.MsgSubmitProposalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.council.v1beta1.MsgSubmitProposalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.council.v1beta1.MsgSubmitProposalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgSubmitProposalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 proposal_id = 1;
 * @return {number}
 */
proto.council.v1beta1.MsgSubmitProposalResponse.prototype.getProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.council.v1beta1.MsgSubmitProposalResponse} returns this
 */
proto.council.v1beta1.MsgSubmitProposalResponse.prototype.setProposalId = function(value) {
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
proto.council.v1beta1.MsgExecLegacyContent.prototype.toObject = function(opt_includeInstance) {
  return proto.council.v1beta1.MsgExecLegacyContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.council.v1beta1.MsgExecLegacyContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgExecLegacyContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    council: jspb.Message.getFieldWithDefault(msg, 1, 0),
    content: (f = msg.getContent()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    authority: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.council.v1beta1.MsgExecLegacyContent}
 */
proto.council.v1beta1.MsgExecLegacyContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.council.v1beta1.MsgExecLegacyContent;
  return proto.council.v1beta1.MsgExecLegacyContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.council.v1beta1.MsgExecLegacyContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.council.v1beta1.MsgExecLegacyContent}
 */
proto.council.v1beta1.MsgExecLegacyContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.council.v1beta1.CouncilType} */ (reader.readEnum());
      msg.setCouncil(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthority(value);
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
proto.council.v1beta1.MsgExecLegacyContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.council.v1beta1.MsgExecLegacyContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.council.v1beta1.MsgExecLegacyContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgExecLegacyContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCouncil();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getAuthority();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional CouncilType council = 1;
 * @return {!proto.council.v1beta1.CouncilType}
 */
proto.council.v1beta1.MsgExecLegacyContent.prototype.getCouncil = function() {
  return /** @type {!proto.council.v1beta1.CouncilType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.council.v1beta1.CouncilType} value
 * @return {!proto.council.v1beta1.MsgExecLegacyContent} returns this
 */
proto.council.v1beta1.MsgExecLegacyContent.prototype.setCouncil = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Any content = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.council.v1beta1.MsgExecLegacyContent.prototype.getContent = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.council.v1beta1.MsgExecLegacyContent} returns this
*/
proto.council.v1beta1.MsgExecLegacyContent.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.council.v1beta1.MsgExecLegacyContent} returns this
 */
proto.council.v1beta1.MsgExecLegacyContent.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.council.v1beta1.MsgExecLegacyContent.prototype.hasContent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string authority = 3;
 * @return {string}
 */
proto.council.v1beta1.MsgExecLegacyContent.prototype.getAuthority = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.council.v1beta1.MsgExecLegacyContent} returns this
 */
proto.council.v1beta1.MsgExecLegacyContent.prototype.setAuthority = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.council.v1beta1.MsgExecLegacyContentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.council.v1beta1.MsgExecLegacyContentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.council.v1beta1.MsgExecLegacyContentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgExecLegacyContentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.council.v1beta1.MsgExecLegacyContentResponse}
 */
proto.council.v1beta1.MsgExecLegacyContentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.council.v1beta1.MsgExecLegacyContentResponse;
  return proto.council.v1beta1.MsgExecLegacyContentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.council.v1beta1.MsgExecLegacyContentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.council.v1beta1.MsgExecLegacyContentResponse}
 */
proto.council.v1beta1.MsgExecLegacyContentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.council.v1beta1.MsgExecLegacyContentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.council.v1beta1.MsgExecLegacyContentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.council.v1beta1.MsgExecLegacyContentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgExecLegacyContentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.council.v1beta1.MsgVote.prototype.toObject = function(opt_includeInstance) {
  return proto.council.v1beta1.MsgVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.council.v1beta1.MsgVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgVote.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    voter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    option: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.council.v1beta1.MsgVote}
 */
proto.council.v1beta1.MsgVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.council.v1beta1.MsgVote;
  return proto.council.v1beta1.MsgVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.council.v1beta1.MsgVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.council.v1beta1.MsgVote}
 */
proto.council.v1beta1.MsgVote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposalId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoter(value);
      break;
    case 3:
      var value = /** @type {!proto.council.v1beta1.VoteOption} */ (reader.readEnum());
      msg.setOption(value);
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
proto.council.v1beta1.MsgVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.council.v1beta1.MsgVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.council.v1beta1.MsgVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgVote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getVoter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOption();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional uint64 proposal_id = 1;
 * @return {number}
 */
proto.council.v1beta1.MsgVote.prototype.getProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.council.v1beta1.MsgVote} returns this
 */
proto.council.v1beta1.MsgVote.prototype.setProposalId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string voter = 2;
 * @return {string}
 */
proto.council.v1beta1.MsgVote.prototype.getVoter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.council.v1beta1.MsgVote} returns this
 */
proto.council.v1beta1.MsgVote.prototype.setVoter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional VoteOption option = 3;
 * @return {!proto.council.v1beta1.VoteOption}
 */
proto.council.v1beta1.MsgVote.prototype.getOption = function() {
  return /** @type {!proto.council.v1beta1.VoteOption} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.council.v1beta1.VoteOption} value
 * @return {!proto.council.v1beta1.MsgVote} returns this
 */
proto.council.v1beta1.MsgVote.prototype.setOption = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.council.v1beta1.MsgVoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.council.v1beta1.MsgVoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.council.v1beta1.MsgVoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgVoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.council.v1beta1.MsgVoteResponse}
 */
proto.council.v1beta1.MsgVoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.council.v1beta1.MsgVoteResponse;
  return proto.council.v1beta1.MsgVoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.council.v1beta1.MsgVoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.council.v1beta1.MsgVoteResponse}
 */
proto.council.v1beta1.MsgVoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.council.v1beta1.MsgVoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.council.v1beta1.MsgVoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.council.v1beta1.MsgVoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.council.v1beta1.MsgVoteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.council.v1beta1);
