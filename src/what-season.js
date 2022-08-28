const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {Error} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // весна — spring, лето — summer, осень — autumn (fall), зима — winter.

  let result = '';

  if(date === undefined){
    return 'Unable to determine the time of year!';
  }

  // if (isNaN(Date.parse(date))) {
  //   return 'Invalid date!';
  // }

  if( Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error('Invalid date!');
  }

  let month;

  try {
    month = date.getUTCMonth();
  }
  catch(err) {
    throw new Error('Invalid date!');
  }


  switch (month){
    case 0: result = 'winter';
      break;
    case 1: result = 'winter';
      break;
    case 2: result = 'spring';
      break;
    case 3: result = 'spring';
      break;
    case 4: result = 'spring';
      break;
    case 5: result = 'summer';
      break;
    case 6: result = 'summer';
      break;
    case 7: result = 'summer';
      break;
    case 8: result = 'autumn';
      break;
    case 9: result = 'autumn';
      break;
    case 10: result = 'autumn';
      break;
    case 11: result = 'winter';
      break;

    default:  result = 'Непонятный месяц';
  }

  // switch (date.getMonth()){
  //   case 1: result = 'summer';
  //     break;
  //   case 2: result = 'summer';
  //     break;
  //   case 3: result = 'autumn';
  //     break;
  //   case 4: result = 'autumn';
  //     break;
  //   case 5: result = 'autumn';
  //     break;
  //   case 6: result = 'winter';
  //     break;
  //   case 7: result = 'winter';
  //     break;
  //   case 8: result = 'winter';
  //     break;
  //   case 9: result = 'spring';
  //     break;
  //   case 10: result = 'spring';
  //     break;
  //   case 11: result = 'spring';
  //     break;
  //   case 12: result = 'summer';
  //     break;
  //
  //   default:  result = 'Invalid date!';
  // }



  return result;
}

module.exports = {
  getSeason
};
