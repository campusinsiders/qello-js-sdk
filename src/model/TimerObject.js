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
    define(['ApiClient', 'model/Timer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Timer'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.TimerObject = factory(root.QelloApi.ApiClient, root.QelloApi.Timer);
  }
}(this, function(ApiClient, Timer) {
  'use strict';




  /**
   * The TimerObject model module.
   * @module model/TimerObject
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>TimerObject</code>.
   * @alias module:model/TimerObject
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TimerObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimerObject} obj Optional instance to populate.
   * @return {module:model/TimerObject} The populated <code>TimerObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timer')) {
        obj['timer'] = Timer.constructFromObject(data['timer']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Timer} timer
   */
  exports.prototype['timer'] = undefined;



  return exports;
}));


