function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (const element of str) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming"));
