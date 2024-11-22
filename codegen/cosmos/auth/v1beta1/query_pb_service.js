// package: cosmos.auth.v1beta1
// file: cosmos/auth/v1beta1/query.proto

var cosmos_auth_v1beta1_query_pb = require("../../../cosmos/auth/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.auth.v1beta1.Query";
  return Query;
}());

Query.Accounts = {
  methodName: "Accounts",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
  responseType: cosmos_auth_v1beta1_query_pb.QueryAccountsResponse
};

Query.Account = {
  methodName: "Account",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
  responseType: cosmos_auth_v1beta1_query_pb.QueryAccountResponse
};

Query.AccountAddressByID = {
  methodName: "AccountAddressByID",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.QueryAccountAddressByIDRequest,
  responseType: cosmos_auth_v1beta1_query_pb.QueryAccountAddressByIDResponse
};

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
  responseType: cosmos_auth_v1beta1_query_pb.QueryParamsResponse
};

Query.ModuleAccounts = {
  methodName: "ModuleAccounts",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest,
  responseType: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse
};

Query.ModuleAccountByName = {
  methodName: "ModuleAccountByName",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.QueryModuleAccountByNameRequest,
  responseType: cosmos_auth_v1beta1_query_pb.QueryModuleAccountByNameResponse
};

Query.Bech32Prefix = {
  methodName: "Bech32Prefix",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest,
  responseType: cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse
};

Query.AddressBytesToString = {
  methodName: "AddressBytesToString",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest,
  responseType: cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse
};

Query.AddressStringToBytes = {
  methodName: "AddressStringToBytes",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest,
  responseType: cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse
};

Query.AccountInfo = {
  methodName: "AccountInfo",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.QueryAccountInfoRequest,
  responseType: cosmos_auth_v1beta1_query_pb.QueryAccountInfoResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

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

QueryClient.prototype.accountAddressByID = function accountAddressByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AccountAddressByID, {
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

QueryClient.prototype.moduleAccounts = function moduleAccounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ModuleAccounts, {
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

QueryClient.prototype.moduleAccountByName = function moduleAccountByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ModuleAccountByName, {
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

QueryClient.prototype.bech32Prefix = function bech32Prefix(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Bech32Prefix, {
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

QueryClient.prototype.addressBytesToString = function addressBytesToString(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AddressBytesToString, {
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

QueryClient.prototype.addressStringToBytes = function addressStringToBytes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AddressStringToBytes, {
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

QueryClient.prototype.accountInfo = function accountInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AccountInfo, {
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

