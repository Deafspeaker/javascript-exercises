const removeFromArray = function(passed, ...args) {

return passed.filter(val => !args.includes(val));
    
};

// Do not edit below this line
module.exports = removeFromArray;
