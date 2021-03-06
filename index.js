const history = require('sheet-router/history')
const bridge = require('sheet-router/bridge')
const sheetRouter = require('sheet-router')
const createApp = require('virtual-app')
const vdom = require('virtual-dom')

const modifyState = require('./client-state')
const template = require('./client-template')
const header = require('./component-header')
const footer = require('./component-footer')
const todos = require('./component-todos')

// initialize and attach
const body = document.querySelector('body')
if (body.parentNode) body.parentNode.removeChild(body)
const app = createApp(document.querySelector('html'), vdom)
const initialState = { count: 0, mod: 1, location: document.location.href }
const render = app.start(modifyState, initialState)
const router = createRouter()
history(function (href) {
  app.store({ type: 'location', location: href })
})
bridge(render, function (state) {
  return router(state.location, app.h)
})

// routing
function createRouter () {
  return sheetRouter('/', function (r, t) {
    return [
      t('/', template(app.h, header(app.h), todos, footer)),
      t('/active', template(app.h, header(app.h))),
      t('/completed', template(app.h, header(app.h)))
    ]
  })
}
