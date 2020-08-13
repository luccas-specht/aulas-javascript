// função passada por parametro

const repeted = (times, callback) => {
    for (let i = 1; i < times; i++) {
        callback(i)
    }
}

const operations = {
    sum: (values) => {
        let result = values[0]

        repeted(values.length, (index) => {
            result += values[index]
        })

        return result
    },

    subration: (values) => {
        let result = values[0]
        
        repeted(values.length, (index) => {
            result -= values[index]
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
    }
}