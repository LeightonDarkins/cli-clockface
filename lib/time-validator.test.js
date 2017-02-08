const test = require('ava')

// Module Under Test
const subject = require('./time-validator')

test('is an object and has the correct methods', (t) => {
  t.is(typeof subject, 'object')

  t.is(typeof subject.getTimeElements, 'function')
  t.is(typeof subject.getHourAsInt, 'function')
  t.is(typeof subject.getMinuteAsInt, 'function')
  t.is(typeof subject.valueIsEmpty, 'function')
  t.is(typeof subject.valueIsNotANumber, 'function')
  t.is(typeof subject.hourValueIsInvalid, 'function')
  t.is(typeof subject.minuteValueIsInvalid, 'function')
  t.is(typeof subject.timeStringIsValid, 'function')
})

test('.getTimeElements() returns ["10", "35"] for "10:35"', (t) => {
  let input = '10:35'

  let result = subject.getTimeElements(input)

  t.is(result.length, 2)
  t.is(result[0], '10')
  t.is(result[1], '35')
})

test('.getHourAsInt() return 1 for "1"', (t) => {
  let input = '1'

  let result = subject.getHourAsInt(input)

  t.is(result, 1)
})

test('.getMinuteAsInt() return 15 for "10:15"', (t) => {
  let input = '10:15'

  let result = subject.getMinuteAsInt(input)

  t.is(result, 15)
})

test('.timeStringIsValid returns true for 00:00', (t) => {
  let timeString = '00:00'

  t.true(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns true for 12:59', (t) => {
  let timeString = '12:59'

  t.true(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns true for 1:47', (t) => {
  let timeString = '1:47'

  t.true(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns true for 1:07', (t) => {
  let timeString = '1:07'

  t.true(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns false for 1:7', (t) => {
  let timeString = '1:7'

  t.false(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns false for 13:47', (t) => {
  let timeString = '13:47'

  t.false(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns false for 13:47', (t) => {
  let timeString = '3:60'

  t.false(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns false for :47', (t) => {
  let timeString = ':47'

  t.false(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns false for 12:', (t) => {
  let timeString = '12:'

  t.false(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns false for a12:45', (t) => {
  let timeString = 'a12:45'

  t.false(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns true for 12a:45', (t) => {
  let timeString = '12a:45'

  t.true(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns true for 12:45a', (t) => {
  let timeString = '12:45a'

  t.true(subject.timeStringIsValid(timeString))
})

test('.timeStringIsValid returns true for 12:a45', (t) => {
  let timeString = '12:a45'

  t.false(subject.timeStringIsValid(timeString))
})
