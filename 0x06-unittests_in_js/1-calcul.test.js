const assert = require('assert')
const calculateNumber = require('./1-calcul')
/**
 * mock test 1-calcul.js module
 */
describe('calculateNumber', () => {
  it('Round float point to whole numbers and SUM them', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 5)
  })

  it('Round down float a and b value and SUBTRACT b from a', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), 3)
  })
  it('Round down float  a and b to whole value and DIVIDE a by b', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.25)
  })

  it('Round down float a and b to whole value and DIVIDE a by b return 0 if b is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
  })
})
