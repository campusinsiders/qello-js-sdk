# QelloApi.ProfileApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProfile**](ProfileApi.md#createProfile) | **POST** /profile/ | Create a Child Profile for User
[**deleteProfile**](ProfileApi.md#deleteProfile) | **DELETE** /profile/ | Deactivate Profile
[**getProfiles**](ProfileApi.md#getProfiles) | **GET** /profile/ | Get User Profiles
[**updateProfile**](ProfileApi.md#updateProfile) | **PUT** /profile/ | Update Child Profile for User


<a name="createProfile"></a>
# **createProfile**
> ProfileResult createProfile(token, fullName, opts)

Create a Child Profile for User

Create a New Profile

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.ProfileApi();

var token = "token_example"; // String | Token

var fullName = "fullName_example"; // String | Full Name

var opts = { 
  'avatarId': 56, // Number | Avatar Id
  'nickName': "nickName_example", // String | Nick Name
  'yearBirth': "yearBirth_example" // String | Year of Birth
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProfile(token, fullName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **fullName** | **String**| Full Name | 
 **avatarId** | **Number**| Avatar Id | [optional] 
 **nickName** | **String**| Nick Name | [optional] 
 **yearBirth** | **String**| Year of Birth | [optional] 

### Return type

[**ProfileResult**](ProfileResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="deleteProfile"></a>
# **deleteProfile**
> ProfileResult deleteProfile(token, id)

Deactivate Profile

Mark a Profile as Inactive

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.ProfileApi();

var token = "token_example"; // String | Token

var id = 56; // Number | The Profile Id to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteProfile(token, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| The Profile Id to be deleted. | 

### Return type

[**ProfileResult**](ProfileResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="getProfiles"></a>
# **getProfiles**
> ProfileResult getProfiles(token, , opts)

Get User Profiles

Get the Profiles belonging to a User. Single Profile if profile_id is sent.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.ProfileApi();

var token = "token_example"; // String | Token

var opts = { 
  'id': 56 // Number | Profile Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProfiles(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Profile Id | [optional] 

### Return type

[**ProfileResult**](ProfileResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="updateProfile"></a>
# **updateProfile**
> ProfileResult updateProfile(token, id, opts)

Update Child Profile for User

Update Profile

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.ProfileApi();

var token = "token_example"; // String | Token

var id = 56; // Number | Profile Id

var opts = { 
  'fullName': "fullName_example", // String | Full Name
  'avatarId': 56, // Number | Avatar Id
  'nickName': "nickName_example", // String | Nick Name
  'yearBirth': "yearBirth_example" // String | Year of Birth
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProfile(token, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **id** | **Number**| Profile Id | 
 **fullName** | **String**| Full Name | [optional] 
 **avatarId** | **Number**| Avatar Id | [optional] 
 **nickName** | **String**| Nick Name | [optional] 
 **yearBirth** | **String**| Year of Birth | [optional] 

### Return type

[**ProfileResult**](ProfileResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

