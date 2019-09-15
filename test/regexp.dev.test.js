import repeatStr from '../code/regexp'

test('abcabc is repeatString', ( ) => {
  expect(repeatStr('abcabc')).toBe(true)
})

test('abcdabcdabcd is repeatString', ( ) => {
  expect(repeatStr('abcdabcdabcd')).toBe(true)
})

test('0abcabc is not repeatString', ( ) => {
  expect(repeatStr('0abcabc')).toBe(false)
})

test('abcdabc is not repeatString', ( ) => {
  expect(repeatStr('abcdabc')).toBe(false)
})