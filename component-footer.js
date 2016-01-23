const hyperx = require('hyperx')

module.exports = todos

// create a new list of todos
// (fn, obj) -> obj
function todos (h, state) {
  const hx = hyperx(h)
  return hx`
    <footer id="footer">
      <span id="todo-count">
        ${createCount(hx, 2)}
      </span>
      <ul id="filters">
        ${createFilters(hx, [ 'all', 'active', 'completed' ])}
      </ul>
    </footer>
  `
}

// create the lil count phrase
// (fn, num) -> obj
function createCount (hx, count) {
  const word = (count < 2 || !count) ? 'item' : 'items'
  return hx`
    <span>
      <strong>${count}</strong> ${word} left
    </span>
  `
}

// create a list of filters
// (fn, [str]) -> obj
function createFilters (hx, filters) {
  return filters.map(function (filter) {
    return hx`
      <li>
        <a href="#${filter}">
          ${filter.charAt(0).toUpperCase() + filter.slice(1)}
        </a>
        <span> </span>
      </li>
    `
  })
}
