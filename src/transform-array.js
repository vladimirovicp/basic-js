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
  let result = [];
  let bool = true;

  arr.forEach((el,index) => {
      if(typeof el === 'number' && bool){
        result.push(el);
      } else {

        if (bool){
        if(typeof el !== 'number'){
          switch(el){
            case '--discard-next': bool = false;
            break;
            case '--discard-prev': result.pop();
            break;
            case '--double-next': if(arr[index + 1]){result.push(arr[index + 1]);}
            break;
            case '--double-prev': if(arr[index-1]){result.push(arr[index-1])};
            break;
          }
        }
      } else {
        bool = true;
      }
      }

  });
}

module.exports = {
  transform
};
