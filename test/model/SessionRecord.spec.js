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
    instance = new QelloApi.SessionRecord();
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

  describe('SessionRecord', function() {
    it('should create an instance of SessionRecord', function() {
      // uncomment below and update the code to test SessionRecord
      //var instane = new QelloApi.SessionRecord();
      //expect(instance).to.be.a(QelloApi.SessionRecord);
    });

    it('should have the property session (base name: "session")', function() {
      // uncomment below and update the code to test the property session
      //var instane = new QelloApi.SessionRecord();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new QelloApi.SessionRecord();
      //expect(instance).to.be();
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instane = new QelloApi.SessionRecord();
      //expect(instance).to.be();
    });

    it('should have the property device (base name: "device")', function() {
      // uncomment below and update the code to test the property device
      //var instane = new QelloApi.SessionRecord();
      //expect(instance).to.be();
    });

    it('should have the property subscription (base name: "subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instane = new QelloApi.SessionRecord();
      //expect(instance).to.be();
    });

  });

}));