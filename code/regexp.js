const repeatStr = function(str = '') {
  return /^([a-z]+)\1+$/.test(str)
}

module.exports = repeatStr