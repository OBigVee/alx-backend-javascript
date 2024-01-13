export default function hasValuesFromArray (uniqueList, arr) {
  for (const item of arr) {
    if (!uniqueList.has(item)) {
      return false
    }
  }
  return true
}
