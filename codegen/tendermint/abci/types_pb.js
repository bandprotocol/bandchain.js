// source: tendermint/abci/types.proto
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

var tendermint_crypto_proof_pb = require('../../tendermint/crypto/proof_pb.js');
goog.object.extend(proto, tendermint_crypto_proof_pb);
var tendermint_crypto_keys_pb = require('../../tendermint/crypto/keys_pb.js');
goog.object.extend(proto, tendermint_crypto_keys_pb);
var tendermint_types_params_pb = require('../../tendermint/types/params_pb.js');
goog.object.extend(proto, tendermint_types_params_pb);
var tendermint_types_validator_pb = require('../../tendermint/types/validator_pb.js');
goog.object.extend(proto, tendermint_types_validator_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.tendermint.abci.CheckTxType', null, global);
goog.exportSymbol('proto.tendermint.abci.CommitInfo', null, global);
goog.exportSymbol('proto.tendermint.abci.Event', null, global);
goog.exportSymbol('proto.tendermint.abci.EventAttribute', null, global);
goog.exportSymbol('proto.tendermint.abci.ExecTxResult', null, global);
goog.exportSymbol('proto.tendermint.abci.ExtendedCommitInfo', null, global);
goog.exportSymbol('proto.tendermint.abci.ExtendedVoteInfo', null, global);
goog.exportSymbol('proto.tendermint.abci.Misbehavior', null, global);
goog.exportSymbol('proto.tendermint.abci.MisbehaviorType', null, global);
goog.exportSymbol('proto.tendermint.abci.Request', null, global);
goog.exportSymbol('proto.tendermint.abci.Request.ValueCase', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestApplySnapshotChunk', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestCheckTx', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestCommit', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestEcho', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestExtendVote', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestFinalizeBlock', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestFlush', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestInfo', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestInitChain', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestListSnapshots', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestLoadSnapshotChunk', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestOfferSnapshot', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestPrepareProposal', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestProcessProposal', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestQuery', null, global);
goog.exportSymbol('proto.tendermint.abci.RequestVerifyVoteExtension', null, global);
goog.exportSymbol('proto.tendermint.abci.Response', null, global);
goog.exportSymbol('proto.tendermint.abci.Response.ValueCase', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseApplySnapshotChunk', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseApplySnapshotChunk.Result', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseCheckTx', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseCommit', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseEcho', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseException', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseExtendVote', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseFinalizeBlock', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseFlush', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseInfo', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseInitChain', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseListSnapshots', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseLoadSnapshotChunk', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseOfferSnapshot', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseOfferSnapshot.Result', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponsePrepareProposal', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseProcessProposal', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseProcessProposal.ProposalStatus', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseQuery', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseVerifyVoteExtension', null, global);
goog.exportSymbol('proto.tendermint.abci.ResponseVerifyVoteExtension.VerifyStatus', null, global);
goog.exportSymbol('proto.tendermint.abci.Snapshot', null, global);
goog.exportSymbol('proto.tendermint.abci.TxResult', null, global);
goog.exportSymbol('proto.tendermint.abci.Validator', null, global);
goog.exportSymbol('proto.tendermint.abci.ValidatorUpdate', null, global);
goog.exportSymbol('proto.tendermint.abci.VoteInfo', null, global);
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
proto.tendermint.abci.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tendermint.abci.Request.oneofGroups_);
};
goog.inherits(proto.tendermint.abci.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.Request.displayName = 'proto.tendermint.abci.Request';
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
proto.tendermint.abci.RequestEcho = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestEcho, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestEcho.displayName = 'proto.tendermint.abci.RequestEcho';
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
proto.tendermint.abci.RequestFlush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestFlush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestFlush.displayName = 'proto.tendermint.abci.RequestFlush';
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
proto.tendermint.abci.RequestInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestInfo.displayName = 'proto.tendermint.abci.RequestInfo';
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
proto.tendermint.abci.RequestInitChain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.RequestInitChain.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.RequestInitChain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestInitChain.displayName = 'proto.tendermint.abci.RequestInitChain';
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
proto.tendermint.abci.RequestQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestQuery.displayName = 'proto.tendermint.abci.RequestQuery';
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
proto.tendermint.abci.RequestCheckTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestCheckTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestCheckTx.displayName = 'proto.tendermint.abci.RequestCheckTx';
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
proto.tendermint.abci.RequestCommit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestCommit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestCommit.displayName = 'proto.tendermint.abci.RequestCommit';
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
proto.tendermint.abci.RequestListSnapshots = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestListSnapshots, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestListSnapshots.displayName = 'proto.tendermint.abci.RequestListSnapshots';
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
proto.tendermint.abci.RequestOfferSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestOfferSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestOfferSnapshot.displayName = 'proto.tendermint.abci.RequestOfferSnapshot';
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
proto.tendermint.abci.RequestLoadSnapshotChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestLoadSnapshotChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestLoadSnapshotChunk.displayName = 'proto.tendermint.abci.RequestLoadSnapshotChunk';
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
proto.tendermint.abci.RequestApplySnapshotChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestApplySnapshotChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestApplySnapshotChunk.displayName = 'proto.tendermint.abci.RequestApplySnapshotChunk';
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
proto.tendermint.abci.RequestPrepareProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.RequestPrepareProposal.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.RequestPrepareProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestPrepareProposal.displayName = 'proto.tendermint.abci.RequestPrepareProposal';
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
proto.tendermint.abci.RequestProcessProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.RequestProcessProposal.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.RequestProcessProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestProcessProposal.displayName = 'proto.tendermint.abci.RequestProcessProposal';
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
proto.tendermint.abci.RequestExtendVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.RequestExtendVote.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.RequestExtendVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestExtendVote.displayName = 'proto.tendermint.abci.RequestExtendVote';
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
proto.tendermint.abci.RequestVerifyVoteExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.RequestVerifyVoteExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestVerifyVoteExtension.displayName = 'proto.tendermint.abci.RequestVerifyVoteExtension';
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
proto.tendermint.abci.RequestFinalizeBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.RequestFinalizeBlock.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.RequestFinalizeBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.RequestFinalizeBlock.displayName = 'proto.tendermint.abci.RequestFinalizeBlock';
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
proto.tendermint.abci.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tendermint.abci.Response.oneofGroups_);
};
goog.inherits(proto.tendermint.abci.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.Response.displayName = 'proto.tendermint.abci.Response';
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
proto.tendermint.abci.ResponseException = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseException, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseException.displayName = 'proto.tendermint.abci.ResponseException';
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
proto.tendermint.abci.ResponseEcho = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseEcho, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseEcho.displayName = 'proto.tendermint.abci.ResponseEcho';
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
proto.tendermint.abci.ResponseFlush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseFlush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseFlush.displayName = 'proto.tendermint.abci.ResponseFlush';
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
proto.tendermint.abci.ResponseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseInfo.displayName = 'proto.tendermint.abci.ResponseInfo';
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
proto.tendermint.abci.ResponseInitChain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.ResponseInitChain.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.ResponseInitChain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseInitChain.displayName = 'proto.tendermint.abci.ResponseInitChain';
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
proto.tendermint.abci.ResponseQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseQuery.displayName = 'proto.tendermint.abci.ResponseQuery';
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
proto.tendermint.abci.ResponseCheckTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.ResponseCheckTx.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.ResponseCheckTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseCheckTx.displayName = 'proto.tendermint.abci.ResponseCheckTx';
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
proto.tendermint.abci.ResponseCommit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseCommit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseCommit.displayName = 'proto.tendermint.abci.ResponseCommit';
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
proto.tendermint.abci.ResponseListSnapshots = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.ResponseListSnapshots.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.ResponseListSnapshots, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseListSnapshots.displayName = 'proto.tendermint.abci.ResponseListSnapshots';
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
proto.tendermint.abci.ResponseOfferSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseOfferSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseOfferSnapshot.displayName = 'proto.tendermint.abci.ResponseOfferSnapshot';
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
proto.tendermint.abci.ResponseLoadSnapshotChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseLoadSnapshotChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseLoadSnapshotChunk.displayName = 'proto.tendermint.abci.ResponseLoadSnapshotChunk';
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
proto.tendermint.abci.ResponseApplySnapshotChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.ResponseApplySnapshotChunk.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.ResponseApplySnapshotChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseApplySnapshotChunk.displayName = 'proto.tendermint.abci.ResponseApplySnapshotChunk';
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
proto.tendermint.abci.ResponsePrepareProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.ResponsePrepareProposal.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.ResponsePrepareProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponsePrepareProposal.displayName = 'proto.tendermint.abci.ResponsePrepareProposal';
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
proto.tendermint.abci.ResponseProcessProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseProcessProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseProcessProposal.displayName = 'proto.tendermint.abci.ResponseProcessProposal';
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
proto.tendermint.abci.ResponseExtendVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseExtendVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseExtendVote.displayName = 'proto.tendermint.abci.ResponseExtendVote';
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
proto.tendermint.abci.ResponseVerifyVoteExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ResponseVerifyVoteExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseVerifyVoteExtension.displayName = 'proto.tendermint.abci.ResponseVerifyVoteExtension';
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
proto.tendermint.abci.ResponseFinalizeBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.ResponseFinalizeBlock.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.ResponseFinalizeBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ResponseFinalizeBlock.displayName = 'proto.tendermint.abci.ResponseFinalizeBlock';
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
proto.tendermint.abci.CommitInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.CommitInfo.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.CommitInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.CommitInfo.displayName = 'proto.tendermint.abci.CommitInfo';
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
proto.tendermint.abci.ExtendedCommitInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.ExtendedCommitInfo.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.ExtendedCommitInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ExtendedCommitInfo.displayName = 'proto.tendermint.abci.ExtendedCommitInfo';
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
proto.tendermint.abci.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.Event.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.Event.displayName = 'proto.tendermint.abci.Event';
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
proto.tendermint.abci.EventAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.EventAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.EventAttribute.displayName = 'proto.tendermint.abci.EventAttribute';
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
proto.tendermint.abci.ExecTxResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.abci.ExecTxResult.repeatedFields_, null);
};
goog.inherits(proto.tendermint.abci.ExecTxResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ExecTxResult.displayName = 'proto.tendermint.abci.ExecTxResult';
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
proto.tendermint.abci.TxResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.TxResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.TxResult.displayName = 'proto.tendermint.abci.TxResult';
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
proto.tendermint.abci.Validator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.Validator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.Validator.displayName = 'proto.tendermint.abci.Validator';
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
proto.tendermint.abci.ValidatorUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ValidatorUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ValidatorUpdate.displayName = 'proto.tendermint.abci.ValidatorUpdate';
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
proto.tendermint.abci.VoteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.VoteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.VoteInfo.displayName = 'proto.tendermint.abci.VoteInfo';
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
proto.tendermint.abci.ExtendedVoteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.ExtendedVoteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.ExtendedVoteInfo.displayName = 'proto.tendermint.abci.ExtendedVoteInfo';
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
proto.tendermint.abci.Misbehavior = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.Misbehavior, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.Misbehavior.displayName = 'proto.tendermint.abci.Misbehavior';
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
proto.tendermint.abci.Snapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.abci.Snapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.abci.Snapshot.displayName = 'proto.tendermint.abci.Snapshot';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tendermint.abci.Request.oneofGroups_ = [[1,2,3,5,6,8,11,12,13,14,15,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.tendermint.abci.Request.ValueCase = {
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
 * @return {proto.tendermint.abci.Request.ValueCase}
 */
proto.tendermint.abci.Request.prototype.getValueCase = function() {
  return /** @type {proto.tendermint.abci.Request.ValueCase} */(jspb.Message.computeOneofCase(this, proto.tendermint.abci.Request.oneofGroups_[0]));
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
proto.tendermint.abci.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    echo: (f = msg.getEcho()) && proto.tendermint.abci.RequestEcho.toObject(includeInstance, f),
    flush: (f = msg.getFlush()) && proto.tendermint.abci.RequestFlush.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.tendermint.abci.RequestInfo.toObject(includeInstance, f),
    initChain: (f = msg.getInitChain()) && proto.tendermint.abci.RequestInitChain.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && proto.tendermint.abci.RequestQuery.toObject(includeInstance, f),
    checkTx: (f = msg.getCheckTx()) && proto.tendermint.abci.RequestCheckTx.toObject(includeInstance, f),
    commit: (f = msg.getCommit()) && proto.tendermint.abci.RequestCommit.toObject(includeInstance, f),
    listSnapshots: (f = msg.getListSnapshots()) && proto.tendermint.abci.RequestListSnapshots.toObject(includeInstance, f),
    offerSnapshot: (f = msg.getOfferSnapshot()) && proto.tendermint.abci.RequestOfferSnapshot.toObject(includeInstance, f),
    loadSnapshotChunk: (f = msg.getLoadSnapshotChunk()) && proto.tendermint.abci.RequestLoadSnapshotChunk.toObject(includeInstance, f),
    applySnapshotChunk: (f = msg.getApplySnapshotChunk()) && proto.tendermint.abci.RequestApplySnapshotChunk.toObject(includeInstance, f),
    prepareProposal: (f = msg.getPrepareProposal()) && proto.tendermint.abci.RequestPrepareProposal.toObject(includeInstance, f),
    processProposal: (f = msg.getProcessProposal()) && proto.tendermint.abci.RequestProcessProposal.toObject(includeInstance, f),
    extendVote: (f = msg.getExtendVote()) && proto.tendermint.abci.RequestExtendVote.toObject(includeInstance, f),
    verifyVoteExtension: (f = msg.getVerifyVoteExtension()) && proto.tendermint.abci.RequestVerifyVoteExtension.toObject(includeInstance, f),
    finalizeBlock: (f = msg.getFinalizeBlock()) && proto.tendermint.abci.RequestFinalizeBlock.toObject(includeInstance, f)
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
 * @return {!proto.tendermint.abci.Request}
 */
proto.tendermint.abci.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.Request;
  return proto.tendermint.abci.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.Request}
 */
proto.tendermint.abci.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.abci.RequestEcho;
      reader.readMessage(value,proto.tendermint.abci.RequestEcho.deserializeBinaryFromReader);
      msg.setEcho(value);
      break;
    case 2:
      var value = new proto.tendermint.abci.RequestFlush;
      reader.readMessage(value,proto.tendermint.abci.RequestFlush.deserializeBinaryFromReader);
      msg.setFlush(value);
      break;
    case 3:
      var value = new proto.tendermint.abci.RequestInfo;
      reader.readMessage(value,proto.tendermint.abci.RequestInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 5:
      var value = new proto.tendermint.abci.RequestInitChain;
      reader.readMessage(value,proto.tendermint.abci.RequestInitChain.deserializeBinaryFromReader);
      msg.setInitChain(value);
      break;
    case 6:
      var value = new proto.tendermint.abci.RequestQuery;
      reader.readMessage(value,proto.tendermint.abci.RequestQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 8:
      var value = new proto.tendermint.abci.RequestCheckTx;
      reader.readMessage(value,proto.tendermint.abci.RequestCheckTx.deserializeBinaryFromReader);
      msg.setCheckTx(value);
      break;
    case 11:
      var value = new proto.tendermint.abci.RequestCommit;
      reader.readMessage(value,proto.tendermint.abci.RequestCommit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 12:
      var value = new proto.tendermint.abci.RequestListSnapshots;
      reader.readMessage(value,proto.tendermint.abci.RequestListSnapshots.deserializeBinaryFromReader);
      msg.setListSnapshots(value);
      break;
    case 13:
      var value = new proto.tendermint.abci.RequestOfferSnapshot;
      reader.readMessage(value,proto.tendermint.abci.RequestOfferSnapshot.deserializeBinaryFromReader);
      msg.setOfferSnapshot(value);
      break;
    case 14:
      var value = new proto.tendermint.abci.RequestLoadSnapshotChunk;
      reader.readMessage(value,proto.tendermint.abci.RequestLoadSnapshotChunk.deserializeBinaryFromReader);
      msg.setLoadSnapshotChunk(value);
      break;
    case 15:
      var value = new proto.tendermint.abci.RequestApplySnapshotChunk;
      reader.readMessage(value,proto.tendermint.abci.RequestApplySnapshotChunk.deserializeBinaryFromReader);
      msg.setApplySnapshotChunk(value);
      break;
    case 16:
      var value = new proto.tendermint.abci.RequestPrepareProposal;
      reader.readMessage(value,proto.tendermint.abci.RequestPrepareProposal.deserializeBinaryFromReader);
      msg.setPrepareProposal(value);
      break;
    case 17:
      var value = new proto.tendermint.abci.RequestProcessProposal;
      reader.readMessage(value,proto.tendermint.abci.RequestProcessProposal.deserializeBinaryFromReader);
      msg.setProcessProposal(value);
      break;
    case 18:
      var value = new proto.tendermint.abci.RequestExtendVote;
      reader.readMessage(value,proto.tendermint.abci.RequestExtendVote.deserializeBinaryFromReader);
      msg.setExtendVote(value);
      break;
    case 19:
      var value = new proto.tendermint.abci.RequestVerifyVoteExtension;
      reader.readMessage(value,proto.tendermint.abci.RequestVerifyVoteExtension.deserializeBinaryFromReader);
      msg.setVerifyVoteExtension(value);
      break;
    case 20:
      var value = new proto.tendermint.abci.RequestFinalizeBlock;
      reader.readMessage(value,proto.tendermint.abci.RequestFinalizeBlock.deserializeBinaryFromReader);
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
proto.tendermint.abci.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEcho();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tendermint.abci.RequestEcho.serializeBinaryToWriter
    );
  }
  f = message.getFlush();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tendermint.abci.RequestFlush.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tendermint.abci.RequestInfo.serializeBinaryToWriter
    );
  }
  f = message.getInitChain();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tendermint.abci.RequestInitChain.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tendermint.abci.RequestQuery.serializeBinaryToWriter
    );
  }
  f = message.getCheckTx();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.tendermint.abci.RequestCheckTx.serializeBinaryToWriter
    );
  }
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.tendermint.abci.RequestCommit.serializeBinaryToWriter
    );
  }
  f = message.getListSnapshots();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.tendermint.abci.RequestListSnapshots.serializeBinaryToWriter
    );
  }
  f = message.getOfferSnapshot();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.tendermint.abci.RequestOfferSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getLoadSnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.tendermint.abci.RequestLoadSnapshotChunk.serializeBinaryToWriter
    );
  }
  f = message.getApplySnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.tendermint.abci.RequestApplySnapshotChunk.serializeBinaryToWriter
    );
  }
  f = message.getPrepareProposal();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.tendermint.abci.RequestPrepareProposal.serializeBinaryToWriter
    );
  }
  f = message.getProcessProposal();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.tendermint.abci.RequestProcessProposal.serializeBinaryToWriter
    );
  }
  f = message.getExtendVote();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.tendermint.abci.RequestExtendVote.serializeBinaryToWriter
    );
  }
  f = message.getVerifyVoteExtension();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.tendermint.abci.RequestVerifyVoteExtension.serializeBinaryToWriter
    );
  }
  f = message.getFinalizeBlock();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.tendermint.abci.RequestFinalizeBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestEcho echo = 1;
 * @return {?proto.tendermint.abci.RequestEcho}
 */
