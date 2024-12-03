const isPalindrome = function (num) {
  return num === +num.toString().split("").reverse().join("");
};
console.log(isPalindrome(121));

