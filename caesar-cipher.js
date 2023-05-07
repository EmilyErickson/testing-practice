function caesarCipher(string, key) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    let codedChar = encodeChars(charCode, key);
    result += String.fromCharCode(codedChar);
  }
  return result;
}

function encodeChars(charCode, key) {
  if (charCode > 96 && charCode < 123) {
    charCode += key % 26;
    if (charCode > 122) {
      charCode = charCode - 122 + 96;
    } else if (charCode < 97) {
      charCode = charCode - 97 + 123;
    }
  }

  if (charCode > 64 && charCode < 91) {
    charCode += key % 26;

    if (charCode > 90) {
      charCode = charCode - 90 + 64;
    } else if (charCode < 65) {
      charCode = charCode - 65 + 91;
    }
  }
  return charCode;
}

export { caesarCipher };
