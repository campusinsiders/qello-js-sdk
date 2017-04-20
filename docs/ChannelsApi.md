# QelloApi.ChannelsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChannels**](ChannelsApi.md#getChannels) | **GET** /channels/ | Get Channels


<a name="getChannels"></a>
# **getChannels**
> ContentResult getChannels(token, , opts)

Get Channels

Get Channels

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.ChannelsApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56, // Number | Channel Id
  'limit': 56, // Number | Limit
  'offset': 56, // Number | Offset
  'order': "order_example", // String | Order (Field to Order By)
  'tag': 56, // Number | Filter by Tag [Tag Id => Tag Value]
  'meta': "meta_example" // String | Filter by Meta [Meta name => Meta value]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannels(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Channel Id | [optional] 
 **limit** | **Number**| Limit | [optional] 
 **offset** | **Number**| Offset | [optional] 
 **order** | **String**| Order (Field to Order By) | [optional] 
 **tag** | **Number**| Filter by Tag [Tag Id &#x3D;&gt; Tag Value] | [optional] 
 **meta** | **String**| Filter by Meta [Meta name &#x3D;&gt; Meta value] | [optional] 

### Return type

[**ContentResult**](ContentResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

