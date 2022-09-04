/**
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 * * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
 * * `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
 * * `--double-next` дублирует следующий за ней элемент исходного массива в преобразованном массиве.
 * * `--double-prev` дублирует предшествующий ей элемент исходного массива в преобразованном массиве.
 *
 */
function transform(arr) {
  let commands;
  let result = [];

  arr.forEach(el =>{
    if (typeof el !== 'number'){
      commands = el;
    }
  })

  if( commands === '--double-next'){
      result = arr.map( (el,key) => {
        if (el === '--double-next'){
          return arr[key+1];
        } else{
          return el;
        }
      })
  }

  if( commands === '--discard-prev'){
    result = arr.filter( (el,key) => {
      if (!(el === '--discard-prev' || arr[key+1] === '--discard-prev')){
        return el;
      }
    })
  }

  console.log(result);

}


// transform([1, 2, 3, '--double-next', 4, 5]);
transform([1, 2, 3, '--discard-prev', 4, 5]);