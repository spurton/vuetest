// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Page Header' (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;
    const today = new Date();
    const todaysDate = `${today.getMonth() + 1} / ${today.getDate()} / ${today.getFullYear()}`;

    // It would be nice if I could use xpath selectors here to test for a bit of structure...
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.top-stories')
      .assert.elementPresent('.date-header')
      .assert.containsText('h1', `Top Stories for ${todaysDate}`)
      .end();
  },

  'Top Stories' (browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#story-list')
      .waitForElementVisible('h3', 30000)
      .assert.containsText('strong', 'Briefing')
      .assert.containsText('h3', 'Florida, Rick Gates, Olympics: Your Weekend Briefing - 2/25/2018, 3:00:23 AM')
      .end();
  }
}
