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
    define(['ApiClient', 'model/StatsResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StatsResult'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.StatsApi = factory(root.QelloApi.ApiClient, root.QelloApi.StatsResult);
  }
}(this, function(ApiClient, StatsResult) {
  'use strict';

  /**
   * Stats service.
   * @module api/StatsApi
   * @version 1.1.4
   */

  /**
   * Constructs a new StatsApi. 
   * @alias module:api/StatsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getStats operation.
     * @callback module:api/StatsApi~getStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Statistics about watched videos
     * Statistics about watched videos for given time period and start date.
     * @param {String} token Token
     * @param {String} range Time Range (day, week, month, year)
     * @param {String} type Type of the Report (by Show, by Tag, for a Time period). Possible values - tag, show, time
     * @param {Object} opts Optional parameters
     * @param {String} opts._date Date (YY-MM-DD for day, YY-MM for month, YY for year) or (YY-WW for weekly)
     * @param {String} opts.parentTag Parent Tag Id for type&#x3D;tag
     * @param {module:api/StatsApi~getStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatsResult}
     */
    this.getStats = function(token, range, type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling getStats");
      }

      // verify the required parameter 'range' is set
      if (range == undefined || range == null) {
        throw new Error("Missing the required parameter 'range' when calling getStats");
      }

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw new Error("Missing the required parameter 'type' when calling getStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'range': range,
        'type': type,
        'date': opts['_date'],
        'parent_tag': opts['parentTag']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/api+json', 'application/api+xml', 'application/api+jsonp'];
      var returnType = StatsResult;

      return this.apiClient.callApi(
        '/stats/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
