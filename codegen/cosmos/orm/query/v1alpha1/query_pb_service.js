// package: cosmos.orm.query.v1alpha1
// file: cosmos/orm/query/v1alpha1/query.proto

var cosmos_orm_query_v1alpha1_query_pb = require("../../../../cosmos/orm/query/v1alpha1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.orm.query.v1alpha1.Query";
  return Query;
}());

Query.Get = {
  methodName: "Get",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_orm_query_v1alpha1_query_pb.GetRequest,
  responseType: cosmos_orm_query_v1alpha1_query_pb.GetResponse
};

Query.List = {
  methodName: "List",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_orm_query_v1alpha1_query_pb.ListRequest,
  responseType: cosmos_orm_query_v1alpha1_query_pb.ListResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.get = function get(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Get, {
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

QueryClient.prototype.list = function list(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.List, {
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

