
module.exports = function parse(methods, start = 0) {
  const hout = []
  const tout = []
  const nout = []

  const map = 'bikmnot'.split('')

  let max = start

  let names = {}

  methods.forEach((method, mi) => {
    const { name, give = [], call, hold } = method

    if (!Array.isArray(give)) throw new Error(`Invalid give ${name}`)

    if (names[name]) throw new Error(`Duplicate ${name}`)

    names[name] = true

    let h = `function n_${name}(${give.join(', ')}) {
  ${hold ? 'return ' : ''}${call}
}
`

    let t = [`function r_${name}(${give.join(', ')}) {`]
    let g = []
    give.forEach((x, i) => {
      g.push(map[i])
      t.push(`  const ${map[i]} = d(${x})`)
    })

    if (hold) {
      t.push(`  const ${map[give.length]} = n_${name}(${g.join(', ')})`)
      t.push(`  const ${map[give.length + 1]} = n_hold(${map[give.length]})`)
      t.push(`  return ${map[give.length + 1]}`)
    } else {
      t.push(`  n_${name}(${g.join(', ')})`)
    }

    t.push(`}\n`)

    t = t.join('\n')

    hout.push(h)
    tout.push(t)
    max = mi + start
    nout.push(`${max},${name}`)
  })

  const out = parseSources(hout.join('\n') + '\n' + tout.join('\n'), start)

  return out
}

function parseSources(code, start = 0) {
  let funcs = parse1(code, start)
  let out = parse2(funcs)
  return out
}

function parse2(funcs) {
  const hout = []
  const tout = []
  const nout = []

  let i = 0

  let x = 0

  for (const name in funcs) {
    let func = funcs[name]

    nout.push(`${func.i},${name}`)

    i = Math.max(i, func.i)

    if (!func.n || !func.r) throw new Error(`Need both functions: ${name}.`)

    const hbody = func.n.body.map(line => {
      line = parse3('n', line, funcs)
      line = parse3('r', line, funcs)
      return line
    }).join('\n')

    const tbody = func.r.body.map(line => {
      line = parse3('n', line, funcs)
      line = parse3('r', line, funcs)
      return line
    }).join('\n')

    hout[x] = `/**
 * ${name.toUpperCase()}
 */

n(function(${func.n.args}){\n${hbody}\n})
`
    tout[x] = `/**
 * ${name.toUpperCase()}
 */

r(function(${func.r.args}){\n${tbody}\n})
`
    x++
  }

  const out = [ hout.join('\n'), tout.join('\n'), nout.join('\n'), i + 1 ]
  return out
}

function parse3(type, line, funcs) {
  const map = { n: 'h', r: 't' }

  line = line.replace(new RegExp(`([nr])_([\\w_]+)\\(([\\w,\\.:' ]*)\\)`, 'ig'), (_, $1, $2, $3) => {
    const args = $3.split(/\s*,\s*/).filter(a => !!a)
    const func = funcs[$2]
    if (!func) throw new Error(`Missing ${$2}`)
    const i = func.i
    args.unshift(i)
    return `${map[$1]}${args.length - 1}(${args.join(', ')})`
  })

  return line
}

function parse1(code, start = 0) {
  let count = start
  let funcs = {}
  let scope = null
  let func = null

  code.split('\n').forEach(line => {
    if (line.match(/function ([rn])_([\w_]+)\(([\w_'-:\. ]*)\)/)) {
      const type = RegExp.$1
      const name = RegExp.$2
      const args = RegExp.$3

      if (!funcs[name]) {
        funcs[name] = {
          i: count++,
          n: { args: [], body: [] },
          r: { args: [], body: [] }
        }
      }

      scope = funcs[name][type]

      if (args.trim()) scope.args.push(args)
    } else if (line.match(/^\}/)) {
      scope = null
    } else if (scope) {
      scope.body.push(line)
    }
  })

  return funcs
}
