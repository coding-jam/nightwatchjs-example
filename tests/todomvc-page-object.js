const TODO_ITEM_SELECTOR = 'ul[id="todo-list"] li'
const TODO_TEXT = 'This is my first Todo'

class TodoMVC {
  constructor (browser) {
    this.browser = browser
  }

  open () {
    this.browser.url('http://todomvc.com/examples/polymer/index.html')
    return this
  }

  addTodo (text) {
    this.browser
    .setValue('input', text)
    .keys(this.browser.Keys.ENTER)

    return this
  }
}

module.exports = {
  'TodoMVC - Add': function (browser) {
    const todomvc = new TodoMVC(browser)
    todomvc.open()

    browser
        .waitForElementVisible('input', 1000)
        .assert.elementNotPresent(TODO_ITEM_SELECTOR)

    todomvc.addTodo(TODO_TEXT)

    browser
        .assert.elementPresent(TODO_ITEM_SELECTOR)
        .assert.containsText(TODO_ITEM_SELECTOR, TODO_TEXT)
        .end()
  }
}