proto.tendermint.abci.Request.prototype.getEcho = function() {
  return /** @type{?proto.tendermint.abci.RequestEcho} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestEcho, 1));
};


/**
 * @param {?proto.tendermint.abci.RequestEcho|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setEcho = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearEcho = function() {
  return this.setEcho(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasEcho = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RequestFlush flush = 2;
 * @return {?proto.tendermint.abci.RequestFlush}
 */
proto.tendermint.abci.Request.prototype.getFlush = function() {
  return /** @type{?proto.tendermint.abci.RequestFlush} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestFlush, 2));
};


/**
 * @param {?proto.tendermint.abci.RequestFlush|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setFlush = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearFlush = function() {
  return this.setFlush(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasFlush = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RequestInfo info = 3;
 * @return {?proto.tendermint.abci.RequestInfo}
 */
proto.tendermint.abci.Request.prototype.getInfo = function() {
  return /** @type{?proto.tendermint.abci.RequestInfo} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestInfo, 3));
};


/**
 * @param {?proto.tendermint.abci.RequestInfo|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RequestInitChain init_chain = 5;
 * @return {?proto.tendermint.abci.RequestInitChain}
 */
proto.tendermint.abci.Request.prototype.getInitChain = function() {
  return /** @type{?proto.tendermint.abci.RequestInitChain} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestInitChain, 5));
};


/**
 * @param {?proto.tendermint.abci.RequestInitChain|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setInitChain = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearInitChain = function() {
  return this.setInitChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasInitChain = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RequestQuery query = 6;
 * @return {?proto.tendermint.abci.RequestQuery}
 */
proto.tendermint.abci.Request.prototype.getQuery = function() {
  return /** @type{?proto.tendermint.abci.RequestQuery} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestQuery, 6));
};


/**
 * @param {?proto.tendermint.abci.RequestQuery|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RequestCheckTx check_tx = 8;
 * @return {?proto.tendermint.abci.RequestCheckTx}
 */
proto.tendermint.abci.Request.prototype.getCheckTx = function() {
  return /** @type{?proto.tendermint.abci.RequestCheckTx} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestCheckTx, 8));
};


/**
 * @param {?proto.tendermint.abci.RequestCheckTx|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setCheckTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearCheckTx = function() {
  return this.setCheckTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasCheckTx = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RequestCommit commit = 11;
 * @return {?proto.tendermint.abci.RequestCommit}
 */
proto.tendermint.abci.Request.prototype.getCommit = function() {
  return /** @type{?proto.tendermint.abci.RequestCommit} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestCommit, 11));
};


/**
 * @param {?proto.tendermint.abci.RequestCommit|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setCommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional RequestListSnapshots list_snapshots = 12;
 * @return {?proto.tendermint.abci.RequestListSnapshots}
 */
proto.tendermint.abci.Request.prototype.getListSnapshots = function() {
  return /** @type{?proto.tendermint.abci.RequestListSnapshots} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestListSnapshots, 12));
};


/**
 * @param {?proto.tendermint.abci.RequestListSnapshots|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setListSnapshots = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearListSnapshots = function() {
  return this.setListSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasListSnapshots = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional RequestOfferSnapshot offer_snapshot = 13;
 * @return {?proto.tendermint.abci.RequestOfferSnapshot}
 */
proto.tendermint.abci.Request.prototype.getOfferSnapshot = function() {
  return /** @type{?proto.tendermint.abci.RequestOfferSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestOfferSnapshot, 13));
};


/**
 * @param {?proto.tendermint.abci.RequestOfferSnapshot|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setOfferSnapshot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearOfferSnapshot = function() {
  return this.setOfferSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasOfferSnapshot = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional RequestLoadSnapshotChunk load_snapshot_chunk = 14;
 * @return {?proto.tendermint.abci.RequestLoadSnapshotChunk}
 */
proto.tendermint.abci.Request.prototype.getLoadSnapshotChunk = function() {
  return /** @type{?proto.tendermint.abci.RequestLoadSnapshotChunk} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestLoadSnapshotChunk, 14));
};


/**
 * @param {?proto.tendermint.abci.RequestLoadSnapshotChunk|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setLoadSnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearLoadSnapshotChunk = function() {
  return this.setLoadSnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasLoadSnapshotChunk = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional RequestApplySnapshotChunk apply_snapshot_chunk = 15;
 * @return {?proto.tendermint.abci.RequestApplySnapshotChunk}
 */
proto.tendermint.abci.Request.prototype.getApplySnapshotChunk = function() {
  return /** @type{?proto.tendermint.abci.RequestApplySnapshotChunk} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestApplySnapshotChunk, 15));
};


/**
 * @param {?proto.tendermint.abci.RequestApplySnapshotChunk|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setApplySnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearApplySnapshotChunk = function() {
  return this.setApplySnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasApplySnapshotChunk = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional RequestPrepareProposal prepare_proposal = 16;
 * @return {?proto.tendermint.abci.RequestPrepareProposal}
 */
proto.tendermint.abci.Request.prototype.getPrepareProposal = function() {
  return /** @type{?proto.tendermint.abci.RequestPrepareProposal} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestPrepareProposal, 16));
};


/**
 * @param {?proto.tendermint.abci.RequestPrepareProposal|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setPrepareProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearPrepareProposal = function() {
  return this.setPrepareProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasPrepareProposal = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RequestProcessProposal process_proposal = 17;
 * @return {?proto.tendermint.abci.RequestProcessProposal}
 */
proto.tendermint.abci.Request.prototype.getProcessProposal = function() {
  return /** @type{?proto.tendermint.abci.RequestProcessProposal} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestProcessProposal, 17));
};


/**
 * @param {?proto.tendermint.abci.RequestProcessProposal|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setProcessProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearProcessProposal = function() {
  return this.setProcessProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasProcessProposal = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional RequestExtendVote extend_vote = 18;
 * @return {?proto.tendermint.abci.RequestExtendVote}
 */
proto.tendermint.abci.Request.prototype.getExtendVote = function() {
  return /** @type{?proto.tendermint.abci.RequestExtendVote} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestExtendVote, 18));
};


/**
 * @param {?proto.tendermint.abci.RequestExtendVote|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setExtendVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearExtendVote = function() {
  return this.setExtendVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasExtendVote = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional RequestVerifyVoteExtension verify_vote_extension = 19;
 * @return {?proto.tendermint.abci.RequestVerifyVoteExtension}
 */
proto.tendermint.abci.Request.prototype.getVerifyVoteExtension = function() {
  return /** @type{?proto.tendermint.abci.RequestVerifyVoteExtension} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestVerifyVoteExtension, 19));
};


/**
 * @param {?proto.tendermint.abci.RequestVerifyVoteExtension|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setVerifyVoteExtension = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearVerifyVoteExtension = function() {
  return this.setVerifyVoteExtension(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasVerifyVoteExtension = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional RequestFinalizeBlock finalize_block = 20;
 * @return {?proto.tendermint.abci.RequestFinalizeBlock}
 */
proto.tendermint.abci.Request.prototype.getFinalizeBlock = function() {
  return /** @type{?proto.tendermint.abci.RequestFinalizeBlock} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.RequestFinalizeBlock, 20));
};


/**
 * @param {?proto.tendermint.abci.RequestFinalizeBlock|undefined} value
 * @return {!proto.tendermint.abci.Request} returns this
*/
proto.tendermint.abci.Request.prototype.setFinalizeBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.tendermint.abci.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Request} returns this
 */
proto.tendermint.abci.Request.prototype.clearFinalizeBlock = function() {
  return this.setFinalizeBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Request.prototype.hasFinalizeBlock = function() {
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
proto.tendermint.abci.RequestEcho.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestEcho.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestEcho} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestEcho.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.RequestEcho}
 */
proto.tendermint.abci.RequestEcho.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestEcho;
  return proto.tendermint.abci.RequestEcho.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestEcho} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestEcho}
 */
proto.tendermint.abci.RequestEcho.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.RequestEcho.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestEcho.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestEcho} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestEcho.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.RequestEcho.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.RequestEcho} returns this
 */
proto.tendermint.abci.RequestEcho.prototype.setMessage = function(value) {
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
proto.tendermint.abci.RequestFlush.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestFlush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestFlush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestFlush.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.RequestFlush}
 */
proto.tendermint.abci.RequestFlush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestFlush;
  return proto.tendermint.abci.RequestFlush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestFlush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestFlush}
 */
proto.tendermint.abci.RequestFlush.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.RequestFlush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestFlush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestFlush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestFlush.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.RequestInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.RequestInfo}
 */
proto.tendermint.abci.RequestInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestInfo;
  return proto.tendermint.abci.RequestInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestInfo}
 */
proto.tendermint.abci.RequestInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.RequestInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.RequestInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.RequestInfo} returns this
 */
proto.tendermint.abci.RequestInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 block_version = 2;
 * @return {number}
 */
proto.tendermint.abci.RequestInfo.prototype.getBlockVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestInfo} returns this
 */
proto.tendermint.abci.RequestInfo.prototype.setBlockVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 p2p_version = 3;
 * @return {number}
 */
proto.tendermint.abci.RequestInfo.prototype.getP2pVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestInfo} returns this
 */
proto.tendermint.abci.RequestInfo.prototype.setP2pVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string abci_version = 4;
 * @return {string}
 */
proto.tendermint.abci.RequestInfo.prototype.getAbciVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.RequestInfo} returns this
 */
proto.tendermint.abci.RequestInfo.prototype.setAbciVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.RequestInitChain.repeatedFields_ = [4];



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
proto.tendermint.abci.RequestInitChain.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestInitChain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestInitChain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestInitChain.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    chainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    consensusParams: (f = msg.getConsensusParams()) && tendermint_types_params_pb.ConsensusParams.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.tendermint.abci.ValidatorUpdate.toObject, includeInstance),
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
 * @return {!proto.tendermint.abci.RequestInitChain}
 */
proto.tendermint.abci.RequestInitChain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestInitChain;
  return proto.tendermint.abci.RequestInitChain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestInitChain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestInitChain}
 */
proto.tendermint.abci.RequestInitChain.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new tendermint_types_params_pb.ConsensusParams;
      reader.readMessage(value,tendermint_types_params_pb.ConsensusParams.deserializeBinaryFromReader);
      msg.setConsensusParams(value);
      break;
    case 4:
      var value = new proto.tendermint.abci.ValidatorUpdate;
      reader.readMessage(value,proto.tendermint.abci.ValidatorUpdate.deserializeBinaryFromReader);
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
proto.tendermint.abci.RequestInitChain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestInitChain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestInitChain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestInitChain.serializeBinaryToWriter = function(message, writer) {
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
      tendermint_types_params_pb.ConsensusParams.serializeBinaryToWriter
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.tendermint.abci.ValidatorUpdate.serializeBinaryToWriter
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
proto.tendermint.abci.RequestInitChain.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tendermint.abci.RequestInitChain} returns this
*/
proto.tendermint.abci.RequestInitChain.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestInitChain} returns this
 */
proto.tendermint.abci.RequestInitChain.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestInitChain.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string chain_id = 2;
 * @return {string}
 */
proto.tendermint.abci.RequestInitChain.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.RequestInitChain} returns this
 */
proto.tendermint.abci.RequestInitChain.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional tendermint.types.ConsensusParams consensus_params = 3;
 * @return {?proto.tendermint.types.ConsensusParams}
 */
proto.tendermint.abci.RequestInitChain.prototype.getConsensusParams = function() {
  return /** @type{?proto.tendermint.types.ConsensusParams} */ (
    jspb.Message.getWrapperField(this, tendermint_types_params_pb.ConsensusParams, 3));
};


/**
 * @param {?proto.tendermint.types.ConsensusParams|undefined} value
 * @return {!proto.tendermint.abci.RequestInitChain} returns this
*/
proto.tendermint.abci.RequestInitChain.prototype.setConsensusParams = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestInitChain} returns this
 */
