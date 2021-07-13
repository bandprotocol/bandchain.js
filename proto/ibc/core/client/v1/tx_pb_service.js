// package: ibc.core.client.v1
// file: ibc/core/client/v1/tx.proto

var ibc_core_client_v1_tx_pb = require("../../../../ibc/core/client/v1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "ibc.core.client.v1.Msg";
  return Msg;
}());

Msg.CreateClient = {
  methodName: "CreateClient",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_tx_pb.MsgCreateClient,
  responseType: ibc_core_client_v1_tx_pb.MsgCreateClientResponse
};

Msg.UpdateClient = {
  methodName: "UpdateClient",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_tx_pb.MsgUpdateClient,
  responseType: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse
};

Msg.UpgradeClient = {
  methodName: "UpgradeClient",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
  responseType: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse
};

Msg.SubmitMisbehaviour = {
  methodName: "SubmitMisbehaviour",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
  responseType: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.createClient = function createClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateClient, {
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

MsgClient.prototype.updateClient = function updateClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateClient, {
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

MsgClient.prototype.upgradeClient = function upgradeClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpgradeClient, {
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

MsgClient.prototype.submitMisbehaviour = function submitMisbehaviour(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitMisbehaviour, {
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

