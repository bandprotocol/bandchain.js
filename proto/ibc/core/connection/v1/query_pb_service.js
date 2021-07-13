// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/query.proto

var ibc_core_connection_v1_query_pb = require("../../../../ibc/core/connection/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "ibc.core.connection.v1.Query";
  return Query;
}());

Query.Connection = {
  methodName: "Connection",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
  responseType: ibc_core_connection_v1_query_pb.QueryConnectionResponse
};

Query.Connections = {
  methodName: "Connections",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
  responseType: ibc_core_connection_v1_query_pb.QueryConnectionsResponse
};

Query.ClientConnections = {
  methodName: "ClientConnections",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
  responseType: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse
};

Query.ConnectionClientState = {
  methodName: "ConnectionClientState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
  responseType: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse
};

Query.ConnectionConsensusState = {
  methodName: "ConnectionConsensusState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
  responseType: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.connection = function connection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Connection, {
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

QueryClient.prototype.connections = function connections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Connections, {
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

QueryClient.prototype.clientConnections = function clientConnections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ClientConnections, {
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

QueryClient.prototype.connectionClientState = function connectionClientState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ConnectionClientState, {
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

QueryClient.prototype.connectionConsensusState = function connectionConsensusState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ConnectionConsensusState, {
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

