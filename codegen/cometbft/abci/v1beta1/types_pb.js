// source: cometbft/abci/v1beta1/types.proto
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

var cometbft_crypto_v1_keys_pb = require('../../../cometbft/crypto/v1/keys_pb.js');
goog.object.extend(proto, cometbft_crypto_v1_keys_pb);
var cometbft_crypto_v1_proof_pb = require('../../../cometbft/crypto/v1/proof_pb.js');
goog.object.extend(proto, cometbft_crypto_v1_proof_pb);
var cometbft_types_v1beta1_params_pb = require('../../../cometbft/types/v1beta1/params_pb.js');
goog.object.extend(proto, cometbft_types_v1beta1_params_pb);
var cometbft_types_v1beta1_types_pb = require('../../../cometbft/types/v1beta1/types_pb.js');
goog.object.extend(proto, cometbft_types_v1beta1_types_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.cometbft.abci.v1beta1.BlockParams', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.CheckTxType', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ConsensusParams', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.Event', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.EventAttribute', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.Evidence', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.EvidenceType', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.LastCommitInfo', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.Request', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.Request.ValueCase', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestBeginBlock', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestCheckTx', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestCommit', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestDeliverTx', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestEcho', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestEndBlock', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestFlush', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestInfo', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestInitChain', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestListSnapshots', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestOfferSnapshot', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestQuery', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.RequestSetOption', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.Response', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.Response.ValueCase', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.Result', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseBeginBlock', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseCheckTx', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseCommit', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseDeliverTx', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseEcho', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseEndBlock', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseException', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseFlush', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseInfo', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseInitChain', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseListSnapshots', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseOfferSnapshot', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.Result', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseQuery', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ResponseSetOption', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.Snapshot', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.TxResult', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.Validator', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.ValidatorUpdate', null, global);
goog.exportSymbol('proto.cometbft.abci.v1beta1.VoteInfo', null, global);
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
proto.cometbft.abci.v1beta1.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cometbft.abci.v1beta1.Request.oneofGroups_);
};
goog.inherits(proto.cometbft.abci.v1beta1.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.Request.displayName = 'proto.cometbft.abci.v1beta1.Request';
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
proto.cometbft.abci.v1beta1.RequestEcho = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestEcho, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestEcho.displayName = 'proto.cometbft.abci.v1beta1.RequestEcho';
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
proto.cometbft.abci.v1beta1.RequestFlush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestFlush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestFlush.displayName = 'proto.cometbft.abci.v1beta1.RequestFlush';
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
proto.cometbft.abci.v1beta1.RequestInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestInfo.displayName = 'proto.cometbft.abci.v1beta1.RequestInfo';
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
proto.cometbft.abci.v1beta1.RequestSetOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestSetOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestSetOption.displayName = 'proto.cometbft.abci.v1beta1.RequestSetOption';
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
proto.cometbft.abci.v1beta1.RequestInitChain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.RequestInitChain.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestInitChain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestInitChain.displayName = 'proto.cometbft.abci.v1beta1.RequestInitChain';
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
proto.cometbft.abci.v1beta1.RequestQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestQuery.displayName = 'proto.cometbft.abci.v1beta1.RequestQuery';
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
proto.cometbft.abci.v1beta1.RequestBeginBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.RequestBeginBlock.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestBeginBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestBeginBlock.displayName = 'proto.cometbft.abci.v1beta1.RequestBeginBlock';
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
proto.cometbft.abci.v1beta1.RequestCheckTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestCheckTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestCheckTx.displayName = 'proto.cometbft.abci.v1beta1.RequestCheckTx';
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
proto.cometbft.abci.v1beta1.RequestDeliverTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestDeliverTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestDeliverTx.displayName = 'proto.cometbft.abci.v1beta1.RequestDeliverTx';
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
proto.cometbft.abci.v1beta1.RequestEndBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestEndBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestEndBlock.displayName = 'proto.cometbft.abci.v1beta1.RequestEndBlock';
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
proto.cometbft.abci.v1beta1.RequestCommit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestCommit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestCommit.displayName = 'proto.cometbft.abci.v1beta1.RequestCommit';
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
proto.cometbft.abci.v1beta1.RequestListSnapshots = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestListSnapshots, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestListSnapshots.displayName = 'proto.cometbft.abci.v1beta1.RequestListSnapshots';
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
proto.cometbft.abci.v1beta1.RequestOfferSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestOfferSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestOfferSnapshot.displayName = 'proto.cometbft.abci.v1beta1.RequestOfferSnapshot';
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
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.displayName = 'proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk';
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
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.displayName = 'proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk';
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
proto.cometbft.abci.v1beta1.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cometbft.abci.v1beta1.Response.oneofGroups_);
};
goog.inherits(proto.cometbft.abci.v1beta1.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.Response.displayName = 'proto.cometbft.abci.v1beta1.Response';
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
proto.cometbft.abci.v1beta1.ResponseException = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseException, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseException.displayName = 'proto.cometbft.abci.v1beta1.ResponseException';
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
proto.cometbft.abci.v1beta1.ResponseEcho = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseEcho, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseEcho.displayName = 'proto.cometbft.abci.v1beta1.ResponseEcho';
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
proto.cometbft.abci.v1beta1.ResponseFlush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseFlush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseFlush.displayName = 'proto.cometbft.abci.v1beta1.ResponseFlush';
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
proto.cometbft.abci.v1beta1.ResponseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseInfo.displayName = 'proto.cometbft.abci.v1beta1.ResponseInfo';
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
proto.cometbft.abci.v1beta1.ResponseSetOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseSetOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseSetOption.displayName = 'proto.cometbft.abci.v1beta1.ResponseSetOption';
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
proto.cometbft.abci.v1beta1.ResponseInitChain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.ResponseInitChain.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseInitChain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseInitChain.displayName = 'proto.cometbft.abci.v1beta1.ResponseInitChain';
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
proto.cometbft.abci.v1beta1.ResponseQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseQuery.displayName = 'proto.cometbft.abci.v1beta1.ResponseQuery';
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
proto.cometbft.abci.v1beta1.ResponseBeginBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.ResponseBeginBlock.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseBeginBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseBeginBlock.displayName = 'proto.cometbft.abci.v1beta1.ResponseBeginBlock';
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
proto.cometbft.abci.v1beta1.ResponseCheckTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.ResponseCheckTx.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseCheckTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseCheckTx.displayName = 'proto.cometbft.abci.v1beta1.ResponseCheckTx';
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
proto.cometbft.abci.v1beta1.ResponseDeliverTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.ResponseDeliverTx.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseDeliverTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseDeliverTx.displayName = 'proto.cometbft.abci.v1beta1.ResponseDeliverTx';
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
proto.cometbft.abci.v1beta1.ResponseEndBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.ResponseEndBlock.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseEndBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseEndBlock.displayName = 'proto.cometbft.abci.v1beta1.ResponseEndBlock';
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
proto.cometbft.abci.v1beta1.ResponseCommit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseCommit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseCommit.displayName = 'proto.cometbft.abci.v1beta1.ResponseCommit';
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
proto.cometbft.abci.v1beta1.ResponseListSnapshots = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.ResponseListSnapshots.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseListSnapshots, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseListSnapshots.displayName = 'proto.cometbft.abci.v1beta1.ResponseListSnapshots';
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
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseOfferSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.displayName = 'proto.cometbft.abci.v1beta1.ResponseOfferSnapshot';
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
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.displayName = 'proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk';
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
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.displayName = 'proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk';
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
proto.cometbft.abci.v1beta1.ConsensusParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ConsensusParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ConsensusParams.displayName = 'proto.cometbft.abci.v1beta1.ConsensusParams';
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
proto.cometbft.abci.v1beta1.BlockParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.BlockParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.BlockParams.displayName = 'proto.cometbft.abci.v1beta1.BlockParams';
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
proto.cometbft.abci.v1beta1.LastCommitInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.LastCommitInfo.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.LastCommitInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.LastCommitInfo.displayName = 'proto.cometbft.abci.v1beta1.LastCommitInfo';
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
proto.cometbft.abci.v1beta1.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cometbft.abci.v1beta1.Event.repeatedFields_, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.Event.displayName = 'proto.cometbft.abci.v1beta1.Event';
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
proto.cometbft.abci.v1beta1.EventAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.EventAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.EventAttribute.displayName = 'proto.cometbft.abci.v1beta1.EventAttribute';
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
proto.cometbft.abci.v1beta1.TxResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.TxResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.TxResult.displayName = 'proto.cometbft.abci.v1beta1.TxResult';
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
proto.cometbft.abci.v1beta1.Validator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.Validator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.Validator.displayName = 'proto.cometbft.abci.v1beta1.Validator';
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
proto.cometbft.abci.v1beta1.ValidatorUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.ValidatorUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.ValidatorUpdate.displayName = 'proto.cometbft.abci.v1beta1.ValidatorUpdate';
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
proto.cometbft.abci.v1beta1.VoteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.VoteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.VoteInfo.displayName = 'proto.cometbft.abci.v1beta1.VoteInfo';
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
proto.cometbft.abci.v1beta1.Evidence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.Evidence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.Evidence.displayName = 'proto.cometbft.abci.v1beta1.Evidence';
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
proto.cometbft.abci.v1beta1.Snapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cometbft.abci.v1beta1.Snapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cometbft.abci.v1beta1.Snapshot.displayName = 'proto.cometbft.abci.v1beta1.Snapshot';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cometbft.abci.v1beta1.Request.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]];

/**
 * @enum {number}
 */
proto.cometbft.abci.v1beta1.Request.ValueCase = {
  VALUE_NOT_SET: 0,
  ECHO: 1,
  FLUSH: 2,
  INFO: 3,
  SET_OPTION: 4,
  INIT_CHAIN: 5,
  QUERY: 6,
  BEGIN_BLOCK: 7,
  CHECK_TX: 8,
  DELIVER_TX: 9,
  END_BLOCK: 10,
  COMMIT: 11,
  LIST_SNAPSHOTS: 12,
  OFFER_SNAPSHOT: 13,
  LOAD_SNAPSHOT_CHUNK: 14,
  APPLY_SNAPSHOT_CHUNK: 15
};

