# QelloApi.LiveeventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLiveEvents**](LiveeventsApi.md#getLiveEvents) | **GET** /liveevents/ | Get Live Events


<a name="getLiveEvents"></a>
# **getLiveEvents**
> ContentResult getLiveEvents(token, , opts)

Get Live Events

Get Live Events

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.LiveeventsApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56, // Number | Live Event Id
  'limit': 56, // Number | Limit
  'offset': 56, // Number | Offset
  'order': "order_example", // String | Order (Field to Order By)
  'tag': 56, // Number | Filter by Tag [Tag Id => Tag Value]
  'dateFrom': 56, // Number | Live Event Date From (Timestamp)
  'dateTo': 56 // Number | Live Event Date To (Timestamp)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLiveEvents(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Live Event Id | [optional] 
 **limit** | **Number**| Limit | [optional] 
 **offset** | **Number**| Offset | [optional] 
 **order** | **String**| Order (Field to Order By) | [optional] 
 **tag** | **Number**| Filter by Tag [Tag Id &#x3D;&gt; Tag Value] | [optional] 
 **dateFrom** | **Number**| Live Event Date From (Timestamp) | [optional] 
 **dateTo** | **Number**| Live Event Date To (Timestamp) | [optional] 

### Return type

[**ContentResult**](ContentResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

