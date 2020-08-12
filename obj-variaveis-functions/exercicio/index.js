
const operations = {
    sum: (a, b) => a + b,
    multiplication: (a, b) => a * b,
    division: (dividend, divisor) => dividend / divisor,
    exponentiation: (base, exponent) => Math.pow(base, exponent)
}

const calculator = (operation, values) => {
    let resultCount = values[0]
    operation = operations[operation]

    if (typeof operation !== 'function') return 'not allow operation'

    for (let i = 1; i < values.length; i++) {
        resultCount = operation(resultCount, values[i])
    }

    return resultCount
}

console.log(calculator('sum', [1, 1, 9, 0, 10]))
console.log(calculator('multiplication', [3, 2]))
console.log(calculator('division', [1, 4]))
console.log(calculator('exponentiation', [2, 2]))
console.log(calculator('jose', [3, 2]))