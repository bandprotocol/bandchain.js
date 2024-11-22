// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/tx.proto

var cosmos_authz_v1beta1_tx_pb = require("../../../cosmos/authz/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.authz.v1beta1.Msg";
  return Msg;
}());

Msg.Grant = {
  methodName: "Grant",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_authz_v1beta1_tx_pb.MsgGrant,
  responseType: cosmos_authz_v1beta1_tx_pb.MsgGrantResponse
};

Msg.Exec = {
  methodName: "Exec",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_authz_v1beta1_tx_pb.MsgExec,
  responseType: cosmos_authz_v1beta1_tx_pb.MsgExecResponse
};

Msg.Revoke = {
  methodName: "Revoke",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
  responseType: cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.grant = function grant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Grant, {
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

MsgClient.prototype.exec = function exec(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Exec, {
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

MsgClient.prototype.revoke = function revoke(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Revoke, {
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

