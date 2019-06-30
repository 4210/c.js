
/**
 * Expose main function.
 */

this.t = t

/**
 * Data containers.
 */

const a = [] // list4
const e = [] // list1
const i = [] // index
const o = [] // list2
const u = [] // list3

/**
 * Call API 1.
 */

function h(q) {
  return e[q].apply(e, Array.prototype.slice.call(arguments, 1))
}

function h0(q) {
  return e[q]()
}

function h1(q, a) {
  return e[q](a)
}

function h2(q, a, b) {
  return e[q](a, b)
}

function h3(q, a, b, c) {
  return e[q](a, b, c)
}

function h4(q, a, b, c, d) {
  return e[q](a, b, c, d)
}

function h5(q, a, b, c, d, e) {
  return e[q](a, b, c, d, e)
}

function h6(q, a, b, c, d, e, f) {
  return e[q](a, b, c, d, e, f)
}

/**
 * Call API 2, the main function.
 */

function t(q) {
  return o[q].apply(o, Array.prototype.slice.call(arguments, 1))
}

function t0(q) {
  return o[q]()
}

function t1(q, a) {
  return o[q](a)
}

function t2(q, a, b) {
  return o[q](a, b)
}

function t3(q, a, b, c) {
  return o[q](a, b, c)
}

function t4(q, a, b, c, d) {
  return o[q](a, b, c, d)
}

function t5(q, a, b, c, d, e) {
  return o[q](a, b, c, d, e)
}

function t6(q, a, b, c, d, e, f) {
  return o[q](a, b, c, d, e, f)
}

/**
 * Define API 1.
 */

function n(x) {
  e.push(x)
}

/**
 * Define API 2.
 */

function r(x) {
  o.push(x)
}

/**
 * Define API 2.
 */

function s(x) {
  u.push(x)
}

/**
 * Set user data.
 */

s(function(p){
  const q = i.pop() || a.length - 1
  a[q] = p
  return q
})

/**
 * Get user data.
 */

s(function(q){
  return a[q]
})

/**
 * Delete user data.
 */

s(function(q){
  a[q] = undefined
  i.push(q)
})

/**
 * Get data.
 */

function d(x) {
  return u[1](x)
}
