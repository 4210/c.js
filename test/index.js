
var assert = typeof chai == 'undefined'
  ? require('assert')
  : chai.assert

describe('c', function(){
  describe('s', function(){
    it('should store', function(){
      s(3, 'foo')
      assert(z(3) == 'foo')
    })
  })

  describe('r', function(){
    it('should remove', function(){
      r(3)
      assert(z(3) === undefined)
    })
  })
})
