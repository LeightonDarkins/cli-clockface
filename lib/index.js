const InputReader = require('./input-reader')
const TimeValidator = require('./time-validator')
const Clock = require('./clock')

const ARGS = process.argv

let timeAsString = InputReader.getTimeAsString(ARGS)

let hour = TimeValidator.getHourAsInt(timeAsString)
let minute = TimeValidator.getMinuteAsInt(timeAsString)

console.log(Clock.draw(hour, minute))
