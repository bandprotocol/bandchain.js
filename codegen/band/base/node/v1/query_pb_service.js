// package: band.base.node.v1
// file: band/base/node/v1/query.proto

var band_base_node_v1_query_pb = require("../../../../band/base/node/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Service = (function () {
  function Service() {}
  Service.serviceName = "band.base.node.v1.Service";
  return Service;
}());

Service.ChainID = {
  methodName: "ChainID",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: band_base_node_v1_query_pb.ChainIDRequest,
  responseType: band_base_node_v1_query_pb.ChainIDResponse
};

Service.EVMValidators = {
  methodName: "EVMValidators",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: band_base_node_v1_query_pb.EVMValidatorsRequest,
  responseType: band_base_node_v1_query_pb.EVMValidatorsResponse
};

exports.Service = Service;

function ServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceClient.prototype.chainID = function chainID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.ChainID, {
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

ServiceClient.prototype.eVMValidators = function eVMValidators(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.EVMValidators, {
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

exports.ServiceClient = ServiceClient;

