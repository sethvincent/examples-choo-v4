# examples-choo-v4

Trying out (soon to be released) v4 of [choo](https://github.com/yoshuawuyts/choo)

Currently pointing at a fork for a fix to hash routing: https://github.com/sethvincent/choo/tree/4-hash-routes

## Examples

Run the examples using [budo](https://npmjs.com/budo).

```
npm i -g budo
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

### anchor links

```
budo anchor-links.js
```

### hash routing

```
budo hash-routes.js
```