proto.tendermint.abci.RequestInitChain.prototype.clearConsensusParams = function() {
  return this.setConsensusParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestInitChain.prototype.hasConsensusParams = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ValidatorUpdate validators = 4;
 * @return {!Array<!proto.tendermint.abci.ValidatorUpdate>}
 */
proto.tendermint.abci.RequestInitChain.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.tendermint.abci.ValidatorUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.ValidatorUpdate, 4));
};


/**
 * @param {!Array<!proto.tendermint.abci.ValidatorUpdate>} value
 * @return {!proto.tendermint.abci.RequestInitChain} returns this
*/
proto.tendermint.abci.RequestInitChain.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tendermint.abci.ValidatorUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.ValidatorUpdate}
 */
proto.tendermint.abci.RequestInitChain.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tendermint.abci.ValidatorUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.RequestInitChain} returns this
 */
proto.tendermint.abci.RequestInitChain.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional bytes app_state_bytes = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestInitChain.prototype.getAppStateBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes app_state_bytes = 5;
 * This is a type-conversion wrapper around `getAppStateBytes()`
 * @return {string}
 */
proto.tendermint.abci.RequestInitChain.prototype.getAppStateBytes_asB64 = function() {
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
proto.tendermint.abci.RequestInitChain.prototype.getAppStateBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppStateBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestInitChain} returns this
 */
proto.tendermint.abci.RequestInitChain.prototype.setAppStateBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional int64 initial_height = 6;
 * @return {number}
 */
proto.tendermint.abci.RequestInitChain.prototype.getInitialHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestInitChain} returns this
 */
proto.tendermint.abci.RequestInitChain.prototype.setInitialHeight = function(value) {
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
proto.tendermint.abci.RequestQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestQuery.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.RequestQuery}
 */
proto.tendermint.abci.RequestQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestQuery;
  return proto.tendermint.abci.RequestQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestQuery}
 */
proto.tendermint.abci.RequestQuery.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.RequestQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestQuery.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.RequestQuery.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.tendermint.abci.RequestQuery.prototype.getData_asB64 = function() {
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
proto.tendermint.abci.RequestQuery.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestQuery} returns this
 */
proto.tendermint.abci.RequestQuery.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.tendermint.abci.RequestQuery.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.RequestQuery} returns this
 */
proto.tendermint.abci.RequestQuery.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.tendermint.abci.RequestQuery.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestQuery} returns this
 */
proto.tendermint.abci.RequestQuery.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool prove = 4;
 * @return {boolean}
 */
proto.tendermint.abci.RequestQuery.prototype.getProve = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tendermint.abci.RequestQuery} returns this
 */
proto.tendermint.abci.RequestQuery.prototype.setProve = function(value) {
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
proto.tendermint.abci.RequestCheckTx.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestCheckTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestCheckTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestCheckTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: msg.getTx_asB64(),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tendermint.abci.RequestCheckTx}
 */
proto.tendermint.abci.RequestCheckTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestCheckTx;
  return proto.tendermint.abci.RequestCheckTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestCheckTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestCheckTx}
 */
proto.tendermint.abci.RequestCheckTx.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {!proto.tendermint.abci.CheckTxType} */ (reader.readEnum());
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
proto.tendermint.abci.RequestCheckTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestCheckTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestCheckTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestCheckTx.serializeBinaryToWriter = function(message, writer) {
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
      2,
      f
    );
  }
};


/**
 * optional bytes tx = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestCheckTx.prototype.getTx = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes tx = 1;
 * This is a type-conversion wrapper around `getTx()`
 * @return {string}
 */
proto.tendermint.abci.RequestCheckTx.prototype.getTx_asB64 = function() {
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
proto.tendermint.abci.RequestCheckTx.prototype.getTx_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTx()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestCheckTx} returns this
 */
proto.tendermint.abci.RequestCheckTx.prototype.setTx = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional CheckTxType type = 2;
 * @return {!proto.tendermint.abci.CheckTxType}
 */
proto.tendermint.abci.RequestCheckTx.prototype.getType = function() {
  return /** @type {!proto.tendermint.abci.CheckTxType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tendermint.abci.CheckTxType} value
 * @return {!proto.tendermint.abci.RequestCheckTx} returns this
 */
proto.tendermint.abci.RequestCheckTx.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.tendermint.abci.RequestCommit.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestCommit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestCommit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestCommit.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.RequestCommit}
 */
proto.tendermint.abci.RequestCommit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestCommit;
  return proto.tendermint.abci.RequestCommit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestCommit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestCommit}
 */
proto.tendermint.abci.RequestCommit.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.RequestCommit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestCommit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestCommit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestCommit.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.RequestListSnapshots.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestListSnapshots.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestListSnapshots} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestListSnapshots.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.RequestListSnapshots}
 */
proto.tendermint.abci.RequestListSnapshots.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestListSnapshots;
  return proto.tendermint.abci.RequestListSnapshots.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestListSnapshots} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestListSnapshots}
 */
proto.tendermint.abci.RequestListSnapshots.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.RequestListSnapshots.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestListSnapshots.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestListSnapshots} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestListSnapshots.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.RequestOfferSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestOfferSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestOfferSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestOfferSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshot: (f = msg.getSnapshot()) && proto.tendermint.abci.Snapshot.toObject(includeInstance, f),
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
 * @return {!proto.tendermint.abci.RequestOfferSnapshot}
 */
proto.tendermint.abci.RequestOfferSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestOfferSnapshot;
  return proto.tendermint.abci.RequestOfferSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestOfferSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestOfferSnapshot}
 */
proto.tendermint.abci.RequestOfferSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.abci.Snapshot;
      reader.readMessage(value,proto.tendermint.abci.Snapshot.deserializeBinaryFromReader);
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
proto.tendermint.abci.RequestOfferSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestOfferSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestOfferSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestOfferSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tendermint.abci.Snapshot.serializeBinaryToWriter
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
 * @return {?proto.tendermint.abci.Snapshot}
 */
proto.tendermint.abci.RequestOfferSnapshot.prototype.getSnapshot = function() {
  return /** @type{?proto.tendermint.abci.Snapshot} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.Snapshot, 1));
};


/**
 * @param {?proto.tendermint.abci.Snapshot|undefined} value
 * @return {!proto.tendermint.abci.RequestOfferSnapshot} returns this
*/
proto.tendermint.abci.RequestOfferSnapshot.prototype.setSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestOfferSnapshot} returns this
 */
proto.tendermint.abci.RequestOfferSnapshot.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestOfferSnapshot.prototype.hasSnapshot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes app_hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestOfferSnapshot.prototype.getAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes app_hash = 2;
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {string}
 */
proto.tendermint.abci.RequestOfferSnapshot.prototype.getAppHash_asB64 = function() {
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
proto.tendermint.abci.RequestOfferSnapshot.prototype.getAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestOfferSnapshot} returns this
 */
proto.tendermint.abci.RequestOfferSnapshot.prototype.setAppHash = function(value) {
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
proto.tendermint.abci.RequestLoadSnapshotChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestLoadSnapshotChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestLoadSnapshotChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestLoadSnapshotChunk.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.RequestLoadSnapshotChunk}
 */
proto.tendermint.abci.RequestLoadSnapshotChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestLoadSnapshotChunk;
  return proto.tendermint.abci.RequestLoadSnapshotChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestLoadSnapshotChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestLoadSnapshotChunk}
 */
proto.tendermint.abci.RequestLoadSnapshotChunk.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.RequestLoadSnapshotChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestLoadSnapshotChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestLoadSnapshotChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestLoadSnapshotChunk.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.RequestLoadSnapshotChunk.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestLoadSnapshotChunk} returns this
 */
proto.tendermint.abci.RequestLoadSnapshotChunk.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 format = 2;
 * @return {number}
 */
proto.tendermint.abci.RequestLoadSnapshotChunk.prototype.getFormat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestLoadSnapshotChunk} returns this
 */
proto.tendermint.abci.RequestLoadSnapshotChunk.prototype.setFormat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 chunk = 3;
 * @return {number}
 */
proto.tendermint.abci.RequestLoadSnapshotChunk.prototype.getChunk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestLoadSnapshotChunk} returns this
 */
proto.tendermint.abci.RequestLoadSnapshotChunk.prototype.setChunk = function(value) {
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
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestApplySnapshotChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestApplySnapshotChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestApplySnapshotChunk.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.RequestApplySnapshotChunk}
 */
proto.tendermint.abci.RequestApplySnapshotChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestApplySnapshotChunk;
  return proto.tendermint.abci.RequestApplySnapshotChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestApplySnapshotChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestApplySnapshotChunk}
 */
proto.tendermint.abci.RequestApplySnapshotChunk.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestApplySnapshotChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestApplySnapshotChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestApplySnapshotChunk.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestApplySnapshotChunk} returns this
 */
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.getChunk_asB64 = function() {
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
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestApplySnapshotChunk} returns this
 */
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string sender = 3;
 * @return {string}
 */
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.RequestApplySnapshotChunk} returns this
 */
proto.tendermint.abci.RequestApplySnapshotChunk.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.RequestPrepareProposal.repeatedFields_ = [2,4];



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
proto.tendermint.abci.RequestPrepareProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestPrepareProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestPrepareProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestPrepareProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxTxBytes: jspb.Message.getFieldWithDefault(msg, 1, 0),
    txsList: msg.getTxsList_asB64(),
    localLastCommit: (f = msg.getLocalLastCommit()) && proto.tendermint.abci.ExtendedCommitInfo.toObject(includeInstance, f),
    misbehaviorList: jspb.Message.toObjectList(msg.getMisbehaviorList(),
    proto.tendermint.abci.Misbehavior.toObject, includeInstance),
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
 * @return {!proto.tendermint.abci.RequestPrepareProposal}
 */
proto.tendermint.abci.RequestPrepareProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestPrepareProposal;
  return proto.tendermint.abci.RequestPrepareProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestPrepareProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestPrepareProposal}
 */
proto.tendermint.abci.RequestPrepareProposal.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.ExtendedCommitInfo;
      reader.readMessage(value,proto.tendermint.abci.ExtendedCommitInfo.deserializeBinaryFromReader);
      msg.setLocalLastCommit(value);
      break;
    case 4:
      var value = new proto.tendermint.abci.Misbehavior;
      reader.readMessage(value,proto.tendermint.abci.Misbehavior.deserializeBinaryFromReader);
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
proto.tendermint.abci.RequestPrepareProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestPrepareProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestPrepareProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestPrepareProposal.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.ExtendedCommitInfo.serializeBinaryToWriter
    );
  }
  f = message.getMisbehaviorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.tendermint.abci.Misbehavior.serializeBinaryToWriter
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
proto.tendermint.abci.RequestPrepareProposal.prototype.getMaxTxBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.setMaxTxBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated bytes txs = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes txs = 2;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getTxsList_asB64 = function() {
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
proto.tendermint.abci.RequestPrepareProposal.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};


/**
 * optional ExtendedCommitInfo local_last_commit = 3;
 * @return {?proto.tendermint.abci.ExtendedCommitInfo}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getLocalLastCommit = function() {
  return /** @type{?proto.tendermint.abci.ExtendedCommitInfo} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ExtendedCommitInfo, 3));
};


/**
 * @param {?proto.tendermint.abci.ExtendedCommitInfo|undefined} value
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
*/
proto.tendermint.abci.RequestPrepareProposal.prototype.setLocalLastCommit = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.clearLocalLastCommit = function() {
  return this.setLocalLastCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.hasLocalLastCommit = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Misbehavior misbehavior = 4;
 * @return {!Array<!proto.tendermint.abci.Misbehavior>}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getMisbehaviorList = function() {
  return /** @type{!Array<!proto.tendermint.abci.Misbehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.Misbehavior, 4));
};


/**
 * @param {!Array<!proto.tendermint.abci.Misbehavior>} value
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
*/
proto.tendermint.abci.RequestPrepareProposal.prototype.setMisbehaviorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tendermint.abci.Misbehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.Misbehavior}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.addMisbehavior = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tendermint.abci.Misbehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.clearMisbehaviorList = function() {
  return this.setMisbehaviorList([]);
};


/**
 * optional int64 height = 5;
 * @return {number}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
*/
proto.tendermint.abci.RequestPrepareProposal.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes next_validators_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getNextValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes next_validators_hash = 7;
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {string}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getNextValidatorsHash_asB64 = function() {
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
proto.tendermint.abci.RequestPrepareProposal.prototype.getNextValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.setNextValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes proposer_address = 8;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getProposerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes proposer_address = 8;
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {string}
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.getProposerAddress_asB64 = function() {
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
proto.tendermint.abci.RequestPrepareProposal.prototype.getProposerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestPrepareProposal} returns this
 */
proto.tendermint.abci.RequestPrepareProposal.prototype.setProposerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.RequestProcessProposal.repeatedFields_ = [1,3];



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
proto.tendermint.abci.RequestProcessProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestProcessProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestProcessProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestProcessProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    txsList: msg.getTxsList_asB64(),
    proposedLastCommit: (f = msg.getProposedLastCommit()) && proto.tendermint.abci.CommitInfo.toObject(includeInstance, f),
    misbehaviorList: jspb.Message.toObjectList(msg.getMisbehaviorList(),
    proto.tendermint.abci.Misbehavior.toObject, includeInstance),
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
 * @return {!proto.tendermint.abci.RequestProcessProposal}
 */
proto.tendermint.abci.RequestProcessProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestProcessProposal;
  return proto.tendermint.abci.RequestProcessProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestProcessProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestProcessProposal}
 */
proto.tendermint.abci.RequestProcessProposal.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.CommitInfo;
      reader.readMessage(value,proto.tendermint.abci.CommitInfo.deserializeBinaryFromReader);
      msg.setProposedLastCommit(value);
      break;
    case 3:
      var value = new proto.tendermint.abci.Misbehavior;
      reader.readMessage(value,proto.tendermint.abci.Misbehavior.deserializeBinaryFromReader);
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
proto.tendermint.abci.RequestProcessProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestProcessProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestProcessProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestProcessProposal.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.CommitInfo.serializeBinaryToWriter
    );
  }
  f = message.getMisbehaviorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tendermint.abci.Misbehavior.serializeBinaryToWriter
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
proto.tendermint.abci.RequestProcessProposal.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes txs = 1;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getTxsList_asB64 = function() {
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
proto.tendermint.abci.RequestProcessProposal.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};


