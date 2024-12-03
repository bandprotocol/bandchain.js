// package: ibc.lightclients.wasm.v1
// file: ibc/lightclients/wasm/v1/query.proto

var ibc_lightclients_wasm_v1_query_pb = require("../../../../ibc/lightclients/wasm/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "ibc.lightclients.wasm.v1.Query";
  return Query;
}());

Query.Checksums = {
  methodName: "Checksums",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_lightclients_wasm_v1_query_pb.QueryChecksumsRequest,
  responseType: ibc_lightclients_wasm_v1_query_pb.QueryChecksumsResponse
};

Query.Code = {
  methodName: "Code",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_lightclients_wasm_v1_query_pb.QueryCodeRequest,
  responseType: ibc_lightclients_wasm_v1_query_pb.QueryCodeResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.checksums = function checksums(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Checksums, {
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

QueryClient.prototype.code = function code(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Code, {
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

