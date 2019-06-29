
function h_pop(a){
  return a.pop()
}

function t_pop(x){
  const a = d(1, x)
  const b = h_pop(a)
  return b
}

function h_push(a, v){
  a.push(v)
}

function t_push(o, x){

}

// function h_call(scope, name){
//   return scope[name].apply(scope, Array.prototype.slice.call(arguments, 2))
// }

// function h_new(klass){
//   return new (Function.prototype.bind.apply(klass, Array.prototype.slice.call(arguments)))
// }

// function h_get_typeof(a){
//   return typeof a
// }

// function h_check_instanceof(a, b){
//   return a instanceof b
// }

// function h_new_string(){
//   return ''
// }

// function h_set_attr(obj, attr, val){
//   obj[attr] = val
// }

// function h_get_attr(obj, attr){
//   return obj[attr]
// }

// function h_remove_attr(obj, attr){
//   delete obj[attr]
// }

// function h_branch(a, b){
//   if (a) b()
// }

// function h_branch_else(a, b, c){
//   if (a) {
//     b()
//   } else {
//     c()
//   }
// }

// function h_shift_left(a, b) {
//   return a << b
// }

// function h_shift_right(a, b) {
//   return a >> b
// }

// function h_shift_right_unsigned(a, b) {
//   return a >>> b
// }

// function h_compute_bitwise_or(state, a, b) {
//   return a | b
// }

// function h_compute_bitwise_and(state, a, b) {
//   return a & b
// }

// function h_try_catch(a, b){
//   try {
//     a()
//   } catch (e) {
//     b(e)
//   }
// }

// function h_throw(e){
//   throw e
// }

// function h_add(a, b) {
//   return a + b
// }

// function h_subtract(a, b) {
//   return a - b
// }

// function h_multiply(a, b) {
//   return a * b
// }

// function h_divide(a, b) {
//   return a / b
// }

// function h_check_if_true(a) {
//   return !!a
// }

// /**
//  * Check equal.
//  */

// function h_check_if_strict_equal(a, b){
//   return a === b
// }

// function h_check_gt(a, b){
//   return a > b
// }

// function h_check_lt(a, b){
//   return a < b
// }

// function h_check_gte(a, b){
//   return a >= b
// }

// function h_check_lte(a, b){
//   return a <= b
// }

// function h_check_not(a){
//   return !a
// }

// function h_check_and(a, b){
//   return a && b
// }

// function h_check_or(a, b){
//   return a || b
// }

// function h_print(a){
//   console.log(a)
// }

// function h_get_char_code(a) {
//   return a.charCodeAt(0)
// }

// function h_parse_float(a) {
//   return parseFloat(a)
// }

// function h_parse_int(a) {
//   return parseInt(a)
// }

// function h_parse_number(a) {
//   return Number(a)
// }

// function h_get_max(a, b) {
//   return Math.max(a, b)
// }

// function h_get_min(a, b) {
//   return Math.min(a, b)
// }

// function h_floor(a) {
//   return Math.floor(a)
// }

// function h_ceil(a) {
//   return Math.ceil(a)
// }

// function h_round(a) {
//   return Math.round(a)
// }

// function h_get_abs(a) {
//   return Math.abs(a)
// }

// function h_get_cos(a) {
//   return Math.cos(a)
// }

// function h_get_acos(a) {
//   return Math.acos(a)
// }

// function h_get_sin(a) {
//   return Math.sin(a)
// }

// function h_get_asin(a) {
//   return Math.asin(a)
// }

// function h_get_tan(a) {
//   return Math.tan(a)
// }

// function h_get_atan(a) {
//   return Math.atan(a)
// }

// function h_get_atan2(a, b) {
//   return Math.atan2(a, b)
// }

// function h_get_log(a) {
//   return Math.log(a)
// }

// function h_get_sqrt(a) {
//   return Math.sqrt(a)
// }

// function h_sleep(count, block){
//   return setTimeout(block, count)
// }

// function h_clear_timeout(a){
//   clearTimeout(a)
// }

// function h_get_timestamp() {
//   return Date.now()
// }

// function h_queue(fn) {
//   setImmediate(fn)
// }

// function h_get_char_from_code(a) {
//   return String.fromCharCode(a)
// }

// function h_get_char_from_code_point(a){
//   return String.fromCodePoint(a)
// }

// function h_check_if_null(val) {
//   return val == null
// }

// function h_check_if_promise(val) {
//   return !!val && typeof val.then === 'function'
// }

// function h_check_if_array(shard) {
//   return Array.isArray(shard)
// }

// function h_check_if_number(val) {
//   return typeof val === 'number'
// }

// function h_check_if_string(chord) {
//   return typeof chord === 'string'
// }
