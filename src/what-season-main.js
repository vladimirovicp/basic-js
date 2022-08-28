
/**
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // весна — spring, лето — summer, осень — autumn (fall), зима — winter.

  console.log('date1',date);

  let result;



  if(date === undefined){
    console.log('Unable to determine the time of year!');
  }

  console.log('date2',date);

  if (Date.parse(date) == NaN) {
      console.log('Invalid date!');
  }
  console.log('date4',Date.parse(date));

  if( Object.prototype.toString.call(date) !== '[object Date]'){
    console.log('Invalid date!');
  }

  try {
    console.log('date3',date.getUTCMonth());
  }
  catch(err) {
    console.log('date3','error');
  }

  console.log('date5','55');

  // console.log('date3',date.getMonth());



  console.log(result);
}

// let currentData = new Date(2020, 02, 31);
// getSeason(new Date(2020, 02, 31));
// getSeason(new Date(2019, 11, 22, 23, 45, 11, 500));

//getSeason(new Date(2020, 1, 3, 4, 5, 6));
// getSeason('foo');

// console.log(new Date(2020, 02, 31))

// const fakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };
//
// //console.log(fakeDate);
//
// getSeason(fakeDate);


const deeperFakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  getMonth() {
    return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
    return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
    return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
    return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
    return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
    return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
    return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
    return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'
};

 getSeason(deeperFakeDate);

//getSeason(new Date(2020, 02, 31));
