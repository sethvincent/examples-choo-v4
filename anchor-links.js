var choo = require('choo')
var html = require('choo/html')

var app = choo()
app.use(require('choo-log')())

app.model({
  namespace: 'app',
  state: {},
  reducers: {}
})

app.router({ default: '/' }, [
  ['/', main]
])

function main (state, prev, send) {
  return html`<div>
    <h1>Hi!</h1>
    <a href="#ok">go to anchor link</a>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <p id="ok">ok</p>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>`
}

var tree = app.start()
document.body.appendChild(tree)
