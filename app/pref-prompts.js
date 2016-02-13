function getPrefPropmts() {
  return [{
    name: 'moduleVersion',
    message: '☯ preferred version to start:',
    store: true,
    default: '0.0.0',
  }, {
    name: 'moduleLicense',
    message: '☯ preferred license:',
    store: true,
    default: 'MIT',
  }];
}

module.exports = getPrefPropmts;
