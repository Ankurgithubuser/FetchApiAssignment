function callback(arr){
    return arr.map((e)=> e*2);

}
function processIntegers(arr, callback) {
    return callback(arr);
}
const integer = [1,2,3,4,5];
console.log(processIntegers(integer,callback));