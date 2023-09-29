function manipulateString(str,callback) {
    const manipulatedString = str.toUpperCase();
 
    callback(manipulatedString);
     
 }
 function logString(manipulatedString) {
     console.log(`The manipulated string is:${manipulatedString}`);
 
 }
 manipulateString("hello,world",logString);