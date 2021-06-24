// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/tx.proto

var cosmos_distribution_v1beta1_tx_pb = require("../../../cosmos/distribution/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.distribution.v1beta1.Msg";
  return Msg;
}());

Msg.SetWithdrawAddress = {
  methodName: "SetWithdrawAddress",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
  responseType: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse
};

Msg.WithdrawDelegatorReward = {
  methodName: "WithdrawDelegatorReward",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
  responseType: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse
};

Msg.WithdrawValidatorCommission = {
  methodName: "WithdrawValidatorCommission",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
  responseType: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse
};

Msg.FundCommunityPool = {
  methodName: "FundCommunityPool",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
  responseType: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.setWithdrawAddress = function setWithdrawAddress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SetWithdrawAddress, {
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

MsgClient.prototype.withdrawDelegatorReward = function withdrawDelegatorReward(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.WithdrawDelegatorReward, {
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

MsgClient.prototype.withdrawValidatorCommission = function withdrawValidatorCommission(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.WithdrawValidatorCommission, {
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

MsgClient.prototype.fundCommunityPool = function fundCommunityPool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.FundCommunityPool, {
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

