// source: cosmos/query/v1/query.proto
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
goog.exportSymbol('proto.cosmos.query.v1.moduleQuerySafe', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `moduleQuerySafe`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.cosmos.query.v1.moduleQuerySafe = new jspb.ExtensionFieldInfo(
    11110001,
    {moduleQuerySafe: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[11110001] = new jspb.ExtensionFieldBinaryInfo(
    proto.cosmos.query.v1.moduleQuerySafe,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[11110001] = proto.cosmos.query.v1.moduleQuerySafe;

goog.object.extend(exports, proto.cosmos.query.v1);
