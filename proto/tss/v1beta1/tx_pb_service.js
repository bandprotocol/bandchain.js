// package: tss.v1beta1
// file: tss/v1beta1/tx.proto

var tss_v1beta1_tx_pb = require("../../tss/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "tss.v1beta1.Msg";
  return Msg;
}());

Msg.CreateGroup = {
  methodName: "CreateGroup",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgCreateGroup,
  responseType: tss_v1beta1_tx_pb.MsgCreateGroupResponse
};

Msg.ReplaceGroup = {
  methodName: "ReplaceGroup",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgReplaceGroup,
  responseType: tss_v1beta1_tx_pb.MsgReplaceGroupResponse
};

Msg.UpdateGroupFee = {
  methodName: "UpdateGroupFee",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgUpdateGroupFee,
  responseType: tss_v1beta1_tx_pb.MsgUpdateGroupFeeResponse
};

Msg.SubmitDKGRound1 = {
  methodName: "SubmitDKGRound1",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgSubmitDKGRound1,
  responseType: tss_v1beta1_tx_pb.MsgSubmitDKGRound1Response
};

Msg.SubmitDKGRound2 = {
  methodName: "SubmitDKGRound2",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgSubmitDKGRound2,
  responseType: tss_v1beta1_tx_pb.MsgSubmitDKGRound2Response
};

Msg.Complain = {
  methodName: "Complain",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgComplain,
  responseType: tss_v1beta1_tx_pb.MsgComplainResponse
};

Msg.Confirm = {
  methodName: "Confirm",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgConfirm,
  responseType: tss_v1beta1_tx_pb.MsgConfirmResponse
};

Msg.SubmitDEs = {
  methodName: "SubmitDEs",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgSubmitDEs,
  responseType: tss_v1beta1_tx_pb.MsgSubmitDEsResponse
};

Msg.RequestSignature = {
  methodName: "RequestSignature",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgRequestSignature,
  responseType: tss_v1beta1_tx_pb.MsgRequestSignatureResponse
};

Msg.SubmitSignature = {
  methodName: "SubmitSignature",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgSubmitSignature,
  responseType: tss_v1beta1_tx_pb.MsgSubmitSignatureResponse
};

Msg.Activate = {
  methodName: "Activate",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgActivate,
  responseType: tss_v1beta1_tx_pb.MsgActivateResponse
};

Msg.Active = {
  methodName: "Active",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgActive,
  responseType: tss_v1beta1_tx_pb.MsgActiveResponse
};

Msg.UpdateParams = {
  methodName: "UpdateParams",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: tss_v1beta1_tx_pb.MsgUpdateParams,
  responseType: tss_v1beta1_tx_pb.MsgUpdateParamsResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.createGroup = function createGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateGroup, {
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

MsgClient.prototype.replaceGroup = function replaceGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ReplaceGroup, {
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

MsgClient.prototype.updateGroupFee = function updateGroupFee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.UpdateGroupFee, {
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

MsgClient.prototype.active = function active(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Active, {
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

