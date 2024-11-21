// source: cometbft/abci/v1/types.proto
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

var cometbft_crypto_v1_proof_pb = require('../../../cometbft/crypto/v1/proof_pb.js');
goog.object.extend(proto, cometbft_crypto_v1_proof_pb);
var cometbft_types_v1_params_pb = require('../../../cometbft/types/v1/params_pb.js');
goog.object.extend(proto, cometbft_types_v1_params_pb);
var cometbft_types_v1_validator_pb = require('../../../cometbft/types/v1/validator_pb.js');
goog.object.extend(proto, cometbft_types_v1_validator_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.cometbft.abci.v1.ApplySnapshotChunkRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ApplySnapshotChunkResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ApplySnapshotChunkResult', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.CheckTxRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.CheckTxResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.CheckTxType', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.CommitInfo', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.CommitRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.CommitResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.EchoRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.EchoResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.Event', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.EventAttribute', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ExceptionResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ExecTxResult', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ExtendVoteRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ExtendVoteResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ExtendedCommitInfo', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ExtendedVoteInfo', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.FinalizeBlockRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.FinalizeBlockResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.FlushRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.FlushResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.InfoRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.InfoResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.InitChainRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.InitChainResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ListSnapshotsRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ListSnapshotsResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.LoadSnapshotChunkRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.LoadSnapshotChunkResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.Misbehavior', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.MisbehaviorType', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.OfferSnapshotRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.OfferSnapshotResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.OfferSnapshotResult', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.PrepareProposalRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.PrepareProposalResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ProcessProposalRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ProcessProposalResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ProcessProposalStatus', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.QueryRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.QueryResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.Request', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.Request.ValueCase', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.Response', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.Response.ValueCase', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.Snapshot', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.TxResult', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.Validator', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.ValidatorUpdate', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.VerifyVoteExtensionRequest', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.VerifyVoteExtensionResponse', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.VerifyVoteExtensionStatus', null, global);
goog.exportSymbol('proto.cometbft.abci.v1.VoteInfo', null, global);
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
proto.cometbft.abci.v1.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cometbft.abci.v1.Request.oneofGroups_);
};
goog.inherits(proto.cometbft.abci.v1.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.Request.displayName = 'proto.cometbft.abci.v1.Request';
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
proto.cometbft.abci.v1.EchoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.EchoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.EchoRequest.displayName = 'proto.cometbft.abci.v1.EchoRequest';
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
proto.cometbft.abci.v1.FlushRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.FlushRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.FlushRequest.displayName = 'proto.cometbft.abci.v1.FlushRequest';
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
proto.cometbft.abci.v1.InfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.InfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.InfoRequest.displayName = 'proto.cometbft.abci.v1.InfoRequest';
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
proto.cometbft.abci.v1.InitChainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.InitChainRequest.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.InitChainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.InitChainRequest.displayName = 'proto.cometbft.abci.v1.InitChainRequest';
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
proto.cometbft.abci.v1.QueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.QueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.QueryRequest.displayName = 'proto.cometbft.abci.v1.QueryRequest';
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
proto.cometbft.abci.v1.CheckTxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.CheckTxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.CheckTxRequest.displayName = 'proto.cometbft.abci.v1.CheckTxRequest';
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
proto.cometbft.abci.v1.CommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.CommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.CommitRequest.displayName = 'proto.cometbft.abci.v1.CommitRequest';
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
proto.cometbft.abci.v1.ListSnapshotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.ListSnapshotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ListSnapshotsRequest.displayName = 'proto.cometbft.abci.v1.ListSnapshotsRequest';
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
proto.cometbft.abci.v1.OfferSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.OfferSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.OfferSnapshotRequest.displayName = 'proto.cometbft.abci.v1.OfferSnapshotRequest';
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
proto.cometbft.abci.v1.LoadSnapshotChunkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.LoadSnapshotChunkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.LoadSnapshotChunkRequest.displayName = 'proto.cometbft.abci.v1.LoadSnapshotChunkRequest';
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
proto.cometbft.abci.v1.ApplySnapshotChunkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.ApplySnapshotChunkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ApplySnapshotChunkRequest.displayName = 'proto.cometbft.abci.v1.ApplySnapshotChunkRequest';
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
proto.cometbft.abci.v1.PrepareProposalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.PrepareProposalRequest.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.PrepareProposalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.PrepareProposalRequest.displayName = 'proto.cometbft.abci.v1.PrepareProposalRequest';
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
proto.cometbft.abci.v1.ProcessProposalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.ProcessProposalRequest.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.ProcessProposalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ProcessProposalRequest.displayName = 'proto.cometbft.abci.v1.ProcessProposalRequest';
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
proto.cometbft.abci.v1.ExtendVoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.ExtendVoteRequest.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.ExtendVoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ExtendVoteRequest.displayName = 'proto.cometbft.abci.v1.ExtendVoteRequest';
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
proto.cometbft.abci.v1.VerifyVoteExtensionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.VerifyVoteExtensionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.VerifyVoteExtensionRequest.displayName = 'proto.cometbft.abci.v1.VerifyVoteExtensionRequest';
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
proto.cometbft.abci.v1.FinalizeBlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.FinalizeBlockRequest.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.FinalizeBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.FinalizeBlockRequest.displayName = 'proto.cometbft.abci.v1.FinalizeBlockRequest';
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
proto.cometbft.abci.v1.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cometbft.abci.v1.Response.oneofGroups_);
};
goog.inherits(proto.cometbft.abci.v1.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.Response.displayName = 'proto.cometbft.abci.v1.Response';
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
proto.cometbft.abci.v1.ExceptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.ExceptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ExceptionResponse.displayName = 'proto.cometbft.abci.v1.ExceptionResponse';
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
proto.cometbft.abci.v1.EchoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.EchoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.EchoResponse.displayName = 'proto.cometbft.abci.v1.EchoResponse';
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
proto.cometbft.abci.v1.FlushResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.FlushResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.FlushResponse.displayName = 'proto.cometbft.abci.v1.FlushResponse';
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
proto.cometbft.abci.v1.InfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.InfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.InfoResponse.displayName = 'proto.cometbft.abci.v1.InfoResponse';
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
proto.cometbft.abci.v1.InitChainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.InitChainResponse.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.InitChainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.InitChainResponse.displayName = 'proto.cometbft.abci.v1.InitChainResponse';
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
proto.cometbft.abci.v1.QueryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.QueryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.QueryResponse.displayName = 'proto.cometbft.abci.v1.QueryResponse';
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
proto.cometbft.abci.v1.CheckTxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.CheckTxResponse.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.CheckTxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.CheckTxResponse.displayName = 'proto.cometbft.abci.v1.CheckTxResponse';
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
proto.cometbft.abci.v1.CommitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.CommitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.CommitResponse.displayName = 'proto.cometbft.abci.v1.CommitResponse';
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
proto.cometbft.abci.v1.ListSnapshotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.ListSnapshotsResponse.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.ListSnapshotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ListSnapshotsResponse.displayName = 'proto.cometbft.abci.v1.ListSnapshotsResponse';
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
proto.cometbft.abci.v1.OfferSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.OfferSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.OfferSnapshotResponse.displayName = 'proto.cometbft.abci.v1.OfferSnapshotResponse';
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
proto.cometbft.abci.v1.LoadSnapshotChunkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.LoadSnapshotChunkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.LoadSnapshotChunkResponse.displayName = 'proto.cometbft.abci.v1.LoadSnapshotChunkResponse';
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
proto.cometbft.abci.v1.ApplySnapshotChunkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.ApplySnapshotChunkResponse.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.ApplySnapshotChunkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ApplySnapshotChunkResponse.displayName = 'proto.cometbft.abci.v1.ApplySnapshotChunkResponse';
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
proto.cometbft.abci.v1.PrepareProposalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.PrepareProposalResponse.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.PrepareProposalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.PrepareProposalResponse.displayName = 'proto.cometbft.abci.v1.PrepareProposalResponse';
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
proto.cometbft.abci.v1.ProcessProposalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.ProcessProposalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ProcessProposalResponse.displayName = 'proto.cometbft.abci.v1.ProcessProposalResponse';
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
proto.cometbft.abci.v1.ExtendVoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.ExtendVoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ExtendVoteResponse.displayName = 'proto.cometbft.abci.v1.ExtendVoteResponse';
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
proto.cometbft.abci.v1.VerifyVoteExtensionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.VerifyVoteExtensionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.VerifyVoteExtensionResponse.displayName = 'proto.cometbft.abci.v1.VerifyVoteExtensionResponse';
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
proto.cometbft.abci.v1.FinalizeBlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.FinalizeBlockResponse.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.FinalizeBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.FinalizeBlockResponse.displayName = 'proto.cometbft.abci.v1.FinalizeBlockResponse';
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
proto.cometbft.abci.v1.CommitInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.CommitInfo.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.CommitInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.CommitInfo.displayName = 'proto.cometbft.abci.v1.CommitInfo';
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
proto.cometbft.abci.v1.ExtendedCommitInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.ExtendedCommitInfo.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.ExtendedCommitInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ExtendedCommitInfo.displayName = 'proto.cometbft.abci.v1.ExtendedCommitInfo';
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
proto.cometbft.abci.v1.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.Event.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.Event.displayName = 'proto.cometbft.abci.v1.Event';
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
proto.cometbft.abci.v1.EventAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.EventAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.EventAttribute.displayName = 'proto.cometbft.abci.v1.EventAttribute';
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
proto.cometbft.abci.v1.ExecTxResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1.ExecTxResult.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1.ExecTxResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ExecTxResult.displayName = 'proto.cometbft.abci.v1.ExecTxResult';
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
proto.cometbft.abci.v1.TxResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.TxResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.TxResult.displayName = 'proto.cometbft.abci.v1.TxResult';
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
proto.cometbft.abci.v1.Validator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.Validator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.Validator.displayName = 'proto.cometbft.abci.v1.Validator';
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
proto.cometbft.abci.v1.ValidatorUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.ValidatorUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ValidatorUpdate.displayName = 'proto.cometbft.abci.v1.ValidatorUpdate';
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
proto.cometbft.abci.v1.VoteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.VoteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.VoteInfo.displayName = 'proto.cometbft.abci.v1.VoteInfo';
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
proto.cometbft.abci.v1.ExtendedVoteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.ExtendedVoteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.ExtendedVoteInfo.displayName = 'proto.cometbft.abci.v1.ExtendedVoteInfo';
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
proto.cometbft.abci.v1.Misbehavior = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.Misbehavior, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.Misbehavior.displayName = 'proto.cometbft.abci.v1.Misbehavior';
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
proto.cometbft.abci.v1.Snapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1.Snapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1.Snapshot.displayName = 'proto.cometbft.abci.v1.Snapshot';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cometbft.abci.v1.Request.oneofGroups_ = [[1,2,3,5,6,8,11,12,13,14,15,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.cometbft.abci.v1.Request.ValueCase = {
  VALUE_NOT_SET: 0,
  ECHO: 1,
  FLUSH: 2,
  INFO: 3,
  INIT_CHAIN: 5,
  QUERY: 6,
  CHECK_TX: 8,
  COMMIT: 11,
  LIST_SNAPSHOTS: 12,
  OFFER_SNAPSHOT: 13,
  LOAD_SNAPSHOT_CHUNK: 14,
  APPLY_SNAPSHOT_CHUNK: 15,
  PREPARE_PROPOSAL: 16,
  PROCESS_PROPOSAL: 17,
  EXTEND_VOTE: 18,
  VERIFY_VOTE_EXTENSION: 19,
  FINALIZE_BLOCK: 20
};

/**
 * @return {proto.cometbft.abci.v1.Request.ValueCase}
 */
proto.cometbft.abci.v1.Request.prototype.getValueCase = function() {
  return /** @type {proto.cometbft.abci.v1.Request.ValueCase} */(jspb.Message.computeOneofCase(this, proto.cometbft.abci.v1.Request.oneofGroups_[0]));
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
proto.cometbft.abci.v1.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    echo: (f = msg.getEcho()) && proto.cometbft.abci.v1.EchoRequest.toObject(includeInstance, f),
    flush: (f = msg.getFlush()) && proto.cometbft.abci.v1.FlushRequest.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.cometbft.abci.v1.InfoRequest.toObject(includeInstance, f),
    initChain: (f = msg.getInitChain()) && proto.cometbft.abci.v1.InitChainRequest.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && proto.cometbft.abci.v1.QueryRequest.toObject(includeInstance, f),
    checkTx: (f = msg.getCheckTx()) && proto.cometbft.abci.v1.CheckTxRequest.toObject(includeInstance, f),
    commit: (f = msg.getCommit()) && proto.cometbft.abci.v1.CommitRequest.toObject(includeInstance, f),
    listSnapshots: (f = msg.getListSnapshots()) && proto.cometbft.abci.v1.ListSnapshotsRequest.toObject(includeInstance, f),
    offerSnapshot: (f = msg.getOfferSnapshot()) && proto.cometbft.abci.v1.OfferSnapshotRequest.toObject(includeInstance, f),
    loadSnapshotChunk: (f = msg.getLoadSnapshotChunk()) && proto.cometbft.abci.v1.LoadSnapshotChunkRequest.toObject(includeInstance, f),
    applySnapshotChunk: (f = msg.getApplySnapshotChunk()) && proto.cometbft.abci.v1.ApplySnapshotChunkRequest.toObject(includeInstance, f),
    prepareProposal: (f = msg.getPrepareProposal()) && proto.cometbft.abci.v1.PrepareProposalRequest.toObject(includeInstance, f),
    processProposal: (f = msg.getProcessProposal()) && proto.cometbft.abci.v1.ProcessProposalRequest.toObject(includeInstance, f),
    extendVote: (f = msg.getExtendVote()) && proto.cometbft.abci.v1.ExtendVoteRequest.toObject(includeInstance, f),
    verifyVoteExtension: (f = msg.getVerifyVoteExtension()) && proto.cometbft.abci.v1.VerifyVoteExtensionRequest.toObject(includeInstance, f),
    finalizeBlock: (f = msg.getFinalizeBlock()) && proto.cometbft.abci.v1.FinalizeBlockRequest.toObject(includeInstance, f)
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
 * @return {!proto.cometbft.abci.v1.Request}
 */
proto.cometbft.abci.v1.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.Request;
  return proto.cometbft.abci.v1.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.Request}
 */
proto.cometbft.abci.v1.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1.EchoRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.EchoRequest.deserializeBinaryFromReader);
      msg.setEcho(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.FlushRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.FlushRequest.deserializeBinaryFromReader);
      msg.setFlush(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1.InfoRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.InfoRequest.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 5:
      var value = new proto.cometbft.abci.v1.InitChainRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.InitChainRequest.deserializeBinaryFromReader);
      msg.setInitChain(value);
      break;
    case 6:
      var value = new proto.cometbft.abci.v1.QueryRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.QueryRequest.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 8:
      var value = new proto.cometbft.abci.v1.CheckTxRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.CheckTxRequest.deserializeBinaryFromReader);
      msg.setCheckTx(value);
      break;
    case 11:
      var value = new proto.cometbft.abci.v1.CommitRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.CommitRequest.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 12:
      var value = new proto.cometbft.abci.v1.ListSnapshotsRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.ListSnapshotsRequest.deserializeBinaryFromReader);
      msg.setListSnapshots(value);
      break;
    case 13:
      var value = new proto.cometbft.abci.v1.OfferSnapshotRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.OfferSnapshotRequest.deserializeBinaryFromReader);
      msg.setOfferSnapshot(value);
      break;
    case 14:
      var value = new proto.cometbft.abci.v1.LoadSnapshotChunkRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.LoadSnapshotChunkRequest.deserializeBinaryFromReader);
      msg.setLoadSnapshotChunk(value);
      break;
    case 15:
      var value = new proto.cometbft.abci.v1.ApplySnapshotChunkRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.ApplySnapshotChunkRequest.deserializeBinaryFromReader);
      msg.setApplySnapshotChunk(value);
      break;
    case 16:
      var value = new proto.cometbft.abci.v1.PrepareProposalRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.PrepareProposalRequest.deserializeBinaryFromReader);
      msg.setPrepareProposal(value);
      break;
    case 17:
      var value = new proto.cometbft.abci.v1.ProcessProposalRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.ProcessProposalRequest.deserializeBinaryFromReader);
      msg.setProcessProposal(value);
      break;
    case 18:
      var value = new proto.cometbft.abci.v1.ExtendVoteRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.ExtendVoteRequest.deserializeBinaryFromReader);
      msg.setExtendVote(value);
      break;
    case 19:
      var value = new proto.cometbft.abci.v1.VerifyVoteExtensionRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.VerifyVoteExtensionRequest.deserializeBinaryFromReader);
      msg.setVerifyVoteExtension(value);
      break;
    case 20:
      var value = new proto.cometbft.abci.v1.FinalizeBlockRequest;
      reader.readMessage(value,proto.cometbft.abci.v1.FinalizeBlockRequest.deserializeBinaryFromReader);
      msg.setFinalizeBlock(value);
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
proto.cometbft.abci.v1.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEcho();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1.EchoRequest.serializeBinaryToWriter
    );
  }
  f = message.getFlush();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cometbft.abci.v1.FlushRequest.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cometbft.abci.v1.InfoRequest.serializeBinaryToWriter
    );
  }
  f = message.getInitChain();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cometbft.abci.v1.InitChainRequest.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cometbft.abci.v1.QueryRequest.serializeBinaryToWriter
    );
  }
  f = message.getCheckTx();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.cometbft.abci.v1.CheckTxRequest.serializeBinaryToWriter
    );
  }
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.cometbft.abci.v1.CommitRequest.serializeBinaryToWriter
    );
  }
  f = message.getListSnapshots();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.cometbft.abci.v1.ListSnapshotsRequest.serializeBinaryToWriter
    );
  }
  f = message.getOfferSnapshot();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.cometbft.abci.v1.OfferSnapshotRequest.serializeBinaryToWriter
    );
  }
  f = message.getLoadSnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.cometbft.abci.v1.LoadSnapshotChunkRequest.serializeBinaryToWriter
    );
  }
  f = message.getApplySnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.cometbft.abci.v1.ApplySnapshotChunkRequest.serializeBinaryToWriter
    );
  }
  f = message.getPrepareProposal();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.cometbft.abci.v1.PrepareProposalRequest.serializeBinaryToWriter
    );
  }
  f = message.getProcessProposal();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.cometbft.abci.v1.ProcessProposalRequest.serializeBinaryToWriter
    );
  }
  f = message.getExtendVote();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.cometbft.abci.v1.ExtendVoteRequest.serializeBinaryToWriter
    );
  }
  f = message.getVerifyVoteExtension();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.cometbft.abci.v1.VerifyVoteExtensionRequest.serializeBinaryToWriter
    );
  }
  f = message.getFinalizeBlock();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.cometbft.abci.v1.FinalizeBlockRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional EchoRequest echo = 1;
 * @return {?proto.cometbft.abci.v1.EchoRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getEcho = function() {
  return /** @type{?proto.cometbft.abci.v1.EchoRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.EchoRequest, 1));
};


/**
 * @param {?proto.cometbft.abci.v1.EchoRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setEcho = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearEcho = function() {
  return this.setEcho(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasEcho = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FlushRequest flush = 2;
 * @return {?proto.cometbft.abci.v1.FlushRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getFlush = function() {
  return /** @type{?proto.cometbft.abci.v1.FlushRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.FlushRequest, 2));
};


/**
 * @param {?proto.cometbft.abci.v1.FlushRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setFlush = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearFlush = function() {
  return this.setFlush(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasFlush = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InfoRequest info = 3;
 * @return {?proto.cometbft.abci.v1.InfoRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getInfo = function() {
  return /** @type{?proto.cometbft.abci.v1.InfoRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.InfoRequest, 3));
};


/**
 * @param {?proto.cometbft.abci.v1.InfoRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional InitChainRequest init_chain = 5;
 * @return {?proto.cometbft.abci.v1.InitChainRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getInitChain = function() {
  return /** @type{?proto.cometbft.abci.v1.InitChainRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.InitChainRequest, 5));
};


/**
 * @param {?proto.cometbft.abci.v1.InitChainRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setInitChain = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearInitChain = function() {
  return this.setInitChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasInitChain = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional QueryRequest query = 6;
 * @return {?proto.cometbft.abci.v1.QueryRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getQuery = function() {
  return /** @type{?proto.cometbft.abci.v1.QueryRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.QueryRequest, 6));
};


/**
 * @param {?proto.cometbft.abci.v1.QueryRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CheckTxRequest check_tx = 8;
 * @return {?proto.cometbft.abci.v1.CheckTxRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getCheckTx = function() {
  return /** @type{?proto.cometbft.abci.v1.CheckTxRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.CheckTxRequest, 8));
};


/**
 * @param {?proto.cometbft.abci.v1.CheckTxRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setCheckTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearCheckTx = function() {
  return this.setCheckTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasCheckTx = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CommitRequest commit = 11;
 * @return {?proto.cometbft.abci.v1.CommitRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getCommit = function() {
  return /** @type{?proto.cometbft.abci.v1.CommitRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.CommitRequest, 11));
};


/**
 * @param {?proto.cometbft.abci.v1.CommitRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setCommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ListSnapshotsRequest list_snapshots = 12;
 * @return {?proto.cometbft.abci.v1.ListSnapshotsRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getListSnapshots = function() {
  return /** @type{?proto.cometbft.abci.v1.ListSnapshotsRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ListSnapshotsRequest, 12));
};


/**
 * @param {?proto.cometbft.abci.v1.ListSnapshotsRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setListSnapshots = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearListSnapshots = function() {
  return this.setListSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasListSnapshots = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional OfferSnapshotRequest offer_snapshot = 13;
 * @return {?proto.cometbft.abci.v1.OfferSnapshotRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getOfferSnapshot = function() {
  return /** @type{?proto.cometbft.abci.v1.OfferSnapshotRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.OfferSnapshotRequest, 13));
};


/**
 * @param {?proto.cometbft.abci.v1.OfferSnapshotRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setOfferSnapshot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearOfferSnapshot = function() {
  return this.setOfferSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasOfferSnapshot = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional LoadSnapshotChunkRequest load_snapshot_chunk = 14;
 * @return {?proto.cometbft.abci.v1.LoadSnapshotChunkRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getLoadSnapshotChunk = function() {
  return /** @type{?proto.cometbft.abci.v1.LoadSnapshotChunkRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.LoadSnapshotChunkRequest, 14));
};


/**
 * @param {?proto.cometbft.abci.v1.LoadSnapshotChunkRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setLoadSnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearLoadSnapshotChunk = function() {
  return this.setLoadSnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasLoadSnapshotChunk = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ApplySnapshotChunkRequest apply_snapshot_chunk = 15;
 * @return {?proto.cometbft.abci.v1.ApplySnapshotChunkRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getApplySnapshotChunk = function() {
  return /** @type{?proto.cometbft.abci.v1.ApplySnapshotChunkRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ApplySnapshotChunkRequest, 15));
};


/**
 * @param {?proto.cometbft.abci.v1.ApplySnapshotChunkRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setApplySnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearApplySnapshotChunk = function() {
  return this.setApplySnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasApplySnapshotChunk = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PrepareProposalRequest prepare_proposal = 16;
 * @return {?proto.cometbft.abci.v1.PrepareProposalRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getPrepareProposal = function() {
  return /** @type{?proto.cometbft.abci.v1.PrepareProposalRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.PrepareProposalRequest, 16));
};


/**
 * @param {?proto.cometbft.abci.v1.PrepareProposalRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setPrepareProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearPrepareProposal = function() {
  return this.setPrepareProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasPrepareProposal = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ProcessProposalRequest process_proposal = 17;
 * @return {?proto.cometbft.abci.v1.ProcessProposalRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getProcessProposal = function() {
  return /** @type{?proto.cometbft.abci.v1.ProcessProposalRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ProcessProposalRequest, 17));
};


/**
 * @param {?proto.cometbft.abci.v1.ProcessProposalRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setProcessProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearProcessProposal = function() {
  return this.setProcessProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasProcessProposal = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ExtendVoteRequest extend_vote = 18;
 * @return {?proto.cometbft.abci.v1.ExtendVoteRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getExtendVote = function() {
  return /** @type{?proto.cometbft.abci.v1.ExtendVoteRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ExtendVoteRequest, 18));
};


/**
 * @param {?proto.cometbft.abci.v1.ExtendVoteRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setExtendVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearExtendVote = function() {
  return this.setExtendVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasExtendVote = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional VerifyVoteExtensionRequest verify_vote_extension = 19;
 * @return {?proto.cometbft.abci.v1.VerifyVoteExtensionRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getVerifyVoteExtension = function() {
  return /** @type{?proto.cometbft.abci.v1.VerifyVoteExtensionRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.VerifyVoteExtensionRequest, 19));
};


/**
 * @param {?proto.cometbft.abci.v1.VerifyVoteExtensionRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setVerifyVoteExtension = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearVerifyVoteExtension = function() {
  return this.setVerifyVoteExtension(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasVerifyVoteExtension = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional FinalizeBlockRequest finalize_block = 20;
 * @return {?proto.cometbft.abci.v1.FinalizeBlockRequest}
 */
proto.cometbft.abci.v1.Request.prototype.getFinalizeBlock = function() {
  return /** @type{?proto.cometbft.abci.v1.FinalizeBlockRequest} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.FinalizeBlockRequest, 20));
};


/**
 * @param {?proto.cometbft.abci.v1.FinalizeBlockRequest|undefined} value
 * @return {!proto.cometbft.abci.v1.Request} returns this
*/
proto.cometbft.abci.v1.Request.prototype.setFinalizeBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.cometbft.abci.v1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Request} returns this
 */
proto.cometbft.abci.v1.Request.prototype.clearFinalizeBlock = function() {
  return this.setFinalizeBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Request.prototype.hasFinalizeBlock = function() {
  return jspb.Message.getField(this, 20) != null;
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
proto.cometbft.abci.v1.EchoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.EchoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.EchoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.EchoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cometbft.abci.v1.EchoRequest}
 */
proto.cometbft.abci.v1.EchoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.EchoRequest;
  return proto.cometbft.abci.v1.EchoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.EchoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.EchoRequest}
 */
proto.cometbft.abci.v1.EchoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.cometbft.abci.v1.EchoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.EchoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.EchoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.EchoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.cometbft.abci.v1.EchoRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.EchoRequest} returns this
 */
proto.cometbft.abci.v1.EchoRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.cometbft.abci.v1.FlushRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.FlushRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.FlushRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.FlushRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1.FlushRequest}
 */
