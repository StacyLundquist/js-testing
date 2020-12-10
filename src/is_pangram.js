const alphabet = 'abcdefghijklmnopqrestuvwxyz'.split("")

const isPangram = function(text) {
    const letters = text.toLowerCase();
    return alphabet.every(x => text.includes(x));
};

module.exports = isPangram;

