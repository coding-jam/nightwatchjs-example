const TODO_ITEM_SELECTOR = 'ul[id="todo-list"] li'
const FIRST_TODO_TEXT = 'This is my first Todo'
const SECOND_TODO_TEXT = 'This is my second Todo'

class TodoMVC {
  constructor (browser) {
    this.browser = browser
  }

  open () {
    this.browser
        .url('http://todomvc.com/examples/polymer/index.html')
        .waitForElementVisible('body', 1000)

    return this
  }

  addTodo (text) {
    this.browser
    .setValue('input', text)
    .keys(this.browser.Keys.ENTER)

    return this
  }

  deleteTodo (index) {
    const todoItemSelector = `ul[id="todo-list"] li .td-item:nth-of-type(${index + 1})`
    const deleteItemSelector = `.destroy:nth-of-type(${index + 1})`

    this.browser
        .moveToElement(todoItemSelector, 10, 10)
        .waitForElementVisible(deleteItemSelector, 1000)
        .click(deleteItemSelector)
    return this
  }
}

module.exports = {
  'TodoMVC - Add': function (browser) {
    const todomvc = new TodoMVC(browser)
    todomvc.open()

    browser.assert.elementNotPresent(TODO_ITEM_SELECTOR)

    todomvc.addTodo(FIRST_TODO_TEXT)

    browser
        .assert.elementPresent(TODO_ITEM_SELECTOR)
        .assert.containsText(TODO_ITEM_SELECTOR, FIRST_TODO_TEXT)
        .end()
  },
  'TodoMVC - Delete': function (browser) {
    const todomvc = new TodoMVC(browser)

    todomvc
        .open()
        .addTodo(FIRST_TODO_TEXT)
        .deleteTodo(0)

    browser
        .assert.elementNotPresent(TODO_ITEM_SELECTOR)
        .end()
  },
  'TodoMVC - Delete More': function (browser) {
    const todomvc = new TodoMVC(browser)

    todomvc
        .open()
        .addTodo(FIRST_TODO_TEXT)
        .addTodo(SECOND_TODO_TEXT)
        .deleteTodo(0)

    browser
        .assert.elementPresent(TODO_ITEM_SELECTOR)
        .assert.containsText(TODO_ITEM_SELECTOR, SECOND_TODO_TEXT)
        .end()
  }
}

