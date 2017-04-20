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
    define(['ApiClient', 'model/Asset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Asset'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.SpotlightRow = factory(root.QelloApi.ApiClient, root.QelloApi.Asset);
  }
}(this, function(ApiClient, Asset) {
  'use strict';




  /**
   * The SpotlightRow model module.
   * @module model/SpotlightRow
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>SpotlightRow</code>.
   * @alias module:model/SpotlightRow
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SpotlightRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpotlightRow} obj Optional instance to populate.
   * @return {module:model/SpotlightRow} The populated <code>SpotlightRow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('subtype')) {
        obj['subtype'] = ApiClient.convertToType(data['subtype'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = Asset.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * Type of Spotlight Record
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Subtype of Spotlight Record
   * @member {String} subtype
   */
  exports.prototype['subtype'] = undefined;
  /**
   * Title of the Spotlight Row
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Asset} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));

