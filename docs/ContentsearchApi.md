# QelloApi.ContentsearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentsearch**](ContentsearchApi.md#contentsearch) | **GET** /contentsearch/ | Search for Assets


<a name="contentsearch"></a>
# **contentsearch**
> SearchResult contentsearch(token, term, limit, opts)

Search for Assets

Search for assets

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.ContentsearchApi();

var token = "token_example"; // String | Token

var term = "term_example"; // String | Term

var limit = 56; // Number | Limit

var opts = { 
  'offset': 56 // Number | Offset
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentsearch(token, term, limit, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **term** | **String**| Term | 
 **limit** | **Number**| Limit | 
 **offset** | **Number**| Offset | [optional] 

### Return type

[**SearchResult**](SearchResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

