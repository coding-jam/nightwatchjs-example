module.exports = {
  'Coding Jam - Navigation': function (browser) {
    browser
      .url('http://codingjam.it/')
      .waitForElementVisible('.entry-title a', 1000)
      .getAttribute('.entry-title a', 'href', (result) => {
        browser.click('.entry-title a')
        .pause(1000)
        .assert.urlEquals(result.value)
        .end()
      })
  },
  'Coding Jam - Search': function (browser) {
    const SEARCH_STRING = 'JavaScript'

    browser
      .url('http://codingjam.it/')
      .waitForElementVisible('.searchform a', 1000)
      .click('.searchform a')
      .setValue('.searchform input', SEARCH_STRING)
      .submitForm('.searchform')
      .pause(1000)
      .assert.urlEquals(`http://codingjam.it/?s=${SEARCH_STRING}`)
      .end()
  }
}
