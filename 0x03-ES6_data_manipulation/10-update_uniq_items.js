export default function updateUniqueItems (obj) {
  if (!(obj instanceof Map)) throw new Error('Cannot process')
  // obj.forEach((key, val) => {
  //     if (val === 1){
  //         obj.set(key, 100)
  //     }
  // });
  for (const key of obj.keys()) {
    if (obj.get(key) === 1) {
      obj.set(key, 100)
    }
  }
}
