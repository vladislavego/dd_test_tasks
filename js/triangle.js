function printTriangle(triangleSize) {
    let elements = '#';
    let spaces = '';

    for (let i = triangleSize; i > 0; --i) {
        for (let j = 0; j < i; ++j) {
            spaces += ' ';
        }
        console.log(spaces + elements);
        elements += ' #';
        spaces = '';
    }
}
