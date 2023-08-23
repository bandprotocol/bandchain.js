// package: cosmos.autocli.v1
// file: cosmos/autocli/v1/query.proto

var cosmos_autocli_v1_query_pb = require("../../../cosmos/autocli/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.autocli.v1.Query";
  return Query;
}());

Query.AppOptions = {
  methodName: "AppOptions",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_autocli_v1_query_pb.AppOptionsRequest,
  responseType: cosmos_autocli_v1_query_pb.AppOptionsResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.appOptions = function appOptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AppOptions, {
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

