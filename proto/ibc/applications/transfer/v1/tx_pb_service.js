// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/tx.proto

var ibc_applications_transfer_v1_tx_pb = require("../../../../ibc/applications/transfer/v1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "ibc.applications.transfer.v1.Msg";
  return Msg;
}());

Msg.Transfer = {
  methodName: "Transfer",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
  responseType: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.transfer = function transfer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Transfer, {
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

