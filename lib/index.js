const InputReader = require('./input-reader')

const ARGS = process.argv

let timeAsString = InputReader.getTimeAsString(ARGS)

console.log('Got Time: ' + timeAsString)
