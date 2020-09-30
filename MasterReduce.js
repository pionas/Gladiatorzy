// za pomocą metody .reduce wbudowanej w array
// odtwórz działanie innych metod:

// - array.some
function some(array, fn) {
    var finded = false;
    array.reduce((newArray, el) => {
        if (fn(el)) {
            finded = true;
        }
    }, []);
    return finded;
}

// - array.every
function every(array, fn) {
    return array.reduce((el) => fn(el));
}
// - array.filter
function filter(array, fn) {
    return array.reduce((newArray, el) => {
        if (fn(el)) {
            return [...newArray, el];
        }
        return [...newArray];
    }, []);
}
// - array.map
function map(array, fn) {
    return array.reduce((newArray, el) => [...newArray, fn(el)], []);
}