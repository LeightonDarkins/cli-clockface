const Constants = require('./Constants')
const CommandUtils = require('./command-utilities')
const TimeValidator = require('./time-validator')

module.exports = {
  getTimeAsString: (args) => {
    if (args.length < 3) {
      return Constants.DEFAULT_TIME
    }

    let timeAsString = Constants.EMPTY_STRING

    args.forEach((value, index) => {
      if (index >= 2) {
        timeAsString = CommandUtils.parseArgumentString(value)
      }
    })

    if (TimeValidator.timeStringIsValid(timeAsString)) {
      return timeAsString
    }

    return Constants.DEFAULT_TIME
  }
}
