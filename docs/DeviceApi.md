# QelloApi.DeviceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updatePushId**](DeviceApi.md#updatePushId) | **PUT** /device/ | Update User&#39;s Device Push Id


<a name="updatePushId"></a>
# **updatePushId**
> Status updatePushId(token, , opts)

Update User&#39;s Device Push Id

Updates the Push Id for the currently used Device

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.DeviceApi();

var token = "token_example"; // String | Token

var opts = { 
  'pushId': "pushId_example" // String | Push Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePushId(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **pushId** | **String**| Push Id | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

