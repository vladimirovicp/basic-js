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

  //  parameter must be an instance of the Array!

    if(!Array.isArray(arr)){
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

  let result = [];
  let bool = true;

  arr.forEach((el,index) => {
      // console.log(el);
      if( !(el === '--discard-next'|| el === '--discard-prev' || el === '--double-next' || el === '--double-prev') && bool){
        result.push(el);
      } else {

        if (bool){
            if(typeof el !== 'number'){
              switch(el){
                case '--discard-next': bool = false;
                break;
                case '--discard-prev':  if(arr[index - 2] !== '--discard-next'){result.pop()};
                break;
                  case '--double-next': if(arr[index + 1] !== undefined){result.push(arr[index + 1]);}
                      break;
                  case '--double-prev': if(arr[index - 1] !== undefined && arr[index - 2] !== '--discard-next'){result.push(arr[index-1])};
                      break;
              }
            }
      } else {
        bool = true;
      }
        console.log(result)
      }

  });

  console.log(result);

}


// transform([1, 2, 3, '--double-next', 4, 5]);
// transform([1, 2, 3, '--discard-prev', 4, 5]);
// transform([1, 2, 3, '--discard-next', 4, 5]);
// transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);
//[1, 2, 3, 4, 5]

// transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]);
//[1, 2, 3, 1337, 4, 5]

// transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]);

//[1, 2, 3, 1337, 1337, 1337, 4, 5]

transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])

//[1, 2, 3, 4, 5]

