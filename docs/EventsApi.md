# QelloApi.EventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvents**](EventsApi.md#getEvents) | **GET** /events/ | Get List of Events


<a name="getEvents"></a>
# **getEvents**
> EventResult getEvents(token, type, opts)

Get List of Events

Get List of Events for User/Profile (example : ping)

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.EventsApi();

var token = "token_example"; // String | Token

var type = "type_example"; // String | Event Type (example 'ping')

var opts = { 
  'limit': 56, // Number | Limit
  'assetId': 56 // Number | Asset Id (for Asset related Events)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvents(token, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **type** | **String**| Event Type (example &#39;ping&#39;) | 
 **limit** | **Number**| Limit | [optional] 
 **assetId** | **Number**| Asset Id (for Asset related Events) | [optional] 

### Return type

[**EventResult**](EventResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

