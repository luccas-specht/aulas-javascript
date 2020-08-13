// forma mais clean, porém mais complexa
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



// forma mais simples, "força bruta",  muitooo mais verbosa e com callback
const repeted = (times, callback) => {
    for (let i = 1; i < times; i++) {
        callback(i)
    }
}

const operationsCalculator = {
    sum: (values) => {
        let result = values[0]

        repeted(values.length, (index) => {
            result += values[index]
        })

        return result
    },

    multiplication: (values) => {
        let result = values[0]

        repeted(values.length, (index) => {
            result *= values[index]
        })

        return result
    },

    division: (values) => {
        let result = values[0]

        repeted(values.length, (index) => {
            result /= values[index]
        })

        return result
    },

    exponentiation: (values) => {
        let result = values[0]

        repeted(values.length, (index) => {
            result = Math.pow(result, values[index])
        })

        return result
    }
}

const calculatorNoClean = (operation, values) => {
    switch (operation) {
        case 'sum':
            console.log(operationsCalculator.sum(values))
        case 'multiplication':
            console.log(operationsCalculator.multiplication(values))
            break;
        case 'division':
            console.log(operationsCalculator.division(values))
            break;
        case 'exponentiation':
            console.log(operationsCalculator.exponentiation(values))
            break;
        default:
            console.log('not allow operation')
            break
    }

}

calculatorNoClean('sum', [1, 4, 0, 10, 9])
calculatorNoClean('multiplication', [3, 2])
calculatorNoClean('division', [1, 4])
calculatorNoClean('exponentiation', [3, 2])
calculatorNoClean('jose', [3, 2])