//const { NotImplementedError } = require('../extensions/index.js');

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

// console.log(alfavit_code)



class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(message,key) {

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let result ='';

    // if( !message || !key){
    //   throw new Error('Incorrect arguments!');
    // }

    message = message.toUpperCase()
    key = key.toUpperCase()








    if (this.reverse === false){
      console.log(this.reverse)
    }

    console.log(result)
  }
  decrypt() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

// module.exports = {
//   VigenereCipheringMachine
// };


const directMachine = new VigenereCipheringMachine();

directMachine.encrypt('attack at dawn!', 'alphonse')

// const reverseMachine = new VigenereCipheringMachine(false);
//
// reverseMachine.encrypt()