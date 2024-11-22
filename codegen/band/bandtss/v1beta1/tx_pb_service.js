// package: band.bandtss.v1beta1
// file: band/bandtss/v1beta1/tx.proto

var band_bandtss_v1beta1_tx_pb = require("../../../band/bandtss/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "band.bandtss.v1beta1.Msg";
  return Msg;
}());

Msg.RequestSignature = {
  methodName: "RequestSignature",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_bandtss_v1beta1_tx_pb.MsgRequestSignature,
  responseType: band_bandtss_v1beta1_tx_pb.MsgRequestSignatureResponse
};

Msg.Activate = {
  methodName: "Activate",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_bandtss_v1beta1_tx_pb.MsgActivate,
  responseType: band_bandtss_v1beta1_tx_pb.MsgActivateResponse
};

Msg.UpdateParams = {
  methodName: "UpdateParams",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_bandtss_v1beta1_tx_pb.MsgUpdateParams,
  responseType: band_bandtss_v1beta1_tx_pb.MsgUpdateParamsResponse
};

Msg.TransitionGroup = {
  methodName: "TransitionGroup",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_bandtss_v1beta1_tx_pb.MsgTransitionGroup,
  responseType: band_bandtss_v1beta1_tx_pb.MsgTransitionGroupResponse
};

Msg.ForceTransitionGroup = {
  methodName: "ForceTransitionGroup",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_bandtss_v1beta1_tx_pb.MsgForceTransitionGroup,
  responseType: band_bandtss_v1beta1_tx_pb.MsgForceTransitionGroupResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.requestSignature = function requestSignature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RequestSignature, {
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

MsgClient.prototype.transitionGroup = function transitionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.TransitionGroup, {
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

MsgClient.prototype.forceTransitionGroup = function forceTransitionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ForceTransitionGroup, {
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

