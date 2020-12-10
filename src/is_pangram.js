const isPangram = function(text) {
    const letters = text.toLowercase().match(/[a-z]/g);
    const letterCount = new Set(letters);
    if (letterCount.length === 26) {
        return true;
    }
};

module.exports = isPangram;

