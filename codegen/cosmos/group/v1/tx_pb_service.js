// package: cosmos.group.v1
// file: cosmos/group/v1/tx.proto

var cosmos_group_v1_tx_pb = require("../../../cosmos/group/v1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.group.v1.Msg";
  return Msg;
}());

Msg.CreateGroup = {
  methodName: "CreateGroup",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgCreateGroup,
  responseType: cosmos_group_v1_tx_pb.MsgCreateGroupResponse
};

Msg.UpdateGroupMembers = {
  methodName: "UpdateGroupMembers",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgUpdateGroupMembers,
  responseType: cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse
};

Msg.UpdateGroupAdmin = {
  methodName: "UpdateGroupAdmin",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgUpdateGroupAdmin,
  responseType: cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse
};

Msg.UpdateGroupMetadata = {
  methodName: "UpdateGroupMetadata",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadata,
  responseType: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse
};

Msg.CreateGroupPolicy = {
  methodName: "CreateGroupPolicy",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgCreateGroupPolicy,
  responseType: cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse
};

Msg.CreateGroupWithPolicy = {
  methodName: "CreateGroupWithPolicy",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicy,
  responseType: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse
};

Msg.UpdateGroupPolicyAdmin = {
  methodName: "UpdateGroupPolicyAdmin",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdmin,
  responseType: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse
};

Msg.UpdateGroupPolicyDecisionPolicy = {
  methodName: "UpdateGroupPolicyDecisionPolicy",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy,
  responseType: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse
};

Msg.UpdateGroupPolicyMetadata = {
  methodName: "UpdateGroupPolicyMetadata",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadata,
  responseType: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse
};

Msg.SubmitProposal = {
  methodName: "SubmitProposal",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgSubmitProposal,
  responseType: cosmos_group_v1_tx_pb.MsgSubmitProposalResponse
};

Msg.WithdrawProposal = {
  methodName: "WithdrawProposal",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgWithdrawProposal,
  responseType: cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse
};

Msg.Vote = {
  methodName: "Vote",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgVote,
  responseType: cosmos_group_v1_tx_pb.MsgVoteResponse
};

Msg.Exec = {
  methodName: "Exec",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgExec,
  responseType: cosmos_group_v1_tx_pb.MsgExecResponse
};

Msg.LeaveGroup = {
  methodName: "LeaveGroup",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_group_v1_tx_pb.MsgLeaveGroup,
  responseType: cosmos_group_v1_tx_pb.MsgLeaveGroupResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.createGroup = function createGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateGroup, {
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

MsgClient.prototype.updateGroupMembers = function updateGroupMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateGroupMembers, {
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

MsgClient.prototype.updateGroupAdmin = function updateGroupAdmin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateGroupAdmin, {
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

MsgClient.prototype.updateGroupMetadata = function updateGroupMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateGroupMetadata, {
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

MsgClient.prototype.createGroupPolicy = function createGroupPolicy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateGroupPolicy, {
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

MsgClient.prototype.createGroupWithPolicy = function createGroupWithPolicy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateGroupWithPolicy, {
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

MsgClient.prototype.updateGroupPolicyAdmin = function updateGroupPolicyAdmin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateGroupPolicyAdmin, {
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

MsgClient.prototype.updateGroupPolicyDecisionPolicy = function updateGroupPolicyDecisionPolicy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateGroupPolicyDecisionPolicy, {
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

MsgClient.prototype.updateGroupPolicyMetadata = function updateGroupPolicyMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateGroupPolicyMetadata, {
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

MsgClient.prototype.submitProposal = function submitProposal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitProposal, {
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

MsgClient.prototype.withdrawProposal = function withdrawProposal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.WithdrawProposal, {
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

MsgClient.prototype.vote = function vote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Vote, {
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

MsgClient.prototype.exec = function exec(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Exec, {
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

MsgClient.prototype.leaveGroup = function leaveGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.LeaveGroup, {
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

exports.MsgClient = MsgClient;

