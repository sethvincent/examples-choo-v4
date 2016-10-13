var choo = require('choo')
var html = require('choo/html')

var app = choo({ hash: true })
app.use(require('choo-log')())

app.model({
  namespace: 'app',
  state: {},
  reducers: {}
})

app.router({ default: '#' }, [
  ['#', wrapper(home)],
  ['#hey', wrapper(hey)],
  ['#ok', wrapper(ok)]
])

function wrapper (page) {
  return function (state, prev, send) {
    console.log('page?', page.name)
    return page(state, prev, send)
  }
}

function home (state, prev, send) {
  return html`<div>
    <h1>Home</h1>
    <a href="#hey">hey</a>
    <a href="#ok">ok</a>
  </div>`
}

function hey (state, prev, send) {
  return html`<div>
    <h1>Hey!</h1>
    <a href="#hey">hey</a>
    <a href="#ok">ok</a>
    <a href="/">home</a>
  </div> `
}

function ok (state, prev, send) {
  return html`<div>
    <h1>OK!</h1>
    <a href="#hey">hey</a>
    <a href="#ok">ok</a>
    <a href="/">home</a>
  </div>`
}

var tree = app.start()
document.body.appendChild(tree)
