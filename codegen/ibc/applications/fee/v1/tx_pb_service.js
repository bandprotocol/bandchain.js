// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/tx.proto

var ibc_applications_fee_v1_tx_pb = require("../../../../ibc/applications/fee/v1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "ibc.applications.fee.v1.Msg";
  return Msg;
}());

Msg.RegisterPayee = {
  methodName: "RegisterPayee",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_tx_pb.MsgRegisterPayee,
  responseType: ibc_applications_fee_v1_tx_pb.MsgRegisterPayeeResponse
};

Msg.RegisterCounterpartyPayee = {
  methodName: "RegisterCounterpartyPayee",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyPayee,
  responseType: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyPayeeResponse
};

Msg.PayPacketFee = {
  methodName: "PayPacketFee",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_tx_pb.MsgPayPacketFee,
  responseType: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse
};

Msg.PayPacketFeeAsync = {
  methodName: "PayPacketFeeAsync",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsync,
  responseType: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.registerPayee = function registerPayee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RegisterPayee, {
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

MsgClient.prototype.registerCounterpartyPayee = function registerCounterpartyPayee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RegisterCounterpartyPayee, {
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

MsgClient.prototype.payPacketFee = function payPacketFee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.PayPacketFee, {
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

MsgClient.prototype.payPacketFeeAsync = function payPacketFeeAsync(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.PayPacketFeeAsync, {
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

