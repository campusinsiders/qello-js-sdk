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
    instance = new QelloApi.AssetSearchItem();
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

  describe('AssetSearchItem', function() {
    it('should create an instance of AssetSearchItem', function() {
      // uncomment below and update the code to test AssetSearchItem
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be.a(QelloApi.AssetSearchItem);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property mediaId (base name: "media_id")', function() {
      // uncomment below and update the code to test the property mediaId
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property classification (base name: "classification")', function() {
      // uncomment below and update the code to test the property classification
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property published (base name: "published")', function() {
      // uncomment below and update the code to test the property published
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instane = new QelloApi.AssetSearchItem();
      //expect(instance).to.be();
    });

  });

}));
