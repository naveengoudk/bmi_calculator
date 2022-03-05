function CreateObject(arr) {
    // Write your code here
    var dict ={}
    for (x=0 ; x<arr.length ; x=x+2){
        dict[arr[x]] = arr[x+1]
    }
    return dict
}

module.exports = CreateObject;
