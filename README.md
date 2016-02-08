# generator-zen

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]

> Scaffold out a ES6 node module in zen way

* `npm init` compliant
* ES6 workflow
* Structured and trustworthy README
* Tests, tdd and test coverage
* [Ready to use with travis and coveralls](#next-steps)
* ![Badges][badges]

[tdd]: https://iamstarkov.com/start-with-testing/
[badges]: https://img.shields.io/badge/with-badges-brightgreen.svg?style=flat-square

## Install

    npm install --global yo generator-zen

## Usage

    # create folder for your project
    mkdir awsm-project
    cd awsm-project

    # run generator
    yo zen

    # run generator to create project in separate folder
    yo zen meow

    # all questions --all/-a
    yo zen --all

    # minimum questions --yes/-y or --force/-f, like `$ npm init --yes/--force`
    yo zen --yes
    yo zen --force

    # custom init commit mesage --commit/-c, default '☯ init'
    yo zen --commit='awsm init'

    # help --help/-h
    yo zen --help

### Next steps:

1. Push it to your github repo
2. Enable your project on travis: https://travis-ci.org/profile/
3. Enable your project on coveralls: https://coveralls.io/repos/new
4. Write some tests in tests.js
5. Run tdd mode: `npm run tdd`
6. Write your module to pass the tests
7. When all tests are green bump major version and publish it:
  ```
  npm version major
  npm publish
  ```
  Your package will be tagged, commited, transpiled, published, cleaned up and pushed all the changes to github automagically ✨, take a look at scripts section.

You are awesome! ✨💫

## License

MIT © [Vladimir Starkov](https://iamstarkov.com/)

[npm-url]: https://npmjs.org/package/generator-zen
[npm-image]: https://img.shields.io/npm/v/generator-zen.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/generator-zen
[travis-image]: https://img.shields.io/travis/iamstarkov/generator-zen.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/generator-zen
[depstat-image]: https://david-dm.org/iamstarkov/generator-zen.svg?style=flat-square
