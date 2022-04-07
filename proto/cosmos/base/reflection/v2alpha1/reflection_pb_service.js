// package: cosmos.base.reflection.v2alpha1
// file: cosmos/base/reflection/v2alpha1/reflection.proto

var cosmos_base_reflection_v2alpha1_reflection_pb = require("../../../../cosmos/base/reflection/v2alpha1/reflection_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ReflectionService = (function () {
  function ReflectionService() {}
  ReflectionService.serviceName = "cosmos.base.reflection.v2alpha1.ReflectionService";
  return ReflectionService;
}());

ReflectionService.GetAuthnDescriptor = {
  methodName: "GetAuthnDescriptor",
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
  responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse
};

ReflectionService.GetChainDescriptor = {
  methodName: "GetChainDescriptor",
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
  responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse
};

ReflectionService.GetCodecDescriptor = {
  methodName: "GetCodecDescriptor",
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
  responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse
};

ReflectionService.GetConfigurationDescriptor = {
  methodName: "GetConfigurationDescriptor",
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
  responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse
};

ReflectionService.GetQueryServicesDescriptor = {
  methodName: "GetQueryServicesDescriptor",
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
  responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse
};

ReflectionService.GetTxDescriptor = {
  methodName: "GetTxDescriptor",
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
  responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse
};

exports.ReflectionService = ReflectionService;

function ReflectionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ReflectionServiceClient.prototype.getAuthnDescriptor = function getAuthnDescriptor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReflectionService.GetAuthnDescriptor, {
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

ReflectionServiceClient.prototype.getChainDescriptor = function getChainDescriptor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReflectionService.GetChainDescriptor, {
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

ReflectionServiceClient.prototype.getCodecDescriptor = function getCodecDescriptor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReflectionService.GetCodecDescriptor, {
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

ReflectionServiceClient.prototype.getConfigurationDescriptor = function getConfigurationDescriptor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReflectionService.GetConfigurationDescriptor, {
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

ReflectionServiceClient.prototype.getQueryServicesDescriptor = function getQueryServicesDescriptor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReflectionService.GetQueryServicesDescriptor, {
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

ReflectionServiceClient.prototype.getTxDescriptor = function getTxDescriptor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReflectionService.GetTxDescriptor, {
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

