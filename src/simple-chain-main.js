 const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  masChain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log(this.masChain.length);
    return this.masChain.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // `addLink(value)` добавляет звено, содержащее строковое представление `value` к цепочке;
    if(value === undefined){
      value = '';
    }
    this.masChain.push('( ' + value + ' )');
    return this;

  },
  removeLink(position) {
    // `removeLink(position)` удаляет звено цепи, находящееся в заданном положении;
    if( typeof position === 'number' && position >= 0 && position < this.masChain.length){
      this.masChain.splice(position - 1,1);
    } else {
      this.masChain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.masChain.reverse();
    return this;
  },
  finishChain() {
    // завершает цепь и возвращает ее
    let result = [];
    for (let i=0; i < this.masChain.length; i++) {

      if( i < this.masChain.length - 1){
        result += this.masChain[i] + '~~';
      } else{
        result += this.masChain[i]
      }
    }

    this.masChain = [];
    console.log(result);
    return result;
  }
};




// chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'
//chainMaker.addLink(1).addLink(2).addLink(3).finishChain();

//`chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()` => `'( 2 )~~( 3 )'`
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain();

 // `chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()` => `'( 2 )~~( 1 )~~( 3 )'`

 chainMaker.addLink(1).addLink(2).reverseChain().addLink().finishChain();
 chainMaker.addLink(1).addLink(2).reverseChain().addLink().finishChain();

// module.exports = {
//   chainMaker
// };
