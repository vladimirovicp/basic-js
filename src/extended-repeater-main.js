// const { NotImplementedError } = require('../extensions/index.js');

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

//Ваша задача — реализовать функцию repeater(str, options). Эта функция возвращает повторяющуюся строку, основываясь на заданных параметрах:


// str это строка, которая будет повторена
// options это объект опций, который содержит следующие свойства:
//     repeatTimes устанавливает число повторений str
// separator это строка, разделяющая повторения str
// addition это дополнительная строка, которая будет добавлена после каждого повторения str
// additionRepeatTimes устанавливает число повторений addition
// additionSeparator это строка, разделяющая повторения addition

// Параметры str и addition по умолчанию являются строками. В случае, если они другого типа, он должны быть преобразованы к строке.
//
//     Параметры separator и additionSeparator являются строками.
//
//     repeatTimes и additionRepeatTimes являются целыми числами (в случае отсутствия любого из них соответствующая строка не повторяется).
//
// Единственный обязательный параметр — это str, остальные могут не быть переданы. Значение separator по умолчанию это '+'. Значение additionSeparator по умолчанию это '|'.
//
//     Например: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof str !="string"){ str = str + ''}

  if (options.addition){
    if (typeof options.addition !="string"){ options.addition = options.addition + ''}
  }

  if(!options.separator){options.separator = '+';}
  if(!options.addition && options.addition != false && options.addition != null){options.addition = '';}

  console.log(options.addition)

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




  console.log(result);


}

//repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

//repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }) //TESTstrADD!

//repeater('la', { repeatTimes: 3 })  // 'la+la+la'

//repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })

repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })
//'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');

//'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');

//repeater(123,{addition: 123,});

// module.exports = {
//   repeater
// };
