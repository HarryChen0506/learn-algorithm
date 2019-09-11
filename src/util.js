// sort example

const demo = [
  {name: 3, age: 32, height: 8},
  {name: 1, age: 40, height: 12},
  {name: 2, age: 11, height: 12},
  {name: 3, age: 32, height: 12},
  {name: 3, age: 32, height: 23},
  {name: 4, age: 55, height: 12},
  {name: 5, age: 26, height: 12},
  {name: 6, age: 45, height: 12},
  {name: 7, age: 20, height: 12}
]


function sort(list = []) {
  return list.sort((a, b) => {
    // if (a.age === b.age) {
    //   return a.height - b.height
    // }
    // return a.age - b.age
    const keys = ['age', 'height']
    return compare(a, b, keys)
  })
}
function compare(a = {}, b = {}, keys) {
  if (keys.length === 0) {
    return 0
  }
  let key = keys.shift()
  if (a[key] === b[key]) {
    return compare(a, b, keys)
  }
  return a[key] - b[key]
}
// eslint-disable-next-line no-console
console.log(sort(demo))