/**
 * @return {proto.cometbft.abci.v1beta1.Request.ValueCase}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getValueCase = function() {
  return /** @type {proto.cometbft.abci.v1beta1.Request.ValueCase} */(jspb.Message.computeOneofCase(this, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0]));
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
proto.cometbft.abci.v1beta1.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    echo: (f = msg.getEcho()) && proto.cometbft.abci.v1beta1.RequestEcho.toObject(includeInstance, f),
    flush: (f = msg.getFlush()) && proto.cometbft.abci.v1beta1.RequestFlush.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.cometbft.abci.v1beta1.RequestInfo.toObject(includeInstance, f),
    setOption: (f = msg.getSetOption()) && proto.cometbft.abci.v1beta1.RequestSetOption.toObject(includeInstance, f),
    initChain: (f = msg.getInitChain()) && proto.cometbft.abci.v1beta1.RequestInitChain.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && proto.cometbft.abci.v1beta1.RequestQuery.toObject(includeInstance, f),
    beginBlock: (f = msg.getBeginBlock()) && proto.cometbft.abci.v1beta1.RequestBeginBlock.toObject(includeInstance, f),
    checkTx: (f = msg.getCheckTx()) && proto.cometbft.abci.v1beta1.RequestCheckTx.toObject(includeInstance, f),
    deliverTx: (f = msg.getDeliverTx()) && proto.cometbft.abci.v1beta1.RequestDeliverTx.toObject(includeInstance, f),
    endBlock: (f = msg.getEndBlock()) && proto.cometbft.abci.v1beta1.RequestEndBlock.toObject(includeInstance, f),
    commit: (f = msg.getCommit()) && proto.cometbft.abci.v1beta1.RequestCommit.toObject(includeInstance, f),
    listSnapshots: (f = msg.getListSnapshots()) && proto.cometbft.abci.v1beta1.RequestListSnapshots.toObject(includeInstance, f),
    offerSnapshot: (f = msg.getOfferSnapshot()) && proto.cometbft.abci.v1beta1.RequestOfferSnapshot.toObject(includeInstance, f),
    loadSnapshotChunk: (f = msg.getLoadSnapshotChunk()) && proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.toObject(includeInstance, f),
    applySnapshotChunk: (f = msg.getApplySnapshotChunk()) && proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.toObject(includeInstance, f)
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
 * @return {!proto.cometbft.abci.v1beta1.Request}
 */
proto.cometbft.abci.v1beta1.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.Request;
  return proto.cometbft.abci.v1beta1.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.Request}
 */
proto.cometbft.abci.v1beta1.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1beta1.RequestEcho;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestEcho.deserializeBinaryFromReader);
      msg.setEcho(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1beta1.RequestFlush;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestFlush.deserializeBinaryFromReader);
      msg.setFlush(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1beta1.RequestInfo;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 4:
      var value = new proto.cometbft.abci.v1beta1.RequestSetOption;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestSetOption.deserializeBinaryFromReader);
      msg.setSetOption(value);
      break;
    case 5:
      var value = new proto.cometbft.abci.v1beta1.RequestInitChain;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestInitChain.deserializeBinaryFromReader);
      msg.setInitChain(value);
      break;
    case 6:
      var value = new proto.cometbft.abci.v1beta1.RequestQuery;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 7:
      var value = new proto.cometbft.abci.v1beta1.RequestBeginBlock;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestBeginBlock.deserializeBinaryFromReader);
      msg.setBeginBlock(value);
      break;
    case 8:
      var value = new proto.cometbft.abci.v1beta1.RequestCheckTx;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestCheckTx.deserializeBinaryFromReader);
      msg.setCheckTx(value);
      break;
    case 9:
      var value = new proto.cometbft.abci.v1beta1.RequestDeliverTx;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestDeliverTx.deserializeBinaryFromReader);
      msg.setDeliverTx(value);
      break;
    case 10:
      var value = new proto.cometbft.abci.v1beta1.RequestEndBlock;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestEndBlock.deserializeBinaryFromReader);
      msg.setEndBlock(value);
      break;
    case 11:
      var value = new proto.cometbft.abci.v1beta1.RequestCommit;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestCommit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 12:
      var value = new proto.cometbft.abci.v1beta1.RequestListSnapshots;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestListSnapshots.deserializeBinaryFromReader);
      msg.setListSnapshots(value);
      break;
    case 13:
      var value = new proto.cometbft.abci.v1beta1.RequestOfferSnapshot;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestOfferSnapshot.deserializeBinaryFromReader);
      msg.setOfferSnapshot(value);
      break;
    case 14:
      var value = new proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.deserializeBinaryFromReader);
      msg.setLoadSnapshotChunk(value);
      break;
    case 15:
      var value = new proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.deserializeBinaryFromReader);
      msg.setApplySnapshotChunk(value);
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
proto.cometbft.abci.v1beta1.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEcho();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1beta1.RequestEcho.serializeBinaryToWriter
    );
  }
  f = message.getFlush();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cometbft.abci.v1beta1.RequestFlush.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cometbft.abci.v1beta1.RequestInfo.serializeBinaryToWriter
    );
  }
  f = message.getSetOption();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cometbft.abci.v1beta1.RequestSetOption.serializeBinaryToWriter
    );
  }
  f = message.getInitChain();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cometbft.abci.v1beta1.RequestInitChain.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cometbft.abci.v1beta1.RequestQuery.serializeBinaryToWriter
    );
  }
  f = message.getBeginBlock();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cometbft.abci.v1beta1.RequestBeginBlock.serializeBinaryToWriter
    );
  }
  f = message.getCheckTx();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.cometbft.abci.v1beta1.RequestCheckTx.serializeBinaryToWriter
    );
  }
  f = message.getDeliverTx();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cometbft.abci.v1beta1.RequestDeliverTx.serializeBinaryToWriter
    );
  }
  f = message.getEndBlock();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.cometbft.abci.v1beta1.RequestEndBlock.serializeBinaryToWriter
    );
  }
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.cometbft.abci.v1beta1.RequestCommit.serializeBinaryToWriter
    );
  }
  f = message.getListSnapshots();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.cometbft.abci.v1beta1.RequestListSnapshots.serializeBinaryToWriter
    );
  }
  f = message.getOfferSnapshot();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.cometbft.abci.v1beta1.RequestOfferSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getLoadSnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.serializeBinaryToWriter
    );
  }
  f = message.getApplySnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestEcho echo = 1;
 * @return {?proto.cometbft.abci.v1beta1.RequestEcho}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getEcho = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestEcho} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestEcho, 1));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestEcho|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setEcho = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearEcho = function() {
  return this.setEcho(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasEcho = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RequestFlush flush = 2;
 * @return {?proto.cometbft.abci.v1beta1.RequestFlush}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getFlush = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestFlush} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestFlush, 2));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestFlush|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setFlush = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearFlush = function() {
  return this.setFlush(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasFlush = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RequestInfo info = 3;
 * @return {?proto.cometbft.abci.v1beta1.RequestInfo}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getInfo = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestInfo} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestInfo, 3));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestInfo|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RequestSetOption set_option = 4;
 * @return {?proto.cometbft.abci.v1beta1.RequestSetOption}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getSetOption = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestSetOption} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestSetOption, 4));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestSetOption|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setSetOption = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearSetOption = function() {
  return this.setSetOption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasSetOption = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RequestInitChain init_chain = 5;
 * @return {?proto.cometbft.abci.v1beta1.RequestInitChain}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getInitChain = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestInitChain} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestInitChain, 5));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestInitChain|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setInitChain = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearInitChain = function() {
  return this.setInitChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasInitChain = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RequestQuery query = 6;
 * @return {?proto.cometbft.abci.v1beta1.RequestQuery}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getQuery = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestQuery} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestQuery, 6));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestQuery|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RequestBeginBlock begin_block = 7;
 * @return {?proto.cometbft.abci.v1beta1.RequestBeginBlock}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getBeginBlock = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestBeginBlock} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestBeginBlock, 7));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestBeginBlock|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setBeginBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearBeginBlock = function() {
  return this.setBeginBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasBeginBlock = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RequestCheckTx check_tx = 8;
 * @return {?proto.cometbft.abci.v1beta1.RequestCheckTx}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getCheckTx = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestCheckTx} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestCheckTx, 8));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestCheckTx|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setCheckTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearCheckTx = function() {
  return this.setCheckTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasCheckTx = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RequestDeliverTx deliver_tx = 9;
 * @return {?proto.cometbft.abci.v1beta1.RequestDeliverTx}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getDeliverTx = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestDeliverTx} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestDeliverTx, 9));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestDeliverTx|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setDeliverTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearDeliverTx = function() {
  return this.setDeliverTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasDeliverTx = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RequestEndBlock end_block = 10;
 * @return {?proto.cometbft.abci.v1beta1.RequestEndBlock}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getEndBlock = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestEndBlock} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestEndBlock, 10));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestEndBlock|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setEndBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearEndBlock = function() {
  return this.setEndBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasEndBlock = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RequestCommit commit = 11;
 * @return {?proto.cometbft.abci.v1beta1.RequestCommit}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getCommit = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestCommit} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestCommit, 11));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestCommit|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setCommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional RequestListSnapshots list_snapshots = 12;
 * @return {?proto.cometbft.abci.v1beta1.RequestListSnapshots}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getListSnapshots = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestListSnapshots} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestListSnapshots, 12));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestListSnapshots|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setListSnapshots = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearListSnapshots = function() {
  return this.setListSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasListSnapshots = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional RequestOfferSnapshot offer_snapshot = 13;
 * @return {?proto.cometbft.abci.v1beta1.RequestOfferSnapshot}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getOfferSnapshot = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestOfferSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestOfferSnapshot, 13));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestOfferSnapshot|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setOfferSnapshot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearOfferSnapshot = function() {
  return this.setOfferSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasOfferSnapshot = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional RequestLoadSnapshotChunk load_snapshot_chunk = 14;
 * @return {?proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getLoadSnapshotChunk = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk, 14));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setLoadSnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearLoadSnapshotChunk = function() {
  return this.setLoadSnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasLoadSnapshotChunk = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional RequestApplySnapshotChunk apply_snapshot_chunk = 15;
 * @return {?proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk}
 */
proto.cometbft.abci.v1beta1.Request.prototype.getApplySnapshotChunk = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk, 15));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
*/
proto.cometbft.abci.v1beta1.Request.prototype.setApplySnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.cometbft.abci.v1beta1.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Request} returns this
 */
