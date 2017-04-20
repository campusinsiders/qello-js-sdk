# QelloApi.AssetsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssets**](AssetsApi.md#getAssets) | **GET** /assets/ | Get Asset/Assets


<a name="getAssets"></a>
# **getAssets**
> AssetsResult getAssets(token, , opts)

Get Asset/Assets

Get Single Asset by Id or Multiple Assets by filters

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.AssetsApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56, // Number | Asset Id
  'limit': 56, // Number | Limit
  'offset': 56, // Number | Offset
  'type': "type_example", // String | Type - Audio, Video
  'classification': "classification_example", // String | Classification
  'order': "order_example", // String | Order (Field to Order By)
  'orderType': "orderType_example", // String | Order Type (ASC,DESC)
  'extended': true, // Boolean | Extended Mode (to include or not detailed childern/parent info)
  'searchId0': 56, // Number | Search by Tag Id
  'searchId1': 56, // Number | Search by Tag Id
  'searchId2': 56, // Number | Search by Tag Id
  'searchTag0': "searchTag0_example", // String | Search by Tag Name
  'searchTag1': "searchTag1_example", // String | Search by Tag Name
  'searchTag2': "searchTag2_example", // String | Search by Tag Name
  'searchMetaTitle1': "searchMetaTitle1_example", // String | Search by Meta Title Name
  'searchMetaTitle2': "searchMetaTitle2_example", // String | Search by Meta Title Name
  'searchMetaCountry1': "searchMetaCountry1_example", // String | Search by Meta Country Name
  'searchMetaYear1': "searchMetaYear1_example", // String | Search by Meta year
  'collectionId': 56, // Number | Collection Id if type is set to 'Custom'
  'collectionType': "collectionType_example" // String | Collection Type (for predefined types ['Favorites', 'WatchLater'] or 'Custom')
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAssets(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Asset Id | [optional] 
 **limit** | **Number**| Limit | [optional] 
 **offset** | **Number**| Offset | [optional] 
 **type** | **String**| Type - Audio, Video | [optional] 
 **classification** | **String**| Classification | [optional] 
 **order** | **String**| Order (Field to Order By) | [optional] 
 **orderType** | **String**| Order Type (ASC,DESC) | [optional] 
 **extended** | **Boolean**| Extended Mode (to include or not detailed childern/parent info) | [optional] 
 **searchId0** | **Number**| Search by Tag Id | [optional] 
 **searchId1** | **Number**| Search by Tag Id | [optional] 
 **searchId2** | **Number**| Search by Tag Id | [optional] 
 **searchTag0** | **String**| Search by Tag Name | [optional] 
 **searchTag1** | **String**| Search by Tag Name | [optional] 
 **searchTag2** | **String**| Search by Tag Name | [optional] 
 **searchMetaTitle1** | **String**| Search by Meta Title Name | [optional] 
 **searchMetaTitle2** | **String**| Search by Meta Title Name | [optional] 
 **searchMetaCountry1** | **String**| Search by Meta Country Name | [optional] 
 **searchMetaYear1** | **String**| Search by Meta year | [optional] 
 **collectionId** | **Number**| Collection Id if type is set to &#39;Custom&#39; | [optional] 
 **collectionType** | **String**| Collection Type (for predefined types [&#39;Favorites&#39;, &#39;WatchLater&#39;] or &#39;Custom&#39;) | [optional] 

### Return type

[**AssetsResult**](AssetsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

