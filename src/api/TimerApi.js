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
    define(['ApiClient', 'model/TimerResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TimerResult'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.TimerApi = factory(root.QelloApi.ApiClient, root.QelloApi.TimerResult);
  }
}(this, function(ApiClient, TimerResult) {
  'use strict';

  /**
   * Timer service.
   * @module api/TimerApi
   * @version 1.1.4
   */

  /**
   * Constructs a new TimerApi. 
   * @alias module:api/TimerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteTimer operation.
     * @callback module:api/TimerApi~deleteTimerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimerResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes Timer
     * Deletes a Profile Timer.
     * @param {String} token Token
     * @param {Number} profileId Profile Id
     * @param {module:api/TimerApi~deleteTimerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimerResult}
     */
    this.deleteTimer = function(token, profileId, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling deleteTimer");
      }

      // verify the required parameter 'profileId' is set
      if (profileId == undefined || profileId == null) {
        throw new Error("Missing the required parameter 'profileId' when calling deleteTimer");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token
      };
      var headerParams = {
      };
      var formParams = {
        'profile_id': profileId
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/api+json', 'application/api+xml', 'application/api+jsonp'];
      var returnType = TimerResult;

      return this.apiClient.callApi(
        '/timer/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTimer operation.
     * @callback module:api/TimerApi~getTimerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimerResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Timer
     * Gets a Profile Timer. Users has to specify a Profile Id. Profiles can get their own timer only.
     * @param {String} token Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.profileId Profile Id (if used as User)
     * @param {module:api/TimerApi~getTimerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimerResult}
     */
    this.getTimer = function(token, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling getTimer");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'profile_id': opts['profileId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/api+json', 'application/api+xml', 'application/api+jsonp'];
      var returnType = TimerResult;

      return this.apiClient.callApi(
        '/timer/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTimer operation.
     * @callback module:api/TimerApi~updateTimerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimerResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Timer
     * Updates a Profile Timer or Creates it if missing for Users. Profiles can only Update a timer with current time value.
     * @param {String} token Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.profileId Profile Id (The Child Profile the timer is set for.)
     * @param {Number} opts.value Timer Value (in seconds)
     * @param {Number} opts.currentValue Timer Current Value (in seconds)
     * @param {Number} opts.period Validity Period (in seconds)
     * @param {String} opts.status 
     * @param {module:api/TimerApi~updateTimerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimerResult}
     */
    this.updateTimer = function(token, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw new Error("Missing the required parameter 'token' when calling updateTimer");
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token
      };
      var headerParams = {
      };
      var formParams = {
        'profile_id': opts['profileId'],
        'value': opts['value'],
        'current_value': opts['currentValue'],
        'period': opts['period'],
        'status': opts['status']
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/api+json', 'application/api+xml', 'application/api+jsonp'];
      var returnType = TimerResult;

      return this.apiClient.callApi(
        '/timer/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
