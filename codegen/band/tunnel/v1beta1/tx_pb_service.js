// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/tx.proto

var band_tunnel_v1beta1_tx_pb = require("../../../band/tunnel/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "band.tunnel.v1beta1.Msg";
  return Msg;
}());

Msg.CreateTunnel = {
  methodName: "CreateTunnel",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tunnel_v1beta1_tx_pb.MsgCreateTunnel,
  responseType: band_tunnel_v1beta1_tx_pb.MsgCreateTunnelResponse
};

Msg.UpdateAndResetTunnel = {
  methodName: "UpdateAndResetTunnel",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tunnel_v1beta1_tx_pb.MsgUpdateAndResetTunnel,
  responseType: band_tunnel_v1beta1_tx_pb.MsgUpdateAndResetTunnelResponse
};

Msg.Activate = {
  methodName: "Activate",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tunnel_v1beta1_tx_pb.MsgActivate,
  responseType: band_tunnel_v1beta1_tx_pb.MsgActivateResponse
};

Msg.Deactivate = {
  methodName: "Deactivate",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tunnel_v1beta1_tx_pb.MsgDeactivate,
  responseType: band_tunnel_v1beta1_tx_pb.MsgDeactivateResponse
};

Msg.TriggerTunnel = {
  methodName: "TriggerTunnel",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tunnel_v1beta1_tx_pb.MsgTriggerTunnel,
  responseType: band_tunnel_v1beta1_tx_pb.MsgTriggerTunnelResponse
};

Msg.DepositToTunnel = {
  methodName: "DepositToTunnel",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tunnel_v1beta1_tx_pb.MsgDepositToTunnel,
  responseType: band_tunnel_v1beta1_tx_pb.MsgDepositToTunnelResponse
};

Msg.WithdrawFromTunnel = {
  methodName: "WithdrawFromTunnel",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tunnel_v1beta1_tx_pb.MsgWithdrawFromTunnel,
  responseType: band_tunnel_v1beta1_tx_pb.MsgWithdrawFromTunnelResponse
};

Msg.UpdateParams = {
  methodName: "UpdateParams",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tunnel_v1beta1_tx_pb.MsgUpdateParams,
  responseType: band_tunnel_v1beta1_tx_pb.MsgUpdateParamsResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.createTunnel = function createTunnel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateTunnel, {
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

MsgClient.prototype.updateAndResetTunnel = function updateAndResetTunnel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateAndResetTunnel, {
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

MsgClient.prototype.activate = function activate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Activate, {
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

MsgClient.prototype.deactivate = function deactivate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Deactivate, {
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

MsgClient.prototype.triggerTunnel = function triggerTunnel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.TriggerTunnel, {
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

MsgClient.prototype.depositToTunnel = function depositToTunnel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.DepositToTunnel, {
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

MsgClient.prototype.withdrawFromTunnel = function withdrawFromTunnel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.WithdrawFromTunnel, {
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

MsgClient.prototype.updateParams = function updateParams(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateParams, {
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

