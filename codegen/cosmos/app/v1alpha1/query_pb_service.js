// package: cosmos.app.v1alpha1
// file: cosmos/app/v1alpha1/query.proto

var cosmos_app_v1alpha1_query_pb = require("../../../cosmos/app/v1alpha1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.app.v1alpha1.Query";
  return Query;
}());

Query.Config = {
  methodName: "Config",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_app_v1alpha1_query_pb.QueryConfigRequest,
  responseType: cosmos_app_v1alpha1_query_pb.QueryConfigResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.config = function config(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Config, {
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

exports.QueryClient = QueryClient;

