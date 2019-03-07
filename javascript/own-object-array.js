/**
 * An object array structure
 * const objectArraySample = [ 
 *    {
 *      "key": "value"
 *    },
 *    {
 *      "key": "value",
 *      "keyN": "valueN"
 *    }
 * ];
 */

const OwnObjectArray = {
    toJSONString(objectArray) {
        try {
            if (Array.isArray(objectArray) && objectArray.length > 0)
                return JSON.stringify(objectArray);
            else
                return null;
        } catch (e) { return false; }
    },
    toObjectArray(sJSON) {
        try {
            let objJSON = JSON.parse(sJSON) || [];
            if (Array.isArray(objJSON))
                return objJSON;
            else
                return [];
        } catch (e) { return false; }
    },
    findIndex(objectArray, sPropertyName, sPropertyValue) {
        try {
            if (Array.isArray(objectArray))
                return objectArray.findIndex(objItem => objItem[sPropertyName] === sPropertyValue);
            else
                return -1;
        } catch (e) { return false; }
    },
    sortByAlphabet(objectArray, sPropertyName, order) {
        try {
            objectArray.sort(function (a, b) {
                let x = a[sPropertyName].toUpperCase();
                let y = b[sPropertyName].toUpperCase();
                if (order === 1) { //1 is mean descending
                    if (x < y) { return 1; }
                    if (x > y) { return -1; }
                } else { //0 or other is mean ascending
                    if (x < y) { return -1; }
                    if (x > y) { return 1; }
                }
                return 0;
            });
            return objectArray;
        } catch (e) { return false; }
    },
    sortByNumeric(objectArray, sPropertyName, order) {
        try {
            objectArray.sort(function (a, b) {
                if (order === 1) //1 is mean descending
                    return b[sPropertyName] - a[sPropertyName];
                else //0 and other is mean ascending
                    return a[sPropertyName] - b[sPropertyName];
            });
            return objectArray;
        } catch (e) { return false; }
    },
    filterByProperty(objectArray, sPropertyName, sSeekingValue) {
        try {
            if (Array.isArray(objectArray)) {
                if (objectArray.length > 0)
                    return objectArray.filter(objItem => objItem[sPropertyName] === sSeekingValue);
                else
                    return null;
            } else
                return false;
        } catch (e) { return false; }
    },
    getMax(objectArray, sPropertyName) {
        try {
            if (Array.isArray(objectArray)) {
                if (objectArray.length > 0) {
                    let i;
                    let arrValues = [];
                    for (i in objectArray)
                        arrValues.push(objectArray[i][sPropertyName]);
                    return Math.max.apply(Math, arrValues);
                } else
                    return null;
            } else
                return false;
        } catch (e) { return false; }
    }
};
