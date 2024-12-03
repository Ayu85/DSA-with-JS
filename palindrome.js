// using built in methods
const isPalindrome = function (num) {
  return num === +num.toString().split("").reverse().join("");
};
console.log(isPalindrome(121));
// using for loop
