const Constants = require('./Constants')

const ARG_INDEX = 0
const VALUE_INDEX = 1
const SPLIT_STRING = '='

module.exports = {
  parseArgumentString: (string) => {
    let elements = string.split(SPLIT_STRING)
    let argument = elements[ARG_INDEX]

    if (argument === '--time') {
      let value = elements[VALUE_INDEX]

      if (value === '') {
        return Constants.DEFAULT_TIME
      }

      return value
    }

    return Constants.DEFAULT_TIME
  }
}
