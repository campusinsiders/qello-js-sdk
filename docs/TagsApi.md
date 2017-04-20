# QelloApi.TagsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTags**](TagsApi.md#getTags) | **GET** /tags/ | Get tags


<a name="getTags"></a>
# **getTags**
> TagsResult getTags(token, , opts)

Get tags

Get tags

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.TagsApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56, // Number | Tag Id
  'name': "name_example", // String | Name
  'level': 56 // Number | Tag Level (0 for parents or 1 for children)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTags(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Tag Id | [optional] 
 **name** | **String**| Name | [optional] 
 **level** | **Number**| Tag Level (0 for parents or 1 for children) | [optional] 

### Return type

[**TagsResult**](TagsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

