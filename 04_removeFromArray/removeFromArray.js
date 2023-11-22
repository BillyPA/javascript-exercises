


const removeFromArray = function(arr, ...target) {
    
    return arr.filter(value => !target.includes(value));

};

// Do not edit below this line
module.exports = removeFromArray;
