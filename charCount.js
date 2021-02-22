function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphanumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper Alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower Alpha (a-z)
    return false;
  }
  return true;
}

console.log(charCount("Hello World!"));
