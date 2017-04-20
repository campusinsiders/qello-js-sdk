# QelloApi.TimerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTimer**](TimerApi.md#deleteTimer) | **DELETE** /timer/ | Deletes Timer
[**getTimer**](TimerApi.md#getTimer) | **GET** /timer/ | Get Timer
[**updateTimer**](TimerApi.md#updateTimer) | **PUT** /timer/ | Set Timer


<a name="deleteTimer"></a>
# **deleteTimer**
> TimerResult deleteTimer(token, profileId)

Deletes Timer

Deletes a Profile Timer.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.TimerApi();

var token = "token_example"; // String | Token

var profileId = 56; // Number | Profile Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTimer(token, profileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **profileId** | **Number**| Profile Id | 

### Return type

[**TimerResult**](TimerResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="getTimer"></a>
# **getTimer**
> TimerResult getTimer(token, , opts)

Get Timer

Gets a Profile Timer. Users has to specify a Profile Id. Profiles can get their own timer only.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.TimerApi();

var token = "token_example"; // String | Token

var opts = { 
  'profileId': 56 // Number | Profile Id (if used as User)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTimer(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **profileId** | **Number**| Profile Id (if used as User) | [optional] 

### Return type

[**TimerResult**](TimerResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="updateTimer"></a>
# **updateTimer**
> TimerResult updateTimer(token, , opts)

Set Timer

Updates a Profile Timer or Creates it if missing for Users. Profiles can only Update a timer with current time value.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.TimerApi();

var token = "token_example"; // String | Token

var opts = { 
  'profileId': 56, // Number | Profile Id (The Child Profile the timer is set for.)
  'value': 56, // Number | Timer Value (in seconds)
  'currentValue': 56, // Number | Timer Current Value (in seconds)
  'period': 56, // Number | Validity Period (in seconds)
  'status': "status_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTimer(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **profileId** | **Number**| Profile Id (The Child Profile the timer is set for.) | [optional] 
 **value** | **Number**| Timer Value (in seconds) | [optional] 
 **currentValue** | **Number**| Timer Current Value (in seconds) | [optional] 
 **period** | **Number**| Validity Period (in seconds) | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**TimerResult**](TimerResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

