// package: cosmos.staking.v1beta1
// file: cosmos/staking/v1beta1/tx.proto

var cosmos_staking_v1beta1_tx_pb = require("../../../cosmos/staking/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "cosmos.staking.v1beta1.Msg";
  return Msg;
}());

Msg.CreateValidator = {
  methodName: "CreateValidator",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
  responseType: cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse
};

Msg.EditValidator = {
  methodName: "EditValidator",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
  responseType: cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse
};

Msg.Delegate = {
  methodName: "Delegate",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_tx_pb.MsgDelegate,
  responseType: cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse
};

Msg.BeginRedelegate = {
  methodName: "BeginRedelegate",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
  responseType: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse
};

Msg.Undelegate = {
  methodName: "Undelegate",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
  responseType: cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.createValidator = function createValidator(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateValidator, {
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

MsgClient.prototype.editValidator = function editValidator(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.EditValidator, {
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

MsgClient.prototype.delegate = function delegate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Delegate, {
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

MsgClient.prototype.beginRedelegate = function beginRedelegate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.BeginRedelegate, {
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

MsgClient.prototype.undelegate = function undelegate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Undelegate, {
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

