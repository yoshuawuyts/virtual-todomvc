const hyperx = require('hyperx')

module.exports = template

// render views
function template (h, header, main, footer) {
  return function template (params, state) {
    const hx = hyperx(h)
    return hx`
      <body>
        <aside id="learn"></aside>
        <section id="todoapp">
          ${header(h)}
          ${main(h, state)}
          ${footer(h, state)}
        </section>
        ${footerInfo(h)}
      </body>
    `
  }
}

function footerInfo (h) {
  const hx = hyperx(h)
  return hx`
    <footer id="info">
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
