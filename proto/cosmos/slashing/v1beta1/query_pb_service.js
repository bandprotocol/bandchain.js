// package: cosmos.slashing.v1beta1
// file: cosmos/slashing/v1beta1/query.proto

var cosmos_slashing_v1beta1_query_pb = require("../../../cosmos/slashing/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.slashing.v1beta1.Query";
  return Query;
}());

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
  responseType: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse
};

Query.SigningInfo = {
  methodName: "SigningInfo",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
  responseType: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse
};

Query.SigningInfos = {
  methodName: "SigningInfos",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
  responseType: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.params = function params(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Params, {
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

QueryClient.prototype.signingInfo = function signingInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SigningInfo, {
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

QueryClient.prototype.signingInfos = function signingInfos(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SigningInfos, {
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

