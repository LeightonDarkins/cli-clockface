const DEFAULT_VALUE = 'o'
const HOUR_VALUE = 'h'
const MINUTE_VALUE = 'm'
const COMBINED_VALUE = 'x'

module.exports = {
  draw: function (hour, minute) {
    let timeArray = this.createDefaultTimeArray()

    let minuteValue = this.getMinuteAsHourValue(minute)

    this.setHourValue(timeArray, hour)
    this.setMinuteValue(timeArray, minuteValue)

    return this.constructOutputString(timeArray)
  },
  createDefaultTimeArray: function () {
    return [DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE, DEFAULT_VALUE]
  },
  getMinuteAsHourValue: function (minute) {
    let result = parseInt((minute / 60) * 12)

    if (result === 0) {
      result = 12
    }

    return result
  },
  setHourValue: function (array, value) {
    array[value - 1] = HOUR_VALUE
  },
  setMinuteValue: function (array, value) {
    let index = value - 1

    if (array[index] === HOUR_VALUE) {
      array[index] = COMBINED_VALUE
    } else {
      array[index] = MINUTE_VALUE
    }
  },
  constructOutputString: function (array) {
    let firstRow = '   ' + array[11] + '\n'
    let secondRow = '  ' + array[10] + ' ' + array[0] + '\n'
    let thirdRow = ' ' + array[9] + '   ' + array[1] + '\n'
    let fourthRow = array[8] + '     ' + array[2] + '\n'
    let fifthRow = ' ' + array[7] + '   ' + array[3] + '\n'
    let sixthRow = '  ' + array[6] + ' ' + array[4] + '\n'
    let seventhRow = '   ' + array[5] + '\n'

    return firstRow + secondRow + thirdRow + fourthRow + fifthRow + sixthRow + seventhRow
  }
}
