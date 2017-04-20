# QelloApi.SubassetsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSubAssets**](SubassetsApi.md#getSubAssets) | **GET** /subassets/ | Get Subassets


<a name="getSubAssets"></a>
# **getSubAssets**
> ContentResult getSubAssets(token, , opts)

Get Subassets

Get Single Subbasset by Id or Multiple Subassets by filters

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.SubassetsApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56, // Number | Subasset Id
  'parentId': 56, // Number | Parent Id (The Asset Id subassets belong to)
  'limit': 56, // Number | Limit
  'offset': 56, // Number | Offset
  'classification': "classification_example", // String | Classification
  'type': "type_example", // String | Type - Audio, Video
  'tag': 56, // Number | Filter by Tag <br/> [Tag Id => Tag Value]
  'order': "order_example", // String | Order (Field to Order By)
  'orderType': "orderType_example" // String | Order Type (ASC,DESC)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubAssets(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Subasset Id | [optional] 
 **parentId** | **Number**| Parent Id (The Asset Id subassets belong to) | [optional] 
 **limit** | **Number**| Limit | [optional] 
 **offset** | **Number**| Offset | [optional] 
 **classification** | **String**| Classification | [optional] 
 **type** | **String**| Type - Audio, Video | [optional] 
 **tag** | **Number**| Filter by Tag &lt;br/&gt; [Tag Id &#x3D;&gt; Tag Value] | [optional] 
 **order** | **String**| Order (Field to Order By) | [optional] 
 **orderType** | **String**| Order Type (ASC,DESC) | [optional] 

### Return type

[**ContentResult**](ContentResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

