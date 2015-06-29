const scrollTo = require('scroll-to-element')
const sliced = require('sliced')

module.exports = register

// register click listeners
// null -> null
function register () {
  const els = document.querySelectorAll('.footer-nav-inner a')
  sliced(els).forEach((el) => {
    el.addEventListener('click', clickHandler)
  })
}

// listen to clicks and scroll
// to the right position
// null -> null
function clickHandler (e) {
  const el = e.srcElement.hash.replace(/#/, '')
  const res = findAnchor(el)
  if (res) scrollTo(res, { offset: -50, duration: 700 })
}

// find an anchor by name
// (str, str) -> DOMNode|Null
function findAnchor (name, className) {
  className = className || 'anchor'
  className = className.replace(/\./, '')
  name = name.replace(/\//, '')

  const selector = '.' + className + '[href="#' + name + '"]'
  const tags = document.querySelectorAll(selector)
  if (tags.length !== 1) return
  return tags[0]
}
