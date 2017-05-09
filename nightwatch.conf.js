module.exports = {
  'src_folders': ['tests'],
  'output_folder': 'reports',
  'custom_commands_path': '',
  'custom_assertions_path': '',
  'page_objects_path': '',
  'globals_path': '',

  'selenium': {
    'start_process': true,
    'server_path': './node_modules/selenium-standalone/.selenium/selenium-server/3.4.0-server.jar',
    'log_path': './reports',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': './node_modules/selenium-standalone/.selenium/chromedriver/2.29-x64-chromedriver'
    }
  },

  'test_settings': {
    'default': {
      'launch_url': 'https://dashboard.syncano.io',
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'silent': true,
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
  }
}
