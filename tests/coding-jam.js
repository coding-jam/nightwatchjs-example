module.exports = {
  'Coding Jam - Navigation': browser => {
    browser
      .url('http://codingjam.it/')
      .waitForElementVisible('.entry-title a', 5000)
      .getAttribute('.entry-title a', 'href', (result) => {
        browser.click('.entry-title a')
        .pause(1000)
        .assert.urlEquals(result.value)
        .end()
      })
  }
}
