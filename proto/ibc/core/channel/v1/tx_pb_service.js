// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/tx.proto

var ibc_core_channel_v1_tx_pb = require("../../../../ibc/core/channel/v1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "ibc.core.channel.v1.Msg";
  return Msg;
}());

Msg.ChannelOpenInit = {
  methodName: "ChannelOpenInit",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
  responseType: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse
};

Msg.ChannelOpenTry = {
  methodName: "ChannelOpenTry",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
  responseType: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse
};

Msg.ChannelOpenAck = {
  methodName: "ChannelOpenAck",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
  responseType: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse
};

Msg.ChannelOpenConfirm = {
  methodName: "ChannelOpenConfirm",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
  responseType: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse
};

Msg.ChannelCloseInit = {
  methodName: "ChannelCloseInit",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
  responseType: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse
};

Msg.ChannelCloseConfirm = {
  methodName: "ChannelCloseConfirm",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
  responseType: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse
};

Msg.RecvPacket = {
  methodName: "RecvPacket",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
  responseType: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse
};

Msg.Timeout = {
  methodName: "Timeout",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgTimeout,
  responseType: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse
};

Msg.TimeoutOnClose = {
  methodName: "TimeoutOnClose",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
  responseType: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse
};

Msg.Acknowledgement = {
  methodName: "Acknowledgement",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
  responseType: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.channelOpenInit = function channelOpenInit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ChannelOpenInit, {
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

MsgClient.prototype.channelOpenTry = function channelOpenTry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ChannelOpenTry, {
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

MsgClient.prototype.channelOpenAck = function channelOpenAck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ChannelOpenAck, {
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

MsgClient.prototype.channelOpenConfirm = function channelOpenConfirm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ChannelOpenConfirm, {
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

MsgClient.prototype.channelCloseInit = function channelCloseInit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ChannelCloseInit, {
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

MsgClient.prototype.channelCloseConfirm = function channelCloseConfirm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ChannelCloseConfirm, {
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

MsgClient.prototype.recvPacket = function recvPacket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RecvPacket, {
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

MsgClient.prototype.timeout = function timeout(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Timeout, {
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

MsgClient.prototype.timeoutOnClose = function timeoutOnClose(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.TimeoutOnClose, {
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

MsgClient.prototype.acknowledgement = function acknowledgement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Acknowledgement, {
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

