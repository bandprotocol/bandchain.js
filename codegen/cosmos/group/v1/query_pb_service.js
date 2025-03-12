// package: cosmos.group.v1
// file: cosmos/group/v1/query.proto

var cosmos_group_v1_query_pb = require("../../../cosmos/group/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.group.v1.Query";
  return Query;
}());

Query.GroupInfo = {
  methodName: "GroupInfo",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryGroupInfoRequest,
  responseType: cosmos_group_v1_query_pb.QueryGroupInfoResponse
};

Query.GroupPolicyInfo = {
  methodName: "GroupPolicyInfo",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryGroupPolicyInfoRequest,
  responseType: cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse
};

Query.GroupMembers = {
  methodName: "GroupMembers",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryGroupMembersRequest,
  responseType: cosmos_group_v1_query_pb.QueryGroupMembersResponse
};

Query.GroupsByAdmin = {
  methodName: "GroupsByAdmin",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryGroupsByAdminRequest,
  responseType: cosmos_group_v1_query_pb.QueryGroupsByAdminResponse
};

Query.GroupPoliciesByGroup = {
  methodName: "GroupPoliciesByGroup",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupRequest,
  responseType: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse
};

Query.GroupPoliciesByAdmin = {
  methodName: "GroupPoliciesByAdmin",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminRequest,
  responseType: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse
};

Query.Proposal = {
  methodName: "Proposal",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryProposalRequest,
  responseType: cosmos_group_v1_query_pb.QueryProposalResponse
};

Query.ProposalsByGroupPolicy = {
  methodName: "ProposalsByGroupPolicy",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyRequest,
  responseType: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse
};

Query.VoteByProposalVoter = {
  methodName: "VoteByProposalVoter",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryVoteByProposalVoterRequest,
  responseType: cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse
};

Query.VotesByProposal = {
  methodName: "VotesByProposal",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryVotesByProposalRequest,
  responseType: cosmos_group_v1_query_pb.QueryVotesByProposalResponse
};

Query.VotesByVoter = {
  methodName: "VotesByVoter",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryVotesByVoterRequest,
  responseType: cosmos_group_v1_query_pb.QueryVotesByVoterResponse
};

Query.GroupsByMember = {
  methodName: "GroupsByMember",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryGroupsByMemberRequest,
  responseType: cosmos_group_v1_query_pb.QueryGroupsByMemberResponse
};

Query.TallyResult = {
  methodName: "TallyResult",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_query_pb.QueryTallyResultRequest,
  responseType: cosmos_group_v1_query_pb.QueryTallyResultResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.groupInfo = function groupInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GroupInfo, {
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

QueryClient.prototype.groupPolicyInfo = function groupPolicyInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GroupPolicyInfo, {
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

QueryClient.prototype.groupMembers = function groupMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GroupMembers, {
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

QueryClient.prototype.groupsByAdmin = function groupsByAdmin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GroupsByAdmin, {
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

QueryClient.prototype.groupPoliciesByGroup = function groupPoliciesByGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GroupPoliciesByGroup, {
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

QueryClient.prototype.groupPoliciesByAdmin = function groupPoliciesByAdmin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GroupPoliciesByAdmin, {
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

QueryClient.prototype.proposalsByGroupPolicy = function proposalsByGroupPolicy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ProposalsByGroupPolicy, {
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

QueryClient.prototype.voteByProposalVoter = function voteByProposalVoter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.VoteByProposalVoter, {
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

QueryClient.prototype.votesByProposal = function votesByProposal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.VotesByProposal, {
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

QueryClient.prototype.votesByVoter = function votesByVoter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.VotesByVoter, {
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

QueryClient.prototype.groupsByMember = function groupsByMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GroupsByMember, {
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

