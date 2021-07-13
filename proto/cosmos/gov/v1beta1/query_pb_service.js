// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/query.proto

var cosmos_gov_v1beta1_query_pb = require("../../../cosmos/gov/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.gov.v1beta1.Query";
  return Query;
}());

Query.Proposal = {
  methodName: "Proposal",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_query_pb.QueryProposalRequest,
  responseType: cosmos_gov_v1beta1_query_pb.QueryProposalResponse
};

Query.Proposals = {
  methodName: "Proposals",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest,
  responseType: cosmos_gov_v1beta1_query_pb.QueryProposalsResponse
};

Query.Vote = {
  methodName: "Vote",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_query_pb.QueryVoteRequest,
  responseType: cosmos_gov_v1beta1_query_pb.QueryVoteResponse
};

Query.Votes = {
  methodName: "Votes",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_query_pb.QueryVotesRequest,
  responseType: cosmos_gov_v1beta1_query_pb.QueryVotesResponse
};

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_query_pb.QueryParamsRequest,
  responseType: cosmos_gov_v1beta1_query_pb.QueryParamsResponse
};

Query.Deposit = {
  methodName: "Deposit",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_query_pb.QueryDepositRequest,
  responseType: cosmos_gov_v1beta1_query_pb.QueryDepositResponse
};

Query.Deposits = {
  methodName: "Deposits",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest,
  responseType: cosmos_gov_v1beta1_query_pb.QueryDepositsResponse
};

Query.TallyResult = {
  methodName: "TallyResult",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest,
  responseType: cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.proposal = function proposal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Proposal, {
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

QueryClient.prototype.proposals = function proposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Proposals, {
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

QueryClient.prototype.vote = function vote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Vote, {
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

QueryClient.prototype.votes = function votes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Votes, {
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

QueryClient.prototype.deposit = function deposit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Deposit, {
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

QueryClient.prototype.deposits = function deposits(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Deposits, {
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

QueryClient.prototype.tallyResult = function tallyResult(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.TallyResult, {
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