proto.cometbft.abci.v1.FlushRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.FlushRequest;
  return proto.cometbft.abci.v1.FlushRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.FlushRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.FlushRequest}
 */
proto.cometbft.abci.v1.FlushRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1.FlushRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.FlushRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.FlushRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.FlushRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1.InfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.InfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.InfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.InfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    p2pVersion: jspb.Message.getFieldWithDefault(msg, 3, 0),
    abciVersion: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cometbft.abci.v1.InfoRequest}
 */
proto.cometbft.abci.v1.InfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.InfoRequest;
  return proto.cometbft.abci.v1.InfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.InfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.InfoRequest}
 */
proto.cometbft.abci.v1.InfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setP2pVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAbciVersion(value);
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
proto.cometbft.abci.v1.InfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.InfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.InfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.InfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockVersion();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getP2pVersion();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAbciVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.cometbft.abci.v1.InfoRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.InfoRequest} returns this
 */
proto.cometbft.abci.v1.InfoRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 block_version = 2;
 * @return {number}
 */
proto.cometbft.abci.v1.InfoRequest.prototype.getBlockVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.InfoRequest} returns this
 */
proto.cometbft.abci.v1.InfoRequest.prototype.setBlockVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 p2p_version = 3;
 * @return {number}
 */
proto.cometbft.abci.v1.InfoRequest.prototype.getP2pVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.InfoRequest} returns this
 */
proto.cometbft.abci.v1.InfoRequest.prototype.setP2pVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string abci_version = 4;
 * @return {string}
 */
proto.cometbft.abci.v1.InfoRequest.prototype.getAbciVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.InfoRequest} returns this
 */
proto.cometbft.abci.v1.InfoRequest.prototype.setAbciVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.InitChainRequest.repeatedFields_ = [4];



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
proto.cometbft.abci.v1.InitChainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.InitChainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.InitChainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.InitChainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    chainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    consensusParams: (f = msg.getConsensusParams()) && cometbft_types_v1_params_pb.ConsensusParams.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.cometbft.abci.v1.ValidatorUpdate.toObject, includeInstance),
    appStateBytes: msg.getAppStateBytes_asB64(),
    initialHeight: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.cometbft.abci.v1.InitChainRequest}
 */
proto.cometbft.abci.v1.InitChainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.InitChainRequest;
  return proto.cometbft.abci.v1.InitChainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.InitChainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.InitChainRequest}
 */
proto.cometbft.abci.v1.InitChainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 3:
      var value = new cometbft_types_v1_params_pb.ConsensusParams;
      reader.readMessage(value,cometbft_types_v1_params_pb.ConsensusParams.deserializeBinaryFromReader);
      msg.setConsensusParams(value);
      break;
    case 4:
      var value = new proto.cometbft.abci.v1.ValidatorUpdate;
      reader.readMessage(value,proto.cometbft.abci.v1.ValidatorUpdate.deserializeBinaryFromReader);
      msg.addValidators(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAppStateBytes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitialHeight(value);
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
proto.cometbft.abci.v1.InitChainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.InitChainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.InitChainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.InitChainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConsensusParams();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cometbft_types_v1_params_pb.ConsensusParams.serializeBinaryToWriter
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.cometbft.abci.v1.ValidatorUpdate.serializeBinaryToWriter
    );
  }
  f = message.getAppStateBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getInitialHeight();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cometbft.abci.v1.InitChainRequest} returns this
