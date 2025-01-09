/**
 *
 * @param type
 * @param a
 * @param b
 * @returns {string|number}
 */
const calculateNumber = (type, a, b) => {
  switch (type) {
    case 'SUM':
      return Math.floor(a) + Math.floor(b)

    case 'SUBTRACT':
      return Math.floor(b) - Math.floor(a)

    case 'DIVIDE':
      if (Math.floor(b) === 0) return 'Error'
      return Math.floor(a) / Math.floor(b)
  }
}

module.exports = calculateNumber
