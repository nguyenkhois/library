# How to use
## Index
|Files|Functions|Notes|
|----|----|----|
|functions.js|Many functions can reused|Using ES6|
|own-objects.js|Custom objects with its methods|Using ES6|
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
import { OwnObjectArray } from 'g-jslib';

const objectArray = [{"name":"Maria","age":20},{"name":"Peter","age":25},{"name":"Paula","age":29}];

const sortedObjectArray = OwnObjectArray.sortByNumeric(objectArray, 'age', 1);
console.log(sortedObjectArray);
````

## String.prototype
* [Online demo for these prototypes](https://codepen.io/khois/pen/rdMQQq)

|Prototypes|Descriptions|
|---|---|
|.toText()|Returns a plain text with converted HTML tags (<, >, /)|
|.limitWords()|Returns a string with your limited words|

Example
````
import 'g-jslib';

const stringInput = "The slice() method creates a new array. It does not remove any elements from the source array.";

console.log(stringInput.limitWords(7))
````

## Array.prototype
* [Online demo for these prototypes](https://codepen.io/khois/pen/KxRPGX)

|Prototypes|Descriptions|
|---|---|
|.toJSONString()|Converts an object array to a JSON string|
|.findIndexByProperty()|Returns the index of an object in object array|
|.sortByAlphabet()|Sorts an object array by string property value|
|.sortByNumeric()|Sorts an object array by numerical property value|
|.filterByProperty()|Get all objects in an array by their properties|
|.getMax()|Get an object in an array which has max value of its property|

Example
````
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