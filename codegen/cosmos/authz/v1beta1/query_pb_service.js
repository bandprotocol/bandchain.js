// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/query.proto

var cosmos_authz_v1beta1_query_pb = require("../../../cosmos/authz/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.authz.v1beta1.Query";
  return Query;
}());

Query.Grants = {
  methodName: "Grants",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest,
  responseType: cosmos_authz_v1beta1_query_pb.QueryGrantsResponse
};

Query.GranterGrants = {
  methodName: "GranterGrants",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest,
  responseType: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse
};

Query.GranteeGrants = {
  methodName: "GranteeGrants",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest,
  responseType: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.grants = function grants(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Grants, {
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

QueryClient.prototype.granterGrants = function granterGrants(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GranterGrants, {
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

QueryClient.prototype.granteeGrants = function granteeGrants(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GranteeGrants, {
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

