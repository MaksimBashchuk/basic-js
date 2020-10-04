const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.val = direct;
  }

    keyRepeater(message, key) {
    let newKey = '';
    let a = message.split(' ').join('');
    for (let i = 0; i < a.length; i++) {
      newKey += key[i % key.length];
    }
    return newKey;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('THROWN');
    let newKey = this.keyRepeater(message, key).toLowerCase();
    let resArr = [];
    let a = message.split(' ').join('').toLowerCase();
    for (let i = 0; i < a.length; i++) {
      if (a.charCodeAt(i) - 97 >= 0 && a.charCodeAt(i) - 97 < 26) {
        let charIndex = ((a.charCodeAt(i) + newKey.charCodeAt(i) - 194) % 26) + 97;
        resArr.push(charIndex);
      } else {
        resArr.push(a.charCodeAt(i));
      }
    }
    if (!this.val) resArr.reverse();
    for (let i = 0; i < resArr.length; i++) {
      if (message[i] === ' ') {
        resArr.splice(i, 0, message.charCodeAt(i));
      }
    }
    let result = String.fromCharCode(...resArr);
    return result.toUpperCase();
  } 

  decrypt(message, key) {
    if (!message || !key) throw new Error('THROWN');
    let newKey = this.keyRepeater(message, key).toLowerCase();
    let resArr = [];
    let a = message.split(' ').join('').toLowerCase();
    for (let i = 0; i < a.length; i++) {
      if (a.charCodeAt(i) - 97 >= 0 && a.charCodeAt(i) - 97 < 26) {
        let charIndex = (Math.abs((a.charCodeAt(i) - newKey.charCodeAt(i)) + 26) % 26) + 97;
        resArr.push(charIndex);
      } else {
        resArr.push(a.charCodeAt(i));
      }
    }
    if (!this.val) resArr.reverse();
    for (let i = 0; i < resArr.length; i++) {
      if (message[i] === ' ') {
        resArr.splice(i, 0, message.charCodeAt(i));
      }
    }
    let result = String.fromCharCode(...resArr);
    return result.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;