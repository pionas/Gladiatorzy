// za pomocą metody .reduce wbudowanej w array
// odtwórz działanie innych metod:

// - array.some
function some(array, fn) {
    if (array === undefined || fn === undefined) {
        throw new Error("function some need array and fn parameters");
    }
    var finded = false;
    array.reduce((accumulator, currentValue, i, currentArray) => {
        if (fn(currentValue)) {
            finded = true;
            return currentArray.splice(1);
        }
        return currentValue;
    }, array[0]);
    return finded;
}

// - array.every
function every(array, fn) {
    if (array === undefined || fn === undefined) {
        throw new Error("function every need array and fn parameters");
    }
    var finded = true;
    array.reduce((accumulator, currentValue, i, currentArray) => {
        if (!fn(currentValue)) {
            finded = false;
            return currentArray.splice(1);
        }
        return currentValue;
    }, array[0]);
    return finded;
}
// - array.filter
function filter(array, fn) {
    if (array === undefined || fn === undefined) {
        throw new Error("function filter need array and fn parameters");
    }
    return array.reduce((accumulator, currentValue, i, currentArray) => {
        if (fn(currentValue)) {
            return accumulator.concat(currentValue);
        }
        return accumulator;
    }, []);
}
// - array.map
function map(array, fn) {
    if (array === undefined || fn === undefined) {
        throw new Error("function map need array and fn parameters");
    }
    return array.reduce(
        (accumulator, currentValue, i, currentArray) =>
            accumulator.concat(fn(currentValue)),
        []
    );
}