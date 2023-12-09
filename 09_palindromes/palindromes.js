const palindromes = function (string) {
    const myString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    return myString === myString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
