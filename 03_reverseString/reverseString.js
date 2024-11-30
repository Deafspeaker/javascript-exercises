const reverseString = function(str) {

   //return str.split("").reverse().join("");
const strSplit = str.split("");
const reversed = strSplit.reverse();
const newStr = reversed.join("");
return newStr;
} 


// Do not edit below this line
module.exports = reverseString;
