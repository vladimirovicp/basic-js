const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

    let result = [];
    names.forEach(item =>{
        if(result.includes(item)){
            let count = 1;
            let newItem = item + '(' + count +')';
            while(result.includes(newItem)){
                count++;
                newItem = item + '(' + count +')';
            }
            result.push(newItem);
        } else{
            result.push(item);
        }
    })


    console.log(result);

}


const input = ["file", "file", "image", "file(1)", "file"];
renameFiles(input);



// let arr = names.reduce((a, c) => {
//     if (a[0][c]) {
//         let newElement = `${c}(${a[0][c]})`
//         a[1][a[1].length] = newElement
//         a[0][c] += 1
//         a[0][newElement] ? a[0][newElement] +=1 : a[0][newElement] = 1
//     } else {
//         a[0][c] = 1
//         a[1].push(c)
//     }
//     return a
// }, [{}, []])
// return arr[1]




// function fileNaming(names) {
//     return [...names.reduce((set, name) => {
//         if (!set.has(name)) {
//             set.add(name);
//         } else {
//             let str = `${name}(1)`;
//             for (let j = 1; set.has(str); str = `${name}(${++j})`); //intentional no
//             set.add(str);
//         }
//         return set;
//     }, new Set())];
// }
// const names = ["doc", "doc", "image", "doc(1)", "doc"];
// console.log('output: ', fileNaming(names));
