(function () {
    function errorLogger (logTo) {
        var _logTo = logTo || '';
        var _sendByXhr = function (message, url, lineNUmber) {
            var _xhr = new XMLHttpRequest();
            var _errorData = 'message=' + encodeURIComponent(message) +
                '&url=' + encodeURIComponent(url) +
                '&line=' + encodeURIComponent(lineNUmber);

            if (!_logTo.length) {
                console.error("Error", message, url, lineNUmber);
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
