// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/query.proto

var cosmos_distribution_v1beta1_query_pb = require("../../../cosmos/distribution/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.distribution.v1beta1.Query";
  return Query;
}());

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
  responseType: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse
};

Query.ValidatorOutstandingRewards = {
  methodName: "ValidatorOutstandingRewards",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
  responseType: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse
};

Query.ValidatorCommission = {
  methodName: "ValidatorCommission",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
  responseType: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse
};

Query.ValidatorSlashes = {
  methodName: "ValidatorSlashes",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
  responseType: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse
};

Query.DelegationRewards = {
  methodName: "DelegationRewards",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
  responseType: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse
};

Query.DelegationTotalRewards = {
  methodName: "DelegationTotalRewards",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
  responseType: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse
};

Query.DelegatorValidators = {
  methodName: "DelegatorValidators",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
  responseType: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse
};

Query.DelegatorWithdrawAddress = {
  methodName: "DelegatorWithdrawAddress",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
  responseType: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse
};

Query.CommunityPool = {
  methodName: "CommunityPool",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
  responseType: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse
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

QueryClient.prototype.validatorOutstandingRewards = function validatorOutstandingRewards(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValidatorOutstandingRewards, {
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

QueryClient.prototype.validatorCommission = function validatorCommission(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValidatorCommission, {
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

QueryClient.prototype.validatorSlashes = function validatorSlashes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValidatorSlashes, {
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

QueryClient.prototype.delegationRewards = function delegationRewards(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DelegationRewards, {
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

QueryClient.prototype.delegationTotalRewards = function delegationTotalRewards(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DelegationTotalRewards, {
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

QueryClient.prototype.delegatorWithdrawAddress = function delegatorWithdrawAddress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DelegatorWithdrawAddress, {
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

QueryClient.prototype.communityPool = function communityPool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.CommunityPool, {
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

