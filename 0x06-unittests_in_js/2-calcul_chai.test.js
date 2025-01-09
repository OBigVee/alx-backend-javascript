const calculateNumber = require('./2-calcul_chai')
const expect = require('chai').expect

// Round float point to whole numbers and SUM them
expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(5)
// Round down float a and b value and SUBTRACT b from a
expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(3)
// Round down float  a and b to whole value and DIVIDE a by b
expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.25)
// Round down float a and b to whole value and DIVIDE a by b return Error if b is 0
expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
