// package: tendermint.abci
// file: tendermint/abci/types.proto

var tendermint_abci_types_pb = require("../../tendermint/abci/types_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ABCIApplication = (function () {
  function ABCIApplication() {}
  ABCIApplication.serviceName = "tendermint.abci.ABCIApplication";
  return ABCIApplication;
}());

ABCIApplication.Echo = {
  methodName: "Echo",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestEcho,
  responseType: tendermint_abci_types_pb.ResponseEcho
};

ABCIApplication.Flush = {
  methodName: "Flush",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestFlush,
  responseType: tendermint_abci_types_pb.ResponseFlush
};

ABCIApplication.Info = {
  methodName: "Info",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestInfo,
  responseType: tendermint_abci_types_pb.ResponseInfo
};

ABCIApplication.SetOption = {
  methodName: "SetOption",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestSetOption,
  responseType: tendermint_abci_types_pb.ResponseSetOption
};

ABCIApplication.DeliverTx = {
  methodName: "DeliverTx",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestDeliverTx,
  responseType: tendermint_abci_types_pb.ResponseDeliverTx
};

ABCIApplication.CheckTx = {
  methodName: "CheckTx",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestCheckTx,
  responseType: tendermint_abci_types_pb.ResponseCheckTx
};

ABCIApplication.Query = {
  methodName: "Query",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestQuery,
  responseType: tendermint_abci_types_pb.ResponseQuery
};

ABCIApplication.Commit = {
  methodName: "Commit",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestCommit,
  responseType: tendermint_abci_types_pb.ResponseCommit
};

ABCIApplication.InitChain = {
  methodName: "InitChain",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestInitChain,
  responseType: tendermint_abci_types_pb.ResponseInitChain
};

ABCIApplication.BeginBlock = {
  methodName: "BeginBlock",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestBeginBlock,
  responseType: tendermint_abci_types_pb.ResponseBeginBlock
};

ABCIApplication.EndBlock = {
  methodName: "EndBlock",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestEndBlock,
  responseType: tendermint_abci_types_pb.ResponseEndBlock
};

ABCIApplication.ListSnapshots = {
  methodName: "ListSnapshots",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestListSnapshots,
  responseType: tendermint_abci_types_pb.ResponseListSnapshots
};

ABCIApplication.OfferSnapshot = {
  methodName: "OfferSnapshot",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestOfferSnapshot,
  responseType: tendermint_abci_types_pb.ResponseOfferSnapshot
};

ABCIApplication.LoadSnapshotChunk = {
  methodName: "LoadSnapshotChunk",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
  responseType: tendermint_abci_types_pb.ResponseLoadSnapshotChunk
};

ABCIApplication.ApplySnapshotChunk = {
  methodName: "ApplySnapshotChunk",
  service: ABCIApplication,
  requestStream: false,
  responseStream: false,
  requestType: tendermint_abci_types_pb.RequestApplySnapshotChunk,
  responseType: tendermint_abci_types_pb.ResponseApplySnapshotChunk
};

exports.ABCIApplication = ABCIApplication;

function ABCIApplicationClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ABCIApplicationClient.prototype.echo = function echo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.Echo, {
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

ABCIApplicationClient.prototype.flush = function flush(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.Flush, {
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

ABCIApplicationClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.Info, {
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

ABCIApplicationClient.prototype.setOption = function setOption(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.SetOption, {
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

ABCIApplicationClient.prototype.deliverTx = function deliverTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.DeliverTx, {
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

ABCIApplicationClient.prototype.checkTx = function checkTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.CheckTx, {
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

ABCIApplicationClient.prototype.query = function query(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.Query, {
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

ABCIApplicationClient.prototype.commit = function commit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.Commit, {
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

ABCIApplicationClient.prototype.initChain = function initChain(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.InitChain, {
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

ABCIApplicationClient.prototype.beginBlock = function beginBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.BeginBlock, {
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

ABCIApplicationClient.prototype.endBlock = function endBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.EndBlock, {
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

ABCIApplicationClient.prototype.listSnapshots = function listSnapshots(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.ListSnapshots, {
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

ABCIApplicationClient.prototype.offerSnapshot = function offerSnapshot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.OfferSnapshot, {
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

ABCIApplicationClient.prototype.loadSnapshotChunk = function loadSnapshotChunk(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.LoadSnapshotChunk, {
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

ABCIApplicationClient.prototype.applySnapshotChunk = function applySnapshotChunk(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ABCIApplication.ApplySnapshotChunk, {
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

exports.ABCIApplicationClient = ABCIApplicationClient;

