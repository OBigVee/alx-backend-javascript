/**
 * Reduce
 */

const getStudentIdsSum = (arrObj) => {
  /**
     * function returns the sum of all the student ids
     */
  const initValue = 0;
  return arrObj.reduce((previousValue, currentValue) => previousValue + currentValue.id, initValue);
}

export default getStudentIdsSum;