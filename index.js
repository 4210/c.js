
/**
 * Main.
 */

function m(e) {
  t(v, e)
}

/**
 * Entry function index in API 3.
 */

const v = 5

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

function r3(q, a, b, c) {
  return u[q](a, b, c)
}

function r4(q, a, b, c, d) {
  return u[q](a, b, c, d)
}

function r5(q, a, b, c, d, e) {
  return u[q](a, b, c, d, e)
}

function r6(q, a, b, c, d, e, f) {
  return u[q](a, b, c, d, e, f)
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
