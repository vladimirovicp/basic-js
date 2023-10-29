const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let obj = new Object();

  domains.forEach(items => {
    const arr = items.split('.');
    arr.reverse();
    let current = '';
    arr.forEach(el => {
      current = current + '.' + el;
      obj[current] = obj[current] === undefined ?  1 : obj[current] + 1;
    })
  });

  return obj;
}

module.exports = {
  getDNSStats
};
