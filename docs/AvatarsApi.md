# QelloApi.AvatarsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAvatars**](AvatarsApi.md#getAvatars) | **GET** /avatars/ | Get Avatars


<a name="getAvatars"></a>
# **getAvatars**
> AvatarsResult getAvatars(token, , opts)

Get Avatars

Get Avatars List

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.AvatarsApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56 // Number | Avatar Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAvatars(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Avatar Id | [optional] 

### Return type

[**AvatarsResult**](AvatarsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

