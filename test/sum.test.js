import sum from '../code/sum'

describe('测试sum', () => {
  // 这是mocha的玩法，jest可以直接兼容
  it('adds 11 + 12 to equal 23', () => {
    expect(sum(11, 12)).toBe(23)
  })
  // 这是jest的玩法，推荐用这种
  test('adds 1 + 2 to equal 3', ( ) => {
    expect(sum(1, 2)).toBe(3)
  })
})