*/
proto.cometbft.abci.v1.InitChainRequest.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.InitChainRequest} returns this
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string chain_id = 2;
 * @return {string}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.InitChainRequest} returns this
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional cometbft.types.v1.ConsensusParams consensus_params = 3;
 * @return {?proto.cometbft.types.v1.ConsensusParams}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.getConsensusParams = function() {
  return /** @type{?proto.cometbft.types.v1.ConsensusParams} */ (
    jspb.Message.getWrapperField(this, cometbft_types_v1_params_pb.ConsensusParams, 3));
};


/**
 * @param {?proto.cometbft.types.v1.ConsensusParams|undefined} value
 * @return {!proto.cometbft.abci.v1.InitChainRequest} returns this
*/
proto.cometbft.abci.v1.InitChainRequest.prototype.setConsensusParams = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.InitChainRequest} returns this
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.clearConsensusParams = function() {
  return this.setConsensusParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.hasConsensusParams = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ValidatorUpdate validators = 4;
 * @return {!Array<!proto.cometbft.abci.v1.ValidatorUpdate>}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.ValidatorUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.ValidatorUpdate, 4));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.ValidatorUpdate>} value
 * @return {!proto.cometbft.abci.v1.InitChainRequest} returns this
*/
proto.cometbft.abci.v1.InitChainRequest.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cometbft.abci.v1.ValidatorUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.ValidatorUpdate}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cometbft.abci.v1.ValidatorUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.InitChainRequest} returns this
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional bytes app_state_bytes = 5;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.getAppStateBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes app_state_bytes = 5;
 * This is a type-conversion wrapper around `getAppStateBytes()`
 * @return {string}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.getAppStateBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAppStateBytes()));
};


/**
 * optional bytes app_state_bytes = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAppStateBytes()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.getAppStateBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppStateBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.InitChainRequest} returns this
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.setAppStateBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional int64 initial_height = 6;
 * @return {number}
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.getInitialHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.InitChainRequest} returns this
 */
proto.cometbft.abci.v1.InitChainRequest.prototype.setInitialHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.cometbft.abci.v1.QueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.QueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.QueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.QueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    height: jspb.Message.getFieldWithDefault(msg, 3, 0),
    prove: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.cometbft.abci.v1.QueryRequest}
 */
proto.cometbft.abci.v1.QueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.QueryRequest;
  return proto.cometbft.abci.v1.QueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.QueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.QueryRequest}
 */
proto.cometbft.abci.v1.QueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProve(value);
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
proto.cometbft.abci.v1.QueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.QueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.QueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.QueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getProve();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.QueryRequest.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.cometbft.abci.v1.QueryRequest.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.QueryRequest.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.QueryRequest} returns this
 */
proto.cometbft.abci.v1.QueryRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.cometbft.abci.v1.QueryRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.QueryRequest} returns this
 */
proto.cometbft.abci.v1.QueryRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.cometbft.abci.v1.QueryRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.QueryRequest} returns this
 */
proto.cometbft.abci.v1.QueryRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool prove = 4;
 * @return {boolean}
 */
proto.cometbft.abci.v1.QueryRequest.prototype.getProve = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cometbft.abci.v1.QueryRequest} returns this
 */
proto.cometbft.abci.v1.QueryRequest.prototype.setProve = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.cometbft.abci.v1.CheckTxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.CheckTxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.CheckTxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CheckTxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: msg.getTx_asB64(),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cometbft.abci.v1.CheckTxRequest}
 */
proto.cometbft.abci.v1.CheckTxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.CheckTxRequest;
  return proto.cometbft.abci.v1.CheckTxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.CheckTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.CheckTxRequest}
 */
proto.cometbft.abci.v1.CheckTxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTx(value);
      break;
    case 3:
      var value = /** @type {!proto.cometbft.abci.v1.CheckTxType} */ (reader.readEnum());
      msg.setType(value);
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
proto.cometbft.abci.v1.CheckTxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.CheckTxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.CheckTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CheckTxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional bytes tx = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.CheckTxRequest.prototype.getTx = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes tx = 1;
 * This is a type-conversion wrapper around `getTx()`
 * @return {string}
 */
proto.cometbft.abci.v1.CheckTxRequest.prototype.getTx_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTx()));
};


/**
 * optional bytes tx = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTx()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.CheckTxRequest.prototype.getTx_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTx()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.CheckTxRequest} returns this
 */
proto.cometbft.abci.v1.CheckTxRequest.prototype.setTx = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional CheckTxType type = 3;
 * @return {!proto.cometbft.abci.v1.CheckTxType}
 */
proto.cometbft.abci.v1.CheckTxRequest.prototype.getType = function() {
  return /** @type {!proto.cometbft.abci.v1.CheckTxType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cometbft.abci.v1.CheckTxType} value
 * @return {!proto.cometbft.abci.v1.CheckTxRequest} returns this
 */
proto.cometbft.abci.v1.CheckTxRequest.prototype.setType = function(value) {
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
proto.cometbft.abci.v1.CommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.CommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.CommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CommitRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1.CommitRequest}
 */
proto.cometbft.abci.v1.CommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.CommitRequest;
  return proto.cometbft.abci.v1.CommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.CommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.CommitRequest}
 */
proto.cometbft.abci.v1.CommitRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1.CommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.CommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.CommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CommitRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1.ListSnapshotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ListSnapshotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ListSnapshotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ListSnapshotsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1.ListSnapshotsRequest}
 */
proto.cometbft.abci.v1.ListSnapshotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ListSnapshotsRequest;
  return proto.cometbft.abci.v1.ListSnapshotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ListSnapshotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ListSnapshotsRequest}
 */
proto.cometbft.abci.v1.ListSnapshotsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1.ListSnapshotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ListSnapshotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ListSnapshotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ListSnapshotsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.OfferSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.OfferSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshot: (f = msg.getSnapshot()) && proto.cometbft.abci.v1.Snapshot.toObject(includeInstance, f),
    appHash: msg.getAppHash_asB64()
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
 * @return {!proto.cometbft.abci.v1.OfferSnapshotRequest}
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.OfferSnapshotRequest;
  return proto.cometbft.abci.v1.OfferSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.OfferSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.OfferSnapshotRequest}
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1.Snapshot;
      reader.readMessage(value,proto.cometbft.abci.v1.Snapshot.deserializeBinaryFromReader);
      msg.setSnapshot(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAppHash(value);
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
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.OfferSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.OfferSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1.Snapshot.serializeBinaryToWriter
    );
  }
  f = message.getAppHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional Snapshot snapshot = 1;
 * @return {?proto.cometbft.abci.v1.Snapshot}
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.getSnapshot = function() {
  return /** @type{?proto.cometbft.abci.v1.Snapshot} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.Snapshot, 1));
};


/**
 * @param {?proto.cometbft.abci.v1.Snapshot|undefined} value
 * @return {!proto.cometbft.abci.v1.OfferSnapshotRequest} returns this
*/
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.setSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.OfferSnapshotRequest} returns this
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.hasSnapshot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes app_hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.getAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes app_hash = 2;
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.getAppHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAppHash()));
};


/**
 * optional bytes app_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.getAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.OfferSnapshotRequest} returns this
 */
proto.cometbft.abci.v1.OfferSnapshotRequest.prototype.setAppHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.LoadSnapshotChunkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.LoadSnapshotChunkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    format: jspb.Message.getFieldWithDefault(msg, 2, 0),
    chunk: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cometbft.abci.v1.LoadSnapshotChunkRequest}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.LoadSnapshotChunkRequest;
  return proto.cometbft.abci.v1.LoadSnapshotChunkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.LoadSnapshotChunkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.LoadSnapshotChunkRequest}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChunk(value);
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
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.LoadSnapshotChunkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.LoadSnapshotChunkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getChunk();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.LoadSnapshotChunkRequest} returns this
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 format = 2;
 * @return {number}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.prototype.getFormat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.LoadSnapshotChunkRequest} returns this
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.prototype.setFormat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 chunk = 3;
 * @return {number}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.prototype.getChunk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.LoadSnapshotChunkRequest} returns this
 */
proto.cometbft.abci.v1.LoadSnapshotChunkRequest.prototype.setChunk = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ApplySnapshotChunkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ApplySnapshotChunkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chunk: msg.getChunk_asB64(),
    sender: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkRequest}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ApplySnapshotChunkRequest;
  return proto.cometbft.abci.v1.ApplySnapshotChunkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ApplySnapshotChunkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkRequest}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
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
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ApplySnapshotChunkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ApplySnapshotChunkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkRequest} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkRequest} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string sender = 3;
 * @return {string}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkRequest} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkRequest.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.PrepareProposalRequest.repeatedFields_ = [2,4];



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
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.PrepareProposalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.PrepareProposalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.PrepareProposalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxTxBytes: jspb.Message.getFieldWithDefault(msg, 1, 0),
    txsList: msg.getTxsList_asB64(),
    localLastCommit: (f = msg.getLocalLastCommit()) && proto.cometbft.abci.v1.ExtendedCommitInfo.toObject(includeInstance, f),
    misbehaviorList: jspb.Message.toObjectList(msg.getMisbehaviorList(),
    proto.cometbft.abci.v1.Misbehavior.toObject, includeInstance),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    nextValidatorsHash: msg.getNextValidatorsHash_asB64(),
    proposerAddress: msg.getProposerAddress_asB64()
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
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.PrepareProposalRequest;
  return proto.cometbft.abci.v1.PrepareProposalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.PrepareProposalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxTxBytes(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTxs(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1.ExtendedCommitInfo;
      reader.readMessage(value,proto.cometbft.abci.v1.ExtendedCommitInfo.deserializeBinaryFromReader);
      msg.setLocalLastCommit(value);
      break;
    case 4:
      var value = new proto.cometbft.abci.v1.Misbehavior;
      reader.readMessage(value,proto.cometbft.abci.v1.Misbehavior.deserializeBinaryFromReader);
      msg.addMisbehavior(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextValidatorsHash(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProposerAddress(value);
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
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.PrepareProposalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.PrepareProposalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.PrepareProposalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxTxBytes();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTxsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
  f = message.getLocalLastCommit();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cometbft.abci.v1.ExtendedCommitInfo.serializeBinaryToWriter
    );
  }
  f = message.getMisbehaviorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.cometbft.abci.v1.Misbehavior.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNextValidatorsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getProposerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional int64 max_tx_bytes = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getMaxTxBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.setMaxTxBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated bytes txs = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes txs = 2;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getTxsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTxsList()));
};


/**
 * repeated bytes txs = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};


/**
 * optional ExtendedCommitInfo local_last_commit = 3;
 * @return {?proto.cometbft.abci.v1.ExtendedCommitInfo}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getLocalLastCommit = function() {
  return /** @type{?proto.cometbft.abci.v1.ExtendedCommitInfo} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ExtendedCommitInfo, 3));
};


/**
 * @param {?proto.cometbft.abci.v1.ExtendedCommitInfo|undefined} value
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
*/
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.setLocalLastCommit = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.clearLocalLastCommit = function() {
  return this.setLocalLastCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.hasLocalLastCommit = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Misbehavior misbehavior = 4;
 * @return {!Array<!proto.cometbft.abci.v1.Misbehavior>}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getMisbehaviorList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.Misbehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.Misbehavior, 4));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.Misbehavior>} value
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
*/
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.setMisbehaviorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cometbft.abci.v1.Misbehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.Misbehavior}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.addMisbehavior = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cometbft.abci.v1.Misbehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.clearMisbehaviorList = function() {
  return this.setMisbehaviorList([]);
};


/**
 * optional int64 height = 5;
 * @return {number}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
*/
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes next_validators_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getNextValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes next_validators_hash = 7;
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getNextValidatorsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextValidatorsHash()));
};


/**
 * optional bytes next_validators_hash = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getNextValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.setNextValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes proposer_address = 8;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getProposerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes proposer_address = 8;
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {string}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getProposerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProposerAddress()));
};


/**
 * optional bytes proposer_address = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.getProposerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.PrepareProposalRequest} returns this
 */
proto.cometbft.abci.v1.PrepareProposalRequest.prototype.setProposerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.ProcessProposalRequest.repeatedFields_ = [1,3];



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
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ProcessProposalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ProcessProposalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ProcessProposalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    txsList: msg.getTxsList_asB64(),
    proposedLastCommit: (f = msg.getProposedLastCommit()) && proto.cometbft.abci.v1.CommitInfo.toObject(includeInstance, f),
    misbehaviorList: jspb.Message.toObjectList(msg.getMisbehaviorList(),
    proto.cometbft.abci.v1.Misbehavior.toObject, includeInstance),
    hash: msg.getHash_asB64(),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    nextValidatorsHash: msg.getNextValidatorsHash_asB64(),
    proposerAddress: msg.getProposerAddress_asB64()
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
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ProcessProposalRequest;
  return proto.cometbft.abci.v1.ProcessProposalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ProcessProposalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTxs(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.CommitInfo;
      reader.readMessage(value,proto.cometbft.abci.v1.CommitInfo.deserializeBinaryFromReader);
      msg.setProposedLastCommit(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1.Misbehavior;
      reader.readMessage(value,proto.cometbft.abci.v1.Misbehavior.deserializeBinaryFromReader);
      msg.addMisbehavior(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextValidatorsHash(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProposerAddress(value);
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
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ProcessProposalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ProcessProposalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ProcessProposalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getProposedLastCommit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cometbft.abci.v1.CommitInfo.serializeBinaryToWriter
    );
  }
  f = message.getMisbehaviorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cometbft.abci.v1.Misbehavior.serializeBinaryToWriter
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNextValidatorsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getProposerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * repeated bytes txs = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes txs = 1;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getTxsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTxsList()));
};


/**
 * repeated bytes txs = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};


/**
 * optional CommitInfo proposed_last_commit = 2;
 * @return {?proto.cometbft.abci.v1.CommitInfo}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getProposedLastCommit = function() {
  return /** @type{?proto.cometbft.abci.v1.CommitInfo} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.CommitInfo, 2));
};


/**
 * @param {?proto.cometbft.abci.v1.CommitInfo|undefined} value
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
*/
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.setProposedLastCommit = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.clearProposedLastCommit = function() {
  return this.setProposedLastCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.hasProposedLastCommit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Misbehavior misbehavior = 3;
 * @return {!Array<!proto.cometbft.abci.v1.Misbehavior>}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getMisbehaviorList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.Misbehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.Misbehavior, 3));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.Misbehavior>} value
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
*/
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.setMisbehaviorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cometbft.abci.v1.Misbehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.Misbehavior}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.addMisbehavior = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cometbft.abci.v1.Misbehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.clearMisbehaviorList = function() {
  return this.setMisbehaviorList([]);
};


/**
 * optional bytes hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes hash = 4;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int64 height = 5;
 * @return {number}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
*/
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes next_validators_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getNextValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes next_validators_hash = 7;
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getNextValidatorsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextValidatorsHash()));
};


/**
 * optional bytes next_validators_hash = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getNextValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.setNextValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes proposer_address = 8;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getProposerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes proposer_address = 8;
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {string}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getProposerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProposerAddress()));
};


/**
 * optional bytes proposer_address = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.getProposerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ProcessProposalRequest} returns this
 */
