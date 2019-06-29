
/**
 * Imports.
 */

const parseCSV = require('csv-parse/lib/sync')
const UglifyJS = require('uglify-es')
const YAML = require('js-yaml')
const fs = require('fs')
const {
  parseMethods
} = require('../lib')

const methods = parseMethods(readyaml('./src/index.yaml'))
const headers = read('./src/index.js')

/**
 * Main output.
 */

const out = [
  '(function(){\n',
  headers,
  methods[0],
  methods[1],
  '\n})()'
].join('\n')

/**
 * CSV names output.
 */

const cout = [
  'i,n',
  methods[2]
].join('\n')

/**
 * Minified output.
 */

const mout = min(out)
if (mout.error) console.log(mout)

/**
 * Save to files.
 */

write('./build/x.js', out)
write('./build/x.min.js', mout.code)
write('./build/x.csv', cout)

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