proto.cometbft.abci.v1beta1.Request.prototype.clearApplySnapshotChunk = function() {
  return this.setApplySnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Request.prototype.hasApplySnapshotChunk = function() {
  return jspb.Message.getField(this, 15) != null;
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
proto.cometbft.abci.v1beta1.RequestEcho.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestEcho.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestEcho} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestEcho.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.RequestEcho}
 */
proto.cometbft.abci.v1beta1.RequestEcho.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestEcho;
  return proto.cometbft.abci.v1beta1.RequestEcho.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestEcho} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestEcho}
 */
proto.cometbft.abci.v1beta1.RequestEcho.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestEcho.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestEcho.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestEcho} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestEcho.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.RequestEcho.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.RequestEcho} returns this
 */
proto.cometbft.abci.v1beta1.RequestEcho.prototype.setMessage = function(value) {
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
proto.cometbft.abci.v1beta1.RequestFlush.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestFlush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestFlush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestFlush.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.RequestFlush}
 */
proto.cometbft.abci.v1beta1.RequestFlush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestFlush;
  return proto.cometbft.abci.v1beta1.RequestFlush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestFlush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestFlush}
 */
proto.cometbft.abci.v1beta1.RequestFlush.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestFlush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestFlush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestFlush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestFlush.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.RequestInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    p2pVersion: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cometbft.abci.v1beta1.RequestInfo}
 */
proto.cometbft.abci.v1beta1.RequestInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestInfo;
  return proto.cometbft.abci.v1beta1.RequestInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestInfo}
 */
proto.cometbft.abci.v1beta1.RequestInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestInfo.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.RequestInfo} returns this
 */
proto.cometbft.abci.v1beta1.RequestInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 block_version = 2;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.RequestInfo.prototype.getBlockVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.RequestInfo} returns this
 */
proto.cometbft.abci.v1beta1.RequestInfo.prototype.setBlockVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 p2p_version = 3;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.RequestInfo.prototype.getP2pVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.RequestInfo} returns this
 */
proto.cometbft.abci.v1beta1.RequestInfo.prototype.setP2pVersion = function(value) {
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
proto.cometbft.abci.v1beta1.RequestSetOption.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestSetOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestSetOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestSetOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cometbft.abci.v1beta1.RequestSetOption}
 */
proto.cometbft.abci.v1beta1.RequestSetOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestSetOption;
  return proto.cometbft.abci.v1beta1.RequestSetOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestSetOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestSetOption}
 */
proto.cometbft.abci.v1beta1.RequestSetOption.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestSetOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestSetOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestSetOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestSetOption.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestSetOption.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.RequestSetOption} returns this
 */
proto.cometbft.abci.v1beta1.RequestSetOption.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestSetOption.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.RequestSetOption} returns this
 */
proto.cometbft.abci.v1beta1.RequestSetOption.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.RequestInitChain.repeatedFields_ = [4];



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
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestInitChain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestInitChain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestInitChain.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    chainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    consensusParams: (f = msg.getConsensusParams()) && proto.cometbft.abci.v1beta1.ConsensusParams.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.cometbft.abci.v1beta1.ValidatorUpdate.toObject, includeInstance),
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
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestInitChain;
  return proto.cometbft.abci.v1beta1.RequestInitChain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestInitChain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cometbft.abci.v1beta1.ConsensusParams;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ConsensusParams.deserializeBinaryFromReader);
      msg.setConsensusParams(value);
      break;
    case 4:
      var value = new proto.cometbft.abci.v1beta1.ValidatorUpdate;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ValidatorUpdate.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestInitChain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestInitChain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestInitChain.serializeBinaryToWriter = function(message, writer) {
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
      proto.cometbft.abci.v1beta1.ConsensusParams.serializeBinaryToWriter
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.cometbft.abci.v1beta1.ValidatorUpdate.serializeBinaryToWriter
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
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain} returns this
*/
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain} returns this
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string chain_id = 2;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain} returns this
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ConsensusParams consensus_params = 3;
 * @return {?proto.cometbft.abci.v1beta1.ConsensusParams}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.getConsensusParams = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ConsensusParams} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ConsensusParams, 3));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ConsensusParams|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain} returns this
