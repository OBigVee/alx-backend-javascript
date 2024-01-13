/**
 * Typed Array
 *
 */
const createInt8TypedArray = (length, position, value) => {
/**
* function returns a new ArrayBuffer with a Int8 value
* at a specific position.
* @length: type number
* @position: type number
* @value: type number
*
*/
  const buffer = new ArrayBuffer(length)
  const int8View = new DataView(buffer)
  if (position > length - 1) {
    throw new Error('Position outside range')
  }
  int8View.setInt8(position, value)
  return int8View
}
export default createInt8TypedArray
