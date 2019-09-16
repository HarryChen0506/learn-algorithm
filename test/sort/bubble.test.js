import bubbleSort from '../../code/sort/bubble.js'

test('冒泡排序', () => {
  expect(bubbleSort([1, 5, 2, 8, 6, 9])).toEqual([1, 2, 5, 6, 8, 9])
})

test('冒泡排序', () => {
  expect(bubbleSort([9, 8, 1, 3, 6, 5])).toEqual([1, 3, 5, 6, 8, 9])
})