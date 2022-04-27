// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCatLast = [...cats, name];
    return newCatLast;
}

function prependCat(name) {
    const newCatFirst = [name, ...cats];
    return newCatFirst;
}

function removeLastCat() {
    const byeLastCat = cats.slice(0,2);
    return byeLastCat;
}

function removeFirstCat() {
    const byeFirstCat = cats.slice(1);
    return byeFirstCat;
}