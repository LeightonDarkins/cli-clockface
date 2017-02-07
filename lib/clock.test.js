const test = require('ava')

// Module Under Test
const subject = require('./clock')

test('is an object and has the correct methods', (t) => {
  t.is(typeof subject, 'object')
  t.is(typeof subject.draw, 'function')
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
