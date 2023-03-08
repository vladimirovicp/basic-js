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

//console.log(alfavit_code)



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

    //console.log(message.length)
    const repeatCount = Math.ceil(message.length/key.length)
    key = key.repeat(repeatCount)


    // console.log(message[0])
    // console.log(alfavit_code[message[0]])

    let alfavitCodeCount = 0;

    for (let i=0; i<message.length; i++){

      if (alfavit_code[message[i]] || alfavit_code[message[i]] === 0){

        let number = alfavit_code[message[i]] + alfavit_code[key[alfavitCodeCount]];
        alfavitCodeCount++;
        if( alfavitCodeCount === key.length){
          alfavitCodeCount = 0
        }

        if(number > alfavit.length){
          number -= alfavit.length
        }
        result += alfavit[number]
      } else {
        result += message[i]
      }
    }
    if (this.reverse === false){
      result = [...result].reverse().join("")
    }

    return result;
  }
  decrypt(message,key) {

    let result ='';
    message = message.toUpperCase()
    key = key.toUpperCase()


    if (this.reverse === false){
      message = [...message].reverse().join("")
    }

    let alfavitCodeCount = 0;

    for (let i=0; i<message.length; i++){
      if (alfavit_code[message[i]] || alfavit_code[message[i]] === 0){
        let number = alfavit_code[message[i]] - alfavit_code[key[alfavitCodeCount]];
        alfavitCodeCount++;

        if( alfavitCodeCount === key.length){
          alfavitCodeCount = 0
        }

        if(number > alfavit.length){
          number -= alfavit.length
        }
        if(number < 0){
          number += alfavit.length
        }

        result += alfavit[number]
      } else {
        result += message[i]
      }
    }

    return result




  }
}

// module.exports = {
//   VigenereCipheringMachine
// };




const directMachine = new VigenereCipheringMachine();

// directMachine.encrypt('attack at dawn!', 'alphonse')  //AEIHQX SX DLLU!

//console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));

console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

// const reverseMachine = new VigenereCipheringMachine(false);
//
// reverseMachine.encrypt()