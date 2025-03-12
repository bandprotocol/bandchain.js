// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/tx.proto

var cosmos_feegrant_v1beta1_tx_pb = require("../../../cosmos/feegrant/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.feegrant.v1beta1.Msg";
  return Msg;
}());

Msg.GrantAllowance = {
  methodName: "GrantAllowance",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
  responseType: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse
};

Msg.RevokeAllowance = {
  methodName: "RevokeAllowance",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
  responseType: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.grantAllowance = function grantAllowance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.GrantAllowance, {
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

MsgClient.prototype.revokeAllowance = function revokeAllowance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RevokeAllowance, {
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

