

countCats([[0, 1, '^ ^'], [0, '^^', 2], ['^^', 1, 2]]);


function countCats(matrix) {
  let count = 0;
  matrix.forEach(items =>{
    items.forEach( item =>{
      if( typeof item === 'string'){
        item === '^^' ? count++ : count;
      }
    })
  })
  console.log(count);
}

