const selenium = {
  start_process: true,
  server_path: './node_modules/selenium-standalone/.selenium/selenium-server/3.4.0-server.jar',
  cli_args: {
    'webdriver.chrome.driver': './node_modules/selenium-standalone/.selenium/chromedriver/2.29-x64-chromedriver'
  }
}

const test_settings = {
  default: {
    desiredCapabilities: {
      browserName: 'chrome'
    }
  }
}

module.exports = {
  src_folders: 'tests',
  selenium,
  test_settings
}
