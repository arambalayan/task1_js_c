let isUnique = (str) => {
    let letter = {};
    for (const key of str) {
        if (letter[key]) {
            return false;
        }
        letter[key] = true;
    }
    return true;
}

console.log(isUnique("hello"));
console.log(isUnique("barev"));