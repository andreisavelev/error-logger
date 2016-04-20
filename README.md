# error-logger

![Bower version](https://img.shields.io/badge/Bower-1.0.7-green.svg)
![npm version](https://img.shields.io/badge/npm-1.0.7-green.svg)
[![GitHub issues](https://img.shields.io/github/issues/savelevcorr/error-logger.svg?style=plastic)](https://github.com/savelevcorr/error-logger/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/savelevcorr/error-logger/master/LICENSE)

Logging front-end errors to the server.

[Russian version](https://github.com/savelevcorr/error-logger/blob/master/README-ru-RU.md)

### Installation

```sh
$ npm install --save client-error-logger
```
or

```sh
$ bower install --save error-logger
```

The script supports amd, CommonJS, and you can just plug in a script tag on the page.

```javascript
var errorLogger = require('client-error-logger');
```
or

```javascript
require(['/bower_components/error-logger/error-logger.min'], function (errorLogger) {
  errorLogger();
});
```
or

```html
<script src="/js/error-logger.min.js"></script>
```

### Usage

If logging to the server is not required, you can call errorLogger() without any parameters.
If you want to write the error logs of client to server, pass as argument the address of the query processor.
For example:

 ```javascript
 errorLogger('http://my-best-site.com/logger.php');
 ```

Will be sent POST request with three parameters:
 * message - error message
 * file - in what file an error occurred,
 * line - on what line of code error occurred.
