const isPangram = function(text) {
    const input = text.toLowerCase()
    const letters = input.match(/[a-z]/g);
    const letterCount = new Set(letters);
    if (letterCount.length === 26) {
        return true;
    }
};

module.exports = isPangram;