/**
 * optional CommitInfo proposed_last_commit = 2;
 * @return {?proto.tendermint.abci.CommitInfo}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getProposedLastCommit = function() {
  return /** @type{?proto.tendermint.abci.CommitInfo} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.CommitInfo, 2));
};


/**
 * @param {?proto.tendermint.abci.CommitInfo|undefined} value
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
*/
proto.tendermint.abci.RequestProcessProposal.prototype.setProposedLastCommit = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.clearProposedLastCommit = function() {
  return this.setProposedLastCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.hasProposedLastCommit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Misbehavior misbehavior = 3;
 * @return {!Array<!proto.tendermint.abci.Misbehavior>}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getMisbehaviorList = function() {
  return /** @type{!Array<!proto.tendermint.abci.Misbehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.Misbehavior, 3));
};


/**
 * @param {!Array<!proto.tendermint.abci.Misbehavior>} value
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
*/
proto.tendermint.abci.RequestProcessProposal.prototype.setMisbehaviorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tendermint.abci.Misbehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.Misbehavior}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.addMisbehavior = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tendermint.abci.Misbehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.clearMisbehaviorList = function() {
  return this.setMisbehaviorList([]);
};


/**
 * optional bytes hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes hash = 4;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getHash_asB64 = function() {
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
proto.tendermint.abci.RequestProcessProposal.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int64 height = 5;
 * @return {number}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
*/
proto.tendermint.abci.RequestProcessProposal.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes next_validators_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getNextValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes next_validators_hash = 7;
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {string}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getNextValidatorsHash_asB64 = function() {
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
proto.tendermint.abci.RequestProcessProposal.prototype.getNextValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.setNextValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes proposer_address = 8;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getProposerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes proposer_address = 8;
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {string}
 */
proto.tendermint.abci.RequestProcessProposal.prototype.getProposerAddress_asB64 = function() {
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
proto.tendermint.abci.RequestProcessProposal.prototype.getProposerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestProcessProposal} returns this
 */
proto.tendermint.abci.RequestProcessProposal.prototype.setProposerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.RequestExtendVote.repeatedFields_ = [4,6];



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
proto.tendermint.abci.RequestExtendVote.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestExtendVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestExtendVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestExtendVote.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64(),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    txsList: msg.getTxsList_asB64(),
    proposedLastCommit: (f = msg.getProposedLastCommit()) && proto.tendermint.abci.CommitInfo.toObject(includeInstance, f),
    misbehaviorList: jspb.Message.toObjectList(msg.getMisbehaviorList(),
    proto.tendermint.abci.Misbehavior.toObject, includeInstance),
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
 * @return {!proto.tendermint.abci.RequestExtendVote}
 */
proto.tendermint.abci.RequestExtendVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestExtendVote;
  return proto.tendermint.abci.RequestExtendVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestExtendVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestExtendVote}
 */
proto.tendermint.abci.RequestExtendVote.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.CommitInfo;
      reader.readMessage(value,proto.tendermint.abci.CommitInfo.deserializeBinaryFromReader);
      msg.setProposedLastCommit(value);
      break;
    case 6:
      var value = new proto.tendermint.abci.Misbehavior;
      reader.readMessage(value,proto.tendermint.abci.Misbehavior.deserializeBinaryFromReader);
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
proto.tendermint.abci.RequestExtendVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestExtendVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestExtendVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestExtendVote.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.CommitInfo.serializeBinaryToWriter
    );
  }
  f = message.getMisbehaviorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.tendermint.abci.Misbehavior.serializeBinaryToWriter
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
proto.tendermint.abci.RequestExtendVote.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getHash_asB64 = function() {
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
proto.tendermint.abci.RequestExtendVote.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 height = 2;
 * @return {number}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
*/
proto.tendermint.abci.RequestExtendVote.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestExtendVote.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated bytes txs = 4;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * repeated bytes txs = 4;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getTxsList_asB64 = function() {
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
proto.tendermint.abci.RequestExtendVote.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};


/**
 * optional CommitInfo proposed_last_commit = 5;
 * @return {?proto.tendermint.abci.CommitInfo}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getProposedLastCommit = function() {
  return /** @type{?proto.tendermint.abci.CommitInfo} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.CommitInfo, 5));
};


/**
 * @param {?proto.tendermint.abci.CommitInfo|undefined} value
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
*/
proto.tendermint.abci.RequestExtendVote.prototype.setProposedLastCommit = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.clearProposedLastCommit = function() {
  return this.setProposedLastCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestExtendVote.prototype.hasProposedLastCommit = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated Misbehavior misbehavior = 6;
 * @return {!Array<!proto.tendermint.abci.Misbehavior>}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getMisbehaviorList = function() {
  return /** @type{!Array<!proto.tendermint.abci.Misbehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.Misbehavior, 6));
};


/**
 * @param {!Array<!proto.tendermint.abci.Misbehavior>} value
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
*/
proto.tendermint.abci.RequestExtendVote.prototype.setMisbehaviorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.tendermint.abci.Misbehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.Misbehavior}
 */
proto.tendermint.abci.RequestExtendVote.prototype.addMisbehavior = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.tendermint.abci.Misbehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.clearMisbehaviorList = function() {
  return this.setMisbehaviorList([]);
};


/**
 * optional bytes next_validators_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getNextValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes next_validators_hash = 7;
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {string}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getNextValidatorsHash_asB64 = function() {
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
proto.tendermint.abci.RequestExtendVote.prototype.getNextValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.setNextValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes proposer_address = 8;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getProposerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes proposer_address = 8;
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {string}
 */
proto.tendermint.abci.RequestExtendVote.prototype.getProposerAddress_asB64 = function() {
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
proto.tendermint.abci.RequestExtendVote.prototype.getProposerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestExtendVote} returns this
 */
proto.tendermint.abci.RequestExtendVote.prototype.setProposerAddress = function(value) {
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
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestVerifyVoteExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestVerifyVoteExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestVerifyVoteExtension.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.RequestVerifyVoteExtension}
 */
proto.tendermint.abci.RequestVerifyVoteExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestVerifyVoteExtension;
  return proto.tendermint.abci.RequestVerifyVoteExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestVerifyVoteExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestVerifyVoteExtension}
 */
proto.tendermint.abci.RequestVerifyVoteExtension.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestVerifyVoteExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestVerifyVoteExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestVerifyVoteExtension.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getHash_asB64 = function() {
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
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestVerifyVoteExtension} returns this
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes validator_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getValidatorAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes validator_address = 2;
 * This is a type-conversion wrapper around `getValidatorAddress()`
 * @return {string}
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getValidatorAddress_asB64 = function() {
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
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getValidatorAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValidatorAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestVerifyVoteExtension} returns this
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.setValidatorAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestVerifyVoteExtension} returns this
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes vote_extension = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getVoteExtension = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes vote_extension = 4;
 * This is a type-conversion wrapper around `getVoteExtension()`
 * @return {string}
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getVoteExtension_asB64 = function() {
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
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.getVoteExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoteExtension()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestVerifyVoteExtension} returns this
 */
proto.tendermint.abci.RequestVerifyVoteExtension.prototype.setVoteExtension = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.RequestFinalizeBlock.repeatedFields_ = [1,3];



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
proto.tendermint.abci.RequestFinalizeBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.RequestFinalizeBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.RequestFinalizeBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestFinalizeBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    txsList: msg.getTxsList_asB64(),
    decidedLastCommit: (f = msg.getDecidedLastCommit()) && proto.tendermint.abci.CommitInfo.toObject(includeInstance, f),
    misbehaviorList: jspb.Message.toObjectList(msg.getMisbehaviorList(),
    proto.tendermint.abci.Misbehavior.toObject, includeInstance),
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
 * @return {!proto.tendermint.abci.RequestFinalizeBlock}
 */
proto.tendermint.abci.RequestFinalizeBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.RequestFinalizeBlock;
  return proto.tendermint.abci.RequestFinalizeBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.RequestFinalizeBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.RequestFinalizeBlock}
 */
proto.tendermint.abci.RequestFinalizeBlock.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.CommitInfo;
      reader.readMessage(value,proto.tendermint.abci.CommitInfo.deserializeBinaryFromReader);
      msg.setDecidedLastCommit(value);
      break;
    case 3:
      var value = new proto.tendermint.abci.Misbehavior;
      reader.readMessage(value,proto.tendermint.abci.Misbehavior.deserializeBinaryFromReader);
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
proto.tendermint.abci.RequestFinalizeBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.RequestFinalizeBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.RequestFinalizeBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.RequestFinalizeBlock.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.CommitInfo.serializeBinaryToWriter
    );
  }
  f = message.getMisbehaviorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tendermint.abci.Misbehavior.serializeBinaryToWriter
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
proto.tendermint.abci.RequestFinalizeBlock.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes txs = 1;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getTxsList_asB64 = function() {
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
proto.tendermint.abci.RequestFinalizeBlock.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};


/**
 * optional CommitInfo decided_last_commit = 2;
 * @return {?proto.tendermint.abci.CommitInfo}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getDecidedLastCommit = function() {
  return /** @type{?proto.tendermint.abci.CommitInfo} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.CommitInfo, 2));
};


/**
 * @param {?proto.tendermint.abci.CommitInfo|undefined} value
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
*/
proto.tendermint.abci.RequestFinalizeBlock.prototype.setDecidedLastCommit = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.clearDecidedLastCommit = function() {
  return this.setDecidedLastCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.hasDecidedLastCommit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Misbehavior misbehavior = 3;
 * @return {!Array<!proto.tendermint.abci.Misbehavior>}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getMisbehaviorList = function() {
  return /** @type{!Array<!proto.tendermint.abci.Misbehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.Misbehavior, 3));
};


/**
 * @param {!Array<!proto.tendermint.abci.Misbehavior>} value
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
*/
proto.tendermint.abci.RequestFinalizeBlock.prototype.setMisbehaviorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tendermint.abci.Misbehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.Misbehavior}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.addMisbehavior = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tendermint.abci.Misbehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.clearMisbehaviorList = function() {
  return this.setMisbehaviorList([]);
};


/**
 * optional bytes hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes hash = 4;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getHash_asB64 = function() {
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
proto.tendermint.abci.RequestFinalizeBlock.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int64 height = 5;
 * @return {number}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
*/
proto.tendermint.abci.RequestFinalizeBlock.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes next_validators_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getNextValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes next_validators_hash = 7;
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {string}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getNextValidatorsHash_asB64 = function() {
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
proto.tendermint.abci.RequestFinalizeBlock.prototype.getNextValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.setNextValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes proposer_address = 8;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getProposerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes proposer_address = 8;
 * This is a type-conversion wrapper around `getProposerAddress()`
 * @return {string}
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.getProposerAddress_asB64 = function() {
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
proto.tendermint.abci.RequestFinalizeBlock.prototype.getProposerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.RequestFinalizeBlock} returns this
 */
proto.tendermint.abci.RequestFinalizeBlock.prototype.setProposerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tendermint.abci.Response.oneofGroups_ = [[1,2,3,4,6,7,9,12,13,14,15,16,17,18,19,20,21]];

/**
 * @enum {number}
 */
proto.tendermint.abci.Response.ValueCase = {
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
 * @return {proto.tendermint.abci.Response.ValueCase}
 */
proto.tendermint.abci.Response.prototype.getValueCase = function() {
  return /** @type {proto.tendermint.abci.Response.ValueCase} */(jspb.Message.computeOneofCase(this, proto.tendermint.abci.Response.oneofGroups_[0]));
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
proto.tendermint.abci.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    exception: (f = msg.getException()) && proto.tendermint.abci.ResponseException.toObject(includeInstance, f),
    echo: (f = msg.getEcho()) && proto.tendermint.abci.ResponseEcho.toObject(includeInstance, f),
    flush: (f = msg.getFlush()) && proto.tendermint.abci.ResponseFlush.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.tendermint.abci.ResponseInfo.toObject(includeInstance, f),
    initChain: (f = msg.getInitChain()) && proto.tendermint.abci.ResponseInitChain.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && proto.tendermint.abci.ResponseQuery.toObject(includeInstance, f),
    checkTx: (f = msg.getCheckTx()) && proto.tendermint.abci.ResponseCheckTx.toObject(includeInstance, f),
    commit: (f = msg.getCommit()) && proto.tendermint.abci.ResponseCommit.toObject(includeInstance, f),
    listSnapshots: (f = msg.getListSnapshots()) && proto.tendermint.abci.ResponseListSnapshots.toObject(includeInstance, f),
    offerSnapshot: (f = msg.getOfferSnapshot()) && proto.tendermint.abci.ResponseOfferSnapshot.toObject(includeInstance, f),
    loadSnapshotChunk: (f = msg.getLoadSnapshotChunk()) && proto.tendermint.abci.ResponseLoadSnapshotChunk.toObject(includeInstance, f),
    applySnapshotChunk: (f = msg.getApplySnapshotChunk()) && proto.tendermint.abci.ResponseApplySnapshotChunk.toObject(includeInstance, f),
    prepareProposal: (f = msg.getPrepareProposal()) && proto.tendermint.abci.ResponsePrepareProposal.toObject(includeInstance, f),
    processProposal: (f = msg.getProcessProposal()) && proto.tendermint.abci.ResponseProcessProposal.toObject(includeInstance, f),
    extendVote: (f = msg.getExtendVote()) && proto.tendermint.abci.ResponseExtendVote.toObject(includeInstance, f),
    verifyVoteExtension: (f = msg.getVerifyVoteExtension()) && proto.tendermint.abci.ResponseVerifyVoteExtension.toObject(includeInstance, f),
    finalizeBlock: (f = msg.getFinalizeBlock()) && proto.tendermint.abci.ResponseFinalizeBlock.toObject(includeInstance, f)
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
 * @return {!proto.tendermint.abci.Response}
 */
proto.tendermint.abci.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.Response;
  return proto.tendermint.abci.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.Response}
 */
proto.tendermint.abci.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.abci.ResponseException;
      reader.readMessage(value,proto.tendermint.abci.ResponseException.deserializeBinaryFromReader);
      msg.setException(value);
      break;
    case 2:
      var value = new proto.tendermint.abci.ResponseEcho;
      reader.readMessage(value,proto.tendermint.abci.ResponseEcho.deserializeBinaryFromReader);
      msg.setEcho(value);
      break;
    case 3:
      var value = new proto.tendermint.abci.ResponseFlush;
      reader.readMessage(value,proto.tendermint.abci.ResponseFlush.deserializeBinaryFromReader);
      msg.setFlush(value);
      break;
    case 4:
      var value = new proto.tendermint.abci.ResponseInfo;
      reader.readMessage(value,proto.tendermint.abci.ResponseInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 6:
      var value = new proto.tendermint.abci.ResponseInitChain;
      reader.readMessage(value,proto.tendermint.abci.ResponseInitChain.deserializeBinaryFromReader);
      msg.setInitChain(value);
      break;
    case 7:
      var value = new proto.tendermint.abci.ResponseQuery;
      reader.readMessage(value,proto.tendermint.abci.ResponseQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 9:
      var value = new proto.tendermint.abci.ResponseCheckTx;
      reader.readMessage(value,proto.tendermint.abci.ResponseCheckTx.deserializeBinaryFromReader);
      msg.setCheckTx(value);
      break;
    case 12:
      var value = new proto.tendermint.abci.ResponseCommit;
      reader.readMessage(value,proto.tendermint.abci.ResponseCommit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 13:
      var value = new proto.tendermint.abci.ResponseListSnapshots;
      reader.readMessage(value,proto.tendermint.abci.ResponseListSnapshots.deserializeBinaryFromReader);
      msg.setListSnapshots(value);
      break;
    case 14:
      var value = new proto.tendermint.abci.ResponseOfferSnapshot;
      reader.readMessage(value,proto.tendermint.abci.ResponseOfferSnapshot.deserializeBinaryFromReader);
      msg.setOfferSnapshot(value);
      break;
    case 15:
      var value = new proto.tendermint.abci.ResponseLoadSnapshotChunk;
      reader.readMessage(value,proto.tendermint.abci.ResponseLoadSnapshotChunk.deserializeBinaryFromReader);
      msg.setLoadSnapshotChunk(value);
      break;
    case 16:
      var value = new proto.tendermint.abci.ResponseApplySnapshotChunk;
      reader.readMessage(value,proto.tendermint.abci.ResponseApplySnapshotChunk.deserializeBinaryFromReader);
      msg.setApplySnapshotChunk(value);
      break;
    case 17:
      var value = new proto.tendermint.abci.ResponsePrepareProposal;
      reader.readMessage(value,proto.tendermint.abci.ResponsePrepareProposal.deserializeBinaryFromReader);
      msg.setPrepareProposal(value);
      break;
    case 18:
      var value = new proto.tendermint.abci.ResponseProcessProposal;
      reader.readMessage(value,proto.tendermint.abci.ResponseProcessProposal.deserializeBinaryFromReader);
      msg.setProcessProposal(value);
      break;
    case 19:
      var value = new proto.tendermint.abci.ResponseExtendVote;
      reader.readMessage(value,proto.tendermint.abci.ResponseExtendVote.deserializeBinaryFromReader);
      msg.setExtendVote(value);
      break;
    case 20:
      var value = new proto.tendermint.abci.ResponseVerifyVoteExtension;
      reader.readMessage(value,proto.tendermint.abci.ResponseVerifyVoteExtension.deserializeBinaryFromReader);
      msg.setVerifyVoteExtension(value);
      break;
    case 21:
      var value = new proto.tendermint.abci.ResponseFinalizeBlock;
      reader.readMessage(value,proto.tendermint.abci.ResponseFinalizeBlock.deserializeBinaryFromReader);
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
proto.tendermint.abci.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getException();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tendermint.abci.ResponseException.serializeBinaryToWriter
    );
  }
  f = message.getEcho();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tendermint.abci.ResponseEcho.serializeBinaryToWriter
    );
  }
  f = message.getFlush();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tendermint.abci.ResponseFlush.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tendermint.abci.ResponseInfo.serializeBinaryToWriter
    );
  }
  f = message.getInitChain();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tendermint.abci.ResponseInitChain.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.tendermint.abci.ResponseQuery.serializeBinaryToWriter
    );
  }
  f = message.getCheckTx();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.tendermint.abci.ResponseCheckTx.serializeBinaryToWriter
    );
  }
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.tendermint.abci.ResponseCommit.serializeBinaryToWriter
    );
  }
  f = message.getListSnapshots();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.tendermint.abci.ResponseListSnapshots.serializeBinaryToWriter
    );
  }
  f = message.getOfferSnapshot();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.tendermint.abci.ResponseOfferSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getLoadSnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.tendermint.abci.ResponseLoadSnapshotChunk.serializeBinaryToWriter
    );
  }
  f = message.getApplySnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.tendermint.abci.ResponseApplySnapshotChunk.serializeBinaryToWriter
    );
  }
  f = message.getPrepareProposal();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.tendermint.abci.ResponsePrepareProposal.serializeBinaryToWriter
    );
  }
  f = message.getProcessProposal();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.tendermint.abci.ResponseProcessProposal.serializeBinaryToWriter
    );
  }
  f = message.getExtendVote();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.tendermint.abci.ResponseExtendVote.serializeBinaryToWriter
    );
  }
  f = message.getVerifyVoteExtension();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.tendermint.abci.ResponseVerifyVoteExtension.serializeBinaryToWriter
    );
  }
  f = message.getFinalizeBlock();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.tendermint.abci.ResponseFinalizeBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseException exception = 1;
 * @return {?proto.tendermint.abci.ResponseException}
 */
