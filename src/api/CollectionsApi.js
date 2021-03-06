/**
 * Qello API
 * REST API <!-- <br/> <br/> <a href='#' id='' onclick='showRestJSONObjectsHttpAPI();'>Qello API (JSON Requests)</a> -->
 *
 * OpenAPI spec version: 1.1.4
 * Contact: contact@qello.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CollectionAssetResult', 'model/CollectionsResult', 'model/Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CollectionAssetResult'), require('../model/CollectionsResult'), require('../model/Status'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.CollectionsApi = factory(root.QelloApi.ApiClient, root.QelloApi.CollectionAssetResult, root.QelloApi.CollectionsResult, root.QelloApi.Status);
  }
}(this, function(ApiClient, CollectionAssetResult, CollectionsResult, Status) {
  'use strict';

  /**
   * Collections service.
   * @module api/CollectionsApi
   * @version 1.1.4
   */

  /**
   * Constructs a new CollectionsApi. 
   * @alias module:api/CollectionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCollection operation.
     * @callback module:api/CollectionsApi~addCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CollectionsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new collection and assets to it
     * Creates a new collection and adds assets to it. Collections can be predefined types (WatchLater, Favorites) or a Custom type with user defined name
     * @param {String} token Token
     * @param {String} type Collection Type - WatchLater, Favorites or Custom
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Collection Name if type is set to &#39;Custom&#39;
     * @param {Number} opts.assets0 Asset Id
     * @param {Number} opts.assets1 Asset Id
     * @param {module:api/CollectionsApi~addCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CollectionsResult}
     */
    this.addCollection = function(token, type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling addCollection");
      }

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw new Error("Missing the required parameter 'type' when calling addCollection");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token
      };
      var headerParams = {
      };
      var formParams = {
        'type': type,
        'name': opts['name'],
        'assets[0]': opts['assets0'],
        'assets[1]': opts['assets1']
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = CollectionsResult;

      return this.apiClient.callApi(
        '/collections/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCollectionAsset operation.
     * @callback module:api/CollectionsApi~addCollectionAssetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CollectionAssetResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new asset to collection
     * Add a new asset to a collection
     * @param {String} token Token
     * @param {String} type Collection Type - WatchLater, Favorites or Custom
     * @param {Object} opts Optional parameters
     * @param {Number} opts.collectionId Collection Id if type is set to &#39;Custom&#39;
     * @param {Number} opts.assetId Asset Id
     * @param {module:api/CollectionsApi~addCollectionAssetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CollectionAssetResult}
     */
    this.addCollectionAsset = function(token, type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling addCollectionAsset");
      }

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw new Error("Missing the required parameter 'type' when calling addCollectionAsset");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token
      };
      var headerParams = {
      };
      var formParams = {
        'type': type,
        'collection_id': opts['collectionId'],
        'asset_id': opts['assetId']
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = CollectionAssetResult;

      return this.apiClient.callApi(
        '/collections/assets/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCollection operation.
     * @callback module:api/CollectionsApi~deleteCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a collection and assets that belong to it
     * Delete a collection and all the assets in it.
     * @param {String} token Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id Collection Id
     * @param {module:api/CollectionsApi~deleteCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    this.deleteCollection = function(token, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling deleteCollection");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'id': opts['id']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Status;

      return this.apiClient.callApi(
        '/collections/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCollectionAsset operation.
     * @callback module:api/CollectionsApi~deleteCollectionAssetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an assets from a collection
     * Delete an assets from a collection.
     * @param {String} token Token
     * @param {String} type Collection Type - WatchLater, Favorites or Custom
     * @param {Object} opts Optional parameters
     * @param {Number} opts.collectionId Collection Id if type is set to &#39;Custom&#39;
     * @param {Number} opts.assetId Asset Id
     * @param {module:api/CollectionsApi~deleteCollectionAssetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    this.deleteCollectionAsset = function(token, type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling deleteCollectionAsset");
      }

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw new Error("Missing the required parameter 'type' when calling deleteCollectionAsset");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'type': type,
        'collection_id': opts['collectionId'],
        'asset_id': opts['assetId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Status;

      return this.apiClient.callApi(
        '/collections/assets/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCollections operation.
     * @callback module:api/CollectionsApi~getCollectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CollectionsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get collections
     * Get collections
     * @param {String} token Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id Collection Id
     * @param {module:api/CollectionsApi~getCollectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CollectionsResult}
     */
    this.getCollections = function(token, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling getCollections");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'id': opts['id']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = CollectionsResult;

      return this.apiClient.callApi(
        '/collections/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
