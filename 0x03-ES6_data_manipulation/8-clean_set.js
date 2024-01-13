export default function cleanSet (uniqueList, startString) {
  /**
     * function returns a string of all the set values that start
     * with a specific string
     */
  const subStrings = []
  if (!uniqueList || !startString || !(uniqueList instanceof Set) || typeof startString !== 'string') {
    return ''
  }
  for (const item of uniqueList.values()) {
    if (typeof item === 'string' && item.substring(startString.length)) {
      const subStrValue = item.substring(startString.length)

      if (subStrValue && subStrValue !== item) {
        subStrings.push(subStrValue)
      }
    }
  }
  return subStrings.join('-')
}
