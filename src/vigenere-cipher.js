const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alfavit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  //26 букв
let alfavit_code = [];

for (let i=0; i<alfavit.length; i++){
  alfavit_code[alfavit[i]] = i;
}

class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(message, key) {

    // if( !message || !key){
    //   throw new Error('Incorrect arguments!');
    // }

    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let result = '';

    message = message.toUpperCase()
    key = key.toUpperCase()
    key = key.replace(/\s/g,'');

    const repeatCount = Math.ceil(message.length / key.length)
    key = key.repeat(repeatCount)

    let alfavitCodeCount = 0;

    for (let i = 0; i < message.length; i++) {

      if (alfavit_code[message[i]] || alfavit_code[message[i]] === 0) {

        let number = alfavit_code[message[i]] + alfavit_code[key[alfavitCodeCount]];
        alfavitCodeCount++;
        if (alfavitCodeCount === key.length) {
          alfavitCodeCount = 0
        }

        if (number >= alfavit.length) {
          number -= alfavit.length
        }
        result += alfavit[number]
      } else {
        result += message[i]
      }
    }
    if (this.reverse === false) {
      result = [...result].reverse().join("")
    }

    return result;

  }

  decrypt(message, key) {

    // if( !message || !key){
    //   throw new Error('Incorrect arguments!');
    // }
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');


    let result = '';
    message = message.toUpperCase()
    key = key.toUpperCase()
    key = key.replace(/\s/g,'')


    // if (this.reverse === false) {
    //   message = [...message].reverse().join("")
    // }

    let alfavitCodeCount = 0;

    for (let i = 0; i < message.length; i++) {
      if (alfavit_code[message[i]] || alfavit_code[message[i]] === 0) {
        let number = alfavit_code[message[i]] - alfavit_code[key[alfavitCodeCount]];
        alfavitCodeCount++;

        if (alfavitCodeCount === key.length) {
          alfavitCodeCount = 0
        }

        if (number >= alfavit.length) {
          number -= alfavit.length
        }
        if (number < 0) {
          number += alfavit.length
        }

        result += alfavit[number]
      } else {
        result += message[i]
      }
    }

    if (this.reverse === false) {
      result = [...result].reverse().join("")
    }


    return result
  }

}
module.exports = {
  VigenereCipheringMachine
};
