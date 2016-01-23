const hyperx = require('hyperx')

module.exports = todos

// create a new list of todos
// (fn, obj) -> obj
function todos (h, state) {
  const hx = hyperx(h)
  return hx`
    <section id="main">
      <input id="toggle-all">
      <ul id="todo-list"></ul>
    </section>
  `
}
