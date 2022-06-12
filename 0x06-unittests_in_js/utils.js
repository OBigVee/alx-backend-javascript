/**
 *
 * @type {{calculateNumber(*, *, *): (*|string)}}
 */
const Utils = {
    calculateNumber  (type, a, b) {
        switch (type) {
            case 'SUM':
                return Math.floor(a) + Math.floor(b)

            case 'SUBTRACT':
                return Math.floor(b) - Math.floor(a)

            case 'DIVIDE':
                return Math.floor(b) === 0 ? 'Error' : Math.floor(a) / Math.floor(b)
        }
    }
}
module.exports = Utils

