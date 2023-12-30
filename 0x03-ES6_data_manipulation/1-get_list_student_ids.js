/**
 * More Mapping
 */

const getListStudentsIds = (obj) => {
  // function returns an array of ids from a list on object.
  if (!Array.isArray(obj)) {
    return []
  } else {
    return obj.map((key) => key.id)
  }
}

export default getListStudentsIds
