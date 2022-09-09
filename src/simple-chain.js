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
    if( typeof position === 'number' && position > 0 && position < this.masChain.length){
      this.masChain.splice(position - 1,1);
    } else {
      this.masChain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  reverseChain() {
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
    return result;
  }
};

module.exports = {
  chainMaker
};
