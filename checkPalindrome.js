function checkPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("hello"));
