# How to use
### OwnObjectArray
* OwnObjectArray.toJSONString()
   * This method convert an object array to a JSON string
   ```
   let objectArray = [{"name":"Maria","age":20},{"name":"Peter","age":25},{"name":"Paula","age":29}];
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
  let objectArray = [{"name":"Maria","age":20},{"name":"Peter","age":25},{"name":"Paula","age":29}];
  let myIndex = OwnObjectArray.findIndex(objectArray,'name','Paula');   
  console.log(myIndex);
  ```