proto.cometbft.abci.v1.ProcessProposalRequest.prototype.setProposerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.ExtendVoteRequest.repeatedFields_ = [4,6];



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
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ExtendVoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ExtendVoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExtendVoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64(),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    txsList: msg.getTxsList_asB64(),
    proposedLastCommit: (f = msg.getProposedLastCommit()) && proto.cometbft.abci.v1.CommitInfo.toObject(includeInstance, f),
    misbehaviorList: jspb.Message.toObjectList(msg.getMisbehaviorList(),
    proto.cometbft.abci.v1.Misbehavior.toObject, includeInstance),
    nextValidatorsHash: msg.getNextValidatorsHash_asB64(),
    proposerAddress: msg.getProposerAddress_asB64()
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
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ExtendVoteRequest;
  return proto.cometbft.abci.v1.ExtendVoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ExtendVoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTxs(value);
      break;
    case 5:
      var value = new proto.cometbft.abci.v1.CommitInfo;
      reader.readMessage(value,proto.cometbft.abci.v1.CommitInfo.deserializeBinaryFromReader);
      msg.setProposedLastCommit(value);
      break;
    case 6:
      var value = new proto.cometbft.abci.v1.Misbehavior;
      reader.readMessage(value,proto.cometbft.abci.v1.Misbehavior.deserializeBinaryFromReader);
      msg.addMisbehavior(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextValidatorsHash(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProposerAddress(value);
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
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ExtendVoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ExtendVoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExtendVoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTxsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      4,
      f
    );
  }
  f = message.getProposedLastCommit();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cometbft.abci.v1.CommitInfo.serializeBinaryToWriter
    );
  }
  f = message.getMisbehaviorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.cometbft.abci.v1.Misbehavior.serializeBinaryToWriter
    );
  }
  f = message.getNextValidatorsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getProposerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 height = 2;
 * @return {number}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
*/
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated bytes txs = 4;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * repeated bytes txs = 4;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getTxsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTxsList()));
};


/**
 * repeated bytes txs = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};


/**
 * optional CommitInfo proposed_last_commit = 5;
 * @return {?proto.cometbft.abci.v1.CommitInfo}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getProposedLastCommit = function() {
  return /** @type{?proto.cometbft.abci.v1.CommitInfo} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.CommitInfo, 5));
};


/**
 * @param {?proto.cometbft.abci.v1.CommitInfo|undefined} value
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
*/
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.setProposedLastCommit = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.clearProposedLastCommit = function() {
  return this.setProposedLastCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.hasProposedLastCommit = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated Misbehavior misbehavior = 6;
 * @return {!Array<!proto.cometbft.abci.v1.Misbehavior>}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getMisbehaviorList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.Misbehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.Misbehavior, 6));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.Misbehavior>} value
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
*/
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.setMisbehaviorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.cometbft.abci.v1.Misbehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.Misbehavior}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.addMisbehavior = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.cometbft.abci.v1.Misbehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.clearMisbehaviorList = function() {
  return this.setMisbehaviorList([]);
};


/**
 * optional bytes next_validators_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getNextValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes next_validators_hash = 7;
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getNextValidatorsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextValidatorsHash()));
};


/**
 * optional bytes next_validators_hash = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getNextValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.setNextValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes proposer_address = 8;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getProposerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes proposer_address = 8;
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {string}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getProposerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProposerAddress()));
};


/**
 * optional bytes proposer_address = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.getProposerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ExtendVoteRequest} returns this
 */
proto.cometbft.abci.v1.ExtendVoteRequest.prototype.setProposerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
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
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.VerifyVoteExtensionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.VerifyVoteExtensionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64(),
    validatorAddress: msg.getValidatorAddress_asB64(),
    height: jspb.Message.getFieldWithDefault(msg, 3, 0),
    voteExtension: msg.getVoteExtension_asB64()
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
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionRequest}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.VerifyVoteExtensionRequest;
  return proto.cometbft.abci.v1.VerifyVoteExtensionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.VerifyVoteExtensionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionRequest}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValidatorAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVoteExtension(value);
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
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.VerifyVoteExtensionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.VerifyVoteExtensionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getValidatorAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getVoteExtension_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionRequest} returns this
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes validator_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getValidatorAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes validator_address = 2;
 * This is a type-conversion wrapper around `getValidatorAddress()`
 * @return {string}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getValidatorAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValidatorAddress()));
};


/**
 * optional bytes validator_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValidatorAddress()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getValidatorAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValidatorAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionRequest} returns this
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.setValidatorAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionRequest} returns this
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes vote_extension = 4;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getVoteExtension = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes vote_extension = 4;
 * This is a type-conversion wrapper around `getVoteExtension()`
 * @return {string}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getVoteExtension_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVoteExtension()));
};


/**
 * optional bytes vote_extension = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVoteExtension()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.getVoteExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoteExtension()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionRequest} returns this
 */
proto.cometbft.abci.v1.VerifyVoteExtensionRequest.prototype.setVoteExtension = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.repeatedFields_ = [1,3];



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
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.FinalizeBlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.FinalizeBlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    txsList: msg.getTxsList_asB64(),
    decidedLastCommit: (f = msg.getDecidedLastCommit()) && proto.cometbft.abci.v1.CommitInfo.toObject(includeInstance, f),
    misbehaviorList: jspb.Message.toObjectList(msg.getMisbehaviorList(),
    proto.cometbft.abci.v1.Misbehavior.toObject, includeInstance),
    hash: msg.getHash_asB64(),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    nextValidatorsHash: msg.getNextValidatorsHash_asB64(),
    proposerAddress: msg.getProposerAddress_asB64(),
    syncingToHeight: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.FinalizeBlockRequest;
  return proto.cometbft.abci.v1.FinalizeBlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.FinalizeBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTxs(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.CommitInfo;
      reader.readMessage(value,proto.cometbft.abci.v1.CommitInfo.deserializeBinaryFromReader);
      msg.setDecidedLastCommit(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1.Misbehavior;
      reader.readMessage(value,proto.cometbft.abci.v1.Misbehavior.deserializeBinaryFromReader);
      msg.addMisbehavior(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextValidatorsHash(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProposerAddress(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSyncingToHeight(value);
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
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.FinalizeBlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.FinalizeBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getDecidedLastCommit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cometbft.abci.v1.CommitInfo.serializeBinaryToWriter
    );
  }
  f = message.getMisbehaviorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cometbft.abci.v1.Misbehavior.serializeBinaryToWriter
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNextValidatorsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getProposerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getSyncingToHeight();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * repeated bytes txs = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes txs = 1;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getTxsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTxsList()));
};


/**
 * repeated bytes txs = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};


/**
 * optional CommitInfo decided_last_commit = 2;
 * @return {?proto.cometbft.abci.v1.CommitInfo}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getDecidedLastCommit = function() {
  return /** @type{?proto.cometbft.abci.v1.CommitInfo} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.CommitInfo, 2));
};


/**
 * @param {?proto.cometbft.abci.v1.CommitInfo|undefined} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
*/
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.setDecidedLastCommit = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.clearDecidedLastCommit = function() {
  return this.setDecidedLastCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.hasDecidedLastCommit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Misbehavior misbehavior = 3;
 * @return {!Array<!proto.cometbft.abci.v1.Misbehavior>}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getMisbehaviorList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.Misbehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.Misbehavior, 3));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.Misbehavior>} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
*/
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.setMisbehaviorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cometbft.abci.v1.Misbehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.Misbehavior}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.addMisbehavior = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cometbft.abci.v1.Misbehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.clearMisbehaviorList = function() {
  return this.setMisbehaviorList([]);
};


/**
 * optional bytes hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes hash = 4;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int64 height = 5;
 * @return {number}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
*/
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes next_validators_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getNextValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes next_validators_hash = 7;
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getNextValidatorsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextValidatorsHash()));
};


/**
 * optional bytes next_validators_hash = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getNextValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.setNextValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes proposer_address = 8;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getProposerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes proposer_address = 8;
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {string}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getProposerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProposerAddress()));
};


/**
 * optional bytes proposer_address = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getProposerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.setProposerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional int64 syncing_to_height = 9;
 * @return {number}
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.getSyncingToHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockRequest} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockRequest.prototype.setSyncingToHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cometbft.abci.v1.Response.oneofGroups_ = [[1,2,3,4,6,7,9,12,13,14,15,16,17,18,19,20,21]];

/**
 * @enum {number}
 */
proto.cometbft.abci.v1.Response.ValueCase = {
  VALUE_NOT_SET: 0,
  EXCEPTION: 1,
  ECHO: 2,
  FLUSH: 3,
  INFO: 4,
  INIT_CHAIN: 6,
  QUERY: 7,
  CHECK_TX: 9,
  COMMIT: 12,
  LIST_SNAPSHOTS: 13,
  OFFER_SNAPSHOT: 14,
  LOAD_SNAPSHOT_CHUNK: 15,
  APPLY_SNAPSHOT_CHUNK: 16,
  PREPARE_PROPOSAL: 17,
  PROCESS_PROPOSAL: 18,
  EXTEND_VOTE: 19,
  VERIFY_VOTE_EXTENSION: 20,
  FINALIZE_BLOCK: 21
};

/**
 * @return {proto.cometbft.abci.v1.Response.ValueCase}
 */
proto.cometbft.abci.v1.Response.prototype.getValueCase = function() {
  return /** @type {proto.cometbft.abci.v1.Response.ValueCase} */(jspb.Message.computeOneofCase(this, proto.cometbft.abci.v1.Response.oneofGroups_[0]));
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
proto.cometbft.abci.v1.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    exception: (f = msg.getException()) && proto.cometbft.abci.v1.ExceptionResponse.toObject(includeInstance, f),
    echo: (f = msg.getEcho()) && proto.cometbft.abci.v1.EchoResponse.toObject(includeInstance, f),
    flush: (f = msg.getFlush()) && proto.cometbft.abci.v1.FlushResponse.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.cometbft.abci.v1.InfoResponse.toObject(includeInstance, f),
    initChain: (f = msg.getInitChain()) && proto.cometbft.abci.v1.InitChainResponse.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && proto.cometbft.abci.v1.QueryResponse.toObject(includeInstance, f),
    checkTx: (f = msg.getCheckTx()) && proto.cometbft.abci.v1.CheckTxResponse.toObject(includeInstance, f),
    commit: (f = msg.getCommit()) && proto.cometbft.abci.v1.CommitResponse.toObject(includeInstance, f),
    listSnapshots: (f = msg.getListSnapshots()) && proto.cometbft.abci.v1.ListSnapshotsResponse.toObject(includeInstance, f),
    offerSnapshot: (f = msg.getOfferSnapshot()) && proto.cometbft.abci.v1.OfferSnapshotResponse.toObject(includeInstance, f),
    loadSnapshotChunk: (f = msg.getLoadSnapshotChunk()) && proto.cometbft.abci.v1.LoadSnapshotChunkResponse.toObject(includeInstance, f),
    applySnapshotChunk: (f = msg.getApplySnapshotChunk()) && proto.cometbft.abci.v1.ApplySnapshotChunkResponse.toObject(includeInstance, f),
    prepareProposal: (f = msg.getPrepareProposal()) && proto.cometbft.abci.v1.PrepareProposalResponse.toObject(includeInstance, f),
    processProposal: (f = msg.getProcessProposal()) && proto.cometbft.abci.v1.ProcessProposalResponse.toObject(includeInstance, f),
    extendVote: (f = msg.getExtendVote()) && proto.cometbft.abci.v1.ExtendVoteResponse.toObject(includeInstance, f),
    verifyVoteExtension: (f = msg.getVerifyVoteExtension()) && proto.cometbft.abci.v1.VerifyVoteExtensionResponse.toObject(includeInstance, f),
    finalizeBlock: (f = msg.getFinalizeBlock()) && proto.cometbft.abci.v1.FinalizeBlockResponse.toObject(includeInstance, f)
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
 * @return {!proto.cometbft.abci.v1.Response}
 */
proto.cometbft.abci.v1.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.Response;
  return proto.cometbft.abci.v1.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.Response}
 */
