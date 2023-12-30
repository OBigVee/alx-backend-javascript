/**
 * Filter
 */

const getStudentsByLocation = (obj, city) => {
  /**
     * function returns an array of objects that are
     * located in a specific city
     * it accepts a list of students from an object and city
     * @obj: list of student object
     * @city: the specific location
     */
  return obj.filter((items) => items.location === city)
}

export default getStudentsByLocation
