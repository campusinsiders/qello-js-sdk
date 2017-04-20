# QelloApi.StatsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStats**](StatsApi.md#getStats) | **GET** /stats/ | Statistics about watched videos


<a name="getStats"></a>
# **getStats**
> StatsResult getStats(token, range, type, opts)

Statistics about watched videos

Statistics about watched videos for given time period and start date.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.StatsApi();

var token = "token_example"; // String | Token

var range = "range_example"; // String | Time Range (day, week, month, year)

var type = "type_example"; // String | Type of the Report (by Show, by Tag, for a Time period). Possible values - tag, show, time

var opts = { 
  '_date': "_date_example", // String | Date (YY-MM-DD for day, YY-MM for month, YY for year) or (YY-WW for weekly)
  'parentTag': "parentTag_example" // String | Parent Tag Id for type=tag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStats(token, range, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **range** | **String**| Time Range (day, week, month, year) | 
 **type** | **String**| Type of the Report (by Show, by Tag, for a Time period). Possible values - tag, show, time | 
 **_date** | **String**| Date (YY-MM-DD for day, YY-MM for month, YY for year) or (YY-WW for weekly) | [optional] 
 **parentTag** | **String**| Parent Tag Id for type&#x3D;tag | [optional] 

### Return type

[**StatsResult**](StatsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

