# QelloApi.ContentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContents**](ContentApi.md#getContents) | **GET** /content/ | Get Asset/Assets
[**getContentsRecommended**](ContentApi.md#getContentsRecommended) | **GET** /content/recommended/ | Get Recommended Content


<a name="getContents"></a>
# **getContents**
> ContentResult getContents(token, , opts)

Get Asset/Assets

Get Single Asset by Id or Multiple Assets by filters

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.ContentApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56, // Number | Asset Id
  'limit': 56, // Number | Limit
  'offset': 56, // Number | Offset
  'classificationGroup': "classificationGroup_example", // String | Classification Group
  'classification': "classification_example", // String | Classification
  'type': "type_example", // String | Type - Audio, Video
  'order': "order_example", // String | Order (Field to Order By)
  'orderType': "orderType_example", // String | Order Type (ASC,DESC)
  'tag': 56, // Number | Filter by Tag <br/> [Tag Id => Tag Value]
  'meta': "meta_example", // String | Filter by Meta <br/> [Meta name => Meta value]
  'collectionId': 56, // Number | Collection Id if type is set to 'Custom'
  'collectionType': "collectionType_example", // String | Collection Type <br/> (for predefined types ['Favorites', 'WatchLater'] or 'Custom')
  'children': "children_example", // String | Flag to get Children of an Asset Id. <br/> (For example : Episodes of a Season) <br/> <b>(id is required)</b>
  'siblings': "siblings_example" // String | Flag to get Siblings of an Asset Id. <br/> (For example : Other Episodes from the same Season) <br/> <b>(id is required)</b>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContents(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Asset Id | [optional] 
 **limit** | **Number**| Limit | [optional] 
 **offset** | **Number**| Offset | [optional] 
 **classificationGroup** | **String**| Classification Group | [optional] 
 **classification** | **String**| Classification | [optional] 
 **type** | **String**| Type - Audio, Video | [optional] 
 **order** | **String**| Order (Field to Order By) | [optional] 
 **orderType** | **String**| Order Type (ASC,DESC) | [optional] 
 **tag** | **Number**| Filter by Tag &lt;br/&gt; [Tag Id &#x3D;&gt; Tag Value] | [optional] 
 **meta** | **String**| Filter by Meta &lt;br/&gt; [Meta name &#x3D;&gt; Meta value] | [optional] 
 **collectionId** | **Number**| Collection Id if type is set to &#39;Custom&#39; | [optional] 
 **collectionType** | **String**| Collection Type &lt;br/&gt; (for predefined types [&#39;Favorites&#39;, &#39;WatchLater&#39;] or &#39;Custom&#39;) | [optional] 
 **children** | **String**| Flag to get Children of an Asset Id. &lt;br/&gt; (For example : Episodes of a Season) &lt;br/&gt; &lt;b&gt;(id is required)&lt;/b&gt; | [optional] 
 **siblings** | **String**| Flag to get Siblings of an Asset Id. &lt;br/&gt; (For example : Other Episodes from the same Season) &lt;br/&gt; &lt;b&gt;(id is required)&lt;/b&gt; | [optional] 

### Return type

[**ContentResult**](ContentResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="getContentsRecommended"></a>
# **getContentsRecommended**
> ContentResult getContentsRecommended(token, id, opts)

Get Recommended Content

Recommended Content

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.ContentApi();

var token = "token_example"; // String | Token

var id = 56; // Number | Asset Id

var opts = { 
  'filterId': 56 // Number | Filter Id (Asset Filter Id)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentsRecommended(token, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Asset Id | 
 **filterId** | **Number**| Filter Id (Asset Filter Id) | [optional] 

### Return type

[**ContentResult**](ContentResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

