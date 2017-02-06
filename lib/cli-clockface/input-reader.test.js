const test = require('ava')
const Constants = require('./Constants')

// Module Under Test
const subject = require('./input-reader')

test('is an object and has the correct methods', (t) => {
  t.is(typeof subject, 'object')
  t.is(typeof subject.getTimeAsString, 'function')
})

test('.getTimeAsString returns 10:45 when given --time=10:45', (t) => {
  const args = ['1', '2', '--time=10:45']

  t.is(subject.getTimeAsString(args), '10:45')
})

test('.getTimeAsString returns default time when given --time=10:60', (t) => {
  const args = ['1', '2', '--time=10:60']

  t.is(subject.getTimeAsString(args), Constants.DEFAULT_TIME)
})

test('.getTimeAsString returns default time when given --time=13:59', (t) => {
  const args = ['1', '2', '--time=13:59']

  t.is(subject.getTimeAsString(args), Constants.DEFAULT_TIME)
})

test('.getTimeAsString returns 00:00 when given --time=00:00', (t) => {
  const args = ['1', '2', '--time=00:00']

  t.is(subject.getTimeAsString(args), '00:00')
})

test('.getTimeAsString returns default time when given time=10:45', (t) => {
  const args = ['1', '2', 'time=10:45']

  t.is(subject.getTimeAsString(args), Constants.DEFAULT_TIME)
})

test('.getTimeAsString returns default time when given --time=', (t) => {
  const args = ['1', '2', '--time=']

  t.is(subject.getTimeAsString(args), Constants.DEFAULT_TIME)
})

test('.getTimeAsString returns default time when given too few arguments', (t) => {
  const args = ['1', '2']

  t.is(subject.getTimeAsString(args), Constants.DEFAULT_TIME)
})

test('.getTimeAsString returns default time when given incorrect arguments', (t) => {
  const args = ['1', '2', '--time=', '10:45']

  t.is(subject.getTimeAsString(args), Constants.DEFAULT_TIME)
})
