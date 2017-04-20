# QelloApi.SessionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSession**](SessionApi.md#getSession) | **GET** /session/ | Session Information 


<a name="getSession"></a>
# **getSession**
> SessionResult getSession(token, )

Session Information 

Information about current session, expire, user, profife, device etc.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.SessionApi();

var token = "token_example"; // String | Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSession(token, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 

### Return type

[**SessionResult**](SessionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

