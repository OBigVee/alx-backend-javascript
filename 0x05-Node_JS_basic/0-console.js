/**
 * displayMessage:
 * @param str
 * @returns {boolean}
 */
function displayMessage(str) {
    return  process.stdout.write(str+"\n");
}

module.exports = displayMessage;