var today = new Date();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = today.getDay();

console.log("Today is "+days[day]);
if(hour > 12) {
   console.log("Current time is "+(hour - 12)+":"+minutes+":"+seconds+" PM");
} else {
    console.log("Current time is "+hour+":"+minutes+":"+seconds+" AM");
}

// console.log("Current time is "+(hour > 12 ? hour - 12 +" PM" : hour+"AM")+":"+minutes+":"+seconds);


