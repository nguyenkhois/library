# How to use
### OwnObjectArray
* [Online demo for OwnObjectArray](https://codepen.io/khois/pen/aqRdqz)
* Testing purpose
```
let objectArray = [{"name":"Maria","age":20},{"name":"Peter","age":25},{"name":"Paula","age":29}];
```
* OwnObjectArray.toJSONString()
    * This method convert an object array to a JSON string
        * Input: an object array
        * Output: a JSON string
    ```
    let myJSONString = OwnObjectArray.toJSONString(objectArray);   
    console.log(myJSONString);
    ```
* OwnObjectArray.toObjectArray()
    * This method convert a JSON string to an object array
        * Input: a JSON string
        * Output: an object array
    ```
    let objectArray = OwnObjectArray.toObjectArray(myJSONString);
    ```
* OwnObjectArray.findIndex()
    * This method find and return the index of an object in object array
        * Input: an object array, property name (string), property value
        * Output: it returns the index of the first object in an object array. It returns -1 if the object is not found. 
    ```
    let myIndex = OwnObjectArray.findIndex(objectArray,'name','Paula');   
    console.log(myIndex);
    ```
* OwnObjectArray.sortByAlphabet()
    * Input: an object array, property name (string), order (number)
    * Output: an array with sorting
    ```
    let sortObjectArray = OwnObjectArray.sortByAlphabet(objectArray,'name',1);
    console.log(sortObjectArray);
    ```
    order: 0-ascending / 1-descending
* OwnObjectArray.sortByNumeric()
   * Input: an object array, property name (string), order (number)
   * Output: an array with sorting
   ```
   let sortObjectArray = OwnObjectArray.sortByNumeric(objectArray,'age',1);
   console.log(sortObjectArray);
   ```
   order: 0-ascending / 1-descending