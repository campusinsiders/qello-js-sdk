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
    define(['ApiClient', 'model/AssetsList', 'model/Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssetsList'), require('./Status'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.AssetsResult = factory(root.QelloApi.ApiClient, root.QelloApi.AssetsList, root.QelloApi.Status);
  }
}(this, function(ApiClient, AssetsList, Status) {
  'use strict';




  /**
   * The AssetsResult model module.
   * @module model/AssetsResult
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>AssetsResult</code>.
   * @alias module:model/AssetsResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AssetsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetsResult} obj Optional instance to populate.
   * @return {module:model/AssetsResult} The populated <code>AssetsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = Status.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = AssetsList.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Status} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/AssetsList} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


