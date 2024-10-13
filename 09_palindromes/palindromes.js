const palindromes = function (str) {
    let normalizedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