proto.tendermint.abci.Response.prototype.getException = function() {
  return /** @type{?proto.tendermint.abci.ResponseException} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseException, 1));
};


/**
 * @param {?proto.tendermint.abci.ResponseException|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setException = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearException = function() {
  return this.setException(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasException = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResponseEcho echo = 2;
 * @return {?proto.tendermint.abci.ResponseEcho}
 */
proto.tendermint.abci.Response.prototype.getEcho = function() {
  return /** @type{?proto.tendermint.abci.ResponseEcho} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseEcho, 2));
};


/**
 * @param {?proto.tendermint.abci.ResponseEcho|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setEcho = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearEcho = function() {
  return this.setEcho(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasEcho = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResponseFlush flush = 3;
 * @return {?proto.tendermint.abci.ResponseFlush}
 */
proto.tendermint.abci.Response.prototype.getFlush = function() {
  return /** @type{?proto.tendermint.abci.ResponseFlush} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseFlush, 3));
};


/**
 * @param {?proto.tendermint.abci.ResponseFlush|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setFlush = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearFlush = function() {
  return this.setFlush(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasFlush = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ResponseInfo info = 4;
 * @return {?proto.tendermint.abci.ResponseInfo}
 */
proto.tendermint.abci.Response.prototype.getInfo = function() {
  return /** @type{?proto.tendermint.abci.ResponseInfo} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseInfo, 4));
};


/**
 * @param {?proto.tendermint.abci.ResponseInfo|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ResponseInitChain init_chain = 6;
 * @return {?proto.tendermint.abci.ResponseInitChain}
 */
proto.tendermint.abci.Response.prototype.getInitChain = function() {
  return /** @type{?proto.tendermint.abci.ResponseInitChain} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseInitChain, 6));
};


/**
 * @param {?proto.tendermint.abci.ResponseInitChain|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setInitChain = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearInitChain = function() {
  return this.setInitChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasInitChain = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ResponseQuery query = 7;
 * @return {?proto.tendermint.abci.ResponseQuery}
 */
proto.tendermint.abci.Response.prototype.getQuery = function() {
  return /** @type{?proto.tendermint.abci.ResponseQuery} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseQuery, 7));
};


/**
 * @param {?proto.tendermint.abci.ResponseQuery|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ResponseCheckTx check_tx = 9;
 * @return {?proto.tendermint.abci.ResponseCheckTx}
 */
proto.tendermint.abci.Response.prototype.getCheckTx = function() {
  return /** @type{?proto.tendermint.abci.ResponseCheckTx} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseCheckTx, 9));
};


/**
 * @param {?proto.tendermint.abci.ResponseCheckTx|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setCheckTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearCheckTx = function() {
  return this.setCheckTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasCheckTx = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ResponseCommit commit = 12;
 * @return {?proto.tendermint.abci.ResponseCommit}
 */
proto.tendermint.abci.Response.prototype.getCommit = function() {
  return /** @type{?proto.tendermint.abci.ResponseCommit} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseCommit, 12));
};


/**
 * @param {?proto.tendermint.abci.ResponseCommit|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setCommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ResponseListSnapshots list_snapshots = 13;
 * @return {?proto.tendermint.abci.ResponseListSnapshots}
 */
proto.tendermint.abci.Response.prototype.getListSnapshots = function() {
  return /** @type{?proto.tendermint.abci.ResponseListSnapshots} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseListSnapshots, 13));
};


/**
 * @param {?proto.tendermint.abci.ResponseListSnapshots|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setListSnapshots = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearListSnapshots = function() {
  return this.setListSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasListSnapshots = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ResponseOfferSnapshot offer_snapshot = 14;
 * @return {?proto.tendermint.abci.ResponseOfferSnapshot}
 */
proto.tendermint.abci.Response.prototype.getOfferSnapshot = function() {
  return /** @type{?proto.tendermint.abci.ResponseOfferSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseOfferSnapshot, 14));
};


/**
 * @param {?proto.tendermint.abci.ResponseOfferSnapshot|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setOfferSnapshot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearOfferSnapshot = function() {
  return this.setOfferSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasOfferSnapshot = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ResponseLoadSnapshotChunk load_snapshot_chunk = 15;
 * @return {?proto.tendermint.abci.ResponseLoadSnapshotChunk}
 */
proto.tendermint.abci.Response.prototype.getLoadSnapshotChunk = function() {
  return /** @type{?proto.tendermint.abci.ResponseLoadSnapshotChunk} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseLoadSnapshotChunk, 15));
};


/**
 * @param {?proto.tendermint.abci.ResponseLoadSnapshotChunk|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setLoadSnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearLoadSnapshotChunk = function() {
  return this.setLoadSnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasLoadSnapshotChunk = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ResponseApplySnapshotChunk apply_snapshot_chunk = 16;
 * @return {?proto.tendermint.abci.ResponseApplySnapshotChunk}
 */
proto.tendermint.abci.Response.prototype.getApplySnapshotChunk = function() {
  return /** @type{?proto.tendermint.abci.ResponseApplySnapshotChunk} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseApplySnapshotChunk, 16));
};


/**
 * @param {?proto.tendermint.abci.ResponseApplySnapshotChunk|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setApplySnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearApplySnapshotChunk = function() {
  return this.setApplySnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasApplySnapshotChunk = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ResponsePrepareProposal prepare_proposal = 17;
 * @return {?proto.tendermint.abci.ResponsePrepareProposal}
 */
proto.tendermint.abci.Response.prototype.getPrepareProposal = function() {
  return /** @type{?proto.tendermint.abci.ResponsePrepareProposal} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponsePrepareProposal, 17));
};


/**
 * @param {?proto.tendermint.abci.ResponsePrepareProposal|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setPrepareProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearPrepareProposal = function() {
  return this.setPrepareProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasPrepareProposal = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ResponseProcessProposal process_proposal = 18;
 * @return {?proto.tendermint.abci.ResponseProcessProposal}
 */
proto.tendermint.abci.Response.prototype.getProcessProposal = function() {
  return /** @type{?proto.tendermint.abci.ResponseProcessProposal} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseProcessProposal, 18));
};


/**
 * @param {?proto.tendermint.abci.ResponseProcessProposal|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setProcessProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearProcessProposal = function() {
  return this.setProcessProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasProcessProposal = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ResponseExtendVote extend_vote = 19;
 * @return {?proto.tendermint.abci.ResponseExtendVote}
 */
proto.tendermint.abci.Response.prototype.getExtendVote = function() {
  return /** @type{?proto.tendermint.abci.ResponseExtendVote} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseExtendVote, 19));
};


/**
 * @param {?proto.tendermint.abci.ResponseExtendVote|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setExtendVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearExtendVote = function() {
  return this.setExtendVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasExtendVote = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ResponseVerifyVoteExtension verify_vote_extension = 20;
 * @return {?proto.tendermint.abci.ResponseVerifyVoteExtension}
 */
proto.tendermint.abci.Response.prototype.getVerifyVoteExtension = function() {
  return /** @type{?proto.tendermint.abci.ResponseVerifyVoteExtension} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseVerifyVoteExtension, 20));
};


/**
 * @param {?proto.tendermint.abci.ResponseVerifyVoteExtension|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setVerifyVoteExtension = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearVerifyVoteExtension = function() {
  return this.setVerifyVoteExtension(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasVerifyVoteExtension = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ResponseFinalizeBlock finalize_block = 21;
 * @return {?proto.tendermint.abci.ResponseFinalizeBlock}
 */
proto.tendermint.abci.Response.prototype.getFinalizeBlock = function() {
  return /** @type{?proto.tendermint.abci.ResponseFinalizeBlock} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ResponseFinalizeBlock, 21));
};


/**
 * @param {?proto.tendermint.abci.ResponseFinalizeBlock|undefined} value
 * @return {!proto.tendermint.abci.Response} returns this
*/
proto.tendermint.abci.Response.prototype.setFinalizeBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.tendermint.abci.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Response} returns this
 */
proto.tendermint.abci.Response.prototype.clearFinalizeBlock = function() {
  return this.setFinalizeBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Response.prototype.hasFinalizeBlock = function() {
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
proto.tendermint.abci.ResponseException.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseException.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseException} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseException.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseException}
 */
proto.tendermint.abci.ResponseException.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseException;
  return proto.tendermint.abci.ResponseException.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseException} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseException}
 */
proto.tendermint.abci.ResponseException.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.ResponseException.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseException.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseException} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseException.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.ResponseException.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseException} returns this
 */
proto.tendermint.abci.ResponseException.prototype.setError = function(value) {
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
proto.tendermint.abci.ResponseEcho.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseEcho.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseEcho} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseEcho.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseEcho}
 */
proto.tendermint.abci.ResponseEcho.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseEcho;
  return proto.tendermint.abci.ResponseEcho.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseEcho} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseEcho}
 */
proto.tendermint.abci.ResponseEcho.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.ResponseEcho.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseEcho.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseEcho} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseEcho.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.ResponseEcho.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseEcho} returns this
 */
proto.tendermint.abci.ResponseEcho.prototype.setMessage = function(value) {
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
proto.tendermint.abci.ResponseFlush.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseFlush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseFlush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseFlush.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseFlush}
 */
proto.tendermint.abci.ResponseFlush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseFlush;
  return proto.tendermint.abci.ResponseFlush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseFlush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseFlush}
 */
proto.tendermint.abci.ResponseFlush.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.ResponseFlush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseFlush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseFlush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseFlush.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.ResponseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appVersion: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastBlockHeight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lastBlockAppHash: msg.getLastBlockAppHash_asB64()
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
 * @return {!proto.tendermint.abci.ResponseInfo}
 */
proto.tendermint.abci.ResponseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseInfo;
  return proto.tendermint.abci.ResponseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseInfo}
 */
proto.tendermint.abci.ResponseInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.ResponseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseInfo.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.tendermint.abci.ResponseInfo.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseInfo} returns this
 */
proto.tendermint.abci.ResponseInfo.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.tendermint.abci.ResponseInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseInfo} returns this
 */
proto.tendermint.abci.ResponseInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 app_version = 3;
 * @return {number}
 */
proto.tendermint.abci.ResponseInfo.prototype.getAppVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ResponseInfo} returns this
 */
proto.tendermint.abci.ResponseInfo.prototype.setAppVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 last_block_height = 4;
 * @return {number}
 */
proto.tendermint.abci.ResponseInfo.prototype.getLastBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ResponseInfo} returns this
 */
proto.tendermint.abci.ResponseInfo.prototype.setLastBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes last_block_app_hash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.ResponseInfo.prototype.getLastBlockAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes last_block_app_hash = 5;
 * This is a type-conversion wrapper around `getLastBlockAppHash()`
 * @return {string}
 */
proto.tendermint.abci.ResponseInfo.prototype.getLastBlockAppHash_asB64 = function() {
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
proto.tendermint.abci.ResponseInfo.prototype.getLastBlockAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLastBlockAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ResponseInfo} returns this
 */
proto.tendermint.abci.ResponseInfo.prototype.setLastBlockAppHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.ResponseInitChain.repeatedFields_ = [2];



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
proto.tendermint.abci.ResponseInitChain.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseInitChain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseInitChain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseInitChain.toObject = function(includeInstance, msg) {
  var f, obj = {
    consensusParams: (f = msg.getConsensusParams()) && tendermint_types_params_pb.ConsensusParams.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.tendermint.abci.ValidatorUpdate.toObject, includeInstance),
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
 * @return {!proto.tendermint.abci.ResponseInitChain}
 */
proto.tendermint.abci.ResponseInitChain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseInitChain;
  return proto.tendermint.abci.ResponseInitChain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseInitChain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseInitChain}
 */
proto.tendermint.abci.ResponseInitChain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tendermint_types_params_pb.ConsensusParams;
      reader.readMessage(value,tendermint_types_params_pb.ConsensusParams.deserializeBinaryFromReader);
      msg.setConsensusParams(value);
      break;
    case 2:
      var value = new proto.tendermint.abci.ValidatorUpdate;
      reader.readMessage(value,proto.tendermint.abci.ValidatorUpdate.deserializeBinaryFromReader);
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
proto.tendermint.abci.ResponseInitChain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseInitChain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseInitChain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseInitChain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsensusParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tendermint_types_params_pb.ConsensusParams.serializeBinaryToWriter
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tendermint.abci.ValidatorUpdate.serializeBinaryToWriter
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
 * optional tendermint.types.ConsensusParams consensus_params = 1;
 * @return {?proto.tendermint.types.ConsensusParams}
 */
proto.tendermint.abci.ResponseInitChain.prototype.getConsensusParams = function() {
  return /** @type{?proto.tendermint.types.ConsensusParams} */ (
    jspb.Message.getWrapperField(this, tendermint_types_params_pb.ConsensusParams, 1));
};


/**
 * @param {?proto.tendermint.types.ConsensusParams|undefined} value
 * @return {!proto.tendermint.abci.ResponseInitChain} returns this
*/
proto.tendermint.abci.ResponseInitChain.prototype.setConsensusParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.ResponseInitChain} returns this
 */