*/
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.setConsensusParams = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain} returns this
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.clearConsensusParams = function() {
  return this.setConsensusParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.hasConsensusParams = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ValidatorUpdate validators = 4;
 * @return {!Array<!proto.cometbft.abci.v1beta1.ValidatorUpdate>}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.ValidatorUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.ValidatorUpdate, 4));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.ValidatorUpdate>} value
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain} returns this
*/
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.ValidatorUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.ValidatorUpdate}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cometbft.abci.v1beta1.ValidatorUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain} returns this
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional bytes app_state_bytes = 5;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.getAppStateBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes app_state_bytes = 5;
 * This is a type-conversion wrapper around `getAppStateBytes()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.getAppStateBytes_asB64 = function() {
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
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.getAppStateBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppStateBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain} returns this
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.setAppStateBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional int64 initial_height = 6;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.getInitialHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.RequestInitChain} returns this
 */
proto.cometbft.abci.v1beta1.RequestInitChain.prototype.setInitialHeight = function(value) {
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
proto.cometbft.abci.v1beta1.RequestQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestQuery.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.RequestQuery}
 */
proto.cometbft.abci.v1beta1.RequestQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestQuery;
  return proto.cometbft.abci.v1beta1.RequestQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestQuery}
 */
proto.cometbft.abci.v1beta1.RequestQuery.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestQuery.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.RequestQuery.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestQuery.prototype.getData_asB64 = function() {
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
proto.cometbft.abci.v1beta1.RequestQuery.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.RequestQuery} returns this
 */
proto.cometbft.abci.v1beta1.RequestQuery.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestQuery.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.RequestQuery} returns this
 */
proto.cometbft.abci.v1beta1.RequestQuery.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.RequestQuery.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.RequestQuery} returns this
 */
proto.cometbft.abci.v1beta1.RequestQuery.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool prove = 4;
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.RequestQuery.prototype.getProve = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cometbft.abci.v1beta1.RequestQuery} returns this
 */
proto.cometbft.abci.v1beta1.RequestQuery.prototype.setProve = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.repeatedFields_ = [4];



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
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestBeginBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestBeginBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64(),
    header: (f = msg.getHeader()) && cometbft_types_v1beta1_types_pb.Header.toObject(includeInstance, f),
    lastCommitInfo: (f = msg.getLastCommitInfo()) && proto.cometbft.abci.v1beta1.LastCommitInfo.toObject(includeInstance, f),
    byzantineValidatorsList: jspb.Message.toObjectList(msg.getByzantineValidatorsList(),
    proto.cometbft.abci.v1beta1.Evidence.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1beta1.RequestBeginBlock}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestBeginBlock;
  return proto.cometbft.abci.v1beta1.RequestBeginBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestBeginBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestBeginBlock}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cometbft_types_v1beta1_types_pb.Header;
      reader.readMessage(value,cometbft_types_v1beta1_types_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1beta1.LastCommitInfo;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.LastCommitInfo.deserializeBinaryFromReader);
      msg.setLastCommitInfo(value);
      break;
    case 4:
      var value = new proto.cometbft.abci.v1beta1.Evidence;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.Evidence.deserializeBinaryFromReader);
      msg.addByzantineValidators(value);
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
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestBeginBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestBeginBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cometbft_types_v1beta1_types_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getLastCommitInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cometbft.abci.v1beta1.LastCommitInfo.serializeBinaryToWriter
    );
  }
  f = message.getByzantineValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.cometbft.abci.v1beta1.Evidence.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.getHash_asB64 = function() {
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
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.RequestBeginBlock} returns this
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional cometbft.types.v1beta1.Header header = 2;
 * @return {?proto.cometbft.types.v1beta1.Header}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.getHeader = function() {
  return /** @type{?proto.cometbft.types.v1beta1.Header} */ (
    jspb.Message.getWrapperField(this, cometbft_types_v1beta1_types_pb.Header, 2));
};


/**
 * @param {?proto.cometbft.types.v1beta1.Header|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.RequestBeginBlock} returns this
*/
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.RequestBeginBlock} returns this
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LastCommitInfo last_commit_info = 3;
 * @return {?proto.cometbft.abci.v1beta1.LastCommitInfo}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.getLastCommitInfo = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.LastCommitInfo} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.LastCommitInfo, 3));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.LastCommitInfo|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.RequestBeginBlock} returns this
*/
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.setLastCommitInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.RequestBeginBlock} returns this
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.clearLastCommitInfo = function() {
  return this.setLastCommitInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.hasLastCommitInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Evidence byzantine_validators = 4;
 * @return {!Array<!proto.cometbft.abci.v1beta1.Evidence>}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.getByzantineValidatorsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.Evidence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.Evidence, 4));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.Evidence>} value
 * @return {!proto.cometbft.abci.v1beta1.RequestBeginBlock} returns this
*/
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.setByzantineValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.Evidence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.Evidence}
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.addByzantineValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cometbft.abci.v1beta1.Evidence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.RequestBeginBlock} returns this
 */
proto.cometbft.abci.v1beta1.RequestBeginBlock.prototype.clearByzantineValidatorsList = function() {
  return this.setByzantineValidatorsList([]);
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
proto.cometbft.abci.v1beta1.RequestCheckTx.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestCheckTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestCheckTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestCheckTx.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.RequestCheckTx}
 */
proto.cometbft.abci.v1beta1.RequestCheckTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestCheckTx;
  return proto.cometbft.abci.v1beta1.RequestCheckTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestCheckTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestCheckTx}
 */
proto.cometbft.abci.v1beta1.RequestCheckTx.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.cometbft.abci.v1beta1.CheckTxType} */ (reader.readEnum());
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
proto.cometbft.abci.v1beta1.RequestCheckTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestCheckTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestCheckTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestCheckTx.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.RequestCheckTx.prototype.getTx = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes tx = 1;
 * This is a type-conversion wrapper around `getTx()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestCheckTx.prototype.getTx_asB64 = function() {
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
proto.cometbft.abci.v1beta1.RequestCheckTx.prototype.getTx_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTx()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.RequestCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.RequestCheckTx.prototype.setTx = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional CheckTxType type = 2;
 * @return {!proto.cometbft.abci.v1beta1.CheckTxType}
 */
proto.cometbft.abci.v1beta1.RequestCheckTx.prototype.getType = function() {
  return /** @type {!proto.cometbft.abci.v1beta1.CheckTxType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.cometbft.abci.v1beta1.CheckTxType} value
 * @return {!proto.cometbft.abci.v1beta1.RequestCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.RequestCheckTx.prototype.setType = function(value) {
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
proto.cometbft.abci.v1beta1.RequestDeliverTx.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestDeliverTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestDeliverTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestDeliverTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: msg.getTx_asB64()
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
 * @return {!proto.cometbft.abci.v1beta1.RequestDeliverTx}
 */
proto.cometbft.abci.v1beta1.RequestDeliverTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestDeliverTx;
  return proto.cometbft.abci.v1beta1.RequestDeliverTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestDeliverTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestDeliverTx}
 */
proto.cometbft.abci.v1beta1.RequestDeliverTx.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestDeliverTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestDeliverTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestDeliverTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestDeliverTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes tx = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.RequestDeliverTx.prototype.getTx = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes tx = 1;
 * This is a type-conversion wrapper around `getTx()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestDeliverTx.prototype.getTx_asB64 = function() {
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
proto.cometbft.abci.v1beta1.RequestDeliverTx.prototype.getTx_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTx()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.RequestDeliverTx} returns this
 */
proto.cometbft.abci.v1beta1.RequestDeliverTx.prototype.setTx = function(value) {
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
proto.cometbft.abci.v1beta1.RequestEndBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestEndBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestEndBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestEndBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.cometbft.abci.v1beta1.RequestEndBlock}
 */
proto.cometbft.abci.v1beta1.RequestEndBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestEndBlock;
  return proto.cometbft.abci.v1beta1.RequestEndBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestEndBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestEndBlock}
 */
proto.cometbft.abci.v1beta1.RequestEndBlock.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestEndBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestEndBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestEndBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestEndBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 height = 1;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.RequestEndBlock.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.RequestEndBlock} returns this
 */
proto.cometbft.abci.v1beta1.RequestEndBlock.prototype.setHeight = function(value) {
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
proto.cometbft.abci.v1beta1.RequestCommit.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestCommit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestCommit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestCommit.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.RequestCommit}
 */
proto.cometbft.abci.v1beta1.RequestCommit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestCommit;
  return proto.cometbft.abci.v1beta1.RequestCommit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestCommit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestCommit}
 */
proto.cometbft.abci.v1beta1.RequestCommit.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestCommit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestCommit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestCommit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestCommit.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.RequestListSnapshots.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestListSnapshots.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestListSnapshots} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestListSnapshots.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.RequestListSnapshots}
 */
proto.cometbft.abci.v1beta1.RequestListSnapshots.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestListSnapshots;
  return proto.cometbft.abci.v1beta1.RequestListSnapshots.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestListSnapshots} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestListSnapshots}
 */
proto.cometbft.abci.v1beta1.RequestListSnapshots.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestListSnapshots.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestListSnapshots.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestListSnapshots} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestListSnapshots.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestOfferSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestOfferSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshot: (f = msg.getSnapshot()) && proto.cometbft.abci.v1beta1.Snapshot.toObject(includeInstance, f),
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
 * @return {!proto.cometbft.abci.v1beta1.RequestOfferSnapshot}
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestOfferSnapshot;
  return proto.cometbft.abci.v1beta1.RequestOfferSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestOfferSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestOfferSnapshot}
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1beta1.Snapshot;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.Snapshot.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestOfferSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestOfferSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1beta1.Snapshot.serializeBinaryToWriter
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
 * @return {?proto.cometbft.abci.v1beta1.Snapshot}
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.getSnapshot = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.Snapshot} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.Snapshot, 1));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.Snapshot|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.RequestOfferSnapshot} returns this
*/
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.setSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.RequestOfferSnapshot} returns this
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.clearSnapshot = function() {
  return this.setSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.hasSnapshot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes app_hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.getAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes app_hash = 2;
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.getAppHash_asB64 = function() {
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
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.getAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.RequestOfferSnapshot} returns this
 */
proto.cometbft.abci.v1beta1.RequestOfferSnapshot.prototype.setAppHash = function(value) {
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
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk}
 */
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk;
  return proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk}
 */
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 format = 2;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.prototype.getFormat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.prototype.setFormat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 chunk = 3;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.prototype.getChunk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.RequestLoadSnapshotChunk.prototype.setChunk = function(value) {
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
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk}
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk;
  return proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk}
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.getChunk_asB64 = function() {
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
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string sender = 3;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.RequestApplySnapshotChunk.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cometbft.abci.v1beta1.Response.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]];

/**
 * @enum {number}
 */
proto.cometbft.abci.v1beta1.Response.ValueCase = {
  VALUE_NOT_SET: 0,
  EXCEPTION: 1,
  ECHO: 2,
  FLUSH: 3,
  INFO: 4,
  SET_OPTION: 5,
  INIT_CHAIN: 6,
  QUERY: 7,
  BEGIN_BLOCK: 8,
  CHECK_TX: 9,
  DELIVER_TX: 10,
  END_BLOCK: 11,
  COMMIT: 12,
  LIST_SNAPSHOTS: 13,
  OFFER_SNAPSHOT: 14,
  LOAD_SNAPSHOT_CHUNK: 15,
  APPLY_SNAPSHOT_CHUNK: 16
};

/**
 * @return {proto.cometbft.abci.v1beta1.Response.ValueCase}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getValueCase = function() {
  return /** @type {proto.cometbft.abci.v1beta1.Response.ValueCase} */(jspb.Message.computeOneofCase(this, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0]));
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
proto.cometbft.abci.v1beta1.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    exception: (f = msg.getException()) && proto.cometbft.abci.v1beta1.ResponseException.toObject(includeInstance, f),
    echo: (f = msg.getEcho()) && proto.cometbft.abci.v1beta1.ResponseEcho.toObject(includeInstance, f),
    flush: (f = msg.getFlush()) && proto.cometbft.abci.v1beta1.ResponseFlush.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.cometbft.abci.v1beta1.ResponseInfo.toObject(includeInstance, f),
    setOption: (f = msg.getSetOption()) && proto.cometbft.abci.v1beta1.ResponseSetOption.toObject(includeInstance, f),
    initChain: (f = msg.getInitChain()) && proto.cometbft.abci.v1beta1.ResponseInitChain.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && proto.cometbft.abci.v1beta1.ResponseQuery.toObject(includeInstance, f),
    beginBlock: (f = msg.getBeginBlock()) && proto.cometbft.abci.v1beta1.ResponseBeginBlock.toObject(includeInstance, f),
    checkTx: (f = msg.getCheckTx()) && proto.cometbft.abci.v1beta1.ResponseCheckTx.toObject(includeInstance, f),
    deliverTx: (f = msg.getDeliverTx()) && proto.cometbft.abci.v1beta1.ResponseDeliverTx.toObject(includeInstance, f),
    endBlock: (f = msg.getEndBlock()) && proto.cometbft.abci.v1beta1.ResponseEndBlock.toObject(includeInstance, f),
    commit: (f = msg.getCommit()) && proto.cometbft.abci.v1beta1.ResponseCommit.toObject(includeInstance, f),
    listSnapshots: (f = msg.getListSnapshots()) && proto.cometbft.abci.v1beta1.ResponseListSnapshots.toObject(includeInstance, f),
    offerSnapshot: (f = msg.getOfferSnapshot()) && proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.toObject(includeInstance, f),
    loadSnapshotChunk: (f = msg.getLoadSnapshotChunk()) && proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.toObject(includeInstance, f),
    applySnapshotChunk: (f = msg.getApplySnapshotChunk()) && proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.toObject(includeInstance, f)
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
 * @return {!proto.cometbft.abci.v1beta1.Response}
 */
proto.cometbft.abci.v1beta1.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.Response;
  return proto.cometbft.abci.v1beta1.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.Response}
 */
proto.cometbft.abci.v1beta1.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1beta1.ResponseException;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseException.deserializeBinaryFromReader);
      msg.setException(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1beta1.ResponseEcho;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseEcho.deserializeBinaryFromReader);
      msg.setEcho(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1beta1.ResponseFlush;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseFlush.deserializeBinaryFromReader);
      msg.setFlush(value);
      break;
    case 4:
      var value = new proto.cometbft.abci.v1beta1.ResponseInfo;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 5:
      var value = new proto.cometbft.abci.v1beta1.ResponseSetOption;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseSetOption.deserializeBinaryFromReader);
      msg.setSetOption(value);
      break;
    case 6:
      var value = new proto.cometbft.abci.v1beta1.ResponseInitChain;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseInitChain.deserializeBinaryFromReader);
      msg.setInitChain(value);
      break;
    case 7:
      var value = new proto.cometbft.abci.v1beta1.ResponseQuery;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 8:
      var value = new proto.cometbft.abci.v1beta1.ResponseBeginBlock;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseBeginBlock.deserializeBinaryFromReader);
      msg.setBeginBlock(value);
      break;
    case 9:
      var value = new proto.cometbft.abci.v1beta1.ResponseCheckTx;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseCheckTx.deserializeBinaryFromReader);
      msg.setCheckTx(value);
      break;
    case 10:
      var value = new proto.cometbft.abci.v1beta1.ResponseDeliverTx;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseDeliverTx.deserializeBinaryFromReader);
      msg.setDeliverTx(value);
      break;
    case 11:
      var value = new proto.cometbft.abci.v1beta1.ResponseEndBlock;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseEndBlock.deserializeBinaryFromReader);
      msg.setEndBlock(value);
      break;
    case 12:
      var value = new proto.cometbft.abci.v1beta1.ResponseCommit;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseCommit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 13:
      var value = new proto.cometbft.abci.v1beta1.ResponseListSnapshots;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseListSnapshots.deserializeBinaryFromReader);
      msg.setListSnapshots(value);
      break;
    case 14:
      var value = new proto.cometbft.abci.v1beta1.ResponseOfferSnapshot;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.deserializeBinaryFromReader);
      msg.setOfferSnapshot(value);
      break;
    case 15:
      var value = new proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.deserializeBinaryFromReader);
      msg.setLoadSnapshotChunk(value);
      break;
    case 16:
      var value = new proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.deserializeBinaryFromReader);
      msg.setApplySnapshotChunk(value);
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
proto.cometbft.abci.v1beta1.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getException();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1beta1.ResponseException.serializeBinaryToWriter
    );
  }
  f = message.getEcho();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cometbft.abci.v1beta1.ResponseEcho.serializeBinaryToWriter
    );
  }
  f = message.getFlush();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cometbft.abci.v1beta1.ResponseFlush.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cometbft.abci.v1beta1.ResponseInfo.serializeBinaryToWriter
    );
  }
  f = message.getSetOption();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cometbft.abci.v1beta1.ResponseSetOption.serializeBinaryToWriter
    );
  }
  f = message.getInitChain();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cometbft.abci.v1beta1.ResponseInitChain.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cometbft.abci.v1beta1.ResponseQuery.serializeBinaryToWriter
    );
  }
  f = message.getBeginBlock();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.cometbft.abci.v1beta1.ResponseBeginBlock.serializeBinaryToWriter
    );
  }
  f = message.getCheckTx();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cometbft.abci.v1beta1.ResponseCheckTx.serializeBinaryToWriter
    );
  }
  f = message.getDeliverTx();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.cometbft.abci.v1beta1.ResponseDeliverTx.serializeBinaryToWriter
    );
  }
  f = message.getEndBlock();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.cometbft.abci.v1beta1.ResponseEndBlock.serializeBinaryToWriter
    );
  }
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.cometbft.abci.v1beta1.ResponseCommit.serializeBinaryToWriter
    );
  }
  f = message.getListSnapshots();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.cometbft.abci.v1beta1.ResponseListSnapshots.serializeBinaryToWriter
    );
  }
  f = message.getOfferSnapshot();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getLoadSnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.serializeBinaryToWriter
    );
  }
  f = message.getApplySnapshotChunk();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseException exception = 1;
 * @return {?proto.cometbft.abci.v1beta1.ResponseException}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getException = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseException} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseException, 1));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseException|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setException = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearException = function() {
  return this.setException(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasException = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResponseEcho echo = 2;
 * @return {?proto.cometbft.abci.v1beta1.ResponseEcho}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getEcho = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseEcho} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseEcho, 2));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseEcho|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setEcho = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearEcho = function() {
  return this.setEcho(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasEcho = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResponseFlush flush = 3;
 * @return {?proto.cometbft.abci.v1beta1.ResponseFlush}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getFlush = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseFlush} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseFlush, 3));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseFlush|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setFlush = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearFlush = function() {
  return this.setFlush(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasFlush = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ResponseInfo info = 4;
 * @return {?proto.cometbft.abci.v1beta1.ResponseInfo}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getInfo = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseInfo} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseInfo, 4));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseInfo|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ResponseSetOption set_option = 5;
 * @return {?proto.cometbft.abci.v1beta1.ResponseSetOption}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getSetOption = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseSetOption} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseSetOption, 5));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseSetOption|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setSetOption = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearSetOption = function() {
  return this.setSetOption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasSetOption = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ResponseInitChain init_chain = 6;
 * @return {?proto.cometbft.abci.v1beta1.ResponseInitChain}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getInitChain = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseInitChain} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseInitChain, 6));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseInitChain|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setInitChain = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearInitChain = function() {
  return this.setInitChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasInitChain = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ResponseQuery query = 7;
 * @return {?proto.cometbft.abci.v1beta1.ResponseQuery}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getQuery = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseQuery} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseQuery, 7));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseQuery|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ResponseBeginBlock begin_block = 8;
 * @return {?proto.cometbft.abci.v1beta1.ResponseBeginBlock}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getBeginBlock = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseBeginBlock} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseBeginBlock, 8));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseBeginBlock|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setBeginBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearBeginBlock = function() {
  return this.setBeginBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasBeginBlock = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ResponseCheckTx check_tx = 9;
 * @return {?proto.cometbft.abci.v1beta1.ResponseCheckTx}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getCheckTx = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseCheckTx} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseCheckTx, 9));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseCheckTx|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setCheckTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearCheckTx = function() {
  return this.setCheckTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasCheckTx = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ResponseDeliverTx deliver_tx = 10;
 * @return {?proto.cometbft.abci.v1beta1.ResponseDeliverTx}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getDeliverTx = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseDeliverTx} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseDeliverTx, 10));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseDeliverTx|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setDeliverTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearDeliverTx = function() {
  return this.setDeliverTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasDeliverTx = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ResponseEndBlock end_block = 11;
 * @return {?proto.cometbft.abci.v1beta1.ResponseEndBlock}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getEndBlock = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseEndBlock} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseEndBlock, 11));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseEndBlock|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setEndBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearEndBlock = function() {
  return this.setEndBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasEndBlock = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ResponseCommit commit = 12;
 * @return {?proto.cometbft.abci.v1beta1.ResponseCommit}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getCommit = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseCommit} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseCommit, 12));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseCommit|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setCommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ResponseListSnapshots list_snapshots = 13;
 * @return {?proto.cometbft.abci.v1beta1.ResponseListSnapshots}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getListSnapshots = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseListSnapshots} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseListSnapshots, 13));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseListSnapshots|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setListSnapshots = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearListSnapshots = function() {
  return this.setListSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasListSnapshots = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ResponseOfferSnapshot offer_snapshot = 14;
 * @return {?proto.cometbft.abci.v1beta1.ResponseOfferSnapshot}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getOfferSnapshot = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseOfferSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseOfferSnapshot, 14));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseOfferSnapshot|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setOfferSnapshot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearOfferSnapshot = function() {
  return this.setOfferSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasOfferSnapshot = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ResponseLoadSnapshotChunk load_snapshot_chunk = 15;
 * @return {?proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getLoadSnapshotChunk = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk, 15));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setLoadSnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearLoadSnapshotChunk = function() {
  return this.setLoadSnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasLoadSnapshotChunk = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ResponseApplySnapshotChunk apply_snapshot_chunk = 16;
 * @return {?proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk}
 */
proto.cometbft.abci.v1beta1.Response.prototype.getApplySnapshotChunk = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk, 16));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
*/
proto.cometbft.abci.v1beta1.Response.prototype.setApplySnapshotChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.cometbft.abci.v1beta1.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Response} returns this
 */
proto.cometbft.abci.v1beta1.Response.prototype.clearApplySnapshotChunk = function() {
  return this.setApplySnapshotChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Response.prototype.hasApplySnapshotChunk = function() {
  return jspb.Message.getField(this, 16) != null;
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
proto.cometbft.abci.v1beta1.ResponseException.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseException.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseException} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseException.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseException}
 */
proto.cometbft.abci.v1beta1.ResponseException.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseException;
  return proto.cometbft.abci.v1beta1.ResponseException.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseException} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseException}
 */
proto.cometbft.abci.v1beta1.ResponseException.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.ResponseException.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseException.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseException} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseException.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.ResponseException.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseException} returns this
 */
proto.cometbft.abci.v1beta1.ResponseException.prototype.setError = function(value) {
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
proto.cometbft.abci.v1beta1.ResponseEcho.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseEcho.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseEcho} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseEcho.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseEcho}
 */
proto.cometbft.abci.v1beta1.ResponseEcho.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseEcho;
  return proto.cometbft.abci.v1beta1.ResponseEcho.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseEcho} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseEcho}
 */
proto.cometbft.abci.v1beta1.ResponseEcho.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.ResponseEcho.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseEcho.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseEcho} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseEcho.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.ResponseEcho.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseEcho} returns this
 */
proto.cometbft.abci.v1beta1.ResponseEcho.prototype.setMessage = function(value) {
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
proto.cometbft.abci.v1beta1.ResponseFlush.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseFlush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseFlush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseFlush.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseFlush}
 */
proto.cometbft.abci.v1beta1.ResponseFlush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseFlush;
  return proto.cometbft.abci.v1beta1.ResponseFlush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseFlush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseFlush}
 */
proto.cometbft.abci.v1beta1.ResponseFlush.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.ResponseFlush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseFlush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseFlush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseFlush.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseInfo}
 */
proto.cometbft.abci.v1beta1.ResponseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseInfo;
  return proto.cometbft.abci.v1beta1.ResponseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseInfo}
 */
proto.cometbft.abci.v1beta1.ResponseInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseInfo} returns this
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseInfo} returns this
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 app_version = 3;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.getAppVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseInfo} returns this
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.setAppVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 last_block_height = 4;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.getLastBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseInfo} returns this
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.setLastBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes last_block_app_hash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.getLastBlockAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes last_block_app_hash = 5;
 * This is a type-conversion wrapper around `getLastBlockAppHash()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.getLastBlockAppHash_asB64 = function() {
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
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.getLastBlockAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLastBlockAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseInfo} returns this
 */
proto.cometbft.abci.v1beta1.ResponseInfo.prototype.setLastBlockAppHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
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
proto.cometbft.abci.v1beta1.ResponseSetOption.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseSetOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseSetOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    log: jspb.Message.getFieldWithDefault(msg, 3, ""),
    info: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseSetOption}
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseSetOption;
  return proto.cometbft.abci.v1beta1.ResponseSetOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseSetOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseSetOption}
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.ResponseSetOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseSetOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseSetOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseSetOption} returns this
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseSetOption} returns this
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseSetOption} returns this
 */
