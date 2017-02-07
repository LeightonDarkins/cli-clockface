const Constants = require('./constants')

const MAX_HOUR_VALUE = 12
const MAX_MINUTE_VALUE = 59
const MIN_VALUE = 0
const MIN_MINUTE_STRING_LENGTH = 2

module.exports = {
  getTimeElements: function (string) {
    return string.split(':')
  },
  getHourAsInt: function (string) {
    let timeElements = this.getTimeElements(string)

    let hourString = timeElements[Constants.HOUR_INDEX]

    return parseInt(hourString)
  },
  getMinuteAsInt: function (string) {
    let timeElements = this.getTimeElements(string)

    let minuteString = timeElements[Constants.MINUTE_INDEX]

    return parseInt(minuteString)
  },
  valueIsEmpty: function (value) {
    return value === ''
  },
  valueIsNotANumber: function (value) {
    return isNaN(parseInt(value))
  },
  hourValueIsInvalid: function (value) {
    if (this.valueIsEmpty(value)) {
      return true
    }

    if (this.valueIsNotANumber(value)) {
      return true
    }

    return value < MIN_VALUE || value > MAX_HOUR_VALUE
  },
  minuteValueIsInvalid: function (value) {
    if (this.valueIsEmpty(value)) {
      return true
    }

    if (this.valueIsNotANumber(value)) {
      return true
    }

    if (value.length < MIN_MINUTE_STRING_LENGTH) {
      return true
    }

    return value < MIN_VALUE || value > MAX_MINUTE_VALUE
  },
  timeStringIsValid: function (string) {
    let elements = this.getTimeElements(string)

    if (this.hourValueIsInvalid(elements[Constants.HOUR_INDEX])) {
      return false
    }

    if (this.minuteValueIsInvalid(elements[Constants.MINUTE_INDEX])) {
      return false
    }

    return true
  }
}
