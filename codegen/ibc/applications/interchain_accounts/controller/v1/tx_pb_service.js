// package: ibc.applications.interchain_accounts.controller.v1
// file: ibc/applications/interchain_accounts/controller/v1/tx.proto

var ibc_applications_interchain_accounts_controller_v1_tx_pb = require("../../../../../ibc/applications/interchain_accounts/controller/v1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "ibc.applications.interchain_accounts.controller.v1.Msg";
  return Msg;
}());

Msg.RegisterInterchainAccount = {
  methodName: "RegisterInterchainAccount",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgRegisterInterchainAccount,
  responseType: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgRegisterInterchainAccountResponse
};

Msg.SendTx = {
  methodName: "SendTx",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgSendTx,
  responseType: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgSendTxResponse
};

Msg.UpdateParams = {
  methodName: "UpdateParams",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgUpdateParams,
  responseType: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgUpdateParamsResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.registerInterchainAccount = function registerInterchainAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RegisterInterchainAccount, {
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

MsgClient.prototype.sendTx = function sendTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SendTx, {
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

MsgClient.prototype.updateParams = function updateParams(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateParams, {
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

