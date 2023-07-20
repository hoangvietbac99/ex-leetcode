//Given an integer x, return true if x is a palindrome, and false otherwise.
const isPalindrome = function (x) {
  const arr = String(x).split('');
  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) {
      return false;
    }
  }
  return true;
};
