// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/query.proto

var cosmos_nft_v1beta1_query_pb = require("../../../cosmos/nft/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "cosmos.nft.v1beta1.Query";
  return Query;
}());

Query.Balance = {
  methodName: "Balance",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest,
  responseType: cosmos_nft_v1beta1_query_pb.QueryBalanceResponse
};

Query.Owner = {
  methodName: "Owner",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest,
  responseType: cosmos_nft_v1beta1_query_pb.QueryOwnerResponse
};

Query.Supply = {
  methodName: "Supply",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest,
  responseType: cosmos_nft_v1beta1_query_pb.QuerySupplyResponse
};

Query.NFTs = {
  methodName: "NFTs",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest,
  responseType: cosmos_nft_v1beta1_query_pb.QueryNFTsResponse
};

Query.NFT = {
  methodName: "NFT",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_nft_v1beta1_query_pb.QueryNFTRequest,
  responseType: cosmos_nft_v1beta1_query_pb.QueryNFTResponse
};

Query.Class = {
  methodName: "Class",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_nft_v1beta1_query_pb.QueryClassRequest,
  responseType: cosmos_nft_v1beta1_query_pb.QueryClassResponse
};

Query.Classes = {
  methodName: "Classes",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_nft_v1beta1_query_pb.QueryClassesRequest,
  responseType: cosmos_nft_v1beta1_query_pb.QueryClassesResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.balance = function balance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Balance, {
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

QueryClient.prototype.owner = function owner(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Owner, {
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

QueryClient.prototype.supply = function supply(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Supply, {
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

QueryClient.prototype.nFTs = function nFTs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.NFTs, {
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

QueryClient.prototype.nFT = function nFT(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.NFT, {
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

QueryClient.prototype.class = function pb_class(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Class, {
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

QueryClient.prototype.classes = function classes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Classes, {
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

