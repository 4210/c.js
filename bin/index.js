
module.exports = parse

function parse(code) {
  let funcs = parse1(code)
  let out = parse2(funcs)
  return out
}

function parse2(funcs) {
  const hout = []
  const tout = []
  const nout = []

  for (const name in funcs) {
    let func = funcs[name]

    nout.push(`${func.i},${name}`)

    if (!func.h || !func.t) throw new Error(`Need both functions: ${name}.`)

    const hbody = func.h.body.map(line => {
      line = parse3('h', line, funcs)
      line = parse3('d', line, funcs)
      line = parse3('t', line, funcs)
      return line
    }).join('\n')

    const tbody = func.t.body.map(line => {
      line = parse3('h', line, funcs)
      line = parse3('d', line, funcs)
      line = parse3('t', line, funcs)
      return line
    }).join('\n')

    hout[func.i] = `/**
 * ${name.toUpperCase()}
 */

h(function(){\n${hbody}\n})
`
    tout[func.i] = `/**
 * ${name.toUpperCase()}
 */

t(function(){\n${tbody}\n})
`
  }

  const out = [ hout.join('\n'), tout.join('\n'), 'i,n\n' + nout.join('\n') ]
  return out
}

function parse3(type, line, funcs) {
  for (const name in funcs) {
    const i = funcs[name].i
    line = line.replace(new RegExp(`${type}_${name}\\(([^\)]*)\\)`), (_, $1) => {
      const args = $1.split(/\s*,\s*/)
      args.unshift(i)
      return `${type}${args.length - 1}(${args.join(', ')})`
    })
  }
  return line
}

function parse1(code) {
  let count = 0
  let funcs = {}
  let scope = null
  let func = null

  code.split('\n').forEach(line => {
    if (line.match(/^function ([ht])_([\w_]+)\(([^\)]+)\)/)) {
      const type = RegExp.$1
      const name = RegExp.$2
      const args = RegExp.$3

      if (!funcs.hasOwnProperty(name)) {
        funcs[name] = {
          i: count++,
          h: { args: [], body: [] },
          t: { args: [], body: [] }
        }
      }

      scope = funcs[name][type]

      scope.args.push(args)
    } else if (line.match(/^\}/)) {
      scope = null
    } else if (scope) {
      scope.body.push(line)
    }
  })

  return funcs
}
