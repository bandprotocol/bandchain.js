// package: ibc.lightclients.wasm.v1
// file: ibc/lightclients/wasm/v1/tx.proto

var ibc_lightclients_wasm_v1_tx_pb = require("../../../../ibc/lightclients/wasm/v1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "ibc.lightclients.wasm.v1.Msg";
  return Msg;
}());

Msg.StoreCode = {
  methodName: "StoreCode",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_lightclients_wasm_v1_tx_pb.MsgStoreCode,
  responseType: ibc_lightclients_wasm_v1_tx_pb.MsgStoreCodeResponse
};

Msg.RemoveChecksum = {
  methodName: "RemoveChecksum",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_lightclients_wasm_v1_tx_pb.MsgRemoveChecksum,
  responseType: ibc_lightclients_wasm_v1_tx_pb.MsgRemoveChecksumResponse
};

Msg.MigrateContract = {
  methodName: "MigrateContract",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_lightclients_wasm_v1_tx_pb.MsgMigrateContract,
  responseType: ibc_lightclients_wasm_v1_tx_pb.MsgMigrateContractResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.storeCode = function storeCode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.StoreCode, {
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

MsgClient.prototype.removeChecksum = function removeChecksum(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RemoveChecksum, {
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

MsgClient.prototype.migrateContract = function migrateContract(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.MigrateContract, {
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

