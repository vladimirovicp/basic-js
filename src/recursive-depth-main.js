const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // remove line with error and write your code here

      let result = 1;


      for (let i in arr){
          let max =1;
          if(typeof(arr[i]) =="object"){
              max += this.calculateDepth(arr[i])
          } else{
              //console.log(arr[i] + " |")
          }
          result = result > max ? result : max


      }

      //if(typeof(arr) == 'object'){


          // for (let i=0; i<arr.length; i++){
          //     if(typeof(arr[i]) == 'object'){
          //         result++
          //         let newResult = this.calculateDepth(arr[i]);
          //
          //         result = result >= newResult ? result : newResult
          //     } else{
          //         //console.log(arr[i]);
          //     }
          // }

      //}

      return result;

  }
}
//
const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));
//depthCalc.calculateDepth([1, 2, 3, 4, [1,[1,1]]])
// module.exports = {
//   DepthCalculator
// };
