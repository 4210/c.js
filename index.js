
const x = [ [2], [2] ]

function s(q, p) {
  if (q < 2) return
  x[q] = p
}

function z(q) {
  return x[q]
}

function c(q) {
  return x[q].apply(null, Array.prototype.slice.call(arguments, 1))
}

function r(q) {
  if (q < 2) return
  x[1].push(q)
  x[q] = undefined
}

function n() {
  var q = x[1].shift()
  if (q) return q
  const p = x[0][0] || 0
  q = p + 1
  x[0][0] = q
  return q
}