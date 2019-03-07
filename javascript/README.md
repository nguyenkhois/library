# How to use [![Download g-jslib on npm](https://img.shields.io/npm/v/g-jslib.svg?style=flat)](https://www.npmjs.com/package/g-jslib)
## Table of contents
|Files|Functions|Notes|
|----|----|----|
|[array-prototypes.js](#arrayprototype---using-only-for-object-array)|Custom prototypes for the Array global object|Using ES6|
|[functions.js](#functions-functionsjs)|The reuseable functions|Using ES6|
|[local-storage-methods.js](#localstoragemethods-local-storage-methodsjs)|Custom LocalStorage methods|Using ES6|
|[own-object-array.js](#ownobjectarray-own-objectsjs)|Custom methods for an object array|Using ES6|
|[string-prototypes.js](#stringprototype)|Custom prototypes for the String global object|Using ES6|

## Array.prototype - Using only for an object array
* [Online demo for these prototypes](https://codepen.io/khois/pen/KxRPGX)

|Prototypes|Descriptions|
|---|---|
|.toJSONString()|Converts an object array to a JSON string|
|.findIndexByProperty(sPropertyName, sPropertyValue)|Returns the index of an object in an object array|
|.sortByAlphabet(sPropertyName, orderKeyword)|Sorts an object array by a string property value|
|.sortByNumeric(sPropertyName, orderKeyword)|Sorts an object array by a numerical property value|
|.filterByProperty(sPropertyName, sSeekingValue)|Filters objects in an array by their property values|
|.removeByProperty(sPropertyName, sSeekingValue)|Removes one or many objects in an array by their property values|
|.getMax(sPropertyName)|Returns an object that has a property with the max value|

Example
````
// Install this package g-jslib from npmjs.com or include direct the file array-prototypes.js
import 'g-jslib';

const productArray = [
  {
    productId: 1,
    productName: 'Apple',
    productPrice: 20
  },
  {
    productId: 3,
    productName: 'Lemon',
    productPrice: 50
  },
  {
    productId: 2,
    productName: 'Banana',
    productPrice: 5
  }
];

const sortedArray = productArray.sortByAlphabet('productName', 0);
console.log(sortedArray);
````

[Go to top](#how-to-use)

## Functions (functions.js)
|Functions|Descriptions|
|---|---|
|convertStringToInterger(sNumber, fractionDigits)| string -> int|
|getRandomNumber(minNr, maxNr)|Gets a random number which larger 0|
|validateEmailAddress(sEmail)||
|limitInputLength(elementID,length)|force keycode|
|addZeroToDateTime(sString)||
|getCurrentDate()|Using Swedish format|
|getCurrentTime()|Using Swedish format|
|getParamFromUrl(param)|Gets a parameter value from URL|

[Go to top](#how-to-use)


## LocalStorageMethods (local-storage-methods.js)
| Module | Explain | Input | Output |
|---|---|---|---|
| .removeAll() | Removes all keys in localStorage | No | No |
| .remove(key) | Removes a specific key | A `key` name as a string | No |
| .retrieve(key, defaultReturn) | Retrieves a specific key and returns always an object | A `key` name as a string and data converted automatic from a string to a JSON object before it is returned. Variable `defaultReturn` is optional and it will be returned if the key is not found | A JSON object |
| .store(key, value) | Stores data into the localStorage with an own key | A `key` name as a string and `value` will be converted automatic to a string before it is stored in the localStorage | No |

Example
Stores a key:
````
import { LocalStorageMethods } from 'g-jslib';

LocalStorageMethods.store('yourKey', 'Hello!');
````

Retrieves a key with a defaultReturn:
````
import { LocalStorageMethods } from 'g-jslib';

console.log(LocalStorageMethods.retrieve('yourKey'));
console.log(LocalStorageMethods.retrieve('myKey', 'Nothing'));
````

[Go to top](#how-to-use)

## OwnObjectArray (own-objects.js)
* [Online demo for OwnObjectArray](https://codepen.io/khois/pen/oEJqra)

|Methods|Descriptions|
|---|---|
|.toJSONString()|Converts an object array to a JSON string|
|.toObjectArray()|Converts a JSON string to an object array|
|.findIndex()|Returns the index of an object in an object array|
|.sortByAlphabet()|Sorts an object array by a string property value|
|.sortByNumeric()|Sorts an object array by a numerical property value|
|.filterByProperty()|Gets all objects in an array by their property values|
|.getMax()|Get an object in an array that has a property with the max value|

Example
````
// Install this package g-jslib from npmjs.com or include direct the file own-object-array.js
import { OwnObjectArray } from 'g-jslib';

const objectArray = [{"name":"Maria","age":20},{"name":"Peter","age":25},{"name":"Paula","age":29}];

const sortedObjectArray = OwnObjectArray.sortByNumeric(objectArray, 'age', 1);
console.log(sortedObjectArray);
````

[Go to top](#how-to-use)


## String.prototype
* [Online demo for these prototypes](https://codepen.io/khois/pen/rdMQQq)

|Prototypes|Descriptions|
|---|---|
|.toText()|Converts all HTML tags to a plain text (<, >, /)|
|.limitWords()|Returns a string with a specific number|

Example
````
// Install this package g-jslib from npmjs.com or include direct the file string-prototypes.js
import 'g-jslib';

const stringInput = "The slice() method creates a new array. It does not remove any elements from the source array.";

console.log(stringInput.limitWords(7))
````

[Go to top](#how-to-use)

