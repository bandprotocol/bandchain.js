// package: cosmos.reflection.v1
// file: cosmos/reflection/v1/reflection.proto

var cosmos_reflection_v1_reflection_pb = require("../../../cosmos/reflection/v1/reflection_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ReflectionService = (function () {
  function ReflectionService() {}
  ReflectionService.serviceName = "cosmos.reflection.v1.ReflectionService";
  return ReflectionService;
}());

ReflectionService.FileDescriptors = {
  methodName: "FileDescriptors",
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_reflection_v1_reflection_pb.FileDescriptorsRequest,
  responseType: cosmos_reflection_v1_reflection_pb.FileDescriptorsResponse
};

exports.ReflectionService = ReflectionService;

function ReflectionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ReflectionServiceClient.prototype.fileDescriptors = function fileDescriptors(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReflectionService.FileDescriptors, {
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

exports.ReflectionServiceClient = ReflectionServiceClient;

