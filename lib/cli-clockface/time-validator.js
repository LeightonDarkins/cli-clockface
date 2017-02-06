const MAX_HOUR_VALUE = 12
const MAX_MINUTE_VALUE = 59
const MIN_VALUE = 0
const HOUR_INDEX = 0
const MINUTE_INDEX = 1
const MIN_MINUTE_STRING_LENGTH = 2

module.exports = {
  valueIsEmpty: function (value) {
    return value === ''
  },
  hourValueIsInvalid: function (value) {
    if (this.valueIsEmpty(value)) {
      return true
    }

    return value < MIN_VALUE || value > MAX_HOUR_VALUE
  },
  minuteValueIsInvalid: function (value) {
    if (this.valueIsEmpty(value)) {
      return true
    }

    if (value.length < MIN_MINUTE_STRING_LENGTH) {
      return true
    }

    return value < MIN_VALUE || value > MAX_MINUTE_VALUE
  },
  timeStringIsValid: function (string) {
    let elements = string.split(':')

    if (this.hourValueIsInvalid(elements[HOUR_INDEX])) {
      return false
    }

    if (this.minuteValueIsInvalid(elements[MINUTE_INDEX])) {
      return false
    }

    return true
  }
}
