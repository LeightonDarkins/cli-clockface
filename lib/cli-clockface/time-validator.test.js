const test = require('ava')

// Module Under Test
const subject = require('./time-validator')

test('is an object and has the correct methods', (t) => {
  t.is(typeof subject, 'object')
  t.is(typeof subject.timeStringIsValid, 'function')
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
