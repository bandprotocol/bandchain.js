// package: feeds.v1beta1
// file: feeds/v1beta1/query.proto

var feeds_v1beta1_query_pb = require("../../feeds/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "feeds.v1beta1.Query";
  return Query;
}());

Query.Prices = {
  methodName: "Prices",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QueryPricesRequest,
  responseType: feeds_v1beta1_query_pb.QueryPricesResponse
};

Query.Price = {
  methodName: "Price",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QueryPriceRequest,
  responseType: feeds_v1beta1_query_pb.QueryPriceResponse
};

Query.ValidatorPrices = {
  methodName: "ValidatorPrices",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QueryValidatorPricesRequest,
  responseType: feeds_v1beta1_query_pb.QueryValidatorPricesResponse
};

Query.ValidValidator = {
  methodName: "ValidValidator",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QueryValidValidatorRequest,
  responseType: feeds_v1beta1_query_pb.QueryValidValidatorResponse
};

Query.SignalTotalPowers = {
  methodName: "SignalTotalPowers",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QuerySignalTotalPowersRequest,
  responseType: feeds_v1beta1_query_pb.QuerySignalTotalPowersResponse
};

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QueryParamsRequest,
  responseType: feeds_v1beta1_query_pb.QueryParamsResponse
};

Query.ReferenceSourceConfig = {
  methodName: "ReferenceSourceConfig",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QueryReferenceSourceConfigRequest,
  responseType: feeds_v1beta1_query_pb.QueryReferenceSourceConfigResponse
};

Query.DelegatorSignals = {
  methodName: "DelegatorSignals",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QueryDelegatorSignalsRequest,
  responseType: feeds_v1beta1_query_pb.QueryDelegatorSignalsResponse
};

Query.CurrentFeeds = {
  methodName: "CurrentFeeds",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QueryCurrentFeedsRequest,
  responseType: feeds_v1beta1_query_pb.QueryCurrentFeedsResponse
};

Query.IsFeeder = {
  methodName: "IsFeeder",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: feeds_v1beta1_query_pb.QueryIsFeederRequest,
  responseType: feeds_v1beta1_query_pb.QueryIsFeederResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.prices = function prices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Prices, {
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

QueryClient.prototype.price = function price(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Price, {
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

QueryClient.prototype.validatorPrices = function validatorPrices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValidatorPrices, {
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

QueryClient.prototype.validValidator = function validValidator(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValidValidator, {
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

QueryClient.prototype.signalTotalPowers = function signalTotalPowers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SignalTotalPowers, {
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

QueryClient.prototype.referenceSourceConfig = function referenceSourceConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ReferenceSourceConfig, {
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

QueryClient.prototype.delegatorSignals = function delegatorSignals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DelegatorSignals, {
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

QueryClient.prototype.currentFeeds = function currentFeeds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.CurrentFeeds, {
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

QueryClient.prototype.isFeeder = function isFeeder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.IsFeeder, {
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

