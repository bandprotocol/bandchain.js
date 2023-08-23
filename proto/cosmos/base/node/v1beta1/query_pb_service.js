// package: cosmos.base.node.v1beta1
// file: cosmos/base/node/v1beta1/query.proto

var cosmos_base_node_v1beta1_query_pb = require("../../../../cosmos/base/node/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Service = (function () {
  function Service() {}
  Service.serviceName = "cosmos.base.node.v1beta1.Service";
  return Service;
}());

Service.Config = {
  methodName: "Config",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_node_v1beta1_query_pb.ConfigRequest,
  responseType: cosmos_base_node_v1beta1_query_pb.ConfigResponse
};

exports.Service = Service;

function ServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceClient.prototype.config = function config(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.Config, {
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

