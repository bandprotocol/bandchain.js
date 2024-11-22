// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/tx.proto

var cosmos_gov_v1beta1_tx_pb = require("../../../cosmos/gov/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.gov.v1beta1.Msg";
  return Msg;
}());

Msg.SubmitProposal = {
  methodName: "SubmitProposal",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal,
  responseType: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse
};

Msg.Vote = {
  methodName: "Vote",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_tx_pb.MsgVote,
  responseType: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse
};

Msg.VoteWeighted = {
  methodName: "VoteWeighted",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_tx_pb.MsgVoteWeighted,
  responseType: cosmos_gov_v1beta1_tx_pb.MsgVoteWeightedResponse
};

Msg.Deposit = {
  methodName: "Deposit",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_tx_pb.MsgDeposit,
  responseType: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse
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

MsgClient.prototype.voteWeighted = function voteWeighted(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.VoteWeighted, {
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

MsgClient.prototype.deposit = function deposit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Deposit, {
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

