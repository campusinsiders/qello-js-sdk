# QelloApi.TokenApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getToken**](TokenApi.md#getToken) | **GET** /token/ | Generate Guest Token
[**regenerateToken**](TokenApi.md#regenerateToken) | **PUT** /token/ | Regenerate Token


<a name="getToken"></a>
# **getToken**
> TokenResult getToken(deviceDataDeviceName, deviceDataDeviceId, deviceDataAppVersion)

Generate Guest Token

Get a Guest Token

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.TokenApi();

var deviceDataDeviceName = "deviceDataDeviceName_example"; // String | Device Name (Predefined Device Type - iPhone, Android, etc.)

var deviceDataDeviceId = "deviceDataDeviceId_example"; // String | Device Id (Unique Device Identificator)

var deviceDataAppVersion = "deviceDataAppVersion_example"; // String | Application Version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getToken(deviceDataDeviceName, deviceDataDeviceId, deviceDataAppVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceDataDeviceName** | **String**| Device Name (Predefined Device Type - iPhone, Android, etc.) | 
 **deviceDataDeviceId** | **String**| Device Id (Unique Device Identificator) | 
 **deviceDataAppVersion** | **String**| Application Version | 

### Return type

[**TokenResult**](TokenResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="regenerateToken"></a>
# **regenerateToken**
> RetokenResult regenerateToken(refreshKey, deviceId, opts)

Regenerate Token

Issue a New Token from Refresh Key for Specific Device. &lt;br/&gt;&lt;br/&gt; Note : For Secodary Devices (Devices/Platforms that exist only as Streaming clients and need a Source Device to work) &lt;br/&gt; send a Device Name, Device Id, App Version etc.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.TokenApi();

var refreshKey = "refreshKey_example"; // String | Refresh Key (Used to get new token)

var deviceId = "deviceId_example"; // String | Device Id (Unique Device Identificator)

var opts = { 
  'profileId': "profileId_example", // String | Profile Id (For regeneration of Child Token)
  'deviceName': "deviceName_example", // String | Device Name (Predefined Device Type - iPhone, Android, etc.)
  'appVersion': "appVersion_example" // String | Application Version
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.regenerateToken(refreshKey, deviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshKey** | **String**| Refresh Key (Used to get new token) | 
 **deviceId** | **String**| Device Id (Unique Device Identificator) | 
 **profileId** | **String**| Profile Id (For regeneration of Child Token) | [optional] 
 **deviceName** | **String**| Device Name (Predefined Device Type - iPhone, Android, etc.) | [optional] 
 **appVersion** | **String**| Application Version | [optional] 

### Return type

[**RetokenResult**](RetokenResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

