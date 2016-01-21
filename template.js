const hyperx = require('hyperx')

module.exports = template

// render views
function template (head, main) {
  return function template (params, h, state) {
    const hx = hyperx(h)
    return hx`
      <body>
        <aside className="learn"></aside>
        <section className="todoapp"></section>
        ${footer(hx)}
      </body>
    `
  }
}

function footer (hx) {
  return hx`
    <footer className="info">
      <p>Double click to edit a todo</p>
      <p>
        Created by <a href="https://github.com/yoshuawuyts">yoshuawuyts</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  `
}
