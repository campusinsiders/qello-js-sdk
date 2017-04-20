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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.ProfileTokenObject = factory(root.QelloApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProfileTokenObject model module.
   * @module model/ProfileTokenObject
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>ProfileTokenObject</code>.
   * @alias module:model/ProfileTokenObject
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ProfileTokenObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileTokenObject} obj Optional instance to populate.
   * @return {module:model/ProfileTokenObject} The populated <code>ProfileTokenObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('profile_token')) {
        obj['profile_token'] = ApiClient.convertToType(data['profile_token'], 'String');
      }
      if (data.hasOwnProperty('profile_id')) {
        obj['profile_id'] = ApiClient.convertToType(data['profile_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} profile_token
   */
  exports.prototype['profile_token'] = undefined;
  /**
   * @member {Number} profile_id
   */
  exports.prototype['profile_id'] = undefined;



  return exports;
}));


