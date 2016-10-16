# examples-choo-v4

Trying out (soon to be released) v4 of [choo](https://github.com/yoshuawuyts/choo)

Currently pointing at a fork for a fix to hash routing: https://github.com/sethvincent/choo/tree/use-href

## Examples

Run the examples using [budo](https://npmjs.com/budo).

```
npm i -g budo
```

### reducers/effects/subscriptions/etc `state`, `data` arguments

The `data` & `state` arguments were switched to make the argument order similar to redux & so that reducers can be passed directly into `arr.reduce()`, as the argument order matches.

The order is now `state, data`:

```js
var app = require('choo')()

app.model({
  namespace: 'app',
  reducers: {
    example: function (state, data) {
      
    }
  }
})
```

### routes

```
budo routes.js
```

Route syntax has changed to be more concise, it's nice:

```js
app.router({ default: '/' }, [
  ['/', routeHandler],
  ['/hey', routeHandler]
])
```

### hash routing

```
budo hash-routes.js
```

Hash routing is supported, just use hashes in the route definitions:

```js
app.router({ default: '#' }, [
  ['#', routeHandler],
  ['#hey', routeHandler]
])
```

### anchor links

```
budo anchor-links.js
```

Unless using hash routing, anchor links on the page should just work.
