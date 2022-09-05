const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

    if(!Array.isArray(arr)){
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

  let result = [];
  let bool = true;

  arr.forEach((el,index) => {
      if(el === '--discard-next'|| el === '--discard-prev' || el === '--double-next' || el === '--double-prev'  && bool){
        result.push(el);
      } else {

        if (bool){
        if(typeof el !== 'number'){
          switch(el){
            case '--discard-next': bool = false;
            break;
              case '--discard-prev': if ( arr[index-1] === result.slice(-1)){result.pop();}
            break;
            case '--double-next': if(arr[index + 1]){result.push(arr[index + 1]);}
            break;
            case '--double-prev': if(arr[index-1]){result.push(arr[index-1])};
            break;

              // case '--double-next': arr[index + 1] === undefined ? result = el  : result.push(arr[index + 1])
              //     break;
              // case '--double-prev': arr[index-1] === undefined ? result = el  : result.push(arr[index-1])
              //     break;
          }
        }
      } else {
        bool = true;
      }
      }

  });
  return result;


}

module.exports = {
  transform
};
