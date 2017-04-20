# QelloApi.Asset

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Asset Id | [optional] 
**mediaId** | **Number** | Media Id for playable resources | [optional] 
**classification** | **String** | Asset Classification | [optional] 
**created** | **String** | Date of Creation | [optional] 
**modified** | **String** | Date of Last Modification | [optional] 
**status** | **String** | Asset Status | [optional] 
**published** | **String** | Published or not | [optional] 
**meta** | **Object** | Asset Metadata (type -&gt; value) | [optional] 
**images** | **Object** |  | [optional] 
**children** | [**[Asset]**](Asset.md) | Asset&#39;s Children Assets (for ex: Seasons for Shows)  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `Active` (value: `"Active"`)

* `Inactive` (value: `"Inactive"`)




<a name="PublishedEnum"></a>
## Enum: PublishedEnum


* `Yes` (value: `"Yes"`)

* `No` (value: `"No"`)




