const array = new Array(15);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillArray() {
    for (let i = 0; i < array.length; ++i) {
        array[i] = getRandomNumber(-100, 100);
    }
}

function replaceFromArray() {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
}

function addToArray() {
    const indexesArray = [];
    for (let i = 0; i < array.length; ++i) {
        if (i % 2 === 0 && array[i] === 0) {
            indexesArray.push(i);
        }
    }

    let lengthInc = 0;
    for (let index of indexesArray) {
        ++ lengthInc;
        array.splice(index + lengthInc, 0, -1);
    }
}

