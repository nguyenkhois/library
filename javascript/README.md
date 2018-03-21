# How to use
## Index
|Files|Functions|Notes|
|----|----|----|
|functions.js|Many functions can reused|Using ES6|
|own-objects.js|Custom objects with its methods|Using ES6|
|string-prototypes.js|Custom prototypes for the String global object|Using ES6|

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

* Testing purpose
```
let objectArray = [{"name":"Maria","age":20},{"name":"Peter","age":25},{"name":"Paula","age":29}];
```
* OwnObjectArray.toJSONString()
    * Input: an object array
    * Output: a JSON string
    ```
    let myJSONString = OwnObjectArray.toJSONString(objectArray);   
    console.log(myJSONString);
    ```
* OwnObjectArray.toObjectArray()
    * Input: a JSON string
    * Output: an object array
    ```
    let objectArray = OwnObjectArray.toObjectArray(myJSONString);
    ```
* OwnObjectArray.findIndex()
    * Input: an object array, property name (string), property value
    * Output: it returns the index of the first object in an object array. It returns -1 if the object is not found. 
    ```
    let myIndex = OwnObjectArray.findIndex(objectArray,'name','Paula');   
    console.log(myIndex);
    ```
* OwnObjectArray.sortByAlphabet()
    * Input: an object array, property name (string), order (0-ascending / 1-descending)
    * Output: a sorted array
    ```
    let sortedObjectArray = OwnObjectArray.sortByAlphabet(objectArray,'name',1);
    console.log(sortedObjectArray);
    ```
* OwnObjectArray.sortByNumeric()
    * Input: an object array, property name (string), order (0-ascending / 1-descending)
    * Output: a sorted array
   ```
   let sortedObjectArray = OwnObjectArray.sortByNumeric(objectArray,'age',1);
   console.log(sortedObjectArray);
   ```

## String.Prototypes
* [Online demo for these prototypes](https://codepen.io/khois/pen/rdMQQq)

|Prototypes|Descriptions|
|---|---|
|.toText()|Returns a plain text with converted HTML tags (<, >, /)|
|.limitWords()|Returns a string with your limited words|

* String.prototype.toText()
   ```
   let newString = htmlString.toText();
   ```
* String.prototype.limitWords()
   ```
   let newString = htmlString.limitWords(100);
   ```