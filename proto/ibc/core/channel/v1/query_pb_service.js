// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/query.proto

var ibc_core_channel_v1_query_pb = require("../../../../ibc/core/channel/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "ibc.core.channel.v1.Query";
  return Query;
}());

Query.Channel = {
  methodName: "Channel",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryChannelRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryChannelResponse
};

Query.Channels = {
  methodName: "Channels",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryChannelsResponse
};

Query.ConnectionChannels = {
  methodName: "ConnectionChannels",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse
};

Query.ChannelClientState = {
  methodName: "ChannelClientState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse
};

Query.ChannelConsensusState = {
  methodName: "ChannelConsensusState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse
};

Query.PacketCommitment = {
  methodName: "PacketCommitment",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse
};

Query.PacketCommitments = {
  methodName: "PacketCommitments",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse
};

Query.PacketReceipt = {
  methodName: "PacketReceipt",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse
};

Query.PacketAcknowledgement = {
  methodName: "PacketAcknowledgement",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse
};

Query.PacketAcknowledgements = {
  methodName: "PacketAcknowledgements",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse
};

Query.UnreceivedPackets = {
  methodName: "UnreceivedPackets",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse
};

Query.UnreceivedAcks = {
  methodName: "UnreceivedAcks",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse
};

Query.NextSequenceReceive = {
  methodName: "NextSequenceReceive",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
  responseType: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.channel = function channel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Channel, {
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

QueryClient.prototype.channels = function channels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Channels, {
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

QueryClient.prototype.connectionChannels = function connectionChannels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ConnectionChannels, {
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

QueryClient.prototype.channelClientState = function channelClientState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ChannelClientState, {
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

QueryClient.prototype.channelConsensusState = function channelConsensusState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ChannelConsensusState, {
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

QueryClient.prototype.packetCommitment = function packetCommitment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.PacketCommitment, {
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

QueryClient.prototype.packetCommitments = function packetCommitments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.PacketCommitments, {
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

QueryClient.prototype.packetReceipt = function packetReceipt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.PacketReceipt, {
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

QueryClient.prototype.packetAcknowledgement = function packetAcknowledgement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.PacketAcknowledgement, {
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

QueryClient.prototype.packetAcknowledgements = function packetAcknowledgements(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.PacketAcknowledgements, {
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

QueryClient.prototype.unreceivedPackets = function unreceivedPackets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.UnreceivedPackets, {
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

QueryClient.prototype.unreceivedAcks = function unreceivedAcks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.UnreceivedAcks, {
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

QueryClient.prototype.nextSequenceReceive = function nextSequenceReceive(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.NextSequenceReceive, {
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

