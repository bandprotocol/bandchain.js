// package: cosmos.vesting.v1beta1
// file: cosmos/vesting/v1beta1/tx.proto

var cosmos_vesting_v1beta1_tx_pb = require("../../../cosmos/vesting/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.vesting.v1beta1.Msg";
  return Msg;
}());

Msg.CreateVestingAccount = {
  methodName: "CreateVestingAccount",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount,
  responseType: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.createVestingAccount = function createVestingAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateVestingAccount, {
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

