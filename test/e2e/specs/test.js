// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Page Header' (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    const today = new Date()
    const todaysDate = `${today.getMonth() + 1} / ${today.getDate()} / ${today.getFullYear()}`

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.date-header')
      .assert.containsText('h1', `Top Stories for ${todaysDate}`)
      .end()
  },

  'Top Stories' (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.top-stories')
      .end()
  }
}