proto.cometbft.abci.v1beta1.ResponseSetOption.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.repeatedFields_ = [2];



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
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseInitChain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseInitChain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.toObject = function(includeInstance, msg) {
  var f, obj = {
    consensusParams: (f = msg.getConsensusParams()) && proto.cometbft.abci.v1beta1.ConsensusParams.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.cometbft.abci.v1beta1.ValidatorUpdate.toObject, includeInstance),
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseInitChain}
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseInitChain;
  return proto.cometbft.abci.v1beta1.ResponseInitChain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseInitChain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseInitChain}
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1beta1.ConsensusParams;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ConsensusParams.deserializeBinaryFromReader);
      msg.setConsensusParams(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1beta1.ValidatorUpdate;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ValidatorUpdate.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseInitChain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseInitChain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsensusParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1beta1.ConsensusParams.serializeBinaryToWriter
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cometbft.abci.v1beta1.ValidatorUpdate.serializeBinaryToWriter
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
 * optional ConsensusParams consensus_params = 1;
 * @return {?proto.cometbft.abci.v1beta1.ConsensusParams}
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.getConsensusParams = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ConsensusParams} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ConsensusParams, 1));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ConsensusParams|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseInitChain} returns this
*/
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.setConsensusParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.ResponseInitChain} returns this
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.clearConsensusParams = function() {
  return this.setConsensusParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.hasConsensusParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ValidatorUpdate validators = 2;
 * @return {!Array<!proto.cometbft.abci.v1beta1.ValidatorUpdate>}
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.ValidatorUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.ValidatorUpdate, 2));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.ValidatorUpdate>} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseInitChain} returns this
*/
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.ValidatorUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.ValidatorUpdate}
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cometbft.abci.v1beta1.ValidatorUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.ResponseInitChain} returns this
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional bytes app_hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.getAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes app_hash = 3;
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.getAppHash_asB64 = function() {
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
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.getAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseInitChain} returns this
 */
