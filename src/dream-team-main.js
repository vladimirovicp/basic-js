
/**
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
    let result= [];
    if (typeof members != 'object'){
        return false;
    }
    members = members.filter((n) => typeof n === 'string');
    members.forEach((el) => {
        result.push(el.split(' ').join('').toUpperCase()[0]);
    });
    result = result.sort();
    console.log(result.join(''));
}

createDreamTeam([' matt', 'Ann', 'Dmitry', 'Max', true, null]);

