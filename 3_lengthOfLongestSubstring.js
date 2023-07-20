// Given a string s, find the length of the longest substringwithout repeating characters.

const lengthOfLongestSubstring = function (s) {
  let max = 1;
  let str = '';
  for (let i = 0; i < s.length; ++i) {
    let index = str.indexOf(s[i]);
    if (index !== -1) {
      str = str.slice(index + 1);
    }
    str += s[i];
    max = Math.max(str.length, max);
  }
  return max;
};
