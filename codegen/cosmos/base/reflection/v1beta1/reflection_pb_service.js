// package: cosmos.base.reflection.v1beta1
// file: cosmos/base/reflection/v1beta1/reflection.proto

var cosmos_base_reflection_v1beta1_reflection_pb = require("../../../../cosmos/base/reflection/v1beta1/reflection_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ReflectionService = (function () {
  function ReflectionService() {}
  ReflectionService.serviceName = "cosmos.base.reflection.v1beta1.ReflectionService";
  return ReflectionService;
}());

ReflectionService.ListAllInterfaces = {
  methodName: "ListAllInterfaces",
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
  responseType: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse
};

ReflectionService.ListImplementations = {
  methodName: "ListImplementations",
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
  responseType: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse
};

exports.ReflectionService = ReflectionService;

function ReflectionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ReflectionServiceClient.prototype.listAllInterfaces = function listAllInterfaces(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReflectionService.ListAllInterfaces, {
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

ReflectionServiceClient.prototype.listImplementations = function listImplementations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReflectionService.ListImplementations, {
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