proto.cometbft.abci.v1.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1.ExceptionResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.ExceptionResponse.deserializeBinaryFromReader);
      msg.setException(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.EchoResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.EchoResponse.deserializeBinaryFromReader);
      msg.setEcho(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1.FlushResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.FlushResponse.deserializeBinaryFromReader);
      msg.setFlush(value);
      break;
    case 4:
      var value = new proto.cometbft.abci.v1.InfoResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.InfoResponse.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 6:
      var value = new proto.cometbft.abci.v1.InitChainResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.InitChainResponse.deserializeBinaryFromReader);
      msg.setInitChain(value);
      break;
    case 7:
      var value = new proto.cometbft.abci.v1.QueryResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.QueryResponse.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 9:
      var value = new proto.cometbft.abci.v1.CheckTxResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.CheckTxResponse.deserializeBinaryFromReader);
      msg.setCheckTx(value);
      break;
    case 12:
      var value = new proto.cometbft.abci.v1.CommitResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.CommitResponse.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 13:
      var value = new proto.cometbft.abci.v1.ListSnapshotsResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.ListSnapshotsResponse.deserializeBinaryFromReader);
      msg.setListSnapshots(value);
      break;
    case 14:
      var value = new proto.cometbft.abci.v1.OfferSnapshotResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.OfferSnapshotResponse.deserializeBinaryFromReader);
      msg.setOfferSnapshot(value);
      break;
    case 15:
      var value = new proto.cometbft.abci.v1.LoadSnapshotChunkResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.LoadSnapshotChunkResponse.deserializeBinaryFromReader);
      msg.setLoadSnapshotChunk(value);
      break;
    case 16:
      var value = new proto.cometbft.abci.v1.ApplySnapshotChunkResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.ApplySnapshotChunkResponse.deserializeBinaryFromReader);
      msg.setApplySnapshotChunk(value);
      break;
    case 17:
      var value = new proto.cometbft.abci.v1.PrepareProposalResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.PrepareProposalResponse.deserializeBinaryFromReader);
      msg.setPrepareProposal(value);
      break;
    case 18:
      var value = new proto.cometbft.abci.v1.ProcessProposalResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.ProcessProposalResponse.deserializeBinaryFromReader);
      msg.setProcessProposal(value);
      break;
    case 19:
      var value = new proto.cometbft.abci.v1.ExtendVoteResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.ExtendVoteResponse.deserializeBinaryFromReader);
      msg.setExtendVote(value);
      break;
    case 20:
      var value = new proto.cometbft.abci.v1.VerifyVoteExtensionResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.VerifyVoteExtensionResponse.deserializeBinaryFromReader);
      msg.setVerifyVoteExtension(value);
      break;
    case 21:
      var value = new proto.cometbft.abci.v1.FinalizeBlockResponse;
      reader.readMessage(value,proto.cometbft.abci.v1.FinalizeBlockResponse.deserializeBinaryFromReader);
      msg.setFinalizeBlock(value);
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
proto.cometbft.abci.v1.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getException();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1.ExceptionResponse.serializeBinaryToWriter
    );
  }
  f = message.getEcho();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cometbft.abci.v1.EchoResponse.serializeBinaryToWriter
    );
  }
  f = message.getFlush();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cometbft.abci.v1.FlushResponse.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cometbft.abci.v1.InfoResponse.serializeBinaryToWriter
    );
  }
  f = message.getInitChain();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cometbft.abci.v1.InitChainResponse.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cometbft.abci.v1.QueryResponse.serializeBinaryToWriter
    );
  }
  f = message.getCheckTx();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cometbft.abci.v1.CheckTxResponse.serializeBinaryToWriter
    );
  }
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.cometbft.abci.v1.CommitResponse.serializeBinaryToWriter
    );
  }
  f = message.getListSnapshots();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.cometbft.abci.v1.ListSnapshotsResponse.serializeBinaryToWriter
    );
  }
  f = message.getOfferSnapshot();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.cometbft.abci.v1.OfferSnapshotResponse.serializeBinaryToWriter
    );
  }
  f = message.getLoadSnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.cometbft.abci.v1.LoadSnapshotChunkResponse.serializeBinaryToWriter
    );
  }
  f = message.getApplySnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.cometbft.abci.v1.ApplySnapshotChunkResponse.serializeBinaryToWriter
    );
  }
  f = message.getPrepareProposal();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.cometbft.abci.v1.PrepareProposalResponse.serializeBinaryToWriter
    );
  }
  f = message.getProcessProposal();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.cometbft.abci.v1.ProcessProposalResponse.serializeBinaryToWriter
    );
  }
  f = message.getExtendVote();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.cometbft.abci.v1.ExtendVoteResponse.serializeBinaryToWriter
    );
  }
  f = message.getVerifyVoteExtension();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.cometbft.abci.v1.VerifyVoteExtensionResponse.serializeBinaryToWriter
    );
  }
  f = message.getFinalizeBlock();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.cometbft.abci.v1.FinalizeBlockResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExceptionResponse exception = 1;
 * @return {?proto.cometbft.abci.v1.ExceptionResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getException = function() {
  return /** @type{?proto.cometbft.abci.v1.ExceptionResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ExceptionResponse, 1));
};


/**
 * @param {?proto.cometbft.abci.v1.ExceptionResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setException = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearException = function() {
  return this.setException(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasException = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EchoResponse echo = 2;
 * @return {?proto.cometbft.abci.v1.EchoResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getEcho = function() {
  return /** @type{?proto.cometbft.abci.v1.EchoResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.EchoResponse, 2));
};


/**
 * @param {?proto.cometbft.abci.v1.EchoResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setEcho = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearEcho = function() {
  return this.setEcho(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasEcho = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FlushResponse flush = 3;
 * @return {?proto.cometbft.abci.v1.FlushResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getFlush = function() {
  return /** @type{?proto.cometbft.abci.v1.FlushResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.FlushResponse, 3));
};


/**
 * @param {?proto.cometbft.abci.v1.FlushResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setFlush = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearFlush = function() {
  return this.setFlush(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasFlush = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional InfoResponse info = 4;
 * @return {?proto.cometbft.abci.v1.InfoResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getInfo = function() {
  return /** @type{?proto.cometbft.abci.v1.InfoResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.InfoResponse, 4));
};


/**
 * @param {?proto.cometbft.abci.v1.InfoResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional InitChainResponse init_chain = 6;
 * @return {?proto.cometbft.abci.v1.InitChainResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getInitChain = function() {
  return /** @type{?proto.cometbft.abci.v1.InitChainResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.InitChainResponse, 6));
};


/**
 * @param {?proto.cometbft.abci.v1.InitChainResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setInitChain = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearInitChain = function() {
  return this.setInitChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasInitChain = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional QueryResponse query = 7;
 * @return {?proto.cometbft.abci.v1.QueryResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getQuery = function() {
  return /** @type{?proto.cometbft.abci.v1.QueryResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.QueryResponse, 7));
};


/**
 * @param {?proto.cometbft.abci.v1.QueryResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CheckTxResponse check_tx = 9;
 * @return {?proto.cometbft.abci.v1.CheckTxResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getCheckTx = function() {
  return /** @type{?proto.cometbft.abci.v1.CheckTxResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.CheckTxResponse, 9));
};


/**
 * @param {?proto.cometbft.abci.v1.CheckTxResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setCheckTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearCheckTx = function() {
  return this.setCheckTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasCheckTx = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CommitResponse commit = 12;
 * @return {?proto.cometbft.abci.v1.CommitResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getCommit = function() {
  return /** @type{?proto.cometbft.abci.v1.CommitResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.CommitResponse, 12));
};


/**
 * @param {?proto.cometbft.abci.v1.CommitResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setCommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ListSnapshotsResponse list_snapshots = 13;
 * @return {?proto.cometbft.abci.v1.ListSnapshotsResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getListSnapshots = function() {
  return /** @type{?proto.cometbft.abci.v1.ListSnapshotsResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ListSnapshotsResponse, 13));
};


/**
 * @param {?proto.cometbft.abci.v1.ListSnapshotsResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setListSnapshots = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearListSnapshots = function() {
  return this.setListSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasListSnapshots = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional OfferSnapshotResponse offer_snapshot = 14;
 * @return {?proto.cometbft.abci.v1.OfferSnapshotResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getOfferSnapshot = function() {
  return /** @type{?proto.cometbft.abci.v1.OfferSnapshotResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.OfferSnapshotResponse, 14));
};


/**
 * @param {?proto.cometbft.abci.v1.OfferSnapshotResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setOfferSnapshot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearOfferSnapshot = function() {
  return this.setOfferSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasOfferSnapshot = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional LoadSnapshotChunkResponse load_snapshot_chunk = 15;
 * @return {?proto.cometbft.abci.v1.LoadSnapshotChunkResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getLoadSnapshotChunk = function() {
  return /** @type{?proto.cometbft.abci.v1.LoadSnapshotChunkResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.LoadSnapshotChunkResponse, 15));
};


/**
 * @param {?proto.cometbft.abci.v1.LoadSnapshotChunkResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setLoadSnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearLoadSnapshotChunk = function() {
  return this.setLoadSnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasLoadSnapshotChunk = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ApplySnapshotChunkResponse apply_snapshot_chunk = 16;
 * @return {?proto.cometbft.abci.v1.ApplySnapshotChunkResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getApplySnapshotChunk = function() {
  return /** @type{?proto.cometbft.abci.v1.ApplySnapshotChunkResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ApplySnapshotChunkResponse, 16));
};


/**
 * @param {?proto.cometbft.abci.v1.ApplySnapshotChunkResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setApplySnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearApplySnapshotChunk = function() {
  return this.setApplySnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasApplySnapshotChunk = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional PrepareProposalResponse prepare_proposal = 17;
 * @return {?proto.cometbft.abci.v1.PrepareProposalResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getPrepareProposal = function() {
  return /** @type{?proto.cometbft.abci.v1.PrepareProposalResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.PrepareProposalResponse, 17));
};


/**
 * @param {?proto.cometbft.abci.v1.PrepareProposalResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setPrepareProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearPrepareProposal = function() {
  return this.setPrepareProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasPrepareProposal = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ProcessProposalResponse process_proposal = 18;
 * @return {?proto.cometbft.abci.v1.ProcessProposalResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getProcessProposal = function() {
  return /** @type{?proto.cometbft.abci.v1.ProcessProposalResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ProcessProposalResponse, 18));
};


/**
 * @param {?proto.cometbft.abci.v1.ProcessProposalResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setProcessProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearProcessProposal = function() {
  return this.setProcessProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasProcessProposal = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ExtendVoteResponse extend_vote = 19;
 * @return {?proto.cometbft.abci.v1.ExtendVoteResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getExtendVote = function() {
  return /** @type{?proto.cometbft.abci.v1.ExtendVoteResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ExtendVoteResponse, 19));
};


/**
 * @param {?proto.cometbft.abci.v1.ExtendVoteResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setExtendVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearExtendVote = function() {
  return this.setExtendVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasExtendVote = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional VerifyVoteExtensionResponse verify_vote_extension = 20;
 * @return {?proto.cometbft.abci.v1.VerifyVoteExtensionResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getVerifyVoteExtension = function() {
  return /** @type{?proto.cometbft.abci.v1.VerifyVoteExtensionResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.VerifyVoteExtensionResponse, 20));
};


/**
 * @param {?proto.cometbft.abci.v1.VerifyVoteExtensionResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setVerifyVoteExtension = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearVerifyVoteExtension = function() {
  return this.setVerifyVoteExtension(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasVerifyVoteExtension = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional FinalizeBlockResponse finalize_block = 21;
 * @return {?proto.cometbft.abci.v1.FinalizeBlockResponse}
 */
proto.cometbft.abci.v1.Response.prototype.getFinalizeBlock = function() {
  return /** @type{?proto.cometbft.abci.v1.FinalizeBlockResponse} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.FinalizeBlockResponse, 21));
};


/**
 * @param {?proto.cometbft.abci.v1.FinalizeBlockResponse|undefined} value
 * @return {!proto.cometbft.abci.v1.Response} returns this
*/
proto.cometbft.abci.v1.Response.prototype.setFinalizeBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.cometbft.abci.v1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Response} returns this
 */
proto.cometbft.abci.v1.Response.prototype.clearFinalizeBlock = function() {
  return this.setFinalizeBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Response.prototype.hasFinalizeBlock = function() {
  return jspb.Message.getField(this, 21) != null;
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
proto.cometbft.abci.v1.ExceptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ExceptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ExceptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExceptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cometbft.abci.v1.ExceptionResponse}
 */
proto.cometbft.abci.v1.ExceptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ExceptionResponse;
  return proto.cometbft.abci.v1.ExceptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ExceptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ExceptionResponse}
 */
proto.cometbft.abci.v1.ExceptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.cometbft.abci.v1.ExceptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ExceptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ExceptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExceptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.cometbft.abci.v1.ExceptionResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.ExceptionResponse} returns this
 */
proto.cometbft.abci.v1.ExceptionResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.cometbft.abci.v1.EchoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.EchoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.EchoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.EchoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cometbft.abci.v1.EchoResponse}
 */
proto.cometbft.abci.v1.EchoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.EchoResponse;
  return proto.cometbft.abci.v1.EchoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.EchoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.EchoResponse}
 */
proto.cometbft.abci.v1.EchoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.cometbft.abci.v1.EchoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.EchoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.EchoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.EchoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.cometbft.abci.v1.EchoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.EchoResponse} returns this
 */
proto.cometbft.abci.v1.EchoResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.cometbft.abci.v1.FlushResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.FlushResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.FlushResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.FlushResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1.FlushResponse}
 */
proto.cometbft.abci.v1.FlushResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.FlushResponse;
  return proto.cometbft.abci.v1.FlushResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.FlushResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.FlushResponse}
 */
proto.cometbft.abci.v1.FlushResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1.FlushResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.FlushResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.FlushResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.FlushResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1.InfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.InfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.InfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.InfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appVersion: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastBlockHeight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lastBlockAppHash: msg.getLastBlockAppHash_asB64(),
    lanePrioritiesMap: (f = msg.getLanePrioritiesMap()) ? f.toObject(includeInstance, undefined) : [],
    defaultLane: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.cometbft.abci.v1.InfoResponse}
 */
proto.cometbft.abci.v1.InfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.InfoResponse;
  return proto.cometbft.abci.v1.InfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.InfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.InfoResponse}
 */
proto.cometbft.abci.v1.InfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAppVersion(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastBlockHeight(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLastBlockAppHash(value);
      break;
    case 6:
      var value = msg.getLanePrioritiesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readUint32, null, "", 0);
         });
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultLane(value);
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
proto.cometbft.abci.v1.InfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.InfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.InfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.InfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppVersion();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLastBlockHeight();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getLastBlockAppHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getLanePrioritiesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeUint32);
  }
  f = message.getDefaultLane();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.cometbft.abci.v1.InfoResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.InfoResponse} returns this
 */
proto.cometbft.abci.v1.InfoResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.cometbft.abci.v1.InfoResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.InfoResponse} returns this
 */
proto.cometbft.abci.v1.InfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 app_version = 3;
 * @return {number}
 */
proto.cometbft.abci.v1.InfoResponse.prototype.getAppVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.InfoResponse} returns this
 */
proto.cometbft.abci.v1.InfoResponse.prototype.setAppVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 last_block_height = 4;
 * @return {number}
 */
proto.cometbft.abci.v1.InfoResponse.prototype.getLastBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.InfoResponse} returns this
 */
