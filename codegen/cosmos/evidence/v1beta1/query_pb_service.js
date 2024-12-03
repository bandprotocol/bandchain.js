// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/query.proto

var cosmos_evidence_v1beta1_query_pb = require("../../../cosmos/evidence/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.evidence.v1beta1.Query";
  return Query;
}());

Query.Evidence = {
  methodName: "Evidence",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
  responseType: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse
};

Query.AllEvidence = {
  methodName: "AllEvidence",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
  responseType: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.evidence = function evidence(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Evidence, {
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

QueryClient.prototype.allEvidence = function allEvidence(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AllEvidence, {
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

