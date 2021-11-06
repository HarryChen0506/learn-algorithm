const quickSort = (list = []) => {
  if (list.length <= 1) {
    return list
  }
  const base = list.shift()
  const left = [], right = []
  list.forEach(v => {
    if (v <= base) {
      left.push(v)
    } else {
      right.push(v)
    }
  })
  return [...quickSort(left), base, ...quickSort(right)]
}

export default quickSort