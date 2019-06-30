
/**
 * Imports.
 */

const parseCSV = require('csv-parse/lib/sync')
const UglifyJS = require('uglify-es')
const YAML = require('js-yaml')
const zlib = require('zlib')
const fs = require('fs')
const parse = require('../lib')
const path = require('path')

let yaml = readyaml(path.resolve(__dirname, '../src/index.yaml'))
if (process.argv[2]) {
  yaml = yaml.concat(readyaml(process.argv[2]))
}
const methods = parse(yaml)
const headers = read(path.resolve(__dirname, '../src/index.js'))

const body = [ headers, methods[0], methods[1] ]

/**
 * Main output.
 */

const out = [
  '(function(){\n',
  body.join('\n'),
  '\n})()'
].join('\n')

/**
 * CSV names output.
 */

let cout = [
  'i,n',
  methods[2]
]

cout = cout.join('\n')

/**
 * Minified output.
 */

const mout = min(out)
if (mout.error) console.log(mout)

/**
 * Save to files.
 */

fs.mkdirSync('./build', { recursive: true })
write('./build/x.js', out)
write('./build/x.min.js', mout.code)
write('./build/x.min.js.gz', zlib.gzipSync(mout.code))
write('./build/x.csv', cout)

const stats = fs.statSync('./build/x.min.js.gz')
console.log(stats.size)

/**
 * Minify.
 */

function min(code) {
  return UglifyJS.minify(code, {
    ecma: 7,
    compress: {
      arrows: true,
      booleans: true
    },
    mangle: false,
    keep_fnames: true
  })
}

/**
 * Read.
 */

function read(path) {
  return fs.readFileSync(path, 'utf-8')
}

/**
 * Write.
 */

function write(path, content) {
  fs.writeFileSync(path, content)
}

/**
 * YAML.
 */

function readyaml(path) {
  return YAML.load(read(path))
}

/**
 * CSV.
 */

function readcsv(path) {
  return parseCSV(read(path), {
    skip_empty_lines: true,
    columns: true
  })
}