proto.cometbft.abci.v1beta1.ResponseInitChain.prototype.setAppHash = function(value) {
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
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseQuery.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseQuery;
  return proto.cometbft.abci.v1beta1.ResponseQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseQuery.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 index = 5;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes key = 6;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes key = 6;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getKey_asB64 = function() {
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
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes value = 7;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes value = 7;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getValue_asB64 = function() {
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
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional cometbft.crypto.v1.ProofOps proof_ops = 8;
 * @return {?proto.cometbft.crypto.v1.ProofOps}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getProofOps = function() {
  return /** @type{?proto.cometbft.crypto.v1.ProofOps} */ (
    jspb.Message.getWrapperField(this, cometbft_crypto_v1_proof_pb.ProofOps, 8));
};


/**
 * @param {?proto.cometbft.crypto.v1.ProofOps|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
*/
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.setProofOps = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.clearProofOps = function() {
  return this.setProofOps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.hasProofOps = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 height = 9;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string codespace = 10;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.getCodespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseQuery} returns this
 */
proto.cometbft.abci.v1beta1.ResponseQuery.prototype.setCodespace = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.ResponseBeginBlock.repeatedFields_ = [1];



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
proto.cometbft.abci.v1beta1.ResponseBeginBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseBeginBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseBeginBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseBeginBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.cometbft.abci.v1beta1.Event.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseBeginBlock}
 */
proto.cometbft.abci.v1beta1.ResponseBeginBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseBeginBlock;
  return proto.cometbft.abci.v1beta1.ResponseBeginBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseBeginBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseBeginBlock}
 */
proto.cometbft.abci.v1beta1.ResponseBeginBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1beta1.Event;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.Event.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.cometbft.abci.v1beta1.ResponseBeginBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseBeginBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseBeginBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseBeginBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cometbft.abci.v1beta1.Event.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Event events = 1;
 * @return {!Array<!proto.cometbft.abci.v1beta1.Event>}
 */
proto.cometbft.abci.v1beta1.ResponseBeginBlock.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.Event, 1));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.Event>} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseBeginBlock} returns this
*/
proto.cometbft.abci.v1beta1.ResponseBeginBlock.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.Event}
 */
proto.cometbft.abci.v1beta1.ResponseBeginBlock.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cometbft.abci.v1beta1.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.ResponseBeginBlock} returns this
 */
proto.cometbft.abci.v1beta1.ResponseBeginBlock.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.repeatedFields_ = [7];



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
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseCheckTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseCheckTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    log: jspb.Message.getFieldWithDefault(msg, 3, ""),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    gasWanted: jspb.Message.getFieldWithDefault(msg, 5, 0),
    gasUsed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.cometbft.abci.v1beta1.Event.toObject, includeInstance),
    codespace: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sender: jspb.Message.getFieldWithDefault(msg, 9, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 10, 0),
    mempoolError: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseCheckTx;
  return proto.cometbft.abci.v1beta1.ResponseCheckTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseCheckTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cometbft.abci.v1beta1.Event;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.Event.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodespace(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriority(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMempoolError(value);
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
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseCheckTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseCheckTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.serializeBinaryToWriter = function(message, writer) {
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
      proto.cometbft.abci.v1beta1.Event.serializeBinaryToWriter
    );
  }
  f = message.getCodespace();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getMempoolError();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getData_asB64 = function() {
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
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 gas_wanted = 5;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getGasWanted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setGasWanted = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 gas_used = 6;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getGasUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setGasUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated Event events = 7;
 * @return {!Array<!proto.cometbft.abci.v1beta1.Event>}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.Event, 7));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.Event>} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
*/
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.Event}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.cometbft.abci.v1beta1.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * optional string codespace = 8;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getCodespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setCodespace = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string sender = 9;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 priority = 10;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string mempool_error = 11;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.getMempoolError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCheckTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCheckTx.prototype.setMempoolError = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.repeatedFields_ = [7];



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
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseDeliverTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    log: jspb.Message.getFieldWithDefault(msg, 3, ""),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    gasWanted: jspb.Message.getFieldWithDefault(msg, 5, 0),
    gasUsed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.cometbft.abci.v1beta1.Event.toObject, includeInstance),
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseDeliverTx;
  return proto.cometbft.abci.v1beta1.ResponseDeliverTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cometbft.abci.v1beta1.Event;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.Event.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseDeliverTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.serializeBinaryToWriter = function(message, writer) {
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
      proto.cometbft.abci.v1beta1.Event.serializeBinaryToWriter
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
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getData_asB64 = function() {
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
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string log = 3;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 gas_wanted = 5;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getGasWanted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.setGasWanted = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 gas_used = 6;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getGasUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.setGasUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated Event events = 7;
 * @return {!Array<!proto.cometbft.abci.v1beta1.Event>}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.Event, 7));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.Event>} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} returns this
*/
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.Event}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.cometbft.abci.v1beta1.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * optional string codespace = 8;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.getCodespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseDeliverTx} returns this
 */
proto.cometbft.abci.v1beta1.ResponseDeliverTx.prototype.setCodespace = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.repeatedFields_ = [1,3];



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
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseEndBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseEndBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorUpdatesList: jspb.Message.toObjectList(msg.getValidatorUpdatesList(),
    proto.cometbft.abci.v1beta1.ValidatorUpdate.toObject, includeInstance),
    consensusParamUpdates: (f = msg.getConsensusParamUpdates()) && proto.cometbft.abci.v1beta1.ConsensusParams.toObject(includeInstance, f),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.cometbft.abci.v1beta1.Event.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseEndBlock}
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseEndBlock;
  return proto.cometbft.abci.v1beta1.ResponseEndBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseEndBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseEndBlock}
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1beta1.ValidatorUpdate;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ValidatorUpdate.deserializeBinaryFromReader);
      msg.addValidatorUpdates(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1beta1.ConsensusParams;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ConsensusParams.deserializeBinaryFromReader);
      msg.setConsensusParamUpdates(value);
      break;
    case 3:
      var value = new proto.cometbft.abci.v1beta1.Event;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.Event.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseEndBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseEndBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cometbft.abci.v1beta1.ValidatorUpdate.serializeBinaryToWriter
    );
  }
  f = message.getConsensusParamUpdates();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cometbft.abci.v1beta1.ConsensusParams.serializeBinaryToWriter
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cometbft.abci.v1beta1.Event.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ValidatorUpdate validator_updates = 1;
 * @return {!Array<!proto.cometbft.abci.v1beta1.ValidatorUpdate>}
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.getValidatorUpdatesList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.ValidatorUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.ValidatorUpdate, 1));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.ValidatorUpdate>} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseEndBlock} returns this
*/
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.setValidatorUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.ValidatorUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.ValidatorUpdate}
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.addValidatorUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cometbft.abci.v1beta1.ValidatorUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.ResponseEndBlock} returns this
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.clearValidatorUpdatesList = function() {
  return this.setValidatorUpdatesList([]);
};


/**
 * optional ConsensusParams consensus_param_updates = 2;
 * @return {?proto.cometbft.abci.v1beta1.ConsensusParams}
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.getConsensusParamUpdates = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ConsensusParams} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ConsensusParams, 2));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ConsensusParams|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseEndBlock} returns this
*/
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.setConsensusParamUpdates = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.ResponseEndBlock} returns this
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.clearConsensusParamUpdates = function() {
  return this.setConsensusParamUpdates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.hasConsensusParamUpdates = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Event events = 3;
 * @return {!Array<!proto.cometbft.abci.v1beta1.Event>}
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.Event, 3));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.Event>} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseEndBlock} returns this
*/
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.Event}
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cometbft.abci.v1beta1.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.ResponseEndBlock} returns this
 */
proto.cometbft.abci.v1beta1.ResponseEndBlock.prototype.clearEventsList = function() {
  return this.setEventsList([]);
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
proto.cometbft.abci.v1beta1.ResponseCommit.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseCommit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseCommit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseCommit.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseCommit}
 */
proto.cometbft.abci.v1beta1.ResponseCommit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseCommit;
  return proto.cometbft.abci.v1beta1.ResponseCommit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseCommit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseCommit}
 */
proto.cometbft.abci.v1beta1.ResponseCommit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
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
proto.cometbft.abci.v1beta1.ResponseCommit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseCommit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseCommit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseCommit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getRetainHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.ResponseCommit.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseCommit.prototype.getData_asB64 = function() {
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
proto.cometbft.abci.v1beta1.ResponseCommit.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCommit} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCommit.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 retain_height = 3;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ResponseCommit.prototype.getRetainHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseCommit} returns this
 */
proto.cometbft.abci.v1beta1.ResponseCommit.prototype.setRetainHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.ResponseListSnapshots.repeatedFields_ = [1];



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
proto.cometbft.abci.v1beta1.ResponseListSnapshots.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseListSnapshots.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseListSnapshots} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseListSnapshots.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshotsList: jspb.Message.toObjectList(msg.getSnapshotsList(),
    proto.cometbft.abci.v1beta1.Snapshot.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseListSnapshots}
 */
proto.cometbft.abci.v1beta1.ResponseListSnapshots.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseListSnapshots;
  return proto.cometbft.abci.v1beta1.ResponseListSnapshots.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseListSnapshots} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseListSnapshots}
 */
proto.cometbft.abci.v1beta1.ResponseListSnapshots.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1beta1.Snapshot;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.Snapshot.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.ResponseListSnapshots.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseListSnapshots.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseListSnapshots} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseListSnapshots.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cometbft.abci.v1beta1.Snapshot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Snapshot snapshots = 1;
 * @return {!Array<!proto.cometbft.abci.v1beta1.Snapshot>}
 */
proto.cometbft.abci.v1beta1.ResponseListSnapshots.prototype.getSnapshotsList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.Snapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.Snapshot, 1));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.Snapshot>} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseListSnapshots} returns this
*/
proto.cometbft.abci.v1beta1.ResponseListSnapshots.prototype.setSnapshotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.Snapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.Snapshot}
 */
