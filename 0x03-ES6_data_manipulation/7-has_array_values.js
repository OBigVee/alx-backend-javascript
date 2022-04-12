export default function hasValuesFromArray(uniqueList, arr) {
    const checker = false;
    for (const i = 0; i < arr.length; i++) {
        if (arr[i] === uniqueList[i]) {
            // checker = true;
            return true;
        } else {
            return false;
        }
    }
}