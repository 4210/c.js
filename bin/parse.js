
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

const full = start + '\n' + out[0] + '\n' + out[1]
const m = UglifyJS.minify(full, opts)
if (m.error) console.log(m)
fs.writeFileSync('./build/m.js', full)
fs.writeFileSync('./build/m.min.js', m.code)
fs.writeFileSync('./build/m.csv', out[2])
