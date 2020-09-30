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
    if (array === undefined || callback === undefined) {
        throw new Error("function mapFn need array and callback parameters");
    }
    var arrayNew = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        arrayNew.push(callback(element));
    }

    return arrayNew;
}

function filterFn(array, callback) {
    if (array === undefined || callback === undefined) {
        throw new Error("function filterFn need array and callback parameters");
    }
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
    if (array === undefined || callback === undefined) {
        throw new Error("function reduceFn need array and callback parameters");
    }
    var value = initial !== undefined ? initial : array.shift();
    while (array.length > 0) {
        value = callback(value, array.shift());
    }
    return value;
}

function reduceRightFn(array, callback, initial) {
    if (array === undefined || callback === undefined) {
        throw new Error("function reduceRightFn need array, callback parameters");
    }
    var value = initial === undefined ? array.pop() : initial;
    while (array.length > 0) {
        value = callback(value, array.pop());
    }

    return value;
}

function everyFn(array, callback) {
    if (array === undefined || callback === undefined) {
        throw new Error("function everyFn need array and callback parameters");
    }
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
    if (array === undefined || callback === undefined) {
        throw new Error("function someFn need array and callback parameters");
    }
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
    if (array === undefined) {
        throw new Error("function entriesFn need array and callback parameters");
    }
    var current = 0;
    var values = [];
    while (current < array.length) {
        values.push([current, array[current]]);
        current++;
    }
    return values;
}