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
    define(['ApiClient', 'model/Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Status'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.StatsList = factory(root.QelloApi.ApiClient, root.QelloApi.Status);
  }
}(this, function(ApiClient, Status) {
  'use strict';




  /**
   * The StatsList model module.
   * @module model/StatsList
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>StatsList</code>.
   * @alias module:model/StatsList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>StatsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatsList} obj Optional instance to populate.
   * @return {module:model/StatsList} The populated <code>StatsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stats')) {
        obj['stats'] = Status.constructFromObject(data['stats']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Status} stats
   */
  exports.prototype['stats'] = undefined;



  return exports;
}));


