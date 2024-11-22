// package: band.tss.v1beta1
// file: band/tss/v1beta1/tx.proto

var band_tss_v1beta1_tx_pb = require("../../../band/tss/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "band.tss.v1beta1.Msg";
  return Msg;
}());

Msg.SubmitDKGRound1 = {
  methodName: "SubmitDKGRound1",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound1,
  responseType: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound1Response
};

Msg.SubmitDKGRound2 = {
  methodName: "SubmitDKGRound2",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound2,
  responseType: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound2Response
};

Msg.Complain = {
  methodName: "Complain",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tss_v1beta1_tx_pb.MsgComplain,
  responseType: band_tss_v1beta1_tx_pb.MsgComplainResponse
};

Msg.Confirm = {
  methodName: "Confirm",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tss_v1beta1_tx_pb.MsgConfirm,
  responseType: band_tss_v1beta1_tx_pb.MsgConfirmResponse
};

Msg.SubmitDEs = {
  methodName: "SubmitDEs",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tss_v1beta1_tx_pb.MsgSubmitDEs,
  responseType: band_tss_v1beta1_tx_pb.MsgSubmitDEsResponse
};

Msg.SubmitSignature = {
  methodName: "SubmitSignature",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tss_v1beta1_tx_pb.MsgSubmitSignature,
  responseType: band_tss_v1beta1_tx_pb.MsgSubmitSignatureResponse
};

Msg.UpdateParams = {
  methodName: "UpdateParams",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: band_tss_v1beta1_tx_pb.MsgUpdateParams,
  responseType: band_tss_v1beta1_tx_pb.MsgUpdateParamsResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.submitDKGRound1 = function submitDKGRound1(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitDKGRound1, {
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

MsgClient.prototype.submitDKGRound2 = function submitDKGRound2(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitDKGRound2, {
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

MsgClient.prototype.complain = function complain(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Complain, {
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

MsgClient.prototype.confirm = function confirm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Confirm, {
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

MsgClient.prototype.submitDEs = function submitDEs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitDEs, {
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

MsgClient.prototype.submitSignature = function submitSignature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitSignature, {
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

