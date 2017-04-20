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
    root.QelloApi.ResetUrlObject = factory(root.QelloApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResetUrlObject model module.
   * @module model/ResetUrlObject
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>ResetUrlObject</code>.
   * @alias module:model/ResetUrlObject
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ResetUrlObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResetUrlObject} obj Optional instance to populate.
   * @return {module:model/ResetUrlObject} The populated <code>ResetUrlObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reset_url')) {
        obj['reset_url'] = ApiClient.convertToType(data['reset_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} reset_url
   */
  exports.prototype['reset_url'] = undefined;



  return exports;
}));

