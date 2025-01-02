const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !Array.isArray(members) ) {
      return false;  
  }
  const noFalsyMembers = members.filter((item) => typeof item === 'string');
  console.log(noFalsyMembers);
  const trimMembers = noFalsyMembers.map((item) => item.trim().toUpperCase());
  return trimMembers.sort().reduce((acc, item) => {
      acc += item.slice(0, 1);
    return acc;
  }, '');
}

module.exports = {
  createDreamTeam
};
