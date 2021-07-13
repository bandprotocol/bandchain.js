// package: cosmos.staking.v1beta1
// file: cosmos/staking/v1beta1/query.proto

var cosmos_staking_v1beta1_query_pb = require("../../../cosmos/staking/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.staking.v1beta1.Query";
  return Query;
}());

Query.Validators = {
  methodName: "Validators",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse
};

Query.Validator = {
  methodName: "Validator",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryValidatorResponse
};

Query.ValidatorDelegations = {
  methodName: "ValidatorDelegations",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse
};

Query.ValidatorUnbondingDelegations = {
  methodName: "ValidatorUnbondingDelegations",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse
};

Query.Delegation = {
  methodName: "Delegation",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryDelegationResponse
};

Query.UnbondingDelegation = {
  methodName: "UnbondingDelegation",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse
};

Query.DelegatorDelegations = {
  methodName: "DelegatorDelegations",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse
};

Query.DelegatorUnbondingDelegations = {
  methodName: "DelegatorUnbondingDelegations",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse
};

Query.Redelegations = {
  methodName: "Redelegations",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse
};

Query.DelegatorValidators = {
  methodName: "DelegatorValidators",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse
};

Query.DelegatorValidator = {
  methodName: "DelegatorValidator",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse
};

Query.HistoricalInfo = {
  methodName: "HistoricalInfo",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse
};

Query.Pool = {
  methodName: "Pool",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryPoolResponse
};

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
  responseType: cosmos_staking_v1beta1_query_pb.QueryParamsResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.validators = function validators(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Validators, {
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

QueryClient.prototype.validator = function validator(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Validator, {
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

QueryClient.prototype.validatorDelegations = function validatorDelegations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValidatorDelegations, {
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

QueryClient.prototype.validatorUnbondingDelegations = function validatorUnbondingDelegations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValidatorUnbondingDelegations, {
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

QueryClient.prototype.delegation = function delegation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Delegation, {
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

QueryClient.prototype.unbondingDelegation = function unbondingDelegation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.UnbondingDelegation, {
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

QueryClient.prototype.delegatorDelegations = function delegatorDelegations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DelegatorDelegations, {
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

QueryClient.prototype.delegatorUnbondingDelegations = function delegatorUnbondingDelegations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DelegatorUnbondingDelegations, {
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

QueryClient.prototype.redelegations = function redelegations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Redelegations, {
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

QueryClient.prototype.delegatorValidators = function delegatorValidators(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DelegatorValidators, {
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

QueryClient.prototype.delegatorValidator = function delegatorValidator(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DelegatorValidator, {
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

QueryClient.prototype.historicalInfo = function historicalInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.HistoricalInfo, {
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

QueryClient.prototype.pool = function pool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Pool, {
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

exports.QueryClient = QueryClient;

