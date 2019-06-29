
exports.parseSources = function(code, start = 0) {
  let funcs = parse1(code, start)
  let out = parse2(funcs)
  return out
}

exports.parseMethods = function(methods, start = 0) {
  const hout = []
  const tout = []
  const nout = []

  const map = 'acemnrsw'.split('')

  let max = start

  methods.forEach((method, mi) => {
    let { name, give = [], call, hold } = method

    let h = `function s_${name}(${give.join(', ')}) {
  ${hold ? 'return ' : ''}${call}
}
`

    let t = [`function n_${name}(${give.join(', ')}) {`]
    let g = []
    give.forEach((x, i) => {
      g.push(map[i])
      t.push(`  const ${map[i]} = v(${x})`)
    })

    if (hold) {
      t.push(`  const ${map[give.length]} = s_${name}(${g.join(', ')})`)
      t.push(`  const ${map[give.length + 1]} = s_hold(${map[give.length]})`)
      t.push(`  return ${map[give.length + 1]}`)
    } else {
      t.push(`  s_${name}(${g.join(', ')})`)
    }

    t.push(`}\n`)

    t = t.join('\n')

    hout.push(h)
    tout.push(t)
    max = mi + start
    nout.push(`${max},${name}`)
  })

  const out = exports.parseSources(hout.join('\n') + '\n' + tout.join('\n'), start)

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

    if (!func.s || !func.n) throw new Error(`Need both functions: ${name}.`)

    const hbody = func.s.body.map(line => {
      line = parse3('s', line, funcs)
      line = parse3('n', line, funcs)
      line = parse3('d', line, funcs)
      return line
    }).join('\n')

    const tbody = func.n.body.map(line => {
      line = parse3('s', line, funcs)
      line = parse3('n', line, funcs)
      line = parse3('d', line, funcs)
      return line
    }).join('\n')

    hout[x] = `/**
 * ${name.toUpperCase()}
 */

s(function(){\n${hbody}\n})
`
    tout[x] = `/**
 * ${name.toUpperCase()}
 */

n(function(){\n${tbody}\n})
`
    x++
  }

  const out = [ hout.join('\n'), tout.join('\n'), nout.join('\n'), i + 1 ]
  return out
}

function parse3(type, line, funcs) {
  for (const name in funcs) {
    const i = funcs[name].i
    line = line.replace(new RegExp(`${type}_${name}\\(([^\)]*)\\)`), (_, $1) => {
      const args = $1.split(/\s*,\s*/).filter(a => !!a)
      args.unshift(i)
      return `${type}${args.length - 1}(${args.join(', ')})`
    })
  }
  return line
}

function parse1(code, start = 0) {
  let count = start
  let funcs = {}
  let scope = null
  let func = null

  code.split('\n').forEach(line => {
    if (line.match(/^function ([sn])_([\w_]+)\(([^\)]*)\)/)) {
      const type = RegExp.$1
      const name = RegExp.$2
      const args = RegExp.$3

      if (!funcs.hasOwnProperty(name)) {
        funcs[name] = {
          i: count++,
          s: { args: [], body: [] },
          n: { args: [], body: [] }
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
