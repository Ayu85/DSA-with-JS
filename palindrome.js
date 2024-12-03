// ***using built in methods***
const isPalindrome = function (num) {
  return num === +num.toString().split("").reverse().join("");
};
//*** using for loop***
function isPalindrome2(num) {
  const rev = reverseNumber(num);
  console.log(rev === num);
   
}
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(Math.min(num / 10));
  }
  return rev;
}
