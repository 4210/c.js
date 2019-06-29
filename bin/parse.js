
var UglifyJS = require('uglify-es')
var fs = require('fs')
var parse = require('./')

var code = fs.readFileSync('./lib/index.js', 'utf-8')
var start = fs.readFileSync('./index.js', 'utf-8')
var out = parse(code)

const opts = {
  ecma: 7,
  compress: {
    arrows: true,
    booleans: true
  },
  mangle: false,
  keep_fnames: true
}

const m = UglifyJS.minify(start + '\n' + out[0] + '\n' + out[1], opts)
if (m.error) console.log(m)
fs.writeFileSync('./build/m.js', m.code)
fs.writeFileSync('./build/h.js', out[0])
fs.writeFileSync('./build/t.js', out[1])
fs.writeFileSync('./build/m.csv', out[2])
fs.writeFileSync('./build/v.js', start)
