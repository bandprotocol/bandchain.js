// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/tx.proto

var cosmos_nft_v1beta1_tx_pb = require("../../../cosmos/nft/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.nft.v1beta1.Msg";
  return Msg;
}());

Msg.Send = {
  methodName: "Send",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_nft_v1beta1_tx_pb.MsgSend,
  responseType: cosmos_nft_v1beta1_tx_pb.MsgSendResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.send = function send(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Send, {
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

