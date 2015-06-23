require('webcomponents.js')

const wayfarer = require('wayfarer')
const match = require('hash-match')

// register custom elements
require('@about/background-video')()

// register router
const router = wayfarer('/')
router.on('/', () => console.log('/'))
router.on('/skills', () => console.log('skills'))
router.on('/about', () => console.log('about'))
router.on('/contact', () => console.log('contact'))

router(match(window.location.hash))

window.addEventListener('hashchange', () => {
  router(match(window.location.hash))
})