proto.cometbft.abci.v1beta1.ResponseListSnapshots.prototype.addSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cometbft.abci.v1beta1.Snapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.ResponseListSnapshots} returns this
 */
proto.cometbft.abci.v1beta1.ResponseListSnapshots.prototype.clearSnapshotsList = function() {
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
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot}
 */
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseOfferSnapshot;
  return proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot}
 */
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.Result} */ (reader.readEnum());
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
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.Result = {
  UNKNOWN: 0,
  ACCEPT: 1,
  ABORT: 2,
  REJECT: 3,
  REJECT_FORMAT: 4,
  REJECT_SENDER: 5
};

/**
 * optional Result result = 1;
 * @return {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.Result}
 */
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.prototype.getResult = function() {
  return /** @type {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.Result} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseOfferSnapshot} returns this
 */
proto.cometbft.abci.v1beta1.ResponseOfferSnapshot.prototype.setResult = function(value) {
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
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk}
 */
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk;
  return proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk}
 */
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.prototype.getChunk_asB64 = function() {
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
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.ResponseLoadSnapshotChunk.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.repeatedFields_ = [2,3];



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
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk}
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk;
  return proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk}
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.Result} */ (reader.readEnum());
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
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.Result = {
  UNKNOWN: 0,
  ACCEPT: 1,
  ABORT: 2,
  RETRY: 3,
  RETRY_SNAPSHOT: 4,
  REJECT_SNAPSHOT: 5
};

/**
 * optional Result result = 1;
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.Result}
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.getResult = function() {
  return /** @type {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.Result} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated uint32 refetch_chunks = 2;
 * @return {!Array<number>}
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.getRefetchChunksList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.setRefetchChunksList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.addRefetchChunks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.clearRefetchChunksList = function() {
  return this.setRefetchChunksList([]);
};


/**
 * repeated string reject_senders = 3;
 * @return {!Array<string>}
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.getRejectSendersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.setRejectSendersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.addRejectSenders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk} returns this
 */
proto.cometbft.abci.v1beta1.ResponseApplySnapshotChunk.prototype.clearRejectSendersList = function() {
  return this.setRejectSendersList([]);
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
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ConsensusParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ConsensusParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ConsensusParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && proto.cometbft.abci.v1beta1.BlockParams.toObject(includeInstance, f),
    evidence: (f = msg.getEvidence()) && cometbft_types_v1beta1_params_pb.EvidenceParams.toObject(includeInstance, f),
    validator: (f = msg.getValidator()) && cometbft_types_v1beta1_params_pb.ValidatorParams.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && cometbft_types_v1beta1_params_pb.VersionParams.toObject(includeInstance, f)
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
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ConsensusParams;
  return proto.cometbft.abci.v1beta1.ConsensusParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ConsensusParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1beta1.BlockParams;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.BlockParams.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 2:
      var value = new cometbft_types_v1beta1_params_pb.EvidenceParams;
      reader.readMessage(value,cometbft_types_v1beta1_params_pb.EvidenceParams.deserializeBinaryFromReader);
      msg.setEvidence(value);
      break;
    case 3:
      var value = new cometbft_types_v1beta1_params_pb.ValidatorParams;
      reader.readMessage(value,cometbft_types_v1beta1_params_pb.ValidatorParams.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 4:
      var value = new cometbft_types_v1beta1_params_pb.VersionParams;
      reader.readMessage(value,cometbft_types_v1beta1_params_pb.VersionParams.deserializeBinaryFromReader);
      msg.setVersion(value);
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
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ConsensusParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ConsensusParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ConsensusParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1beta1.BlockParams.serializeBinaryToWriter
    );
  }
  f = message.getEvidence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cometbft_types_v1beta1_params_pb.EvidenceParams.serializeBinaryToWriter
    );
  }
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cometbft_types_v1beta1_params_pb.ValidatorParams.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      cometbft_types_v1beta1_params_pb.VersionParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockParams block = 1;
 * @return {?proto.cometbft.abci.v1beta1.BlockParams}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.getBlock = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.BlockParams} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.BlockParams, 1));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.BlockParams|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams} returns this
*/
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams} returns this
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cometbft.types.v1beta1.EvidenceParams evidence = 2;
 * @return {?proto.cometbft.types.v1beta1.EvidenceParams}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.getEvidence = function() {
  return /** @type{?proto.cometbft.types.v1beta1.EvidenceParams} */ (
    jspb.Message.getWrapperField(this, cometbft_types_v1beta1_params_pb.EvidenceParams, 2));
};


/**
 * @param {?proto.cometbft.types.v1beta1.EvidenceParams|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams} returns this
*/
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.setEvidence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams} returns this
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.clearEvidence = function() {
  return this.setEvidence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.hasEvidence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cometbft.types.v1beta1.ValidatorParams validator = 3;
 * @return {?proto.cometbft.types.v1beta1.ValidatorParams}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.getValidator = function() {
  return /** @type{?proto.cometbft.types.v1beta1.ValidatorParams} */ (
    jspb.Message.getWrapperField(this, cometbft_types_v1beta1_params_pb.ValidatorParams, 3));
};


/**
 * @param {?proto.cometbft.types.v1beta1.ValidatorParams|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams} returns this
*/
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams} returns this
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional cometbft.types.v1beta1.VersionParams version = 4;
 * @return {?proto.cometbft.types.v1beta1.VersionParams}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.getVersion = function() {
  return /** @type{?proto.cometbft.types.v1beta1.VersionParams} */ (
    jspb.Message.getWrapperField(this, cometbft_types_v1beta1_params_pb.VersionParams, 4));
};


/**
 * @param {?proto.cometbft.types.v1beta1.VersionParams|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams} returns this
*/
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.ConsensusParams} returns this
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.ConsensusParams.prototype.hasVersion = function() {
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
proto.cometbft.abci.v1beta1.BlockParams.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.BlockParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.BlockParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.BlockParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxBytes: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxGas: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.cometbft.abci.v1beta1.BlockParams}
 */
proto.cometbft.abci.v1beta1.BlockParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.BlockParams;
  return proto.cometbft.abci.v1beta1.BlockParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.BlockParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.BlockParams}
 */
proto.cometbft.abci.v1beta1.BlockParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxBytes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxGas(value);
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
proto.cometbft.abci.v1beta1.BlockParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.BlockParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.BlockParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.BlockParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxBytes();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMaxGas();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 max_bytes = 1;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.BlockParams.prototype.getMaxBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.BlockParams} returns this
 */
proto.cometbft.abci.v1beta1.BlockParams.prototype.setMaxBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 max_gas = 2;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.BlockParams.prototype.getMaxGas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.BlockParams} returns this
 */
proto.cometbft.abci.v1beta1.BlockParams.prototype.setMaxGas = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.repeatedFields_ = [2];



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
proto.cometbft.abci.v1beta1.LastCommitInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.LastCommitInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.LastCommitInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    round: jspb.Message.getFieldWithDefault(msg, 1, 0),
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    proto.cometbft.abci.v1beta1.VoteInfo.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1beta1.LastCommitInfo}
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.LastCommitInfo;
  return proto.cometbft.abci.v1beta1.LastCommitInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.LastCommitInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.LastCommitInfo}
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cometbft.abci.v1beta1.VoteInfo;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.VoteInfo.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.LastCommitInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.LastCommitInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.LastCommitInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.serializeBinaryToWriter = function(message, writer) {
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
      proto.cometbft.abci.v1beta1.VoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 round = 1;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.LastCommitInfo} returns this
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated VoteInfo votes = 2;
 * @return {!Array<!proto.cometbft.abci.v1beta1.VoteInfo>}
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.prototype.getVotesList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.VoteInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.VoteInfo, 2));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.VoteInfo>} value
 * @return {!proto.cometbft.abci.v1beta1.LastCommitInfo} returns this
*/
proto.cometbft.abci.v1beta1.LastCommitInfo.prototype.setVotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.VoteInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.VoteInfo}
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cometbft.abci.v1beta1.VoteInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.LastCommitInfo} returns this
 */
proto.cometbft.abci.v1beta1.LastCommitInfo.prototype.clearVotesList = function() {
  return this.setVotesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cometbft.abci.v1beta1.Event.repeatedFields_ = [2];



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
proto.cometbft.abci.v1beta1.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto.cometbft.abci.v1beta1.EventAttribute.toObject, includeInstance)
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
 * @return {!proto.cometbft.abci.v1beta1.Event}
 */
proto.cometbft.abci.v1beta1.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.Event;
  return proto.cometbft.abci.v1beta1.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.Event}
 */
proto.cometbft.abci.v1beta1.Event.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cometbft.abci.v1beta1.EventAttribute;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.EventAttribute.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Event.serializeBinaryToWriter = function(message, writer) {
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
      proto.cometbft.abci.v1beta1.EventAttribute.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.cometbft.abci.v1beta1.Event.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cometbft.abci.v1beta1.Event} returns this
 */
proto.cometbft.abci.v1beta1.Event.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated EventAttribute attributes = 2;
 * @return {!Array<!proto.cometbft.abci.v1beta1.EventAttribute>}
 */
proto.cometbft.abci.v1beta1.Event.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.cometbft.abci.v1beta1.EventAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cometbft.abci.v1beta1.EventAttribute, 2));
};


/**
 * @param {!Array<!proto.cometbft.abci.v1beta1.EventAttribute>} value
 * @return {!proto.cometbft.abci.v1beta1.Event} returns this
*/
proto.cometbft.abci.v1beta1.Event.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cometbft.abci.v1beta1.EventAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cometbft.abci.v1beta1.EventAttribute}
 */
proto.cometbft.abci.v1beta1.Event.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cometbft.abci.v1beta1.EventAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cometbft.abci.v1beta1.Event} returns this
 */
proto.cometbft.abci.v1beta1.Event.prototype.clearAttributesList = function() {
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
proto.cometbft.abci.v1beta1.EventAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.EventAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.EventAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.EventAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64(),
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
 * @return {!proto.cometbft.abci.v1beta1.EventAttribute}
 */
proto.cometbft.abci.v1beta1.EventAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.EventAttribute;
  return proto.cometbft.abci.v1beta1.EventAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.EventAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.EventAttribute}
 */
proto.cometbft.abci.v1beta1.EventAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.cometbft.abci.v1beta1.EventAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.EventAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.EventAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.EventAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
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
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.EventAttribute} returns this
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.EventAttribute} returns this
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool index = 3;
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.getIndex = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cometbft.abci.v1beta1.EventAttribute} returns this
 */
