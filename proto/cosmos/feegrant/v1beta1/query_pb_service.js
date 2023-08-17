// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/query.proto

var cosmos_feegrant_v1beta1_query_pb = require("../../../cosmos/feegrant/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.feegrant.v1beta1.Query";
  return Query;
}());

Query.Allowance = {
  methodName: "Allowance",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
  responseType: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse
};

Query.Allowances = {
  methodName: "Allowances",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
  responseType: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse
};

Query.AllowancesByGranter = {
  methodName: "AllowancesByGranter",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterRequest,
  responseType: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.allowance = function allowance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Allowance, {
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

QueryClient.prototype.allowances = function allowances(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Allowances, {
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

QueryClient.prototype.allowancesByGranter = function allowancesByGranter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AllowancesByGranter, {
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

