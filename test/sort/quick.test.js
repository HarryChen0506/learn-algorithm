import quickSort from '../../code/sort/quick.js'

test('快速排序', () => {
  expect(quickSort([1, 5, 2, 8, 5, 6, 9])).toEqual([1, 2, 5, 5, 6, 8, 9])
})

test('快速排序', () => {
  expect(quickSort([9, 8, 1, 3, 6, 5])).toEqual([1, 3, 5, 6, 8, 9])
})

test('快速排序', () => {
  expect(quickSort([1, 8, 7, 3, 6, 5])).toEqual([1, 3, 5, 6, 7, 8])
})