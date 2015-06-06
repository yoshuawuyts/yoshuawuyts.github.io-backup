const summary = require('server-summary')
const cliclopts = require('cliclopts')
const brick = require('brick-server')
const minimist = require('minimist')
const http = require('http')
const pkg = require('./pkg')
const fs = require('fs')

const copts = cliclopts([
  {
    name: 'port',
    abbr: 'p',
    default: 1337,
    help: 'port for the server to listen on'
  }
])

const argv = minimist(process.argv.slice(2), copts.options())
const cmd = argv._[0]

// help
if (argv.help || !cmd) {
  console.log('Usage: command [options]')
  copts.print()
  console.log('\n')
  console.log(fs.readFileSync(__dirname + '/cmds.txt', 'utf8'))
  process.exit()
}

// listen
if (cmd === 'start') {
  const handler = brick(pkg)
  const server = http.createServer(handler)
  server.listen(argv.port, summary)
}

// build
if (cmd === 'build') {
  pkg.build(__dirname, function (err, res) {
    if (err) {
      console.log('error:', err)
      process.exit(1)
    }
    process.exit()
  })
}
