/**
 * displayMessage:
 * @param str
 * @returns {boolean}
 */
module.exports = function displayMessage(str) {
    return  process.stdout.write(str+"\n");
}