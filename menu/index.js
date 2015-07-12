const scrollTo = require('scroll-to-element')
const getAnchor = require('get-anchor')
const sliced = require('sliced')

module.exports = register

// register click listeners
// null -> null
function register () {
  const els = document.querySelectorAll('.menu-nav-inner a')
  sliced(els).forEach((el) => {
    el.addEventListener('click', clickHandler)
  })
}

// listen to clicks and scroll
// to the right position
// null -> null
function clickHandler (e) {
  const res = getAnchor(e.srcElement.hash, '.anchor')
  if (res) scrollTo(res, { offset: -50, duration: 700 })
}
