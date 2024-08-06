// package: feeds.v1beta1
// file: feeds/v1beta1/tx.proto

var feeds_v1beta1_tx_pb = require("../../feeds/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "feeds.v1beta1.Msg";
  return Msg;
}());

Msg.SubmitSignals = {
  methodName: "SubmitSignals",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_tx_pb.MsgSubmitSignals,
  responseType: feeds_v1beta1_tx_pb.MsgSubmitSignalsResponse
};

Msg.SubmitSignalPrices = {
  methodName: "SubmitSignalPrices",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_tx_pb.MsgSubmitSignalPrices,
  responseType: feeds_v1beta1_tx_pb.MsgSubmitSignalPricesResponse
};

Msg.UpdateReferenceSourceConfig = {
  methodName: "UpdateReferenceSourceConfig",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_tx_pb.MsgUpdateReferenceSourceConfig,
  responseType: feeds_v1beta1_tx_pb.MsgUpdateReferenceSourceConfigResponse
};

Msg.UpdateParams = {
  methodName: "UpdateParams",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_tx_pb.MsgUpdateParams,
  responseType: feeds_v1beta1_tx_pb.MsgUpdateParamsResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.submitSignals = function submitSignals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitSignals, {
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

MsgClient.prototype.submitSignalPrices = function submitSignalPrices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitSignalPrices, {
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

MsgClient.prototype.updateReferenceSourceConfig = function updateReferenceSourceConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateReferenceSourceConfig, {
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

