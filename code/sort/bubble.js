const bubbleSort = function(list = []) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j+1]) {
        // 交换
        let temp = list[j+1]
        list[j+1] = list[j]
        list[j] = temp
      }
    }
  }
  return list
}

export default bubbleSort