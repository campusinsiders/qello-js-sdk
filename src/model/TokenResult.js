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
    define(['ApiClient', 'model/Status', 'model/Token'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Status'), require('./Token'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.TokenResult = factory(root.QelloApi.ApiClient, root.QelloApi.Status, root.QelloApi.Token);
  }
}(this, function(ApiClient, Status, Token) {
  'use strict';




  /**
   * The TokenResult model module.
   * @module model/TokenResult
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>TokenResult</code>.
   * @alias module:model/TokenResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TokenResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenResult} obj Optional instance to populate.
   * @return {module:model/TokenResult} The populated <code>TokenResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = Status.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = Token.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Status} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Token} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


