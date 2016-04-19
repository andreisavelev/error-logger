# error-logger

![Bower version](https://img.shields.io/badge/Bower-1.0.4-green.svg)
[![npm version](https://img.shields.io/badge/npm-1.0.4-green.svg)]
[![GitHub issues](https://img.shields.io/github/issues/savelevcorr/error-logger.svg?style=plastic)](https://github.com/savelevcorr/error-logger/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/savelevcorr/error-logger/master/LICENSE)

Скрипт логирования ошибок клиента на сервер.

[English version](https://github.com/savelevcorr/error-logger/blob/master/README.md)

### Установка

```sh
$ npm install --save client-error-logger
```
или

```sh
$ bower install --save error-logger
```

Скрипт поддерживает amd, CommonJS загрузку, а так же его можно просто подключить в теге script на странице.

```javascript
var errorLogger = require('client-error-logger');
```
или

```javascript
require(['/bower_components/error-logger/error-logger.min'], function (errorLogger) {
  errorLogger();
});
```

или

```html
<script src="/js/error-logger.min.js"></script>
```

### Использование

Если логирование не сервере не требуется, можно вызвать `errorLogger()` без параметров.
Если вы хотите писать логи ошибок клиента на сервере, то  передайте в качестве аргумента адрес обработчика запросоов,
Например:

 ```javascript
 errorLogger('http://my-best-site.com/logger.php');
 ```

Будет отправлен POST запроc с тремя параметрами:
 * message - Сообщение об ошибке,
 * file - в каком скрипте произошла ошибка,
 * line - на какой строке.
