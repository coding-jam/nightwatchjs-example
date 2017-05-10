module.exports = {
  'TodoMVC - Add': function (browser) {
    const TODO_ITEM_SELECTOR = 'ul[id="todo-list"] li'
    const TODO_TEXT = 'This is my first Todo'

    browser
      .url('http://todomvc.com/examples/polymer/index.html')
      .waitForElementVisible('input', 1000)
      .assert.elementNotPresent(TODO_ITEM_SELECTOR)
      .setValue('input', TODO_TEXT)
      .keys(browser.Keys.ENTER)
      .assert.elementPresent(TODO_ITEM_SELECTOR)
      .assert.containsText(TODO_ITEM_SELECTOR, TODO_TEXT)
      .end()
  }
}
