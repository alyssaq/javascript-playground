/*
ECMA5: Array some and every
Return a function that takes a list of valid users, and returns a function that returns true
if all of the supplied users exist in the original list of users.

Use array#some and Array#every to check every user passed to your returned
function exists in the array passed to the exported function.

suppliedUsers = [ {id: 1, id: 3} ]
var validUsers = [
  { id: 1 },
  { id: 2 },
  { id: 6 },
  { id: 3 },
]
*/


var isIn = function(validUsers) {
  return function(element, index) {
    return validUsers.some(function(validUser) {
      return element.id === validUser.id;
    });
  };
};

//loop through every suppliedUsers.
// check that it is in validUsers
var validArrayChecker = function(validUsers) {
  return function(suppliedUsers) {
   var isInValidFunctor = isIn(validUsers);
   return suppliedUsers.every(isInValidFunctor);
  };
};