proto.tendermint.abci.ResponseInitChain.prototype.clearConsensusParams = function() {
  return this.setConsensusParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.ResponseInitChain.prototype.hasConsensusParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ValidatorUpdate validators = 2;
 * @return {!Array<!proto.tendermint.abci.ValidatorUpdate>}
 */
proto.tendermint.abci.ResponseInitChain.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.tendermint.abci.ValidatorUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.ValidatorUpdate, 2));
};


/**
 * @param {!Array<!proto.tendermint.abci.ValidatorUpdate>} value
 * @return {!proto.tendermint.abci.ResponseInitChain} returns this
*/
proto.tendermint.abci.ResponseInitChain.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tendermint.abci.ValidatorUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.ValidatorUpdate}
 */
proto.tendermint.abci.ResponseInitChain.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tendermint.abci.ValidatorUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ResponseInitChain} returns this
 */
proto.tendermint.abci.ResponseInitChain.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional bytes app_hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.ResponseInitChain.prototype.getAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes app_hash = 3;
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {string}
 */
proto.tendermint.abci.ResponseInitChain.prototype.getAppHash_asB64 = function() {
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
proto.tendermint.abci.ResponseInitChain.prototype.getAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ResponseInitChain} returns this
 */
proto.tendermint.abci.ResponseInitChain.prototype.setAppHash = function(value) {
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
proto.tendermint.abci.ResponseQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    log: jspb.Message.getFieldWithDefault(msg, 3, ""),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    index: jspb.Message.getFieldWithDefault(msg, 5, 0),
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64(),
    proofOps: (f = msg.getProofOps()) && tendermint_crypto_proof_pb.ProofOps.toObject(includeInstance, f),
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
 * @return {!proto.tendermint.abci.ResponseQuery}
 */
proto.tendermint.abci.ResponseQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseQuery;
  return proto.tendermint.abci.ResponseQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseQuery}
 */
proto.tendermint.abci.ResponseQuery.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new tendermint_crypto_proof_pb.ProofOps;
      reader.readMessage(value,tendermint_crypto_proof_pb.ProofOps.deserializeBinaryFromReader);
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
proto.tendermint.abci.ResponseQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseQuery.serializeBinaryToWriter = function(message, writer) {
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
      tendermint_crypto_proof_pb.ProofOps.serializeBinaryToWriter
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
proto.tendermint.abci.ResponseQuery.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
 */
proto.tendermint.abci.ResponseQuery.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.tendermint.abci.ResponseQuery.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
 */
proto.tendermint.abci.ResponseQuery.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.tendermint.abci.ResponseQuery.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
 */
proto.tendermint.abci.ResponseQuery.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 index = 5;
 * @return {number}
 */
proto.tendermint.abci.ResponseQuery.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
 */
proto.tendermint.abci.ResponseQuery.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes key = 6;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.ResponseQuery.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes key = 6;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.tendermint.abci.ResponseQuery.prototype.getKey_asB64 = function() {
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
proto.tendermint.abci.ResponseQuery.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
 */
proto.tendermint.abci.ResponseQuery.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes value = 7;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.ResponseQuery.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes value = 7;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.tendermint.abci.ResponseQuery.prototype.getValue_asB64 = function() {
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
proto.tendermint.abci.ResponseQuery.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
 */
proto.tendermint.abci.ResponseQuery.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional tendermint.crypto.ProofOps proof_ops = 8;
 * @return {?proto.tendermint.crypto.ProofOps}
 */
proto.tendermint.abci.ResponseQuery.prototype.getProofOps = function() {
  return /** @type{?proto.tendermint.crypto.ProofOps} */ (
    jspb.Message.getWrapperField(this, tendermint_crypto_proof_pb.ProofOps, 8));
};


/**
 * @param {?proto.tendermint.crypto.ProofOps|undefined} value
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
*/
proto.tendermint.abci.ResponseQuery.prototype.setProofOps = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
 */
proto.tendermint.abci.ResponseQuery.prototype.clearProofOps = function() {
  return this.setProofOps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.ResponseQuery.prototype.hasProofOps = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 height = 9;
 * @return {number}
 */
proto.tendermint.abci.ResponseQuery.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
 */
proto.tendermint.abci.ResponseQuery.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string codespace = 10;
 * @return {string}
 */
proto.tendermint.abci.ResponseQuery.prototype.getCodespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseQuery} returns this
 */
proto.tendermint.abci.ResponseQuery.prototype.setCodespace = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.ResponseCheckTx.repeatedFields_ = [7];



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
proto.tendermint.abci.ResponseCheckTx.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseCheckTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseCheckTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseCheckTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    log: jspb.Message.getFieldWithDefault(msg, 3, ""),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    gasWanted: jspb.Message.getFieldWithDefault(msg, 5, 0),
    gasUsed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.tendermint.abci.Event.toObject, includeInstance),
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
 * @return {!proto.tendermint.abci.ResponseCheckTx}
 */
proto.tendermint.abci.ResponseCheckTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseCheckTx;
  return proto.tendermint.abci.ResponseCheckTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseCheckTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseCheckTx}
 */
proto.tendermint.abci.ResponseCheckTx.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.Event;
      reader.readMessage(value,proto.tendermint.abci.Event.deserializeBinaryFromReader);
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
proto.tendermint.abci.ResponseCheckTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseCheckTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseCheckTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseCheckTx.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.Event.serializeBinaryToWriter
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
proto.tendermint.abci.ResponseCheckTx.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ResponseCheckTx} returns this
 */
proto.tendermint.abci.ResponseCheckTx.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.ResponseCheckTx.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.tendermint.abci.ResponseCheckTx.prototype.getData_asB64 = function() {
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
proto.tendermint.abci.ResponseCheckTx.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ResponseCheckTx} returns this
 */
proto.tendermint.abci.ResponseCheckTx.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.tendermint.abci.ResponseCheckTx.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseCheckTx} returns this
 */
proto.tendermint.abci.ResponseCheckTx.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.tendermint.abci.ResponseCheckTx.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseCheckTx} returns this
 */
proto.tendermint.abci.ResponseCheckTx.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 gas_wanted = 5;
 * @return {number}
 */
proto.tendermint.abci.ResponseCheckTx.prototype.getGasWanted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ResponseCheckTx} returns this
 */
proto.tendermint.abci.ResponseCheckTx.prototype.setGasWanted = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 gas_used = 6;
 * @return {number}
 */
proto.tendermint.abci.ResponseCheckTx.prototype.getGasUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ResponseCheckTx} returns this
 */
proto.tendermint.abci.ResponseCheckTx.prototype.setGasUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated Event events = 7;
 * @return {!Array<!proto.tendermint.abci.Event>}
 */
proto.tendermint.abci.ResponseCheckTx.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.tendermint.abci.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.Event, 7));
};


/**
 * @param {!Array<!proto.tendermint.abci.Event>} value
 * @return {!proto.tendermint.abci.ResponseCheckTx} returns this
*/
proto.tendermint.abci.ResponseCheckTx.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.tendermint.abci.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.Event}
 */
proto.tendermint.abci.ResponseCheckTx.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.tendermint.abci.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ResponseCheckTx} returns this
 */
proto.tendermint.abci.ResponseCheckTx.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * optional string codespace = 8;
 * @return {string}
 */
proto.tendermint.abci.ResponseCheckTx.prototype.getCodespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ResponseCheckTx} returns this
 */
proto.tendermint.abci.ResponseCheckTx.prototype.setCodespace = function(value) {
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
proto.tendermint.abci.ResponseCommit.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseCommit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseCommit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseCommit.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseCommit}
 */
proto.tendermint.abci.ResponseCommit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseCommit;
  return proto.tendermint.abci.ResponseCommit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseCommit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseCommit}
 */
proto.tendermint.abci.ResponseCommit.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.ResponseCommit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseCommit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseCommit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseCommit.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.ResponseCommit.prototype.getRetainHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ResponseCommit} returns this
 */
proto.tendermint.abci.ResponseCommit.prototype.setRetainHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.ResponseListSnapshots.repeatedFields_ = [1];



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
proto.tendermint.abci.ResponseListSnapshots.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseListSnapshots.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseListSnapshots} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseListSnapshots.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshotsList: jspb.Message.toObjectList(msg.getSnapshotsList(),
    proto.tendermint.abci.Snapshot.toObject, includeInstance)
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
 * @return {!proto.tendermint.abci.ResponseListSnapshots}
 */
proto.tendermint.abci.ResponseListSnapshots.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseListSnapshots;
  return proto.tendermint.abci.ResponseListSnapshots.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseListSnapshots} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseListSnapshots}
 */
proto.tendermint.abci.ResponseListSnapshots.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.abci.Snapshot;
      reader.readMessage(value,proto.tendermint.abci.Snapshot.deserializeBinaryFromReader);
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
proto.tendermint.abci.ResponseListSnapshots.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseListSnapshots.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseListSnapshots} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseListSnapshots.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tendermint.abci.Snapshot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Snapshot snapshots = 1;
 * @return {!Array<!proto.tendermint.abci.Snapshot>}
 */
proto.tendermint.abci.ResponseListSnapshots.prototype.getSnapshotsList = function() {
  return /** @type{!Array<!proto.tendermint.abci.Snapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.Snapshot, 1));
};


/**
 * @param {!Array<!proto.tendermint.abci.Snapshot>} value
 * @return {!proto.tendermint.abci.ResponseListSnapshots} returns this
*/
proto.tendermint.abci.ResponseListSnapshots.prototype.setSnapshotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tendermint.abci.Snapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.Snapshot}
 */
proto.tendermint.abci.ResponseListSnapshots.prototype.addSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tendermint.abci.Snapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ResponseListSnapshots} returns this
 */
proto.tendermint.abci.ResponseListSnapshots.prototype.clearSnapshotsList = function() {
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
proto.tendermint.abci.ResponseOfferSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseOfferSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseOfferSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseOfferSnapshot.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseOfferSnapshot}
 */
proto.tendermint.abci.ResponseOfferSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseOfferSnapshot;
  return proto.tendermint.abci.ResponseOfferSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseOfferSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseOfferSnapshot}
 */
proto.tendermint.abci.ResponseOfferSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tendermint.abci.ResponseOfferSnapshot.Result} */ (reader.readEnum());
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
proto.tendermint.abci.ResponseOfferSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseOfferSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseOfferSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseOfferSnapshot.serializeBinaryToWriter = function(message, writer) {
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
 * @enum {number}
 */
proto.tendermint.abci.ResponseOfferSnapshot.Result = {
  UNKNOWN: 0,
  ACCEPT: 1,
  ABORT: 2,
  REJECT: 3,
  REJECT_FORMAT: 4,
  REJECT_SENDER: 5
};

/**
 * optional Result result = 1;
 * @return {!proto.tendermint.abci.ResponseOfferSnapshot.Result}
 */
proto.tendermint.abci.ResponseOfferSnapshot.prototype.getResult = function() {
  return /** @type {!proto.tendermint.abci.ResponseOfferSnapshot.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tendermint.abci.ResponseOfferSnapshot.Result} value
 * @return {!proto.tendermint.abci.ResponseOfferSnapshot} returns this
 */
proto.tendermint.abci.ResponseOfferSnapshot.prototype.setResult = function(value) {
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
proto.tendermint.abci.ResponseLoadSnapshotChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseLoadSnapshotChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseLoadSnapshotChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseLoadSnapshotChunk.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseLoadSnapshotChunk}
 */
proto.tendermint.abci.ResponseLoadSnapshotChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseLoadSnapshotChunk;
  return proto.tendermint.abci.ResponseLoadSnapshotChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseLoadSnapshotChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseLoadSnapshotChunk}
 */
proto.tendermint.abci.ResponseLoadSnapshotChunk.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.ResponseLoadSnapshotChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseLoadSnapshotChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseLoadSnapshotChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseLoadSnapshotChunk.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.ResponseLoadSnapshotChunk.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.tendermint.abci.ResponseLoadSnapshotChunk.prototype.getChunk_asB64 = function() {
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
proto.tendermint.abci.ResponseLoadSnapshotChunk.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ResponseLoadSnapshotChunk} returns this
 */
proto.tendermint.abci.ResponseLoadSnapshotChunk.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.repeatedFields_ = [2,3];



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
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseApplySnapshotChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseApplySnapshotChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk}
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseApplySnapshotChunk;
  return proto.tendermint.abci.ResponseApplySnapshotChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseApplySnapshotChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk}
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tendermint.abci.ResponseApplySnapshotChunk.Result} */ (reader.readEnum());
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
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseApplySnapshotChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseApplySnapshotChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.serializeBinaryToWriter = function(message, writer) {
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
 * @enum {number}
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.Result = {
  UNKNOWN: 0,
  ACCEPT: 1,
  ABORT: 2,
  RETRY: 3,
  RETRY_SNAPSHOT: 4,
  REJECT_SNAPSHOT: 5
};

/**
 * optional Result result = 1;
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk.Result}
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.getResult = function() {
  return /** @type {!proto.tendermint.abci.ResponseApplySnapshotChunk.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tendermint.abci.ResponseApplySnapshotChunk.Result} value
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk} returns this
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated uint32 refetch_chunks = 2;
 * @return {!Array<number>}
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.getRefetchChunksList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk} returns this
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.setRefetchChunksList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk} returns this
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.addRefetchChunks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk} returns this
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.clearRefetchChunksList = function() {
  return this.setRefetchChunksList([]);
};


/**
 * repeated string reject_senders = 3;
 * @return {!Array<string>}
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.getRejectSendersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk} returns this
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.setRejectSendersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk} returns this
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.addRejectSenders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ResponseApplySnapshotChunk} returns this
 */
proto.tendermint.abci.ResponseApplySnapshotChunk.prototype.clearRejectSendersList = function() {
  return this.setRejectSendersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.ResponsePrepareProposal.repeatedFields_ = [1];



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
proto.tendermint.abci.ResponsePrepareProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponsePrepareProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponsePrepareProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponsePrepareProposal.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponsePrepareProposal}
 */
proto.tendermint.abci.ResponsePrepareProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponsePrepareProposal;
  return proto.tendermint.abci.ResponsePrepareProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponsePrepareProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponsePrepareProposal}
 */
proto.tendermint.abci.ResponsePrepareProposal.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.ResponsePrepareProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponsePrepareProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponsePrepareProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponsePrepareProposal.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.ResponsePrepareProposal.prototype.getTxsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes txs = 1;
 * This is a type-conversion wrapper around `getTxsList()`
 * @return {!Array<string>}
 */
proto.tendermint.abci.ResponsePrepareProposal.prototype.getTxsList_asB64 = function() {
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
proto.tendermint.abci.ResponsePrepareProposal.prototype.getTxsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTxsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tendermint.abci.ResponsePrepareProposal} returns this
 */
proto.tendermint.abci.ResponsePrepareProposal.prototype.setTxsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.ResponsePrepareProposal} returns this
 */
proto.tendermint.abci.ResponsePrepareProposal.prototype.addTxs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ResponsePrepareProposal} returns this
 */
proto.tendermint.abci.ResponsePrepareProposal.prototype.clearTxsList = function() {
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
proto.tendermint.abci.ResponseProcessProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseProcessProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseProcessProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseProcessProposal.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseProcessProposal}
 */
proto.tendermint.abci.ResponseProcessProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseProcessProposal;
  return proto.tendermint.abci.ResponseProcessProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseProcessProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseProcessProposal}
 */
