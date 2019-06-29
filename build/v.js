
const v = 5

const a = [] // list4
const e = [] // list1
const i = [] // index
const o = [] // list2
const u = [] // list3

/**
 * Call API 1.
 */

function h0(q) {
  return e[q]()
}

function h1(q, a) {
  return e[q](a)
}

function h2(q, a, b) {
  return e[q](a, b)
}

/**
 * Call API 2.
 */

function t0(q) {
  return o[q]()
}

function t1(q, a) {
  return o[q](a)
}

function t2(q, a, b) {
  return o[q](a, b)
}

/**
 * Call API 3.
 */

function r0(q) {
  return u[q]()
}

function r1(q, a) {
  return u[q](a)
}

function r2(q, a, b) {
  return u[q](a, b)
}

/**
 * Define API 1.
 */

function s(x) {
  e.push(x)
}

/**
 * Define API 2.
 */

function n(x) {
  o.push(x)
}

/**
 * Define API 3.
 */

function d(x) {
  u.push(x)
}

/**
 * Set user data.
 */

d(function(p){
  const q = i.pop() || a.length - 1
  a[q] = p
  return q
})

/**
 * Get user data.
 */

d(function(q){
  return a[q]
})

/**
 * Delete user data.
 */

d(function(q){
  a[q] = undefined
  i.push(q)
})

/**
 * Main function.
 */

function m(e) {
  t(v, e)
}
