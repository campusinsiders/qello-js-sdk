# QelloApi.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateToken**](UsersApi.md#generateToken) | **GET** /users/login/ | Generate Profile Token
[**getUser**](UsersApi.md#getUser) | **GET** /users/ | Get User Information
[**loginIos**](UsersApi.md#loginIos) | **POST** /users/login/ios | User Login by iTunes Receipt
[**loginPartner**](UsersApi.md#loginPartner) | **POST** /users/login/partner | User Login with Partner Credentials
[**loginUser**](UsersApi.md#loginUser) | **POST** /users/login/ | User Login
[**passwordRequest**](UsersApi.md#passwordRequest) | **POST** /users/password/ | Request Password
[**passwordReset**](UsersApi.md#passwordReset) | **PUT** /users/password/ | Password Reset
[**registerUser**](UsersApi.md#registerUser) | **POST** /users/ | Register user
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/ | Update user


<a name="generateToken"></a>
# **generateToken**
> GenerateTokenResult generateToken(token, profileId)

Generate Profile Token

Generates a token for a Profile by User token.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.UsersApi();

var token = "token_example"; // String | Token

var profileId = 56; // Number | Profile Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateToken(token, profileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **profileId** | **Number**| Profile Id | 

### Return type

[**GenerateTokenResult**](GenerateTokenResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="getUser"></a>
# **getUser**
> LoginObject getUser(token, )

Get User Information

User and Session Information.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.UsersApi();

var token = "token_example"; // String | Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(token, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 

### Return type

[**LoginObject**](LoginObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="loginIos"></a>
# **loginIos**
> LoginObject loginIos(receipt, deviceDataDeviceName, deviceDataDeviceId, opts)

User Login by iTunes Receipt

User Login by iTunes Receipt. Used in IOS Applications for automatic login.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.UsersApi();

var receipt = "receipt_example"; // String | iTunes Receipt

var deviceDataDeviceName = "deviceDataDeviceName_example"; // String | Device Name (Predefined Device Type - iPhone, Android, etc.)

var deviceDataDeviceId = "deviceDataDeviceId_example"; // String | Device Id (Unique Device Identificator)

var opts = { 
  'deviceDataAppVersion': "deviceDataAppVersion_example" // String | Application Version (Mandatory)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginIos(receipt, deviceDataDeviceName, deviceDataDeviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receipt** | **String**| iTunes Receipt | 
 **deviceDataDeviceName** | **String**| Device Name (Predefined Device Type - iPhone, Android, etc.) | 
 **deviceDataDeviceId** | **String**| Device Id (Unique Device Identificator) | 
 **deviceDataAppVersion** | **String**| Application Version (Mandatory) | [optional] 

### Return type

[**LoginObject**](LoginObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="loginPartner"></a>
# **loginPartner**
> LoginObject loginPartner(partnerId, providerId, deviceDataDeviceName, deviceDataDeviceId, opts)

User Login with Partner Credentials

User Login with Partner Credentials

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.UsersApi();

var partnerId = "partnerId_example"; // String | Partner Id.

var providerId = "providerId_example"; // String | Provider Id. Partner's Service Provider Method.

var deviceDataDeviceName = "deviceDataDeviceName_example"; // String | Device Name (Predefined Device Type - iPhone, Android, etc.)

var deviceDataDeviceId = "deviceDataDeviceId_example"; // String | Device Id (Unique Device Identificator)

var opts = { 
  'email': "email_example", // String | Email (Partner-specific parameter)
  'password': "password_example", // String | Password (Partner-specific parameter)
  'deviceDataAppVersion': "deviceDataAppVersion_example" // String | Application Version (Mandatory)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginPartner(partnerId, providerId, deviceDataDeviceName, deviceDataDeviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partnerId** | **String**| Partner Id. | 
 **providerId** | **String**| Provider Id. Partner&#39;s Service Provider Method. | 
 **deviceDataDeviceName** | **String**| Device Name (Predefined Device Type - iPhone, Android, etc.) | 
 **deviceDataDeviceId** | **String**| Device Id (Unique Device Identificator) | 
 **email** | **String**| Email (Partner-specific parameter) | [optional] 
 **password** | **String**| Password (Partner-specific parameter) | [optional] 
 **deviceDataAppVersion** | **String**| Application Version (Mandatory) | [optional] 

### Return type

[**LoginObject**](LoginObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="loginUser"></a>
# **loginUser**
> LoginObject loginUser(email, password, deviceDataDeviceName, deviceDataDeviceId, opts)

User Login

User Login API call

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.UsersApi();

var email = "email_example"; // String | Email

var password = "password_example"; // String | Password

var deviceDataDeviceName = "deviceDataDeviceName_example"; // String | Device Name (Predefined Device Type - iPhone, Android, etc.)

var deviceDataDeviceId = "deviceDataDeviceId_example"; // String | Device Id (Unique Device Identificator)

var opts = { 
  'deviceDataAppVersion': "deviceDataAppVersion_example" // String | Application Version (Mandatory)
  'deviceDataOsName': "deviceDataOsName_example", // String | OS Name
  'deviceDataOsVersion': "deviceDataOsVersion_example", // String | OS Version Number
  'deviceDataProcesors': "deviceDataProcesors_example", // String | Device Processors
  'deviceDataMacaddress': "deviceDataMacaddress_example", // String | Device Macaddress
  'deviceDataArchitecture': "deviceDataArchitecture_example", // String | Device Architecture
  'deviceDataLocale': "deviceDataLocale_example" // String | Device Locale
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUser(email, password, deviceDataDeviceName, deviceDataDeviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email | 
 **password** | **String**| Password | 
 **deviceDataDeviceName** | **String**| Device Name (Predefined Device Type - iPhone, Android, etc.) | 
 **deviceDataDeviceId** | **String**| Device Id (Unique Device Identificator) | 
 **deviceDataAppVersion** | **String**| Application Version (Mandatory) | [optional] 
 **deviceDataOsName** | **String**| OS Name | [optional] 
 **deviceDataOsVersion** | **String**| OS Version Number | [optional] 
 **deviceDataProcesors** | **String**| Device Processors | [optional] 
 **deviceDataMacaddress** | **String**| Device Macaddress | [optional] 
 **deviceDataArchitecture** | **String**| Device Architecture | [optional] 
 **deviceDataLocale** | **String**| Device Locale | [optional] 

### Return type

[**LoginObject**](LoginObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="passwordRequest"></a>
# **passwordRequest**
> PasswordRequestResult passwordRequest(email, deviceDataDeviceName, deviceDataDeviceId, opts)

Request Password

Request a New Password. Email will be sent with resset password link.

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.UsersApi();

var email = "email_example"; // String | Email

var deviceDataDeviceName = "deviceDataDeviceName_example"; // String | Device Name (Predefined Device Type - iPhone, Android, etc.)

var deviceDataDeviceId = "deviceDataDeviceId_example"; // String | Device Id (Unique Device Identificator)

var opts = { 
  'deviceDataAppVersion': "deviceDataAppVersion_example" // String | Application Version (Mandatory)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.passwordRequest(email, deviceDataDeviceName, deviceDataDeviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email | 
 **deviceDataDeviceName** | **String**| Device Name (Predefined Device Type - iPhone, Android, etc.) | 
 **deviceDataDeviceId** | **String**| Device Id (Unique Device Identificator) | 
 **deviceDataAppVersion** | **String**| Application Version (Mandatory) | [optional] 

### Return type

[**PasswordRequestResult**](PasswordRequestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="passwordReset"></a>
# **passwordReset**
> PasswordResetResult passwordReset(token, password, confirmPassword)

Password Reset

Password Reset API call

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.UsersApi();

var token = "token_example"; // String | Token (Reset Password Token)

var password = "password_example"; // String | Password

var confirmPassword = "confirmPassword_example"; // String | Confirm Password


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.passwordReset(token, password, confirmPassword, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token (Reset Password Token) | 
 **password** | **String**| Password | 
 **confirmPassword** | **String**| Confirm Password | 

### Return type

[**PasswordResetResult**](PasswordResetResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="registerUser"></a>
# **registerUser**
> RegisterResult registerUser(email, deviceDataDeviceName, deviceDataDeviceId, opts)

Register user

Register a New User

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.UsersApi();

var email = "email_example"; // String | Email

var deviceDataDeviceName = "deviceDataDeviceName_example"; // String | Device Name (Predefined Device Type - iPhone, Android, etc.)

var deviceDataDeviceId = "deviceDataDeviceId_example"; // String | Device Id (Unique Device Identificator)

var opts = { 
  'password': "password_example", // String | Password
  'genPassword': 56, // Number | Generate Password
  'firstName': "firstName_example", // String | First Name
  'lastName': "lastName_example", // String | Last Name
  'type': "type_example", // String | User Type
  'gender': "gender_example", // String | Gender
  'phone': "phone_example", // String | Phone
  'deviceDataAppVersion': "deviceDataAppVersion_example" // String | Application Version (Mandatory)
  'deviceDataOsName': "deviceDataOsName_example", // String | OS Name
  'deviceDataOsVersion': "deviceDataOsVersion_example", // String | OS Version Number
  'deviceDataProcesors': "deviceDataProcesors_example", // String | Device Processors
  'deviceDataMacaddress': "deviceDataMacaddress_example", // String | Device Macaddress
  'deviceDataArchitecture': "deviceDataArchitecture_example", // String | Device Architecture
  'deviceDataLocale': "deviceDataLocale_example" // String | Device Locale
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerUser(email, deviceDataDeviceName, deviceDataDeviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email | 
 **deviceDataDeviceName** | **String**| Device Name (Predefined Device Type - iPhone, Android, etc.) | 
 **deviceDataDeviceId** | **String**| Device Id (Unique Device Identificator) | 
 **password** | **String**| Password | [optional] 
 **genPassword** | **Number**| Generate Password | [optional] 
 **firstName** | **String**| First Name | [optional] 
 **lastName** | **String**| Last Name | [optional] 
 **type** | **String**| User Type | [optional] 
 **gender** | **String**| Gender | [optional] 
 **phone** | **String**| Phone | [optional] 
 **deviceDataAppVersion** | **String**| Application Version (Mandatory) | [optional] 
 **deviceDataOsName** | **String**| OS Name | [optional] 
 **deviceDataOsVersion** | **String**| OS Version Number | [optional] 
 **deviceDataProcesors** | **String**| Device Processors | [optional] 
 **deviceDataMacaddress** | **String**| Device Macaddress | [optional] 
 **deviceDataArchitecture** | **String**| Device Architecture | [optional] 
 **deviceDataLocale** | **String**| Device Locale | [optional] 

### Return type

[**RegisterResult**](RegisterResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

<a name="updateUser"></a>
# **updateUser**
> UserResult updateUser(token, , opts)

Update user

Update User

### Example
```javascript
var QelloApi = require('qello_api');

var apiInstance = new QelloApi.UsersApi();

var token = "token_example"; // String | Token

var opts = { 
  'email': "email_example", // String | Email
  'password': "password_example", // String | Password
  'firstName': "firstName_example", // String | First Name
  'lastName': "lastName_example", // String | Last Name
  'type': "type_example", // String | User Type
  'gender': "gender_example", // String | Gender
  'phone': "phone_example" // String | Phone
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUser(token, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | 
 **email** | **String**| Email | [optional] 
 **password** | **String**| Password | [optional] 
 **firstName** | **String**| First Name | [optional] 
 **lastName** | **String**| Last Name | [optional] 
 **type** | **String**| User Type | [optional] 
 **gender** | **String**| Gender | [optional] 
 **phone** | **String**| Phone | [optional] 

### Return type

[**UserResult**](UserResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/api+json, application/api+xml, application/api+jsonp

