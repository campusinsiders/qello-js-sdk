# QelloApi.CollectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCollection**](CollectionsApi.md#addCollection) | **POST** /collections/ | Add a new collection and assets to it
[**addCollectionAsset**](CollectionsApi.md#addCollectionAsset) | **POST** /collections/assets/ | Add a new asset to collection
[**deleteCollection**](CollectionsApi.md#deleteCollection) | **DELETE** /collections/ | Delete a collection and assets that belong to it
[**deleteCollectionAsset**](CollectionsApi.md#deleteCollectionAsset) | **DELETE** /collections/assets/ | Delete an assets from a collection
[**getCollections**](CollectionsApi.md#getCollections) | **GET** /collections/ | Get collections


<a name="addCollection"></a>
# **addCollection**
> CollectionsResult addCollection(token, type, opts)

Add a new collection and assets to it

Creates a new collection and adds assets to it. Collections can be predefined types (WatchLater, Favorites) or a Custom type with user defined name

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.CollectionsApi();

var token = "token_example"; // String | Token

var type = "WatchLater"; // String | Collection Type - WatchLater, Favorites or Custom

var opts = { 
  'name': "name_example", // String | Collection Name if type is set to 'Custom'
  'assets0': 56, // Number | Asset Id
  'assets1': 56 // Number | Asset Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCollection(token, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **type** | **String**| Collection Type - WatchLater, Favorites or Custom | [default to WatchLater]
 **name** | **String**| Collection Name if type is set to &#39;Custom&#39; | [optional] 
 **assets0** | **Number**| Asset Id | [optional] 
 **assets1** | **Number**| Asset Id | [optional] 

### Return type

[**CollectionsResult**](CollectionsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addCollectionAsset"></a>
# **addCollectionAsset**
> CollectionAssetResult addCollectionAsset(token, type, opts)

Add a new asset to collection

Add a new asset to a collection

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.CollectionsApi();

var token = "token_example"; // String | Token

var type = "WatchLater"; // String | Collection Type - WatchLater, Favorites or Custom

var opts = { 
  'collectionId': 56, // Number | Collection Id if type is set to 'Custom'
  'assetId': 56 // Number | Asset Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCollectionAsset(token, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **type** | **String**| Collection Type - WatchLater, Favorites or Custom | [default to WatchLater]
 **collectionId** | **Number**| Collection Id if type is set to &#39;Custom&#39; | [optional] 
 **assetId** | **Number**| Asset Id | [optional] 

### Return type

[**CollectionAssetResult**](CollectionAssetResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCollection"></a>
# **deleteCollection**
> Status deleteCollection(token, , opts)

Delete a collection and assets that belong to it

Delete a collection and all the assets in it.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.CollectionsApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56 // Number | Collection Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCollection(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Collection Id | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCollectionAsset"></a>
# **deleteCollectionAsset**
> Status deleteCollectionAsset(token, type, opts)

Delete an assets from a collection

Delete an assets from a collection.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.CollectionsApi();

var token = "token_example"; // String | Token

var type = "WatchLater"; // String | Collection Type - WatchLater, Favorites or Custom

var opts = { 
  'collectionId': 56, // Number | Collection Id if type is set to 'Custom'
  'assetId': 56 // Number | Asset Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCollectionAsset(token, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **type** | **String**| Collection Type - WatchLater, Favorites or Custom | [default to WatchLater]
 **collectionId** | **Number**| Collection Id if type is set to &#39;Custom&#39; | [optional] 
 **assetId** | **Number**| Asset Id | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCollections"></a>
# **getCollections**
> CollectionsResult getCollections(token, , opts)

Get collections

Get collections

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.CollectionsApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56 // Number | Collection Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCollections(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Collection Id | [optional] 

### Return type

[**CollectionsResult**](CollectionsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

