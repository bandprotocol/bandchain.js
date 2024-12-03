// source: cosmos/msg/textual/v1/textual.proto
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
goog.exportSymbol('proto.cosmos.msg.textual.v1.expertCustomRenderer', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `expertCustomRenderer`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.cosmos.msg.textual.v1.expertCustomRenderer = new jspb.ExtensionFieldInfo(
    11110009,
    {expertCustomRenderer: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[11110009] = new jspb.ExtensionFieldBinaryInfo(
    proto.cosmos.msg.textual.v1.expertCustomRenderer,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[11110009] = proto.cosmos.msg.textual.v1.expertCustomRenderer;

goog.object.extend(exports, proto.cosmos.msg.textual.v1);
