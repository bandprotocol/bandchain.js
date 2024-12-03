// package: cosmos.tx.v1beta1
// file: cosmos/tx/v1beta1/service.proto

var cosmos_tx_v1beta1_service_pb = require("../../../cosmos/tx/v1beta1/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Service = (function () {
  function Service() {}
  Service.serviceName = "cosmos.tx.v1beta1.Service";
  return Service;
}());

Service.Simulate = {
  methodName: "Simulate",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.SimulateRequest,
  responseType: cosmos_tx_v1beta1_service_pb.SimulateResponse
};

Service.GetTx = {
  methodName: "GetTx",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.GetTxRequest,
  responseType: cosmos_tx_v1beta1_service_pb.GetTxResponse
};

Service.BroadcastTx = {
  methodName: "BroadcastTx",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
  responseType: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse
};

Service.GetTxsEvent = {
  methodName: "GetTxsEvent",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
  responseType: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse
};

Service.GetBlockWithTxs = {
  methodName: "GetBlockWithTxs",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsRequest,
  responseType: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse
};

Service.TxDecode = {
  methodName: "TxDecode",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.TxDecodeRequest,
  responseType: cosmos_tx_v1beta1_service_pb.TxDecodeResponse
};

Service.TxEncode = {
  methodName: "TxEncode",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.TxEncodeRequest,
  responseType: cosmos_tx_v1beta1_service_pb.TxEncodeResponse
};

Service.TxEncodeAmino = {
  methodName: "TxEncodeAmino",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.TxEncodeAminoRequest,
  responseType: cosmos_tx_v1beta1_service_pb.TxEncodeAminoResponse
};

Service.TxDecodeAmino = {
  methodName: "TxDecodeAmino",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.TxDecodeAminoRequest,
  responseType: cosmos_tx_v1beta1_service_pb.TxDecodeAminoResponse
};

exports.Service = Service;

function ServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceClient.prototype.simulate = function simulate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.Simulate, {
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

ServiceClient.prototype.getTx = function getTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.GetTx, {
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

ServiceClient.prototype.broadcastTx = function broadcastTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.BroadcastTx, {
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

ServiceClient.prototype.getTxsEvent = function getTxsEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.GetTxsEvent, {
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

ServiceClient.prototype.getBlockWithTxs = function getBlockWithTxs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.GetBlockWithTxs, {
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

ServiceClient.prototype.txDecode = function txDecode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.TxDecode, {
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

ServiceClient.prototype.txEncode = function txEncode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.TxEncode, {
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

ServiceClient.prototype.txEncodeAmino = function txEncodeAmino(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.TxEncodeAmino, {
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

ServiceClient.prototype.txDecodeAmino = function txDecodeAmino(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.TxDecodeAmino, {
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

exports.ServiceClient = ServiceClient;