proto.cometbft.abci.v1beta1.EventAttribute.prototype.setIndex = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.cometbft.abci.v1beta1.TxResult.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.TxResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.TxResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.TxResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tx: msg.getTx_asB64(),
    result: (f = msg.getResult()) && proto.cometbft.abci.v1beta1.ResponseDeliverTx.toObject(includeInstance, f)
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
 * @return {!proto.cometbft.abci.v1beta1.TxResult}
 */
proto.cometbft.abci.v1beta1.TxResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.TxResult;
  return proto.cometbft.abci.v1beta1.TxResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.TxResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.TxResult}
 */
proto.cometbft.abci.v1beta1.TxResult.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cometbft.abci.v1beta1.ResponseDeliverTx;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.ResponseDeliverTx.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.TxResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.TxResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.TxResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.TxResult.serializeBinaryToWriter = function(message, writer) {
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
      proto.cometbft.abci.v1beta1.ResponseDeliverTx.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 height = 1;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.TxResult} returns this
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.TxResult} returns this
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes tx = 3;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.getTx = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes tx = 3;
 * This is a type-conversion wrapper around `getTx()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.getTx_asB64 = function() {
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
proto.cometbft.abci.v1beta1.TxResult.prototype.getTx_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTx()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.TxResult} returns this
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.setTx = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional ResponseDeliverTx result = 4;
 * @return {?proto.cometbft.abci.v1beta1.ResponseDeliverTx}
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.getResult = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.ResponseDeliverTx} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.ResponseDeliverTx, 4));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.ResponseDeliverTx|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.TxResult} returns this
*/
proto.cometbft.abci.v1beta1.TxResult.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.TxResult} returns this
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.TxResult.prototype.hasResult = function() {
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
proto.cometbft.abci.v1beta1.Validator.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.Validator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.Validator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Validator.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.Validator}
 */
proto.cometbft.abci.v1beta1.Validator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.Validator;
  return proto.cometbft.abci.v1beta1.Validator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.Validator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.Validator}
 */
proto.cometbft.abci.v1beta1.Validator.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.Validator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.Validator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.Validator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Validator.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.Validator.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.Validator.prototype.getAddress_asB64 = function() {
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
proto.cometbft.abci.v1beta1.Validator.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.Validator} returns this
 */
proto.cometbft.abci.v1beta1.Validator.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 power = 3;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.Validator.prototype.getPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.Validator} returns this
 */
proto.cometbft.abci.v1beta1.Validator.prototype.setPower = function(value) {
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
proto.cometbft.abci.v1beta1.ValidatorUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.ValidatorUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.ValidatorUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ValidatorUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: (f = msg.getPubKey()) && cometbft_crypto_v1_keys_pb.PublicKey.toObject(includeInstance, f),
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
 * @return {!proto.cometbft.abci.v1beta1.ValidatorUpdate}
 */
proto.cometbft.abci.v1beta1.ValidatorUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.ValidatorUpdate;
  return proto.cometbft.abci.v1beta1.ValidatorUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.ValidatorUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.ValidatorUpdate}
 */
proto.cometbft.abci.v1beta1.ValidatorUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cometbft_crypto_v1_keys_pb.PublicKey;
      reader.readMessage(value,cometbft_crypto_v1_keys_pb.PublicKey.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.ValidatorUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.ValidatorUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.ValidatorUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.ValidatorUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPubKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cometbft_crypto_v1_keys_pb.PublicKey.serializeBinaryToWriter
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
 * optional cometbft.crypto.v1.PublicKey pub_key = 1;
 * @return {?proto.cometbft.crypto.v1.PublicKey}
 */
proto.cometbft.abci.v1beta1.ValidatorUpdate.prototype.getPubKey = function() {
  return /** @type{?proto.cometbft.crypto.v1.PublicKey} */ (
    jspb.Message.getWrapperField(this, cometbft_crypto_v1_keys_pb.PublicKey, 1));
};


/**
 * @param {?proto.cometbft.crypto.v1.PublicKey|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.ValidatorUpdate} returns this
*/
proto.cometbft.abci.v1beta1.ValidatorUpdate.prototype.setPubKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.ValidatorUpdate} returns this
 */
proto.cometbft.abci.v1beta1.ValidatorUpdate.prototype.clearPubKey = function() {
  return this.setPubKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.ValidatorUpdate.prototype.hasPubKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 power = 2;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.ValidatorUpdate.prototype.getPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.ValidatorUpdate} returns this
 */
proto.cometbft.abci.v1beta1.ValidatorUpdate.prototype.setPower = function(value) {
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
proto.cometbft.abci.v1beta1.VoteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.VoteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.VoteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.VoteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto.cometbft.abci.v1beta1.Validator.toObject(includeInstance, f),
    signedLastBlock: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.cometbft.abci.v1beta1.VoteInfo}
 */
proto.cometbft.abci.v1beta1.VoteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.VoteInfo;
  return proto.cometbft.abci.v1beta1.VoteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.VoteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.VoteInfo}
 */
proto.cometbft.abci.v1beta1.VoteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cometbft.abci.v1beta1.Validator;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.Validator.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSignedLastBlock(value);
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
proto.cometbft.abci.v1beta1.VoteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.VoteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.VoteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.VoteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cometbft.abci.v1beta1.Validator.serializeBinaryToWriter
    );
  }
  f = message.getSignedLastBlock();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Validator validator = 1;
 * @return {?proto.cometbft.abci.v1beta1.Validator}
 */
proto.cometbft.abci.v1beta1.VoteInfo.prototype.getValidator = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.Validator} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.Validator, 1));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.Validator|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.VoteInfo} returns this
*/
proto.cometbft.abci.v1beta1.VoteInfo.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.VoteInfo} returns this
 */
proto.cometbft.abci.v1beta1.VoteInfo.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.VoteInfo.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool signed_last_block = 2;
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.VoteInfo.prototype.getSignedLastBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cometbft.abci.v1beta1.VoteInfo} returns this
 */
proto.cometbft.abci.v1beta1.VoteInfo.prototype.setSignedLastBlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.cometbft.abci.v1beta1.Evidence.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.Evidence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.Evidence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Evidence.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    validator: (f = msg.getValidator()) && proto.cometbft.abci.v1beta1.Validator.toObject(includeInstance, f),
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
 * @return {!proto.cometbft.abci.v1beta1.Evidence}
 */
proto.cometbft.abci.v1beta1.Evidence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.Evidence;
  return proto.cometbft.abci.v1beta1.Evidence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.Evidence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.Evidence}
 */
proto.cometbft.abci.v1beta1.Evidence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cometbft.abci.v1beta1.EvidenceType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.cometbft.abci.v1beta1.Validator;
      reader.readMessage(value,proto.cometbft.abci.v1beta1.Validator.deserializeBinaryFromReader);
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
proto.cometbft.abci.v1beta1.Evidence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.Evidence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.Evidence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Evidence.serializeBinaryToWriter = function(message, writer) {
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
      proto.cometbft.abci.v1beta1.Validator.serializeBinaryToWriter
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
 * optional EvidenceType type = 1;
 * @return {!proto.cometbft.abci.v1beta1.EvidenceType}
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.getType = function() {
  return /** @type {!proto.cometbft.abci.v1beta1.EvidenceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cometbft.abci.v1beta1.EvidenceType} value
 * @return {!proto.cometbft.abci.v1beta1.Evidence} returns this
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Validator validator = 2;
 * @return {?proto.cometbft.abci.v1beta1.Validator}
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.getValidator = function() {
  return /** @type{?proto.cometbft.abci.v1beta1.Validator} */ (
    jspb.Message.getWrapperField(this, proto.cometbft.abci.v1beta1.Validator, 2));
};


/**
 * @param {?proto.cometbft.abci.v1beta1.Validator|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Evidence} returns this
*/
proto.cometbft.abci.v1beta1.Evidence.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Evidence} returns this
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.Evidence} returns this
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cometbft.abci.v1beta1.Evidence} returns this
*/
proto.cometbft.abci.v1beta1.Evidence.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cometbft.abci.v1beta1.Evidence} returns this
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 total_voting_power = 5;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.getTotalVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.Evidence} returns this
 */
proto.cometbft.abci.v1beta1.Evidence.prototype.setTotalVotingPower = function(value) {
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
proto.cometbft.abci.v1beta1.Snapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.cometbft.abci.v1beta1.Snapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cometbft.abci.v1beta1.Snapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Snapshot.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cometbft.abci.v1beta1.Snapshot}
 */
proto.cometbft.abci.v1beta1.Snapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cometbft.abci.v1beta1.Snapshot;
  return proto.cometbft.abci.v1beta1.Snapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cometbft.abci.v1beta1.Snapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cometbft.abci.v1beta1.Snapshot}
 */
proto.cometbft.abci.v1beta1.Snapshot.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cometbft.abci.v1beta1.Snapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cometbft.abci.v1beta1.Snapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cometbft.abci.v1beta1.Snapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cometbft.abci.v1beta1.Snapshot.serializeBinaryToWriter = function(message, writer) {
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
proto.cometbft.abci.v1beta1.Snapshot.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.Snapshot} returns this
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 format = 2;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.getFormat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.Snapshot} returns this
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.setFormat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 chunks = 3;
 * @return {number}
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.getChunks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cometbft.abci.v1beta1.Snapshot} returns this
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.setChunks = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes hash = 4;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.getHash_asB64 = function() {
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
proto.cometbft.abci.v1beta1.Snapshot.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.Snapshot} returns this
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes metadata = 5;
 * @return {!(string|Uint8Array)}
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.getMetadata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes metadata = 5;
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {string}
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.getMetadata_asB64 = function() {
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
proto.cometbft.abci.v1beta1.Snapshot.prototype.getMetadata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cometbft.abci.v1beta1.Snapshot} returns this
 */
proto.cometbft.abci.v1beta1.Snapshot.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.cometbft.abci.v1beta1.CheckTxType = {
  NEW: 0,
  RECHECK: 1
};

/**
 * @enum {number}
 */
proto.cometbft.abci.v1beta1.EvidenceType = {
  UNKNOWN: 0,
  DUPLICATE_VOTE: 1,
  LIGHT_CLIENT_ATTACK: 2
};

goog.object.extend(exports, proto.cometbft.abci.v1beta1);
