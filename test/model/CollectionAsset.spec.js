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
    instance = new QelloApi.CollectionAsset();
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

  describe('CollectionAsset', function() {
    it('should create an instance of CollectionAsset', function() {
      // uncomment below and update the code to test CollectionAsset
      //var instane = new QelloApi.CollectionAsset();
      //expect(instance).to.be.a(QelloApi.CollectionAsset);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new QelloApi.CollectionAsset();
      //expect(instance).to.be();
    });

    it('should have the property collectionId (base name: "collection_id")', function() {
      // uncomment below and update the code to test the property collectionId
      //var instane = new QelloApi.CollectionAsset();
      //expect(instance).to.be();
    });

    it('should have the property assetId (base name: "asset_id")', function() {
      // uncomment below and update the code to test the property assetId
      //var instane = new QelloApi.CollectionAsset();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new QelloApi.CollectionAsset();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new QelloApi.CollectionAsset();
      //expect(instance).to.be();
    });

  });

}));