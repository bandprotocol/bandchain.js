// package: band.base.oracle.v1
// file: band/base/oracle/v1/proof.proto

var band_base_oracle_v1_proof_pb = require("../../../../band/base/oracle/v1/proof_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Service = (function () {
  function Service() {}
  Service.serviceName = "band.base.oracle.v1.Service";
  return Service;
}());

Service.Proof = {
  methodName: "Proof",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: band_base_oracle_v1_proof_pb.ProofRequest,
  responseType: band_base_oracle_v1_proof_pb.ProofResponse
};

Service.MultiProof = {
  methodName: "MultiProof",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: band_base_oracle_v1_proof_pb.MultiProofRequest,
  responseType: band_base_oracle_v1_proof_pb.MultiProofResponse
};

Service.RequestCountProof = {
  methodName: "RequestCountProof",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: band_base_oracle_v1_proof_pb.RequestCountProofRequest,
  responseType: band_base_oracle_v1_proof_pb.RequestCountProofResponse
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

