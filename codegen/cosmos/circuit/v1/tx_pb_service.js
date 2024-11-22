// package: cosmos.circuit.v1
// file: cosmos/circuit/v1/tx.proto

var cosmos_circuit_v1_tx_pb = require("../../../cosmos/circuit/v1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.circuit.v1.Msg";
  return Msg;
}());

Msg.AuthorizeCircuitBreaker = {
  methodName: "AuthorizeCircuitBreaker",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_circuit_v1_tx_pb.MsgAuthorizeCircuitBreaker,
  responseType: cosmos_circuit_v1_tx_pb.MsgAuthorizeCircuitBreakerResponse
};

Msg.TripCircuitBreaker = {
  methodName: "TripCircuitBreaker",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_circuit_v1_tx_pb.MsgTripCircuitBreaker,
  responseType: cosmos_circuit_v1_tx_pb.MsgTripCircuitBreakerResponse
};

Msg.ResetCircuitBreaker = {
  methodName: "ResetCircuitBreaker",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_circuit_v1_tx_pb.MsgResetCircuitBreaker,
  responseType: cosmos_circuit_v1_tx_pb.MsgResetCircuitBreakerResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.authorizeCircuitBreaker = function authorizeCircuitBreaker(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.AuthorizeCircuitBreaker, {
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

MsgClient.prototype.tripCircuitBreaker = function tripCircuitBreaker(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.TripCircuitBreaker, {
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

MsgClient.prototype.resetCircuitBreaker = function resetCircuitBreaker(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ResetCircuitBreaker, {
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

