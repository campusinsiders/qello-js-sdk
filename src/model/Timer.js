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
    root.QelloApi.Timer = factory(root.QelloApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Timer model module.
   * @module model/Timer
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>Timer</code>.
   * @alias module:model/Timer
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Timer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Timer} obj Optional instance to populate.
   * @return {module:model/Timer} The populated <code>Timer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('current_value')) {
        obj['current_value'] = ApiClient.convertToType(data['current_value'], 'Number');
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'Number');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'String');
      }
      if (data.hasOwnProperty('value_timestamp')) {
        obj['value_timestamp'] = ApiClient.convertToType(data['value_timestamp'], 'Number');
      }
      if (data.hasOwnProperty('current_value_timestamp')) {
        obj['current_value_timestamp'] = ApiClient.convertToType(data['current_value_timestamp'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Total Timer Time (in seconds)
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Current Timer Time (in seconds)
   * @member {Number} current_value
   */
  exports.prototype['current_value'] = undefined;
  /**
   * Timer Validity Time (in seconds)
   * @member {Number} period
   */
  exports.prototype['period'] = undefined;
  /**
   * Timer Validity Time (in seconds)
   * @member {String} active
   */
  exports.prototype['active'] = undefined;
  /**
   * Timer Creation Timestamp
   * @member {Number} value_timestamp
   */
  exports.prototype['value_timestamp'] = undefined;
  /**
   * Timer Current Value Timestamp
   * @member {Number} current_value_timestamp
   */
  exports.prototype['current_value_timestamp'] = undefined;



  return exports;
}));

