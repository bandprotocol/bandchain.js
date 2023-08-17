// package: cosmos.upgrade.v1beta1
// file: cosmos/upgrade/v1beta1/tx.proto

var cosmos_upgrade_v1beta1_tx_pb = require("../../../cosmos/upgrade/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.upgrade.v1beta1.Msg";
  return Msg;
}());

Msg.SoftwareUpgrade = {
  methodName: "SoftwareUpgrade",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgrade,
  responseType: cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgradeResponse
};

Msg.CancelUpgrade = {
  methodName: "CancelUpgrade",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgrade,
  responseType: cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgradeResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.softwareUpgrade = function softwareUpgrade(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SoftwareUpgrade, {
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

MsgClient.prototype.cancelUpgrade = function cancelUpgrade(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CancelUpgrade, {
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

