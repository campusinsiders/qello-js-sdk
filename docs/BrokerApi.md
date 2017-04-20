# QelloApi.BrokerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSubtitles**](BrokerApi.md#getSubtitles) | **GET** /broker/subtitles/ | Get Subtitles in specific format
[**getVideo**](BrokerApi.md#getVideo) | **GET** /broker/ | Broker - Returns Playlist or MP4 Url


<a name="getSubtitles"></a>
# **getSubtitles**
> getSubtitles(token, assetId, opts)

Get Subtitles in specific format

Get Subtitles in specific format

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.BrokerApi();

var token = "token_example"; // String | Token

var assetId = 56; // Number | Asset Id

var opts = { 
  'format': 56, // Number | Preferred Format
  'lang': 56 // Number | Preferred Lang
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSubtitles(token, assetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **assetId** | **Number**| Asset Id | 
 **format** | **Number**| Preferred Format | [optional] 
 **lang** | **Number**| Preferred Lang | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: binary/octet-stream, application/xml

<a name="getVideo"></a>
# **getVideo**
> getVideo(token, assetId, opts)

Broker - Returns Playlist or MP4 Url

Broker - returns media file/playlist for an asset. On success the result is &#39;application/api+x-mpegurl&#39; otherwise json/xml

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.BrokerApi();

var token = "token_example"; // String | Token

var assetId = 56; // Number | Asset Id

var opts = { 
  'codec': "codec_example", // String | Preferred Codec - HLS, MP4, HLS-WEB, etc..
  'bandwidth': 56 // Number | Preferred bandwidth if no codec specified
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getVideo(token, assetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **assetId** | **Number**| Asset Id | 
 **codec** | **String**| Preferred Codec - HLS, MP4, HLS-WEB, etc.. | [optional] 
 **bandwidth** | **Number**| Preferred bandwidth if no codec specified | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+x-mpegurl