proto.tendermint.abci.ResponseProcessProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tendermint.abci.ResponseProcessProposal.ProposalStatus} */ (reader.readEnum());
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
proto.tendermint.abci.ResponseProcessProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseProcessProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseProcessProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseProcessProposal.serializeBinaryToWriter = function(message, writer) {
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
 * @enum {number}
 */
proto.tendermint.abci.ResponseProcessProposal.ProposalStatus = {
  UNKNOWN: 0,
  ACCEPT: 1,
  REJECT: 2
};

/**
 * optional ProposalStatus status = 1;
 * @return {!proto.tendermint.abci.ResponseProcessProposal.ProposalStatus}
 */
proto.tendermint.abci.ResponseProcessProposal.prototype.getStatus = function() {
  return /** @type {!proto.tendermint.abci.ResponseProcessProposal.ProposalStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tendermint.abci.ResponseProcessProposal.ProposalStatus} value
 * @return {!proto.tendermint.abci.ResponseProcessProposal} returns this
 */
proto.tendermint.abci.ResponseProcessProposal.prototype.setStatus = function(value) {
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
proto.tendermint.abci.ResponseExtendVote.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseExtendVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseExtendVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseExtendVote.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseExtendVote}
 */
proto.tendermint.abci.ResponseExtendVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseExtendVote;
  return proto.tendermint.abci.ResponseExtendVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseExtendVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseExtendVote}
 */
proto.tendermint.abci.ResponseExtendVote.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.ResponseExtendVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseExtendVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseExtendVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseExtendVote.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.ResponseExtendVote.prototype.getVoteExtension = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes vote_extension = 1;
 * This is a type-conversion wrapper around `getVoteExtension()`
 * @return {string}
 */
proto.tendermint.abci.ResponseExtendVote.prototype.getVoteExtension_asB64 = function() {
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
proto.tendermint.abci.ResponseExtendVote.prototype.getVoteExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoteExtension()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ResponseExtendVote} returns this
 */
proto.tendermint.abci.ResponseExtendVote.prototype.setVoteExtension = function(value) {
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
proto.tendermint.abci.ResponseVerifyVoteExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseVerifyVoteExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseVerifyVoteExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseVerifyVoteExtension.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.ResponseVerifyVoteExtension}
 */
proto.tendermint.abci.ResponseVerifyVoteExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseVerifyVoteExtension;
  return proto.tendermint.abci.ResponseVerifyVoteExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseVerifyVoteExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseVerifyVoteExtension}
 */
proto.tendermint.abci.ResponseVerifyVoteExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tendermint.abci.ResponseVerifyVoteExtension.VerifyStatus} */ (reader.readEnum());
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
proto.tendermint.abci.ResponseVerifyVoteExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseVerifyVoteExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseVerifyVoteExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseVerifyVoteExtension.serializeBinaryToWriter = function(message, writer) {
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
 * @enum {number}
 */
proto.tendermint.abci.ResponseVerifyVoteExtension.VerifyStatus = {
  UNKNOWN: 0,
  ACCEPT: 1,
  REJECT: 2
};

/**
 * optional VerifyStatus status = 1;
 * @return {!proto.tendermint.abci.ResponseVerifyVoteExtension.VerifyStatus}
 */
proto.tendermint.abci.ResponseVerifyVoteExtension.prototype.getStatus = function() {
  return /** @type {!proto.tendermint.abci.ResponseVerifyVoteExtension.VerifyStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tendermint.abci.ResponseVerifyVoteExtension.VerifyStatus} value
 * @return {!proto.tendermint.abci.ResponseVerifyVoteExtension} returns this
 */
proto.tendermint.abci.ResponseVerifyVoteExtension.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.ResponseFinalizeBlock.repeatedFields_ = [1,2,3];



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
proto.tendermint.abci.ResponseFinalizeBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ResponseFinalizeBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ResponseFinalizeBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseFinalizeBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.tendermint.abci.Event.toObject, includeInstance),
    txResultsList: jspb.Message.toObjectList(msg.getTxResultsList(),
    proto.tendermint.abci.ExecTxResult.toObject, includeInstance),
    validatorUpdatesList: jspb.Message.toObjectList(msg.getValidatorUpdatesList(),
    proto.tendermint.abci.ValidatorUpdate.toObject, includeInstance),
    consensusParamUpdates: (f = msg.getConsensusParamUpdates()) && tendermint_types_params_pb.ConsensusParams.toObject(includeInstance, f),
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
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock}
 */
proto.tendermint.abci.ResponseFinalizeBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ResponseFinalizeBlock;
  return proto.tendermint.abci.ResponseFinalizeBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ResponseFinalizeBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock}
 */
proto.tendermint.abci.ResponseFinalizeBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.abci.Event;
      reader.readMessage(value,proto.tendermint.abci.Event.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    case 2:
      var value = new proto.tendermint.abci.ExecTxResult;
      reader.readMessage(value,proto.tendermint.abci.ExecTxResult.deserializeBinaryFromReader);
      msg.addTxResults(value);
      break;
    case 3:
      var value = new proto.tendermint.abci.ValidatorUpdate;
      reader.readMessage(value,proto.tendermint.abci.ValidatorUpdate.deserializeBinaryFromReader);
      msg.addValidatorUpdates(value);
      break;
    case 4:
      var value = new tendermint_types_params_pb.ConsensusParams;
      reader.readMessage(value,tendermint_types_params_pb.ConsensusParams.deserializeBinaryFromReader);
      msg.setConsensusParamUpdates(value);
      break;
    case 5:
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
proto.tendermint.abci.ResponseFinalizeBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ResponseFinalizeBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ResponseFinalizeBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ResponseFinalizeBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tendermint.abci.Event.serializeBinaryToWriter
    );
  }
  f = message.getTxResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tendermint.abci.ExecTxResult.serializeBinaryToWriter
    );
  }
  f = message.getValidatorUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tendermint.abci.ValidatorUpdate.serializeBinaryToWriter
    );
  }
  f = message.getConsensusParamUpdates();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tendermint_types_params_pb.ConsensusParams.serializeBinaryToWriter
    );
  }
  f = message.getAppHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * repeated Event events = 1;
 * @return {!Array<!proto.tendermint.abci.Event>}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.tendermint.abci.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.Event, 1));
};


/**
 * @param {!Array<!proto.tendermint.abci.Event>} value
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock} returns this
*/
proto.tendermint.abci.ResponseFinalizeBlock.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tendermint.abci.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.Event}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tendermint.abci.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock} returns this
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * repeated ExecTxResult tx_results = 2;
 * @return {!Array<!proto.tendermint.abci.ExecTxResult>}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.getTxResultsList = function() {
  return /** @type{!Array<!proto.tendermint.abci.ExecTxResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.ExecTxResult, 2));
};


/**
 * @param {!Array<!proto.tendermint.abci.ExecTxResult>} value
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock} returns this
*/
proto.tendermint.abci.ResponseFinalizeBlock.prototype.setTxResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tendermint.abci.ExecTxResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.ExecTxResult}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.addTxResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tendermint.abci.ExecTxResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock} returns this
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.clearTxResultsList = function() {
  return this.setTxResultsList([]);
};


/**
 * repeated ValidatorUpdate validator_updates = 3;
 * @return {!Array<!proto.tendermint.abci.ValidatorUpdate>}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.getValidatorUpdatesList = function() {
  return /** @type{!Array<!proto.tendermint.abci.ValidatorUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.ValidatorUpdate, 3));
};


/**
 * @param {!Array<!proto.tendermint.abci.ValidatorUpdate>} value
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock} returns this
*/
proto.tendermint.abci.ResponseFinalizeBlock.prototype.setValidatorUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tendermint.abci.ValidatorUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.ValidatorUpdate}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.addValidatorUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tendermint.abci.ValidatorUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock} returns this
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.clearValidatorUpdatesList = function() {
  return this.setValidatorUpdatesList([]);
};


/**
 * optional tendermint.types.ConsensusParams consensus_param_updates = 4;
 * @return {?proto.tendermint.types.ConsensusParams}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.getConsensusParamUpdates = function() {
  return /** @type{?proto.tendermint.types.ConsensusParams} */ (
    jspb.Message.getWrapperField(this, tendermint_types_params_pb.ConsensusParams, 4));
};


/**
 * @param {?proto.tendermint.types.ConsensusParams|undefined} value
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock} returns this
*/
proto.tendermint.abci.ResponseFinalizeBlock.prototype.setConsensusParamUpdates = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock} returns this
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.clearConsensusParamUpdates = function() {
  return this.setConsensusParamUpdates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.hasConsensusParamUpdates = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes app_hash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.getAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes app_hash = 5;
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {string}
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.getAppHash_asB64 = function() {
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
proto.tendermint.abci.ResponseFinalizeBlock.prototype.getAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ResponseFinalizeBlock} returns this
 */
proto.tendermint.abci.ResponseFinalizeBlock.prototype.setAppHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.CommitInfo.repeatedFields_ = [2];



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
proto.tendermint.abci.CommitInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.CommitInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.CommitInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.CommitInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    round: jspb.Message.getFieldWithDefault(msg, 1, 0),
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    proto.tendermint.abci.VoteInfo.toObject, includeInstance)
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
 * @return {!proto.tendermint.abci.CommitInfo}
 */
proto.tendermint.abci.CommitInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.CommitInfo;
  return proto.tendermint.abci.CommitInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.CommitInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.CommitInfo}
 */
proto.tendermint.abci.CommitInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.VoteInfo;
      reader.readMessage(value,proto.tendermint.abci.VoteInfo.deserializeBinaryFromReader);
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
proto.tendermint.abci.CommitInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.CommitInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.CommitInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.CommitInfo.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.VoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 round = 1;
 * @return {number}
 */
proto.tendermint.abci.CommitInfo.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.CommitInfo} returns this
 */
proto.tendermint.abci.CommitInfo.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated VoteInfo votes = 2;
 * @return {!Array<!proto.tendermint.abci.VoteInfo>}
 */
proto.tendermint.abci.CommitInfo.prototype.getVotesList = function() {
  return /** @type{!Array<!proto.tendermint.abci.VoteInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.VoteInfo, 2));
};


/**
 * @param {!Array<!proto.tendermint.abci.VoteInfo>} value
 * @return {!proto.tendermint.abci.CommitInfo} returns this
*/
proto.tendermint.abci.CommitInfo.prototype.setVotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tendermint.abci.VoteInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.VoteInfo}
 */
proto.tendermint.abci.CommitInfo.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tendermint.abci.VoteInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.CommitInfo} returns this
 */
proto.tendermint.abci.CommitInfo.prototype.clearVotesList = function() {
  return this.setVotesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.ExtendedCommitInfo.repeatedFields_ = [2];



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
proto.tendermint.abci.ExtendedCommitInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ExtendedCommitInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ExtendedCommitInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ExtendedCommitInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    round: jspb.Message.getFieldWithDefault(msg, 1, 0),
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    proto.tendermint.abci.ExtendedVoteInfo.toObject, includeInstance)
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
 * @return {!proto.tendermint.abci.ExtendedCommitInfo}
 */
proto.tendermint.abci.ExtendedCommitInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ExtendedCommitInfo;
  return proto.tendermint.abci.ExtendedCommitInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ExtendedCommitInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ExtendedCommitInfo}
 */
proto.tendermint.abci.ExtendedCommitInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.ExtendedVoteInfo;
      reader.readMessage(value,proto.tendermint.abci.ExtendedVoteInfo.deserializeBinaryFromReader);
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
proto.tendermint.abci.ExtendedCommitInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ExtendedCommitInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ExtendedCommitInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ExtendedCommitInfo.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.ExtendedVoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 round = 1;
 * @return {number}
 */
proto.tendermint.abci.ExtendedCommitInfo.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ExtendedCommitInfo} returns this
 */
proto.tendermint.abci.ExtendedCommitInfo.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ExtendedVoteInfo votes = 2;
 * @return {!Array<!proto.tendermint.abci.ExtendedVoteInfo>}
 */
proto.tendermint.abci.ExtendedCommitInfo.prototype.getVotesList = function() {
  return /** @type{!Array<!proto.tendermint.abci.ExtendedVoteInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.ExtendedVoteInfo, 2));
};


/**
 * @param {!Array<!proto.tendermint.abci.ExtendedVoteInfo>} value
 * @return {!proto.tendermint.abci.ExtendedCommitInfo} returns this
*/
proto.tendermint.abci.ExtendedCommitInfo.prototype.setVotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tendermint.abci.ExtendedVoteInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.ExtendedVoteInfo}
 */
proto.tendermint.abci.ExtendedCommitInfo.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tendermint.abci.ExtendedVoteInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ExtendedCommitInfo} returns this
 */
proto.tendermint.abci.ExtendedCommitInfo.prototype.clearVotesList = function() {
  return this.setVotesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.Event.repeatedFields_ = [2];



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
proto.tendermint.abci.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto.tendermint.abci.EventAttribute.toObject, includeInstance)
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
 * @return {!proto.tendermint.abci.Event}
 */
proto.tendermint.abci.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.Event;
  return proto.tendermint.abci.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.Event}
 */
proto.tendermint.abci.Event.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.EventAttribute;
      reader.readMessage(value,proto.tendermint.abci.EventAttribute.deserializeBinaryFromReader);
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
proto.tendermint.abci.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Event.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.EventAttribute.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.tendermint.abci.Event.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.Event} returns this
 */
proto.tendermint.abci.Event.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated EventAttribute attributes = 2;
 * @return {!Array<!proto.tendermint.abci.EventAttribute>}
 */
proto.tendermint.abci.Event.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.tendermint.abci.EventAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.EventAttribute, 2));
};


/**
 * @param {!Array<!proto.tendermint.abci.EventAttribute>} value
 * @return {!proto.tendermint.abci.Event} returns this
*/
proto.tendermint.abci.Event.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tendermint.abci.EventAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.EventAttribute}
 */
proto.tendermint.abci.Event.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tendermint.abci.EventAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.Event} returns this
 */
proto.tendermint.abci.Event.prototype.clearAttributesList = function() {
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
proto.tendermint.abci.EventAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.EventAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.EventAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.EventAttribute.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.EventAttribute}
 */
proto.tendermint.abci.EventAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.EventAttribute;
  return proto.tendermint.abci.EventAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.EventAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.EventAttribute}
 */
proto.tendermint.abci.EventAttribute.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.EventAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.EventAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.EventAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.EventAttribute.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.EventAttribute.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.EventAttribute} returns this
 */
proto.tendermint.abci.EventAttribute.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.tendermint.abci.EventAttribute.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.EventAttribute} returns this
 */
proto.tendermint.abci.EventAttribute.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool index = 3;
 * @return {boolean}
 */
proto.tendermint.abci.EventAttribute.prototype.getIndex = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tendermint.abci.EventAttribute} returns this
 */
proto.tendermint.abci.EventAttribute.prototype.setIndex = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.abci.ExecTxResult.repeatedFields_ = [7];



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
proto.tendermint.abci.ExecTxResult.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ExecTxResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ExecTxResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ExecTxResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    log: jspb.Message.getFieldWithDefault(msg, 3, ""),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    gasWanted: jspb.Message.getFieldWithDefault(msg, 5, 0),
    gasUsed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.tendermint.abci.Event.toObject, includeInstance),
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
 * @return {!proto.tendermint.abci.ExecTxResult}
 */
proto.tendermint.abci.ExecTxResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ExecTxResult;
  return proto.tendermint.abci.ExecTxResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ExecTxResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ExecTxResult}
 */
proto.tendermint.abci.ExecTxResult.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.Event;
      reader.readMessage(value,proto.tendermint.abci.Event.deserializeBinaryFromReader);
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
proto.tendermint.abci.ExecTxResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ExecTxResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ExecTxResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ExecTxResult.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.Event.serializeBinaryToWriter
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
proto.tendermint.abci.ExecTxResult.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ExecTxResult} returns this
 */
