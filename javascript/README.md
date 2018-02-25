# How to use
### OwnObjectArray
Testing object array
```
let objectArray = [{"name":"Maria","age":20},{"name":"Peter","age":25},{"name":"Paula","age":29}];
```
* OwnObjectArray.toJSONString()
   * This method convert an object array to a JSON string
   ```
   let myJSONString = OwnObjectArray.toJSONString(objectArray);   
   console.log(myJSONString);
   ```
* OwnObjectArray.toObjectArray()
   * This method convert a JSON string to an object array
    ```
    let objectArray = OwnObjectArray.toObjectArray(myJSONString);
    ```
* OwnObjectArray.findIndex()
   * This method find and return the index of an object in object array
   ```
   let myIndex = OwnObjectArray.findIndex(objectArray,'name','Paula');   
   console.log(myIndex);
   ```
* OwnObjectArray.sortByAlphabet()
    ```
    let sortObjectArray = OwnObjectArray.sortByAlphabet(objectArray,'name',1);
    console.log(sortObjectArray);
    ```
    1: descending
    0 or other: ascending
* OwnObjectArray.sortByNumeric()
   ```
   let sortObjectArray = OwnObjectArray.sortByNumeric(objectArray,'age',1);
   console.log(sortObjectArray);
   ```
   1: descending
   0 or other: ascending