# about
[![build status][travis-image]][travis-url]
[![js-standard-style][standard-image]][standard-url]

## Installation
```bash
$ hub clone yoshuawuyts/about
```

## Usage
```txt
Lifecycle scripts included in about:
  start
    node ./bin/cli start -p 1337 | garnish
  test
    standard && NODE_ENV=test node test

available via `npm run-script`:
  build
    node ./bin/cli build
  test-cov
    standard && NODE_ENV=test istanbul cover test.js
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[travis-image]: https://img.shields.io/travis/yoshuawuyts/about/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/about
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