proto.tendermint.abci.ExecTxResult.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.ExecTxResult.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.tendermint.abci.ExecTxResult.prototype.getData_asB64 = function() {
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
proto.tendermint.abci.ExecTxResult.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ExecTxResult} returns this
 */
proto.tendermint.abci.ExecTxResult.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.tendermint.abci.ExecTxResult.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ExecTxResult} returns this
 */
proto.tendermint.abci.ExecTxResult.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.tendermint.abci.ExecTxResult.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ExecTxResult} returns this
 */
proto.tendermint.abci.ExecTxResult.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 gas_wanted = 5;
 * @return {number}
 */
proto.tendermint.abci.ExecTxResult.prototype.getGasWanted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ExecTxResult} returns this
 */
proto.tendermint.abci.ExecTxResult.prototype.setGasWanted = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 gas_used = 6;
 * @return {number}
 */
proto.tendermint.abci.ExecTxResult.prototype.getGasUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ExecTxResult} returns this
 */
proto.tendermint.abci.ExecTxResult.prototype.setGasUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated Event events = 7;
 * @return {!Array<!proto.tendermint.abci.Event>}
 */
proto.tendermint.abci.ExecTxResult.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.tendermint.abci.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.abci.Event, 7));
};


/**
 * @param {!Array<!proto.tendermint.abci.Event>} value
 * @return {!proto.tendermint.abci.ExecTxResult} returns this
*/
proto.tendermint.abci.ExecTxResult.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.tendermint.abci.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.abci.Event}
 */
proto.tendermint.abci.ExecTxResult.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.tendermint.abci.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.abci.ExecTxResult} returns this
 */
proto.tendermint.abci.ExecTxResult.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * optional string codespace = 8;
 * @return {string}
 */
proto.tendermint.abci.ExecTxResult.prototype.getCodespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tendermint.abci.ExecTxResult} returns this
 */
proto.tendermint.abci.ExecTxResult.prototype.setCodespace = function(value) {
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
proto.tendermint.abci.TxResult.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.TxResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.TxResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.TxResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tx: msg.getTx_asB64(),
    result: (f = msg.getResult()) && proto.tendermint.abci.ExecTxResult.toObject(includeInstance, f)
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
 * @return {!proto.tendermint.abci.TxResult}
 */
proto.tendermint.abci.TxResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.TxResult;
  return proto.tendermint.abci.TxResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.TxResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.TxResult}
 */
proto.tendermint.abci.TxResult.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tendermint.abci.ExecTxResult;
      reader.readMessage(value,proto.tendermint.abci.ExecTxResult.deserializeBinaryFromReader);
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
proto.tendermint.abci.TxResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.TxResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.TxResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.TxResult.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.ExecTxResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 height = 1;
 * @return {number}
 */
proto.tendermint.abci.TxResult.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.TxResult} returns this
 */
proto.tendermint.abci.TxResult.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.tendermint.abci.TxResult.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.TxResult} returns this
 */
proto.tendermint.abci.TxResult.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes tx = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.TxResult.prototype.getTx = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes tx = 3;
 * This is a type-conversion wrapper around `getTx()`
 * @return {string}
 */
proto.tendermint.abci.TxResult.prototype.getTx_asB64 = function() {
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
proto.tendermint.abci.TxResult.prototype.getTx_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTx()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.TxResult} returns this
 */
proto.tendermint.abci.TxResult.prototype.setTx = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional ExecTxResult result = 4;
 * @return {?proto.tendermint.abci.ExecTxResult}
 */
proto.tendermint.abci.TxResult.prototype.getResult = function() {
  return /** @type{?proto.tendermint.abci.ExecTxResult} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.ExecTxResult, 4));
};


/**
 * @param {?proto.tendermint.abci.ExecTxResult|undefined} value
 * @return {!proto.tendermint.abci.TxResult} returns this
*/
proto.tendermint.abci.TxResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.TxResult} returns this
 */
proto.tendermint.abci.TxResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.TxResult.prototype.hasResult = function() {
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
proto.tendermint.abci.Validator.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.Validator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.Validator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Validator.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.Validator}
 */
proto.tendermint.abci.Validator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.Validator;
  return proto.tendermint.abci.Validator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.Validator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.Validator}
 */
proto.tendermint.abci.Validator.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.Validator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.Validator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.Validator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Validator.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.Validator.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.tendermint.abci.Validator.prototype.getAddress_asB64 = function() {
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
proto.tendermint.abci.Validator.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.Validator} returns this
 */
proto.tendermint.abci.Validator.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 power = 3;
 * @return {number}
 */
proto.tendermint.abci.Validator.prototype.getPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.Validator} returns this
 */
proto.tendermint.abci.Validator.prototype.setPower = function(value) {
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
proto.tendermint.abci.ValidatorUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ValidatorUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ValidatorUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ValidatorUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: (f = msg.getPubKey()) && tendermint_crypto_keys_pb.PublicKey.toObject(includeInstance, f),
    power: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tendermint.abci.ValidatorUpdate}
 */
proto.tendermint.abci.ValidatorUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ValidatorUpdate;
  return proto.tendermint.abci.ValidatorUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ValidatorUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ValidatorUpdate}
 */
proto.tendermint.abci.ValidatorUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tendermint_crypto_keys_pb.PublicKey;
      reader.readMessage(value,tendermint_crypto_keys_pb.PublicKey.deserializeBinaryFromReader);
      msg.setPubKey(value);
      break;
    case 2:
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
proto.tendermint.abci.ValidatorUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ValidatorUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ValidatorUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ValidatorUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPubKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tendermint_crypto_keys_pb.PublicKey.serializeBinaryToWriter
    );
  }
  f = message.getPower();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional tendermint.crypto.PublicKey pub_key = 1;
 * @return {?proto.tendermint.crypto.PublicKey}
 */
proto.tendermint.abci.ValidatorUpdate.prototype.getPubKey = function() {
  return /** @type{?proto.tendermint.crypto.PublicKey} */ (
    jspb.Message.getWrapperField(this, tendermint_crypto_keys_pb.PublicKey, 1));
};


/**
 * @param {?proto.tendermint.crypto.PublicKey|undefined} value
 * @return {!proto.tendermint.abci.ValidatorUpdate} returns this
*/
proto.tendermint.abci.ValidatorUpdate.prototype.setPubKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.ValidatorUpdate} returns this
 */
proto.tendermint.abci.ValidatorUpdate.prototype.clearPubKey = function() {
  return this.setPubKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.ValidatorUpdate.prototype.hasPubKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 power = 2;
 * @return {number}
 */
proto.tendermint.abci.ValidatorUpdate.prototype.getPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.ValidatorUpdate} returns this
 */
proto.tendermint.abci.ValidatorUpdate.prototype.setPower = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.tendermint.abci.VoteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.VoteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.VoteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.VoteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto.tendermint.abci.Validator.toObject(includeInstance, f),
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
 * @return {!proto.tendermint.abci.VoteInfo}
 */
proto.tendermint.abci.VoteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.VoteInfo;
  return proto.tendermint.abci.VoteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.VoteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.VoteInfo}
 */
proto.tendermint.abci.VoteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.abci.Validator;
      reader.readMessage(value,proto.tendermint.abci.Validator.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 3:
      var value = /** @type {!proto.tendermint.types.BlockIDFlag} */ (reader.readEnum());
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
proto.tendermint.abci.VoteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.VoteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.VoteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.VoteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tendermint.abci.Validator.serializeBinaryToWriter
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
 * @return {?proto.tendermint.abci.Validator}
 */
proto.tendermint.abci.VoteInfo.prototype.getValidator = function() {
  return /** @type{?proto.tendermint.abci.Validator} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.Validator, 1));
};


/**
 * @param {?proto.tendermint.abci.Validator|undefined} value
 * @return {!proto.tendermint.abci.VoteInfo} returns this
*/
proto.tendermint.abci.VoteInfo.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.VoteInfo} returns this
 */
proto.tendermint.abci.VoteInfo.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.VoteInfo.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tendermint.types.BlockIDFlag block_id_flag = 3;
 * @return {!proto.tendermint.types.BlockIDFlag}
 */
proto.tendermint.abci.VoteInfo.prototype.getBlockIdFlag = function() {
  return /** @type {!proto.tendermint.types.BlockIDFlag} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tendermint.types.BlockIDFlag} value
 * @return {!proto.tendermint.abci.VoteInfo} returns this
 */
proto.tendermint.abci.VoteInfo.prototype.setBlockIdFlag = function(value) {
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
proto.tendermint.abci.ExtendedVoteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.ExtendedVoteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.ExtendedVoteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ExtendedVoteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto.tendermint.abci.Validator.toObject(includeInstance, f),
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
 * @return {!proto.tendermint.abci.ExtendedVoteInfo}
 */
proto.tendermint.abci.ExtendedVoteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.ExtendedVoteInfo;
  return proto.tendermint.abci.ExtendedVoteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.ExtendedVoteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.ExtendedVoteInfo}
 */
proto.tendermint.abci.ExtendedVoteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.abci.Validator;
      reader.readMessage(value,proto.tendermint.abci.Validator.deserializeBinaryFromReader);
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
      var value = /** @type {!proto.tendermint.types.BlockIDFlag} */ (reader.readEnum());
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
proto.tendermint.abci.ExtendedVoteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.ExtendedVoteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.ExtendedVoteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.ExtendedVoteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tendermint.abci.Validator.serializeBinaryToWriter
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
 * @return {?proto.tendermint.abci.Validator}
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.getValidator = function() {
  return /** @type{?proto.tendermint.abci.Validator} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.Validator, 1));
};


/**
 * @param {?proto.tendermint.abci.Validator|undefined} value
 * @return {!proto.tendermint.abci.ExtendedVoteInfo} returns this
*/
proto.tendermint.abci.ExtendedVoteInfo.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.ExtendedVoteInfo} returns this
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes vote_extension = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.getVoteExtension = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes vote_extension = 3;
 * This is a type-conversion wrapper around `getVoteExtension()`
 * @return {string}
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.getVoteExtension_asB64 = function() {
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
proto.tendermint.abci.ExtendedVoteInfo.prototype.getVoteExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoteExtension()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ExtendedVoteInfo} returns this
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.setVoteExtension = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes extension_signature = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.getExtensionSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes extension_signature = 4;
 * This is a type-conversion wrapper around `getExtensionSignature()`
 * @return {string}
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.getExtensionSignature_asB64 = function() {
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
proto.tendermint.abci.ExtendedVoteInfo.prototype.getExtensionSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExtensionSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.ExtendedVoteInfo} returns this
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.setExtensionSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional tendermint.types.BlockIDFlag block_id_flag = 5;
 * @return {!proto.tendermint.types.BlockIDFlag}
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.getBlockIdFlag = function() {
  return /** @type {!proto.tendermint.types.BlockIDFlag} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.tendermint.types.BlockIDFlag} value
 * @return {!proto.tendermint.abci.ExtendedVoteInfo} returns this
 */
proto.tendermint.abci.ExtendedVoteInfo.prototype.setBlockIdFlag = function(value) {
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
proto.tendermint.abci.Misbehavior.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.Misbehavior.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.Misbehavior} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Misbehavior.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    validator: (f = msg.getValidator()) && proto.tendermint.abci.Validator.toObject(includeInstance, f),
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
 * @return {!proto.tendermint.abci.Misbehavior}
 */
proto.tendermint.abci.Misbehavior.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.Misbehavior;
  return proto.tendermint.abci.Misbehavior.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.Misbehavior} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.Misbehavior}
 */
proto.tendermint.abci.Misbehavior.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tendermint.abci.MisbehaviorType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.tendermint.abci.Validator;
      reader.readMessage(value,proto.tendermint.abci.Validator.deserializeBinaryFromReader);
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
proto.tendermint.abci.Misbehavior.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.Misbehavior.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.Misbehavior} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Misbehavior.serializeBinaryToWriter = function(message, writer) {
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
      proto.tendermint.abci.Validator.serializeBinaryToWriter
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
 * @return {!proto.tendermint.abci.MisbehaviorType}
 */
proto.tendermint.abci.Misbehavior.prototype.getType = function() {
  return /** @type {!proto.tendermint.abci.MisbehaviorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tendermint.abci.MisbehaviorType} value
 * @return {!proto.tendermint.abci.Misbehavior} returns this
 */
proto.tendermint.abci.Misbehavior.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Validator validator = 2;
 * @return {?proto.tendermint.abci.Validator}
 */
proto.tendermint.abci.Misbehavior.prototype.getValidator = function() {
  return /** @type{?proto.tendermint.abci.Validator} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.abci.Validator, 2));
};


/**
 * @param {?proto.tendermint.abci.Validator|undefined} value
 * @return {!proto.tendermint.abci.Misbehavior} returns this
*/
proto.tendermint.abci.Misbehavior.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Misbehavior} returns this
 */
proto.tendermint.abci.Misbehavior.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Misbehavior.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.tendermint.abci.Misbehavior.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.Misbehavior} returns this
 */
proto.tendermint.abci.Misbehavior.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tendermint.abci.Misbehavior.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tendermint.abci.Misbehavior} returns this
*/
proto.tendermint.abci.Misbehavior.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.abci.Misbehavior} returns this
 */
proto.tendermint.abci.Misbehavior.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.abci.Misbehavior.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 total_voting_power = 5;
 * @return {number}
 */
proto.tendermint.abci.Misbehavior.prototype.getTotalVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.Misbehavior} returns this
 */
proto.tendermint.abci.Misbehavior.prototype.setTotalVotingPower = function(value) {
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
proto.tendermint.abci.Snapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.abci.Snapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.abci.Snapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Snapshot.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tendermint.abci.Snapshot}
 */
proto.tendermint.abci.Snapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.abci.Snapshot;
  return proto.tendermint.abci.Snapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.abci.Snapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.abci.Snapshot}
 */
proto.tendermint.abci.Snapshot.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tendermint.abci.Snapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.abci.Snapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.abci.Snapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.abci.Snapshot.serializeBinaryToWriter = function(message, writer) {
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
proto.tendermint.abci.Snapshot.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.Snapshot} returns this
 */
proto.tendermint.abci.Snapshot.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 format = 2;
 * @return {number}
 */
proto.tendermint.abci.Snapshot.prototype.getFormat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.Snapshot} returns this
 */
proto.tendermint.abci.Snapshot.prototype.setFormat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 chunks = 3;
 * @return {number}
 */
proto.tendermint.abci.Snapshot.prototype.getChunks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.abci.Snapshot} returns this
 */
proto.tendermint.abci.Snapshot.prototype.setChunks = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.Snapshot.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes hash = 4;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.tendermint.abci.Snapshot.prototype.getHash_asB64 = function() {
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
proto.tendermint.abci.Snapshot.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.Snapshot} returns this
 */
proto.tendermint.abci.Snapshot.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes metadata = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.abci.Snapshot.prototype.getMetadata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes metadata = 5;
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {string}
 */
proto.tendermint.abci.Snapshot.prototype.getMetadata_asB64 = function() {
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
proto.tendermint.abci.Snapshot.prototype.getMetadata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.abci.Snapshot} returns this
 */
proto.tendermint.abci.Snapshot.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.tendermint.abci.CheckTxType = {
  NEW: 0,
  RECHECK: 1
};

/**
 * @enum {number}
 */
proto.tendermint.abci.MisbehaviorType = {
  UNKNOWN: 0,
  DUPLICATE_VOTE: 1,
  LIGHT_CLIENT_ATTACK: 2
};

goog.object.extend(exports, proto.tendermint.abci);
