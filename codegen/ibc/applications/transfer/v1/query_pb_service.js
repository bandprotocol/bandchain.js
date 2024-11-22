// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/query.proto

var ibc_applications_transfer_v1_query_pb = require("../../../../ibc/applications/transfer/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "ibc.applications.transfer.v1.Query";
  return Query;
}());

Query.DenomTraces = {
  methodName: "DenomTraces",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
  responseType: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse
};

Query.DenomTrace = {
  methodName: "DenomTrace",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
  responseType: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse
};

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
  responseType: ibc_applications_transfer_v1_query_pb.QueryParamsResponse
};

Query.DenomHash = {
  methodName: "DenomHash",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest,
  responseType: ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse
};

Query.EscrowAddress = {
  methodName: "EscrowAddress",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest,
  responseType: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse
};

Query.TotalEscrowForDenom = {
  methodName: "TotalEscrowForDenom",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest,
  responseType: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.denomTraces = function denomTraces(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DenomTraces, {
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

QueryClient.prototype.denomTrace = function denomTrace(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DenomTrace, {
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

QueryClient.prototype.denomHash = function denomHash(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DenomHash, {
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

QueryClient.prototype.escrowAddress = function escrowAddress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.EscrowAddress, {
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

QueryClient.prototype.totalEscrowForDenom = function totalEscrowForDenom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.TotalEscrowForDenom, {
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

