const hyperx = require('hyperx')

const placeholder = 'What needs to be done?'

module.exports = header

// create a new header
function header () {
  return function (h) {
    const hx = hyperx(h)
    return hx`
      <header>
        <h1>todos</h1>
        <form onsubmit=${handleSubmit}>
          <input id="new-todo" placeholder=${placeholder}>
          <input type="submit" style=${{ display: 'none' }}>
        </form>
      </header>
    `
  }
}

// handle form submission
function handleSubmit (e) {
  e.preventDefault()
  console.log('submitted')
  console.log(e)
}
