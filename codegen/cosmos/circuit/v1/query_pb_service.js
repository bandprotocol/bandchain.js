// package: cosmos.circuit.v1
// file: cosmos/circuit/v1/query.proto

var cosmos_circuit_v1_query_pb = require("../../../cosmos/circuit/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.circuit.v1.Query";
  return Query;
}());

Query.Account = {
  methodName: "Account",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_circuit_v1_query_pb.QueryAccountRequest,
  responseType: cosmos_circuit_v1_query_pb.AccountResponse
};

Query.Accounts = {
  methodName: "Accounts",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_circuit_v1_query_pb.QueryAccountsRequest,
  responseType: cosmos_circuit_v1_query_pb.AccountsResponse
};

Query.DisabledList = {
  methodName: "DisabledList",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_circuit_v1_query_pb.QueryDisabledListRequest,
  responseType: cosmos_circuit_v1_query_pb.DisabledListResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.account = function account(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Account, {
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

QueryClient.prototype.accounts = function accounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Accounts, {
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

QueryClient.prototype.disabledList = function disabledList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DisabledList, {
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

