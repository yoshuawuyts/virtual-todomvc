const xtend = require('xtend')

module.exports = modifyState

// manage state changes
function modifyState (action, state) {
  if (action.type === 'location') {
    const location = urlPath(state.location)
    if (location === '/') return xtend(state, { filter: 'all' })
    if (location === '/active') return xtend(state, { filter: 'active' })
    if (location === '/completed') return xtend(state, { filter: 'completed' })
  }
}

// get url path section from a url
// str -> str
function urlPath (url) {
  const reg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/
  return reg.exec(url)[1]
}
