# error-logger

Скрипт логирования ошибок клиента на сервер.

### Установка

```sh
$ npm install --save client-error-logger
```
или

```sh
$ bower install --save error-logger
```

Скрипт поддерживает amd, CommonJS загрузку, а так же его можно просто подключить в теге script на странице.

```sh
$ var errorLogger = require('client-error-logger');
```
или

```sh
$ require(['/bower_components/error-logger/error-logger.min'], function (errorLogger) {
  errorLogger();
});
```

или

```sh
<script src="/js/error-logger.min.js"></script>
```

### Использование

Если логирование не сервере не требуется, можно вызвать errorLogger() без параметров.
Если вы хотите писать логи ошибок клиента на сервере, то  передайте в качестве аргумента адрес обработчика запросоов,
Например:

 ```sh
 errorLogger('http://my-best-site.com/logger.php');
 ```

Будет отправлен POST запроc с тремя параметрами:
 * message - Сообщение об ошибке,
 * file - в каком скрипте произошла ошибка,
 * line - на какой строке.
