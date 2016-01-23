const hyperx = require('hyperx')

module.exports = todos

// create a new list of todos
// (fn, obj) -> obj
function todos (h, state) {
  const hx = hyperx(h)
  return hx`
    <footer id="footer">
      <span id="todo-count">
        <strong>2</strong>
        <span> </span>
        <span>items</span>
        <span>left</span>
      </span>
      <ul id="filters">
        ${createFilters(hx, [ 'all', 'active', 'completed' ])}
      </ul>
    </footer>
  `
}

// create a list of filters
function createFilters (hx, filters) {
  return filters.map(function (filter) {
    return hx`
      <li>
        <a href="#/${filter}">
          ${filter.charAt(0).toUpperCase() + filter.slice(1)}
        </a>
        <span> </span>
      </li>
    `
  })
}
