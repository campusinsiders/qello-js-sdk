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
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.QelloApi) {
      root.QelloApi = {};
    }
    root.QelloApi.UserObject = factory(root.QelloApi.ApiClient, root.QelloApi.User);
  }
}(this, function(ApiClient, User) {
  'use strict';




  /**
   * The UserObject model module.
   * @module model/UserObject
   * @version 1.1.4
   */

  /**
   * Constructs a new <code>UserObject</code>.
   * @alias module:model/UserObject
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UserObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserObject} obj Optional instance to populate.
   * @return {module:model/UserObject} The populated <code>UserObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('refresh_key')) {
        obj['refresh_key'] = ApiClient.convertToType(data['refresh_key'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * Refresh Token
   * @member {String} refresh_key
   */
  exports.prototype['refresh_key'] = undefined;
  /**
   * Role
   * @member {String} role
   */
  exports.prototype['role'] = undefined;



  return exports;
}));


