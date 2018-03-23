Package.describe({
  name: 'tunguska:mocha-core',
  summary: 'Fibers aware mocha server side wrappers. Based off practicalmeteor:mocha-core.',
  version: '1.0.0',
  testOnly: true,
  git: 'https://github.com/robfallows/tunguska-mocha-core.git'
});

Npm.depends({
  mocha: '5.0.4'
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.3');

  api.use('ecmascript');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');

  api.export(['mochaInstance', 'setupGlobals'], 'server');
});
