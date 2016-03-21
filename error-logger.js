(function () {
    function errorLogger (logTo) {
        var _logTo = logTo || '';
        var _sendByXhr = function (message, file, lineNUmber) {
            var _xhr = new XMLHttpRequest();
            var _errorData = new FormData();

            _errorData.append('message', message);
            _errorData.append('file', file);
            _errorData.append('line', lineNUmber);

            if (!_logTo.length) {
                console.error("Error", message, file, lineNUmber);
            } else {
                _xhr.open('POST', _logTo, true);
                _xhr.send(_errorData);
            }
        };

        window.onerror = _sendByXhr;

        if (typeof _logTo !== 'string') {
            throw new Error('passed argument must be a sting');
        }
    }

    if(typeof module === "object" && module.exports) {
        module.exports = errorLogger;
    } else if(typeof define === "function" && define.amd) {
        define('error-logger', [], function (errorLogger) {
            return errorLogger;
        });
    } else {
        window.errorLogger = errorLogger;
    }
})();
