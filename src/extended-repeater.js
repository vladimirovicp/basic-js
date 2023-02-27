const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof str !="string"){ str = str + ''}
  if (options.addition){
    if (typeof options.addition !="string"){ options.addition = options.addition + ''}
  }

  if(!options.separator){options.separator = '+';}

  if(!options.addition){
    options.addition = options.addition +'';
  }
  if(options.addition == 'undefined'){ options.addition = '' }
  //if(!options.addition && options.addition != false && options.addition != null){options.addition = '';}
  if(!options.additionSeparator){options.additionSeparator = '|';}

  if(!options.repeatTimes){options.repeatTimes = 1;}
  if(!options.additionRepeatTimes){options.additionRepeatTimes = 1;}

  let result='';
  for(let i=0; i < options.repeatTimes; i++){
    result += str;
    for(let j=0; j < options.additionRepeatTimes; j++){
      result += options.addition;
      if(options.additionRepeatTimes - 1 != j){  result += options.additionSeparator; }
    }
    if(options.repeatTimes - 1 != i){result += options.separator;}
  }

  return result;
}

module.exports = {
  repeater
};
