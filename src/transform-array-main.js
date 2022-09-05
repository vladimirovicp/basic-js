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
  // let commands;
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

  console.log(result);

}


// transform([1, 2, 3, '--double-next', 4, 5]);
// transform([1, 2, 3, '--discard-prev', 4, 5]);
transform([1, 2, 3, '--discard-next', 4, 5]);