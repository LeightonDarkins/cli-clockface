const test = require('ava')

// Module Under Test
const subject = require('./clock')

test('is an object and has the correct methods', (t) => {
  t.is(typeof subject, 'object')
  t.is(typeof subject.draw, 'function')
  t.is(typeof subject.createDefaultTimeArray, 'function')
  t.is(typeof subject.getMinuteAsHourValue, 'function')
  t.is(typeof subject.createDefaultTimeArray, 'function')
  t.is(typeof subject.setHourValue, 'function')
  t.is(typeof subject.setMinuteValue, 'function')
  t.is(typeof subject.constructOutputString, 'function')
})

test('.draw() displays a default clock face when given no arguments', (t) => {
  let expected = '   o\n' + '  o o\n' + ' o   o\n' + 'o     o\n' + ' o   o\n' + '  o o\n' + '   o\n'

  t.is(subject.draw(), expected)
})

test('.draw() displays the correct clockface when given 9 and 0', (t) => {
  let hour = 9
  let minute = 0
  let expected = '   m\n' + '  o o\n' + ' o   o\n' + 'h     o\n' + ' o   o\n' + '  o o\n' + '   o\n'

  t.is(subject.draw(hour, minute), expected)
})

test('.getMinuteAsHourValue() returns 2 for 14', (t) => {
  let input = 14

  t.is(subject.getMinuteAsHourValue(input), 2)
})

test('.getMinuteAsHourValue() returns 4 for 21', (t) => {
  let input = 21

  t.is(subject.getMinuteAsHourValue(input), 4)
})

test('.getMinuteAsHourValue() returns 3 for 15', (t) => {
  let input = 15

  t.is(subject.getMinuteAsHourValue(input), 3)
})
