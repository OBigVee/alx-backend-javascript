export default function createInt8TypedArray(len, position, val) {
    const buffer = new ArrayBuffer(len);
    const int8View = new DataView(buffer);
    if (position > len - 1) {
        throw new Error('Position outside range');
    }
    int8View.setInt8(position, val);
    return int8View;
}