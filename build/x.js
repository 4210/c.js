(function(){


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
 * Call API 2.
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
 * Call API 3.
 */

function r(q) {
  return u[q].apply(u, Array.prototype.slice.call(arguments, 1))
}

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

/**
 * Set data.
 */

function m(e) {
  return d(0, e)
}

/**
 * Get data.
 */

function v(x) {
  return d(1, x)
}

/**
 * Clear data.
 */

function w(x) {
  d(2, x)
}

/**
 * Main function.
 */

function x(o) {
  t(5, o)
}

this.x = x

/**
 * HOLD
 */

s(function(){
  return m(x)
})

/**
 * FREE
 */

s(function(){
  w(x)
})

/**
 * PRINT
 */

s(function(){
  console.log(x)
})

/**
 * GET_CHAR_CODE
 */

s(function(){
  return a.charCodeAt(x)
})

/**
 * PARSE_FLOAT
 */

s(function(){
  return parseFloat(x)
})

/**
 * PARSE_INT
 */

s(function(){
  return parseInt(x)
})

/**
 * PARSE_NUMBER
 */

s(function(){
  return Number(x)
})

/**
 * GET_MAX
 */

s(function(){
  return Math.max(x, o)
})

/**
 * GET_MIN
 */

s(function(){
  return Math.min(x, o)
})

/**
 * FLOOR
 */

s(function(){
  return Math.floor(x)
})

/**
 * CEIL
 */

s(function(){
  return Math.ceil(x)
})

/**
 * ROUND
 */

s(function(){
  return Math.round(x)
})

/**
 * GET_ABS
 */

s(function(){
  return Math.abs(x)
})

/**
 * GET_COS
 */

s(function(){
  return Math.cos(x)
})

/**
 * GET_ACOS
 */

s(function(){
  return Math.acos(x)
})

/**
 * GET_SIN
 */

s(function(){
  return Math.sin(x)
})

/**
 * GET_ASIN
 */

s(function(){
  return Math.asin(x)
})

/**
 * GET_TAN
 */

s(function(){
  return Math.tan(x)
})

/**
 * GET_ATAN
 */

s(function(){
  return Math.atan(x)
})

/**
 * GET_ATAN2
 */

s(function(){
  return Math.atan2(x, o)
})

/**
 * GET_LOG
 */

s(function(){
  return Math.log(x)
})

/**
 * GET_SQRT
 */

s(function(){
  return Math.sqrt(x)
})

/**
 * SLEEP
 */

s(function(){
  return setTimeout(b, i)
})

/**
 * CLEAR_TIMEOUT
 */

s(function(){
  clearTimeout(x)
})

/**
 * GET_TIMESTAMP
 */

s(function(){
  return Date.now()
})

/**
 * QUEUE
 */

s(function(){
  setImmediate(f)
})

/**
 * GET_CHAR_FROM_CODE
 */

s(function(){
  return String.fromCharCode(x)
})

/**
 * GET_CHAR_FROM_CODE_POINT
 */

s(function(){
  return String.fromCodePoint(x)
})

/**
 * CHECK_IF_MISSING
 */

s(function(){
  return x == null
})

/**
 * CHECK_IF_NULL
 */

s(function(){
  return x === null
})

/**
 * CHECK_IF_UNDEFINED
 */

s(function(){
  return x === undefined
})

/**
 * CHECK_IF_PROMISE
 */

s(function(){
  return !!x && typeof x.then === 'function'
})

/**
 * CHECK_IF_ARRAY
 */

s(function(){
  return Array.isArray(x)
})

/**
 * CHECK_IF_NUMBER
 */

s(function(){
  return typeof x === 'number'
})

/**
 * CHECK_IF_STRING
 */

s(function(){
  return typeof x === 'string'
})

/**
 * CHECK_IF_FLOAT
 */

s(function(){
  return x === +x && x !== (x|0)
})

/**
 * CHECK_IF_INTEGER
 */

s(function(){
  return x === +x && x === (x|0)
})

/**
 * CHECK_IF_OBJECT
 */

s(function(){
  return Object.prototype.toString.call(x) === '[object Object]'
})

/**
 * CALL
 */

s(function(){
  return o[x].apply(o, Array.prototype.slice.call(arguments, 2))
})

/**
 * CREATE
 */

s(function(){
  return new (Function.prototype.bind.apply(o, Array.prototype.slice.call(arguments)))
})

/**
 * GET_TYPEOF
 */

s(function(){
  return typeof o
})

/**
 * CHECK_INSTANCEOF
 */

s(function(){
  x instanceof o
})

/**
 * CREATE_STRING
 */

s(function(){
  return ''
})

/**
 * SET_ATTR
 */

s(function(){
  o[x] = i
})

/**
 * GET_ATTR
 */

s(function(){
  return o[x]
})

/**
 * REMOVE_ATTR
 */

s(function(){
  delete obj[attr]
})

/**
 * BRANCH
 */

s(function(){
  if (o) x()
})

/**
 * BRANCH_AND_RETURN
 */

s(function(){
  if (o) return x()
})

/**
 * BRANCH_ELSE
 */

s(function(){
  if (o) { x() } else { i() }
})

/**
 * SHIFT_LEFT
 */

s(function(){
  return x << o
})

/**
 * SHIFT_RIGHT
 */

s(function(){
  return x >> o
})

/**
 * SHIFT_RIGHT_UNSIGNED
 */

s(function(){
  return x >>> o
})

/**
 * COMPUTE_BITWISE_OR
 */

s(function(){
  return x | o
})

/**
 * COMPUTE_BITWISE_AND
 */

s(function(){
  return x & o
})

/**
 * TRY_CATCH
 */

s(function(){
  try { x() } catch (e) { o(e) }
})

/**
 * TRY_CATCH_AND_RETURN
 */

s(function(){
  try { return x() } catch (e) { return o(e) }
})

/**
 * THROW
 */

s(function(){
  throw e
})

/**
 * ADD
 */

s(function(){
  return x + o
})

/**
 * SUBTRACT
 */

s(function(){
  return x - o
})

/**
 * MULTIPLY
 */

s(function(){
  return x * o
})

/**
 * DIVIDE
 */

s(function(){
  return x / o
})

/**
 * CHECK_IF_TRUE
 */

s(function(){
  return !!x
})

/**
 * CHECK_IF_FALSE
 */

s(function(){
  return !x
})

/**
 * CHECK_IF_STRICT_EQUAL
 */

s(function(){
  return x === o
})

/**
 * CHECK_GT
 */

s(function(){
  return x > o
})

/**
 * CHECK_LT
 */

s(function(){
  return x < o
})

/**
 * CHECK_GTE
 */

s(function(){
  return x >= o
})

/**
 * CHECK_LTE
 */

s(function(){
  return x <= o
})

/**
 * CHECK_AND
 */

s(function(){
  return x && o
})

/**
 * CHECK_OR
 */

s(function(){
  return x || o
})

/**
 * SET_TITLE
 */

s(function(){
  o.title = x
})

/**
 * SET_SRC
 */

s(function(){
  o.src = x
})

/**
 * SET_DISABLED
 */

s(function(){
  o.disabled = x
})

/**
 * GET_TITLE
 */

s(function(){
  return o.title
})

/**
 * GET_SRC
 */

s(function(){
  return o.src
})

/**
 * GET_DISABLED
 */

s(function(){
  return o.disabled
})

/**
 * GET_LENGTH
 */

s(function(){
  return o.length
})

/**
 * POP
 */

s(function(){
  return o.pop()
})

/**
 * PUSH
 */

s(function(){
  o.push(x)
})

/**
 * HOLD
 */

n(function(){
  const a = v(x)
  s1(0, a)
})

/**
 * FREE
 */

n(function(){
  const a = v(x)
  s1(1, a)
})

/**
 * PRINT
 */

n(function(){
  const a = v(x)
  s1(2, a)
})

/**
 * GET_CHAR_CODE
 */

n(function(){
  const a = v(x)
  const c = s1(3, a)
  const e = s1(0, c)
  return e
})

/**
 * PARSE_FLOAT
 */

n(function(){
  const a = v(x)
  const c = s1(4, a)
  const e = s1(0, c)
  return e
})

/**
 * PARSE_INT
 */

n(function(){
  const a = v(x)
  const c = s1(5, a)
  const e = s1(0, c)
  return e
})

/**
 * PARSE_NUMBER
 */

n(function(){
  const a = v(x)
  const c = s1(6, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_MAX
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(7, a, c)
  const m = s1(0, e)
  return m
})

/**
 * GET_MIN
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(8, a, c)
  const m = s1(0, e)
  return m
})

/**
 * FLOOR
 */

n(function(){
  const a = v(x)
  const c = s1(9, a)
  const e = s1(0, c)
  return e
})

/**
 * CEIL
 */

n(function(){
  const a = v(x)
  const c = s1(10, a)
  const e = s1(0, c)
  return e
})

/**
 * ROUND
 */

n(function(){
  const a = v(x)
  const c = s1(11, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_ABS
 */

n(function(){
  const a = v(x)
  const c = s1(12, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_COS
 */

n(function(){
  const a = v(x)
  const c = s1(13, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_ACOS
 */

n(function(){
  const a = v(x)
  const c = s1(14, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_SIN
 */

n(function(){
  const a = v(x)
  const c = s1(15, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_ASIN
 */

n(function(){
  const a = v(x)
  const c = s1(16, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_TAN
 */

n(function(){
  const a = v(x)
  const c = s1(17, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_ATAN
 */

n(function(){
  const a = v(x)
  const c = s1(18, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_ATAN2
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(19, a, c)
  const m = s1(0, e)
  return m
})

/**
 * GET_LOG
 */

n(function(){
  const a = v(x)
  const c = s1(20, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_SQRT
 */

n(function(){
  const a = v(x)
  const c = s1(21, a)
  const e = s1(0, c)
  return e
})

/**
 * SLEEP
 */

n(function(){
  const a = v(i)
  const c = v(b)
  const e = s2(22, a, c)
  const m = s1(0, e)
  return m
})

/**
 * CLEAR_TIMEOUT
 */

n(function(){
  const a = v(x)
  s1(23, a)
})

/**
 * GET_TIMESTAMP
 */

n(function(){
  const a = s0(24)
  const c = s1(0, a)
  return c
})

/**
 * QUEUE
 */

n(function(){
  const a = v(f)
  s1(25, a)
})

/**
 * GET_CHAR_FROM_CODE
 */

n(function(){
  const a = v(x)
  const c = s1(26, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_CHAR_FROM_CODE_POINT
 */

n(function(){
  const a = v(x)
  const c = s1(27, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_MISSING
 */

n(function(){
  const a = v(x)
  const c = s1(28, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_NULL
 */

n(function(){
  const a = v(x)
  const c = s1(29, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_UNDEFINED
 */

n(function(){
  const a = v(x)
  const c = s1(30, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_PROMISE
 */

n(function(){
  const a = v(x)
  const c = s1(31, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_ARRAY
 */

n(function(){
  const a = v(x)
  const c = s1(32, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_NUMBER
 */

n(function(){
  const a = v(x)
  const c = s1(33, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_STRING
 */

n(function(){
  const a = v(x)
  const c = s1(34, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_FLOAT
 */

n(function(){
  const a = v(x)
  const c = s1(35, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_INTEGER
 */

n(function(){
  const a = v(x)
  const c = s1(36, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_OBJECT
 */

n(function(){
  const a = v(x)
  const c = s1(37, a)
  const e = s1(0, c)
  return e
})

/**
 * CALL
 */

n(function(){
  const a = v(o)
  const c = v(x)
  const e = s2(38, a, c)
  const m = s1(0, e)
  return m
})

/**
 * CREATE
 */

n(function(){
  const a = v(o)
  const c = s1(39, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_TYPEOF
 */

n(function(){
  const a = v(o)
  const c = s1(40, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_INSTANCEOF
 */

n(function(){
  const a = v(x)
  const c = v(o)
  s2(41, a, c)
})

/**
 * CREATE_STRING
 */

n(function(){
  const a = s0(42)
  const c = s1(0, a)
  return c
})

/**
 * SET_ATTR
 */

n(function(){
  const a = v(o)
  const c = v(x)
  const e = v(i)
  s3(43, a, c, e)
})

/**
 * GET_ATTR
 */

n(function(){
  const a = v(o)
  const c = v(x)
  const e = s2(44, a, c)
  const m = s1(0, e)
  return m
})

/**
 * REMOVE_ATTR
 */

n(function(){
  const a = v(o)
  const c = v(x)
  s2(45, a, c)
})

/**
 * BRANCH
 */

n(function(){
  const a = v(o)
  const c = v(x)
  s2(46, a, c)
})

/**
 * BRANCH_AND_RETURN
 */

n(function(){
  const a = v(o)
  const c = v(x)
  s2(47, a, c)
})

/**
 * BRANCH_ELSE
 */

n(function(){
  const a = v(o)
  const c = v(x)
  const e = v(i)
  s3(48, a, c, e)
})

/**
 * SHIFT_LEFT
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(49, a, c)
  const m = s1(0, e)
  return m
})

/**
 * SHIFT_RIGHT
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(50, a, c)
  const m = s1(0, e)
  return m
})

/**
 * SHIFT_RIGHT_UNSIGNED
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(51, a, c)
  const m = s1(0, e)
  return m
})

/**
 * COMPUTE_BITWISE_OR
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(52, a, c)
  const m = s1(0, e)
  return m
})

/**
 * COMPUTE_BITWISE_AND
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(53, a, c)
  const m = s1(0, e)
  return m
})

/**
 * TRY_CATCH
 */

n(function(){
  const a = v(x)
  const c = v(o)
  s2(54, a, c)
})

/**
 * TRY_CATCH_AND_RETURN
 */

n(function(){
  const a = v(x)
  const c = v(o)
  s2(55, a, c)
})

/**
 * THROW
 */

n(function(){
  const a = v(e)
  s1(56, a)
})

/**
 * ADD
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(57, a, c)
  const m = s1(0, e)
  return m
})

/**
 * SUBTRACT
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(58, a, c)
  const m = s1(0, e)
  return m
})

/**
 * MULTIPLY
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(59, a, c)
  const m = s1(0, e)
  return m
})

/**
 * DIVIDE
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(60, a, c)
  const m = s1(0, e)
  return m
})

/**
 * CHECK_IF_TRUE
 */

n(function(){
  const a = v(x)
  const c = s1(61, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_FALSE
 */

n(function(){
  const a = v(x)
  const c = s1(62, a)
  const e = s1(0, c)
  return e
})

/**
 * CHECK_IF_STRICT_EQUAL
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(63, a, c)
  const m = s1(0, e)
  return m
})

/**
 * CHECK_GT
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(64, a, c)
  const m = s1(0, e)
  return m
})

/**
 * CHECK_LT
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(65, a, c)
  const m = s1(0, e)
  return m
})

/**
 * CHECK_GTE
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(66, a, c)
  const m = s1(0, e)
  return m
})

/**
 * CHECK_LTE
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(67, a, c)
  const m = s1(0, e)
  return m
})

/**
 * CHECK_AND
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(68, a, c)
  const m = s1(0, e)
  return m
})

/**
 * CHECK_OR
 */

n(function(){
  const a = v(x)
  const c = v(o)
  const e = s2(69, a, c)
  const m = s1(0, e)
  return m
})

/**
 * SET_TITLE
 */

n(function(){
  const a = v(o)
  const c = v(x)
  s2(70, a, c)
})

/**
 * SET_SRC
 */

n(function(){
  const a = v(o)
  const c = v(x)
  s2(71, a, c)
})

/**
 * SET_DISABLED
 */

n(function(){
  const a = v(o)
  const c = v(x)
  s2(72, a, c)
})

/**
 * GET_TITLE
 */

n(function(){
  const a = v(o)
  const c = s1(73, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_SRC
 */

n(function(){
  const a = v(o)
  const c = s1(74, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_DISABLED
 */

n(function(){
  const a = v(o)
  const c = s1(75, a)
  const e = s1(0, c)
  return e
})

/**
 * GET_LENGTH
 */

n(function(){
  const a = v(o)
  const c = s1(76, a)
  const e = s1(0, c)
  return e
})

/**
 * POP
 */

n(function(){
  const a = v(o)
  const c = s1(77, a)
  const e = s1(0, c)
  return e
})

/**
 * PUSH
 */

n(function(){
  const a = v(o)
  const c = v(x)
  s2(78, a, c)
})


})()