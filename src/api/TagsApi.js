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
    define(['ApiClient', 'model/TagsResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TagsResult'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.TagsApi = factory(root.QelloApi.ApiClient, root.QelloApi.TagsResult);
  }
}(this, function(ApiClient, TagsResult) {
  'use strict';

  /**
   * Tags service.
   * @module api/TagsApi
   * @version 1.1.4
   */

  /**
   * Constructs a new TagsApi. 
   * @alias module:api/TagsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTags operation.
     * @callback module:api/TagsApi~getTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TagsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tags
     * Get tags
     * @param {String} token Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id Tag Id
     * @param {String} opts.name Name
     * @param {Number} opts.level Tag Level (0 for parents or 1 for children)
     * @param {module:api/TagsApi~getTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagsResult}
     */
    this.getTags = function(token, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling getTags");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'id': opts['id'],
        'name': opts['name'],
        'level': opts['level']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/api+json', 'application/api+xml', 'application/api+jsonp'];
      var returnType = TagsResult;

      return this.apiClient.callApi(
        '/tags/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));