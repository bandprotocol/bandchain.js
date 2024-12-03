// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/query.proto

var ibc_applications_fee_v1_query_pb = require("../../../../ibc/applications/fee/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "ibc.applications.fee.v1.Query";
  return Query;
}());

Query.IncentivizedPackets = {
  methodName: "IncentivizedPackets",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse
};

Query.IncentivizedPacket = {
  methodName: "IncentivizedPacket",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse
};

Query.IncentivizedPacketsForChannel = {
  methodName: "IncentivizedPacketsForChannel",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse
};

Query.TotalRecvFees = {
  methodName: "TotalRecvFees",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse
};

Query.TotalAckFees = {
  methodName: "TotalAckFees",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse
};

Query.TotalTimeoutFees = {
  methodName: "TotalTimeoutFees",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse
};

Query.Payee = {
  methodName: "Payee",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryPayeeRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryPayeeResponse
};

Query.CounterpartyPayee = {
  methodName: "CounterpartyPayee",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryCounterpartyPayeeRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryCounterpartyPayeeResponse
};

Query.FeeEnabledChannels = {
  methodName: "FeeEnabledChannels",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse
};

Query.FeeEnabledChannel = {
  methodName: "FeeEnabledChannel",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelRequest,
  responseType: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.incentivizedPackets = function incentivizedPackets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.IncentivizedPackets, {
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

QueryClient.prototype.incentivizedPacket = function incentivizedPacket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.IncentivizedPacket, {
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

QueryClient.prototype.incentivizedPacketsForChannel = function incentivizedPacketsForChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.IncentivizedPacketsForChannel, {
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

QueryClient.prototype.totalRecvFees = function totalRecvFees(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.TotalRecvFees, {
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

QueryClient.prototype.totalAckFees = function totalAckFees(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.TotalAckFees, {
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

QueryClient.prototype.totalTimeoutFees = function totalTimeoutFees(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.TotalTimeoutFees, {
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

QueryClient.prototype.payee = function payee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Payee, {
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

QueryClient.prototype.counterpartyPayee = function counterpartyPayee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.CounterpartyPayee, {
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

QueryClient.prototype.feeEnabledChannels = function feeEnabledChannels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.FeeEnabledChannels, {
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

QueryClient.prototype.feeEnabledChannel = function feeEnabledChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.FeeEnabledChannel, {
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

