function set(vector, i) {
    const index = Math.floor(i / 32)
    const smallIndex = i % 32
    vector[index] = vector[index] | (1 << smallIndex)
    return vector
}

function get(vector, i) {
    const index = Math.floor(i / 32)
    const smallIndex = i % 32
    const value = vector[index] & (1 << smallIndex)
    return value !== 0
}

function buildVector(bitCount) {
    const elementCount = Math.ceil(bitCount / 32)
    const vector = new Array(elementCount)
    for (let i = 0; i < elementCount; i++) {
        vector[i] = 0
    }
    return vector
}

const vector = buildVector(124)
console.log(set(vector, 2))
console.log(set(vector, 4))
console.log(set(vector, 50))
console.log(get(vector, 2))
console.log(get(vector, 20))