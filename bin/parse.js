
const UglifyJS = require('uglify-es')
const fs = require('fs')
const parse = require('./')

const code = fs.readFileSync('./lib/index.js', 'utf-8')
const start = fs.readFileSync('./index.js', 'utf-8')
const csv = fs.readFileSync('./lib/h.csv', 'utf-8')
const full2 = parseCSV(csv)
const out2 = parse(full2)
const out = parse(code, out2[3])

const opts = {
  ecma: 7,
  compress: {
    arrows: true,
    booleans: true
  },
  mangle: false,
  keep_fnames: true
}

const full = start + '\n' + out2[0] + '\n' + out2[1] + out[0] + out[1]
const m = UglifyJS.minify(full, opts)
if (m.error) console.log(m)
fs.writeFileSync('./build/m.js', full)
fs.writeFileSync('./build/m.min.js', m.code)
fs.writeFileSync('./build/m.csv', 'i,n\n' + out2[2] + '\n' + out[2])

function parseCSV(code) {
  let lines = code.split('\n')
  lines.shift()
  let out = []
  lines.forEach(line => {
    if (!line.trim()) return

    const [ t, n, v, a1, a2, a3, a4, a5, a6, a7, a8 ] = line.split(',')
    let func = []
    let args = []
    if (a1) args.push(a1)
    if (a2) args.push(a2)
    if (a3) args.push(a3)
    if (a4) args.push(a4)
    if (a5) args.push(a5)
    if (a6) args.push(a6)
    if (a7) args.push(a7)
    if (a8) args.push(a8)

    switch (t) {
      case 'm':
        args.shift()
        args.shift()
        func.push(`function h_${n}() {`)
        func.push(`  ${v ? 'return ' : ''}${a1 ? (a1 + '.') : ''}${a2}(${args.join(', ')})`)
        func.push(`}`)
        out.push(func.join('\n'))

        out.push('\n')
        func = []
        break
      case 'r':
        func.push(`function h_get_${n}_constructor() {`)
        func.push(`  return ${v}`)
        func.push(`}`)
        out.push(func.join('\n'))

        out.push('\n')
        func = []

        func.push(`function h_create_${n}() {`)
        func.push(`  return new ${v}(${args.join(', ')})`)
        func.push(`}`)
        out.push(func.join('\n'))

        out.push('\n')
        func = []
        break
      case 'a':
        if (!args.length) {
          func.push(`function h_get_${n}(){`)
          func.push(`  return ${v}`)
          func.push(`}`)
          out.push(func.join('\n'))

          out.push('\n')
          func = []

          func.push(`function t_get_${n}(){`)
          func.push(`  return h_get_${n}()`)
          func.push(`}`)
          out.push(func.join('\n'))

          out.push('\n')
          func = []
        } else {
          func.push(`function h_get_${n}(${a1}){`)
          func.push(`  return ${a1}.${v}`)
          func.push(`}`)
          out.push(func.join('\n'))

          out.push('\n')
          func = []

          func.push(`function t_get_${n}(${a1}){`)
          func.push(`  return h_get_${n}(${a1})`)
          func.push(`}`)
          out.push(func.join('\n'))

          out.push('\n')
          func = []
        }
        break
      case 's':
        func.push(`function h_set_${n}(${a1}, ${a2}){`)
        func.push(`  ${a1}.${v} = ${a2}`)
        func.push(`}`)
        out.push(func.join('\n'))

        out.push('\n')
        func = []
        break
    }
  })

  return out.join('')
}
