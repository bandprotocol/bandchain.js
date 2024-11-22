// package: tendermint.abci
// file: tendermint/abci/types.proto

var tendermint_abci_types_pb = require("../../tendermint/abci/types_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ABCI = (function () {
  function ABCI() {}
  ABCI.serviceName = "tendermint.abci.ABCI";
  return ABCI;
}());

ABCI.Echo = {
  methodName: "Echo",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestEcho,
  responseType: tendermint_abci_types_pb.ResponseEcho
};

ABCI.Flush = {
  methodName: "Flush",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestFlush,
  responseType: tendermint_abci_types_pb.ResponseFlush
};

ABCI.Info = {
  methodName: "Info",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestInfo,
  responseType: tendermint_abci_types_pb.ResponseInfo
};

ABCI.CheckTx = {
  methodName: "CheckTx",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestCheckTx,
  responseType: tendermint_abci_types_pb.ResponseCheckTx
};

ABCI.Query = {
  methodName: "Query",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestQuery,
  responseType: tendermint_abci_types_pb.ResponseQuery
};

ABCI.Commit = {
  methodName: "Commit",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestCommit,
  responseType: tendermint_abci_types_pb.ResponseCommit
};

ABCI.InitChain = {
  methodName: "InitChain",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestInitChain,
  responseType: tendermint_abci_types_pb.ResponseInitChain
};

ABCI.ListSnapshots = {
  methodName: "ListSnapshots",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestListSnapshots,
  responseType: tendermint_abci_types_pb.ResponseListSnapshots
};

ABCI.OfferSnapshot = {
  methodName: "OfferSnapshot",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestOfferSnapshot,
  responseType: tendermint_abci_types_pb.ResponseOfferSnapshot
};

ABCI.LoadSnapshotChunk = {
  methodName: "LoadSnapshotChunk",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
  responseType: tendermint_abci_types_pb.ResponseLoadSnapshotChunk
};

ABCI.ApplySnapshotChunk = {
  methodName: "ApplySnapshotChunk",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestApplySnapshotChunk,
  responseType: tendermint_abci_types_pb.ResponseApplySnapshotChunk
};

ABCI.PrepareProposal = {
  methodName: "PrepareProposal",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestPrepareProposal,
  responseType: tendermint_abci_types_pb.ResponsePrepareProposal
};

ABCI.ProcessProposal = {
  methodName: "ProcessProposal",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestProcessProposal,
  responseType: tendermint_abci_types_pb.ResponseProcessProposal
};

ABCI.ExtendVote = {
  methodName: "ExtendVote",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestExtendVote,
  responseType: tendermint_abci_types_pb.ResponseExtendVote
};

ABCI.VerifyVoteExtension = {
  methodName: "VerifyVoteExtension",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestVerifyVoteExtension,
  responseType: tendermint_abci_types_pb.ResponseVerifyVoteExtension
};

ABCI.FinalizeBlock = {
  methodName: "FinalizeBlock",
  service: ABCI,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestFinalizeBlock,
  responseType: tendermint_abci_types_pb.ResponseFinalizeBlock
};

exports.ABCI = ABCI;

function ABCIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ABCIClient.prototype.echo = function echo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.Echo, {
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

ABCIClient.prototype.flush = function flush(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.Flush, {
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

ABCIClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.Info, {
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

ABCIClient.prototype.checkTx = function checkTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.CheckTx, {
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

ABCIClient.prototype.query = function query(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.Query, {
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

ABCIClient.prototype.commit = function commit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.Commit, {
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

ABCIClient.prototype.initChain = function initChain(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.InitChain, {
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

ABCIClient.prototype.listSnapshots = function listSnapshots(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.ListSnapshots, {
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

ABCIClient.prototype.offerSnapshot = function offerSnapshot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.OfferSnapshot, {
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

ABCIClient.prototype.loadSnapshotChunk = function loadSnapshotChunk(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.LoadSnapshotChunk, {
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

ABCIClient.prototype.applySnapshotChunk = function applySnapshotChunk(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.ApplySnapshotChunk, {
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

ABCIClient.prototype.prepareProposal = function prepareProposal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.PrepareProposal, {
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

ABCIClient.prototype.processProposal = function processProposal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.ProcessProposal, {
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

ABCIClient.prototype.extendVote = function extendVote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.ExtendVote, {
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

ABCIClient.prototype.verifyVoteExtension = function verifyVoteExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.VerifyVoteExtension, {
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

ABCIClient.prototype.finalizeBlock = function finalizeBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCI.FinalizeBlock, {
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

exports.ABCIClient = ABCIClient;

