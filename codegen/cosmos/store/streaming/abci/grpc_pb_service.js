// package: cosmos.store.streaming.abci
// file: cosmos/store/streaming/abci/grpc.proto

var cosmos_store_streaming_abci_grpc_pb = require("../../../../cosmos/store/streaming/abci/grpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ABCIListenerService = (function () {
  function ABCIListenerService() {}
  ABCIListenerService.serviceName = "cosmos.store.streaming.abci.ABCIListenerService";
  return ABCIListenerService;
}());

ABCIListenerService.ListenFinalizeBlock = {
  methodName: "ListenFinalizeBlock",
  service: ABCIListenerService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_store_streaming_abci_grpc_pb.ListenFinalizeBlockRequest,
  responseType: cosmos_store_streaming_abci_grpc_pb.ListenFinalizeBlockResponse
};

ABCIListenerService.ListenCommit = {
  methodName: "ListenCommit",
  service: ABCIListenerService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_store_streaming_abci_grpc_pb.ListenCommitRequest,
  responseType: cosmos_store_streaming_abci_grpc_pb.ListenCommitResponse
};

exports.ABCIListenerService = ABCIListenerService;

function ABCIListenerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ABCIListenerServiceClient.prototype.listenFinalizeBlock = function listenFinalizeBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIListenerService.ListenFinalizeBlock, {
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

ABCIListenerServiceClient.prototype.listenCommit = function listenCommit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIListenerService.ListenCommit, {
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

exports.ABCIListenerServiceClient = ABCIListenerServiceClient;

