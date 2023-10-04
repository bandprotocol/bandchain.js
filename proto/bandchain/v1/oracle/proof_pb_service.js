// package: bandchain.v1.oracle
// file: bandchain/v1/oracle/proof.proto

var bandchain_v1_oracle_proof_pb = require("../../../bandchain/v1/oracle/proof_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Service = (function () {
  function Service() {}
  Service.serviceName = "bandchain.v1.oracle.Service";
  return Service;
}());

Service.Proof = {
  methodName: "Proof",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: bandchain_v1_oracle_proof_pb.QueryProofRequest,
  responseType: bandchain_v1_oracle_proof_pb.QueryProofResponse
};

Service.MultiProof = {
  methodName: "MultiProof",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: bandchain_v1_oracle_proof_pb.QueryMultiProofRequest,
  responseType: bandchain_v1_oracle_proof_pb.QueryMultiProofResponse
};

Service.RequestCountProof = {
  methodName: "RequestCountProof",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: bandchain_v1_oracle_proof_pb.QueryRequestCountProofRequest,
  responseType: bandchain_v1_oracle_proof_pb.QueryRequestCountProofResponse
};

exports.Service = Service;

function ServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceClient.prototype.proof = function proof(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.Proof, {
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

ServiceClient.prototype.multiProof = function multiProof(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.MultiProof, {
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

ServiceClient.prototype.requestCountProof = function requestCountProof(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.RequestCountProof, {
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

exports.ServiceClient = ServiceClient;

