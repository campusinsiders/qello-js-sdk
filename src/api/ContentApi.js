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
    define(['ApiClient', 'model/ContentResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContentResult'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.ContentApi = factory(root.QelloApi.ApiClient, root.QelloApi.ContentResult);
  }
}(this, function(ApiClient, ContentResult) {
  'use strict';

  /**
   * Content service.
   * @module api/ContentApi
   * @version 1.1.4
   */

  /**
   * Constructs a new ContentApi. 
   * @alias module:api/ContentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getContents operation.
     * @callback module:api/ContentApi~getContentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Asset/Assets
     * Get Single Asset by Id or Multiple Assets by filters
     * @param {String} token Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id Asset Id
     * @param {Number} opts.limit Limit
     * @param {Number} opts.offset Offset
     * @param {String} opts.classificationGroup Classification Group
     * @param {String} opts.classification Classification
     * @param {String} opts.type Type - Audio, Video
     * @param {String} opts.order Order (Field to Order By)
     * @param {module:model/String} opts.orderType Order Type (ASC,DESC)
     * @param {Number} opts.tag Filter by Tag &lt;br/&gt; [Tag Id &#x3D;&gt; Tag Value]
     * @param {String} opts.meta Filter by Meta &lt;br/&gt; [Meta name &#x3D;&gt; Meta value]
     * @param {Number} opts.collectionId Collection Id if type is set to &#39;Custom&#39;
     * @param {module:model/String} opts.collectionType Collection Type &lt;br/&gt; (for predefined types [&#39;Favorites&#39;, &#39;WatchLater&#39;] or &#39;Custom&#39;)
     * @param {module:model/String} opts.children Flag to get Children of an Asset Id. &lt;br/&gt; (For example : Episodes of a Season) &lt;br/&gt; &lt;b&gt;(id is required)&lt;/b&gt;
     * @param {module:model/String} opts.siblings Flag to get Siblings of an Asset Id. &lt;br/&gt; (For example : Other Episodes from the same Season) &lt;br/&gt; &lt;b&gt;(id is required)&lt;/b&gt;
     * @param {module:api/ContentApi~getContentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentResult}
     */
    this.getContents = function(token, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling getContents");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'id': opts['id'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'classification_group': opts['classificationGroup'],
        'classification': opts['classification'],
        'type': opts['type'],
        'order': opts['order'],
        'order_type': opts['orderType'],
        'tag[]': opts['tag'],
        'meta[]': opts['meta'],
        'collection_id': opts['collectionId'],
        'collection_type': opts['collectionType'],
        'children': opts['children'],
        'siblings': opts['siblings']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/api+json', 'application/api+xml', 'application/api+jsonp'];
      var returnType = ContentResult;

      return this.apiClient.callApi(
        '/content/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContentsRecommended operation.
     * @callback module:api/ContentApi~getContentsRecommendedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recommended Content
     * Recommended Content
     * @param {String} token Token
     * @param {Number} id Asset Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterId Filter Id (Asset Filter Id)
     * @param {module:api/ContentApi~getContentsRecommendedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentResult}
     */
    this.getContentsRecommended = function(token, id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling getContentsRecommended");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getContentsRecommended");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'id': id,
        'filter_id': opts['filterId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/api+json', 'application/api+xml', 'application/api+jsonp'];
      var returnType = ContentResult;

      return this.apiClient.callApi(
        '/content/recommended/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
