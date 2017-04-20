# QelloApi.ScheduleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schedule**](ScheduleApi.md#schedule) | **GET** /schedule/ | Program Schedule for Channels


<a name="schedule"></a>
# **schedule**
> schedule(token, , opts)

Program Schedule for Channels

Program Schedule for Channels

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.ScheduleApi();

var token = "token_example"; // String | Token

var opts = { 
  'channelId': 56, // Number | Channel Id
  'visible': 56, // Number | visible
  'startTime': "startTime_example", // String | Start Time
  'interval': 600 // Number | Interval
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.schedule(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **channelId** | **Number**| Channel Id | [optional] 
 **visible** | **Number**| visible | [optional] 
 **startTime** | **String**| Start Time | [optional] 
 **interval** | **Number**| Interval | [optional] [default to 600]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