proto.cometbft.abci.v1.InfoResponse.prototype.setLastBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes last_block_app_hash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.InfoResponse.prototype.getLastBlockAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes last_block_app_hash = 5;
 * This is a type-conversion wrapper around `getLastBlockAppHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.InfoResponse.prototype.getLastBlockAppHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLastBlockAppHash()));
};


/**
 * optional bytes last_block_app_hash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLastBlockAppHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.InfoResponse.prototype.getLastBlockAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLastBlockAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.InfoResponse} returns this
 */
proto.cometbft.abci.v1.InfoResponse.prototype.setLastBlockAppHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * map<string, uint32> lane_priorities = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.cometbft.abci.v1.InfoResponse.prototype.getLanePrioritiesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cometbft.abci.v1.InfoResponse} returns this
 */
proto.cometbft.abci.v1.InfoResponse.prototype.clearLanePrioritiesMap = function() {
  this.getLanePrioritiesMap().clear();
  return this;};


/**
 * optional string default_lane = 7;
 * @return {string}
 */
proto.cometbft.abci.v1.InfoResponse.prototype.getDefaultLane = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.InfoResponse} returns this
 */
proto.cometbft.abci.v1.InfoResponse.prototype.setDefaultLane = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.InitChainResponse.repeatedFields_ = [2];



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
proto.cometbft.abci.v1.InitChainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.InitChainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.InitChainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.InitChainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    consensusParams: (f = msg.getConsensusParams()) && cometbft_types_v1_params_pb.ConsensusParams.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.cometbft.abci.v1.ValidatorUpdate.toObject, includeInstance),
    appHash: msg.getAppHash_asB64()
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
 * @return {!proto.cometbft.abci.v1.InitChainResponse}
 */
proto.cometbft.abci.v1.InitChainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.InitChainResponse;
  return proto.cometbft.abci.v1.InitChainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.InitChainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.InitChainResponse}
 */
proto.cometbft.abci.v1.InitChainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cometbft_types_v1_params_pb.ConsensusParams;
      reader.readMessage(value,cometbft_types_v1_params_pb.ConsensusParams.deserializeBinaryFromReader);
      msg.setConsensusParams(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.ValidatorUpdate;
      reader.readMessage(value,proto.cometbft.abci.v1.ValidatorUpdate.deserializeBinaryFromReader);
      msg.addValidators(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAppHash(value);
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
proto.cometbft.abci.v1.InitChainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.InitChainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.InitChainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.InitChainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsensusParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cometbft_types_v1_params_pb.ConsensusParams.serializeBinaryToWriter
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cometbft.abci.v1.ValidatorUpdate.serializeBinaryToWriter
    );
  }
  f = message.getAppHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional cometbft.types.v1.ConsensusParams consensus_params = 1;
 * @return {?proto.cometbft.types.v1.ConsensusParams}
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.getConsensusParams = function() {
  return /** @type{?proto.cometbft.types.v1.ConsensusParams} */ (
    jspb.Message.getWrapperField(this, cometbft_types_v1_params_pb.ConsensusParams, 1));
};


/**
 * @param {?proto.cometbft.types.v1.ConsensusParams|undefined} value
 * @return {!proto.cometbft.abci.v1.InitChainResponse} returns this
*/
proto.cometbft.abci.v1.InitChainResponse.prototype.setConsensusParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.InitChainResponse} returns this
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.clearConsensusParams = function() {
  return this.setConsensusParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.hasConsensusParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ValidatorUpdate validators = 2;
 * @return {!Array<!proto.cometbft.abci.v1.ValidatorUpdate>}
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.ValidatorUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.ValidatorUpdate, 2));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.ValidatorUpdate>} value
 * @return {!proto.cometbft.abci.v1.InitChainResponse} returns this
*/
proto.cometbft.abci.v1.InitChainResponse.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cometbft.abci.v1.ValidatorUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.ValidatorUpdate}
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cometbft.abci.v1.ValidatorUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.InitChainResponse} returns this
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional bytes app_hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.getAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes app_hash = 3;
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.getAppHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAppHash()));
};


/**
 * optional bytes app_hash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.getAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.InitChainResponse} returns this
 */
proto.cometbft.abci.v1.InitChainResponse.prototype.setAppHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
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
proto.cometbft.abci.v1.QueryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.QueryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.QueryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.QueryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    log: jspb.Message.getFieldWithDefault(msg, 3, ""),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    index: jspb.Message.getFieldWithDefault(msg, 5, 0),
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64(),
    proofOps: (f = msg.getProofOps()) && cometbft_crypto_v1_proof_pb.ProofOps.toObject(includeInstance, f),
    height: jspb.Message.getFieldWithDefault(msg, 9, 0),
    codespace: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.cometbft.abci.v1.QueryResponse}
 */
proto.cometbft.abci.v1.QueryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.QueryResponse;
  return proto.cometbft.abci.v1.QueryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.QueryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.QueryResponse}
 */
proto.cometbft.abci.v1.QueryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLog(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIndex(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    case 8:
      var value = new cometbft_crypto_v1_proof_pb.ProofOps;
      reader.readMessage(value,cometbft_crypto_v1_proof_pb.ProofOps.deserializeBinaryFromReader);
      msg.setProofOps(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodespace(value);
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
proto.cometbft.abci.v1.QueryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.QueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.QueryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.QueryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLog();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getProofOps();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      cometbft_crypto_v1_proof_pb.ProofOps.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getCodespace();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
 */
proto.cometbft.abci.v1.QueryResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
 */
proto.cometbft.abci.v1.QueryResponse.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
 */
proto.cometbft.abci.v1.QueryResponse.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 index = 5;
 * @return {number}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
 */
proto.cometbft.abci.v1.QueryResponse.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes key = 6;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes key = 6;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
 */
proto.cometbft.abci.v1.QueryResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes value = 7;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes value = 7;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
 */
proto.cometbft.abci.v1.QueryResponse.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional cometbft.crypto.v1.ProofOps proof_ops = 8;
 * @return {?proto.cometbft.crypto.v1.ProofOps}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getProofOps = function() {
  return /** @type{?proto.cometbft.crypto.v1.ProofOps} */ (
    jspb.Message.getWrapperField(this, cometbft_crypto_v1_proof_pb.ProofOps, 8));
};


/**
 * @param {?proto.cometbft.crypto.v1.ProofOps|undefined} value
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
*/
proto.cometbft.abci.v1.QueryResponse.prototype.setProofOps = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
 */
proto.cometbft.abci.v1.QueryResponse.prototype.clearProofOps = function() {
  return this.setProofOps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.hasProofOps = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 height = 9;
 * @return {number}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
 */
proto.cometbft.abci.v1.QueryResponse.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string codespace = 10;
 * @return {string}
 */
proto.cometbft.abci.v1.QueryResponse.prototype.getCodespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.QueryResponse} returns this
 */
proto.cometbft.abci.v1.QueryResponse.prototype.setCodespace = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.CheckTxResponse.repeatedFields_ = [7];



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
proto.cometbft.abci.v1.CheckTxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.CheckTxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.CheckTxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CheckTxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    log: jspb.Message.getFieldWithDefault(msg, 3, ""),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    gasWanted: jspb.Message.getFieldWithDefault(msg, 5, 0),
    gasUsed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.cometbft.abci.v1.Event.toObject, includeInstance),
    codespace: jspb.Message.getFieldWithDefault(msg, 8, ""),
    laneId: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.cometbft.abci.v1.CheckTxResponse}
 */
proto.cometbft.abci.v1.CheckTxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.CheckTxResponse;
  return proto.cometbft.abci.v1.CheckTxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.CheckTxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.CheckTxResponse}
 */
proto.cometbft.abci.v1.CheckTxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLog(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGasWanted(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGasUsed(value);
      break;
    case 7:
      var value = new proto.cometbft.abci.v1.Event;
      reader.readMessage(value,proto.cometbft.abci.v1.Event.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodespace(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLaneId(value);
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
proto.cometbft.abci.v1.CheckTxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.CheckTxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.CheckTxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CheckTxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getLog();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGasWanted();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getGasUsed();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.cometbft.abci.v1.Event.serializeBinaryToWriter
    );
  }
  f = message.getCodespace();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLaneId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 gas_wanted = 5;
 * @return {number}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getGasWanted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.setGasWanted = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 gas_used = 6;
 * @return {number}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getGasUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.setGasUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated Event events = 7;
 * @return {!Array<!proto.cometbft.abci.v1.Event>}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.Event, 7));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.Event>} value
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
*/
proto.cometbft.abci.v1.CheckTxResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.cometbft.abci.v1.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.Event}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.cometbft.abci.v1.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * optional string codespace = 8;
 * @return {string}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getCodespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.setCodespace = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string lane_id = 12;
 * @return {string}
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.getLaneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.CheckTxResponse} returns this
 */
proto.cometbft.abci.v1.CheckTxResponse.prototype.setLaneId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
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
proto.cometbft.abci.v1.CommitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.CommitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.CommitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CommitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    retainHeight: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cometbft.abci.v1.CommitResponse}
 */
proto.cometbft.abci.v1.CommitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.CommitResponse;
  return proto.cometbft.abci.v1.CommitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.CommitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.CommitResponse}
 */
proto.cometbft.abci.v1.CommitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRetainHeight(value);
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
proto.cometbft.abci.v1.CommitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.CommitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.CommitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CommitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRetainHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 retain_height = 3;
 * @return {number}
 */
proto.cometbft.abci.v1.CommitResponse.prototype.getRetainHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.CommitResponse} returns this
 */
proto.cometbft.abci.v1.CommitResponse.prototype.setRetainHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.ListSnapshotsResponse.repeatedFields_ = [1];



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
proto.cometbft.abci.v1.ListSnapshotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ListSnapshotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ListSnapshotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ListSnapshotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshotsList: jspb.Message.toObjectList(msg.getSnapshotsList(),
    proto.cometbft.abci.v1.Snapshot.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1.ListSnapshotsResponse}
 */
proto.cometbft.abci.v1.ListSnapshotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ListSnapshotsResponse;
  return proto.cometbft.abci.v1.ListSnapshotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ListSnapshotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ListSnapshotsResponse}
 */
proto.cometbft.abci.v1.ListSnapshotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1.Snapshot;
      reader.readMessage(value,proto.cometbft.abci.v1.Snapshot.deserializeBinaryFromReader);
      msg.addSnapshots(value);
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
proto.cometbft.abci.v1.ListSnapshotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ListSnapshotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ListSnapshotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ListSnapshotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cometbft.abci.v1.Snapshot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Snapshot snapshots = 1;
 * @return {!Array<!proto.cometbft.abci.v1.Snapshot>}
 */
proto.cometbft.abci.v1.ListSnapshotsResponse.prototype.getSnapshotsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.Snapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.Snapshot, 1));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.Snapshot>} value
 * @return {!proto.cometbft.abci.v1.ListSnapshotsResponse} returns this
*/
proto.cometbft.abci.v1.ListSnapshotsResponse.prototype.setSnapshotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cometbft.abci.v1.Snapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.Snapshot}
 */
proto.cometbft.abci.v1.ListSnapshotsResponse.prototype.addSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cometbft.abci.v1.Snapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.ListSnapshotsResponse} returns this
 */
proto.cometbft.abci.v1.ListSnapshotsResponse.prototype.clearSnapshotsList = function() {
  return this.setSnapshotsList([]);
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
proto.cometbft.abci.v1.OfferSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.OfferSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.OfferSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.OfferSnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.cometbft.abci.v1.OfferSnapshotResponse}
 */
proto.cometbft.abci.v1.OfferSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.OfferSnapshotResponse;
  return proto.cometbft.abci.v1.OfferSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.OfferSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.OfferSnapshotResponse}
 */
proto.cometbft.abci.v1.OfferSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cometbft.abci.v1.OfferSnapshotResult} */ (reader.readEnum());
      msg.setResult(value);
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
proto.cometbft.abci.v1.OfferSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.OfferSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.OfferSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.OfferSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OfferSnapshotResult result = 1;
 * @return {!proto.cometbft.abci.v1.OfferSnapshotResult}
 */
proto.cometbft.abci.v1.OfferSnapshotResponse.prototype.getResult = function() {
  return /** @type {!proto.cometbft.abci.v1.OfferSnapshotResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cometbft.abci.v1.OfferSnapshotResult} value
 * @return {!proto.cometbft.abci.v1.OfferSnapshotResponse} returns this
 */
proto.cometbft.abci.v1.OfferSnapshotResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.LoadSnapshotChunkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.LoadSnapshotChunkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunk: msg.getChunk_asB64()
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
 * @return {!proto.cometbft.abci.v1.LoadSnapshotChunkResponse}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.LoadSnapshotChunkResponse;
  return proto.cometbft.abci.v1.LoadSnapshotChunkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.LoadSnapshotChunkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.LoadSnapshotChunkResponse}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
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
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.LoadSnapshotChunkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.LoadSnapshotChunkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.LoadSnapshotChunkResponse} returns this
 */
proto.cometbft.abci.v1.LoadSnapshotChunkResponse.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.repeatedFields_ = [2,3];



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
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ApplySnapshotChunkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0),
    refetchChunksList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    rejectSendersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ApplySnapshotChunkResponse;
  return proto.cometbft.abci.v1.ApplySnapshotChunkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cometbft.abci.v1.ApplySnapshotChunkResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRefetchChunks(values[i]);
      }
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRejectSenders(value);
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
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ApplySnapshotChunkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRefetchChunksList();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
  f = message.getRejectSendersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional ApplySnapshotChunkResult result = 1;
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResult}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.getResult = function() {
  return /** @type {!proto.cometbft.abci.v1.ApplySnapshotChunkResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cometbft.abci.v1.ApplySnapshotChunkResult} value
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated uint32 refetch_chunks = 2;
 * @return {!Array<number>}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.getRefetchChunksList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.setRefetchChunksList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.addRefetchChunks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.clearRefetchChunksList = function() {
  return this.setRefetchChunksList([]);
};


/**
 * repeated string reject_senders = 3;
 * @return {!Array<string>}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.getRejectSendersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.setRejectSendersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.addRejectSenders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.ApplySnapshotChunkResponse} returns this
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResponse.prototype.clearRejectSendersList = function() {
  return this.setRejectSendersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.PrepareProposalResponse.repeatedFields_ = [1];



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
proto.cometbft.abci.v1.PrepareProposalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.PrepareProposalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.PrepareProposalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.PrepareProposalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txsList: msg.getTxsList_asB64()
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
 * @return {!proto.cometbft.abci.v1.PrepareProposalResponse}
 */
proto.cometbft.abci.v1.PrepareProposalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.PrepareProposalResponse;
  return proto.cometbft.abci.v1.PrepareProposalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.PrepareProposalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.PrepareProposalResponse}
 */
proto.cometbft.abci.v1.PrepareProposalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTxs(value);
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
proto.cometbft.abci.v1.PrepareProposalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.PrepareProposalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.PrepareProposalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.PrepareProposalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes txs = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.cometbft.abci.v1.PrepareProposalResponse.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes txs = 1;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.cometbft.abci.v1.PrepareProposalResponse.prototype.getTxsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTxsList()));
};


/**
 * repeated bytes txs = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.cometbft.abci.v1.PrepareProposalResponse.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.cometbft.abci.v1.PrepareProposalResponse} returns this
 */
proto.cometbft.abci.v1.PrepareProposalResponse.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.PrepareProposalResponse} returns this
 */
proto.cometbft.abci.v1.PrepareProposalResponse.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.PrepareProposalResponse} returns this
 */
proto.cometbft.abci.v1.PrepareProposalResponse.prototype.clearTxsList = function() {
  return this.setTxsList([]);
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
proto.cometbft.abci.v1.ProcessProposalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ProcessProposalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ProcessProposalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ProcessProposalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.cometbft.abci.v1.ProcessProposalResponse}
 */
proto.cometbft.abci.v1.ProcessProposalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ProcessProposalResponse;
  return proto.cometbft.abci.v1.ProcessProposalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ProcessProposalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ProcessProposalResponse}
 */
proto.cometbft.abci.v1.ProcessProposalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cometbft.abci.v1.ProcessProposalStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.cometbft.abci.v1.ProcessProposalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ProcessProposalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ProcessProposalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ProcessProposalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional ProcessProposalStatus status = 1;
 * @return {!proto.cometbft.abci.v1.ProcessProposalStatus}
 */
proto.cometbft.abci.v1.ProcessProposalResponse.prototype.getStatus = function() {
  return /** @type {!proto.cometbft.abci.v1.ProcessProposalStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cometbft.abci.v1.ProcessProposalStatus} value
 * @return {!proto.cometbft.abci.v1.ProcessProposalResponse} returns this
 */
proto.cometbft.abci.v1.ProcessProposalResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.cometbft.abci.v1.ExtendVoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ExtendVoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ExtendVoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExtendVoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    voteExtension: msg.getVoteExtension_asB64()
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
 * @return {!proto.cometbft.abci.v1.ExtendVoteResponse}
 */
proto.cometbft.abci.v1.ExtendVoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ExtendVoteResponse;
  return proto.cometbft.abci.v1.ExtendVoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ExtendVoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ExtendVoteResponse}
 */
proto.cometbft.abci.v1.ExtendVoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVoteExtension(value);
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
proto.cometbft.abci.v1.ExtendVoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ExtendVoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ExtendVoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExtendVoteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoteExtension_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes vote_extension = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ExtendVoteResponse.prototype.getVoteExtension = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes vote_extension = 1;
 * This is a type-conversion wrapper around `getVoteExtension()`
 * @return {string}
 */
proto.cometbft.abci.v1.ExtendVoteResponse.prototype.getVoteExtension_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVoteExtension()));
};


/**
 * optional bytes vote_extension = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVoteExtension()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ExtendVoteResponse.prototype.getVoteExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoteExtension()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ExtendVoteResponse} returns this
 */
proto.cometbft.abci.v1.ExtendVoteResponse.prototype.setVoteExtension = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.cometbft.abci.v1.VerifyVoteExtensionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.VerifyVoteExtensionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.VerifyVoteExtensionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.VerifyVoteExtensionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionResponse}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.VerifyVoteExtensionResponse;
  return proto.cometbft.abci.v1.VerifyVoteExtensionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.VerifyVoteExtensionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionResponse}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cometbft.abci.v1.VerifyVoteExtensionStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.cometbft.abci.v1.VerifyVoteExtensionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.VerifyVoteExtensionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.VerifyVoteExtensionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.VerifyVoteExtensionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional VerifyVoteExtensionStatus status = 1;
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionStatus}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionResponse.prototype.getStatus = function() {
  return /** @type {!proto.cometbft.abci.v1.VerifyVoteExtensionStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cometbft.abci.v1.VerifyVoteExtensionStatus} value
 * @return {!proto.cometbft.abci.v1.VerifyVoteExtensionResponse} returns this
 */
proto.cometbft.abci.v1.VerifyVoteExtensionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.repeatedFields_ = [1,2,3];



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
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.FinalizeBlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.FinalizeBlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.cometbft.abci.v1.Event.toObject, includeInstance),
    txResultsList: jspb.Message.toObjectList(msg.getTxResultsList(),
    proto.cometbft.abci.v1.ExecTxResult.toObject, includeInstance),
    validatorUpdatesList: jspb.Message.toObjectList(msg.getValidatorUpdatesList(),
    proto.cometbft.abci.v1.ValidatorUpdate.toObject, includeInstance),
    consensusParamUpdates: (f = msg.getConsensusParamUpdates()) && cometbft_types_v1_params_pb.ConsensusParams.toObject(includeInstance, f),
    appHash: msg.getAppHash_asB64(),
    nextBlockDelay: (f = msg.getNextBlockDelay()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.FinalizeBlockResponse;
  return proto.cometbft.abci.v1.FinalizeBlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.FinalizeBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1.Event;
      reader.readMessage(value,proto.cometbft.abci.v1.Event.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.ExecTxResult;
      reader.readMessage(value,proto.cometbft.abci.v1.ExecTxResult.deserializeBinaryFromReader);
      msg.addTxResults(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1.ValidatorUpdate;
      reader.readMessage(value,proto.cometbft.abci.v1.ValidatorUpdate.deserializeBinaryFromReader);
      msg.addValidatorUpdates(value);
      break;
    case 4:
      var value = new cometbft_types_v1_params_pb.ConsensusParams;
      reader.readMessage(value,cometbft_types_v1_params_pb.ConsensusParams.deserializeBinaryFromReader);
      msg.setConsensusParamUpdates(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAppHash(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setNextBlockDelay(value);
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
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.FinalizeBlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.FinalizeBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cometbft.abci.v1.Event.serializeBinaryToWriter
    );
  }
  f = message.getTxResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cometbft.abci.v1.ExecTxResult.serializeBinaryToWriter
    );
  }
  f = message.getValidatorUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cometbft.abci.v1.ValidatorUpdate.serializeBinaryToWriter
    );
  }
  f = message.getConsensusParamUpdates();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      cometbft_types_v1_params_pb.ConsensusParams.serializeBinaryToWriter
    );
  }
  f = message.getAppHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getNextBlockDelay();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Event events = 1;
 * @return {!Array<!proto.cometbft.abci.v1.Event>}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.Event, 1));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.Event>} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
*/
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cometbft.abci.v1.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.Event}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cometbft.abci.v1.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * repeated ExecTxResult tx_results = 2;
 * @return {!Array<!proto.cometbft.abci.v1.ExecTxResult>}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.getTxResultsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.ExecTxResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.ExecTxResult, 2));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.ExecTxResult>} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
*/
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.setTxResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cometbft.abci.v1.ExecTxResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.ExecTxResult}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.addTxResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cometbft.abci.v1.ExecTxResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.clearTxResultsList = function() {
  return this.setTxResultsList([]);
};


/**
 * repeated ValidatorUpdate validator_updates = 3;
 * @return {!Array<!proto.cometbft.abci.v1.ValidatorUpdate>}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.getValidatorUpdatesList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.ValidatorUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.ValidatorUpdate, 3));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.ValidatorUpdate>} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
*/
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.setValidatorUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cometbft.abci.v1.ValidatorUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.ValidatorUpdate}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.addValidatorUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cometbft.abci.v1.ValidatorUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.clearValidatorUpdatesList = function() {
  return this.setValidatorUpdatesList([]);
};


/**
 * optional cometbft.types.v1.ConsensusParams consensus_param_updates = 4;
 * @return {?proto.cometbft.types.v1.ConsensusParams}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.getConsensusParamUpdates = function() {
  return /** @type{?proto.cometbft.types.v1.ConsensusParams} */ (
    jspb.Message.getWrapperField(this, cometbft_types_v1_params_pb.ConsensusParams, 4));
};


/**
 * @param {?proto.cometbft.types.v1.ConsensusParams|undefined} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
*/
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.setConsensusParamUpdates = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.clearConsensusParamUpdates = function() {
  return this.setConsensusParamUpdates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.hasConsensusParamUpdates = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes app_hash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.getAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes app_hash = 5;
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.getAppHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAppHash()));
};


/**
 * optional bytes app_hash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.getAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.setAppHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional google.protobuf.Duration next_block_delay = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.getNextBlockDelay = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
*/
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.setNextBlockDelay = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.FinalizeBlockResponse} returns this
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.clearNextBlockDelay = function() {
  return this.setNextBlockDelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.FinalizeBlockResponse.prototype.hasNextBlockDelay = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.CommitInfo.repeatedFields_ = [2];



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
proto.cometbft.abci.v1.CommitInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.CommitInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.CommitInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CommitInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    round: jspb.Message.getFieldWithDefault(msg, 1, 0),
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    proto.cometbft.abci.v1.VoteInfo.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1.CommitInfo}
 */
proto.cometbft.abci.v1.CommitInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.CommitInfo;
  return proto.cometbft.abci.v1.CommitInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.CommitInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.CommitInfo}
 */
proto.cometbft.abci.v1.CommitInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRound(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.VoteInfo;
      reader.readMessage(value,proto.cometbft.abci.v1.VoteInfo.deserializeBinaryFromReader);
      msg.addVotes(value);
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
proto.cometbft.abci.v1.CommitInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.CommitInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.CommitInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.CommitInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRound();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cometbft.abci.v1.VoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 round = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.CommitInfo.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.CommitInfo} returns this
 */
proto.cometbft.abci.v1.CommitInfo.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated VoteInfo votes = 2;
 * @return {!Array<!proto.cometbft.abci.v1.VoteInfo>}
 */
proto.cometbft.abci.v1.CommitInfo.prototype.getVotesList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.VoteInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.VoteInfo, 2));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.VoteInfo>} value
 * @return {!proto.cometbft.abci.v1.CommitInfo} returns this
*/
proto.cometbft.abci.v1.CommitInfo.prototype.setVotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cometbft.abci.v1.VoteInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.VoteInfo}
 */
proto.cometbft.abci.v1.CommitInfo.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cometbft.abci.v1.VoteInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.CommitInfo} returns this
 */
proto.cometbft.abci.v1.CommitInfo.prototype.clearVotesList = function() {
  return this.setVotesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.repeatedFields_ = [2];



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
proto.cometbft.abci.v1.ExtendedCommitInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ExtendedCommitInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ExtendedCommitInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    round: jspb.Message.getFieldWithDefault(msg, 1, 0),
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    proto.cometbft.abci.v1.ExtendedVoteInfo.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1.ExtendedCommitInfo}
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ExtendedCommitInfo;
  return proto.cometbft.abci.v1.ExtendedCommitInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ExtendedCommitInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ExtendedCommitInfo}
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRound(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.ExtendedVoteInfo;
      reader.readMessage(value,proto.cometbft.abci.v1.ExtendedVoteInfo.deserializeBinaryFromReader);
      msg.addVotes(value);
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
proto.cometbft.abci.v1.ExtendedCommitInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ExtendedCommitInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ExtendedCommitInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRound();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cometbft.abci.v1.ExtendedVoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 round = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.ExtendedCommitInfo} returns this
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ExtendedVoteInfo votes = 2;
 * @return {!Array<!proto.cometbft.abci.v1.ExtendedVoteInfo>}
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.prototype.getVotesList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.ExtendedVoteInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.ExtendedVoteInfo, 2));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.ExtendedVoteInfo>} value
 * @return {!proto.cometbft.abci.v1.ExtendedCommitInfo} returns this
*/
proto.cometbft.abci.v1.ExtendedCommitInfo.prototype.setVotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cometbft.abci.v1.ExtendedVoteInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.ExtendedVoteInfo}
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cometbft.abci.v1.ExtendedVoteInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.ExtendedCommitInfo} returns this
 */
proto.cometbft.abci.v1.ExtendedCommitInfo.prototype.clearVotesList = function() {
  return this.setVotesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.Event.repeatedFields_ = [2];



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
proto.cometbft.abci.v1.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto.cometbft.abci.v1.EventAttribute.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1.Event}
 */
proto.cometbft.abci.v1.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.Event;
  return proto.cometbft.abci.v1.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.Event}
 */
proto.cometbft.abci.v1.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.EventAttribute;
      reader.readMessage(value,proto.cometbft.abci.v1.EventAttribute.deserializeBinaryFromReader);
      msg.addAttributes(value);
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
proto.cometbft.abci.v1.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cometbft.abci.v1.EventAttribute.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.cometbft.abci.v1.Event.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.Event} returns this
 */
proto.cometbft.abci.v1.Event.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated EventAttribute attributes = 2;
 * @return {!Array<!proto.cometbft.abci.v1.EventAttribute>}
 */
proto.cometbft.abci.v1.Event.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.EventAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.EventAttribute, 2));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.EventAttribute>} value
 * @return {!proto.cometbft.abci.v1.Event} returns this
*/
proto.cometbft.abci.v1.Event.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cometbft.abci.v1.EventAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.EventAttribute}
 */
proto.cometbft.abci.v1.Event.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cometbft.abci.v1.EventAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.Event} returns this
 */
proto.cometbft.abci.v1.Event.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
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
proto.cometbft.abci.v1.EventAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.EventAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.EventAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.EventAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    index: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.cometbft.abci.v1.EventAttribute}
 */
proto.cometbft.abci.v1.EventAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.EventAttribute;
  return proto.cometbft.abci.v1.EventAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.EventAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.EventAttribute}
 */
proto.cometbft.abci.v1.EventAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
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
proto.cometbft.abci.v1.EventAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.EventAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.EventAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.EventAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIndex();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.cometbft.abci.v1.EventAttribute.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.EventAttribute} returns this
 */
proto.cometbft.abci.v1.EventAttribute.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.cometbft.abci.v1.EventAttribute.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.EventAttribute} returns this
 */
proto.cometbft.abci.v1.EventAttribute.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool index = 3;
 * @return {boolean}
 */
proto.cometbft.abci.v1.EventAttribute.prototype.getIndex = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cometbft.abci.v1.EventAttribute} returns this
 */
proto.cometbft.abci.v1.EventAttribute.prototype.setIndex = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1.ExecTxResult.repeatedFields_ = [7];



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
proto.cometbft.abci.v1.ExecTxResult.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ExecTxResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ExecTxResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExecTxResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    log: jspb.Message.getFieldWithDefault(msg, 3, ""),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    gasWanted: jspb.Message.getFieldWithDefault(msg, 5, 0),
    gasUsed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.cometbft.abci.v1.Event.toObject, includeInstance),
    codespace: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.cometbft.abci.v1.ExecTxResult}
 */
proto.cometbft.abci.v1.ExecTxResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ExecTxResult;
  return proto.cometbft.abci.v1.ExecTxResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ExecTxResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ExecTxResult}
 */
proto.cometbft.abci.v1.ExecTxResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLog(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGasWanted(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGasUsed(value);
      break;
    case 7:
      var value = new proto.cometbft.abci.v1.Event;
      reader.readMessage(value,proto.cometbft.abci.v1.Event.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodespace(value);
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
proto.cometbft.abci.v1.ExecTxResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ExecTxResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ExecTxResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExecTxResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getLog();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGasWanted();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getGasUsed();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.cometbft.abci.v1.Event.serializeBinaryToWriter
    );
  }
  f = message.getCodespace();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.ExecTxResult} returns this
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ExecTxResult} returns this
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.ExecTxResult} returns this
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.ExecTxResult} returns this
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 gas_wanted = 5;
 * @return {number}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getGasWanted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.ExecTxResult} returns this
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.setGasWanted = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 gas_used = 6;
 * @return {number}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getGasUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.ExecTxResult} returns this
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.setGasUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated Event events = 7;
 * @return {!Array<!proto.cometbft.abci.v1.Event>}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1.Event, 7));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1.Event>} value
 * @return {!proto.cometbft.abci.v1.ExecTxResult} returns this
*/
proto.cometbft.abci.v1.ExecTxResult.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.cometbft.abci.v1.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1.Event}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.cometbft.abci.v1.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1.ExecTxResult} returns this
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * optional string codespace = 8;
 * @return {string}
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.getCodespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.ExecTxResult} returns this
 */
proto.cometbft.abci.v1.ExecTxResult.prototype.setCodespace = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.cometbft.abci.v1.TxResult.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.TxResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.TxResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.TxResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tx: msg.getTx_asB64(),
    result: (f = msg.getResult()) && proto.cometbft.abci.v1.ExecTxResult.toObject(includeInstance, f)
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
 * @return {!proto.cometbft.abci.v1.TxResult}
 */
proto.cometbft.abci.v1.TxResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.TxResult;
  return proto.cometbft.abci.v1.TxResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.TxResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.TxResult}
 */
proto.cometbft.abci.v1.TxResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTx(value);
      break;
    case 4:
      var value = new proto.cometbft.abci.v1.ExecTxResult;
      reader.readMessage(value,proto.cometbft.abci.v1.ExecTxResult.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.cometbft.abci.v1.TxResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.TxResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.TxResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.TxResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTx_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cometbft.abci.v1.ExecTxResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 height = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.TxResult.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.TxResult} returns this
 */
proto.cometbft.abci.v1.TxResult.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.cometbft.abci.v1.TxResult.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.TxResult} returns this
 */
proto.cometbft.abci.v1.TxResult.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes tx = 3;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.TxResult.prototype.getTx = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes tx = 3;
 * This is a type-conversion wrapper around `getTx()`
 * @return {string}
 */
proto.cometbft.abci.v1.TxResult.prototype.getTx_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTx()));
};


/**
 * optional bytes tx = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTx()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.TxResult.prototype.getTx_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTx()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.TxResult} returns this
 */
proto.cometbft.abci.v1.TxResult.prototype.setTx = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional ExecTxResult result = 4;
 * @return {?proto.cometbft.abci.v1.ExecTxResult}
 */
proto.cometbft.abci.v1.TxResult.prototype.getResult = function() {
  return /** @type{?proto.cometbft.abci.v1.ExecTxResult} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.ExecTxResult, 4));
};


/**
 * @param {?proto.cometbft.abci.v1.ExecTxResult|undefined} value
 * @return {!proto.cometbft.abci.v1.TxResult} returns this
*/
proto.cometbft.abci.v1.TxResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.TxResult} returns this
 */
proto.cometbft.abci.v1.TxResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.TxResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.cometbft.abci.v1.Validator.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.Validator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.Validator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Validator.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    power: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cometbft.abci.v1.Validator}
 */
proto.cometbft.abci.v1.Validator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.Validator;
  return proto.cometbft.abci.v1.Validator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.Validator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.Validator}
 */
proto.cometbft.abci.v1.Validator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPower(value);
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
proto.cometbft.abci.v1.Validator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.Validator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.Validator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Validator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPower();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.Validator.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.cometbft.abci.v1.Validator.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.Validator.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.Validator} returns this
 */
proto.cometbft.abci.v1.Validator.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 power = 3;
 * @return {number}
 */
proto.cometbft.abci.v1.Validator.prototype.getPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.Validator} returns this
 */
proto.cometbft.abci.v1.Validator.prototype.setPower = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.cometbft.abci.v1.ValidatorUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ValidatorUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ValidatorUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ValidatorUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    power: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pubKeyBytes: msg.getPubKeyBytes_asB64(),
    pubKeyType: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cometbft.abci.v1.ValidatorUpdate}
 */
proto.cometbft.abci.v1.ValidatorUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ValidatorUpdate;
  return proto.cometbft.abci.v1.ValidatorUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ValidatorUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ValidatorUpdate}
 */
proto.cometbft.abci.v1.ValidatorUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPower(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubKeyBytes(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKeyType(value);
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
proto.cometbft.abci.v1.ValidatorUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ValidatorUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ValidatorUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ValidatorUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPower();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPubKeyBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPubKeyType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 power = 2;
 * @return {number}
 */
proto.cometbft.abci.v1.ValidatorUpdate.prototype.getPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.ValidatorUpdate} returns this
 */
proto.cometbft.abci.v1.ValidatorUpdate.prototype.setPower = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes pub_key_bytes = 3;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ValidatorUpdate.prototype.getPubKeyBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes pub_key_bytes = 3;
 * This is a type-conversion wrapper around `getPubKeyBytes()`
 * @return {string}
 */
proto.cometbft.abci.v1.ValidatorUpdate.prototype.getPubKeyBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubKeyBytes()));
};


/**
 * optional bytes pub_key_bytes = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubKeyBytes()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ValidatorUpdate.prototype.getPubKeyBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubKeyBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ValidatorUpdate} returns this
 */
proto.cometbft.abci.v1.ValidatorUpdate.prototype.setPubKeyBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string pub_key_type = 4;
 * @return {string}
 */
proto.cometbft.abci.v1.ValidatorUpdate.prototype.getPubKeyType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1.ValidatorUpdate} returns this
 */
proto.cometbft.abci.v1.ValidatorUpdate.prototype.setPubKeyType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.cometbft.abci.v1.VoteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.VoteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.VoteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.VoteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto.cometbft.abci.v1.Validator.toObject(includeInstance, f),
    blockIdFlag: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cometbft.abci.v1.VoteInfo}
 */
proto.cometbft.abci.v1.VoteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.VoteInfo;
  return proto.cometbft.abci.v1.VoteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.VoteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.VoteInfo}
 */
proto.cometbft.abci.v1.VoteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1.Validator;
      reader.readMessage(value,proto.cometbft.abci.v1.Validator.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 3:
      var value = /** @type {!proto.cometbft.types.v1.BlockIDFlag} */ (reader.readEnum());
      msg.setBlockIdFlag(value);
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
proto.cometbft.abci.v1.VoteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.VoteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.VoteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.VoteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1.Validator.serializeBinaryToWriter
    );
  }
  f = message.getBlockIdFlag();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional Validator validator = 1;
 * @return {?proto.cometbft.abci.v1.Validator}
 */
proto.cometbft.abci.v1.VoteInfo.prototype.getValidator = function() {
  return /** @type{?proto.cometbft.abci.v1.Validator} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.Validator, 1));
};


/**
 * @param {?proto.cometbft.abci.v1.Validator|undefined} value
 * @return {!proto.cometbft.abci.v1.VoteInfo} returns this
*/
proto.cometbft.abci.v1.VoteInfo.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.VoteInfo} returns this
 */
proto.cometbft.abci.v1.VoteInfo.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.VoteInfo.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cometbft.types.v1.BlockIDFlag block_id_flag = 3;
 * @return {!proto.cometbft.types.v1.BlockIDFlag}
 */
proto.cometbft.abci.v1.VoteInfo.prototype.getBlockIdFlag = function() {
  return /** @type {!proto.cometbft.types.v1.BlockIDFlag} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cometbft.types.v1.BlockIDFlag} value
 * @return {!proto.cometbft.abci.v1.VoteInfo} returns this
 */
proto.cometbft.abci.v1.VoteInfo.prototype.setBlockIdFlag = function(value) {
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
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.ExtendedVoteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.ExtendedVoteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto.cometbft.abci.v1.Validator.toObject(includeInstance, f),
    voteExtension: msg.getVoteExtension_asB64(),
    extensionSignature: msg.getExtensionSignature_asB64(),
    blockIdFlag: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.cometbft.abci.v1.ExtendedVoteInfo}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.ExtendedVoteInfo;
  return proto.cometbft.abci.v1.ExtendedVoteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.ExtendedVoteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.ExtendedVoteInfo}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1.Validator;
      reader.readMessage(value,proto.cometbft.abci.v1.Validator.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVoteExtension(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExtensionSignature(value);
      break;
    case 5:
      var value = /** @type {!proto.cometbft.types.v1.BlockIDFlag} */ (reader.readEnum());
      msg.setBlockIdFlag(value);
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
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.ExtendedVoteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.ExtendedVoteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1.Validator.serializeBinaryToWriter
    );
  }
  f = message.getVoteExtension_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getExtensionSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getBlockIdFlag();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional Validator validator = 1;
 * @return {?proto.cometbft.abci.v1.Validator}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.getValidator = function() {
  return /** @type{?proto.cometbft.abci.v1.Validator} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.Validator, 1));
};


/**
 * @param {?proto.cometbft.abci.v1.Validator|undefined} value
 * @return {!proto.cometbft.abci.v1.ExtendedVoteInfo} returns this
*/
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.ExtendedVoteInfo} returns this
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes vote_extension = 3;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.getVoteExtension = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes vote_extension = 3;
 * This is a type-conversion wrapper around `getVoteExtension()`
 * @return {string}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.getVoteExtension_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVoteExtension()));
};


/**
 * optional bytes vote_extension = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVoteExtension()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.getVoteExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoteExtension()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ExtendedVoteInfo} returns this
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.setVoteExtension = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes extension_signature = 4;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.getExtensionSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes extension_signature = 4;
 * This is a type-conversion wrapper around `getExtensionSignature()`
 * @return {string}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.getExtensionSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExtensionSignature()));
};


/**
 * optional bytes extension_signature = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExtensionSignature()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.getExtensionSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExtensionSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.ExtendedVoteInfo} returns this
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.setExtensionSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional cometbft.types.v1.BlockIDFlag block_id_flag = 5;
 * @return {!proto.cometbft.types.v1.BlockIDFlag}
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.getBlockIdFlag = function() {
  return /** @type {!proto.cometbft.types.v1.BlockIDFlag} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.cometbft.types.v1.BlockIDFlag} value
 * @return {!proto.cometbft.abci.v1.ExtendedVoteInfo} returns this
 */
proto.cometbft.abci.v1.ExtendedVoteInfo.prototype.setBlockIdFlag = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
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
proto.cometbft.abci.v1.Misbehavior.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.Misbehavior.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.Misbehavior} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Misbehavior.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    validator: (f = msg.getValidator()) && proto.cometbft.abci.v1.Validator.toObject(includeInstance, f),
    height: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    totalVotingPower: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.cometbft.abci.v1.Misbehavior}
 */
proto.cometbft.abci.v1.Misbehavior.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.Misbehavior;
  return proto.cometbft.abci.v1.Misbehavior.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.Misbehavior} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.Misbehavior}
 */
proto.cometbft.abci.v1.Misbehavior.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cometbft.abci.v1.MisbehaviorType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1.Validator;
      reader.readMessage(value,proto.cometbft.abci.v1.Validator.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalVotingPower(value);
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
proto.cometbft.abci.v1.Misbehavior.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.Misbehavior.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.Misbehavior} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Misbehavior.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cometbft.abci.v1.Validator.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTotalVotingPower();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional MisbehaviorType type = 1;
 * @return {!proto.cometbft.abci.v1.MisbehaviorType}
 */
proto.cometbft.abci.v1.Misbehavior.prototype.getType = function() {
  return /** @type {!proto.cometbft.abci.v1.MisbehaviorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cometbft.abci.v1.MisbehaviorType} value
 * @return {!proto.cometbft.abci.v1.Misbehavior} returns this
 */
proto.cometbft.abci.v1.Misbehavior.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Validator validator = 2;
 * @return {?proto.cometbft.abci.v1.Validator}
 */
proto.cometbft.abci.v1.Misbehavior.prototype.getValidator = function() {
  return /** @type{?proto.cometbft.abci.v1.Validator} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1.Validator, 2));
};


/**
 * @param {?proto.cometbft.abci.v1.Validator|undefined} value
 * @return {!proto.cometbft.abci.v1.Misbehavior} returns this
*/
proto.cometbft.abci.v1.Misbehavior.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Misbehavior} returns this
 */
proto.cometbft.abci.v1.Misbehavior.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Misbehavior.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.cometbft.abci.v1.Misbehavior.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.Misbehavior} returns this
 */
proto.cometbft.abci.v1.Misbehavior.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cometbft.abci.v1.Misbehavior.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cometbft.abci.v1.Misbehavior} returns this
*/
proto.cometbft.abci.v1.Misbehavior.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1.Misbehavior} returns this
 */
proto.cometbft.abci.v1.Misbehavior.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1.Misbehavior.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 total_voting_power = 5;
 * @return {number}
 */
proto.cometbft.abci.v1.Misbehavior.prototype.getTotalVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.Misbehavior} returns this
 */
proto.cometbft.abci.v1.Misbehavior.prototype.setTotalVotingPower = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.cometbft.abci.v1.Snapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1.Snapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1.Snapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Snapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    format: jspb.Message.getFieldWithDefault(msg, 2, 0),
    chunks: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hash: msg.getHash_asB64(),
    metadata: msg.getMetadata_asB64()
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
 * @return {!proto.cometbft.abci.v1.Snapshot}
 */
proto.cometbft.abci.v1.Snapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1.Snapshot;
  return proto.cometbft.abci.v1.Snapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1.Snapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1.Snapshot}
 */
proto.cometbft.abci.v1.Snapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChunks(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.cometbft.abci.v1.Snapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1.Snapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1.Snapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1.Snapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getChunks();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getMetadata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.cometbft.abci.v1.Snapshot.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.Snapshot} returns this
 */
proto.cometbft.abci.v1.Snapshot.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 format = 2;
 * @return {number}
 */
proto.cometbft.abci.v1.Snapshot.prototype.getFormat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.Snapshot} returns this
 */
proto.cometbft.abci.v1.Snapshot.prototype.setFormat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 chunks = 3;
 * @return {number}
 */
proto.cometbft.abci.v1.Snapshot.prototype.getChunks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1.Snapshot} returns this
 */
proto.cometbft.abci.v1.Snapshot.prototype.setChunks = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.Snapshot.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes hash = 4;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.cometbft.abci.v1.Snapshot.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.Snapshot.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.Snapshot} returns this
 */
proto.cometbft.abci.v1.Snapshot.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes metadata = 5;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1.Snapshot.prototype.getMetadata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes metadata = 5;
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {string}
 */
proto.cometbft.abci.v1.Snapshot.prototype.getMetadata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMetadata()));
};


/**
 * optional bytes metadata = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1.Snapshot.prototype.getMetadata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1.Snapshot} returns this
 */
proto.cometbft.abci.v1.Snapshot.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.cometbft.abci.v1.CheckTxType = {
  CHECK_TX_TYPE_UNKNOWN: 0,
  CHECK_TX_TYPE_RECHECK: 1,
  CHECK_TX_TYPE_CHECK: 2
};

/**
 * @enum {number}
 */
proto.cometbft.abci.v1.OfferSnapshotResult = {
  OFFER_SNAPSHOT_RESULT_UNKNOWN: 0,
  OFFER_SNAPSHOT_RESULT_ACCEPT: 1,
  OFFER_SNAPSHOT_RESULT_ABORT: 2,
  OFFER_SNAPSHOT_RESULT_REJECT: 3,
  OFFER_SNAPSHOT_RESULT_REJECT_FORMAT: 4,
  OFFER_SNAPSHOT_RESULT_REJECT_SENDER: 5
};

/**
 * @enum {number}
 */
proto.cometbft.abci.v1.ApplySnapshotChunkResult = {
  APPLY_SNAPSHOT_CHUNK_RESULT_UNKNOWN: 0,
  APPLY_SNAPSHOT_CHUNK_RESULT_ACCEPT: 1,
  APPLY_SNAPSHOT_CHUNK_RESULT_ABORT: 2,
  APPLY_SNAPSHOT_CHUNK_RESULT_RETRY: 3,
  APPLY_SNAPSHOT_CHUNK_RESULT_RETRY_SNAPSHOT: 4,
  APPLY_SNAPSHOT_CHUNK_RESULT_REJECT_SNAPSHOT: 5
};

/**
 * @enum {number}
 */
proto.cometbft.abci.v1.ProcessProposalStatus = {
  PROCESS_PROPOSAL_STATUS_UNKNOWN: 0,
  PROCESS_PROPOSAL_STATUS_ACCEPT: 1,
  PROCESS_PROPOSAL_STATUS_REJECT: 2
};

/**
 * @enum {number}
 */
proto.cometbft.abci.v1.VerifyVoteExtensionStatus = {
  VERIFY_VOTE_EXTENSION_STATUS_UNKNOWN: 0,
  VERIFY_VOTE_EXTENSION_STATUS_ACCEPT: 1,
  VERIFY_VOTE_EXTENSION_STATUS_REJECT: 2
};

/**
 * @enum {number}
 */
proto.cometbft.abci.v1.MisbehaviorType = {
  MISBEHAVIOR_TYPE_UNKNOWN: 0,
  MISBEHAVIOR_TYPE_DUPLICATE_VOTE: 1,
  MISBEHAVIOR_TYPE_LIGHT_CLIENT_ATTACK: 2
};

goog.object.extend(exports, proto.cometbft.abci.v1);
