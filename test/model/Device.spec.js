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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QelloApi);
  }
}(this, function(expect, QelloApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QelloApi.Device();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Device', function() {
    it('should create an instance of Device', function() {
      // uncomment below and update the code to test Device
      //var instane = new QelloApi.Device();
      //expect(instance).to.be.a(QelloApi.Device);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new QelloApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property deviceNameId (base name: "device_name_id")', function() {
      // uncomment below and update the code to test the property deviceNameId
      //var instane = new QelloApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property pushId (base name: "push_id")', function() {
      // uncomment below and update the code to test the property pushId
      //var instane = new QelloApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "device_id")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instane = new QelloApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property isFirst (base name: "is_first")', function() {
      // uncomment below and update the code to test the property isFirst
      //var instane = new QelloApi.Device();
      //expect(instance).to.be();
    });

  });

}));
