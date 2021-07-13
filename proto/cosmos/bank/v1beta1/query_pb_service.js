// package: cosmos.bank.v1beta1
// file: cosmos/bank/v1beta1/query.proto

var cosmos_bank_v1beta1_query_pb = require("../../../cosmos/bank/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.bank.v1beta1.Query";
  return Query;
}());

Query.Balance = {
  methodName: "Balance",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
  responseType: cosmos_bank_v1beta1_query_pb.QueryBalanceResponse
};

Query.AllBalances = {
  methodName: "AllBalances",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
  responseType: cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse
};

Query.TotalSupply = {
  methodName: "TotalSupply",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
  responseType: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse
};

Query.SupplyOf = {
  methodName: "SupplyOf",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
  responseType: cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse
};

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
  responseType: cosmos_bank_v1beta1_query_pb.QueryParamsResponse
};

Query.DenomMetadata = {
  methodName: "DenomMetadata",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
  responseType: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse
};

Query.DenomsMetadata = {
  methodName: "DenomsMetadata",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
  responseType: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.balance = function balance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Balance, {
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

QueryClient.prototype.allBalances = function allBalances(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AllBalances, {
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

QueryClient.prototype.totalSupply = function totalSupply(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.TotalSupply, {
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

QueryClient.prototype.supplyOf = function supplyOf(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SupplyOf, {
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

QueryClient.prototype.denomMetadata = function denomMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DenomMetadata, {
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

QueryClient.prototype.denomsMetadata = function denomsMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DenomsMetadata, {
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

