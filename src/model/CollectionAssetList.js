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
    define(['ApiClient', 'model/CollectionAsset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CollectionAsset'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.CollectionAssetList = factory(root.QelloApi.ApiClient, root.QelloApi.CollectionAsset);
  }
}(this, function(ApiClient, CollectionAsset) {
  'use strict';




  /**
   * The CollectionAssetList model module.
   * @module model/CollectionAssetList
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>CollectionAssetList</code>.
   * @alias module:model/CollectionAssetList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CollectionAssetList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CollectionAssetList} obj Optional instance to populate.
   * @return {module:model/CollectionAssetList} The populated <code>CollectionAssetList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assets')) {
        obj['assets'] = ApiClient.convertToType(data['assets'], [CollectionAsset]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CollectionAsset>} assets
   */
  exports.prototype['assets'] = undefined;



  return exports;
}));

