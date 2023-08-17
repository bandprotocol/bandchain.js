// package: council.v1beta1
// file: council/v1beta1/tx.proto

var council_v1beta1_tx_pb = require("../../council/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "council.v1beta1.Msg";
  return Msg;
}());

Msg.SubmitProposal = {
  methodName: "SubmitProposal",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: council_v1beta1_tx_pb.MsgSubmitProposal,
  responseType: council_v1beta1_tx_pb.MsgSubmitProposalResponse
};

Msg.ExecLegacyContent = {
  methodName: "ExecLegacyContent",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: council_v1beta1_tx_pb.MsgExecLegacyContent,
  responseType: council_v1beta1_tx_pb.MsgExecLegacyContentResponse
};

Msg.Vote = {
  methodName: "Vote",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: council_v1beta1_tx_pb.MsgVote,
  responseType: council_v1beta1_tx_pb.MsgVoteResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.submitProposal = function submitProposal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitProposal, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MsgClient.prototype.execLegacyContent = function execLegacyContent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ExecLegacyContent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MsgClient.prototype.vote = function vote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Vote, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MsgClient = MsgClient;

