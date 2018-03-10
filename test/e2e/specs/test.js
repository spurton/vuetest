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

    // It would be nice if I could use xpath selectors here to test for a bit of structure...
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.date-header')
      .assert.containsText('h1', `Top Stories for ${todaysDate}`)
      .assert.elementPresent('#story-list')
      .waitForElementVisible('h3', 5000)
      .assert.containsText('strong', 'U.S.')
      .assert.containsText('h3', 'At the Crossroads of Church and Race, a Reporter Glimpses His Childhood - 3/9/2018, 2:00:01 AM')
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
