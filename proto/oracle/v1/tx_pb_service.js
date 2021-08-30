// package: oracle.v1
// file: oracle/v1/tx.proto

var oracle_v1_tx_pb = require("../../oracle/v1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "oracle.v1.Msg";
  return Msg;
}());

Msg.RequestData = {
  methodName: "RequestData",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: oracle_v1_tx_pb.MsgRequestData,
  responseType: oracle_v1_tx_pb.MsgRequestDataResponse
};

Msg.ReportData = {
  methodName: "ReportData",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: oracle_v1_tx_pb.MsgReportData,
  responseType: oracle_v1_tx_pb.MsgReportDataResponse
};

Msg.CreateDataSource = {
  methodName: "CreateDataSource",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: oracle_v1_tx_pb.MsgCreateDataSource,
  responseType: oracle_v1_tx_pb.MsgCreateDataSourceResponse
};

Msg.EditDataSource = {
  methodName: "EditDataSource",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: oracle_v1_tx_pb.MsgEditDataSource,
  responseType: oracle_v1_tx_pb.MsgEditDataSourceResponse
};

Msg.CreateOracleScript = {
  methodName: "CreateOracleScript",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: oracle_v1_tx_pb.MsgCreateOracleScript,
  responseType: oracle_v1_tx_pb.MsgCreateOracleScriptResponse
};

Msg.EditOracleScript = {
  methodName: "EditOracleScript",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: oracle_v1_tx_pb.MsgEditOracleScript,
  responseType: oracle_v1_tx_pb.MsgEditOracleScriptResponse
};

Msg.Activate = {
  methodName: "Activate",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: oracle_v1_tx_pb.MsgActivate,
  responseType: oracle_v1_tx_pb.MsgActivateResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.requestData = function requestData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RequestData, {
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

MsgClient.prototype.reportData = function reportData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ReportData, {
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

MsgClient.prototype.createDataSource = function createDataSource(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateDataSource, {
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

MsgClient.prototype.editDataSource = function editDataSource(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.EditDataSource, {
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

MsgClient.prototype.createOracleScript = function createOracleScript(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateOracleScript, {
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

MsgClient.prototype.editOracleScript = function editOracleScript(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.EditOracleScript, {
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

exports.MsgClient = MsgClient;

