function convertStringToInterger(sNumber, fractionDigits) {
    let newNumber = parseFloat(Number(sNumber).toFixed(fractionDigits));
    if (Number.isInteger(newNumber))
        return newNumber;
    else
        return 0;
}
function validateEmailAddress(sEmail) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(sEmail);
}
function forceKeyPressNumber() {
    let userKeyPress = window.event ? event.which : event.keyCode;
    if (userKeyPress !== 8){
        if (userKeyPress < 48 || userKeyPress > 57){
            event.preventDefault(); //stop the key press
            return false;
        }
    }else
        return true;
}
function limitInputLength(elementID,length) {
    let userKeyPress = window.event ? event.which : event.keyCode;
    if (document.getElementById(elementID).value.length === length && userKeyPress !== 8){
        event.preventDefault();
        return false;
    }else
        return true;
}
function buildJSONString(arrayOfObjects) {
    //Build JSON string from an array of objects
    let sJSON;
    let i;
    let arrLength = arrayOfObjects.length;

    sJSON = "[";
    for (i = 0; i < arrLength; i++){
        sJSON += JSON.stringify(arrayOfObjects[i]);
        if (i < arrLength-1)
            sJSON += ",";
    }
    sJSON += "]";
    return sJSON;
}
function buildArrayOfObjects(sJSON) {
    //Build an array of objects from JSON string
    let arrNew = [];
    let objJSON = JSON.parse(sJSON); //convert from JSON string to JSON object
    let i;

    for (i in objJSON)
        arrNew.push(objJSON[i]);

    return arrNew;
}