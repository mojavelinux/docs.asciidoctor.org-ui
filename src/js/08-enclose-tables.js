;(function () {
  'use strict'

  ;[].slice.call(document.querySelectorAll('.doc table.tableblock')).forEach(function (table) {
    const container = document.createElement('div')
    container.className = 'tableblock'
    table.parentNode.insertBefore(container, table)
    container.appendChild(table)
  })
})()
