# QelloApi.SpotlightApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSpotlight**](SpotlightApi.md#getSpotlight) | **GET** /spotlight/ | Spotlight - Prefifined Filters over assets, collections, etc.


<a name="getSpotlight"></a>
# **getSpotlight**
> SpotlightResult getSpotlight(token, , opts)

Spotlight - Prefifined Filters over assets, collections, etc.

Get Spotlight Lists

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.SpotlightApi();

var token = "token_example"; // String | Token

var opts = { 
  'location': "location_example" // String | Location (Spotlight for a specific location - Home, Explore etc.)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSpotlight(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **location** | **String**| Location (Spotlight for a specific location - Home, Explore etc.) | [optional] 

### Return type

[**SpotlightResult**](SpotlightResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

