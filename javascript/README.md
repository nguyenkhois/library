# How to use
## Table of contents
|Files|Functions|Notes|
|----|----|----|
|functions.js|Many functions can reused|Using ES6|
|own-objects.js|Custom methods that is using for object array|Using ES6|
|local-storage-methods.js|Custom LocalStorage methods|Using ES6|
|string-prototypes.js|Custom prototypes for the String global object|Using ES6|
|array-prototypes.js|Custom prototypes for the Array global object|Using ES6|

## Functions (functions.js)
|Functions|Descriptions|
|---|---|
|convertStringToInterger(sNumber, fractionDigits)| string -> int|
|getRandomNumber(minNr, maxNr)|get random number which larger 0|
|validateEmailAddress(sEmail)||
|limitInputLength(elementID,length)|force keycode|
|addZeroToDateTime(sString)||
|getCurrentDate()|Swedish format|
|getCurrentTime()|Swedish format|
|getParamFromUrl(param)|get parameter value from URL|

## OwnObjectArray (own-objects.js)
* [Online demo for OwnObjectArray](https://codepen.io/khois/pen/oEJqra)

|Methods|Descriptions|
|---|---|
|.toJSONString()|Converts an object array to a JSON string|
|.toObjectArray()|Converts a JSON string to an object array|
|.findIndex()|Returns the index of an object in object array|
|.sortByAlphabet()|Sorts an object array by string property value|
|.sortByNumeric()|Sorts an object array by numerical property value|
|.filterByProperty()|Get all objects in an array by their properties|
|.getMax()|Get an object in an array which has max value of its property|

Example
````
// Install this package g-jslib from npmjs.com or include direct the file own-objects.js
import { OwnObjectArray } from 'g-jslib';

const objectArray = [{"name":"Maria","age":20},{"name":"Peter","age":25},{"name":"Paula","age":29}];

const sortedObjectArray = OwnObjectArray.sortByNumeric(objectArray, 'age', 1);
console.log(sortedObjectArray);
````

## LocalStorageMethods (local-storage-methods.js)
| Module | Explain | Input | Output |
|---|---|---|---|
| .removeAll() | Remove all keys in localStorage | No | No |
| .remove(key) | Remove specific key | A `key` name as a string | No |
| .retrieve(key, defaultReturn) | Retrieve specific key and return always an object | A `key` name as a string and data converted automatic from a string to a JSON object before it returned. Variable `defaultReturn` is optional and it will returned if the key is not found | A JSON object |
| .store(key, value) | Store data into localStorage with an own key | A `key` name as a string and `value` will converted automatic to a string before it stored in localStorage | No |

Example
Store a key:
````
import { LocalStorageMethods } from 'g-jslib';

LocalStorageMethods.store('yourKey', 'Hello!');
````

Retrieve keys with defaultReturn:
````
import { LocalStorageMethods } from 'g-jslib';

console.log(LocalStorageMethods.retrieve('yourKey'));
console.log(LocalStorageMethods.retrieve('myKey', 'Nothing'));
````

## String.prototype
* [Online demo for these prototypes](https://codepen.io/khois/pen/rdMQQq)

|Prototypes|Descriptions|
|---|---|
|.toText()|Returns a plain text with converted HTML tags (<, >, /)|
|.limitWords()|Returns a string with your limited words|

Example
````
// Install this package g-jslib from npmjs.com or include direct the file string-prototypes.js
import 'g-jslib';

const stringInput = "The slice() method creates a new array. It does not remove any elements from the source array.";

console.log(stringInput.limitWords(7))
````

## Array.prototype - Using only for object array
* [Online demo for these prototypes](https://codepen.io/khois/pen/KxRPGX)

|Prototypes|Descriptions|
|---|---|
|.toJSONString()|Converts an object array to a JSON string|
|.findIndexByProperty(sPropertyName, sPropertyValue)|Returns the index of an object in object array|
|.sortByAlphabet(sPropertyName, orderKeyword)|Sorts an object array by string property value|
|.sortByNumeric(sPropertyName, orderKeyword)|Sorts an object array by numerical property value|
|.filterByProperty(sPropertyName, sSeekingValue)|Filter objects in an array by their properties|
|.removeByProperty(sPropertyName, sSeekingValue)|Remove one or many objects in an array by their properties|
|.getMax(sPropertyName)|Return the max value by object property|

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