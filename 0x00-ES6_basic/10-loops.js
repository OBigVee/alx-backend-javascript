// Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.


export default function appendToEachArrayValue(array, appendString) {
    let count = 0;
    for (const idx of array) {
        //let value = array[idx];
        array[count] = appendString + idx;
        ++count;
    }

    return array;
}