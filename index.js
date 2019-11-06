
const fs = require('fs')

const getTokens = (filePath) => fs.readFileSync(filePath).toString().split('\r\n')

const increment = (() => {
    let acc = 0
    return () => {
        acc += 1
        return acc
    }
})()

const main = (argv) => {
    if (argv.length === 0) {
        throw new Error('No input file')
    }

    const tokens = getTokens(argv[0])
    for (let i = 0; i < tokens.length; i += 1) {
        const token = tokens[i]

        if (token === 'H') {
            console.log('Hello World')
        } else if (token === 'Q') {
            console.log(tokens.join('\r\n'))
        } else if (token === '9') {
            for (let j = 99; j > 0; j -= 1) {
                console.log(`${j} bottles of beer on the wall,`);
                console.log(`${j} bottles of beer.`);
                console.log(`Take one down, pass it around,`);
                console.log(`${j - 1} bottles of beer on the wall. \n`);
            }
        } else if (token === '+') {
            const value = increment()
            console.log(value)
        }
    }
}

main(process.argv.slice(2))
