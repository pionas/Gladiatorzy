// Treść zadania #6 - metody wbudowane w Array
// z uwagi na to, że JS jest jezykiem funkcyjnym warto opanować jego podstawowe metody

// .map
// .filter
// .reduce
// .reduceRight
// .every
// .some
// .entries

// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

function mapFn(array, callback) {
    var arrayNew = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        arrayNew.push(callback(element));
    }

    return arrayNew;
}

function filterFn(array, callback) {
    var arrayNew = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (callback(element)) {
            arrayNew.push(element);
        }
    }

    return arrayNew;
}

function reduceFn(array, callback, initial) {
    var value = initial;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        value = callback(value, element);
    }

    return value;
}

function reduceRightFn(array, callback, initial) {
    var value = array[array.length - 1];
    for (let index = array.length - 2; index >= 0; index--) {
        const element = array[index];
        value = callback(value, element);
    }

    return value;
}

function everyFn(array, callback) {
    var every = true;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!callback(element)) {
            every = false;
            break;
        }
    }

    return every;
}

function someFn(array, callback) {
    var finded = false;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (callback(element)) {
            finded = true;
            break;
        }
    }

    return finded;
}

function entriesFn(array) {
    var current = 0;
    var values = [];
    while (current < array.length) {
        values.push([current, array[current]]);
        current++;
    }
    return values;
}