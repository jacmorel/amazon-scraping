////////////////////////////////////////////
;(function (packageFunction) {
  /* istanbul ignore next */
  var p = window.AmazonUIPageJS || window.P;
  /* istanbul ignore next */
  var attribute = p._namespace || p.attributeErrors;
  /* istanbul ignore next */
  var namespacedP = attribute ? attribute("ACICAssets", "") : p;

  /* istanbul ignore next */
  if (namespacedP.guardFatal) {
    namespacedP.guardFatal(packageFunction)(namespacedP, window);
  } else {
    namespacedP.execute(function () {
      packageFunction(namespacedP, window);
    });
  }
}(function(P, window, undefined){
// BEGIN ASSET ACICAssets-1.0.17528.0
/////////////////////////
// BEGIN FILE js/acic.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@amzn/katal-logger/dist/helper/metrics-aggregator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/dist/helper/metrics-aggregator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsAggregator = void 0;
var MetricsAggregator = /** @class */ (function () {
    function MetricsAggregator(filterFunction) {
        var _this = this;
        this.filterFunction = filterFunction;
        this.aggregatedMetrics = {};
        window.addEventListener('katal.metrics.publish', function (event) {
            _this.aggregateMetric(event);
        });
    }
    MetricsAggregator.prototype.aggregateMetric = function (event) {
        var _a = event.detail, metric = _a.metric, context = _a.context;
        var serviceName = context.serviceName, methodName = context.methodName;
        if (this.filterFunction && !this.filterFunction(metric, context)) {
            return;
        }
        this.aggregatedMetrics[serviceName] =
            this.aggregatedMetrics[serviceName] || {};
        this.aggregatedMetrics[serviceName][methodName] =
            this.aggregatedMetrics[serviceName][methodName] || {};
        this.aggregatedMetrics[serviceName][methodName][metric.name] =
            this.aggregatedMetrics[serviceName][methodName][metric.name] || [];
        this.aggregatedMetrics[serviceName][methodName][metric.name].push(metric.value);
    };
    return MetricsAggregator;
}());
exports.MetricsAggregator = MetricsAggregator;
//# sourceMappingURL=metrics-aggregator.js.map

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
var promise_polyfill_1 = __importDefault(__webpack_require__(/*! promise-polyfill */ "./node_modules/@amzn/katal-logger/node_modules/promise-polyfill/src/index.js"));
var stacktrace_js_1 = __importDefault(__webpack_require__(/*! stacktrace-js */ "./node_modules/@amzn/katal-logger/node_modules/stacktrace-js/stacktrace.js"));
var katal_metrics_1 = __webpack_require__(/*! ./metrics/katal-metrics */ "./node_modules/@amzn/katal-logger/dist/metrics/katal-metrics.js");
var metrics_aggregator_1 = __webpack_require__(/*! ./helper/metrics-aggregator */ "./node_modules/@amzn/katal-logger/dist/helper/metrics-aggregator.js");
var Level;
(function (Level) {
    Level["DEBUG"] = "debug";
    Level["INFO"] = "info";
    Level["WARN"] = "warn";
    Level["ERROR"] = "error";
    Level["FATAL"] = "fatal";
})(Level = exports.Level || (exports.Level = {}));
var LOG_LEVELS = [
    Level.DEBUG,
    Level.INFO,
    Level.WARN,
    Level.ERROR,
    Level.FATAL,
];
var DEFAULT_MAX_LOG_LINE_SIZE = 10000; // 10 kilobytes default
var DEFAULT_BATCH_TIMEOUT_DURATION = 5000;
var DEFAULT_MAX_LOGS_PER_BATCH = 25;
var CONFIG_DEFAULTS = {
    logThreshold: Level.DEBUG,
    maxLogLineSize: DEFAULT_MAX_LOG_LINE_SIZE,
    batchTimeoutDuration: DEFAULT_BATCH_TIMEOUT_DURATION,
    decodeStackTrace: false,
    recordMetrics: true,
    context: {},
    headers: {},
    logToConsole: false,
    maxLogsPerBatch: DEFAULT_MAX_LOGS_PER_BATCH,
    useXMLHttpRequest: false,
};
// obtained from https://developer.mozilla.org/en-US/docs/Web/API/Event
var EVENT_PROPERTIES = [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'deepPath',
    'defaultPrevented',
    'eventPhase',
    'explicitOriginalTarget',
    'originalTarget',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type',
    'isTrusted',
];
var ERROR_EVENT_PROPERTIES = __spreadArrays(EVENT_PROPERTIES, ['message']);
var KatalLogger = /** @class */ (function () {
    /**
     * Construct a KatalLogger
     *
     * @param config
     */
    function KatalLogger(config) {
        var _this = this;
        this.resourceTimingLogged = false;
        this.sendLogsToBackend = function () {
            var logsToSend = _this.logLineQueue;
            if (logsToSend.length === 0) {
                return;
            }
            _this.logLineQueue = [];
            var logs = {
                logs: logsToSend,
            };
            _this.sendLogToBackend(_this.toJSON(logs));
            _this.queueTimerId = undefined;
        };
        var configWithDefaults = __assign(__assign({}, CONFIG_DEFAULTS), config);
        this.url = configWithDefaults.url;
        this.logThreshold = configWithDefaults.logThreshold;
        this.maxLogLineSize = configWithDefaults.maxLogLineSize;
        this.context = configWithDefaults.context;
        this.logToConsole = configWithDefaults.logToConsole;
        this.headers = configWithDefaults.headers;
        this.recordMetrics = configWithDefaults.recordMetrics;
        this.batchTimeoutDuration = configWithDefaults.batchTimeoutDuration;
        this.decodeStackTrace = configWithDefaults.decodeStackTrace;
        this.maxLogsPerBatch = configWithDefaults.maxLogsPerBatch;
        this.xhrWithCredentials = configWithDefaults.xhrWithCredentials;
        this.useXMLHttpRequest = configWithDefaults.useXMLHttpRequest;
        this.logLineQueue = [];
        this.unregisterFns = [];
        this.unloaded = false;
        this.logThresholdIndex = Math.max(LOG_LEVELS.indexOf(Level.DEBUG), LOG_LEVELS.indexOf(this.logThreshold));
        if (configWithDefaults.sendToBackendOverride &&
            typeof configWithDefaults.sendToBackendOverride === 'function') {
            this.sendLogToBackend = configWithDefaults.sendToBackendOverride;
        }
        if (this.recordMetrics) {
            this.metricsPublisher = katal_metrics_1.createMetricsPublisher('KatalLogger:Loaded');
            this.metricsPublisher.publishCounterMonitor('KatalLogger:construct', 1);
        }
        this.registerUnloadAction(function () {
            _this.unloaded = true;
            _this.sendLogsToBackend();
        });
        /**
         * Set this.unloaded to false to continue queueing the logs
         */
        this.registerBackToPageAction(function () {
            _this.unloaded = false;
        });
    }
    /**
     * Cover all of the unload cases:
     * https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/
     */
    KatalLogger.prototype.registerUnloadAction = function (callback) {
        this.registerEvent('pagehide', callback);
        this.registerEvent('beforeunload', callback);
        this.registerEvent('visibilitychange', function () {
            if (document.visibilityState === 'hidden') {
                callback();
            }
        });
    };
    /**
     * Check if the user comes back to the page
     * https://t.corp.amazon.com/D69927460
     */
    KatalLogger.prototype.registerBackToPageAction = function (callback) {
        this.registerEvent('pageshow', callback);
        this.registerEvent('visibilitychange', function () {
            if (document.visibilityState === 'visible') {
                callback();
            }
        });
    };
    /**
     * Log a copy of Katal Metrics emitted on this page
     * @param filterFunction: an optional function to filter metrics before publishing
     */
    KatalLogger.prototype.addMetricsListener = function (filterFunction) {
        var _this = this;
        var aggregator = new metrics_aggregator_1.MetricsAggregator(filterFunction);
        var unloadedAlready = false;
        this.registerUnloadAction(function () {
            if (unloadedAlready)
                return;
            unloadedAlready = true;
            _this.info('Katal Metrics', aggregator.aggregatedMetrics);
        });
    };
    /**
     * Adds a formatted version of Performance API logs.
     * Uses https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntries
     * to determine resource and paint timings.
     */
    KatalLogger.prototype.addPerformanceListener = function () {
        var _this = this;
        this.registerUnloadAction(function () {
            _this.logResourceTiming();
        });
    };
    KatalLogger.prototype.logResourceTiming = function () {
        var _a, _b;
        if (this.resourceTimingLogged) {
            return;
        }
        this.resourceTimingLogged = true;
        var resource = window.performance
            .getEntriesByType('resource')
            .reduce(function (acc, resourceTiming) {
            var _a;
            var _b = resourceTiming, name = _b.name, initiatorType = _b.initiatorType, duration = _b.duration;
            var resource = name.split('/').pop();
            acc[initiatorType] = (_a = acc[initiatorType]) !== null && _a !== void 0 ? _a : {};
            acc[initiatorType][resource] = Math.round(duration);
            return acc;
        }, {});
        var paint = window.performance
            .getEntriesByType('paint')
            .reduce(function (acc, _a) {
            var name = _a.name, startTime = _a.startTime;
            acc[name] = Math.round(startTime);
            return acc;
        }, {});
        var navigation = Object.entries((_b = (_a = window.performance.getEntriesByType('navigation')[0]) === null || _a === void 0 ? void 0 : _a.toJSON()) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            acc[key] = typeof value === 'number' ? Math.round(value) : value;
            return acc;
        }, {});
        this.info("Performance Timing", { resource: resource, paint: paint, navigation: navigation });
    };
    /**
     * Adds an event listener for errors. Will log the error if the filter callback returns true
     *
     * @param filterCallback function that takes an error object and returns whether it should be logged
     */
    KatalLogger.prototype.addErrorListener = function (filterCallback) {
        var _this = this;
        ['error', 'unhandledrejection'].map(function (listener) {
            _this.registerEvent(listener, 
            /* istanbul ignore next - this.eventListener tested seperately */
            function (e) {
                return _this.eventListener(e, filterCallback);
            }, true);
        });
    };
    /**
     * Removes the registered error event listeners
     * Normal applications need not call this.
     * This is required for multitenant SPAs to avoid memory leaks.
     */
    KatalLogger.prototype.removeErrorListener = function () {
        this.unregisterFns.forEach(function (fn) { return fn(); });
    };
    KatalLogger.prototype.registerEvent = function (event, cb, capture) {
        window.addEventListener(event, cb, capture);
        this.unregisterFns.push(function () {
            window.removeEventListener(event, cb, capture);
        });
    };
    KatalLogger.prototype.eventListener = function (e, filterCallback) {
        var errorMessage;
        var error;
        // e is an ErrorEvent
        if (e.error) {
            errorMessage = e.error.message;
            error = e.error;
        }
        // e is PromiseRejectionEvent
        else if (e.reason) {
            if (isError(e.reason)) {
                errorMessage = e.reason.message;
                error = e.reason;
            }
            else {
                errorMessage = e.reason;
            }
        }
        else if (isError(e)) {
            errorMessage = e.message;
            error = e;
        }
        else {
            errorMessage = "An unknown error occurred: " + this.toStringObject(e);
            // Capture a stack trace
            error = new Error('Unknown error');
        }
        if (errorMessage !== 'KatalLogger error' &&
            (!filterCallback || filterCallback(error))) {
            try {
                return this.error(errorMessage, error);
            }
            catch (_) {
                // Prevent infinite loops by swallowing errors that occur while logging errors
            }
        }
    };
    KatalLogger.prototype.createJsonStringifyReplacer = function () {
        var cache = new Map();
        return function (key, value) {
            if (typeof value === 'object' && value != null) {
                if (cache.has(value)) {
                    return "reference-loop, also referenced from '" + cache.get(value) + "'";
                }
                cache.set(value, key);
            }
            return value;
        };
    };
    /**
     * Event objects are hard to serialize (see https://stackoverflow.com/questions/11547672/how-to-stringify-event-object) so we need a helper method
     */
    KatalLogger.prototype.toStringObject = function (object) {
        var constructorName = object.constructor.name;
        if (object instanceof Event) {
            var objectProperties = EVENT_PROPERTIES;
            var eventObject = {};
            /** if error event, we need to capture the error message */
            if (object instanceof ErrorEvent) {
                objectProperties = ERROR_EVENT_PROPERTIES;
            }
            for (var _i = 0, objectProperties_1 = objectProperties; _i < objectProperties_1.length; _i++) {
                var prop = objectProperties_1[_i];
                /** ignore serializing and logging the entire window log
                 */
                if (object[prop] !== window) {
                    eventObject[prop] = object[prop];
                }
            }
            object = eventObject;
        }
        return constructorName + ':' + this.toJSON(object);
    };
    /**
     * JSON.stringify can throw but we really don't want to error when logging error
     * so use our own error-safe serialization
     */
    KatalLogger.prototype.toJSON = function (data) {
        var stringified;
        try {
            stringified = JSON.stringify(data, this.createJsonStringifyReplacer());
        }
        catch (error) {
            stringified = "{ \"KatalLogger\": \"Failed to serialize!\", \"data\": \"" + data + "\", \"error\": \"" + error + "\" }";
        }
        return stringified;
    };
    KatalLogger.prototype.debug = function (message, error, context) {
        var _this = this;
        return this.extractArgs(Level.DEBUG, message, error, context).then(function (args) {
            return _this.sendRequest(args);
        });
    };
    KatalLogger.prototype.info = function (message, error, context) {
        var _this = this;
        return this.extractArgs(Level.INFO, message, error, context).then(function (args) {
            return _this.sendRequest(args);
        });
    };
    KatalLogger.prototype.warn = function (message, error, context) {
        var _this = this;
        return this.extractArgs(Level.WARN, message, error, context).then(function (args) {
            return _this.sendRequest(args);
        });
    };
    KatalLogger.prototype.error = function (message, error, context) {
        var _this = this;
        return this.extractArgs(Level.ERROR, message, error, context).then(function (args) {
            return _this.sendRequest(args);
        });
    };
    KatalLogger.prototype.fatal = function (message, error, context) {
        var _this = this;
        return this.extractArgs(Level.FATAL, message, error, context).then(function (args) {
            return _this.sendRequest(args);
        });
    };
    KatalLogger.prototype.extractArgs = function (level, message, error, context) {
        var errorInfo = isError(error)
            ? {
                errorMessage: error.message,
                errorName: error.name,
                errorStackTrace: '',
            }
            : undefined;
        var logPayload = {
            level: level,
            message: message,
            error: errorInfo,
            context: __assign(__assign(__assign({}, this.context), (errorInfo ? context : error)), { logTime: Date.now() }),
        };
        if (logPayload.error) {
            return this.getStackTraceFromError(error).then(function (trace) {
                logPayload.error.errorStackTrace = trace;
                return logPayload;
            });
        }
        return promise_polyfill_1.default.resolve(logPayload);
    };
    KatalLogger.prototype.getStackTraceFromError = function (error) {
        if (!this.decodeStackTrace) {
            return promise_polyfill_1.default.resolve(String(error.stack));
        }
        return promise_polyfill_1.default.resolve(stacktrace_js_1.default.fromError(error)
            .then(function (stackframes) {
            return stackframes.map(function (sf) { return sf.toString(); }).join('\n');
        })
            .catch(function (err) {
            // we failed to decode it, just output raw
            return String(error.stack) +
                '\n\nFailed to decode stacktrace:\n' +
                String(err);
        }));
    };
    KatalLogger.prototype.sendRequest = function (payload) {
        this.queueLogLine(payload);
        if (this.logToConsole) {
            this.sendLogToConsole(payload);
        }
    };
    KatalLogger.prototype.sendLogToConsole = function (data) {
        var level = data.level;
        if (!LOG_LEVELS.includes(data.level) || data.level === Level.FATAL) {
            level = Level.ERROR;
        }
        console[level](data);
    };
    KatalLogger.prototype.queueLogLine = function (payload) {
        if (this.payloadIsValid(payload)) {
            this.appendToQueue(payload);
            if (this.unloaded || this.logLineQueue.length >= this.maxLogsPerBatch) {
                this.sendLogsToBackend();
            }
            else if (!this.queueTimerId) {
                this.queueTimerId = window.setTimeout(this.sendLogsToBackend, this.batchTimeoutDuration);
            }
        }
    };
    KatalLogger.prototype.appendToQueue = function (payload) {
        this.logLineQueue.push(payload);
    };
    KatalLogger.prototype.doCallBeacon = function () {
        return ((navigator === null || navigator === void 0 ? void 0 : navigator.sendBeacon) &&
            !(Object.keys(this.headers).length || this.useXMLHttpRequest));
    };
    KatalLogger.prototype.sendLogToBackend = function (dataString) {
        if (this.url) {
            if (this.doCallBeacon()) {
                navigator.sendBeacon(this.url, dataString);
            }
            else {
                var xhr_1 = new XMLHttpRequest();
                // xhr request is set to async.
                // In case this needs to be changed to sync, it should be noted that xhr.withCredentials with sync request is not supported since Firefox 11.
                // See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#browser_compatibility
                xhr_1.open('POST', this.url, true);
                if (this.xhrWithCredentials) {
                    xhr_1.withCredentials = this.xhrWithCredentials;
                }
                Object.entries(this.headers).forEach(function (_a) {
                    var headerName = _a[0], headerValue = _a[1];
                    xhr_1.setRequestHeader(headerName, headerValue);
                });
                xhr_1.send(dataString);
            }
        }
    };
    KatalLogger.prototype.payloadIsValid = function (data) {
        var a = LOG_LEVELS.indexOf(data.level);
        var b = this.logThresholdIndex;
        var passesLogLevelCheck = a >= b;
        if (passesLogLevelCheck) {
            var dataString = this.toJSON(data);
            var dataStringLength = dataString.length;
            if (dataStringLength <= this.maxLogLineSize) {
                return true;
            }
        }
        return false;
    };
    return KatalLogger;
}());
exports.default = KatalLogger;
function isError(object) {
    /* istanbul ignore next - in node (unit tests) there is no error.constructor. In ie, there is no error.stack */
    return ((object === null || object === void 0 ? void 0 : object.name) && object.message && (object.stack || !!object.constructor));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/dist/metrics/katal-metrics.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/dist/metrics/katal-metrics.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMetricsPublisher = void 0;
var metrics_publisher_singleton_1 = __webpack_require__(/*! ./metrics-publisher-singleton */ "./node_modules/@amzn/katal-logger/dist/metrics/metrics-publisher-singleton.js");
exports.createMetricsPublisher = function (methodName) {
    return metrics_publisher_singleton_1.MetricsPublisherSingleton.getInstance().newChildActionPublisherForMethod(methodName);
};
//# sourceMappingURL=katal-metrics.js.map

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/dist/metrics/metrics-publisher-singleton.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/dist/metrics/metrics-publisher-singleton.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsPublisherSingleton = void 0;
var KatalMetrics = __importStar(__webpack_require__(/*! @amzn/katal-metrics */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/index.js"));
var katal_metrics_driver_sushi_1 = __importDefault(__webpack_require__(/*! @amzn/katal-metrics-driver-sushi */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics-driver-sushi/dist/index.js"));
var MetricsPublisherSingleton = /** @class */ (function () {
    /* istanbul ignore next - Private constructor to prevent initializing the singleton */
    function MetricsPublisherSingleton() {
    }
    MetricsPublisherSingleton.getInstance = function () {
        if (!MetricsPublisherSingleton.instance) {
            /* istanbul ignore next - This is invoked by the metrics driver */
            var metricsErrorHandler = function (err) {
                console.error(err);
            };
            var metricsDriver = this.getMetricsDriver(metricsErrorHandler);
            var metricsContext = this.getMetricsContext();
            MetricsPublisherSingleton.instance = new KatalMetrics.Publisher(metricsDriver, metricsErrorHandler, metricsContext);
        }
        return MetricsPublisherSingleton.instance;
    };
    MetricsPublisherSingleton.getMetricsContext = function () {
        var urlMatch = /([^?]+)/.exec(window.location.href);
        var urlMetric = new KatalMetrics.Metric.String('url', 
        /* istanbul ignore next - This is invoked by the metrics context */
        urlMatch ? urlMatch[1] : window.location.href);
        urlMetric.truncate = true;
        return new KatalMetrics.Context.Builder()
            .withSite('KatalLoggerInternalMetrics')
            .withServiceName('KatalLogger')
            .addRelatedMetrics(urlMetric)
            .build();
    };
    MetricsPublisherSingleton.getMetricsDriver = function (metricsErrorHandler) {
        return new katal_metrics_driver_sushi_1.default.Builder()
            .withDomainRealm('prod', 'USAmazon')
            .withErrorHandler(metricsErrorHandler)
            .build();
    };
    return MetricsPublisherSingleton;
}());
exports.MetricsPublisherSingleton = MetricsPublisherSingleton;
//# sourceMappingURL=metrics-publisher-singleton.js.map

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics-driver-sushi/dist/KatalMetricsDriverSushi.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics-driver-sushi/dist/KatalMetricsDriverSushi.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KatalMetricsDriverSushi = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricsDriver2 = _interopRequireDefault(__webpack_require__(/*! @amzn/katal-metrics/lib/driver/KatalMetricsDriver */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/driver/KatalMetricsDriver.js"));

var _KatalMetricType = _interopRequireDefault(__webpack_require__(/*! @amzn/katal-metrics/lib/metricObject/KatalMetricType */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricType.js"));

var _katalSushiClient = _interopRequireDefault(__webpack_require__(/*! @amzn/katal-sushi-client */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-sushi-client/dist/SushiClient.js"));

var _temp;

var KAT_STANDALONE_NEXUS_PRODUCER_ID = 'katal';
var KAT_STANDALONE_DEFAULT_SOURCE_GROUPS = {
  test: 'com.amazon.eel.katal.metrics.core.nexus.gamma',
  prod: 'com.amazon.eel.katal.metrics.core.nexus'
};

var KatalMetricsDriverSushi =
/*#__PURE__*/
function (_KatalMetricsDriver) {
  (0, _inherits2.default)(KatalMetricsDriverSushi, _KatalMetricsDriver);

  function KatalMetricsDriverSushi(options) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricsDriverSushi);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricsDriverSushi).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sushi", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "producerId", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sourceGroupId", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "errorHandler", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "combinedErrorHandler", function (err) {
      if (_this.errorHandler) {
        try {
          _this.errorHandler(err); // Return to avoid falling through to default error handler


          return;
        } catch (nextErr) {
          console.error("Error handling error publishing metrics:");
          console.error(nextErr); // Fall through
        }
      }

      _this.defaultErrorHandler(err);
    });
    var domain = options.domain,
        realm = options.realm,
        errorHandler = options.errorHandler,
        sushiClient = options.sushiClient,
        _options$sushiProduce = options.sushiProducer,
        producerId = _options$sushiProduce === void 0 ? KAT_STANDALONE_NEXUS_PRODUCER_ID : _options$sushiProduce,
        sushiClientOptions = options.sushiClientOptions,
        sushiClientTransportOverride = options.sushiClientTransportOverride; // custom source group always overrides defaults

    var sourceGroupId = options.sourceGroupId || KAT_STANDALONE_DEFAULT_SOURCE_GROUPS[domain] || KAT_STANDALONE_DEFAULT_SOURCE_GROUPS['test'];
    _this.sushi = sushiClient || _this.buildSushiClient(domain, realm, sourceGroupId, sushiClientOptions, sushiClientTransportOverride);
    _this.errorHandler = errorHandler;
    _this.producerId = producerId;
    _this.sourceGroupId = sourceGroupId;
    return _this;
  }

  (0, _createClass2.default)(KatalMetricsDriverSushi, [{
    key: "beforeUnload",

    /**
     * Register a callback to be called right before the page unloads. This
     * allows for any final metrics, such as page visit duration, to be sent
     * before the user navigates away from the page or closes the tab.
     * NOTE: This is an experimental API and may change in the future.
     * @param cb The callback to call.
     */
    value: function beforeUnload(cb) {
      this.sushi.onSushiUnload(cb);
    }
    /**
     * Default error handler if the user-supplied error handler fails or is unset.  Should never be called unless
     * user-provided error handler misbehaves.
     *
     * @param err Unhandled error object
     */

  }, {
    key: "defaultErrorHandler",
    value: function defaultErrorHandler(err) {
      console.error("Error publishing metrics:");
      console.error(err);
    }
    /**
     * Call the error-handler supplied by the user when this object was constructed; if that is unset or itself throws
     * an exception, calls the default error handler as a fallback, which will just log the error to the console.
     *
     * @param err Error object to handle
     */

  }, {
    key: "withErrorHandling",

    /**
     * Helper method to wrap a function in the error handler.
     *
     * @param doTheThing Function to run under the wrapper
     * @return Return value from called function
     */
    value: function withErrorHandling(doTheThing) {
      try {
        return doTheThing();
      } catch (err) {
        this.combinedErrorHandler(err);
      }
    }
  }, {
    key: "buildSushiClient",
    value: function buildSushiClient(domain, realm, sourceGroupId, sushiClientOptions, sushiClientTransportOverride) {
      if (!domain || !realm) {
        throw new Error('KatalMetricsDriverSushi requires a domain and realm to build a sushi client.');
      }

      return new _katalSushiClient.default(KatalMetricsDriverSushi.getRealmName(realm), sourceGroupId, this.combinedErrorHandler, sushiClientOptions, sushiClientTransportOverride);
    }
  }, {
    key: "publish",
    // TODO: errorHandler in this method is deprecated and is not referenced.
    // Tech debt: https://issues.amazon.com/issues/KAT-875
    value: function publish(metricObject, errorHandler, context) {
      var _this2 = this;

      // Support for new 2-argument form of publish, which does not pass the unused errorHandler object (KAT-875)
      var metricsContext = arguments.length < 3 ? arguments[1] : arguments[2];
      this.withErrorHandling(function () {
        // TODO: This logic is now moved into KatalMetricsPublisher, once everybody has that update we can remove this.
        // Tech debt: https://issues.amazon.com/issues/KAT-876
        if (_KatalMetricType.default.List === metricObject.type) {
          metricObject.metricList.forEach(function (metric) {
            _this2.publish(metric, metricsContext);
          });
          return;
        }

        var nexusSchema = _this2.mapObjectTypeToNexusSchema(metricObject.type);

        var fields = (0, _objectSpread2.default)({}, metricsContext.context, {
          metricKey: metricObject.name,
          value: metricObject.value
        });

        if (metricObject.isMonitor) {
          fields.isMonitor = true;
        } // Reset the event count back to 0, otherwise Sushi will stop publishing after 1K items (https://issues.amazon.com/issues/KAT-1534)


        _this2.sushi.reset();

        _this2.sushi.event(fields, _this2.producerId, nexusSchema, {
          "ssd": 1
        });
      });
    }
  }, {
    key: "mapObjectTypeToNexusSchema",
    value: function mapObjectTypeToNexusSchema(objectType) {
      switch (objectType) {
        case _KatalMetricType.default.String:
          return 'katal.client.metrics.String.2';

        case _KatalMetricType.default.Counter:
          return 'katal.client.metrics.Counter.3';

        case _KatalMetricType.default.Timer:
          return 'katal.client.metrics.Timer.2';

        default:
          throw new Error("Unknown type ".concat(objectType, " when publishing metric object."));
      }
    }
  }], [{
    key: "getRealmName",
    value: function getRealmName(realm) {
      switch (realm) {
        case 'NAAmazon':
        case 'USAmazon':
          return _katalSushiClient.default.REGIONS.NA;

        case 'EUAmazon':
          return _katalSushiClient.default.REGIONS.EU;

        case 'FEAmazon':
        case 'JPAmazon':
          return _katalSushiClient.default.REGIONS.FE;

        case 'CNAmazon':
          return _katalSushiClient.default.REGIONS.CN;

        default:
          // Let the SushiClient decide if this is bogus or not.
          return realm;
      }
    }
  }]);
  return KatalMetricsDriverSushi;
}(_KatalMetricsDriver2.default);

exports.KatalMetricsDriverSushi = KatalMetricsDriverSushi;
(0, _defineProperty2.default)(KatalMetricsDriverSushi, "Builder", (_temp =
/*#__PURE__*/
function () {
  function _temp() {
    (0, _classCallCheck2.default)(this, _temp);
    (0, _defineProperty2.default)(this, "context", {});
  }

  (0, _createClass2.default)(_temp, [{
    key: "withSushiClient",
    value: function withSushiClient(sushiClient) {
      this.context.sushiClient = sushiClient;
      return this;
    }
  }, {
    key: "withDomainRealm",
    value: function withDomainRealm(domain, realm) {
      this.context.domain = domain;
      this.context.realm = realm;
      return this;
    }
  }, {
    key: "withCustomProducer",
    value: function withCustomProducer(sushiProducerId) {
      this.context.sushiProducer = sushiProducerId;
      return this;
    }
  }, {
    key: "withCustomSourceGroup",
    value: function withCustomSourceGroup(sourceGroupId) {
      this.context.sourceGroupId = sourceGroupId;
      return this;
    }
  }, {
    key: "withErrorHandler",
    value: function withErrorHandler(errorHandler) {
      this.context.errorHandler = errorHandler;
      return this;
    }
  }, {
    key: "withSushiClientOptions",
    value: function withSushiClientOptions(sushiClientOptions) {
      this.context.sushiClientOptions = sushiClientOptions;
      return this;
    }
  }, {
    key: "withSushiClientTransportOverride",
    value: function withSushiClientTransportOverride(sushiClientTransportOverride) {
      this.context.sushiClientTransportOverride = sushiClientTransportOverride;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      return new KatalMetricsDriverSushi(this.context);
    }
  }]);
  return _temp;
}(), _temp));

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics-driver-sushi/dist/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics-driver-sushi/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./nodejsShims */ 0);

var _KatalMetricsDriverSushi = __webpack_require__(/*! ./KatalMetricsDriverSushi */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics-driver-sushi/dist/KatalMetricsDriverSushi.js");

/* istanbul ignore file */
var _default = _KatalMetricsDriverSushi.KatalMetricsDriverSushi;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/KatalMetricsContext.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/KatalMetricsContext.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _ValidateSimpleString = _interopRequireDefault(__webpack_require__(/*! ./helper/ValidateSimpleString */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleString.js"));

var _FirstMap = _interopRequireDefault(__webpack_require__(/*! ./helper/FirstMap */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/FirstMap.js"));

var _mergeLists = __webpack_require__(/*! ./helper/mergeLists */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/mergeLists.js");

var _embedRequestId = __webpack_require__(/*! ./helper/embedRequestId */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/embedRequestId.js");

var _temp;

var REQUIRED_FIELDS = ['site', 'serviceName', 'methodName'];

var KatalMetricsContext =
/*#__PURE__*/
function () {
  /**
   * Create a new metrics context with the given fields.
   *
   * @param contextFields Context fields value (default empty)
   */
  function KatalMetricsContext() {
    var contextFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, KatalMetricsContext);
    // Copy fields so this is immutable
    this.context = (0, _objectSpread2.default)({}, contextFields);
  }
  /**
   * Return a new KatalMetricsContext which is a copy of this context, with values added or overridden from
   * the given context.
   *
   * If the given context is null or empty, this method may return the original object as an optimization.
   *
   * @param thatContext Context to merge values from
   * @return New context with default values from this context, and values overridden or added by the given context.
   */


  (0, _createClass2.default)(KatalMetricsContext, [{
    key: "merge",
    value: function merge(thatContext) {
      if (!thatContext) return this; // Check for a common error

      if (thatContext instanceof KatalMetricsContext.Builder) {
        throw new Error("KatalMetricsContext.Builder object passed instead of KatalMetricsContext.  Try calling .build() method.");
      }

      var context = thatContext instanceof KatalMetricsContext ? thatContext.context : thatContext;
      var newContext = (0, _objectSpread2.default)({}, this.context, context, {
        relatedMetrics: (0, _mergeLists.mergeLists)(this.context.relatedMetrics, context.relatedMetrics),
        relatedMetricsSingleAction: (0, _mergeLists.mergeLists)(this.context.relatedMetricsSingleAction, context.relatedMetricsSingleAction)
      });
      return new KatalMetricsContext(newContext);
    }
    /**
     * Return a new context which is a copy of this context with relatedMetricsSingleAction removed.
     *
     * This is intended to be called when creating a new child publisher.
     *
     * @return Copy of this context, with relatedMetricsSingleAction removed
     */

  }, {
    key: "withoutRelatedMetricsSingleAction",
    value: function withoutRelatedMetricsSingleAction() {
      return new KatalMetricsContext((0, _objectSpread2.default)({}, this.context, {
        relatedMetricsSingleAction: undefined
      }));
    }
    /**
     * Get a context suitable for publication to the driver.
     *
     * This method strips out any private fields, and leaves only fields from the schema that the driver should publish.
     *
     * @return Context suitable for driver publication
     */

  }, {
    key: "driverContext",
    value: function driverContext() {
      // Don't publish relatedMetrics to the driver
      var newContextFields = (0, _objectSpread2.default)({}, this.context);
      delete newContextFields["relatedMetrics"];
      delete newContextFields["relatedMetricsSingleAction"];
      delete newContextFields["requestId"];

      if (this.context.requestId) {
        newContextFields.actionId = (0, _embedRequestId.embedRequestId)(newContextFields.actionId, this.context.requestId);
      }

      return new KatalMetricsContext(newContextFields);
    }
    /**
     * Get a simple JavaScript object with a copy of the fields for this context.
     *
     * @return Simple Javascript object with a copy of the fields for this context
     */

  }, {
    key: "getFields",
    value: function getFields() {
      // Copy fields so this remains immutable
      return (0, _objectSpread2.default)({}, this.context);
    }
    /**
     * Check for a validation error on this context.
     *
     * Returns the first validation error encountered if one is found, otherwise undefined.
     *
     * @returns Errors found with this context
     */

  }, {
    key: "validationError",
    value: function validationError() {
      var _this = this;

      var err; // Fields “site”, “serviceName”, “methodName”, and “metricKey” are required.

      err = (0, _FirstMap.default)(REQUIRED_FIELDS, function (field) {
        if (_this.context[field] == undefined) {
          return new Error("Field ".concat(field, " is required, but it is ").concat(_this.context[field]));
        }
      });
      if (err) return err;
      return (0, _FirstMap.default)(Object.keys(this.context), function (field) {
        return _this.validateField(field);
      });
    }
    /**
     * Validate an individual context field.
     *
     * @param field Name of field to validate
     * @returns Error found with this field, or undefined
     */

  }, {
    key: "validateField",
    value: function validateField(field) {
      var val = this.context[field];
      var nameForError = "field ".concat(field);

      switch (field) {
        // Strings which could be used as partition keys ("site" and "serviceName") cannot contain slashes, in
        // addition to the other restictions below.
        case 'site':
        case 'serviceName':
          if (val.indexOf('/') > -1) return new Error("Expected ".concat(nameForError, " to contain only valid characters, but it was ").concat(val, ".  It cannot contain a slash."));
        // Else fall through
        // Strings for fields “site”, “serviceName”, “methodName”, “metricKey” must match be valid PMET field names:
        // maximum length of 256, only letters, numbers, and the dot, colon, at-sign, underscore, forward-slash,
        // and slash characters (in short the regex ^[A-Za-z0-9.:@_/-]+$).

        case 'methodName':
        case 'actionId':
          return (0, _ValidateSimpleString.default)(val, nameForError);
      } // No error found, implicitly return undefined

    }
    /**
     * Builder class for KatalMetricsContext
     */

  }]);
  return KatalMetricsContext;
}();

exports.default = KatalMetricsContext;
(0, _defineProperty2.default)(KatalMetricsContext, "Builder", (_temp =
/*#__PURE__*/
function () {
  function _temp() {
    (0, _classCallCheck2.default)(this, _temp);
    (0, _defineProperty2.default)(this, "context", {});
  }

  (0, _createClass2.default)(_temp, [{
    key: "withSite",
    value: function withSite(site) {
      this.context.site = site;
      return this;
    }
  }, {
    key: "withServiceName",
    value: function withServiceName(serviceName) {
      this.context.serviceName = serviceName;
      return this;
    }
  }, {
    key: "withMethodName",
    value: function withMethodName(methodName) {
      this.context.methodName = methodName;
      return this;
    }
  }, {
    key: "withActionId",
    value: function withActionId(actionId) {
      this.context.actionId = actionId;
      return this;
    }
  }, {
    key: "withRequestId",
    value: function withRequestId(requestId) {
      this.context.requestId = requestId;
      return this;
    }
    /**
     * Replace any related metrics with the given list (see addRelatedMetrics to add instead of replace).
     *
     * Related metrics are metrics that are published whenever a new action is started.  They are used to relate the
     * action back to the context where it is happening, for example a request ID or a user identity.
     *
     * @param relatedMetrics Related metrics to publish when a new action is started for this context
     * @returns This builder object to continue building
     */

  }, {
    key: "withRelatedMetrics",
    value: function withRelatedMetrics() {
      for (var _len = arguments.length, relatedMetrics = new Array(_len), _key = 0; _key < _len; _key++) {
        relatedMetrics[_key] = arguments[_key];
      }

      this.context.relatedMetrics = relatedMetrics;
      return this;
    }
    /**
     * Add additional related metrics to this builder.  See withRelatedMetrics for more information.
     *
     * @param relatedMetrics Additional related metrics to publish when a new action is started for this context
     * @returns This builder object to continue building
     */

  }, {
    key: "addRelatedMetrics",
    value: function addRelatedMetrics() {
      for (var _len2 = arguments.length, relatedMetrics = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        relatedMetrics[_key2] = arguments[_key2];
      }

      this.context.relatedMetrics = (0, _mergeLists.mergeLists)(this.context.relatedMetrics, relatedMetrics);
      return this;
    }
    /**
     * Replace single-action related metrics with the given list (see addRelatedMetricsSingleAction to add instead of replace,
     * and withRelatedMetrics for more information about related metrics).
     *
     * Single-action related metrics are published when a new child metric publisher is created, but not included as
     * related metrics for the new child metric publisher, so are not published again if the child metric publisher
     * creates grandchild published metrics.
     *
     * @param metrics Related metrics
     * @returns This builder object to continue building
     */

  }, {
    key: "withRelatedMetricsSingleAction",
    value: function withRelatedMetricsSingleAction() {
      for (var _len3 = arguments.length, metrics = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        metrics[_key3] = arguments[_key3];
      }

      this.context.relatedMetricsSingleAction = metrics;
      return this;
    }
    /**
     * Add additional single-action related metrics to this builder.  See addRelatedMetricsSingleAction for more information.
     *
     * @param metrics Related metrics
     * @returns This builder object to continue building
     */

  }, {
    key: "addRelatedMetricsSingleAction",
    value: function addRelatedMetricsSingleAction() {
      for (var _len4 = arguments.length, metrics = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        metrics[_key4] = arguments[_key4];
      }

      this.context.relatedMetricsSingleAction = (0, _mergeLists.mergeLists)(this.context.relatedMetricsSingleAction, metrics);
      return this;
    }
    /**
     * Take the fields set in this builder and use them to create a new KatalMetricsContext.
     *
     * @return KatalMetricsContext object built with the parameters given to this builder
     */

  }, {
    key: "build",
    value: function build() {
      return new KatalMetricsContext(this.context);
    }
  }]);
  return _temp;
}(), _temp));

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/KatalMetricsPublisher.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/KatalMetricsPublisher.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v4 */ "./node_modules/@amzn/katal-logger/node_modules/uuid/v4.js"));

var _KatalMetricsContext = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricsContext */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/KatalMetricsContext.js"));

var _KatalMetricObject = _interopRequireDefault(__webpack_require__(/*! ./metricObject/KatalMetricObject */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

var KatalMetrics = _interopRequireWildcard(__webpack_require__(/*! . */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/index.js"));

var _KatalMetricString = _interopRequireDefault(__webpack_require__(/*! ./metricObject/KatalMetricString */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricString.js"));

var _mergeLists = __webpack_require__(/*! ./helper/mergeLists */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/mergeLists.js");

var _metricsExtension = __webpack_require__(/*! ./helper/metricsExtension */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/metricsExtension.js");

var _embedRequestId = __webpack_require__(/*! ./helper/embedRequestId */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/embedRequestId.js");

var INITIALIZATION_METHOD_NAME = 'Initialization';

/**
 * Default error handler if the user-supplied error handler fails or is unset.
 * Should never be called unless user-provided error handler misbehaves.
 */
var DEFAULT_ERROR_HANDLER = function DEFAULT_ERROR_HANDLER(err) {
  console.error("Error publishing metrics:");
  console.error(err);
};

var PARENT_ACTION_ID_NAME = 'parentActionId';

var getContextFields = function getContextFields(context) {
  if (context.context) {
    return context.context;
  } else {
    return context;
  }
};
/**
 * Class used for publishing metrics to Katal.  Contains a driver and a context.
 *
 * This class knows how to publish metrics, and how to create new publishers with a modified context.
 */


var KatalMetricsPublisher =
/*#__PURE__*/
function () {
  /**
   * Create a new metrics publisher with the given driver and context
   *
   * @param driver Subclass of KatalMetricsDriver used to publish the metrics
   * @param errorHandler Handler for errors that occur while using this publisher
   * @param context Context for this metrics publisher; contains data to be included with every
   *     metric published using this publisher object.  Default is an empty context.
   */
  function KatalMetricsPublisher(driver) {
    var _this = this;

    var errorHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ERROR_HANDLER;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _KatalMetricsContext.default();
    (0, _classCallCheck2.default)(this, KatalMetricsPublisher);
    (0, _defineProperty2.default)(this, "combinedErrorHandler", function (err) {
      try {
        _this.errorHandler(err);
      } catch (nextErr) {
        console.error("Error handling error publishing metrics:");
        console.error(nextErr);
        DEFAULT_ERROR_HANDLER(err);
      }
    });

    // Check for a common error
    if (context instanceof _KatalMetricsContext.default.Builder) {
      throw new Error("KatalMetricsContext.Builder object passed instead of KatalMetricsContext.  Try calling .build() method.");
    }

    this.driver = driver;
    this.errorHandler = errorHandler;
    this.context = !(context instanceof _KatalMetricsContext.default) ? new _KatalMetricsContext.default(context) : context;
  }
  /**
   * Call the error-handler supplied by the user when this object was constructed; if that is unset or itself throws
   * an exception, calls the default error handler as a fallback, which will just log the error to the console.
   *
   * @param err Error object to handle
   */


  (0, _createClass2.default)(KatalMetricsPublisher, [{
    key: "withErrorHandling",

    /**
     * Helper method to wrap a function in the error handler.
     *
     * @param doTheThing Function to run under the wrapper
     * @return Return value from called function
     */
    value: function withErrorHandling(doTheThing) {
      try {
        return doTheThing();
      } catch (err) {
        this.combinedErrorHandler(err);
      }
    }
    /**
     * Helper method to return all the related metrics of base publisher and additionalContext.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @return Return all related metrics from base publisher and additionalContext.
     */

  }, {
    key: "getAdditionalRelatedMetrics",
    value: function getAdditionalRelatedMetrics(additionalContext) {
      var newContext = additionalContext instanceof _KatalMetricsContext.default ? additionalContext.context : additionalContext;
      var baseRelatedMetrics = this.getBaseRelatedMetrics();
      return (0, _mergeLists.mergeLists)(baseRelatedMetrics, newContext.relatedMetrics);
    }
    /**
     * Helper method to return all the related metrics of base publisher.
     *
     * @return Return all related metrics from the base publisher.
     */

  }, {
    key: "getBaseRelatedMetrics",
    value: function getBaseRelatedMetrics() {
      return (0, _mergeLists.mergeLists)(this.context.context.relatedMetrics, this.context.context.relatedMetricsSingleAction);
    }
    /**
     * Publish the given metric object.
     *
     * This method is guaranteed never to throw an exception.  If the metric object or context are invalid,
     * or any other exception is thrown while publishing, the publisher's error handler is called.  If the
     * publisher's error handler is unset or fails, the default error handler is called (see defaultErrorHandler).
     *
     * @param katalMetricObject Metric object to publish
     */

  }, {
    key: "publish",
    value: function publish(katalMetricObject) {
      var _this2 = this;

      this.withErrorHandling(function () {
        if (!katalMetricObject) {
          throw new Error("Cannot publish undefined/null metric object");
        }

        if (_KatalMetricObject.default.Types.List === katalMetricObject.type) {
          katalMetricObject.metricList.forEach(function (metric) {
            _this2.publish(metric);
          });
        } else {
          var driverContext = _this2.context.driverContext();

          var contextError = driverContext.validationError();
          if (contextError) throw contextError;
          var objectError = katalMetricObject.validationError();
          if (objectError) throw objectError;
          (0, _metricsExtension.dispatchMetricEvent)(katalMetricObject, driverContext);

          _this2.driver.publish(katalMetricObject, _this2.combinedErrorHandler, driverContext);
        }
      });
    }
    /**
     * Create a new publisher which is identical to this publisher, but with the given context fields merged into
     * the new publisher's context.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildPublisher",
    value: function newChildPublisher(additionalContext) {
      return new KatalMetricsPublisher(this.driver, this.errorHandler, this.context.merge(additionalContext));
    }
    /**
     * Begin a new action, and return a new publisher for metrics related to that action.
     *
     * Beginning a new action involves the following steps:
     *   1. Generate a new actionId for the action, randomly in the browser
     *   2. If there are any related metrics in the context, publish them
     *   3. Create and return a new publisher with this object's context, merged with any additional context given,
     *      merged with the actionId generated above.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisher",
    value: function newChildActionPublisher(additionalContext) {
      var actionId = this._generateActionid(additionalContext);

      var newContext = this.context.withoutRelatedMetricsSingleAction().merge({
        actionId: actionId
      }).merge(additionalContext);
      var newPublisher = new KatalMetricsPublisher(this.driver, this.errorHandler, newContext);
      var allRelatedMetrics = additionalContext && !(additionalContext instanceof _KatalMetricsContext.default.Builder) ? this.getAdditionalRelatedMetrics(additionalContext) : this.getBaseRelatedMetrics();

      if (allRelatedMetrics) {
        allRelatedMetrics.forEach(function (metric) {
          newPublisher.publish(metric);
        });
      }

      return newPublisher;
    }
    /**
     * Begin a new chained child action, and return a new publisher for metrics related to that action.
     *
     * A chained action is handled the same way as in newChildActionPublisher, but additionally,
     * the returned publisher has a relatedMetricNoInherit named "parentActionId", with the newly
     * generated actionId as its value.
     *
     * The effect of this is that any further chained child actions can be connected back to this
     * action through the parentActionId, and so on recursively.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisherChained",
    value: function newChildActionPublisherChained(additionalContext) {
      var actionId = this._generateActionid(additionalContext);

      var parentActionId = (0, _embedRequestId.embedRequestId)(actionId, this.context.context.requestId);
      var relatedMetricsSingleAction = [new _KatalMetricString.default(PARENT_ACTION_ID_NAME, parentActionId)];
      var newContext = new _KatalMetricsContext.default({
        actionId: actionId,
        relatedMetricsSingleAction: relatedMetricsSingleAction
      }).merge(additionalContext);
      return this.newChildActionPublisher(newContext);
    }
    /**
     * Helper method to create a new chained child action publisher with the given value for methodName.
     *
     * Apart from setting the methodName in the child context, this method is identical to newChildActionPublisherChained.
     *
     * @param methodName Method name for new publisher context
     * @param additionalContext Additional context to supply (optional)
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisherChainedForMethod",
    value: function newChildActionPublisherChainedForMethod(methodName, additionalContext) {
      return this.newChildActionPublisherChained(new _KatalMetricsContext.default({
        methodName: methodName
      }).merge(additionalContext));
    }
    /**
     * Helper method to create a new action publisher with the given value for methodName.
     *
     * Apart from setting the methodName in the child context, this method is identical to newChildActionPublisherForMethod.
     * @param methodName Method name for new publisher context
     * @param additionalContext Additional context to supply (optional)
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisherForMethod",
    value: function newChildActionPublisherForMethod(methodName, additionalContext) {
      return this.newChildActionPublisher(new _KatalMetricsContext.default({
        methodName: methodName
      }).merge(additionalContext));
    }
    /**
     * Helper method to create a new action for application initialization.  It will always have a methodName
     * of "Initialization"; otherwise this method is identical to newChildActionPublisherForMethod.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisherForInitialization",
    value: function newChildActionPublisherForInitialization(additionalContext) {
      return this.newChildActionPublisherForMethod(INITIALIZATION_METHOD_NAME, additionalContext);
    }
    /**
     * Helper method to publish a string with the given name and value.
     *
     * @param name Metric name
     * @param value String value
     */

  }, {
    key: "publishString",
    value: function publishString(name, value) {
      this.publish(new KatalMetrics.Metric.String(name, value));
    }
    /**
     * Helper method to publish a string with the given name and value, truncated to the maximum size allowed by the
     * schema.
     *
     * @param name Metric name
     * @param value String value
     */

  }, {
    key: "publishStringTruncate",
    value: function publishStringTruncate(name, value) {
      var object = new KatalMetrics.Metric.String(name, value);
      object.truncate = true;
      this.publish(object);
    }
    /**
     * Helper method to publish a counter with the given name and value.
     *
     * @param name Metric name
     * @param value Counter value
     */

  }, {
    key: "publishCounter",
    value: function publishCounter(name, value) {
      this.publish(new KatalMetrics.Metric.Counter(name, value));
    }
    /**
     * Helper method to publish a timer with the given name and value.
     *
     * @param name Metric name
     * @param value Timer value
     */

  }, {
    key: "publishTimer",
    value: function publishTimer(name, value) {
      this.publish(new KatalMetrics.Metric.Timer(name, value));
    }
    /**
     * Helper method to publish a counter with the isMonitor flag set, and the given name and value.
     *
     * @param name Metric name
     * @param value Counter value
     */

  }, {
    key: "publishCounterMonitor",
    value: function publishCounterMonitor(name, value) {
      this.publish(new KatalMetrics.Metric.Counter(name, value).withMonitor());
    }
    /**
     * Helper method to publish a timer with the isMonitor flag set, and the given name and value.
     *
     * @param name Metric name
     * @param value Timer value
     */

  }, {
    key: "publishTimerMonitor",
    value: function publishTimerMonitor(name, value) {
      this.publish(new KatalMetrics.Metric.Timer(name, value).withMonitor());
    }
    /**
     * Private helper method to extract an actionId from a context if one is provided, and otherwise generate a new one.
     *
     * @returns Action ID string
     */

  }, {
    key: "_generateActionid",
    value: function _generateActionid(context) {
      if (context) {
        var fields = getContextFields(context);

        if (fields.actionId) {
          return fields.actionId;
        }
      }

      return (0, _v.default)();
    }
  }]);
  return KatalMetricsPublisher;
}();

exports.default = KatalMetricsPublisher;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/driver/ErrorHandler.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/driver/ErrorHandler.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_ERROR_HANDLER = void 0;

var DEFAULT_ERROR_HANDLER = function DEFAULT_ERROR_HANDLER(err) {
  throw err;
};

exports.DEFAULT_ERROR_HANDLER = DEFAULT_ERROR_HANDLER;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/driver/KatalMetricsDriver.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/driver/KatalMetricsDriver.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

/**
 * Abstract base class for a Katal metrics driver.
 */
var KatalMetricsDriver =
/*#__PURE__*/
function () {
  function KatalMetricsDriver() {
    (0, _classCallCheck2.default)(this, KatalMetricsDriver);
  }

  (0, _createClass2.default)(KatalMetricsDriver, [{
    key: "publish",

    /**
     * Publish the given metric object with the given error handler and context.
     *
     * @param metricObject Metric object to publish.  Contains metricKey, isMonitor, type, and value.
     * @param errorHandler Callback function for handling any asynchronous errors that occur in the driver
     *     (the driver should just throw an exception for a synchronous error).
     * @param context Context for publishing this metric.  Contains all other fields to be published.
     */
    value: function publish(metricObject, errorHandler, context) {
      throw new Error('KatalMetricsDriver is an abstract class, please choose a driver and use that instead');
    }
  }]);
  return KatalMetricsDriver;
}();

exports.default = KatalMetricsDriver;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/FirstMap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/FirstMap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = firstMap;

/**
 * Returns the first non-undefined value that results from running each value
 * in the given array through the mapper function.
 * @param array An array of values.
 * @param mapper A mapper function that should return a value or undefined.
 * @returns The first non-undefined value from the mapper function.
 */
function firstMap(array, mapper) {
  var toReturn = undefined;
  array.some(function (val) {
    toReturn = mapper(val);
    return toReturn != null;
  });
  return toReturn;
}

;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ObjectValuesPonyfill.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ObjectValuesPonyfill.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectValues = Object.values ? Object.values : function (object) {
  return Object.keys(object).map(function (key) {
    return object[key];
  });
};
var _default = objectValues;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleInt.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleInt.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateSimpleInt;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/typeof.js"));

/**
 * Number.isInteger is not in IE11, and letting Babel polyfill it added too much weight.
 * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
var isInteger = function isInteger(val) {
  return isFinite(val) && Math.floor(val) === val;
};
/**
 * Check if the given value is valid to be published to KatalMetrics as an integer (Counter or Timer),
 * and return either undefined (no error), or an Error object describing the problem.
 *
 * @param val Value to check
 * @param nameForError Name to use when constructing the error message, if necessary
 * @returns Error, or undefined if no error
 */


function validateSimpleInt(val, nameForError) {
  if (typeof val !== 'number') {
    return new Error("Expected ".concat(nameForError, " to have type 'number', but it was type '").concat((0, _typeof2.default)(val), "'"));
  }

  if (val < 0) {
    return new Error("Expected ".concat(nameForError, " to be positive, but it was ").concat(val));
  } // This will also catch NaN and Infinity


  if (!isInteger(val)) {
    return new Error("Expected ".concat(nameForError, " to be an integer, but it was ").concat(val));
  } // Couldn't find anything wrong, implicitly return undefined

}

;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleString.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleString.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateSimpleString;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/typeof.js"));

var SIMPLE_STRING_PAT = /^[A-Za-z0-9.:@_/-]+$/;
var SIMPLE_STRING_MAX_LEN = 127;
/**
 * Check if the given value is valid to be published to KatalMetrics as a field value,
 * such as site, serviceName, methodName, or actionId (note this is not used to check values for string metrics).
 * It returns either undefined (no error), or an Error object describing the problem.
 *
 * To be published, it must be a non-empty string, less than 256 characters, containing only ASCII
 * letters, numbers, or these characters: .:@_/- (those are the PMET field value requirements).
 *
 * @param val String value to check
 * @param nameForError Name to use in the error message, if one is generated
 * @returns Error, or undefined if no error
 */

function validateSimpleString(val, nameForError) {
  if (typeof val !== "string") {
    return new Error("Expected ".concat(nameForError, " to be a string, but it was a ").concat((0, _typeof2.default)(val)));
  }

  if (val.length > SIMPLE_STRING_MAX_LEN) {
    return new Error("Expected ".concat(nameForError, " to be less than ").concat(SIMPLE_STRING_MAX_LEN, " characters, but it was ").concat(val.length, " characters"));
  }

  if (val.length < 1) {
    return new Error("Expected ".concat(nameForError, " to be non-blank"));
  }

  if (!SIMPLE_STRING_PAT.test(val)) {
    return new Error("Expected ".concat(nameForError, " to contain only valid characters, but it was ").concat(val, ".  It can only contain letters, numbers, and these symbols: .:@_/-"));
  } // Couldn't find anything wrong, implicitly return undefined

}

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/embedRequestId.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/embedRequestId.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.embedRequestId = embedRequestId;

// until we can add a requestId field to the andes schema we will embed it in the actionId
function embedRequestId(actionId, requestId) {
  if (requestId) {
    return [requestId, actionId].join("::");
  }

  return actionId;
}

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/mergeLists.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/mergeLists.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeLists = mergeLists;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

// Helper method to merge two lists which could be undefined
// Returns merged lists if either is defined, otherwise returns undefined
function mergeLists(list1, list2) {
  if (list1 || list2) {
    return [].concat((0, _toConsumableArray2.default)(list1 || []), (0, _toConsumableArray2.default)(list2 || []));
  } else {
    return undefined;
  }
}

;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/metricsExtension.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/metricsExtension.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchMetricEvent = dispatchMetricEvent;

/**
 * Publish to external parties that are 
 * listening for katal.metrics.publish Custom Events
 */
function dispatchMetricEvent(metric, context) {
  if (typeof window === 'undefined') {
    return;
  }

  dispatchCustomEvent(metric, context); // for legacy purposes, also publish to __KATAL_METRICS_EXTENSION__

  publishToMetricsExtension(metric, context);
}

function dispatchCustomEvent(metric, context) {
  if (typeof CustomEvent !== "function") {
    return;
  }

  var event = new CustomEvent('katal.metrics.publish', {
    detail: {
      metric: metric,
      context: context.getFields()
    }
  });
  window.dispatchEvent(event);
}
/**
 * @Deprecated
 * Publish to https://code.amazon.com/packages/KatalMetricsExtension
 * The extension injects a global __KATAL_METRICS_EXTENSION__ object with a
 * `publish` method.
 */


function publishToMetricsExtension(metric, context) {
  var extension = window.__KATAL_METRICS_EXTENSION__;

  if (extension) {
    extension.publish(metric, context.getFields());
  }
}

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Publisher", {
  enumerable: true,
  get: function get() {
    return _KatalMetricsPublisher.default;
  }
});
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function get() {
    return _KatalMetricsContext.default;
  }
});
Object.defineProperty(exports, "MetricsDriver", {
  enumerable: true,
  get: function get() {
    return _KatalMetricsDriver.default;
  }
});
Object.defineProperty(exports, "ErrorHandler", {
  enumerable: true,
  get: function get() {
    return _ErrorHandler.ErrorHandler;
  }
});
exports.Metric = void 0;

var Metric = _interopRequireWildcard(__webpack_require__(/*! ./metricObject */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/index.js"));

exports.Metric = Metric;

var _KatalMetricsPublisher = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricsPublisher */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/KatalMetricsPublisher.js"));

var _KatalMetricsContext = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricsContext */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/KatalMetricsContext.js"));

var _KatalMetricsDriver = _interopRequireDefault(__webpack_require__(/*! ./driver/KatalMetricsDriver */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/driver/KatalMetricsDriver.js"));

var _ErrorHandler = __webpack_require__(/*! ./driver/ErrorHandler */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/driver/ErrorHandler.js");

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricCounter.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricCounter.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

var _ValidateSimpleInt = _interopRequireDefault(__webpack_require__(/*! ../helper/ValidateSimpleInt */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleInt.js"));

/**
 * Counter type.
 *
 * Can be used to count the number of times an event happened on a page, or as a simple 1/0 counter to track
 * success and failure.
 */
var KatalMetricCounter =
/*#__PURE__*/
function (_KatalMetricObject) {
  (0, _inherits2.default)(KatalMetricCounter, _KatalMetricObject);

  /**
   * Create a new counter with the given name and value.
   *
   * @param name Counter name
   * @param value Counter value
   */
  function KatalMetricCounter(name) {
    var _this;

    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    (0, _classCallCheck2.default)(this, KatalMetricCounter);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricCounter).call(this, name));
    _this.value = value;
    return _this;
  }
  /**
   * Get the value for this counter
   *
   * @return Counter value
   */


  (0, _createClass2.default)(KatalMetricCounter, [{
    key: "add",

    /**
     * Add a number to this counter.
     *
     * Can also be negative to subtract.
     *
     * @param addValue Amount to add to this counter
     */
    value: function add(addValue) {
      this.value += addValue;
    }
  }, {
    key: "validationError",
    value: function validationError() {
      var superError = (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricCounter.prototype), "validationError", this).call(this);
      if (superError) return superError;
      return (0, _ValidateSimpleInt.default)(this.value, "field value in Counter metrics object '".concat(this.name, "'"));
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * Set a new value for this counter
     *
     * @param value New value for this counter
     */
    ,
    set: function set(value) {
      // Math.round will also coerce from a string if necessary, and return NaN if invalid
      this._value = Math.round(value);
    }
    /**
     * Gets the type for this counter.
     *
     * @return Always returns "Counter".
     */

  }, {
    key: "type",
    get: function get() {
      return _KatalMetricObject2.default.Types.Counter;
    }
  }, {
    key: "canMonitor",
    get: function get() {
      return true;
    }
  }]);
  return KatalMetricCounter;
}(_KatalMetricObject2.default);

exports.default = KatalMetricCounter;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricHttpRequest.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricHttpRequest.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricTimedAttempt = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimedAttempt */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js"));

var _KatalMetricString = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricString */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricString.js"));

/**
 * Standardized metric for instrumenting HTTP requests.
 *
 * Under the hood it is a KatalMetricTimedAttempt with the name you provide prefixed with "HTTPRequest.".
 * That object will contain a metric suffixed with ".Latency" for the latency of this request, and a metric suffixed
 * with ".Failure" to record the failure or success of this request.
 *
 * By default the request will be tracked as a failure; to mark it as a success call the "setSuccess()" method.
 *
 * It has additional properties which will be emitted if set; see url, statusCode, and statusText.
 *
 * For example, if you gave the name "Search", these metrics will be created:
 *   HTTPRequest.Search.Latency - Latency for this request
 *   HTTPRequest.Search.Failure - Failure for this request (1 for failure, 0 for success)
 */
var KatalMetricHttpRequest =
/*#__PURE__*/
function (_KatalMetricTimedAtte) {
  (0, _inherits2.default)(KatalMetricHttpRequest, _KatalMetricTimedAtte);

  /** The prefix for this metric. */

  /** The suffix for URL metrics of this class. */

  /** The suffix for HTTP response code metrics of this class. */

  /** The suffix for HTTP response text metrics of this class. */

  /**
   * Create a new HTTP Request timed attempt metric incorporating the given name.
   *
   * The name you give will be used to create a KatalMetricTimedAttempt with the provided name prefixed with "HTTPRequest.".
   *
   * @param name Name of this metric; resulting metrics will prefix this name with "HTTPRequest."
   */
  function KatalMetricHttpRequest(name) {
    (0, _classCallCheck2.default)(this, KatalMetricHttpRequest);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricHttpRequest).call(this, "".concat(KatalMetricHttpRequest.HTTP_REQUEST_PREFIX, ".").concat(name)));
  }
  /**
   * Set the url for this metric.
   *
   * A string metric will be added to the list of objects that will be published for this metric.  Its name will
   * be this metrics name suffixed with '.URL', and its value will be the URL value given here.
   *
   * @param value URL for this metric
   */


  (0, _createClass2.default)(KatalMetricHttpRequest, [{
    key: "url",
    set: function set(value) {
      this.setOrDeleteNamedMetricValue(KatalMetricHttpRequest.URL_SUFFIX, _KatalMetricString.default, value);
    }
    /**
     * Get the URL for this metric, if defined.
     *
     * @return The URL for this metric, or undefined
     */
    ,
    get: function get() {
      return this.getNamedMetricValue(KatalMetricHttpRequest.URL_SUFFIX);
    }
    /**
     * Get the URL metric object associated with this metric, if defined.
     *
     * @return Associated URL metric object, or undefined
     */

  }, {
    key: "urlMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricHttpRequest.URL_SUFFIX);
    }
    /**
     * Set the HTTP response status code for this metric.
     *
     * A string metric will be added to the list of objects that will be published for this metric.  Its name will
     * be this metrics name suffixed with '.StatusCode', and its value will be the status code value given here.
     *
     * @param value HTTP response status code for this metric
     */

  }, {
    key: "statusCode",
    set: function set(value) {
      this.setOrDeleteNamedMetricValue(KatalMetricHttpRequest.STATUS_CODE_SUFFIX, _KatalMetricString.default, value);
    }
    /**
     * Get the HTTP response status code for this metric, if defined.
     *
     * @return Associated HTTP response status code metric object, or undefined
     */
    ,
    get: function get() {
      return this.getNamedMetricValue(KatalMetricHttpRequest.STATUS_CODE_SUFFIX);
    }
    /**
     * Get the HTTP response status code metric object associated with this metric, if defined.
     *
     * @return HTTP response status code metric object, or undefined
     */

  }, {
    key: "statusCodeMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricHttpRequest.STATUS_CODE_SUFFIX);
    }
    /**
     * Set the HTTP response status text for this metric.
     *
     * A string metric will be added to the list of objects that will be published for this metric.  Its name will
     * be this metrics name suffixed with '.StatusText', and its value will be the status text value given here.
     *
     * @param statusText HTTP response status text for this metric, or undefined to remove
     */

  }, {
    key: "statusText",
    set: function set(value) {
      this.setOrDeleteNamedMetricValue(KatalMetricHttpRequest.STATUS_TEXT_SUFFIX, _KatalMetricString.default, value);
    }
    /**
     * Get the HTTP response status text for this metric, if defined.
     *
     * @return Associated HTTP response status text metric object, or undefined
     */
    ,
    get: function get() {
      return this.getNamedMetricValue(KatalMetricHttpRequest.STATUS_TEXT_SUFFIX);
    }
    /**
     * Get the HTTP response status text for this metric, if defined.
     *
     * @return Associated HTTP response status text metric object, or undefined
     */

  }, {
    key: "statusTextMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricHttpRequest.STATUS_TEXT_SUFFIX);
    }
  }]);
  return KatalMetricHttpRequest;
}(_KatalMetricTimedAttempt.default);

exports.default = KatalMetricHttpRequest;
(0, _defineProperty2.default)(KatalMetricHttpRequest, "HTTP_REQUEST_PREFIX", 'HTTPRequest');
(0, _defineProperty2.default)(KatalMetricHttpRequest, "URL_SUFFIX", 'URL');
(0, _defineProperty2.default)(KatalMetricHttpRequest, "STATUS_CODE_SUFFIX", 'StatusCode');
(0, _defineProperty2.default)(KatalMetricHttpRequest, "STATUS_TEXT_SUFFIX", 'StatusText');

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricInitialization.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricInitialization.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricTimedAttempt = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimedAttempt */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js"));

/**
 * Standardized metric for instrumenting application initialization.
 *
 * Under the hood it is a KatalMetricTimedAttempt with the name "Initialization".
 * That object will contain a metric suffixed with ".Latency" for the latency of this request, and a metric suffixed
 * with ".Failure" to record the failure or success of this request.
 *
 * By default the request will be tracked as a failure; to mark it as a success call the "setSuccess()" method.
 *
 * By default, these metrics will be created:
 *   Initialization.Latency - Latency for application initialization
 *   Initialization.Failure - Failure for this application initialization (1 for failure, 0 for success)
 */
var KatalMetricInitialization =
/*#__PURE__*/
function (_KatalMetricTimedAtte) {
  (0, _inherits2.default)(KatalMetricInitialization, _KatalMetricTimedAtte);

  /** The name for this metric. */

  /**
   * Create a new timed attempt metric named "Initialization", for recording latency and failure information about
   * your application's initialization.
   */
  function KatalMetricInitialization() {
    (0, _classCallCheck2.default)(this, KatalMetricInitialization);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricInitialization).call(this, KatalMetricInitialization.INITIALIZE_METRIC_NAME));
  }

  return KatalMetricInitialization;
}(_KatalMetricTimedAttempt.default);

exports.default = KatalMetricInitialization;
(0, _defineProperty2.default)(KatalMetricInitialization, "INITIALIZE_METRIC_NAME", 'Initialization');

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricNamedObjectList.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricNamedObjectList.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _KatalMetricObjectList = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObjectList */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObjectList.js"));

var _ObjectValuesPonyfill = _interopRequireDefault(__webpack_require__(/*! ../helper/ObjectValuesPonyfill */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ObjectValuesPonyfill.js"));

/**
 * Metric object list that tracks metrics by name, and generates metrics prefixed with the name of this object.
 */
var KatalMetricNamedObjectList =
/*#__PURE__*/
function (_KatalMetricObjectLis) {
  (0, _inherits2.default)(KatalMetricNamedObjectList, _KatalMetricObjectLis);

  /**
   * Create a new named object list.
   *
   * The name given here will be used to prefix all metrics.
   *
   * @param name Name of this metric
   */
  function KatalMetricNamedObjectList(name) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricNamedObjectList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricNamedObjectList).call(this, name));
    _this.namedMetrics = {};
    return _this;
  }

  (0, _createClass2.default)(KatalMetricNamedObjectList, [{
    key: "setNamedMetric",

    /**
     * Replace the metric with the given name with a new metric generated by the given function.
     *
     * If the newly created metric supports monitoring, its isMonitor flag will be set to the value of the
     * isMonitor flag for this containing object.
     *
     * @param subName Name of this sub-metric
     * @param metricCreator Function which takes the full name for this metric
     *        and returns a newly constructed KatalMetricObject with this name and an appropriate value
     */
    value: function setNamedMetric(subName, metricCreator) {
      var fullName = this.getNameForSubMetric(subName);
      var metric = metricCreator(fullName);

      if (metric.canMonitor) {
        metric.isMonitor = this.isMonitor;
      }

      this.namedMetrics[subName] = metric;
    }
    /**
     * If the given value is undefined or null, delete the metric with the give name; otherwise if the given named
     * metric already exists update its value; otherwise create a new metric of the given type and set its value.
     *
     * This specialized helper method is designed to deal with the common case of a value setter in a more complex
     * metric.  Outside of subclasses, other methods will probably prove more useful.
     *
     * If the value is null the metric will also be deleted.
     *
     * @param subName Name of metric to create or delete
     * @param newValueClass Class of new metric to create
     * @param newValue New value for this metric (or undefined to delete the metric)
     */

  }, {
    key: "setOrDeleteNamedMetricValue",
    value: function setOrDeleteNamedMetricValue(subName, newValueClass, newValue) {
      if (newValue == undefined) {
        this.deleteNamedMetric(subName);
      } else {
        var metric = this.getOrCreateNamedMetric(subName, function (name) {
          return new newValueClass(name, newValue);
        });
        metric.value = newValue;
      }
    }
    /**
     * Get the sub-metric with the given name if it exists, otherwise use the given function to create a new metric and
     * store and return that.
     *
     * @param subName Name of this sub-metric
     * @param metricCreator Function which takes the full name for this metric
     *        and returns a newly constructed KatalMetricObject with this name and an appropriate value
     * @return Metric object which was retrieved or created
     */

  }, {
    key: "getOrCreateNamedMetric",
    value: function getOrCreateNamedMetric(subName, metricCreator) {
      if (!this.namedMetrics[subName]) {
        this.setNamedMetric(subName, metricCreator);
      }

      return this.namedMetrics[subName];
    }
    /**
     * Return the given named sub-metric, if it exists.
     *
     * @param {string} subName Name of this sub-metric
     * @return {KatalMetricObject | undefined} Metric object with this name if it exists, otherwise undefined
     */

  }, {
    key: "getNamedMetric",
    value: function getNamedMetric(subName) {
      return this.namedMetrics[subName];
    }
    /**
     * Delete the given named sub-metric.
     *
     * @param subName Name of this sub-metric
     */

  }, {
    key: "deleteNamedMetric",
    value: function deleteNamedMetric(subName) {
      delete this.namedMetrics[subName];
    }
    /**
     * Get the value for the given metric, or undefined if the metric does not exist.
     *
     * @param subName Name of this sub-metric
     * @return Value for the given metric, or undefined if the metric does not exist
     */

  }, {
    key: "getNamedMetricValue",
    value: function getNamedMetricValue(subName) {
      var metric = this.getNamedMetric(subName);
      if (!metric) return undefined;
      return metric.value;
    }
    /**
     * Generate a name for the given sub-metric.
     *
     * @param subName Name of this sub-metric
     * @return Full name for this sub-metric
     */

  }, {
    key: "getNameForSubMetric",
    value: function getNameForSubMetric(subName) {
      return "".concat(this.name, ".").concat(subName);
    }
  }, {
    key: "metricList",
    get: function get() {
      return (0, _ObjectValuesPonyfill.default)(this.namedMetrics);
    }
  }]);
  return KatalMetricNamedObjectList;
}(_KatalMetricObjectList.default);

exports.default = KatalMetricNamedObjectList;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _ValidateSimpleString = _interopRequireDefault(__webpack_require__(/*! ../helper/ValidateSimpleString */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleString.js"));

var _KatalMetricType = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricType */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricType.js"));

/**
 * Abstract base class for a single metric in Katal.
 *
 * A single metric contains the name (metricKey), value, type, and the isMonitor flag; everything else is in the
 * KatalMetricsContext it is published to.
 */
var KatalMetricObject =
/*#__PURE__*/
function () {
  /**
   * Metric types.
   */

  /**
   * Create a new KatalMetricObject with the given name.
   *
   * @param name Name for this metric; published as metricKey field
   */
  function KatalMetricObject(name) {
    (0, _classCallCheck2.default)(this, KatalMetricObject);
    this._name = name;
    this._isMonitor = false;
  }
  /**
   * Get the name for this metric.
   *
   * Note that the name is immutable, and this cannot be set.
   *
   * @returns Name for this metric
   */


  (0, _createClass2.default)(KatalMetricObject, [{
    key: "withMonitor",

    /**
     * Set the isMonitor flag for this metric, and returns this object for continued use.
     *
     * This flag determines if the metric can be used for dashboards and alarms (i.e. if it will be published to PMET)
     * @param isMonitor New value for the isMonitor flag; defaults to true
     * @returns This object
     */
    value: function withMonitor() {
      var isMonitor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isMonitor = isMonitor;
      return this;
    }
    /**
     * Set the isMonitor flag for this metric.
     *
     * The value is forced to a boolean based on its truthiness.
     *
     * @param isMonitor New value for the isMonitor flag
     */

  }, {
    key: "validationError",

    /**
     * Check for a validation error on this object.
     *
     * Returns the first validation error encountered if one is found, otherwise undefined.
     *
     * @returns {Error | undefined} Error found with this object, or undefined if no error is found
     */
    value: function validationError() {
      if (this.isMonitor !== undefined && typeof this.isMonitor !== 'boolean') {
        return new Error("Field isMonitor should be a boolean, but it was a ".concat((0, _typeof2.default)(this.isMonitor)));
      }

      return (0, _ValidateSimpleString.default)(this.name, 'field name');
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
    /**
     * Alias for name.
     *
     * @returns Name for this metric
     */

  }, {
    key: "metricKey",
    get: function get() {
      return this._name;
    }
  }, {
    key: "isMonitor",
    set: function set(isMonitor) {
      this._isMonitor = !!isMonitor;
    }
    /**
     * Get the isMonitor flag for this metric.
     *
     * @returns isMonitor flag for this metric.
     */
    ,
    get: function get() {
      return this._isMonitor;
    }
    /**
     * Check if this metric can be meaningfully monitored.
     *
     * Subclasses must override this.
     *
     * @return Whether this metric can be meaningfully monitored
     */

  }, {
    key: "canMonitor",
    get: function get() {
      throw new Error('Subclass of KatalMetricObject must implement canMonitor');
    }
    /**
     * Get the type of this metric.
     *
     * @return Type of this metric (one of: String, Counter, Timer, List)
     */

  }, {
    key: "type",
    get: function get() {
      throw new Error('Subclass of KatalMetricObject must implement type getter');
    }
  }]);
  return KatalMetricObject;
}();

exports.default = KatalMetricObject;
(0, _defineProperty2.default)(KatalMetricObject, "Types", _KatalMetricType.default);

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObjectList.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObjectList.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _set2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/set.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

var _FirstMap = _interopRequireDefault(__webpack_require__(/*! ../helper/FirstMap */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/FirstMap.js"));

/**
 * Abstract metric that contains a list of other metrics; when it is published, the list of metrics is retrieved, and all
 * are published.
 */
var KatalMetricObjectList =
/*#__PURE__*/
function (_KatalMetricObject) {
  (0, _inherits2.default)(KatalMetricObjectList, _KatalMetricObject);

  /**
   * Create a new KatalMetricObjectList.
   *
   * @param name Name for this metric.  Not really used, but present for consistency with other metrics.
   */
  function KatalMetricObjectList(name) {
    (0, _classCallCheck2.default)(this, KatalMetricObjectList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricObjectList).call(this, name));
  }
  /**
   * Get the list of for this object
   *
   * @returns Array of metrics for this object
   */


  (0, _createClass2.default)(KatalMetricObjectList, [{
    key: "validationError",

    /**
     * If any of the contained metrics are invalid, return the first validation error encountered; otherwise return
     * undefined.
     *
     * Note that this isn't called by the publisher; it validates each sub-metric on its own.
     *
     * @returns Error found with submetric, if any; else undefined
     */
    value: function validationError() {
      // Doesn't make sense to check superclass error here, since it is the contained metrics that matter.
      return (0, _FirstMap.default)(this.metricList, function (metric) {
        return metric.validationError();
      });
    }
  }, {
    key: "metricList",
    get: function get() {
      throw new Error('Subclass of KatalMetricObjectList must implement metricList getter');
    }
  }, {
    key: "isMonitor",
    set: function set(isMonitor) {
      (0, _set2.default)((0, _getPrototypeOf2.default)(KatalMetricObjectList.prototype), "isMonitor", isMonitor, this, true);
      this.metricList.forEach(function (metric) {
        if (metric.canMonitor) {
          metric.isMonitor = isMonitor;
        }
      });
    } // This just delegates to the superclass, but if we override the setter without overriding the getter
    // getting the property will always return undefined.
    ,
    get: function get() {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricObjectList.prototype), "isMonitor", this);
    }
  }, {
    key: "canMonitor",
    get: function get() {
      return true;
    }
  }, {
    key: "type",
    get: function get() {
      return _KatalMetricObject2.default.Types.List;
    }
  }]);
  return KatalMetricObjectList;
}(_KatalMetricObject2.default);

exports.default = KatalMetricObjectList;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricString.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricString.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

/**
 * String type.
 *
 * Can be used to store arbitrary strings of data.
 */
var KatalMetricString =
/*#__PURE__*/
function (_KatalMetricObject) {
  (0, _inherits2.default)(KatalMetricString, _KatalMetricObject);

  /**
   * Create a string with the given name and value.
   *
   * @param name String name
   * @param value String value
   */
  function KatalMetricString(name, value) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricString);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricString).call(this, name));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "truncate", false);
    _this.value = value;
    return _this;
  }
  /**
   * Get the value for this string metric.
   *
   * @return Value for this metric
   */


  (0, _createClass2.default)(KatalMetricString, [{
    key: "validationError",
    value: function validationError() {
      var superError = (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricString.prototype), "validationError", this).call(this);
      if (superError) return superError;

      if (typeof this.value !== 'string') {
        return new Error("Expected field value in String metrics object '".concat(this.name, "' to be type string, but it was ").concat((0, _typeof2.default)(this.value)));
      }

      if (this.value.length > KatalMetricString.MAX_SIZE) {
        if (this.truncate) {
          this.value = this.value.substring(0, KatalMetricString.MAX_SIZE);
        } else {
          return new Error("Expected field value in String metrics object '".concat(this.name, "' to be ").concat(KatalMetricString.MAX_SIZE, " characters or less, but it was ").concat(this.value.length, " characters."));
        }
      } // Didn't find anything wrong, implicitly return undefined

    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * Set the value for this string metric.
     *
     * The new value should be a string, but number and boolean types will be automatically converted to strings.
     * For other types, including undefined and null, the value will be accepted, but will fail validation when publishing.
     *
     * @param value New value for this metric
     */
    ,
    set: function set(value) {
      if (typeof value === "number" || typeof value === "boolean") {
        value = value.toString();
      }

      this._value = value;
    }
    /**
     * Truncation flag for this string metric.
     *
     * If set, the value here will be automatically truncated to the maximum size allowed by the current schema.
     * Otherwise, sending a value larger than allowed will result in a failure.
     *
     * @param value True to automatically truncate metrics, otherwise false
     */

  }, {
    key: "type",

    /**
     * Gets the type for this metric.
     *
     * @return Always returns "String".
     */
    get: function get() {
      return _KatalMetricObject2.default.Types.String;
    }
  }, {
    key: "canMonitor",
    get: function get() {
      return false;
    }
  }]);
  return KatalMetricString;
}(_KatalMetricObject2.default);

exports.default = KatalMetricString;
(0, _defineProperty2.default)(KatalMetricString, "MAX_SIZE", 256);

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricNamedObjectList = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricNamedObjectList */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricNamedObjectList.js"));

var _KatalMetricTimerStopwatch = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimerStopwatch */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimerStopwatch.js"));

var _KatalMetricCounter = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricCounter */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricCounter.js"));

/**
 * Metric that pairs a timer and a failure counter to record the time and status of an attempt to do something.
 */
var KatalMetricTimedAttempt =
/*#__PURE__*/
function (_KatalMetricNamedObje) {
  (0, _inherits2.default)(KatalMetricTimedAttempt, _KatalMetricNamedObje);

  /** The sub-metric name for latency. */

  /** The sub-metric name for failure count. */

  /**
   * Create a new timed attempt with the given name
   *
   * This will create two inner metrics, a KatalMetricCounter that has the given name with ".Failure" appended,
   * and a KatalMetricTimerStopwatch that has the given name with ".Latency" appended.
   *
   * @param name Name of this attempt
   */
  function KatalMetricTimedAttempt(name) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricTimedAttempt);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricTimedAttempt).call(this, name));

    _this.setNamedMetric(KatalMetricTimedAttempt.LATENCY_SUFFIX, function (name) {
      return new _KatalMetricTimerStopwatch.default(name);
    });

    _this.setNamedMetric(KatalMetricTimedAttempt.FAILURE_SUFFIX, function (name) {
      return new _KatalMetricCounter.default(name, 1);
    });

    return _this;
  }
  /**
   * Set the failure counter metric based on the given failure status.
   *
   * If failure is true the counter will have a value of 1; if it is false the counter will have a value of 0.
   *
   * @param failure Whether this is a failure or not; default true
   */


  (0, _createClass2.default)(KatalMetricTimedAttempt, [{
    key: "setFailure",
    value: function setFailure() {
      var failure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var failureCount = failure ? 1 : 0;
      var metric = this.failureMetric;
      metric.value = failureCount;
    }
    /**
     * Set the failure status to false.
     */

  }, {
    key: "setSuccess",
    value: function setSuccess() {
      this.setFailure(false);
    }
    /**
     * Set the latency metric to the given value, in milliseconds.
     *
     * Note you don't normally have to set this, the underlying metric is a KatalMetricTimerStopwatch that will start
     * and stop automatically.
     *
     * @param latencyMs Latency in milliseconds
     */

  }, {
    key: "setLatency",
    value: function setLatency(latencyMs) {
      var metric = this.latencyMetric;
      metric.value = latencyMs;
    }
    /**
     * Get the timer stopwatch metric for this attempt.
     *
     * @return Timer stopwatch metric for this attempt
     */

  }, {
    key: "latencyMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricTimedAttempt.LATENCY_SUFFIX);
    }
    /**
     * Get the failure counter metric for this attempt.
     *
     * @return Failure counter metric for this event
     */

  }, {
    key: "failureMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricTimedAttempt.FAILURE_SUFFIX);
    }
  }]);
  return KatalMetricTimedAttempt;
}(_KatalMetricNamedObjectList.default);

exports.default = KatalMetricTimedAttempt;
(0, _defineProperty2.default)(KatalMetricTimedAttempt, "LATENCY_SUFFIX", 'Latency');
(0, _defineProperty2.default)(KatalMetricTimedAttempt, "FAILURE_SUFFIX", 'Failure');

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimer.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimer.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

var _ValidateSimpleInt = _interopRequireDefault(__webpack_require__(/*! ../helper/ValidateSimpleInt */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleInt.js"));

/**
 * Timer type.
 *
 * Can be used to record a time.  This class requires explicit value; see KatalMetricTimerStopwatch for automatic
 * timing.
 */
var KatalMetricTimer =
/*#__PURE__*/
function (_KatalMetricObject) {
  (0, _inherits2.default)(KatalMetricTimer, _KatalMetricObject);

  /**
   * Create a new timer metric.
   *
   * @param name Name for the metric
   * @param value Timer value in milliseconds
   */
  function KatalMetricTimer(name, value) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricTimer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricTimer).call(this, name));
    _this.value = value;
    return _this;
  }
  /**
   * Get the value for this timer
   *
   * @return Timer value in milliseconds
   */


  (0, _createClass2.default)(KatalMetricTimer, [{
    key: "validationError",
    value: function validationError() {
      var superError = (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricTimer.prototype), "validationError", this).call(this);
      if (superError) return superError;
      return (0, _ValidateSimpleInt.default)(this.value, "field value in Timer metrics object '".concat(this.name, "'"));
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * Set the value for this timer
     *
     * @param value New timer value in milliseconds
     */
    ,
    set: function set(value) {
      if (value == undefined) {
        this._value = value;
        return;
      } // Math.round will also coerce from a string if necessary, and return NaN if invalid


      this._value = Math.round(value);
    }
    /**
     * Get the type for this timer.
     *
     * @return Always returns "Timer".
     */

  }, {
    key: "type",
    get: function get() {
      return _KatalMetricObject2.default.Types.Timer;
    }
  }, {
    key: "canMonitor",
    get: function get() {
      return true;
    }
  }]);
  return KatalMetricTimer;
}(_KatalMetricObject2.default);

exports.default = KatalMetricTimer;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimerStopwatch.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimerStopwatch.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _set2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/set.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js"));

var _KatalMetricTimer2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimer */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimer.js"));

/**
 * Subclass of KatalMetricTimer that can be started and stopped, and will record the elapsed time between starting and
 * stopping.  By default it will start when the object is created, and stopped when the value is retrieved with
 * the getter "value".
 */
var KatalMetricTimerStopwatch =
/*#__PURE__*/
function (_KatalMetricTimer) {
  (0, _inherits2.default)(KatalMetricTimerStopwatch, _KatalMetricTimer);

  /**
   * Create a new timer with the given name and starting time.  If no starting time is given, the current time is used.
   *
   * @param name Name for this timer
   * @param startTime Millisecond epoch time for the start time; defaults to now
   */
  function KatalMetricTimerStopwatch(name, startTime) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricTimerStopwatch);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch).call(this, name, undefined));

    _this.start(startTime);

    _this._value = undefined;
    return _this;
  }
  /**
   * Re-start timer with the given start time, or the current time if none is given.
   *
   * @param startTime When the timer was started, in epoch milliseconds; defaults to now
   */


  (0, _createClass2.default)(KatalMetricTimerStopwatch, [{
    key: "start",
    value: function start(startTime) {
      this._startTime = startTime || this.now();
    }
    /**
     * Stop the timer and record the elapsed time.
     *
     * @param stopTime When the timer was stopped, in epoch milliseconds; defaults to now
     */

  }, {
    key: "stop",
    value: function stop(stopTime) {
      return this._stopTime = stopTime || this.now();
    }
    /**
     * Check if the timer has been stopped.
     *
     * @returns Whether the timer has been stopped yet
     */

  }, {
    key: "now",
    value: function now() {
      return performance.now();
    }
  }, {
    key: "isStopped",
    get: function get() {
      return this._stopTime !== undefined;
    }
    /**
     * Get the elapsed time between when the timer was started and stopped; if the timer has not yet been stopped,
     * stop it first.
     *
     * @returns Elapsed time between when timer was started and stopped
     */

  }, {
    key: "value",
    get: function get() {
      if ((0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", this) === undefined) {
        if (!this.isStopped) {
          this.stop();
        } // Rely on super.value setter to round


        (0, _set2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", this.stopTime - this.startTime, this, true);
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", this);
    }
    /**
     * Get when this timer was started.
     *
     * @return Start time, in epoch milliseconds
     */
    ,

    /**
     * Set the value for this metric.  Note this will override the stopwatch behavior and just use the given value.
     *
     * @param value Value for this metric
     */
    set: function set(value) {
      (0, _set2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", value, this, true);
    }
  }, {
    key: "startTime",
    get: function get() {
      return this._startTime;
    }
    /**
     * Get when this timer was stopped (or undefined if it is still running)
     *
     * @return Stop time, in epoch millseconds, or undefined if the stopwatch is still running
     */

  }, {
    key: "stopTime",
    get: function get() {
      return this._stopTime;
    }
  }]);
  return KatalMetricTimerStopwatch;
}(_KatalMetricTimer2.default);

exports.default = KatalMetricTimerStopwatch;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricType.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricType.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Metric types.
 */
var KatalMetricType;

(function (KatalMetricType) {
  KatalMetricType["String"] = "String";
  KatalMetricType["Counter"] = "Counter";
  KatalMetricType["Timer"] = "Timer";
  KatalMetricType["List"] = "List";
})(KatalMetricType || (KatalMetricType = {}));

;
var _default = KatalMetricType;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Object", {
  enumerable: true,
  get: function get() {
    return _KatalMetricObject.default;
  }
});
Object.defineProperty(exports, "String", {
  enumerable: true,
  get: function get() {
    return _KatalMetricString.default;
  }
});
Object.defineProperty(exports, "Counter", {
  enumerable: true,
  get: function get() {
    return _KatalMetricCounter.default;
  }
});
Object.defineProperty(exports, "Timer", {
  enumerable: true,
  get: function get() {
    return _KatalMetricTimer.default;
  }
});
Object.defineProperty(exports, "TimerStopwatch", {
  enumerable: true,
  get: function get() {
    return _KatalMetricTimerStopwatch.default;
  }
});
Object.defineProperty(exports, "TimedAttempt", {
  enumerable: true,
  get: function get() {
    return _KatalMetricTimedAttempt.default;
  }
});
Object.defineProperty(exports, "Initialization", {
  enumerable: true,
  get: function get() {
    return _KatalMetricInitialization.default;
  }
});
Object.defineProperty(exports, "HttpRequest", {
  enumerable: true,
  get: function get() {
    return _KatalMetricHttpRequest.default;
  }
});

var _KatalMetricObject = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

var _KatalMetricString = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricString */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricString.js"));

var _KatalMetricCounter = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricCounter */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricCounter.js"));

var _KatalMetricTimer = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimer */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimer.js"));

var _KatalMetricTimerStopwatch = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimerStopwatch */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimerStopwatch.js"));

var _KatalMetricTimedAttempt = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimedAttempt */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js"));

var _KatalMetricInitialization = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricInitialization */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricInitialization.js"));

var _KatalMetricHttpRequest = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricHttpRequest */ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricHttpRequest.js"));

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-sushi-client/dist/SushiClient.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@amzn/katal-sushi-client/dist/SushiClient.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This class encapsulates two IIFEs that the Sushi library contains. A fake CSM and Window object are created and provided
 * to the functions so that they actually execute in a controlled environment away from any CSM code that might be executing
 * at the platform level within the page.
 *
 * The basic run order is the following:
 * 1. Build the mock CSM object, then build a mock Window object that references the CSM object as ue_csm
 * 2. Run the transportation-clients.js Script from SushiJavascriptClient providing the mocks. It will modify globals on the mock objects.
 * 3. Run the sushi-client.js script from SushiJavaScriptClient providing the mocks. It will create an instance of the sushi client and inject it into the CSM globals in the mocks.
 * 4. whenever event() is called, refer to the encapsulated csm object to add the event to the queue.
 */
var SushiClient =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(SushiClient, null, [{
    key: "createSushiUrl",
    value: function createSushiUrl(region, sourceGroup) {
      if (!sourceGroup) {
        throw new Error("Sushi Driver was not provided with a source group.");
      }

      var domain;

      switch (region) {
        case SushiClient.REGIONS.NA:
          domain = "unagi-na";
          break;

        case SushiClient.REGIONS.EU:
          domain = "unagi-eu";
          break;

        case SushiClient.REGIONS.FE:
          domain = "unagi-fe";
          break;

        case SushiClient.REGIONS.CN:
          domain = "unagi-cn";
          break;

        default:
          throw new Error("Unrecognized region '".concat(region, "' provided to SushiClient."));
      }

      return "https://".concat(domain, ".amazon.com/1/events/").concat(sourceGroup);
    }
  }, {
    key: "createCsmUserContext",
    value: function createCsmUserContext(sushiUrl) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _objectSpread({
        hiPriFlushInterval: 1000,
        lowPriFlushInterval: 10000,
        requestId: "1",
        errorChannel: "jserr",
        sessionStorageWrapper: undefined,
        errorHandlerFunction: console.log,
        sushiUrl: sushiUrl
      }, options);
    }
    /**
     * Create a Sushi Client for a region and source group
     *
     * @param region Region in SushiClient.REGIONS
     * @param sourceGroup Sushi Eel source group
     * @param errorHandler Error handler function
     * @param options Additional CSM context overrides
     * @param clientOverride An optional transportation client for overriding the default clients (navigator.sendBeacon and XDomainRequest or XMLHttpRequest)
     */

  }, {
    key: "REGIONS",
    get: function get() {
      return {
        NA: "NA",
        EU: "EU",
        FE: "FE",
        CN: "CN"
      };
    }
  }]);

  function SushiClient() {
    var region = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SushiClient.REGIONS.NA;
    var sourceGroup = arguments.length > 1 ? arguments[1] : undefined;
    var errorHandler = arguments.length > 2 ? arguments[2] : undefined;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var clientOverride = arguments.length > 4 ? arguments[4] : undefined;
    (0, _classCallCheck2.default)(this, SushiClient);
    var sushiUrl = SushiClient.createSushiUrl(region, sourceGroup);
    var csmUserContext = SushiClient.createCsmUserContext(sushiUrl, options);
    this.ue_csm = this.setupMockCSMObject(csmUserContext);
    this.encapsulatedWindow = this.setupMockWindow(this.ue_csm);
    this.transportationClientCode(this.ue_csm, window);

    if (clientOverride) {
      this.ue_csm.ue._sBcn = {
        isSupported: true,
        send: function send(endpoint, payload) {
          clientOverride(endpoint, payload);
          return true;
        }
      };
    }

    this.clientCode(this.ue_csm, this.encapsulatedWindow);
    this.errorHandler = errorHandler;
  }

  (0, _createClass2.default)(SushiClient, [{
    key: "event",
    value: function event(data, producerId, schemaId, options) {
      var debug = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (debug) {
        console.log("SushiClient wrapper publishing the following:", {
          data: data,
          producerId: producerId,
          schemaId: schemaId,
          options: options
        });
      }

      return this.ue_csm.ue.event(data, producerId, schemaId, options);
    }
    /**
     * If you plan to emit 1000 or more events per instantiated client,
     * call reset after calling event to allow the CSM client to continue sending events.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.ue_csm.ue.event.reset();
    }
    /**
     * Register a callback that will be called just before each time metrics are
     * flushed to the network.
     * @param callback A function that sushi will call before flushes.
     */

  }, {
    key: "onSushiFlush",
    value: function onSushiFlush(callback) {
      this.ue_csm.ue.onSushiFlush(callback);
    }
    /**
     * Register a callback that will be called just before the page unloads.
     * This can be used to send any final metrics to sushi, such as page visit
     * duration or batched counters.
     * @param callback A function that sushi will call before unload.
     */

  }, {
    key: "onSushiUnload",
    value: function onSushiUnload(callback) {
      this.ue_csm.ue.onSushiUnload(callback);
    }
  }, {
    key: "setupMockCSMObject",
    value: function setupMockCSMObject(csmUserContext) {
      var _this = this;

      var execStub = function execStub(callback, attribution) {
        return callback;
      };

      var eventStub = function eventStub(log, producer, eventType) {
        console.warn("SushiClient CSM stub called in unsupported manner: event()");
      };

      var errorHandler = function errorHandler(logEvent, channel) {
        if (_this.errorHandler) {
          _this.errorHandler(logEvent);
        } else {
          console.log("An error has occurred in SushiClient channel " + channel, logEvent);
        }
      };

      var attachHandler = function attachHandler(evt, handler, container) {
        //TODO might be able to just use window.ue.attach?
        container = container || window; //ok to use real window global here.

        if (window.EventTarget && window.EventTarget.prototype && window.EventTarget.prototype.addEventListener) {
          window.EventTarget.prototype.addEventListener.call(container, evt, handler, !!window.ue_clf);
        } else if (container.addEventListener) {
          container.addEventListener(evt, handler, !!window.ue_clf);
        } else if (container.attachEvent) {
          container.attachEvent("on" + evt, handler);
        }
      };

      return {
        ue_hpsi: csmUserContext.hiPriFlushInterval,
        ue_lpsi: csmUserContext.lowPriFlushInterval,
        ue: {
          ssw: csmUserContext.sessionStorageWrapper,
          log: errorHandler,
          exec: execStub,
          event: eventStub,
          attach: attachHandler
        },
        ueLogError: csmUserContext.errorHandlerFunction,
        ue_surl: csmUserContext.sushiUrl,
        ue_id: csmUserContext.requestId,
        ue_err_chan: csmUserContext.errorChannel
      };
    }
  }, {
    key: "setupMockWindow",
    value: function setupMockWindow(ue_csm) {
      //apparently cannot ref the setTimeout function directly in some browsers so we have to wrap it.
      var timeoutWrapper = function timeoutWrapper(fn, timeout) {
        return window.setTimeout(fn, timeout);
      };

      return {
        ue_csm: ue_csm,
        ueLogError: ue_csm.ueLogError,
        ue: ue_csm.ue,
        setTimeout: timeoutWrapper
      };
    }
    /**
     * Code within function pulled directly from
     * https://code.amazon.com/packages/SushiJavaScriptClient/blobs/mainline/--/javascript/sushi-client.js
     */

  }, {
    key: "clientCode",
    value: function clientCode(ue_csm, window) {
      ue_csm.ue.exec(function (b, k) {
        function A() {
          for (var a = 0; a < arguments.length; a++) {
            var c = arguments[a];

            try {
              var h;

              if (c.isSupported) {
                var b = t.buildPayload(l, e);
                h = c.send(J, b);
              } else throw dummyException;

              return h;
            } catch (d) {}
          }

          B({
            m: "All supported clients failed",
            attribution: "CSMSushiClient_TRANSPORTATION_FAIL",
            f: "sushi-client.js",
            logLevel: "ERROR"
          }, k.ue_err_chan || "jserr");
        }

        function m() {
          if (e.length) {
            for (var a = 0; a < n.length; a++) {
              n[a]();
            }

            A(d._sBcn || {}, d._ajx || {});
            e = [];
            f = {};
            l = {};
            u = v = q = w = 0;
          }
        }

        function K() {
          var a = new Date(),
              c = function c(a) {
            return 10 > a ? "0" + a : a;
          };

          return Date.prototype.toISOString ? a.toISOString() : a.getUTCFullYear() + "-" + c(a.getUTCMonth() + 1) + "-" + c(a.getUTCDate()) + "T" + c(a.getUTCHours()) + ":" + c(a.getUTCMinutes()) + ":" + c(a.getUTCSeconds()) + "." + String((a.getUTCMilliseconds() / 1E3).toFixed(3)).slice(2, 5) + "Z";
        }

        function x(a) {
          try {
            return JSON.stringify(a);
          } catch (c) {}

          return null;
        }

        function C(a, c, h, g) {
          var p = !1;
          g = g || {};
          r++;
          r == D && B({
            m: "Max number of Sushi Logs exceeded",
            f: "sushi-client.js",
            logLevel: "ERROR",
            attribution: "CSMSushiClient_MAX_CALLS"
          }, k.ue_err_chan || "jserr");
          var f;
          if (f = !(r >= D)) (f = a && -1 < a.constructor.toString().indexOf("Object") && c && -1 < c.constructor.toString().indexOf("String") && h && -1 < h.constructor.toString().indexOf("String")) || L++;
          f && (d.count && d.count("Event:" + h, 1), a.producerId = a.producerId || c, a.schemaId = a.schemaId || h, a.timestamp = K(), c = Date.now ? Date.now() : +new Date(), h = Math.random().toString().substring(2, 12), a.messageId = b.ue_id + "-" + c + "-" + h, g && !g.ssd && (a.sessionId = a.sessionId || b.ue_sid, a.requestId = a.requestId || b.ue_id, a.obfuscatedMarketplaceId = a.obfuscatedMarketplaceId || b.ue_mid), (c = x(a)) ? (c = c.length, (e.length == M || q + c > N) && m(), q += c, a = {
            data: t.compressEvent(a)
          }, e.push(a), (g || {}).n ? 0 === E ? m() : u || (u = k.setTimeout(m, E)) : v || (v = k.setTimeout(m, O)), p = !0) : p = !1);
          !p && b.ue_int && console.error("Invalid JS Nexus API call");
          return p;
        }

        function F() {
          if (!G) {
            for (var a = 0; a < y.length; a++) {
              y[a]();
            }

            for (a = 0; a < n.length; a++) {
              n[a]();
            }

            e.length && (b.ue_sbuimp && b.ue && b.ue.ssw && (a = x({
              dct: l,
              evt: e
            }), b.ue.ssw("eeldata", a), b.ue.ssw("eelsts", "unk")), A(d._sBcn || {}));
            G = !0;
          }
        }

        function H(a) {
          y.push(a);
        }

        function I(a) {
          n.push(a);
        }

        var D = 1E3,
            M = 499,
            N = 524288,
            s = function s() {},
            d = b.ue || {},
            B = d.log || s,
            P = b.uex || s;

        (b.uet || s)("bb", "ue_sushi_v1", {
          wb: 1
        });

        var J = b.ue_surl || "https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",
            Q = ["messageId", "timestamp"],
            z = "#",
            e = [],
            f = {},
            l = {},
            q = 0,
            w = 0,
            L = 0,
            r = 0,
            y = [],
            n = [],
            G = !1,
            u,
            v,
            E = void 0 === b.ue_hpsi ? 1E3 : b.ue_hpsi,
            O = void 0 === b.ue_lpsi ? 1E4 : b.ue_lpsi,
            t = function () {
          function a(a) {
            f[a] = z + w++;
            l[f[a]] = a;
            return f[a];
          }

          function c(b) {
            if (!(b instanceof Function)) {
              if (b instanceof Array) {
                for (var g = [], d = b.length, e = 0; e < d; e++) {
                  g[e] = c(b[e]);
                }

                return g;
              }

              if (b instanceof Object) {
                g = {};

                for (d in b) {
                  b.hasOwnProperty(d) && (g[f[d] ? f[d] : a(d)] = -1 === Q.indexOf(d) ? c(b[d]) : b[d]);
                }

                return g;
              }

              return "string" === typeof b && (b.length > (z + w).length || b.charAt(0) === z) ? f[b] ? f[b] : a(b) : b;
            }
          }

          return {
            compressEvent: c,
            buildPayload: function buildPayload() {
              return x({
                cs: {
                  dct: l
                },
                events: e
              });
            }
          };
        }();

        (function () {
          if (d.event && d.event.isStub) {
            if (b.ue_sbuimp && b.ue && b.ue.ssw) {
              var a = b.ue.ssw("eelsts").val;

              if (a && "unk" === a && (a = b.ue.ssw("eeldata").val)) {
                var c;

                a: {
                  try {
                    c = JSON.parse(a);
                    break a;
                  } catch (f) {}

                  c = null;
                }

                c && c.evt instanceof Array && c.dct instanceof Object && (e = c.evt, l = c.dct, e && l && (m(), b.ue.ssw("eeldata", "{}"), b.ue.ssw("eelsts", "scs")));
              }
            }

            d.event.replay(function (a) {
              a[3] = a[3] || {};
              a[3].n = 1;
              C.apply(this, a);
            });
            d.onSushiUnload.replay(function (a) {
              H(a[0]);
            });
            d.onSushiFlush.replay(function (a) {
              I(a[0]);
            });
          }
        })();

        d.attach("beforeunload", F);
        d.attach("pagehide", F);
        d._cmps = t;
        d.event = C;

        d.event.reset = function () {
          r = 0;
        };

        d.onSushiUnload = H;
        d.onSushiFlush = I;

        try {
          k.P && k.P.register && k.P.register("sushi-client", s);
        } catch (R) {
          b.ueLogError(R, {
            logLevel: "WARN"
          });
        }

        P("ld", "ue_sushi_v1", {
          wb: 1
        });
      }, "Nxs-JS-Client")(ue_csm, window);
    }
    /**
     * The code in this function is pulled directly from:
     * https://code.amazon.com/packages/SushiJavaScriptClient/blobs/mainline/--/javascript/transportation-clients.js
     */

  }, {
    key: "transportationClientCode",
    value: function transportationClientCode(ue_csm, window) {
      ue_csm.ue.exec(function (b, c) {
        var e = function e() {},
            f = function () {
          return {
            send: function send(b, d) {
              if (d && b) {
                var a;
                if (c.XDomainRequest) a = new XDomainRequest(), a.onerror = e, a.ontimeout = e, a.onprogress = e, a.onload = e, a.timeout = 0;else if (c.XMLHttpRequest) {
                  if (a = new XMLHttpRequest(), !("withCredentials" in a)) throw "";
                } else a = void 0;
                if (!a) throw "";
                a.open("POST", b, !0);
                a.setRequestHeader && a.setRequestHeader("Content-type", "text/plain");
                a.send(d);
              }
            },
            isSupported: !0
          };
        }(),
            g = function () {
          return {
            send: function send(c, d) {
              if (c && d) if (navigator.sendBeacon(c, d)) b.ue_sbuimp && b.ue && b.ue.ssw && b.ue.ssw("eelsts", "scs");else throw "";
            },
            isSupported: !!navigator.sendBeacon && !(c.cordova && c.cordova.platformId && "ios" == c.cordova.platformId)
          };
        }();

        b.ue._ajx = f;
        b.ue._sBcn = g;
      }, "Transportation-clients")(ue_csm, window);
    }
  }]);
  return SushiClient;
}();

exports.default = SushiClient;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/createClass.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/get.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/get.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/inherits.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/typeof.js")["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/set.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/set.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/superPropBase.js");

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/defineProperty.js");

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = superPropBase(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

module.exports = _set;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/typeof.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/typeof.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@amzn/katal-logger/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/error-stack-parser/error-stack-parser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/error-stack-parser/error-stack-parser.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "./node_modules/@amzn/katal-logger/node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error('Cannot parse given Error object');
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return filtered.map(function(line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
                }
                var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(');

                // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
                // case it has spaces in it, as the string is split on \s+ later on
                var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);

                // remove the parenthesized location from the line, if it was matched
                sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;

                var tokens = sanitizedLine.split(/\s+/).slice(1);
                // if a location was matched, pass it to extractLocation() otherwise pop the last token
                var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame({
                    functionName: functionName,
                    fileName: fileName,
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return filtered.map(function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame({
                        functionName: line
                    });
                } else {
                    var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                    var matches = line.match(functionNameRegex);
                    var functionName = matches && matches[1] ? matches[1] : undefined;
                    var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));

                    return new StackFrame({
                        functionName: functionName,
                        fileName: locationParts[0],
                        lineNumber: locationParts[1],
                        columnNumber: locationParts[2],
                        source: line
                    });
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame({
                        fileName: match[2],
                        lineNumber: match[1],
                        source: lines[i]
                    }));
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(
                        new StackFrame({
                            functionName: match[3] || undefined,
                            fileName: match[2],
                            lineNumber: match[1],
                            source: lines[i]
                        })
                    );
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);

            return filtered.map(function(line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = (tokens.shift() || '');
                var functionName = functionCall
                    .replace(/<anonymous function(: (\w+))?>/, '$2')
                    .replace(/\([^)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, '$1');
                }
                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
                    undefined : argsRaw.split(',');

                return new StackFrame({
                    functionName: functionName,
                    args: args,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        }
    };
}));


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/promise-polyfill/src/finally.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/promise-polyfill/src/finally.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (finallyConstructor);


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/promise-polyfill/src/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/promise-polyfill/src/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ "./node_modules/@amzn/katal-logger/node_modules/promise-polyfill/src/finally.js");


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/array-set.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/array-set.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = util.toSetString(aStr);
  var isDuplicate = has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    this._set[sStr] = idx;
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  var sStr = util.toSetString(aStr);
  return has.call(this._set, sStr);
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  var sStr = util.toSetString(aStr);
  if (has.call(this._set, sStr)) {
    return this._set[sStr];
  }
  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/base64-vlq.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/base64-vlq.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/base64.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/base64.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/binary-search.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/binary-search.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/mapping-list.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/mapping-list.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/util.js");

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/quick-sort.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/quick-sort.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-map-consumer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-map-consumer.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/binary-search.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/array-set.js").ArraySet;
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/base64-vlq.js");
var quickSort = __webpack_require__(/*! ./quick-sort */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap)
    : new BasicSourceMapConsumer(sourceMap);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      if (source != null && sourceRoot != null) {
        source = util.join(sourceRoot, source);
      }
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: Optional. the column number in the original source.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    if (this.sourceRoot != null) {
      needle.source = util.relative(this.sourceRoot, needle.source);
    }
    if (!this._sources.has(needle.source)) {
      return [];
    }
    needle.source = this._sources.indexOf(needle.source);

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The only parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._sources.toArray().map(function (s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          if (this.sourceRoot != null) {
            source = util.join(this.sourceRoot, source);
          }
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    if (this.sourceRoot != null) {
      aSource = util.relative(this.sourceRoot, aSource);
    }

    if (this._sources.has(aSource)) {
      return this.sourcesContent[this._sources.indexOf(aSource)];
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + aSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    if (this.sourceRoot != null) {
      source = util.relative(this.sourceRoot, source);
    }
    if (!this._sources.has(source)) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    source = this._sources.indexOf(source);

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The only parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        if (section.consumer.sourceRoot !== null) {
          source = util.join(section.consumer.sourceRoot, source);
        }
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = section.consumer._names.at(mapping.name);
        this._names.add(name);
        name = this._names.indexOf(name);

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-map-generator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-map-generator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/base64-vlq.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/util.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/array-set.js").ArraySet;
var MappingList = __webpack_require__(/*! ./mapping-list */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/mapping-list.js").MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-node.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-node.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
var util = __webpack_require__(/*! ./util */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/util.js");

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are removed from this array, by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var shiftNextLine = function() {
      var lineContents = remainingLines.shift();
      // The last line of a file might not have a newline.
      var newLine = remainingLines.shift() || "";
      return lineContents + newLine;
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[0];
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[0] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[0];
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[0] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLines.length > 0) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/util.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/lib/util.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/source-map/source-map.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/source-map/source-map.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "./node_modules/@amzn/katal-logger/node_modules/source-map/lib/source-node.js").SourceNode;


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/stack-generator/stack-generator.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/stack-generator/stack-generator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "./node_modules/@amzn/katal-logger/node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function(StackFrame) {
    return {
        backtrace: function StackGenerator$$backtrace(opts) {
            var stack = [];
            var maxStackSize = 10;

            if (typeof opts === 'object' && typeof opts.maxStackSize === 'number') {
                maxStackSize = opts.maxStackSize;
            }

            var curr = arguments.callee;
            while (curr && stack.length < maxStackSize && curr['arguments']) {
                // Allow V8 optimizations
                var args = new Array(curr['arguments'].length);
                for (var i = 0; i < args.length; ++i) {
                    args[i] = curr['arguments'][i];
                }
                if (/function(?:\s+([\w$]+))+\s*\(/.test(curr.toString())) {
                    stack.push(new StackFrame({functionName: RegExp.$1 || undefined, args: args}));
                } else {
                    stack.push(new StackFrame({args: args}));
                }

                try {
                    curr = curr.caller;
                } catch (e) {
                    break;
                }
            }
            return stack;
        }
    };
}));


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/stackframe/stackframe.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/stackframe/stackframe.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function() {
    'use strict';
    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    function _getter(p) {
        return function() {
            return this[p];
        };
    }

    var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
    var numericProps = ['columnNumber', 'lineNumber'];
    var stringProps = ['fileName', 'functionName', 'source'];
    var arrayProps = ['args'];
    var objectProps = ['evalOrigin'];

    var props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);

    function StackFrame(obj) {
        if (!obj) return;
        for (var i = 0; i < props.length; i++) {
            if (obj[props[i]] !== undefined) {
                this['set' + _capitalize(props[i])](obj[props[i]]);
            }
        }
    }

    StackFrame.prototype = {
        getArgs: function() {
            return this.args;
        },
        setArgs: function(v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
            }
            this.args = v;
        },

        getEvalOrigin: function() {
            return this.evalOrigin;
        },
        setEvalOrigin: function(v) {
            if (v instanceof StackFrame) {
                this.evalOrigin = v;
            } else if (v instanceof Object) {
                this.evalOrigin = new StackFrame(v);
            } else {
                throw new TypeError('Eval Origin must be an Object or StackFrame');
            }
        },

        toString: function() {
            var fileName = this.getFileName() || '';
            var lineNumber = this.getLineNumber() || '';
            var columnNumber = this.getColumnNumber() || '';
            var functionName = this.getFunctionName() || '';
            if (this.getIsEval()) {
                if (fileName) {
                    return '[eval] (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
                }
                return '[eval]:' + lineNumber + ':' + columnNumber;
            }
            if (functionName) {
                return functionName + ' (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
            }
            return fileName + ':' + lineNumber + ':' + columnNumber;
        }
    };

    StackFrame.fromString = function StackFrame$$fromString(str) {
        var argsStartIndex = str.indexOf('(');
        var argsEndIndex = str.lastIndexOf(')');

        var functionName = str.substring(0, argsStartIndex);
        var args = str.substring(argsStartIndex + 1, argsEndIndex).split(',');
        var locationString = str.substring(argsEndIndex + 1);

        if (locationString.indexOf('@') === 0) {
            var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, '');
            var fileName = parts[1];
            var lineNumber = parts[2];
            var columnNumber = parts[3];
        }

        return new StackFrame({
            functionName: functionName,
            args: args || undefined,
            fileName: fileName,
            lineNumber: lineNumber || undefined,
            columnNumber: columnNumber || undefined
        });
    };

    for (var i = 0; i < booleanProps.length; i++) {
        StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
        StackFrame.prototype['set' + _capitalize(booleanProps[i])] = (function(p) {
            return function(v) {
                this[p] = Boolean(v);
            };
        })(booleanProps[i]);
    }

    for (var j = 0; j < numericProps.length; j++) {
        StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);
        StackFrame.prototype['set' + _capitalize(numericProps[j])] = (function(p) {
            return function(v) {
                if (!_isNumber(v)) {
                    throw new TypeError(p + ' must be a Number');
                }
                this[p] = Number(v);
            };
        })(numericProps[j]);
    }

    for (var k = 0; k < stringProps.length; k++) {
        StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);
        StackFrame.prototype['set' + _capitalize(stringProps[k])] = (function(p) {
            return function(v) {
                this[p] = String(v);
            };
        })(stringProps[k]);
    }

    return StackFrame;
}));


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/stacktrace-gps/stacktrace-gps.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/stacktrace-gps/stacktrace-gps.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! source-map */ "./node_modules/@amzn/katal-logger/node_modules/source-map/source-map.js"), __webpack_require__(/*! stackframe */ "./node_modules/@amzn/katal-logger/node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function(SourceMap, StackFrame) {
    'use strict';

    /**
     * Make a X-Domain request to url and callback.
     *
     * @param {String} url
     * @returns {Promise} with response text if fulfilled
     */
    function _xdr(url) {
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('get', url);
            req.onerror = reject;
            req.onreadystatechange = function onreadystatechange() {
                if (req.readyState === 4) {
                    if ((req.status >= 200 && req.status < 300) ||
                        (url.substr(0, 7) === 'file://' && req.responseText)) {
                        resolve(req.responseText);
                    } else {
                        reject(new Error('HTTP status: ' + req.status + ' retrieving ' + url));
                    }
                }
            };
            req.send();
        });

    }

    /**
     * Convert a Base64-encoded string into its original representation.
     * Used for inline sourcemaps.
     *
     * @param {String} b64str Base-64 encoded string
     * @returns {String} original representation of the base64-encoded string.
     */
    function _atob(b64str) {
        if (typeof window !== 'undefined' && window.atob) {
            return window.atob(b64str);
        } else {
            throw new Error('You must supply a polyfill for window.atob in this environment');
        }
    }

    function _parseJson(string) {
        if (typeof JSON !== 'undefined' && JSON.parse) {
            return JSON.parse(string);
        } else {
            throw new Error('You must supply a polyfill for JSON.parse in this environment');
        }
    }

    function _findFunctionName(source, lineNumber/*, columnNumber*/) {
        var syntaxes = [
            // {name} = function ({args}) TODO args capture
            /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/,
            // function {name}({args}) m[1]=name m[2]=args
            /function\s+([^('"`]*?)\s*\(([^)]*)\)/,
            // {name} = eval()
            /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/,
            // fn_name() {
            /\b(?!(?:if|for|switch|while|with|catch)\b)(?:(?:static)\s+)?(\S+)\s*\(.*?\)\s*\{/,
            // {name} = () => {
            /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*\(.*?\)\s*=>/
        ];
        var lines = source.split('\n');

        // Walk backwards in the source lines until we find the line which matches one of the patterns above
        var code = '';
        var maxLines = Math.min(lineNumber, 20);
        for (var i = 0; i < maxLines; ++i) {
            // lineNo is 1-based, source[] is 0-based
            var line = lines[lineNumber - i - 1];
            var commentPos = line.indexOf('//');
            if (commentPos >= 0) {
                line = line.substr(0, commentPos);
            }

            if (line) {
                code = line + code;
                var len = syntaxes.length;
                for (var index = 0; index < len; index++) {
                    var m = syntaxes[index].exec(code);
                    if (m && m[1]) {
                        return m[1];
                    }
                }
            }
        }
        return undefined;
    }

    function _ensureSupportedEnvironment() {
        if (typeof Object.defineProperty !== 'function' || typeof Object.create !== 'function') {
            throw new Error('Unable to consume source maps in older browsers');
        }
    }

    function _ensureStackFrameIsLegit(stackframe) {
        if (typeof stackframe !== 'object') {
            throw new TypeError('Given StackFrame is not an object');
        } else if (typeof stackframe.fileName !== 'string') {
            throw new TypeError('Given file name is not a String');
        } else if (typeof stackframe.lineNumber !== 'number' ||
            stackframe.lineNumber % 1 !== 0 ||
            stackframe.lineNumber < 1) {
            throw new TypeError('Given line number must be a positive integer');
        } else if (typeof stackframe.columnNumber !== 'number' ||
            stackframe.columnNumber % 1 !== 0 ||
            stackframe.columnNumber < 0) {
            throw new TypeError('Given column number must be a non-negative integer');
        }
        return true;
    }

    function _findSourceMappingURL(source) {
        var sourceMappingUrlRegExp = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/mg;
        var lastSourceMappingUrl;
        var matchSourceMappingUrl;
        // eslint-disable-next-line no-cond-assign
        while (matchSourceMappingUrl = sourceMappingUrlRegExp.exec(source)) {
            lastSourceMappingUrl = matchSourceMappingUrl[1];
        }
        if (lastSourceMappingUrl) {
            return lastSourceMappingUrl;
        } else {
            throw new Error('sourceMappingURL not found');
        }
    }

    function _extractLocationInfoFromSourceMapSource(stackframe, sourceMapConsumer, sourceCache) {
        return new Promise(function(resolve, reject) {
            var loc = sourceMapConsumer.originalPositionFor({
                line: stackframe.lineNumber,
                column: stackframe.columnNumber
            });

            if (loc.source) {
                // cache mapped sources
                var mappedSource = sourceMapConsumer.sourceContentFor(loc.source);
                if (mappedSource) {
                    sourceCache[loc.source] = mappedSource;
                }

                resolve(
                    // given stackframe and source location, update stackframe
                    new StackFrame({
                        functionName: loc.name || stackframe.functionName,
                        args: stackframe.args,
                        fileName: loc.source,
                        lineNumber: loc.line,
                        columnNumber: loc.column
                    }));
            } else {
                reject(new Error('Could not get original source for given stackframe and source map'));
            }
        });
    }

    /**
     * @constructor
     * @param {Object} opts
     *      opts.sourceCache = {url: "Source String"} => preload source cache
     *      opts.sourceMapConsumerCache = {/path/file.js.map: SourceMapConsumer}
     *      opts.offline = True to prevent network requests.
     *              Best effort without sources or source maps.
     *      opts.ajax = Promise returning function to make X-Domain requests
     */
    return function StackTraceGPS(opts) {
        if (!(this instanceof StackTraceGPS)) {
            return new StackTraceGPS(opts);
        }
        opts = opts || {};

        this.sourceCache = opts.sourceCache || {};
        this.sourceMapConsumerCache = opts.sourceMapConsumerCache || {};

        this.ajax = opts.ajax || _xdr;

        this._atob = opts.atob || _atob;

        this._get = function _get(location) {
            return new Promise(function(resolve, reject) {
                var isDataUrl = location.substr(0, 5) === 'data:';
                if (this.sourceCache[location]) {
                    resolve(this.sourceCache[location]);
                } else if (opts.offline && !isDataUrl) {
                    reject(new Error('Cannot make network requests in offline mode'));
                } else {
                    if (isDataUrl) {
                        // data URLs can have parameters.
                        // see http://tools.ietf.org/html/rfc2397
                        var supportedEncodingRegexp =
                            /^data:application\/json;([\w=:"-]+;)*base64,/;
                        var match = location.match(supportedEncodingRegexp);
                        if (match) {
                            var sourceMapStart = match[0].length;
                            var encodedSource = location.substr(sourceMapStart);
                            var source = this._atob(encodedSource);
                            this.sourceCache[location] = source;
                            resolve(source);
                        } else {
                            reject(new Error('The encoding of the inline sourcemap is not supported'));
                        }
                    } else {
                        var xhrPromise = this.ajax(location, {method: 'get'});
                        // Cache the Promise to prevent duplicate in-flight requests
                        this.sourceCache[location] = xhrPromise;
                        xhrPromise.then(resolve, reject);
                    }
                }
            }.bind(this));
        };

        /**
         * Creating SourceMapConsumers is expensive, so this wraps the creation of a
         * SourceMapConsumer in a per-instance cache.
         *
         * @param {String} sourceMappingURL = URL to fetch source map from
         * @param {String} defaultSourceRoot = Default source root for source map if undefined
         * @returns {Promise} that resolves a SourceMapConsumer
         */
        this._getSourceMapConsumer = function _getSourceMapConsumer(sourceMappingURL, defaultSourceRoot) {
            return new Promise(function(resolve) {
                if (this.sourceMapConsumerCache[sourceMappingURL]) {
                    resolve(this.sourceMapConsumerCache[sourceMappingURL]);
                } else {
                    var sourceMapConsumerPromise = new Promise(function(resolve, reject) {
                        return this._get(sourceMappingURL).then(function(sourceMapSource) {
                            if (typeof sourceMapSource === 'string') {
                                sourceMapSource = _parseJson(sourceMapSource.replace(/^\)\]\}'/, ''));
                            }
                            if (typeof sourceMapSource.sourceRoot === 'undefined') {
                                sourceMapSource.sourceRoot = defaultSourceRoot;
                            }

                            resolve(new SourceMap.SourceMapConsumer(sourceMapSource));
                        }, reject);
                    }.bind(this));
                    this.sourceMapConsumerCache[sourceMappingURL] = sourceMapConsumerPromise;
                    resolve(sourceMapConsumerPromise);
                }
            }.bind(this));
        };

        /**
         * Given a StackFrame, enhance function name and use source maps for a
         * better StackFrame.
         *
         * @param {StackFrame} stackframe object
         * @returns {Promise} that resolves with with source-mapped StackFrame
         */
        this.pinpoint = function StackTraceGPS$$pinpoint(stackframe) {
            return new Promise(function(resolve, reject) {
                this.getMappedLocation(stackframe).then(function(mappedStackFrame) {
                    function resolveMappedStackFrame() {
                        resolve(mappedStackFrame);
                    }

                    this.findFunctionName(mappedStackFrame)
                        .then(resolve, resolveMappedStackFrame)
                        // eslint-disable-next-line no-unexpected-multiline
                        ['catch'](resolveMappedStackFrame);
                }.bind(this), reject);
            }.bind(this));
        };

        /**
         * Given a StackFrame, guess function name from location information.
         *
         * @param {StackFrame} stackframe
         * @returns {Promise} that resolves with enhanced StackFrame.
         */
        this.findFunctionName = function StackTraceGPS$$findFunctionName(stackframe) {
            return new Promise(function(resolve, reject) {
                _ensureStackFrameIsLegit(stackframe);
                this._get(stackframe.fileName).then(function getSourceCallback(source) {
                    var lineNumber = stackframe.lineNumber;
                    var columnNumber = stackframe.columnNumber;
                    var guessedFunctionName = _findFunctionName(source, lineNumber, columnNumber);
                    // Only replace functionName if we found something
                    if (guessedFunctionName) {
                        resolve(new StackFrame({
                            functionName: guessedFunctionName,
                            args: stackframe.args,
                            fileName: stackframe.fileName,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        }));
                    } else {
                        resolve(stackframe);
                    }
                }, reject)['catch'](reject);
            }.bind(this));
        };

        /**
         * Given a StackFrame, seek source-mapped location and return new enhanced StackFrame.
         *
         * @param {StackFrame} stackframe
         * @returns {Promise} that resolves with enhanced StackFrame.
         */
        this.getMappedLocation = function StackTraceGPS$$getMappedLocation(stackframe) {
            return new Promise(function(resolve, reject) {
                _ensureSupportedEnvironment();
                _ensureStackFrameIsLegit(stackframe);

                var sourceCache = this.sourceCache;
                var fileName = stackframe.fileName;
                this._get(fileName).then(function(source) {
                    var sourceMappingURL = _findSourceMappingURL(source);
                    var isDataUrl = sourceMappingURL.substr(0, 5) === 'data:';
                    var defaultSourceRoot = fileName.substring(0, fileName.lastIndexOf('/') + 1);

                    if (sourceMappingURL[0] !== '/' && !isDataUrl && !(/^https?:\/\/|^\/\//i).test(sourceMappingURL)) {
                        sourceMappingURL = defaultSourceRoot + sourceMappingURL;
                    }

                    return this._getSourceMapConsumer(sourceMappingURL, defaultSourceRoot)
                        .then(function(sourceMapConsumer) {
                            return _extractLocationInfoFromSourceMapSource(stackframe, sourceMapConsumer, sourceCache)
                                .then(resolve)['catch'](function() {
                                    resolve(stackframe);
                                });
                        });
                }.bind(this), reject)['catch'](reject);
            }.bind(this));
        };
    };
}));


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/stacktrace-js/stacktrace.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/stacktrace-js/stacktrace.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! error-stack-parser */ "./node_modules/@amzn/katal-logger/node_modules/error-stack-parser/error-stack-parser.js"), __webpack_require__(/*! stack-generator */ "./node_modules/@amzn/katal-logger/node_modules/stack-generator/stack-generator.js"), __webpack_require__(/*! stacktrace-gps */ "./node_modules/@amzn/katal-logger/node_modules/stacktrace-gps/stacktrace-gps.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function StackTrace(ErrorStackParser, StackGenerator, StackTraceGPS) {
    var _options = {
        filter: function(stackframe) {
            // Filter out stackframes for this library by default
            return (stackframe.functionName || '').indexOf('StackTrace$$') === -1 &&
                (stackframe.functionName || '').indexOf('ErrorStackParser$$') === -1 &&
                (stackframe.functionName || '').indexOf('StackTraceGPS$$') === -1 &&
                (stackframe.functionName || '').indexOf('StackGenerator$$') === -1;
        },
        sourceCache: {}
    };

    var _generateError = function StackTrace$$GenerateError() {
        try {
            // Error must be thrown to get stack in IE
            throw new Error();
        } catch (err) {
            return err;
        }
    };

    /**
     * Merge 2 given Objects. If a conflict occurs the second object wins.
     * Does not do deep merges.
     *
     * @param {Object} first base object
     * @param {Object} second overrides
     * @returns {Object} merged first and second
     * @private
     */
    function _merge(first, second) {
        var target = {};

        [first, second].forEach(function(obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    target[prop] = obj[prop];
                }
            }
            return target;
        });

        return target;
    }

    function _isShapedLikeParsableError(err) {
        return err.stack || err['opera#sourceloc'];
    }

    function _filtered(stackframes, filter) {
        if (typeof filter === 'function') {
            return stackframes.filter(filter);
        }
        return stackframes;
    }

    return {
        /**
         * Get a backtrace from invocation point.
         *
         * @param {Object} opts
         * @returns {Array} of StackFrame
         */
        get: function StackTrace$$get(opts) {
            var err = _generateError();
            return _isShapedLikeParsableError(err) ? this.fromError(err, opts) : this.generateArtificially(opts);
        },

        /**
         * Get a backtrace from invocation point.
         * IMPORTANT: Does not handle source maps or guess function names!
         *
         * @param {Object} opts
         * @returns {Array} of StackFrame
         */
        getSync: function StackTrace$$getSync(opts) {
            opts = _merge(_options, opts);
            var err = _generateError();
            var stack = _isShapedLikeParsableError(err) ? ErrorStackParser.parse(err) : StackGenerator.backtrace(opts);
            return _filtered(stack, opts.filter);
        },

        /**
         * Given an error object, parse it.
         *
         * @param {Error} error object
         * @param {Object} opts
         * @returns {Promise} for Array[StackFrame}
         */
        fromError: function StackTrace$$fromError(error, opts) {
            opts = _merge(_options, opts);
            var gps = new StackTraceGPS(opts);
            return new Promise(function(resolve) {
                var stackframes = _filtered(ErrorStackParser.parse(error), opts.filter);
                resolve(Promise.all(stackframes.map(function(sf) {
                    return new Promise(function(resolve) {
                        function resolveOriginal() {
                            resolve(sf);
                        }

                        gps.pinpoint(sf).then(resolve, resolveOriginal)['catch'](resolveOriginal);
                    });
                })));
            }.bind(this));
        },

        /**
         * Use StackGenerator to generate a backtrace.
         *
         * @param {Object} opts
         * @returns {Promise} of Array[StackFrame]
         */
        generateArtificially: function StackTrace$$generateArtificially(opts) {
            opts = _merge(_options, opts);
            var stackFrames = StackGenerator.backtrace(opts);
            if (typeof opts.filter === 'function') {
                stackFrames = stackFrames.filter(opts.filter);
            }
            return Promise.resolve(stackFrames);
        },

        /**
         * Given a function, wrap it such that invocations trigger a callback that
         * is called with a stack trace.
         *
         * @param {Function} fn to be instrumented
         * @param {Function} callback function to call with a stack trace on invocation
         * @param {Function} errback optional function to call with error if unable to get stack trace.
         * @param {Object} thisArg optional context object (e.g. window)
         */
        instrument: function StackTrace$$instrument(fn, callback, errback, thisArg) {
            if (typeof fn !== 'function') {
                throw new Error('Cannot instrument non-function object');
            } else if (typeof fn.__stacktraceOriginalFn === 'function') {
                // Already instrumented, return given Function
                return fn;
            }

            var instrumented = function StackTrace$$instrumented() {
                try {
                    this.get().then(callback, errback)['catch'](errback);
                    return fn.apply(thisArg || this, arguments);
                } catch (e) {
                    if (_isShapedLikeParsableError(e)) {
                        this.fromError(e).then(callback, errback)['catch'](errback);
                    }
                    throw e;
                }
            }.bind(this);
            instrumented.__stacktraceOriginalFn = fn;

            return instrumented;
        },

        /**
         * Given a function that has been instrumented,
         * revert the function to it's original (non-instrumented) state.
         *
         * @param {Function} fn to de-instrument
         */
        deinstrument: function StackTrace$$deinstrument(fn) {
            if (typeof fn !== 'function') {
                throw new Error('Cannot de-instrument non-function object');
            } else if (typeof fn.__stacktraceOriginalFn === 'function') {
                return fn.__stacktraceOriginalFn;
            } else {
                // Function not instrumented, return original
                return fn;
            }
        },

        /**
         * Given an error message and Array of StackFrames, serialize and POST to given URL.
         *
         * @param {Array} stackframes
         * @param {String} url
         * @param {String} errorMsg
         * @param {Object} requestOptions
         */
        report: function StackTrace$$report(stackframes, url, errorMsg, requestOptions) {
            return new Promise(function(resolve, reject) {
                var req = new XMLHttpRequest();
                req.onerror = reject;
                req.onreadystatechange = function onreadystatechange() {
                    if (req.readyState === 4) {
                        if (req.status >= 200 && req.status < 400) {
                            resolve(req.responseText);
                        } else {
                            reject(new Error('POST to ' + url + ' failed with status: ' + req.status));
                        }
                    }
                };
                req.open('post', url);

                // Set request headers
                req.setRequestHeader('Content-Type', 'application/json');
                if (requestOptions && typeof requestOptions.headers === 'object') {
                    var headers = requestOptions.headers;
                    for (var header in headers) {
                        if (Object.prototype.hasOwnProperty.call(headers, header)) {
                            req.setRequestHeader(header, headers[header]);
                        }
                    }
                }

                var reportPayload = {stack: stackframes};
                if (errorMsg !== undefined && errorMsg !== null) {
                    reportPayload.message = errorMsg;
                }

                req.send(JSON.stringify(reportPayload));
            });
        }
    };
}));


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/uuid/lib/bytesToUuid.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/uuid/lib/bytesToUuid.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/uuid/lib/rng-browser.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/uuid/lib/rng-browser.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/@amzn/katal-logger/node_modules/uuid/v4.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@amzn/katal-logger/node_modules/uuid/v4.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/@amzn/katal-logger/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/@amzn/katal-logger/node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/@amzn/katal-metrics-driver-sushi/dist/KatalMetricsDriverSushi.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics-driver-sushi/dist/KatalMetricsDriverSushi.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KatalMetricsDriverSushi = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricsDriver2 = _interopRequireDefault(__webpack_require__(/*! @amzn/katal-metrics/lib/driver/KatalMetricsDriver */ "./node_modules/@amzn/katal-metrics/lib/driver/KatalMetricsDriver.js"));

var _KatalMetricType = _interopRequireDefault(__webpack_require__(/*! @amzn/katal-metrics/lib/metricObject/KatalMetricType */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricType.js"));

var _katalSushiClient = _interopRequireDefault(__webpack_require__(/*! @amzn/katal-sushi-client */ "./node_modules/@amzn/katal-sushi-client/dist/SushiClient.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var KAT_STANDALONE_NEXUS_PRODUCER_ID = 'katal';
var KAT_STANDALONE_DEFAULT_SOURCE_GROUPS = {
  test: 'com.amazon.eel.katal.metrics.core.nexus.gamma',
  prod: 'com.amazon.eel.katal.metrics.core.nexus'
};

var KatalMetricsDriverSushiBuilder = /*#__PURE__*/function () {
  function KatalMetricsDriverSushiBuilder() {
    (0, _classCallCheck2.default)(this, KatalMetricsDriverSushiBuilder);
    (0, _defineProperty2.default)(this, "context", {});
  }

  (0, _createClass2.default)(KatalMetricsDriverSushiBuilder, [{
    key: "withSushiClient",
    value: function withSushiClient(sushiClient) {
      console.log('withSushi client...');
      this.context.sushiClient = sushiClient;
      return this;
    }
  }, {
    key: "withDomainRealm",
    value: function withDomainRealm(domain, realm) {
      this.context.domain = domain;
      this.context.realm = realm;
      return this;
    }
  }, {
    key: "withCustomProducer",
    value: function withCustomProducer(sushiProducerId) {
      this.context.sushiProducer = sushiProducerId;
      return this;
    }
  }, {
    key: "withCustomSourceGroup",
    value: function withCustomSourceGroup(sourceGroupId) {
      this.context.sourceGroupId = sourceGroupId;
      return this;
    }
  }, {
    key: "withErrorHandler",
    value: function withErrorHandler(errorHandler) {
      this.context.errorHandler = errorHandler;
      return this;
    }
  }, {
    key: "withSushiClientOptions",
    value: function withSushiClientOptions(sushiClientOptions) {
      this.context.sushiClientOptions = sushiClientOptions;
      return this;
    }
  }, {
    key: "withSushiClientTransportOverride",
    value: function withSushiClientTransportOverride(sushiClientTransportOverride) {
      this.context.sushiClientTransportOverride = sushiClientTransportOverride;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      return new KatalMetricsDriverSushi(this.context);
    }
  }]);
  return KatalMetricsDriverSushiBuilder;
}();

var KatalMetricsDriverSushi = /*#__PURE__*/function (_KatalMetricsDriver) {
  (0, _inherits2.default)(KatalMetricsDriverSushi, _KatalMetricsDriver);

  var _super = _createSuper(KatalMetricsDriverSushi);

  function KatalMetricsDriverSushi(options) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricsDriverSushi);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sushi", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "producerId", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sourceGroupId", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "errorHandler", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "combinedErrorHandler", function (err) {
      if (_this.errorHandler) {
        try {
          _this.errorHandler(err); // Return to avoid falling through to default error handler


          return;
        } catch (nextErr) {
          console.error("Error handling error publishing metrics:");
          console.error(nextErr); // Fall through
        }
      }

      _this.defaultErrorHandler(err);
    });
    var domain = options.domain,
        realm = options.realm,
        errorHandler = options.errorHandler,
        sushiClient = options.sushiClient,
        _options$sushiProduce = options.sushiProducer,
        producerId = _options$sushiProduce === void 0 ? KAT_STANDALONE_NEXUS_PRODUCER_ID : _options$sushiProduce,
        sushiClientOptions = options.sushiClientOptions,
        sushiClientTransportOverride = options.sushiClientTransportOverride; // custom source group always overrides defaults

    var sourceGroupId = options.sourceGroupId || KAT_STANDALONE_DEFAULT_SOURCE_GROUPS[domain] || KAT_STANDALONE_DEFAULT_SOURCE_GROUPS['test'];
    _this.sushi = sushiClient || _this.buildSushiClient(domain, realm, sourceGroupId, sushiClientOptions, sushiClientTransportOverride);
    _this.errorHandler = errorHandler;
    _this.producerId = producerId;
    _this.sourceGroupId = sourceGroupId;
    return _this;
  }

  (0, _createClass2.default)(KatalMetricsDriverSushi, [{
    key: "beforeUnload",
    value:
    /**
     * Register a callback to be called right before the page unloads. This
     * allows for any final metrics, such as page visit duration, to be sent
     * before the user navigates away from the page or closes the tab.
     * NOTE: This is an experimental API and may change in the future.
     * @param cb The callback to call.
     */
    function beforeUnload(cb) {
      this.sushi.onSushiUnload(cb);
    }
    /**
     * Default error handler if the user-supplied error handler fails or is unset.  Should never be called unless
     * user-provided error handler misbehaves.
     *
     * @param err Unhandled error object
     */

  }, {
    key: "defaultErrorHandler",
    value: function defaultErrorHandler(err) {
      console.error("Error publishing metrics:");
      console.error(err);
    }
    /**
     * Call the error-handler supplied by the user when this object was constructed; if that is unset or itself throws
     * an exception, calls the default error handler as a fallback, which will just log the error to the console.
     *
     * @param err Error object to handle
     */

  }, {
    key: "withErrorHandling",
    value:
    /**
     * Helper method to wrap a function in the error handler.
     *
     * @param doTheThing Function to run under the wrapper
     * @return Return value from called function
     */
    function withErrorHandling(doTheThing) {
      try {
        return doTheThing();
      } catch (err) {
        this.combinedErrorHandler(err);
      }
    }
  }, {
    key: "buildSushiClient",
    value: function buildSushiClient(domain, realm, sourceGroupId, sushiClientOptions, sushiClientTransportOverride) {
      if (!domain || !realm) {
        throw new Error('KatalMetricsDriverSushi requires a domain and realm to build a sushi client.');
      }

      return new _katalSushiClient.default(KatalMetricsDriverSushi.getRealmName(realm), sourceGroupId, this.combinedErrorHandler, sushiClientOptions, sushiClientTransportOverride);
    }
  }, {
    key: "publish",
    value: // TODO: errorHandler in this method is deprecated and is not referenced.
    // Tech debt: https://issues.amazon.com/issues/KAT-875
    function publish(metricObject, errorHandler, context) {
      var _this2 = this;

      // Support for new 2-argument form of publish, which does not pass the unused errorHandler object (KAT-875)
      var metricsContext = arguments.length < 3 ? arguments[1] : arguments[2];
      this.withErrorHandling(function () {
        // TODO: This logic is now moved into KatalMetricsPublisher, once everybody has that update we can remove this.
        // Tech debt: https://issues.amazon.com/issues/KAT-876
        if (_KatalMetricType.default.List === metricObject.type) {
          metricObject.metricList.forEach(function (metric) {
            _this2.publish(metric, metricsContext);
          });
          return;
        }

        var nexusSchema = _this2.mapObjectTypeToNexusSchema(metricObject.type);

        var fields = _objectSpread(_objectSpread({}, metricsContext.context), {}, {
          metricKey: metricObject.name,
          value: metricObject.value
        });

        if (metricObject.isMonitor) {
          fields.isMonitor = true;
        } // Deleting cloudWatchDimensions field if exists as it applies only for KatalMonitoringAWSDriver.


        if (fields.cloudWatchDimensions) {
          delete fields.cloudWatchDimensions;
        } // Reset the event count back to 0, otherwise Sushi will stop publishing after 1K items (https://issues.amazon.com/issues/KAT-1534)


        _this2.sushi.reset();

        _this2.sushi.event(fields, _this2.producerId, nexusSchema, {
          "ssd": 1
        });
      });
    }
  }, {
    key: "mapObjectTypeToNexusSchema",
    value: function mapObjectTypeToNexusSchema(objectType) {
      switch (objectType) {
        case _KatalMetricType.default.String:
          return 'katal.client.metrics.String.2';

        case _KatalMetricType.default.Counter:
          return 'katal.client.metrics.Counter.3';

        case _KatalMetricType.default.Timer:
          return 'katal.client.metrics.Timer.2';

        default:
          throw new Error("Unknown type ".concat(objectType, " when publishing metric object."));
      }
    }
  }], [{
    key: "getRealmName",
    value: function getRealmName(realm) {
      switch (realm) {
        case 'NAAmazon':
        case 'USAmazon':
          return _katalSushiClient.default.REGIONS.NA;

        case 'EUAmazon':
          return _katalSushiClient.default.REGIONS.EU;

        case 'FEAmazon':
        case 'JPAmazon':
          return _katalSushiClient.default.REGIONS.FE;

        case 'CNAmazon':
          return _katalSushiClient.default.REGIONS.CN;

        default:
          // Let the SushiClient decide if this is bogus or not.
          return realm;
      }
    }
  }]);
  return KatalMetricsDriverSushi;
}(_KatalMetricsDriver2.default);

exports.KatalMetricsDriverSushi = KatalMetricsDriverSushi;
(0, _defineProperty2.default)(KatalMetricsDriverSushi, "Builder", KatalMetricsDriverSushiBuilder);

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics-driver-sushi/dist/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics-driver-sushi/dist/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./nodejsShims */ 1);

var _KatalMetricsDriverSushi = __webpack_require__(/*! ./KatalMetricsDriverSushi */ "./node_modules/@amzn/katal-metrics-driver-sushi/dist/KatalMetricsDriverSushi.js");

/* istanbul ignore file */
var _default = _KatalMetricsDriverSushi.KatalMetricsDriverSushi;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/KatalMetricsContext.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/KatalMetricsContext.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _ValidateSimpleString = _interopRequireDefault(__webpack_require__(/*! ./helper/ValidateSimpleString */ "./node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleString.js"));

var _validateCloudWatchDimensions = _interopRequireDefault(__webpack_require__(/*! ./helper/validateCloudWatchDimensions */ "./node_modules/@amzn/katal-metrics/lib/helper/validateCloudWatchDimensions.js"));

var _FirstMap = _interopRequireDefault(__webpack_require__(/*! ./helper/FirstMap */ "./node_modules/@amzn/katal-metrics/lib/helper/FirstMap.js"));

var _mergeLists = __webpack_require__(/*! ./helper/mergeLists */ "./node_modules/@amzn/katal-metrics/lib/helper/mergeLists.js");

var _embedRequestId = __webpack_require__(/*! ./helper/embedRequestId */ "./node_modules/@amzn/katal-metrics/lib/helper/embedRequestId.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var REQUIRED_FIELDS = ['site', 'serviceName', 'methodName'];

var KatalMetricsContext = /*#__PURE__*/function () {
  /**
   * Create a new metrics context with the given fields.
   *
   * @param contextFields Context fields value (default empty)
   */
  function KatalMetricsContext() {
    var contextFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, KatalMetricsContext);
    // Copy fields so this is immutable
    this.context = _objectSpread({}, contextFields);
  }
  /**
   * Return a new KatalMetricsContext which is a copy of this context, with values added or overridden from
   * the given context.
   *
   * If the given context is null or empty, this method may return the original object as an optimization.
   *
   * @param thatContext Context to merge values from
   * @return New context with default values from this context, and values overridden or added by the given context.
   */


  (0, _createClass2.default)(KatalMetricsContext, [{
    key: "merge",
    value: function merge(thatContext) {
      if (!thatContext) return this; // Check for a common error

      if (thatContext instanceof KatalMetricsContext.Builder) {
        throw new Error("KatalMetricsContext.Builder object passed instead of KatalMetricsContext.  Try calling .build() method.");
      }

      var context = thatContext instanceof KatalMetricsContext ? thatContext.context : thatContext;

      var newContext = _objectSpread(_objectSpread(_objectSpread({}, this.context), context), {}, {
        relatedMetrics: (0, _mergeLists.mergeLists)(this.context.relatedMetrics, context.relatedMetrics),
        relatedMetricsSingleAction: (0, _mergeLists.mergeLists)(this.context.relatedMetricsSingleAction, context.relatedMetricsSingleAction),
        // Combines the dimensions from base publisher with any child publisher.
        cloudWatchDimensions: (0, _mergeLists.mergeLists)(this.context.cloudWatchDimensions, context.cloudWatchDimensions)
      });

      return new KatalMetricsContext(newContext);
    }
    /**
     * Return a new context which is a copy of this context with relatedMetricsSingleAction removed.
     *
     * This is intended to be called when creating a new child publisher.
     *
     * @return Copy of this context, with relatedMetricsSingleAction removed
     */

  }, {
    key: "withoutRelatedMetricsSingleAction",
    value: function withoutRelatedMetricsSingleAction() {
      return new KatalMetricsContext(_objectSpread(_objectSpread({}, this.context), {}, {
        relatedMetricsSingleAction: undefined
      }));
    }
    /**
     * Get a context suitable for publication to the driver.
     *
     * This method strips out any private fields, and leaves only fields from the schema that the driver should publish.
     *
     * @return Context suitable for driver publication
     */

  }, {
    key: "driverContext",
    value: function driverContext() {
      // Don't publish relatedMetrics to the driver
      var newContextFields = _objectSpread({}, this.context);

      delete newContextFields["relatedMetrics"];
      delete newContextFields["relatedMetricsSingleAction"];
      delete newContextFields["requestId"];

      if (this.context.requestId) {
        newContextFields.actionId = (0, _embedRequestId.embedRequestId)(newContextFields.actionId, this.context.requestId);
      }

      return new KatalMetricsContext(newContextFields);
    }
    /**
     * Get a simple JavaScript object with a copy of the fields for this context.
     *
     * @return Simple Javascript object with a copy of the fields for this context
     */

  }, {
    key: "getFields",
    value: function getFields() {
      // Copy fields so this remains immutable
      return _objectSpread({}, this.context);
    }
    /**
     * Check for a validation error on this context.
     *
     * Returns the first validation error encountered if one is found, otherwise undefined.
     *
     * @returns Errors found with this context
     */

  }, {
    key: "validationError",
    value: function validationError() {
      var _this = this;

      var err; // Fields “site”, “serviceName”, “methodName”, and “metricKey” are required.

      err = (0, _FirstMap.default)(REQUIRED_FIELDS, function (field) {
        if (_this.context[field] == undefined) {
          return new Error("Field ".concat(field, " is required, but it is ").concat(_this.context[field]));
        }
      });
      if (err) return err;
      return (0, _FirstMap.default)(Object.keys(this.context), function (field) {
        return _this.validateField(field);
      });
    }
    /**
     * Validate an individual context field.
     *
     * @param field Name of field to validate
     * @returns Error found with this field, or undefined
     */

  }, {
    key: "validateField",
    value: function validateField(field) {
      var val = this.context[field];
      var nameForError = "field ".concat(field);

      switch (field) {
        // Strings which could be used as partition keys ("site" and "serviceName") cannot contain slashes, in
        // addition to the other restictions below.
        case 'site':
        case 'serviceName':
          if (val.indexOf('/') > -1) return new Error("Expected ".concat(nameForError, " to contain only valid characters, but it was ").concat(val, ".  It cannot contain a slash."));
        // Else fall through
        // Strings for fields “site”, “serviceName”, “methodName”, “metricKey” must match be valid PMET field names:
        // maximum length of 256, only letters, numbers, and the dot, colon, at-sign, underscore, forward-slash,
        // and slash characters (in short the regex ^[A-Za-z0-9.:@_/-]+$).

        case 'methodName':
        case 'actionId':
          return (0, _ValidateSimpleString.default)(val, nameForError);

        case 'cloudWatchDimensions':
          return (0, _validateCloudWatchDimensions.default)(val || []);
      } // No error found, implicitly return undefined

    }
    /**
     * Builder class for KatalMetricsContext
     */

  }]);
  return KatalMetricsContext;
}();

exports.default = KatalMetricsContext;
(0, _defineProperty2.default)(KatalMetricsContext, "Builder", /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    (0, _defineProperty2.default)(this, "context", {});
  }

  (0, _createClass2.default)(_class2, [{
    key: "withSite",
    value: function withSite(site) {
      this.context.site = site;
      return this;
    }
  }, {
    key: "withServiceName",
    value: function withServiceName(serviceName) {
      this.context.serviceName = serviceName;
      return this;
    }
  }, {
    key: "withMethodName",
    value: function withMethodName(methodName) {
      this.context.methodName = methodName;
      return this;
    }
  }, {
    key: "withActionId",
    value: function withActionId(actionId) {
      this.context.actionId = actionId;
      return this;
    }
  }, {
    key: "withRequestId",
    value: function withRequestId(requestId) {
      this.context.requestId = requestId;
      return this;
    }
  }, {
    key: "withCloudWatchDimensions",
    value: function withCloudWatchDimensions(dimensions) {
      this.context.cloudWatchDimensions = dimensions;
      return this;
    }
    /**
     * Replace any related metrics with the given list (see addRelatedMetrics to add instead of replace).
     *
     * Related metrics are metrics that are published whenever a new action is started.  They are used to relate the
     * action back to the context where it is happening, for example a request ID or a user identity.
     *
     * @param relatedMetrics Related metrics to publish when a new action is started for this context
     * @returns This builder object to continue building
     */

  }, {
    key: "withRelatedMetrics",
    value: function withRelatedMetrics() {
      for (var _len = arguments.length, relatedMetrics = new Array(_len), _key = 0; _key < _len; _key++) {
        relatedMetrics[_key] = arguments[_key];
      }

      this.context.relatedMetrics = relatedMetrics;
      return this;
    }
    /**
     * Add additional related metrics to this builder.  See withRelatedMetrics for more information.
     *
     * @param relatedMetrics Additional related metrics to publish when a new action is started for this context
     * @returns This builder object to continue building
     */

  }, {
    key: "addRelatedMetrics",
    value: function addRelatedMetrics() {
      for (var _len2 = arguments.length, relatedMetrics = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        relatedMetrics[_key2] = arguments[_key2];
      }

      this.context.relatedMetrics = (0, _mergeLists.mergeLists)(this.context.relatedMetrics, relatedMetrics);
      return this;
    }
    /**
     * Replace single-action related metrics with the given list (see addRelatedMetricsSingleAction to add instead of replace,
     * and withRelatedMetrics for more information about related metrics).
     *
     * Single-action related metrics are published when a new child metric publisher is created, but not included as
     * related metrics for the new child metric publisher, so are not published again if the child metric publisher
     * creates grandchild published metrics.
     *
     * @param metrics Related metrics
     * @returns This builder object to continue building
     */

  }, {
    key: "withRelatedMetricsSingleAction",
    value: function withRelatedMetricsSingleAction() {
      for (var _len3 = arguments.length, metrics = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        metrics[_key3] = arguments[_key3];
      }

      this.context.relatedMetricsSingleAction = metrics;
      return this;
    }
    /**
     * Add additional single-action related metrics to this builder.  See addRelatedMetricsSingleAction for more information.
     *
     * @param metrics Related metrics
     * @returns This builder object to continue building
     */

  }, {
    key: "addRelatedMetricsSingleAction",
    value: function addRelatedMetricsSingleAction() {
      for (var _len4 = arguments.length, metrics = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        metrics[_key4] = arguments[_key4];
      }

      this.context.relatedMetricsSingleAction = (0, _mergeLists.mergeLists)(this.context.relatedMetricsSingleAction, metrics);
      return this;
    }
    /**
     * Take the fields set in this builder and use them to create a new KatalMetricsContext.
     *
     * @return KatalMetricsContext object built with the parameters given to this builder
     */

  }, {
    key: "build",
    value: function build() {
      return new KatalMetricsContext(this.context);
    }
  }]);
  return _class2;
}());

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/KatalMetricsPublisher.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/KatalMetricsPublisher.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js"));

var _KatalMetricsContext = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricsContext */ "./node_modules/@amzn/katal-metrics/lib/KatalMetricsContext.js"));

var _metricObject = __webpack_require__(/*! ./metricObject */ "./node_modules/@amzn/katal-metrics/lib/metricObject/index.js");

var _mergeLists = __webpack_require__(/*! ./helper/mergeLists */ "./node_modules/@amzn/katal-metrics/lib/helper/mergeLists.js");

var _metricsExtension = __webpack_require__(/*! ./helper/metricsExtension */ "./node_modules/@amzn/katal-metrics/lib/helper/metricsExtension.js");

var _embedRequestId = __webpack_require__(/*! ./helper/embedRequestId */ "./node_modules/@amzn/katal-metrics/lib/helper/embedRequestId.js");

var INITIALIZATION_METHOD_NAME = 'Initialization';

/**
 * Default error handler if the user-supplied error handler fails or is unset.
 * Should never be called unless user-provided error handler misbehaves.
 */
var DEFAULT_ERROR_HANDLER = function DEFAULT_ERROR_HANDLER(err) {
  console.error("Error publishing metrics:");
  console.error(err);
};

var PARENT_ACTION_ID_NAME = 'parentActionId';

var getContextFields = function getContextFields(context) {
  if (context.context) {
    return context.context;
  } else {
    return context;
  }
};
/**
 * Class used for publishing metrics to Katal.  Contains a driver and a context.
 *
 * This class knows how to publish metrics, and how to create new publishers with a modified context.
 */


var KatalMetricsPublisher = /*#__PURE__*/function () {
  /**
   * Create a new metrics publisher with the given driver and context
   *
   * @param driver Subclass of KatalMetricsDriver used to publish the metrics
   * @param errorHandler Handler for errors that occur while using this publisher
   * @param context Context for this metrics publisher; contains data to be included with every
   *     metric published using this publisher object.  Default is an empty context.
   */
  function KatalMetricsPublisher(driver) {
    var _this = this;

    var errorHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ERROR_HANDLER;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _KatalMetricsContext.default();
    (0, _classCallCheck2.default)(this, KatalMetricsPublisher);
    (0, _defineProperty2.default)(this, "combinedErrorHandler", function (err) {
      try {
        _this.errorHandler(err);
      } catch (nextErr) {
        console.error("Error handling error publishing metrics:");
        console.error(nextErr);
        DEFAULT_ERROR_HANDLER(err);
      }
    });

    // Check for a common error
    if (context instanceof _KatalMetricsContext.default.Builder) {
      throw new Error("KatalMetricsContext.Builder object passed instead of KatalMetricsContext.  Try calling .build() method.");
    }

    this.driver = driver;
    this.errorHandler = errorHandler;
    this.context = !(context instanceof _KatalMetricsContext.default) ? new _KatalMetricsContext.default(context) : context;
  }
  /**
   * Call the error-handler supplied by the user when this object was constructed; if that is unset or itself throws
   * an exception, calls the default error handler as a fallback, which will just log the error to the console.
   *
   * @param err Error object to handle
   */


  (0, _createClass2.default)(KatalMetricsPublisher, [{
    key: "withErrorHandling",
    value:
    /**
     * Helper method to wrap a function in the error handler.
     *
     * @param doTheThing Function to run under the wrapper
     * @return Return value from called function
     */
    function withErrorHandling(doTheThing) {
      try {
        return doTheThing();
      } catch (err) {
        this.combinedErrorHandler(err);
      }
    }
    /**
     * Helper method to return all the related metrics of base publisher and additionalContext.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @return Return all related metrics from base publisher and additionalContext.
     */

  }, {
    key: "getAdditionalRelatedMetrics",
    value: function getAdditionalRelatedMetrics(additionalContext) {
      var newContext = additionalContext instanceof _KatalMetricsContext.default ? additionalContext.context : additionalContext;
      var baseRelatedMetrics = this.getBaseRelatedMetrics();
      return (0, _mergeLists.mergeLists)(baseRelatedMetrics, newContext.relatedMetrics);
    }
    /**
     * Helper method to return all the related metrics of base publisher.
     *
     * @return Return all related metrics from the base publisher.
     */

  }, {
    key: "getBaseRelatedMetrics",
    value: function getBaseRelatedMetrics() {
      return (0, _mergeLists.mergeLists)(this.context.context.relatedMetrics, this.context.context.relatedMetricsSingleAction);
    }
    /**
     * Publish the given metric object.
     *
     * This method is guaranteed never to throw an exception.  If the metric object or context are invalid,
     * or any other exception is thrown while publishing, the publisher's error handler is called.  If the
     * publisher's error handler is unset or fails, the default error handler is called (see defaultErrorHandler).
     *
     * @param katalMetricObject Metric object to publish
     */

  }, {
    key: "publish",
    value: function publish(katalMetricObject) {
      var _this2 = this;

      this.withErrorHandling(function () {
        if (!katalMetricObject) {
          throw new Error("Cannot publish undefined/null metric object");
        }

        if (_metricObject.Object.Types.List === katalMetricObject.type) {
          katalMetricObject.metricList.forEach(function (metric) {
            _this2.publish(metric);
          });
        } else {
          var driverContext = _this2.context.driverContext();

          var contextError = driverContext.validationError();
          if (contextError) throw contextError;
          var objectError = katalMetricObject.validationError();
          if (objectError) throw objectError;
          (0, _metricsExtension.dispatchMetricEvent)(katalMetricObject, driverContext);

          _this2.driver.publish(katalMetricObject, driverContext);
        }
      });
    }
    /**
     * Create a new publisher which is identical to this publisher, but with the given context fields merged into
     * the new publisher's context.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildPublisher",
    value: function newChildPublisher(additionalContext) {
      return new KatalMetricsPublisher(this.driver, this.errorHandler, this.context.merge(additionalContext));
    }
    /**
     * Begin a new action, and return a new publisher for metrics related to that action.
     *
     * Beginning a new action involves the following steps:
     *   1. Generate a new actionId for the action, randomly in the browser
     *   2. If there are any related metrics in the context, publish them
     *   3. Create and return a new publisher with this object's context, merged with any additional context given,
     *      merged with the actionId generated above.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisher",
    value: function newChildActionPublisher(additionalContext) {
      var actionId = this._generateActionid(additionalContext);

      var newContext = this.context.withoutRelatedMetricsSingleAction().merge({
        actionId: actionId
      }).merge(additionalContext);
      var newPublisher = new KatalMetricsPublisher(this.driver, this.errorHandler, newContext);
      var allRelatedMetrics = additionalContext && !(additionalContext instanceof _KatalMetricsContext.default.Builder) ? this.getAdditionalRelatedMetrics(additionalContext) : this.getBaseRelatedMetrics();

      if (allRelatedMetrics) {
        allRelatedMetrics.forEach(function (metric) {
          newPublisher.publish(metric);
        });
      }

      return newPublisher;
    }
    /**
     * Begin a new chained child action, and return a new publisher for metrics related to that action.
     *
     * A chained action is handled the same way as in newChildActionPublisher, but additionally,
     * the returned publisher has a relatedMetricNoInherit named "parentActionId", with the newly
     * generated actionId as its value.
     *
     * The effect of this is that any further chained child actions can be connected back to this
     * action through the parentActionId, and so on recursively.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisherChained",
    value: function newChildActionPublisherChained(additionalContext) {
      var actionId = this._generateActionid(additionalContext);

      var parentActionId = (0, _embedRequestId.embedRequestId)(actionId, this.context.context.requestId);
      var relatedMetricsSingleAction = [new _metricObject.String(PARENT_ACTION_ID_NAME, parentActionId)];
      var newContext = new _KatalMetricsContext.default({
        actionId: actionId,
        relatedMetricsSingleAction: relatedMetricsSingleAction
      }).merge(additionalContext);
      return this.newChildActionPublisher(newContext);
    }
    /**
     * Helper method to create a new chained child action publisher with the given value for methodName.
     *
     * Apart from setting the methodName in the child context, this method is identical to newChildActionPublisherChained.
     *
     * @param methodName Method name for new publisher context
     * @param additionalContext Additional context to supply (optional)
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisherChainedForMethod",
    value: function newChildActionPublisherChainedForMethod(methodName, additionalContext) {
      return this.newChildActionPublisherChained(new _KatalMetricsContext.default({
        methodName: methodName
      }).merge(additionalContext));
    }
    /**
     * Helper method to create a new action publisher with the given value for methodName.
     *
     * Apart from setting the methodName in the child context, this method is identical to newChildActionPublisherForMethod.
     * @param methodName Method name for new publisher context
     * @param additionalContext Additional context to supply (optional)
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisherForMethod",
    value: function newChildActionPublisherForMethod(methodName, additionalContext) {
      return this.newChildActionPublisher(new _KatalMetricsContext.default({
        methodName: methodName
      }).merge(additionalContext));
    }
    /**
     * Helper method to create a new action for application initialization.  It will always have a methodName
     * of "Initialization"; otherwise this method is identical to newChildActionPublisherForMethod.
     *
     * @param additionalContext Additional context to be included in the new publisher
     * @returns New publisher identical to this one, but with an updated context
     */

  }, {
    key: "newChildActionPublisherForInitialization",
    value: function newChildActionPublisherForInitialization(additionalContext) {
      return this.newChildActionPublisherForMethod(INITIALIZATION_METHOD_NAME, additionalContext);
    }
    /**
     * Helper method to publish a string with the given name and value.
     *
     * @param name Metric name
     * @param value String value
     */

  }, {
    key: "publishString",
    value: function publishString(name, value) {
      this.publish(new _metricObject.String(name, value));
    }
    /**
     * Helper method to publish a string with the given name and value, truncated to the maximum size allowed by the
     * schema.
     *
     * @param name Metric name
     * @param value String value
     */

  }, {
    key: "publishStringTruncate",
    value: function publishStringTruncate(name, value) {
      var object = new _metricObject.String(name, value);
      object.truncate = true;
      this.publish(object);
    }
    /**
     * Helper method to publish a counter with the given name and value.
     *
     * @param name Metric name
     * @param value Counter value
     */

  }, {
    key: "publishCounter",
    value: function publishCounter(name, value) {
      this.publish(new _metricObject.Counter(name, value));
    }
    /**
     * Helper method to publish a timer with the given name and value.
     *
     * @param name Metric name
     * @param value Timer value
     */

  }, {
    key: "publishTimer",
    value: function publishTimer(name, value) {
      this.publish(new _metricObject.Timer(name, value));
    }
    /**
     * Helper method to publish a counter with the isMonitor flag set, and the given name and value.
     *
     * @param name Metric name
     * @param value Counter value
     */

  }, {
    key: "publishCounterMonitor",
    value: function publishCounterMonitor(name, value) {
      this.publish(new _metricObject.Counter(name, value).withMonitor());
    }
    /**
     * Helper method to publish a timer with the isMonitor flag set, and the given name and value.
     *
     * @param name Metric name
     * @param value Timer value
     */

  }, {
    key: "publishTimerMonitor",
    value: function publishTimerMonitor(name, value) {
      this.publish(new _metricObject.Timer(name, value).withMonitor());
    }
    /**
     * Private helper method to extract an actionId from a context if one is provided, and otherwise generate a new one.
     *
     * @returns Action ID string
     */

  }, {
    key: "_generateActionid",
    value: function _generateActionid(context) {
      if (context) {
        var fields = getContextFields(context);

        if (fields.actionId) {
          return fields.actionId;
        }
      }

      return (0, _v.default)();
    }
  }]);
  return KatalMetricsPublisher;
}();

exports.default = KatalMetricsPublisher;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/driver/ErrorHandler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/driver/ErrorHandler.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_ERROR_HANDLER = void 0;

var DEFAULT_ERROR_HANDLER = function DEFAULT_ERROR_HANDLER(err) {
  throw err;
};

exports.DEFAULT_ERROR_HANDLER = DEFAULT_ERROR_HANDLER;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/driver/KatalMetricsDriver.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/driver/KatalMetricsDriver.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

/**
 * Abstract base class for a Katal metrics driver.
 */
var KatalMetricsDriver = /*#__PURE__*/function () {
  function KatalMetricsDriver() {
    (0, _classCallCheck2.default)(this, KatalMetricsDriver);
  }

  (0, _createClass2.default)(KatalMetricsDriver, [{
    key: "publish",
    value:
    /**
     * Publish the given metric object with the given error handler and context.
     *
     * @param metricObject Metric object to publish.  Contains metricKey, isMonitor, type, and value.
     * @param context Context for publishing this metric.  Contains all other fields to be published.
     */
    function publish(metricObject, context) {
      throw new Error('KatalMetricsDriver is an abstract class, please choose a driver and use that instead');
    }
  }]);
  return KatalMetricsDriver;
}();

exports.default = KatalMetricsDriver;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/helper/FirstMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/helper/FirstMap.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = firstMap;

/**
 * Returns the first non-undefined value that results from running each value
 * in the given array through the mapper function.
 * @param array An array of values.
 * @param mapper A mapper function that should return a value or undefined.
 * @returns The first non-undefined value from the mapper function.
 */
function firstMap(array, mapper) {
  var toReturn = undefined;
  array.some(function (val) {
    toReturn = mapper(val);
    return toReturn != null;
  });
  return toReturn;
}

;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/helper/ObjectValuesPonyfill.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/helper/ObjectValuesPonyfill.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectValues = Object.values ? Object.values : function (object) {
  return Object.keys(object).map(function (key) {
    return object[key];
  });
};
var _default = objectValues;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleInt.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleInt.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateSimpleInt;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

/**
 * Number.isInteger is not in IE11, and letting Babel polyfill it added too much weight.
 * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
var isInteger = function isInteger(val) {
  return isFinite(val) && Math.floor(val) === val;
};
/**
 * Check if the given value is valid to be published to KatalMetrics as an integer (Counter or Timer),
 * and return either undefined (no error), or an Error object describing the problem.
 *
 * @param val Value to check
 * @param nameForError Name to use when constructing the error message, if necessary
 * @returns Error, or undefined if no error
 */


function validateSimpleInt(val, nameForError) {
  if (typeof val !== 'number') {
    return new Error("Expected ".concat(nameForError, " to have type 'number', but it was type '").concat((0, _typeof2.default)(val), "'"));
  }

  if (val < 0) {
    return new Error("Expected ".concat(nameForError, " to be positive, but it was ").concat(val));
  } // This will also catch NaN and Infinity


  if (!isInteger(val)) {
    return new Error("Expected ".concat(nameForError, " to be an integer, but it was ").concat(val));
  } // Couldn't find anything wrong, implicitly return undefined

}

;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleString.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleString.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateSimpleString;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var SIMPLE_STRING_PAT = /^[A-Za-z0-9.:@_/-]+$/;
var SIMPLE_STRING_MAX_LEN = 127;
/**
 * Check if the given value is valid to be published to KatalMetrics as a field value,
 * such as site, serviceName, methodName, or actionId (note this is not used to check values for string metrics).
 * It returns either undefined (no error), or an Error object describing the problem.
 *
 * To be published, it must be a non-empty string, less than 256 characters, containing only ASCII
 * letters, numbers, or these characters: .:@_/- (those are the PMET field value requirements).
 *
 * @param val String value to check
 * @param nameForError Name to use in the error message, if one is generated
 * @returns Error, or undefined if no error
 */

function validateSimpleString(val, nameForError) {
  if (typeof val !== "string") {
    return new Error("Expected ".concat(nameForError, " to be a string, but it was a ").concat((0, _typeof2.default)(val)));
  }

  if (val.length > SIMPLE_STRING_MAX_LEN) {
    return new Error("Expected ".concat(nameForError, " to be less than ").concat(SIMPLE_STRING_MAX_LEN, " characters, but it was ").concat(val.length, " characters"));
  }

  if (val.length < 1) {
    return new Error("Expected ".concat(nameForError, " to be non-blank"));
  }

  if (!SIMPLE_STRING_PAT.test(val)) {
    return new Error("Expected ".concat(nameForError, " to contain only valid characters, but it was ").concat(val, ".  It can only contain letters, numbers, and these symbols: .:@_/-"));
  } // Couldn't find anything wrong, implicitly return undefined

}

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/helper/embedRequestId.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/helper/embedRequestId.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.embedRequestId = embedRequestId;

// until we can add a requestId field to the andes schema we will embed it in the actionId
function embedRequestId(actionId, requestId) {
  if (requestId) {
    return [requestId, actionId].join("::");
  }

  return actionId;
}

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/helper/mergeLists.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/helper/mergeLists.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeLists = mergeLists;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

// Helper method to merge two lists which could be undefined
// Returns merged lists if either is defined, otherwise returns undefined
function mergeLists(list1, list2) {
  if (list1 || list2) {
    return [].concat((0, _toConsumableArray2.default)(list1 || []), (0, _toConsumableArray2.default)(list2 || []));
  } else {
    return undefined;
  }
}

;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/helper/metricsExtension.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/helper/metricsExtension.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchMetricEvent = dispatchMetricEvent;

/**
 * Publish to external parties that are 
 * listening for katal.metrics.publish Custom Events
 */
function dispatchMetricEvent(metric, context) {
  if (typeof window === 'undefined') {
    return;
  }

  dispatchCustomEvent(metric, context); // for legacy purposes, also publish to __KATAL_METRICS_EXTENSION__

  publishToMetricsExtension(metric, context);
}

function dispatchCustomEvent(metric, context) {
  if (typeof CustomEvent !== "function") {
    return;
  }

  var event = new CustomEvent('katal.metrics.publish', {
    detail: {
      metric: metric,
      context: context.getFields()
    }
  });
  window.dispatchEvent(event);
}
/**
 * @Deprecated
 * Publish to https://code.amazon.com/packages/KatalMetricsExtension
 * The extension injects a global __KATAL_METRICS_EXTENSION__ object with a
 * `publish` method.
 */


function publishToMetricsExtension(metric, context) {
  var extension = window.__KATAL_METRICS_EXTENSION__;

  if (extension) {
    extension.publish(metric, context.getFields());
  }
}

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/helper/validateCloudWatchDimensions.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/helper/validateCloudWatchDimensions.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateCloudWatchDimensions;

var _FirstMap = _interopRequireDefault(__webpack_require__(/*! ./FirstMap */ "./node_modules/@amzn/katal-metrics/lib/helper/FirstMap.js"));

var PRINTABLE_ASCII_PATTERN = /^[\x20-\x7E]+$/;
var AT_LEAST_ONE_NON_WHITESPACE_PATTERN = /^.*\S+.*$/;
var DIMENSION_NAME_STRING_MAX_LEN = 255;
var DIMENSION_VALUE_STRING_MAX_LEN = 1024;
/**
 * Check if the given dimensions are valid to be published to KatalMonitoring back-end.
 * It returns either undefined (no error), or an Error object describing the problem.
 *
 * To be published, name and value of string metrics must follow restrictions as described by
 * CloudWatch Dimension API Documentation:
 * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Dimension.html
 *
 * @param dimensions Array of string metrics to check
 * @returns Error, or undefined if no error
 */

function validateCloudWatchDimensions(dimensions) {
  return (0, _FirstMap.default)(dimensions, function (dimension) {
    var name = dimension.name,
        value = dimension.value;
    return validateCloudWatchDimension(name, value);
  });
}
/**
 * Check if the given dimension is valid as described by CloudWatch documentation.
 * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Dimension.html
 *
 * @param name CloudWatch Dimension Name String to check
 * @param value CloudWatch Dimension Value String to check
 * @returns Error, or undefined if no error
 */


function validateCloudWatchDimension(name, value) {
  if (name.length > DIMENSION_NAME_STRING_MAX_LEN) {
    return new Error("Expected Dimension name for value ".concat(value, " to be ").concat(DIMENSION_NAME_STRING_MAX_LEN, " characters or less, but it was ").concat(name.length, " characters"));
  }

  if (name.length < 1) {
    return new Error("Expected Dimension name for value ".concat(value, " to be non-blank"));
  }

  if (!PRINTABLE_ASCII_PATTERN.test(name)) {
    return new Error("Expected Dimension name for value ".concat(value, " to contain only ASCII characters, but it was ").concat(name));
  }

  if (!AT_LEAST_ONE_NON_WHITESPACE_PATTERN.test(name)) {
    return new Error("Expected Dimension name for value ".concat(value, " to contain at least one non whitespace character, but it was ").concat(name));
  }

  if (name.startsWith(":")) {
    return new Error("Expected Dimension name for value ".concat(value, " to not start with a colon (\":\"), but it was ").concat(name));
  }

  if (value.length > DIMENSION_VALUE_STRING_MAX_LEN) {
    return new Error("Expected Dimension value for name ".concat(name, " to be ").concat(DIMENSION_VALUE_STRING_MAX_LEN, " characters or less, but it was ").concat(value.length, " characters"));
  }

  if (value.length < 1) {
    return new Error("Expected Dimension value for name ".concat(name, " to be non-blank"));
  }

  if (!PRINTABLE_ASCII_PATTERN.test(value)) {
    return new Error("Expected Dimension value for name ".concat(name, " to contain only ASCII characters, but it was ").concat(value));
  }

  if (!AT_LEAST_ONE_NON_WHITESPACE_PATTERN.test(value)) {
    return new Error("Expected Dimension value for name ".concat(name, " to contain at least one non whitespace character, but it was ").concat(value, "}"));
  } // Couldn't find anything wrong, implicitly return undefined

}

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CloudWatchDimensions", {
  enumerable: true,
  get: function get() {
    return _CloudWatchDimensions.CloudWatchDimensions;
  }
});
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function get() {
    return _KatalMetricsContext.default;
  }
});
Object.defineProperty(exports, "ErrorHandler", {
  enumerable: true,
  get: function get() {
    return _ErrorHandler.ErrorHandler;
  }
});
exports.Metric = void 0;
Object.defineProperty(exports, "MetricsDriver", {
  enumerable: true,
  get: function get() {
    return _KatalMetricsDriver.default;
  }
});
Object.defineProperty(exports, "Publisher", {
  enumerable: true,
  get: function get() {
    return _KatalMetricsPublisher.default;
  }
});

var Metric = _interopRequireWildcard(__webpack_require__(/*! ./metricObject */ "./node_modules/@amzn/katal-metrics/lib/metricObject/index.js"));

exports.Metric = Metric;

var _KatalMetricsPublisher = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricsPublisher */ "./node_modules/@amzn/katal-metrics/lib/KatalMetricsPublisher.js"));

var _KatalMetricsContext = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricsContext */ "./node_modules/@amzn/katal-metrics/lib/KatalMetricsContext.js"));

var _KatalMetricsDriver = _interopRequireDefault(__webpack_require__(/*! ./driver/KatalMetricsDriver */ "./node_modules/@amzn/katal-metrics/lib/driver/KatalMetricsDriver.js"));

var _ErrorHandler = __webpack_require__(/*! ./driver/ErrorHandler */ "./node_modules/@amzn/katal-metrics/lib/driver/ErrorHandler.js");

var _CloudWatchDimensions = __webpack_require__(/*! ./types/CloudWatchDimensions */ "./node_modules/@amzn/katal-metrics/lib/types/CloudWatchDimensions.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricCounter.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricCounter.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

var _ValidateSimpleInt = _interopRequireDefault(__webpack_require__(/*! ../helper/ValidateSimpleInt */ "./node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleInt.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Counter type.
 *
 * Can be used to count the number of times an event happened on a page, or as a simple 1/0 counter to track
 * success and failure.
 */
var KatalMetricCounter = /*#__PURE__*/function (_KatalMetricObject) {
  (0, _inherits2.default)(KatalMetricCounter, _KatalMetricObject);

  var _super = _createSuper(KatalMetricCounter);

  /**
   * Create a new counter with the given name and value.
   *
   * @param name Counter name
   * @param value Counter value
   */
  function KatalMetricCounter(name) {
    var _this;

    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    (0, _classCallCheck2.default)(this, KatalMetricCounter);
    _this = _super.call(this, name);
    _this.value = value;
    return _this;
  }
  /**
   * Get the value for this counter
   *
   * @return Counter value
   */


  (0, _createClass2.default)(KatalMetricCounter, [{
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * Set a new value for this counter
     *
     * @param value New value for this counter
     */
    ,
    set: function set(value) {
      // Math.round will also coerce from a string if necessary, and return NaN if invalid
      this._value = Math.round(value);
    }
    /**
     * Gets the type for this counter.
     *
     * @return Always returns "Counter".
     */

  }, {
    key: "type",
    get: function get() {
      return _KatalMetricObject2.default.Types.Counter;
    }
    /**
     * Add a number to this counter.
     *
     * Can also be negative to subtract.
     *
     * @param addValue Amount to add to this counter
     */

  }, {
    key: "add",
    value: function add(addValue) {
      this.value += addValue;
    }
  }, {
    key: "canMonitor",
    get: function get() {
      return true;
    }
  }, {
    key: "validationError",
    value: function validationError() {
      var superError = (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricCounter.prototype), "validationError", this).call(this);
      if (superError) return superError;
      return (0, _ValidateSimpleInt.default)(this.value, "field value in Counter metrics object '".concat(this.name, "'"));
    }
  }]);
  return KatalMetricCounter;
}(_KatalMetricObject2.default);

exports.default = KatalMetricCounter;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricHttpRequest.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricHttpRequest.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricTimedAttempt = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimedAttempt */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js"));

var _KatalMetricString = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricString */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricString.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Standardized metric for instrumenting HTTP requests.
 *
 * Under the hood it is a KatalMetricTimedAttempt with the name you provide prefixed with "HTTPRequest.".
 * That object will contain a metric suffixed with ".Latency" for the latency of this request, and a metric suffixed
 * with ".Failure" to record the failure or success of this request.
 *
 * By default the request will be tracked as a failure; to mark it as a success call the "setSuccess()" method.
 *
 * It has additional properties which will be emitted if set; see url, statusCode, and statusText.
 *
 * For example, if you gave the name "Search", these metrics will be created:
 *   HTTPRequest.Search.Latency - Latency for this request
 *   HTTPRequest.Search.Failure - Failure for this request (1 for failure, 0 for success)
 */
var KatalMetricHttpRequest = /*#__PURE__*/function (_KatalMetricTimedAtte) {
  (0, _inherits2.default)(KatalMetricHttpRequest, _KatalMetricTimedAtte);

  var _super = _createSuper(KatalMetricHttpRequest);

  /** The prefix for this metric. */

  /** The suffix for URL metrics of this class. */

  /** The suffix for HTTP response code metrics of this class. */

  /** The suffix for HTTP response text metrics of this class. */

  /**
   * Create a new HTTP Request timed attempt metric incorporating the given name.
   *
   * The name you give will be used to create a KatalMetricTimedAttempt with the provided name prefixed with "HTTPRequest.".
   *
   * @param name Name of this metric; resulting metrics will prefix this name with "HTTPRequest."
   */
  function KatalMetricHttpRequest(name) {
    (0, _classCallCheck2.default)(this, KatalMetricHttpRequest);
    return _super.call(this, "".concat(KatalMetricHttpRequest.HTTP_REQUEST_PREFIX, ".").concat(name));
  }
  /**
   * Set the url for this metric.
   *
   * A string metric will be added to the list of objects that will be published for this metric.  Its name will
   * be this metrics name suffixed with '.URL', and its value will be the URL value given here.
   *
   * @param value URL for this metric
   */


  (0, _createClass2.default)(KatalMetricHttpRequest, [{
    key: "url",
    get:
    /**
     * Get the URL for this metric, if defined.
     *
     * @return The URL for this metric, or undefined
     */
    function get() {
      return this.getNamedMetricValue(KatalMetricHttpRequest.URL_SUFFIX);
    }
    /**
     * Get the URL metric object associated with this metric, if defined.
     *
     * @return Associated URL metric object, or undefined
     */
    ,
    set: function set(value) {
      this.setOrDeleteNamedMetricValue(KatalMetricHttpRequest.URL_SUFFIX, _KatalMetricString.default, value);
    }
  }, {
    key: "urlMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricHttpRequest.URL_SUFFIX);
    }
    /**
     * Set the HTTP response status code for this metric.
     *
     * A string metric will be added to the list of objects that will be published for this metric.  Its name will
     * be this metrics name suffixed with '.StatusCode', and its value will be the status code value given here.
     *
     * @param value HTTP response status code for this metric
     */

  }, {
    key: "statusCode",
    get:
    /**
     * Get the HTTP response status code for this metric, if defined.
     *
     * @return Associated HTTP response status code metric object, or undefined
     */
    function get() {
      return this.getNamedMetricValue(KatalMetricHttpRequest.STATUS_CODE_SUFFIX);
    }
    /**
     * Get the HTTP response status code metric object associated with this metric, if defined.
     *
     * @return HTTP response status code metric object, or undefined
     */
    ,
    set: function set(value) {
      this.setOrDeleteNamedMetricValue(KatalMetricHttpRequest.STATUS_CODE_SUFFIX, _KatalMetricString.default, value);
    }
  }, {
    key: "statusCodeMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricHttpRequest.STATUS_CODE_SUFFIX);
    }
    /**
     * Set the HTTP response status text for this metric.
     *
     * A string metric will be added to the list of objects that will be published for this metric.  Its name will
     * be this metrics name suffixed with '.StatusText', and its value will be the status text value given here.
     *
     * @param statusText HTTP response status text for this metric, or undefined to remove
     */

  }, {
    key: "statusText",
    get:
    /**
     * Get the HTTP response status text for this metric, if defined.
     *
     * @return Associated HTTP response status text metric object, or undefined
     */
    function get() {
      return this.getNamedMetricValue(KatalMetricHttpRequest.STATUS_TEXT_SUFFIX);
    }
    /**
     * Get the HTTP response status text for this metric, if defined.
     *
     * @return Associated HTTP response status text metric object, or undefined
     */
    ,
    set: function set(value) {
      this.setOrDeleteNamedMetricValue(KatalMetricHttpRequest.STATUS_TEXT_SUFFIX, _KatalMetricString.default, value);
    }
  }, {
    key: "statusTextMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricHttpRequest.STATUS_TEXT_SUFFIX);
    }
  }]);
  return KatalMetricHttpRequest;
}(_KatalMetricTimedAttempt.default);

exports.default = KatalMetricHttpRequest;
(0, _defineProperty2.default)(KatalMetricHttpRequest, "HTTP_REQUEST_PREFIX", 'HTTPRequest');
(0, _defineProperty2.default)(KatalMetricHttpRequest, "URL_SUFFIX", 'URL');
(0, _defineProperty2.default)(KatalMetricHttpRequest, "STATUS_CODE_SUFFIX", 'StatusCode');
(0, _defineProperty2.default)(KatalMetricHttpRequest, "STATUS_TEXT_SUFFIX", 'StatusText');

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricInitialization.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricInitialization.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricTimedAttempt = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimedAttempt */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Standardized metric for instrumenting application initialization.
 *
 * Under the hood it is a KatalMetricTimedAttempt with the name "Initialization".
 * That object will contain a metric suffixed with ".Latency" for the latency of this request, and a metric suffixed
 * with ".Failure" to record the failure or success of this request.
 *
 * By default the request will be tracked as a failure; to mark it as a success call the "setSuccess()" method.
 *
 * By default, these metrics will be created:
 *   Initialization.Latency - Latency for application initialization
 *   Initialization.Failure - Failure for this application initialization (1 for failure, 0 for success)
 */
var KatalMetricInitialization = /*#__PURE__*/function (_KatalMetricTimedAtte) {
  (0, _inherits2.default)(KatalMetricInitialization, _KatalMetricTimedAtte);

  var _super = _createSuper(KatalMetricInitialization);

  /** The name for this metric. */

  /**
   * Create a new timed attempt metric named "Initialization", for recording latency and failure information about
   * your application's initialization.
   */
  function KatalMetricInitialization() {
    (0, _classCallCheck2.default)(this, KatalMetricInitialization);
    return _super.call(this, KatalMetricInitialization.INITIALIZE_METRIC_NAME);
  }

  return KatalMetricInitialization;
}(_KatalMetricTimedAttempt.default);

exports.default = KatalMetricInitialization;
(0, _defineProperty2.default)(KatalMetricInitialization, "INITIALIZE_METRIC_NAME", 'Initialization');

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricNamedObjectList.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricNamedObjectList.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _KatalMetricObjectList = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObjectList */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObjectList.js"));

var _ObjectValuesPonyfill = _interopRequireDefault(__webpack_require__(/*! ../helper/ObjectValuesPonyfill */ "./node_modules/@amzn/katal-metrics/lib/helper/ObjectValuesPonyfill.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Metric object list that tracks metrics by name, and generates metrics prefixed with the name of this object.
 */
var KatalMetricNamedObjectList = /*#__PURE__*/function (_KatalMetricObjectLis) {
  (0, _inherits2.default)(KatalMetricNamedObjectList, _KatalMetricObjectLis);

  var _super = _createSuper(KatalMetricNamedObjectList);

  /**
   * Create a new named object list.
   *
   * The name given here will be used to prefix all metrics.
   *
   * @param name Name of this metric
   */
  function KatalMetricNamedObjectList(name) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricNamedObjectList);
    _this = _super.call(this, name);
    _this.namedMetrics = {};
    return _this;
  }

  (0, _createClass2.default)(KatalMetricNamedObjectList, [{
    key: "metricList",
    get: function get() {
      return (0, _ObjectValuesPonyfill.default)(this.namedMetrics);
    }
    /**
     * Replace the metric with the given name with a new metric generated by the given function.
     *
     * If the newly created metric supports monitoring, its isMonitor flag will be set to the value of the
     * isMonitor flag for this containing object.
     *
     * @param subName Name of this sub-metric
     * @param metricCreator Function which takes the full name for this metric
     *        and returns a newly constructed KatalMetricObject with this name and an appropriate value
     */

  }, {
    key: "setNamedMetric",
    value: function setNamedMetric(subName, metricCreator) {
      var fullName = this.getNameForSubMetric(subName);
      var metric = metricCreator(fullName);

      if (metric.canMonitor) {
        metric.isMonitor = this.isMonitor;
      }

      this.namedMetrics[subName] = metric;
    }
    /**
     * If the given value is undefined or null, delete the metric with the give name; otherwise if the given named
     * metric already exists update its value; otherwise create a new metric of the given type and set its value.
     *
     * This specialized helper method is designed to deal with the common case of a value setter in a more complex
     * metric.  Outside of subclasses, other methods will probably prove more useful.
     *
     * If the value is null the metric will also be deleted.
     *
     * @param subName Name of metric to create or delete
     * @param newValueClass Class of new metric to create
     * @param newValue New value for this metric (or undefined to delete the metric)
     */

  }, {
    key: "setOrDeleteNamedMetricValue",
    value: function setOrDeleteNamedMetricValue(subName, newValueClass, newValue) {
      if (newValue == undefined) {
        this.deleteNamedMetric(subName);
      } else {
        var metric = this.getOrCreateNamedMetric(subName, function (name) {
          return new newValueClass(name, newValue);
        });
        metric.value = newValue;
      }
    }
    /**
     * Get the sub-metric with the given name if it exists, otherwise use the given function to create a new metric and
     * store and return that.
     *
     * @param subName Name of this sub-metric
     * @param metricCreator Function which takes the full name for this metric
     *        and returns a newly constructed KatalMetricObject with this name and an appropriate value
     * @return Metric object which was retrieved or created
     */

  }, {
    key: "getOrCreateNamedMetric",
    value: function getOrCreateNamedMetric(subName, metricCreator) {
      if (!this.namedMetrics[subName]) {
        this.setNamedMetric(subName, metricCreator);
      }

      return this.namedMetrics[subName];
    }
    /**
     * Return the given named sub-metric, if it exists.
     *
     * @param {string} subName Name of this sub-metric
     * @return {KatalMetricObject | undefined} Metric object with this name if it exists, otherwise undefined
     */

  }, {
    key: "getNamedMetric",
    value: function getNamedMetric(subName) {
      return this.namedMetrics[subName];
    }
    /**
     * Delete the given named sub-metric.
     *
     * @param subName Name of this sub-metric
     */

  }, {
    key: "deleteNamedMetric",
    value: function deleteNamedMetric(subName) {
      delete this.namedMetrics[subName];
    }
    /**
     * Get the value for the given metric, or undefined if the metric does not exist.
     *
     * @param subName Name of this sub-metric
     * @return Value for the given metric, or undefined if the metric does not exist
     */

  }, {
    key: "getNamedMetricValue",
    value: function getNamedMetricValue(subName) {
      var metric = this.getNamedMetric(subName);
      if (!metric) return undefined;
      return metric.value;
    }
    /**
     * Generate a name for the given sub-metric.
     *
     * @param subName Name of this sub-metric
     * @return Full name for this sub-metric
     */

  }, {
    key: "getNameForSubMetric",
    value: function getNameForSubMetric(subName) {
      return "".concat(this.name, ".").concat(subName);
    }
  }]);
  return KatalMetricNamedObjectList;
}(_KatalMetricObjectList.default);

exports.default = KatalMetricNamedObjectList;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _ValidateSimpleString = _interopRequireDefault(__webpack_require__(/*! ../helper/ValidateSimpleString */ "./node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleString.js"));

var _KatalMetricType = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricType */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricType.js"));

/**
 * Abstract base class for a single metric in Katal.
 *
 * A single metric contains the name (metricKey), value, type, and the isMonitor flag; everything else is in the
 * KatalMetricsContext it is published to.
 */
var KatalMetricObject = /*#__PURE__*/function () {
  /**
   * Metric types.
   */

  /**
   * Create a new KatalMetricObject with the given name.
   *
   * @param name Name for this metric; published as metricKey field
   */
  function KatalMetricObject(name) {
    (0, _classCallCheck2.default)(this, KatalMetricObject);
    this._name = name;
    this._isMonitor = false;
  }
  /**
   * Get the name for this metric.
   *
   * Note that the name is immutable, and this cannot be set.
   *
   * @returns Name for this metric
   */


  (0, _createClass2.default)(KatalMetricObject, [{
    key: "name",
    get: function get() {
      return this._name;
    }
    /**
     * Alias for name.
     *
     * @returns Name for this metric
     */

  }, {
    key: "metricKey",
    get: function get() {
      return this._name;
    }
    /**
     * Set the isMonitor flag for this metric, and returns this object for continued use.
     *
     * This flag determines if the metric can be used for dashboards and alarms (i.e. if it will be published to PMET)
     * @param isMonitor New value for the isMonitor flag; defaults to true
     * @returns This object
     */

  }, {
    key: "withMonitor",
    value: function withMonitor() {
      var isMonitor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isMonitor = isMonitor;
      return this;
    }
    /**
     * Set the isMonitor flag for this metric.
     *
     * The value is forced to a boolean based on its truthiness.
     *
     * @param isMonitor New value for the isMonitor flag
     */

  }, {
    key: "isMonitor",
    get:
    /**
     * Get the isMonitor flag for this metric.
     *
     * @returns isMonitor flag for this metric.
     */
    function get() {
      return this._isMonitor;
    }
    /**
     * Check if this metric can be meaningfully monitored.
     *
     * Subclasses must override this.
     *
     * @return Whether this metric can be meaningfully monitored
     */
    ,
    set: function set(isMonitor) {
      this._isMonitor = !!isMonitor;
    }
  }, {
    key: "canMonitor",
    get: function get() {
      throw new Error('Subclass of KatalMetricObject must implement canMonitor');
    }
    /**
     * Get the type of this metric.
     *
     * @return Type of this metric (one of: String, Counter, Timer, List)
     */

  }, {
    key: "type",
    get: function get() {
      throw new Error('Subclass of KatalMetricObject must implement type getter');
    }
    /**
     * Check for a validation error on this object.
     *
     * Returns the first validation error encountered if one is found, otherwise undefined.
     *
     * @returns {Error | undefined} Error found with this object, or undefined if no error is found
     */

  }, {
    key: "validationError",
    value: function validationError() {
      if (this.isMonitor !== undefined && typeof this.isMonitor !== 'boolean') {
        return new Error("Field isMonitor should be a boolean, but it was a ".concat((0, _typeof2.default)(this.isMonitor)));
      }

      return (0, _ValidateSimpleString.default)(this.name, 'field name');
    }
  }]);
  return KatalMetricObject;
}();

exports.default = KatalMetricObject;
(0, _defineProperty2.default)(KatalMetricObject, "Types", _KatalMetricType.default);

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObjectList.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObjectList.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _set2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

var _FirstMap = _interopRequireDefault(__webpack_require__(/*! ../helper/FirstMap */ "./node_modules/@amzn/katal-metrics/lib/helper/FirstMap.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Abstract metric that contains a list of other metrics; when it is published, the list of metrics is retrieved, and all
 * are published.
 */
var KatalMetricObjectList = /*#__PURE__*/function (_KatalMetricObject) {
  (0, _inherits2.default)(KatalMetricObjectList, _KatalMetricObject);

  var _super = _createSuper(KatalMetricObjectList);

  /**
   * Create a new KatalMetricObjectList.
   *
   * @param name Name for this metric.  Not really used, but present for consistency with other metrics.
   */
  function KatalMetricObjectList(name) {
    (0, _classCallCheck2.default)(this, KatalMetricObjectList);
    return _super.call(this, name);
  }
  /**
   * Get the list of for this object
   *
   * @returns Array of metrics for this object
   */


  (0, _createClass2.default)(KatalMetricObjectList, [{
    key: "metricList",
    get: function get() {
      throw new Error('Subclass of KatalMetricObjectList must implement metricList getter');
    }
  }, {
    key: "isMonitor",
    get: // This just delegates to the superclass, but if we override the setter without overriding the getter
    // getting the property will always return undefined.
    function get() {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricObjectList.prototype), "isMonitor", this);
    },
    set: function set(isMonitor) {
      (0, _set2.default)((0, _getPrototypeOf2.default)(KatalMetricObjectList.prototype), "isMonitor", isMonitor, this, true);
      this.metricList.forEach(function (metric) {
        if (metric.canMonitor) {
          metric.isMonitor = isMonitor;
        }
      });
    }
  }, {
    key: "canMonitor",
    get: function get() {
      return true;
    }
  }, {
    key: "type",
    get: function get() {
      return _KatalMetricObject2.default.Types.List;
    }
    /**
     * If any of the contained metrics are invalid, return the first validation error encountered; otherwise return
     * undefined.
     *
     * Note that this isn't called by the publisher; it validates each sub-metric on its own.
     *
     * @returns Error found with submetric, if any; else undefined
     */

  }, {
    key: "validationError",
    value: function validationError() {
      // Doesn't make sense to check superclass error here, since it is the contained metrics that matter.
      return (0, _FirstMap.default)(this.metricList, function (metric) {
        return metric.validationError();
      });
    }
  }]);
  return KatalMetricObjectList;
}(_KatalMetricObject2.default);

exports.default = KatalMetricObjectList;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricString.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricString.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * String type.
 *
 * Can be used to store arbitrary strings of data.
 */
var KatalMetricString = /*#__PURE__*/function (_KatalMetricObject) {
  (0, _inherits2.default)(KatalMetricString, _KatalMetricObject);

  var _super = _createSuper(KatalMetricString);

  /**
   * Create a string with the given name and value.
   *
   * @param name String name
   * @param value String value
   */
  function KatalMetricString(name, value) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricString);
    _this = _super.call(this, name);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "truncate", false);
    _this.value = value;
    return _this;
  }
  /**
   * Get the value for this string metric.
   *
   * @return Value for this metric
   */


  (0, _createClass2.default)(KatalMetricString, [{
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * Set the value for this string metric.
     *
     * The new value should be a string, but number and boolean types will be automatically converted to strings.
     * For other types, including undefined and null, the value will be accepted, but will fail validation when publishing.
     *
     * @param value New value for this metric
     */
    ,
    set: function set(value) {
      if (typeof value === "number" || typeof value === "boolean") {
        value = value.toString();
      }

      this._value = value;
    }
    /**
     * Truncation flag for this string metric.
     *
     * If set, the value here will be automatically truncated to the maximum size allowed by the current schema.
     * Otherwise, sending a value larger than allowed will result in a failure.
     *
     * @param value True to automatically truncate metrics, otherwise false
     */

  }, {
    key: "type",
    get:
    /**
     * Gets the type for this metric.
     *
     * @return Always returns "String".
     */
    function get() {
      return _KatalMetricObject2.default.Types.String;
    }
  }, {
    key: "canMonitor",
    get: function get() {
      return false;
    }
  }, {
    key: "validationError",
    value: function validationError() {
      var superError = (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricString.prototype), "validationError", this).call(this);
      if (superError) return superError;

      if (typeof this.value !== 'string') {
        return new Error("Expected field value in String metrics object '".concat(this.name, "' to be type string, but it was ").concat((0, _typeof2.default)(this.value)));
      }

      if (this.value.length > KatalMetricString.MAX_SIZE) {
        if (this.truncate) {
          this.value = this.value.substring(0, KatalMetricString.MAX_SIZE);
        } else {
          return new Error("Expected field value in String metrics object '".concat(this.name, "' to be ").concat(KatalMetricString.MAX_SIZE, " characters or less, but it was ").concat(this.value.length, " characters."));
        }
      } // Didn't find anything wrong, implicitly return undefined

    }
  }]);
  return KatalMetricString;
}(_KatalMetricObject2.default);

exports.default = KatalMetricString;
(0, _defineProperty2.default)(KatalMetricString, "MAX_SIZE", 256);

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _KatalMetricNamedObjectList = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricNamedObjectList */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricNamedObjectList.js"));

var _KatalMetricTimerStopwatch = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimerStopwatch */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimerStopwatch.js"));

var _KatalMetricCounter = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricCounter */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricCounter.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Metric that pairs a timer and a failure counter to record the time and status of an attempt to do something.
 */
var KatalMetricTimedAttempt = /*#__PURE__*/function (_KatalMetricNamedObje) {
  (0, _inherits2.default)(KatalMetricTimedAttempt, _KatalMetricNamedObje);

  var _super = _createSuper(KatalMetricTimedAttempt);

  /** The sub-metric name for latency. */

  /** The sub-metric name for failure count. */

  /**
   * Create a new timed attempt with the given name
   *
   * This will create two inner metrics, a KatalMetricCounter that has the given name with ".Failure" appended,
   * and a KatalMetricTimerStopwatch that has the given name with ".Latency" appended.
   *
   * @param name Name of this attempt
   */
  function KatalMetricTimedAttempt(name) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricTimedAttempt);
    _this = _super.call(this, name);

    _this.setNamedMetric(KatalMetricTimedAttempt.LATENCY_SUFFIX, function (name) {
      return new _KatalMetricTimerStopwatch.default(name);
    });

    _this.setNamedMetric(KatalMetricTimedAttempt.FAILURE_SUFFIX, function (name) {
      return new _KatalMetricCounter.default(name, 1);
    });

    return _this;
  }
  /**
   * Set the failure counter metric based on the given failure status.
   *
   * If failure is true the counter will have a value of 1; if it is false the counter will have a value of 0.
   *
   * @param failure Whether this is a failure or not; default true
   */


  (0, _createClass2.default)(KatalMetricTimedAttempt, [{
    key: "setFailure",
    value: function setFailure() {
      var failure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var failureCount = failure ? 1 : 0;
      var metric = this.failureMetric;
      metric.value = failureCount;
    }
    /**
     * Set the failure status to false.
     */

  }, {
    key: "setSuccess",
    value: function setSuccess() {
      this.setFailure(false);
    }
    /**
     * Set the latency metric to the given value, in milliseconds.
     *
     * Note you don't normally have to set this, the underlying metric is a KatalMetricTimerStopwatch that will start
     * and stop automatically.
     *
     * @param latencyMs Latency in milliseconds
     */

  }, {
    key: "setLatency",
    value: function setLatency(latencyMs) {
      var metric = this.latencyMetric;
      metric.value = latencyMs;
    }
    /**
     * Get the timer stopwatch metric for this attempt.
     *
     * @return Timer stopwatch metric for this attempt
     */

  }, {
    key: "latencyMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricTimedAttempt.LATENCY_SUFFIX);
    }
    /**
     * Get the failure counter metric for this attempt.
     *
     * @return Failure counter metric for this event
     */

  }, {
    key: "failureMetric",
    get: function get() {
      return this.getNamedMetric(KatalMetricTimedAttempt.FAILURE_SUFFIX);
    }
  }]);
  return KatalMetricTimedAttempt;
}(_KatalMetricNamedObjectList.default);

exports.default = KatalMetricTimedAttempt;
(0, _defineProperty2.default)(KatalMetricTimedAttempt, "LATENCY_SUFFIX", 'Latency');
(0, _defineProperty2.default)(KatalMetricTimedAttempt, "FAILURE_SUFFIX", 'Failure');

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimer.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

var _ValidateSimpleInt = _interopRequireDefault(__webpack_require__(/*! ../helper/ValidateSimpleInt */ "./node_modules/@amzn/katal-metrics/lib/helper/ValidateSimpleInt.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Timer type.
 *
 * Can be used to record a time.  This class requires explicit value; see KatalMetricTimerStopwatch for automatic
 * timing.
 */
var KatalMetricTimer = /*#__PURE__*/function (_KatalMetricObject) {
  (0, _inherits2.default)(KatalMetricTimer, _KatalMetricObject);

  var _super = _createSuper(KatalMetricTimer);

  /**
   * Create a new timer metric.
   *
   * @param name Name for the metric
   * @param value Timer value in milliseconds
   */
  function KatalMetricTimer(name, value) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricTimer);
    _this = _super.call(this, name);
    _this.value = value;
    return _this;
  }
  /**
   * Get the value for this timer
   *
   * @return Timer value in milliseconds
   */


  (0, _createClass2.default)(KatalMetricTimer, [{
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * Set the value for this timer
     *
     * @param value New timer value in milliseconds
     */
    ,
    set: function set(value) {
      if (value == undefined) {
        this._value = value;
        return;
      } // Math.round will also coerce from a string if necessary, and return NaN if invalid


      this._value = Math.round(value);
    }
    /**
     * Get the type for this timer.
     *
     * @return Always returns "Timer".
     */

  }, {
    key: "type",
    get: function get() {
      return _KatalMetricObject2.default.Types.Timer;
    }
  }, {
    key: "canMonitor",
    get: function get() {
      return true;
    }
  }, {
    key: "validationError",
    value: function validationError() {
      var superError = (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricTimer.prototype), "validationError", this).call(this);
      if (superError) return superError;
      return (0, _ValidateSimpleInt.default)(this.value, "field value in Timer metrics object '".concat(this.name, "'"));
    }
  }]);
  return KatalMetricTimer;
}(_KatalMetricObject2.default);

exports.default = KatalMetricTimer;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimerStopwatch.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimerStopwatch.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _set2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/set */ "./node_modules/@babel/runtime/helpers/set.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _KatalMetricTimer2 = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimer */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimer.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Subclass of KatalMetricTimer that can be started and stopped, and will record the elapsed time between starting and
 * stopping.  By default it will start when the object is created, and stopped when the value is retrieved with
 * the getter "value".
 */
var KatalMetricTimerStopwatch = /*#__PURE__*/function (_KatalMetricTimer) {
  (0, _inherits2.default)(KatalMetricTimerStopwatch, _KatalMetricTimer);

  var _super = _createSuper(KatalMetricTimerStopwatch);

  /**
   * Create a new timer with the given name and starting time.  If no starting time is given, the current time is used.
   *
   * @param name Name for this timer
   * @param startTime Millisecond epoch time for the start time; defaults to now
   */
  function KatalMetricTimerStopwatch(name, startTime) {
    var _this;

    (0, _classCallCheck2.default)(this, KatalMetricTimerStopwatch);
    _this = _super.call(this, name, undefined);

    _this.start(startTime);

    _this._value = undefined;
    return _this;
  }
  /**
   * Re-start timer with the given start time, or the current time if none is given.
   *
   * @param startTime When the timer was started, in epoch milliseconds; defaults to now
   */


  (0, _createClass2.default)(KatalMetricTimerStopwatch, [{
    key: "start",
    value: function start(startTime) {
      this._startTime = startTime || this.now();
    }
    /**
     * Stop the timer and record the elapsed time.
     *
     * @param stopTime When the timer was stopped, in epoch milliseconds; defaults to now
     */

  }, {
    key: "stop",
    value: function stop(stopTime) {
      return this._stopTime = stopTime || this.now();
    }
    /**
     * Check if the timer has been stopped.
     *
     * @returns Whether the timer has been stopped yet
     */

  }, {
    key: "isStopped",
    get: function get() {
      return this._stopTime !== undefined;
    }
    /**
     * Get the elapsed time between when the timer was started and stopped; if the timer has not yet been stopped,
     * stop it first.
     *
     * @returns Elapsed time between when timer was started and stopped
     */

  }, {
    key: "value",
    get: function get() {
      if ((0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", this) === undefined) {
        if (!this.isStopped) {
          this.stop();
        } // Rely on super.value setter to round


        (0, _set2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", this.stopTime - this.startTime, this, true);
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", this);
    }
    /**
     * Get when this timer was started.
     *
     * @return Start time, in epoch milliseconds
     */
    ,
    set:
    /**
     * Set the value for this metric.  Note this will override the stopwatch behavior and just use the given value.
     *
     * @param value Value for this metric
     */
    function set(value) {
      (0, _set2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", value, this, true);
    }
  }, {
    key: "startTime",
    get: function get() {
      return this._startTime;
    }
    /**
     * Get when this timer was stopped (or undefined if it is still running)
     *
     * @return Stop time, in epoch millseconds, or undefined if the stopwatch is still running
     */

  }, {
    key: "stopTime",
    get: function get() {
      return this._stopTime;
    }
  }, {
    key: "now",
    value: function now() {
      return performance.now();
    }
  }]);
  return KatalMetricTimerStopwatch;
}(_KatalMetricTimer2.default);

exports.default = KatalMetricTimerStopwatch;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricType.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricType.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Metric types.
 */
var KatalMetricType;

(function (KatalMetricType) {
  KatalMetricType["String"] = "String";
  KatalMetricType["Counter"] = "Counter";
  KatalMetricType["Timer"] = "Timer";
  KatalMetricType["List"] = "List";
})(KatalMetricType || (KatalMetricType = {}));

;
var _default = KatalMetricType;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/metricObject/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/metricObject/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Counter", {
  enumerable: true,
  get: function get() {
    return _KatalMetricCounter.default;
  }
});
Object.defineProperty(exports, "HttpRequest", {
  enumerable: true,
  get: function get() {
    return _KatalMetricHttpRequest.default;
  }
});
Object.defineProperty(exports, "Initialization", {
  enumerable: true,
  get: function get() {
    return _KatalMetricInitialization.default;
  }
});
Object.defineProperty(exports, "Object", {
  enumerable: true,
  get: function get() {
    return _KatalMetricObject.default;
  }
});
Object.defineProperty(exports, "String", {
  enumerable: true,
  get: function get() {
    return _KatalMetricString.default;
  }
});
Object.defineProperty(exports, "TimedAttempt", {
  enumerable: true,
  get: function get() {
    return _KatalMetricTimedAttempt.default;
  }
});
Object.defineProperty(exports, "Timer", {
  enumerable: true,
  get: function get() {
    return _KatalMetricTimer.default;
  }
});
Object.defineProperty(exports, "TimerStopwatch", {
  enumerable: true,
  get: function get() {
    return _KatalMetricTimerStopwatch.default;
  }
});

var _KatalMetricObject = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricObject */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricObject.js"));

var _KatalMetricString = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricString */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricString.js"));

var _KatalMetricCounter = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricCounter */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricCounter.js"));

var _KatalMetricTimer = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimer */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimer.js"));

var _KatalMetricTimerStopwatch = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimerStopwatch */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimerStopwatch.js"));

var _KatalMetricTimedAttempt = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricTimedAttempt */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricTimedAttempt.js"));

var _KatalMetricInitialization = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricInitialization */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricInitialization.js"));

var _KatalMetricHttpRequest = _interopRequireDefault(__webpack_require__(/*! ./KatalMetricHttpRequest */ "./node_modules/@amzn/katal-metrics/lib/metricObject/KatalMetricHttpRequest.js"));

/***/ }),

/***/ "./node_modules/@amzn/katal-metrics/lib/types/CloudWatchDimensions.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@amzn/katal-metrics/lib/types/CloudWatchDimensions.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),

/***/ "./node_modules/@amzn/katal-sushi-client/dist/SushiClient.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@amzn/katal-sushi-client/dist/SushiClient.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This class encapsulates two IIFEs that the Sushi library contains. A fake CSM and Window object are created and provided
 * to the functions so that they actually execute in a controlled environment away from any CSM code that might be executing
 * at the platform level within the page.
 *
 * The basic run order is the following:
 * 1. Build the mock CSM object, then build a mock Window object that references the CSM object as ue_csm
 * 2. Run the transportation-clients.js Script from SushiJavascriptClient providing the mocks. It will modify globals on the mock objects.
 * 3. Run the sushi-client.js script from SushiJavaScriptClient providing the mocks. It will create an instance of the sushi client and inject it into the CSM globals in the mocks.
 * 4. whenever event() is called, refer to the encapsulated csm object to add the event to the queue.
 */
var SushiClient =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(SushiClient, null, [{
    key: "createSushiUrl",
    value: function createSushiUrl(region, sourceGroup) {
      if (!sourceGroup) {
        throw new Error("Sushi Driver was not provided with a source group.");
      }

      var domain;

      switch (region) {
        case SushiClient.REGIONS.NA:
          domain = "unagi-na";
          break;

        case SushiClient.REGIONS.EU:
          domain = "unagi-eu";
          break;

        case SushiClient.REGIONS.FE:
          domain = "unagi-fe";
          break;

        case SushiClient.REGIONS.CN:
          domain = "unagi-cn";
          break;

        default:
          throw new Error("Unrecognized region '".concat(region, "' provided to SushiClient."));
      }

      return "https://".concat(domain, ".amazon.com/1/events/").concat(sourceGroup);
    }
  }, {
    key: "createCsmUserContext",
    value: function createCsmUserContext(sushiUrl) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _objectSpread({
        hiPriFlushInterval: 1000,
        lowPriFlushInterval: 10000,
        requestId: "1",
        errorChannel: "jserr",
        sessionStorageWrapper: undefined,
        errorHandlerFunction: console.log,
        sushiUrl: sushiUrl
      }, options);
    }
    /**
     * Create a Sushi Client for a region and source group
     *
     * @param region Region in SushiClient.REGIONS
     * @param sourceGroup Sushi Eel source group
     * @param errorHandler Error handler function
     * @param options Additional CSM context overrides
     * @param clientOverride An optional transportation client for overriding the default clients (navigator.sendBeacon and XDomainRequest or XMLHttpRequest)
     */

  }, {
    key: "REGIONS",
    get: function get() {
      return {
        NA: "NA",
        EU: "EU",
        FE: "FE",
        CN: "CN"
      };
    }
  }]);

  function SushiClient() {
    var region = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SushiClient.REGIONS.NA;
    var sourceGroup = arguments.length > 1 ? arguments[1] : undefined;
    var errorHandler = arguments.length > 2 ? arguments[2] : undefined;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var clientOverride = arguments.length > 4 ? arguments[4] : undefined;
    (0, _classCallCheck2.default)(this, SushiClient);
    var sushiUrl = SushiClient.createSushiUrl(region, sourceGroup);
    var csmUserContext = SushiClient.createCsmUserContext(sushiUrl, options);
    this.ue_csm = this.setupMockCSMObject(csmUserContext);
    this.encapsulatedWindow = this.setupMockWindow(this.ue_csm);
    this.transportationClientCode(this.ue_csm, window);

    if (clientOverride) {
      this.ue_csm.ue._sBcn = {
        isSupported: true,
        send: function send(endpoint, payload) {
          clientOverride(endpoint, payload);
          return true;
        }
      };
    }

    this.clientCode(this.ue_csm, this.encapsulatedWindow);
    this.errorHandler = errorHandler;
  }

  (0, _createClass2.default)(SushiClient, [{
    key: "event",
    value: function event(data, producerId, schemaId, options) {
      var debug = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (debug) {
        console.log("SushiClient wrapper publishing the following:", {
          data: data,
          producerId: producerId,
          schemaId: schemaId,
          options: options
        });
      }

      return this.ue_csm.ue.event(data, producerId, schemaId, options);
    }
    /**
     * If you plan to emit 1000 or more events per instantiated client,
     * call reset after calling event to allow the CSM client to continue sending events.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.ue_csm.ue.event.reset();
    }
    /**
     * Register a callback that will be called just before each time metrics are
     * flushed to the network.
     * @param callback A function that sushi will call before flushes.
     */

  }, {
    key: "onSushiFlush",
    value: function onSushiFlush(callback) {
      this.ue_csm.ue.onSushiFlush(callback);
    }
    /**
     * Register a callback that will be called just before the page unloads.
     * This can be used to send any final metrics to sushi, such as page visit
     * duration or batched counters.
     * @param callback A function that sushi will call before unload.
     */

  }, {
    key: "onSushiUnload",
    value: function onSushiUnload(callback) {
      this.ue_csm.ue.onSushiUnload(callback);
    }
  }, {
    key: "setupMockCSMObject",
    value: function setupMockCSMObject(csmUserContext) {
      var _this = this;

      var execStub = function execStub(callback, attribution) {
        return callback;
      };

      var eventStub = function eventStub(log, producer, eventType) {
        console.warn("SushiClient CSM stub called in unsupported manner: event()");
      };

      var errorHandler = function errorHandler(logEvent, channel) {
        if (_this.errorHandler) {
          _this.errorHandler(logEvent);
        } else {
          console.log("An error has occurred in SushiClient channel " + channel, logEvent);
        }
      };

      var attachHandler = function attachHandler(evt, handler, container) {
        //TODO might be able to just use window.ue.attach?
        container = container || window; //ok to use real window global here.

        if (window.EventTarget && window.EventTarget.prototype && window.EventTarget.prototype.addEventListener) {
          window.EventTarget.prototype.addEventListener.call(container, evt, handler, !!window.ue_clf);
        } else if (container.addEventListener) {
          container.addEventListener(evt, handler, !!window.ue_clf);
        } else if (container.attachEvent) {
          container.attachEvent("on" + evt, handler);
        }
      };

      return {
        ue_hpsi: csmUserContext.hiPriFlushInterval,
        ue_lpsi: csmUserContext.lowPriFlushInterval,
        ue: {
          ssw: csmUserContext.sessionStorageWrapper,
          log: errorHandler,
          exec: execStub,
          event: eventStub,
          attach: attachHandler
        },
        ueLogError: csmUserContext.errorHandlerFunction,
        ue_surl: csmUserContext.sushiUrl,
        ue_id: csmUserContext.requestId,
        ue_err_chan: csmUserContext.errorChannel
      };
    }
  }, {
    key: "setupMockWindow",
    value: function setupMockWindow(ue_csm) {
      //apparently cannot ref the setTimeout function directly in some browsers so we have to wrap it.
      var timeoutWrapper = function timeoutWrapper(fn, timeout) {
        return window.setTimeout(fn, timeout);
      };

      return {
        ue_csm: ue_csm,
        ueLogError: ue_csm.ueLogError,
        ue: ue_csm.ue,
        setTimeout: timeoutWrapper
      };
    }
    /**
     * Code within function pulled directly from
     * https://code.amazon.com/packages/SushiJavaScriptClient/blobs/mainline/--/javascript/sushi-client.js
     */

  }, {
    key: "clientCode",
    value: function clientCode(ue_csm, window) {
      ue_csm.ue.exec(function (b, k) {
        function A() {
          for (var a = 0; a < arguments.length; a++) {
            var c = arguments[a];

            try {
              var h;

              if (c.isSupported) {
                var b = t.buildPayload(l, e);
                h = c.send(J, b);
              } else throw dummyException;

              return h;
            } catch (d) {}
          }

          B({
            m: "All supported clients failed",
            attribution: "CSMSushiClient_TRANSPORTATION_FAIL",
            f: "sushi-client.js",
            logLevel: "ERROR"
          }, k.ue_err_chan || "jserr");
        }

        function m() {
          if (e.length) {
            for (var a = 0; a < n.length; a++) {
              n[a]();
            }

            A(d._sBcn || {}, d._ajx || {});
            e = [];
            f = {};
            l = {};
            u = v = q = w = 0;
          }
        }

        function K() {
          var a = new Date(),
              c = function c(a) {
            return 10 > a ? "0" + a : a;
          };

          return Date.prototype.toISOString ? a.toISOString() : a.getUTCFullYear() + "-" + c(a.getUTCMonth() + 1) + "-" + c(a.getUTCDate()) + "T" + c(a.getUTCHours()) + ":" + c(a.getUTCMinutes()) + ":" + c(a.getUTCSeconds()) + "." + String((a.getUTCMilliseconds() / 1E3).toFixed(3)).slice(2, 5) + "Z";
        }

        function x(a) {
          try {
            return JSON.stringify(a);
          } catch (c) {}

          return null;
        }

        function C(a, c, h, g) {
          var p = !1;
          g = g || {};
          r++;
          r == D && B({
            m: "Max number of Sushi Logs exceeded",
            f: "sushi-client.js",
            logLevel: "ERROR",
            attribution: "CSMSushiClient_MAX_CALLS"
          }, k.ue_err_chan || "jserr");
          var f;
          if (f = !(r >= D)) (f = a && -1 < a.constructor.toString().indexOf("Object") && c && -1 < c.constructor.toString().indexOf("String") && h && -1 < h.constructor.toString().indexOf("String")) || L++;
          f && (d.count && d.count("Event:" + h, 1), a.producerId = a.producerId || c, a.schemaId = a.schemaId || h, a.timestamp = K(), c = Date.now ? Date.now() : +new Date(), h = Math.random().toString().substring(2, 12), a.messageId = b.ue_id + "-" + c + "-" + h, g && !g.ssd && (a.sessionId = a.sessionId || b.ue_sid, a.requestId = a.requestId || b.ue_id, a.obfuscatedMarketplaceId = a.obfuscatedMarketplaceId || b.ue_mid), (c = x(a)) ? (c = c.length, (e.length == M || q + c > N) && m(), q += c, a = {
            data: t.compressEvent(a)
          }, e.push(a), (g || {}).n ? 0 === E ? m() : u || (u = k.setTimeout(m, E)) : v || (v = k.setTimeout(m, O)), p = !0) : p = !1);
          !p && b.ue_int && console.error("Invalid JS Nexus API call");
          return p;
        }

        function F() {
          if (!G) {
            for (var a = 0; a < y.length; a++) {
              y[a]();
            }

            for (a = 0; a < n.length; a++) {
              n[a]();
            }

            e.length && (b.ue_sbuimp && b.ue && b.ue.ssw && (a = x({
              dct: l,
              evt: e
            }), b.ue.ssw("eeldata", a), b.ue.ssw("eelsts", "unk")), A(d._sBcn || {}));
            G = !0;
          }
        }

        function H(a) {
          y.push(a);
        }

        function I(a) {
          n.push(a);
        }

        var D = 1E3,
            M = 499,
            N = 524288,
            s = function s() {},
            d = b.ue || {},
            B = d.log || s,
            P = b.uex || s;

        (b.uet || s)("bb", "ue_sushi_v1", {
          wb: 1
        });

        var J = b.ue_surl || "https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",
            Q = ["messageId", "timestamp"],
            z = "#",
            e = [],
            f = {},
            l = {},
            q = 0,
            w = 0,
            L = 0,
            r = 0,
            y = [],
            n = [],
            G = !1,
            u,
            v,
            E = void 0 === b.ue_hpsi ? 1E3 : b.ue_hpsi,
            O = void 0 === b.ue_lpsi ? 1E4 : b.ue_lpsi,
            t = function () {
          function a(a) {
            f[a] = z + w++;
            l[f[a]] = a;
            return f[a];
          }

          function c(b) {
            if (!(b instanceof Function)) {
              if (b instanceof Array) {
                for (var g = [], d = b.length, e = 0; e < d; e++) {
                  g[e] = c(b[e]);
                }

                return g;
              }

              if (b instanceof Object) {
                g = {};

                for (d in b) {
                  b.hasOwnProperty(d) && (g[f[d] ? f[d] : a(d)] = -1 === Q.indexOf(d) ? c(b[d]) : b[d]);
                }

                return g;
              }

              return "string" === typeof b && (b.length > (z + w).length || b.charAt(0) === z) ? f[b] ? f[b] : a(b) : b;
            }
          }

          return {
            compressEvent: c,
            buildPayload: function buildPayload() {
              return x({
                cs: {
                  dct: l
                },
                events: e
              });
            }
          };
        }();

        (function () {
          if (d.event && d.event.isStub) {
            if (b.ue_sbuimp && b.ue && b.ue.ssw) {
              var a = b.ue.ssw("eelsts").val;

              if (a && "unk" === a && (a = b.ue.ssw("eeldata").val)) {
                var c;

                a: {
                  try {
                    c = JSON.parse(a);
                    break a;
                  } catch (f) {}

                  c = null;
                }

                c && c.evt instanceof Array && c.dct instanceof Object && (e = c.evt, l = c.dct, e && l && (m(), b.ue.ssw("eeldata", "{}"), b.ue.ssw("eelsts", "scs")));
              }
            }

            d.event.replay(function (a) {
              a[3] = a[3] || {};
              a[3].n = 1;
              C.apply(this, a);
            });
            d.onSushiUnload.replay(function (a) {
              H(a[0]);
            });
            d.onSushiFlush.replay(function (a) {
              I(a[0]);
            });
          }
        })();

        d.attach("beforeunload", F);
        d.attach("pagehide", F);
        d._cmps = t;
        d.event = C;

        d.event.reset = function () {
          r = 0;
        };

        d.onSushiUnload = H;
        d.onSushiFlush = I;

        try {
          k.P && k.P.register && k.P.register("sushi-client", s);
        } catch (R) {
          b.ueLogError(R, {
            logLevel: "WARN"
          });
        }

        P("ld", "ue_sushi_v1", {
          wb: 1
        });
      }, "Nxs-JS-Client")(ue_csm, window);
    }
    /**
     * The code in this function is pulled directly from:
     * https://code.amazon.com/packages/SushiJavaScriptClient/blobs/mainline/--/javascript/transportation-clients.js
     */

  }, {
    key: "transportationClientCode",
    value: function transportationClientCode(ue_csm, window) {
      ue_csm.ue.exec(function (b, c) {
        var e = function e() {},
            f = function () {
          return {
            send: function send(b, d) {
              if (d && b) {
                var a;
                if (c.XDomainRequest) a = new XDomainRequest(), a.onerror = e, a.ontimeout = e, a.onprogress = e, a.onload = e, a.timeout = 0;else if (c.XMLHttpRequest) {
                  if (a = new XMLHttpRequest(), !("withCredentials" in a)) throw "";
                } else a = void 0;
                if (!a) throw "";
                a.open("POST", b, !0);
                a.setRequestHeader && a.setRequestHeader("Content-type", "text/plain");
                a.send(d);
              }
            },
            isSupported: !0
          };
        }(),
            g = function () {
          return {
            send: function send(c, d) {
              if (c && d) if (navigator.sendBeacon(c, d)) b.ue_sbuimp && b.ue && b.ue.ssw && b.ue.ssw("eelsts", "scs");else throw "";
            },
            isSupported: !!navigator.sendBeacon && !(c.cordova && c.cordova.platformId && "ios" == c.cordova.platformId)
          };
        }();

        b.ue._ajx = f;
        b.ue._sBcn = g;
      }, "Transportation-clients")(ue_csm, window);
    }
  }]);
  return SushiClient;
}();

exports.default = SushiClient;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/set.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/set.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");
var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = superPropBase(target, property);
      var desc;
      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }
      desc = Object.getOwnPropertyDescriptor(receiver, property);
      if (desc) {
        if (!desc.writable) {
          return false;
        }
        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        defineProperty(receiver, property, value);
      }
      return true;
    };
  }
  return set(target, property, value, receiver);
}
function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);
  if (!s && isStrict) {
    throw new TypeError('failed to set property');
  }
  return value;
}
module.exports = _set, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/build-url-ts/dist/build-url.js":
/*!*****************************************************!*\
  !*** ./node_modules/build-url-ts/dist/build-url.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function buildQueryString(r,n,a){var o=[];for(var t in r)!function(t){var e;Object.prototype.hasOwnProperty.call(r,t)&&void 0!==r[t]&&(a&&Array.isArray(r[t])&&r[t].length?r[t].forEach(function(r){e=0!==r?r||"":0,o.push("".concat(t,"=").concat(encodeURIComponent(String(e).trim())))}):(e=n?String(r[t]).toLowerCase()||"":0!==r[t]?r[t]||"":0,o.push("".concat(t,"=").concat(encodeURIComponent(String(e).trim())))))}(t);return"?".concat(o.join("&"))}function appendPath(r,t,e){void 0===t&&(t=""),"/"===t[t.length-1]&&(t=t.slice(0,-1));var n=String(r).trim();return e&&(n=n.toLowerCase()),0===n.indexOf("/")?t+=n:t+="/".concat(n),t}function buildHash(r,t){var e="#".concat(String(r).trim());return t?e.toLowerCase():e}function buildUrl(r,t){var e;return null===r?e="":"object"==typeof r?(e="",t=r):e=r,null!=t&&t.path&&(e=appendPath(t.path,e,t.lowerCase)),null!=t&&t.queryParams&&(e+=buildQueryString(t.queryParams,t.lowerCase,t.disableCSV)),null!=t&&t.hash&&(e+=buildHash(t.hash,t.lowerCase)),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.appendPath=appendPath,exports.buildHash=buildHash,exports.buildQueryString=buildQueryString,exports.buildUrl=buildUrl,exports.default=buildUrl;
//# sourceMappingURL=build-url.js.map


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/iframe.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/iframe.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#aa-challenge-whole-page-iframe {\n    overflow:hidden;\n    opacity:1.0;\n    position:fixed;\n    top:0px;\n    bottom:0px;\n    right:0px;\n    border:none;\n    margin:0;\n    padding:0;\n    height:100%;\n    width:100%;\n    z-index:999999;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/HostnameResolver.ts":
/*!*********************************!*\
  !*** ./src/HostnameResolver.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65',{value:true});var HostnameResolver=function(){var _QQ=['\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x61','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d\x2e\x61\x75','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x73\x61','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x61\x65','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x65\x67\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x64\x75\x62\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x61\x75','\x74\x72','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d\x2e\x62\x72','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x2e\x75\x6b','\x73\x61\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x70\x6c\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x64\x75\x62\x2e\x78\x63\x6f\x72\x70\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x73\x65\x2e\x69\x6e\x74\x65\x67\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x65\x73','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x65\x73','\x65\x75','\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x62\x72\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x73\x65\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x64\x75\x62\x2e\x78\x63\x6f\x72\x70\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x73\x67','\x75\x6b\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x75\x6b\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x66\x72\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x6d\x78\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x73\x61','\x73\x65','\x75\x6b','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x2e\x6a\x70','\x61\x74','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x61\x74','\x63\x61','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x64\x65','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x73\x65','\x70\x6c\x2e\x69\x6e\x74\x65\x67\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x6a\x70\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x6e\x6c','\x62\x72','\x69\x6e','\x69\x6e\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x6d\x78\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x6a\x70','\x64\x65','\x65\x73\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x73\x67\x2d\x70\x72\x65\x70\x72\x6f\x64\x2e\x70\x64\x78\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x62\x72\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x66\x72',42166,'\x63\x61\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d',18656,'\x75\x73\x65\x72\x61\x67\x65\x6e\x74\x45\x6e\x63\x72\x79\x70\x74\x45\x6c','\x6d\x78','\x6e\x6c\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x69\x74','\x61\x65\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x64\x75\x62\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x74\x72\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x64\x75\x62\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x64\x65\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x63\x61\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x75\x73','\x66\x72','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x69\x6e','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x69\x74','\x61\x75\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d\x2e\x74\x72','\x6e\x6c','\x69\x6e\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x61\x75\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x73\x67','\x74\x72\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x69\x6e\x74\x65\x67\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x69\x74\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x6e\x6c\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x61\x65','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d\x2e\x6d\x78','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x70\x6c','\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x65\x67','\x66\x72\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x69\x74\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x61\x74\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x73\x67\x2e\x69\x6e\x74\x65\x67\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x65\x73\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x70\x6c','\x65\x67\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x69\x6e\x74\x65\x67\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x61\x74\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x65\x67','\x6a\x70\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x64\x65\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x61\x65\x2d\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x69\x6e\x74\x65\x67\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x73\x61\x2d\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d'];function HostnameResolver(){var _IIlLiIiL=_QQ[48],_ll1LiIlL=_QQ[49];}HostnameResolver.getServiceHostnameByConfiguration=function(configuration){var _l1=['\x77\x77\x77\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d'];if(configuration in HostnameResolver.DOMAIN_REALM_HOSTNAME){return HostnameResolver.DOMAIN_REALM_HOSTNAME[configuration];}else{var _i1lLIIL1=function(_iIIliLI1){var _LI=[26111,'\x63\x61\x70\x74\x63\x68\x61\x43\x61\x70\x74\x63\x68\x61\x43\x61\x70\x74\x63\x68\x61','\x63\x61\x70\x74\x63\x68\x61\x4f\x62\x66\x75\x73\x63\x61\x74\x65',.3209906201489614];var _1liiILIi=_LI[3],_2ZZ$s2$2=_LI[0];var _lLLiIIll=_LI[1];return _LI[2];};return _l1[0];}};HostnameResolver.getServiceHostnameByHostname=function(hostname){var _OO0=['\x6d\x61\x73\x74\x65\x72','\x74\x65\x73\x74',27827,'\x70\x72\x6f\x64','\x62\x44\x6f\x63\x75\x6d\x65\x6e\x74\x4f\x62\x66\x75\x73\x63\x61\x74\x65','\x63\x61\x70\x74\x63\x68\x61',9969];var _oQQQ00Q0=_OO0[2],_l1IlIiii=_OO0[4];if(HostnameResolver.isDevelopment(hostname)){return this.getServiceHostByCountryCode(_OO0[1],this.getCountryCodePrefix(hostname));}else if(HostnameResolver.isPreProd(hostname)){var _IiiiLlL1=_OO0[5],_$22$Z2sZ=_OO0[6];return this.getServiceHostByCountryCode(_OO0[0],this.getCountryCodePrefix(hostname));}else{var _oQooOQOo=function(_2sZ2$sZ$){var _zS=['\x64\x61\x74\x61\x48\x61\x73\x68\x53\x74\x61\x74\x65\x6d\x65\x6e\x74',13149,45543,'\x64\x61\x74\x61\x41\x6d\x61\x7a\x6f\x6e','\x6e\x6f\x64\x65\x42\x6c\x6f\x62\x45\x78\x65\x63\x75\x74\x65',22866,16280];var _1lIlLI1i=_zS[5],_LL1I1i1i=_zS[3];var _zZ2sS2ZZ=_zS[4],_l1iI1lii=_zS[6];var _zS$sZ$Z$=_zS[0],_l1iIlLlI=_zS[1];return _zS[2];};var countryCode=HostnameResolver.getCountryCodeSuffix(hostname);return this.getServiceHostByCountryCode(_OO0[3],countryCode);}};HostnameResolver.getServiceHostByCountryCode=function(domain,countryCode){var _sz=['\x2e','\x41\x6d\x61\x7a\x6f\x6e'];var _SsssZszs=function(_sZZ$SZ2S,_z222ZSZ2){var _Li=[.4562968159056351,.3393028448508595,'\x6a\x73\x6f\x6e\x44\x61\x74\x61','\x64\x6f\x6d\x53\x74\x61\x74\x65\x6d\x65\x6e\x74',45680,34548,13810];var _s2zs2Zz2=_Li[5];var _iILilLli=_Li[3],_zz2ZSs2S=_Li[6],_OoO0QQOO=_Li[2];var _$SzzzSsz=_Li[1],_0OOoOoQ0=_Li[4];return _Li[0];};return this.getServiceHostnameByConfiguration(domain+_sz[0]+countryCode.toUpperCase()+_sz[1]);};var _IIiiiIil=_QQ[46];HostnameResolver.isDevelopment=function(hostname){var _1i1=['\x69\x6e\x74\x65\x67\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74','\x64\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x64\x65\x76\x2d\x64\x73\x6b',.8998287221913728];var _0oOo0oOQ=_1i1[5];return hostname.startsWith(_1i1[4])&&hostname.endsWith(_1i1[1])||hostname.startsWith(_1i1[2])||hostname.endsWith(_1i1[0])||hostname.endsWith(_1i1[3]);};HostnameResolver.isPreProd=function(hostname){var _Il=['\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x64\x75\x62\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x64\x75\x62\x2e\x78\x63\x6f\x72\x70\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x70\x72\x65\x70\x72\x6f\x64\x2e\x70\x64\x78\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d','\x70\x72\x65\x2d\x70\x72\x6f\x64\x2e\x70\x64\x78\x2e\x61\x6d\x61\x7a\x6f\x6e\x2e\x63\x6f\x6d'];var _SZzzs$$S=function(_S2S2s$ZZ,_o0ooOO00){var _z$$=['\x61\x6d\x61\x7a\x6f\x6e\x43\x61\x70\x74\x63\x68\x61','\x6a\x73\x6f\x6e\x44\x6f\x63\x75\x6d\x65\x6e\x74\x4c\x69\x73\x74'];var _0QQO0Q0O=_z$$[0];return _z$$[1];};return hostname.endsWith(_Il[3])||hostname.endsWith(_Il[4])||hostname.endsWith(_Il[0])||hostname.endsWith(_Il[1])||hostname.endsWith(_Il[2]);};HostnameResolver.getCountryCodePrefix=function(hostname){var _ii=['\x62\x41\x6d\x61\x7a\x6f\x6e',33167,'\x75\x73',1178,0,1,'\x2d','\x2e'];var splits=hostname.split(_ii[6]);if(splits.length>_ii[5]){var prefix_1=splits[_ii[4]];var _s$ZZzs$2=_ii[1],_SsSSZS$s=_ii[0];if(this.COUNTRY_CODES.some(function(e){var _llI=[];return e===prefix_1;})){var _ZsS2z$22=function(_I1llIiIi,_S22Z2sss){var _1i1i=['\x66\x77\x63\x69\x6d',6394,2097,17186];var _lL1LI1iL=_1i1i[2],_iIlIll1i=_1i1i[3],_lLIiL1I1=_1i1i[1];return _1i1i[0];};return prefix_1;}}splits=hostname.split(_ii[7]);if(splits.length>_ii[5]){var _ILIi1li1=_ii[3];var prefix_2=splits[_ii[4]];if(this.COUNTRY_CODES.some(function(e){var _0O0=[];var _O0OOQQOO=function(_II11IIII,_llLIlL1L,_QoO0QQOQ){var _0O0o=[.6740407628404146,'\x62\x42','\x64\x6f\x63\x75\x6d\x65\x6e\x74\x4c\x69\x73\x74'];var _lLilil1L=_0O0o[1],_oQOQQOO0=_0O0o[2];return _0O0o[0];};return e===prefix_2;})){return prefix_2;}}return _ii[2];};HostnameResolver.getCountryCodeSuffix=function(hostname){var _oQ=['\x75\x73','\x2e',1];var _iILl1LlL=function(_2$ZSZZS$,_oOQ0QoQo){var _ilLI=['\x69\x64',21076,.4419089126209621,'\x6f\x62\x66\x75\x73\x63\x61\x74\x65','\x65\x6c\x43\x61\x70\x74\x63\x68\x61\x42\x6f\x64\x79',32477,'\x68\x61\x73\x68\x4f\x62\x66\x75\x73\x63\x61\x74\x65',33064];var _22SZszss=_ilLI[1],_oOQ0QoOQ=_ilLI[2];var _l1lLLIli=_ilLI[7],_Szz2sz$s=_ilLI[4],_oQO000oQ=_ilLI[5];var _Zz2zsS2Z=_ilLI[0],_oQQQo00o=_ilLI[3];return _ilLI[6];};var splits=hostname.split(_oQ[1]);if(splits.length>_oQ[2]){var _QooO000O=function(_S2Sss2$z){var _Zz=['\x64\x6f\x63\x75\x6d\x65\x6e\x74',.1278614233779405,'\x65\x6e\x63\x72\x79\x70\x74\x42\x6f\x64\x79\x41',40367,'\x75\x73\x65\x72\x61\x67\x65\x6e\x74',.1281057352396997,'\x6a\x73\x6f\x6e',39130];var _1ILIliLl=_Zz[7];var _QO0QQQ0Q=_Zz[0],_z2zS2ZzZ=_Zz[6],_1lIi11lI=_Zz[2];var _$22ZZZss=_Zz[1],_QO0o0oQo=_Zz[4],_i1iI1LLL=_Zz[5];return _Zz[3];};var suffix_1=splits[splits.length-_oQ[2]];if(this.COUNTRY_CODES.some(function(e){var _QQ0=[];var _sSZS2s2z=function(_0OoO0OQo,_1ilLlliI,_ZZZSZs$Z){var _lLI=['\x64\x61\x74\x61\x41\x53\x74\x61\x74\x65\x6d\x65\x6e\x74','\x63\x6f\x6c\x6c\x65\x63\x74\x6f\x72','\x6c\x69\x73\x74\x44\x61\x74\x61',.17492313720639108,.21558164094575027,'\x6c\x69\x73\x74\x42\x6f\x64\x79\x42\x6f\x64\x79'];var _1iILiill=_lLI[2],_ZZ2z$2$z=_lLI[5],_1iliILIl=_lLI[4];var _00OooQQ0=_lLI[0],_i11i1IIi=_lLI[1];return _lLI[3];};return e===suffix_1;})){return suffix_1;}}return _oQ[0];};HostnameResolver.DOMAIN_REALM_HOSTNAME={'\x74\x65\x73\x74\x2e\x4e\x41\x41\x6d\x61\x7a\x6f\x6e':_QQ[78],'\x6d\x61\x73\x74\x65\x72\x2e\x4e\x41\x41\x6d\x61\x7a\x6f\x6e':_QQ[16],'\x70\x72\x6f\x64\x2e\x4e\x41\x41\x6d\x61\x7a\x6f\x6e':_QQ[4],'\x74\x65\x73\x74\x2e\x55\x53\x41\x6d\x61\x7a\x6f\x6e':_QQ[78],'\x6d\x61\x73\x74\x65\x72\x2e\x55\x53\x41\x6d\x61\x7a\x6f\x6e':_QQ[16],'\x70\x72\x6f\x64\x2e\x55\x53\x41\x6d\x61\x7a\x6f\x6e':_QQ[4],'\x74\x65\x73\x74\x2e\x43\x41\x41\x6d\x61\x7a\x6f\x6e':_QQ[47],'\x6d\x61\x73\x74\x65\x72\x2e\x43\x41\x41\x6d\x61\x7a\x6f\x6e':_QQ[56],'\x70\x72\x6f\x64\x2e\x43\x41\x41\x6d\x61\x7a\x6f\x6e':_QQ[0],'\x74\x65\x73\x74\x2e\x4d\x58\x41\x6d\x61\x7a\x6f\x6e':_QQ[39],'\x6d\x61\x73\x74\x65\x72\x2e\x4d\x58\x41\x6d\x61\x7a\x6f\x6e':_QQ[23],'\x70\x72\x6f\x64\x2e\x4d\x58\x41\x6d\x61\x7a\x6f\x6e':_QQ[71],'\x74\x65\x73\x74\x2e\x41\x54\x41\x6d\x61\x7a\x6f\x6e':_QQ[76],'\x6d\x61\x73\x74\x65\x72\x2e\x41\x54\x41\x6d\x61\x7a\x6f\x6e':_QQ[82],'\x70\x72\x6f\x64\x2e\x41\x54\x41\x6d\x61\x7a\x6f\x6e':_QQ[29],'\x74\x65\x73\x74\x2e\x53\x47\x41\x6d\x61\x7a\x6f\x6e':_QQ[77],'\x6d\x61\x73\x74\x65\x72\x2e\x53\x47\x41\x6d\x61\x7a\x6f\x6e':_QQ[43],'\x70\x72\x6f\x64\x2e\x53\x47\x41\x6d\x61\x7a\x6f\x6e':_QQ[66],'\x74\x65\x73\x74\x2e\x41\x55\x41\x6d\x61\x7a\x6f\x6e':_QQ[65],'\x6d\x61\x73\x74\x65\x72\x2e\x41\x55\x41\x6d\x61\x7a\x6f\x6e':_QQ[61],'\x70\x72\x6f\x64\x2e\x41\x55\x41\x6d\x61\x7a\x6f\x6e':_QQ[1],'\x74\x65\x73\x74\x2e\x44\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[55],'\x6d\x61\x73\x74\x65\x72\x2e\x44\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[85],'\x70\x72\x6f\x64\x2e\x44\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[31],'\x74\x65\x73\x74\x2e\x45\x55\x41\x6d\x61\x7a\x6f\x6e':_QQ[55],'\x6d\x61\x73\x74\x65\x72\x2e\x45\x55\x41\x6d\x61\x7a\x6f\x6e':_QQ[85],'\x70\x72\x6f\x64\x2e\x45\x55\x41\x6d\x61\x7a\x6f\x6e':_QQ[31],'\x74\x65\x73\x74\x2e\x50\x4c\x41\x6d\x61\x7a\x6f\x6e':_QQ[33],'\x6d\x61\x73\x74\x65\x72\x2e\x50\x4c\x41\x6d\x61\x7a\x6f\x6e':_QQ[11],'\x70\x72\x6f\x64\x2e\x50\x4c\x41\x6d\x61\x7a\x6f\x6e':_QQ[72],'\x74\x65\x73\x74\x2e\x54\x52\x41\x6d\x61\x7a\x6f\x6e':_QQ[67],'\x6d\x61\x73\x74\x65\x72\x2e\x54\x52\x41\x6d\x61\x7a\x6f\x6e':_QQ[54],'\x70\x72\x6f\x64\x2e\x54\x52\x41\x6d\x61\x7a\x6f\x6e':_QQ[62],'\x74\x65\x73\x74\x2e\x49\x54\x41\x6d\x61\x7a\x6f\x6e':_QQ[68],'\x6d\x61\x73\x74\x65\x72\x2e\x49\x54\x41\x6d\x61\x7a\x6f\x6e':_QQ[75],'\x70\x72\x6f\x64\x2e\x49\x54\x41\x6d\x61\x7a\x6f\x6e':_QQ[60],'\x74\x65\x73\x74\x2e\x41\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[86],'\x6d\x61\x73\x74\x65\x72\x2e\x41\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[53],'\x70\x72\x6f\x64\x2e\x41\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[3],'\x74\x65\x73\x74\x2e\x4a\x50\x41\x6d\x61\x7a\x6f\x6e':_QQ[34],'\x6d\x61\x73\x74\x65\x72\x2e\x4a\x50\x41\x6d\x61\x7a\x6f\x6e':_QQ[84],'\x70\x72\x6f\x64\x2e\x4a\x50\x41\x6d\x61\x7a\x6f\x6e':_QQ[27],'\x74\x65\x73\x74\x2e\x46\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[34],'\x6d\x61\x73\x74\x65\x72\x2e\x46\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[84],'\x70\x72\x6f\x64\x2e\x46\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[27],'\x74\x65\x73\x74\x2e\x47\x42\x41\x6d\x61\x7a\x6f\x6e':_QQ[21],'\x6d\x61\x73\x74\x65\x72\x2e\x47\x42\x41\x6d\x61\x7a\x6f\x6e':_QQ[20],'\x70\x72\x6f\x64\x2e\x47\x42\x41\x6d\x61\x7a\x6f\x6e':_QQ[9],'\x74\x65\x73\x74\x2e\x55\x4b\x41\x6d\x61\x7a\x6f\x6e':_QQ[21],'\x6d\x61\x73\x74\x65\x72\x2e\x55\x4b\x41\x6d\x61\x7a\x6f\x6e':_QQ[20],'\x70\x72\x6f\x64\x2e\x55\x4b\x41\x6d\x61\x7a\x6f\x6e':_QQ[9],'\x74\x65\x73\x74\x2e\x53\x41\x41\x6d\x61\x7a\x6f\x6e':_QQ[10],'\x6d\x61\x73\x74\x65\x72\x2e\x53\x41\x41\x6d\x61\x7a\x6f\x6e':_QQ[87],'\x70\x72\x6f\x64\x2e\x53\x41\x41\x6d\x61\x7a\x6f\x6e':_QQ[2],'\x74\x65\x73\x74\x2e\x49\x4e\x41\x6d\x61\x7a\x6f\x6e':_QQ[64],'\x6d\x61\x73\x74\x65\x72\x2e\x49\x4e\x41\x6d\x61\x7a\x6f\x6e':_QQ[38],'\x70\x72\x6f\x64\x2e\x49\x4e\x41\x6d\x61\x7a\x6f\x6e':_QQ[59],'\x74\x65\x73\x74\x2e\x45\x47\x41\x6d\x61\x7a\x6f\x6e':_QQ[81],'\x6d\x61\x73\x74\x65\x72\x2e\x45\x47\x41\x6d\x61\x7a\x6f\x6e':_QQ[5],'\x70\x72\x6f\x64\x2e\x45\x47\x41\x6d\x61\x7a\x6f\x6e':_QQ[73],'\x74\x65\x73\x74\x2e\x46\x52\x41\x6d\x61\x7a\x6f\x6e':_QQ[22],'\x6d\x61\x73\x74\x65\x72\x2e\x46\x52\x41\x6d\x61\x7a\x6f\x6e':_QQ[74],'\x70\x72\x6f\x64\x2e\x46\x52\x41\x6d\x61\x7a\x6f\x6e':_QQ[45],'\x74\x65\x73\x74\x2e\x45\x53\x41\x6d\x61\x7a\x6f\x6e':_QQ[79],'\x6d\x61\x73\x74\x65\x72\x2e\x45\x53\x41\x6d\x61\x7a\x6f\x6e':_QQ[42],'\x70\x72\x6f\x64\x2e\x45\x53\x41\x6d\x61\x7a\x6f\x6e':_QQ[14],'\x74\x65\x73\x74\x2e\x4e\x4c\x41\x6d\x61\x7a\x6f\x6e':_QQ[51],'\x6d\x61\x73\x74\x65\x72\x2e\x4e\x4c\x41\x6d\x61\x7a\x6f\x6e':_QQ[69],'\x70\x72\x6f\x64\x2e\x4e\x4c\x41\x6d\x61\x7a\x6f\x6e':_QQ[35],'\x74\x65\x73\x74\x2e\x53\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[12],'\x6d\x61\x73\x74\x65\x72\x2e\x53\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[18],'\x70\x72\x6f\x64\x2e\x53\x45\x41\x6d\x61\x7a\x6f\x6e':_QQ[32],'\x74\x65\x73\x74\x2e\x42\x52\x41\x6d\x61\x7a\x6f\x6e':_QQ[17],'\x6d\x61\x73\x74\x65\x72\x2e\x42\x52\x41\x6d\x61\x7a\x6f\x6e':_QQ[44],'\x70\x72\x6f\x64\x2e\x42\x52\x41\x6d\x61\x7a\x6f\x6e':_QQ[8]};HostnameResolver.COUNTRY_CODES=[_QQ[28],_QQ[19],_QQ[6],_QQ[41],_QQ[80],_QQ[7],_QQ[52],_QQ[30],_QQ[70],_QQ[50],_QQ[40],_QQ[26],_QQ[15],_QQ[24],_QQ[57],_QQ[37],_QQ[83],_QQ[58],_QQ[13],_QQ[63],_QQ[25],_QQ[36]];return HostnameResolver;}();exports.HostnameResolver=HostnameResolver;

/***/ }),

/***/ "./src/KatalEndpointResolver.ts":
/*!**************************************!*\
  !*** ./src/KatalEndpointResolver.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65',{value:true});var HostnameResolver_1=__webpack_require__(/*! ./HostnameResolver */ "./src/HostnameResolver.ts");var KatalEndpointResolver=function(){var _II=['\x68\x74\x74\x70\x73\x3a\x2f\x2f\x79\x33\x6a\x35\x67\x39\x65\x36\x79\x34\x2e\x65\x78\x65\x63\x75\x74\x65\x2d\x61\x70\x69\x2e\x75\x73\x2d\x65\x61\x73\x74\x2d\x31\x2e\x61\x6d\x61\x7a\x6f\x6e\x61\x77\x73\x2e\x63\x6f\x6d\x2f\x70\x72\x6f\x64\x2f\x76\x31\x2f\x6c\x6f\x67','\x62\x65\x74\x61','\x67\x61\x6d\x6d\x61','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x33\x32\x62\x67\x67\x62\x6d\x6a\x61\x2e\x65\x78\x65\x63\x75\x74\x65\x2d\x61\x70\x69\x2e\x75\x73\x2d\x77\x65\x73\x74\x2d\x32\x2e\x61\x6d\x61\x7a\x6f\x6e\x61\x77\x73\x2e\x63\x6f\x6d\x2f\x70\x72\x6f\x64\x2f\x76\x31\x2f\x6c\x6f\x67','\x61\x70','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x62\x64\x76\x67\x6f\x6a\x32\x37\x68\x2e\x65\x78\x65\x63\x75\x74\x65\x2d\x61\x70\x69\x2e\x75\x73\x2d\x65\x61\x73\x74\x2d\x31\x2e\x61\x6d\x61\x7a\x6f\x6e\x61\x77\x73\x2e\x63\x6f\x6d\x2f\x70\x72\x6f\x64\x2f\x76\x31\x2f\x6c\x6f\x67',31196,'\x70\x72\x6f\x64','\x63\x61\x70\x74\x63\x68\x61\x45\x6c'];function KatalEndpointResolver(){var _OQo0QO0Q=function(_I11iI1li){var _1I=[.8334973805875638,.3160357976127728,.5527258207215289,'\x68\x61\x73\x68\x4e\x6f\x64\x65',.6437966729195719,'\x61\x6d\x61\x7a\x6f\x6e\x42\x6c\x6f\x62\x45\x6e\x63\x72\x79\x70\x74',13807,'\x66\x77\x63\x69\x6d',3099];var _S22Z$22z=_1I[7],_OoQOo0Q0=_1I[2];var _szZZzzzz=_1I[5],_Q000Q00o=_1I[1],_o0QQO000=_1I[8];var _L1I1l1i1=_1I[4],_I1LLiILl1=_1I[3],_zszZZ2Sz=_1I[6];return _1I[0];};}KatalEndpointResolver.getKatalLoggerEndpoint=function(){var _$z=[];var stage=this.getStageByHostname(window.location.hostname.toLowerCase());var _$Szz$$zs=function(_0Q00O0QQ,_000Oo00Q){var _lI=[.9200938801060086,.8569065363090698,.9556857327468284,28504];var _LLliLlii=_lI[2],_0OOooQOQ=_lI[3],_lL1liILl=_lI[1];return _lI[0];};return this.KATAL_LOGGER_ENDPOINTS_MAP[stage];};KatalEndpointResolver.getStageByHostname=function(hostname){var _lll=[.3556556018121486];var _$z2s$22s=function(_lIILliil,_Qo0OOO0O,_22z$SZZs){var _IL=[.11407905749313696,'\x73\x74\x61\x74\x65\x6d\x65\x6e\x74\x41',35285];var _0o0OQo0o=_IL[2],_Q0QOOoQO=_IL[0];return _IL[1];};if(HostnameResolver_1.HostnameResolver.isDevelopment(hostname)){var _iLililiI=_lll[0];return this.BETA_STAGE;}else if(HostnameResolver_1.HostnameResolver.isPreProd(hostname)){return this.GAMMA_STAGE;}return this.PROD_STAGE;};KatalEndpointResolver.getStageByHostConfig=function(hostConfig){var _s2=[0,'\x6e\x75\x6c\x6c\x48\x6f\x73\x74\x43\x6f\x6e\x66\x69\x67','\x6d\x61\x73\x74\x65\x72','\x70\x72\x6f\x64','\x74\x65\x73\x74','\x2e'];var _oo00OOOO=function(_zzz$z22S){var _QoO=[.3884695932117195,39971,.7765948308211217];var _Zss2$$2S=_QoO[1],_ILl1ILI1=_QoO[2];return _QoO[0];};var configuration=_s2[1];if(hostConfig){configuration=hostConfig.split(_s2[5])[_s2[0]];}switch(configuration){case _s2[4]:return this.BETA_STAGE;case _s2[2]:return this.GAMMA_STAGE;case _s2[3]:return this.PROD_STAGE;default:return this.getStageByHostname(window.location.hostname.toLowerCase());}};KatalEndpointResolver.getPageTypeMetricName=function(clientData,logger){var _OO=['\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x61\x72\x73\x65\x20\x63\x6c\x69\x65\x6e\x74\x43\x6f\x6e\x74\x65\x78\x74\x2e','\x64\x61\x74\x61\x2d\x72\x65\x66\x2d\x69\x64',9443,'\x2e','\x61\x44\x6f\x63\x75\x6d\x65\x6e\x74','\x64\x61\x74\x61\x2d\x63\x6f\x6e\x74\x65\x78\x74'];var _sZZssZ2s=_OO[2],_i1II1iLl=_OO[4];if(clientData[_OO[1]]==this.AP_CLIENT_ID&&clientData[_OO[5]]){try{var clientContext=JSON.parse(clientData[_OO[5]]);return clientContext.pageType?_OO[3]+clientContext.pageType:this.EMPTY_STRING;}catch(err){var _oOOoQ0Q0=function(_o0O0o0Q0,_2$zSZsZs,_2SSzsSS2){var _2$$=[5995,'\x69\x64'];var _SsS$zS2z=_2$$[0];return _2$$[1];};logger.error(_OO[0],err.message);return this.EMPTY_STRING;}}return this.EMPTY_STRING;};var _o0oO0ooQ=_II[8],_ZsS2$Zss=_II[6];KatalEndpointResolver.BETA_STAGE=_II[1];KatalEndpointResolver.GAMMA_STAGE=_II[2];KatalEndpointResolver.PROD_STAGE=_II[7];KatalEndpointResolver.KATAL_LOGGER_ENDPOINTS_MAP={'\x62\x65\x74\x61':_II[3],'\x67\x61\x6d\x6d\x61':_II[0],'\x70\x72\x6f\x64':_II[5]};KatalEndpointResolver.EMPTY_STRING='';KatalEndpointResolver.AP_CLIENT_ID=_II[4];return KatalEndpointResolver;}();exports.KatalEndpointResolver=KatalEndpointResolver;

/***/ }),

/***/ "./src/acic.ts":
/*!*********************!*\
  !*** ./src/acic.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65',{value:true});var build_url_ts_1=__webpack_require__(/*! build-url-ts */ "./node_modules/build-url-ts/dist/build-url.js");__webpack_require__(/*! ./css/iframe.css */ "./src/css/iframe.css");var ACICSessionContext_1=__webpack_require__(/*! ./data/ACICSessionContext */ "./src/data/ACICSessionContext.ts");var ACICClientRequest_1=__webpack_require__(/*! ./data/ACICClientRequest */ "./src/data/ACICClientRequest.ts");var AAmationResult_1=__webpack_require__(/*! ./data/AAmationResult */ "./src/data/AAmationResult.ts");var ACICUserResponse_1=__webpack_require__(/*! ./data/ACICUserResponse */ "./src/data/ACICUserResponse.ts");var HostnameResolver_1=__webpack_require__(/*! ./HostnameResolver */ "./src/HostnameResolver.ts");var ACICError_1=__webpack_require__(/*! ./data/ACICError */ "./src/data/ACICError.ts");var katal_logger_1=__webpack_require__(/*! @amzn/katal-logger */ "./node_modules/@amzn/katal-logger/dist/index.js");var KatalEndpointResolver_1=__webpack_require__(/*! ./KatalEndpointResolver */ "./src/KatalEndpointResolver.ts");var katal_metrics_1=__webpack_require__(/*! @amzn/katal-metrics */ "./node_modules/@amzn/katal-metrics/lib/index.js");var katal_metrics_driver_sushi_1=__webpack_require__(/*! @amzn/katal-metrics-driver-sushi */ "./node_modules/@amzn/katal-metrics-driver-sushi/dist/index.js");var ACIC=function(){var _I1=[true,null,'\x41\x43\x49\x43',15e3,'\x64\x6f\x63\x75\x6d\x65\x6e\x74\x4f\x62\x66\x75\x73\x63\x61\x74\x65',3,'\x61\x6d\x7a\x2d\x61\x61\x6d\x61\x74\x69\x6f\x6e\x2d\x72\x65\x73\x70','\x73\x74\x61\x74\x69\x63\x43\x6c\x69\x65\x6e\x74\x43\x6f\x6e\x74\x65\x78\x74','\x73\x74\x61\x74\x69\x63\x53\x65\x73\x73\x69\x6f\x6e\x54\x6f\x6b\x65\x6e','\x31','\x6f\x6e\x65\x72\x72\x6f\x72','\x65\x6c','\x50\x41\x53\x53',2137,'\x2f\x61\x61\x75\x74\x2f\x76\x65\x72\x69\x66\x79\x2f'];function ACIC(acicKatalLogger){this.logger={log:function(args){var _Ii=[];var _ZzzSs2S2=function(_Q00oo0OQ,_0oOQQoOO){var _oO=['\x75\x73\x65\x72\x61\x67\x65\x6e\x74',42172];var _OOoOQooO=_oO[0];return _oO[1];};}};this.sessionContext=new ACICSessionContext_1.ACICSessionContext();this._onerror=_I1[1];var _Ill1IILl=_I1[4],_Zs$2zZzZ=_I1[13];if(acicKatalLogger!=_I1[1]){this.acicKatalLogger=acicKatalLogger;}else{var _Z2s$Z$Ss=_I1[11];this.acicKatalLogger=this.setupKatalLogger();}this.setupIframeEventListener();}ACIC.prototype.setupACIC=function(clientInputData){var _zZ=['\x64\x61\x74\x61\x2d\x65\x72\x72\x6f\x72\x2d\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x64\x61\x74\x61\x2d\x75\x73\x65\x2d\x70\x6f\x73\x74\x2d\x72\x65\x71\x75\x65\x73\x74\x2d\x6d\x65\x74\x68\x6f\x64',null,'\x64\x61\x74\x61\x2d\x74\x69\x6d\x65\x6f\x75\x74','\x64\x61\x74\x61\x2d\x69\x66\x72\x61\x6d\x65\x2d\x69\x64','\x64\x61\x74\x61\x2d\x68\x6f\x73\x74\x2d\x63\x6f\x6e\x66\x69\x67',false,'\x64\x61\x74\x61\x2d\x6d\x6f\x64\x65','\x64\x61\x74\x61\x2d\x68\x6f\x73\x74'];var serviceHost=clientInputData[_zZ[8]]||_zZ[2];var configuration=clientInputData[_zZ[5]]||_zZ[2];this.setServiceHost(serviceHost,configuration);this._onerror=clientInputData[_zZ[0]]||_zZ[2];this.setClientRequest(clientInputData);this.mode=clientInputData[_zZ[7]]||_zZ[2];this.timeout=clientInputData[_zZ[3]]||ACIC.DEFAULT_REQUEST_TIMEOUT;this.useRequestMethodPost=clientInputData[_zZ[1]]||_zZ[6];this.enableCustomizedIframe=clientInputData[_zZ[4]];var _lI11lli1=function(_000oOOoQ){var _I1I=['\x6a\x73\x6f\x6e\x41\x6d\x61\x7a\x6f\x6e','\x61\x42\x6f\x64\x79',18317];var _QQ00o0oO=_I1I[1];var _l1illlIl=_I1I[2];return _I1I[0];};if(this.enableCustomizedIframe){var _1LL11lLI=function(_zS2Sz2$S,_Q00QO0Qo){var _oO0=['\x6c\x69\x73\x74\x49\x64','\x63\x61\x70\x74\x63\x68\x61\x44\x61\x74\x61',.21243313259912888];var _2SSZS2$z=_oO0[1],_S$sszZ$s=_oO0[2];return _oO0[0];};this.iframe=document.getElementById(clientInputData[_zZ[4]]);}this.setKatalMetrics(clientInputData);this.sendArnoldHttpRequest(this.createNewSessionRequestURL(),this.timeout);};ACIC.prototype.setupACICforAsyncReporting=function(clientInputData){var _I1Ii=['\x64\x61\x74\x61\x2d\x68\x6f\x73\x74\x2d\x63\x6f\x6e\x66\x69\x67','\x64\x61\x74\x61\x2d\x68\x6f\x73\x74',null];var serviceHost=clientInputData[_I1Ii[1]]||_I1Ii[2];var configuration=clientInputData[_I1Ii[0]]||_I1Ii[2];this.setServiceHost(serviceHost,configuration);this.setClientRequest(clientInputData);if(window.navigator&&navigator.sendBeacon){navigator.sendBeacon(this.createNewSessionRequestURL(),JSON.stringify(this.clientRequest));}};Object.defineProperty(ACIC.prototype,_I1[10],{set:function(onError){var _z$=[];this._onerror=onError;},enumerable:_I1[0],configurable:_I1[0]});ACIC.prototype.setServiceHost=function(serviceHost,configuration){var _li=[.9459722426172656,'\x68\x74\x74\x70\x73\x3a\x2f\x2f',null];var _0O0ooQ00=function(_111IllLi){var _00=[.8264313409314064,38401,.631627996254174,'\x6c\x69\x73\x74\x53\x74\x61\x74\x65\x6d\x65\x6e\x74'];var _ll1IllI1=_00[1],_iliiiLLl=_00[3],_zs$S2sZs=_00[0];return _00[2];};if(serviceHost==_li[2]){var _SZ2zS$2s=function(_$zss2s$Z){var _i1=['\x62\x6c\x6f\x62','\x63\x6f\x6c\x6c\x65\x63\x74\x6f\x72\x42\x44\x61\x74\x61',.6247344682457168,814,'\x66\x77\x63\x69\x6d'];var _llIililL=_i1[3];var _ILlLiLIi=_i1[4];var _s2ssZzzS=_i1[0],_lLLLiILl=_i1[1];return _i1[2];};if(configuration!=_li[2]){serviceHost=HostnameResolver_1.HostnameResolver.getServiceHostnameByConfiguration(configuration);}else{var _LLllLIlL=_li[0];serviceHost=HostnameResolver_1.HostnameResolver.getServiceHostnameByHostname(window.location.hostname.toLowerCase());}}this.serviceEndpoint=_li[1]+serviceHost+ACIC.SERVICE_BASE_PATH;};ACIC.prototype.setupKatalLogger=function(){var _oOO=[20588,3387,29248];var acicKatalLogger=new katal_logger_1.default({url:KatalEndpointResolver_1.KatalEndpointResolver.getKatalLoggerEndpoint()});acicKatalLogger.addErrorListener(function(error){var _lil=[true];return _lil[0];});var _OoOQOQ0o=_oOO[1],_II1l1l1i=_oOO[2],_OO0Q000O=_oOO[0];return acicKatalLogger;};ACIC.prototype.setKatalMetrics=function(clientInputData){var _SS=['\x55\x53\x41\x6d\x61\x7a\x6f\x6e','\x2e','\x64\x61\x74\x61\x2d\x68\x6f\x73\x74\x2d\x63\x6f\x6e\x66\x69\x67','\x64\x61\x74\x61\x2d\x72\x65\x66\x2d\x69\x64'];var _this=this;var metricsErrorHandler=function(err){var _2$=['\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x75\x62\x6c\x69\x73\x68\x20\x74\x68\x65\x20\x6d\x65\x74\x72\x69\x63\x73\x2e',.0036436606062149046,'\x64\x6f\x6d'];var _ll1ilLIi=_2$[1],_oOO0OQ0O=_2$[2];_this.acicKatalLogger.error(_2$[0],err);};var domain=KatalEndpointResolver_1.KatalEndpointResolver.getStageByHostConfig(clientInputData[_SS[2]]);var metricsDriver=new katal_metrics_driver_sushi_1.default.Builder().withDomainRealm(domain,_SS[0]).withErrorHandler(metricsErrorHandler).build();var katalMetricsServiceName=clientInputData[_SS[3]]+KatalEndpointResolver_1.KatalEndpointResolver.getPageTypeMetricName(clientInputData,this.acicKatalLogger)+_SS[1]+window.location.hostname;var initialMetricsContext=new katal_metrics_1.Context.Builder().withSite(ACIC.KATAL_METRICS_SERVICE_NAME).withServiceName(katalMetricsServiceName).build();this.acicKatalMetricsPublisher=new katal_metrics_1.Publisher(metricsDriver,metricsErrorHandler,initialMetricsContext);};ACIC.prototype.setClientRequest=function(data){var _Oo=['\x64\x61\x74\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x2d\x74\x79\x70\x65','\x64\x61\x74\x61\x2d\x72\x65\x66\x2d\x69\x64','\x64\x61\x74\x61\x2d\x63\x6f\x6e\x74\x65\x78\x74','\x64\x61\x74\x61\x2d\x64\x69\x73\x6d\x69\x73\x73\x43\x61\x6c\x6c\x62\x61\x63\x6b','\x64\x61\x74\x61\x2d\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x64\x61\x74\x61\x2d\x6d\x6f\x64\x65','\x64\x61\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x66\x6f\x6f\x74\x65\x72','\x64\x61\x74\x61\x2d\x61\x61\x2d\x65\x78\x74\x65\x72\x6e\x61\x6c\x2d\x74\x6f\x6b\x65\x6e','\x64\x61\x74\x61\x2d\x65\x78\x74\x65\x72\x6e\x61\x6c\x2d\x69\x64','\x64\x61\x74\x61\x2d\x6c\x6f\x63\x61\x6c\x65','\x64\x61\x74\x61\x2d\x62\x79\x70\x61\x73\x73\x2d\x6d\x65\x63\x68\x61\x6e\x69\x73\x6d','\x64\x61\x74\x61\x2d\x66\x77\x63\x69\x6d','\x64\x61\x74\x61\x2d\x66\x6f\x72\x63\x65\x2d\x6a\x73\x2d\x66\x6c\x75\x73\x68','\x64\x61\x74\x61\x2d\x65\x76\x65\x6e\x74\x2d\x74\x72\x69\x67\x67\x65\x72','\x64\x61\x74\x61\x2d\x6d\x6f\x64\x61\x6c','\x43\x6c\x69\x65\x6e\x74\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x69\x73\x20\x6e\x6f\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64','\x64\x61\x74\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x4c\x6f\x61\x64\x43\x61\x6c\x6c\x62\x61\x63\x6b','\x43\x6c\x69\x65\x6e\x74\x20\x72\x65\x66\x65\x72\x65\x6e\x63\x65\x20\x69\x64\x20\x69\x73\x20\x6e\x6f\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64'];if(!data[_Oo[1]]){throw new Error(_Oo[17]);}if(!data[_Oo[4]]){throw new Error(_Oo[15]);}this.clientRequest=new ACICClientRequest_1.ACICClientRequest(data[_Oo[1]],data[_Oo[4]],data[_Oo[3]],data[_Oo[16]],data[_Oo[2]],data[_Oo[9]],data[_Oo[11]],data[_Oo[8]],data[_Oo[6]],data[_Oo[10]],data[_Oo[14]],data[_Oo[0]],data[_Oo[5]],data[_Oo[13]],data[_Oo[7]],data[_Oo[12]]);};ACIC.prototype.setupIframeEventListener=function(){var _lili=['\x6d\x65\x73\x73\x61\x67\x65',.5761569767390535,'\x73\x65\x74\x75\x70\x49\x66\x72\x61\x6d\x65\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x61\x6d\x61\x7a\x6f\x6e','\x63\x6f\x6c\x6c\x65\x63\x74\x6f\x72'];var _ll1LIL1i=_lili[3],_IIILllIi=_lili[4],_o00QO0O0=_lili[1];var _this=this;this.logger.log(_lili[2]);window.addEventListener(_lili[0],function(event){var _Iil=[1242,8216];var _SSzszSSs=_Iil[0],_LI1lLlLi=_Iil[1];return _this.handleIframeMessage(event);});};ACIC.prototype.handleIframeMessage=function(event){var _lL=['\x43\x68\x61\x6c\x6c\x65\x6e\x67\x65\x20\x43\x6f\x6d\x70\x6c\x65\x74\x65\x64',35723,'\x61\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x2d\x6c\x6f\x61\x64\x65\x64','\x61\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x2d\x73\x68\x6f\x77\x6e','\x43\x68\x61\x6c\x6c\x65\x6e\x67\x65\x20\x44\x69\x73\x6d\x69\x73\x73\x65\x64','\x61\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x2d\x63\x6f\x6d\x70\x6c\x65\x74\x65','\x61\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x2d\x72\x65\x6d\x6f\x76\x65','\x4c\x6f\x61\x64\x20\x41\x6c\x74\x65\x72\x6e\x61\x74\x65\x20\x43\x68\x61\x6c\x6c\x65\x6e\x67\x65\x20\x57\x69\x74\x68\x20\x43\x68\x61\x6c\x6c\x65\x6e\x67\x65\x20\x54\x79\x70\x65\x3a\x20',0,'\x65\x76\x65\x6e\x74\x20\x64\x61\x74\x61\x3a\x20','\x43\x68\x61\x6c\x6c\x65\x6e\x67\x65\x20\x53\x68\x6f\x77\x6e','\x65\x6e\x63\x72\x79\x70\x74\x45\x6c','\x61\x61\x2d\x6c\x6f\x61\x64\x2d\x61\x6c\x74\x65\x72\x6e\x61\x74\x65\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65','\x61\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x2d\x64\x69\x73\x6d\x69\x73\x73','\x43\x68\x61\x6c\x6c\x65\x6e\x67\x65\x20\x4c\x6f\x61\x64\x65\x64','\x52\x65\x6d\x6f\x76\x65\x20\x77\x68\x6f\x6c\x65\x2d\x70\x61\x67\x65\x20\x69\x66\x72\x61\x6d\x65\x20\x62\x65\x66\x6f\x72\x65\x20\x68\x61\x73\x68\x20\x63\x68\x61\x6e\x67\x65\x20\x66\x6f\x72\x20\x6d\x6f\x64\x65\x6c\x20\x76\x69\x65\x77\x20\x69\x6e\x20\x75\x72\x6c','\x61\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x2d\x73\x75\x70\x70\x72\x65\x73\x73\x65\x64','\x43\x68\x61\x6c\x6c\x65\x6e\x67\x65\x20\x53\x75\x70\x70\x72\x65\x73\x73\x65\x64','\x61\x6d\x61\x7a\x6f\x6e\x45\x6e\x63\x72\x79\x70\x74'];var _ZSsSz2zS=function(_SzSs$2z2,_$$Z$Z22S){var _QOO=['\x69\x64\x4c\x69\x73\x74','\x63\x61\x70\x74\x63\x68\x61\x42\x6c\x6f\x62',.12091526035389255,'\x69\x64',45168,23487];var _S$zSsZS$=_QOO[4];var _Z2z2S$s$=_QOO[2],_SZss2zs2=_QOO[5],_22S$s$Z$=_QOO[0];var _OQ00OQQQ=_QOO[1];return _QOO[3];};if(event.data){this.logger.log(_lL[9]+event.data);var _lLi11L1L=function(_zZ$sSss2){var _il=[.4212062552996152,'\x68\x61\x73\x68\x43\x61\x70\x74\x63\x68\x61'];var _sz$Szss2=_il[0];return _il[1];};var jsonParsedEvent=void _lL[8];try{var _11LiLIlI=_lL[11],_sszsSs$$=_lL[1],_O00OOOO0=_lL[18];jsonParsedEvent=JSON.parse(event.data);}catch(err){this.logger.log(err.message);return;}switch(jsonParsedEvent.eventId){case _lL[3]:this.logger.log(_lL[10]);break;case _lL[2]:this.logger.log(_lL[14]);this.resizeIframe();this.executeChallengeLoadCallback(jsonParsedEvent.payload);break;case _lL[12]:this.logger.log(_lL[7]+jsonParsedEvent.payload.challengeType);this.clientRequest.challengeTypeValue=jsonParsedEvent.payload.challengeType;this.sendArnoldHttpRequest(this.createNewSessionRequestURL());break;case _lL[16]:this.logger.log(_lL[17]);this.addResponse(jsonParsedEvent.payload);this.sendArnoldHttpRequest(this.createUserAnswerRequestURL());break;case _lL[5]:this.logger.log(_lL[0]);this.addResponse(jsonParsedEvent.payload);this.logger.log(this.currentAAmationResult);this.sendArnoldHttpRequest(this.createUserAnswerRequestURL());break;case _lL[13]:this.logger.log(_lL[4]);this.executeDismissCallback();break;case _lL[6]:this.logger.log(_lL[15]);this.removeWholePageIframe();break;}}};ACIC.prototype.resizeIframe=function(){var _sS=['\x70\x78'];var _SzsZzZsS=function(_llLliILi,_LLliiIII){var _S$=[.5331330904034115,25676,.2492160730318238,'\x63\x6f\x6c\x6c\x65\x63\x74\x6f\x72','\x6c\x69\x73\x74\x42'];var _$Z2sZ$SS=_S$[4],_oOooQQoo=_S$[0],_z2S$SsS2=_S$[1];var _II11IiLl=_S$[2];return _S$[3];};if(this.enableCustomizedIframe){this.iframe.width=this.iframe.contentWindow.document.body.scrollWidth+_sS[0];this.iframe.height=this.iframe.contentWindow.document.body.scrollHeight+_sS[0];}};ACIC.prototype.addResponse=function(userResponseData){var _11=['\x61',20123,.7056784093095438];var userResponse=new ACICUserResponse_1.ACICUserResponse(this.currentAAmationResult.actionTypeValue,JSON.stringify(userResponseData));this.currentUserResponse=userResponse;var _Q0Q0QQ00=_11[1],_$Sss2$sS=_11[2],_sZ$sS$2Z=_11[0];this.sessionContext.addResponse(userResponse);};ACIC.prototype.addResult=function(resultString){var _ss=['\x68\x61\x73\x68',null,.4654218531597545];if(!resultString){var _sss$S2Zs=_ss[2],_2zSz2zZs=_ss[0];return _ss[1];}var resultJson=JSON.parse(resultString);var result=new AAmationResult_1.AAmationResult(resultJson.clientSideContext,resultJson.sessionToken,resultJson.actionType);this.currentAAmationResult=result;this.sessionContext.addResult(result);return result;};ACIC.prototype.createNewSessionRequestURL=function(){var _s$=[11424,'\x43\x72\x65\x61\x74\x65\x4e\x65\x77\x53\x65\x73\x73\x69\x6f\x6e\x52\x65\x71\x75\x65\x73\x74\x55\x52\x4c\x3a\x20'];var url=build_url_ts_1.default(this.serviceEndpoint,{path:this.clientRequest.clientReferenceIdValue,queryParams:{context:undefined,options:JSON.stringify(this.clientRequest.clientOptions)}});var _l1LLliLL=_s$[0];this.logger.log(_s$[1]+url);return url;};ACIC.prototype.createUserAnswerRequestURL=function(){var _zs=[49597,'\x2f','\x43\x72\x65\x61\x74\x65\x55\x73\x65\x72\x41\x6e\x73\x77\x65\x72\x52\x65\x71\x75\x65\x73\x74\x55\x52\x4c\x3a\x20'];var url=build_url_ts_1.default(this.serviceEndpoint,{path:this.clientRequest.clientReferenceIdValue+_zs[1]+this.currentAAmationResult.sessionTokenValue,queryParams:{context:this.currentAAmationResult.clientSideContextValue,options:JSON.stringify(this.clientRequest.clientOptions),response:JSON.stringify(this.currentUserResponse)}});this.logger.log(_zs[2]+url);var _$sszZSZ$=_zs[0];return url;};ACIC.prototype.loadChallengeView=function(view){var _SZ=[.23163601815182622,17089,'\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x63\x61\x70\x74\x63\x68\x61\x43\x61\x70\x74\x63\x68\x61\x48\x61\x73\x68'];if(typeof this.iframe===_SZ[2]&&!this.enableCustomizedIframe){this.iframe=this.createIframe();}var _z$zs2S$2=_SZ[3],_LiilLLLl=_SZ[1],_IiL111LL=_SZ[0];var iframeDocument=this.iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(view);iframeDocument.close();};ACIC.prototype.removeWholePageIframe=function(){var _OQ=[13526,'\x72\x65\x6d\x6f\x76\x65\x57\x68\x6f\x6c\x65\x50\x61\x67\x65\x49\x66\x72\x61\x6d\x65','\x52\x65\x6d\x6f\x76\x69\x6e\x67\x20\x77\x68\x6f\x6c\x65\x2d\x70\x61\x67\x65\x20\x69\x66\x72\x61\x6d\x65\x20\x66\x72\x6f\x6d\x20\x70\x61\x67\x65\x21',.7926750228618487,'\x61\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x2d\x77\x68\x6f\x6c\x65\x2d\x70\x61\x67\x65\x2d\x69\x66\x72\x61\x6d\x65'];var _0QoQO0oQ=_OQ[3],_L1Ili1il=_OQ[0];this.logger.log(_OQ[1]);var iframe=document.getElementById(_OQ[4]);if(iframe){this.logger.log(_OQ[2]);iframe.remove();this.iframe=undefined;}};ACIC.prototype.executeDismissCallback=function(){var _$S=[];this.removeWholePageIframe();this.clientRequest.dismissCallbackFunction({});};ACIC.prototype.executeChallengeLoadCallback=function(challengeLoadData){var _sZ=[null];if(challengeLoadData==_sZ[0]){var _oQO0QQO0=function(_2sSsSsz$){var _I1L=['\x64\x61\x74\x61',.8078304027959462,.3434759974960715,5162,.8885457297275454,5807];var _111LlLL1=_I1L[3],_ooOQOOoQ=_I1L[2];var _OO0oOo0o=_I1L[4];var _iI11iilI=_I1L[1],_ilil1I11=_I1L[5];return _I1L[0];};this.clientRequest.challengeLoadCallbackFunction({height:'',width:''});}else{this.clientRequest.challengeLoadCallbackFunction({height:challengeLoadData.frameHeight,width:challengeLoadData.frameWidth});}};ACIC.prototype.executeACICCallback=function(aamationResult){var _1i=[null];if(aamationResult==_1i[0]){aamationResult=new AAmationResult_1.AAmationResult(ACIC.STATIC_CLIENT_CONTEXT,ACIC.STATIC_SESSION_TOKEN,ACIC.STATIC_ACTION_TYPE);}var _lli111L1=function(_000QoOoo){var _oOo=['\x65\x78\x65\x63\x75\x74\x65\x45\x78\x65\x63\x75\x74\x65','\x65\x78\x65\x63\x75\x74\x65\x44\x61\x74\x61\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72',30790];var _oOooOO0o=_oOo[2],_2Zzz2z$S=_oOo[0];return _oOo[1];};this.clientRequest.callbackFunction(aamationResult);};ACIC.prototype.createIframe=function(){var _Qo=['\x64\x6f\x63\x75\x6d\x65\x6e\x74','\x69\x66\x72\x61\x6d\x65',7096,'\x61\x61\x2d\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x2d\x77\x68\x6f\x6c\x65\x2d\x70\x61\x67\x65\x2d\x69\x66\x72\x61\x6d\x65'];var ifrm=document.createElement(_Qo[1]);ifrm.id=_Qo[3];document.body.appendChild(ifrm);var _ilL11IIi=_Qo[0],_o0Q0QOoQ=_Qo[2];return ifrm;};ACIC.prototype.sendArnoldHttpRequest=function(url,timeout,retryTimes){var _2Z=['\x63\x6f\x6e\x74\x65\x6e\x74','\x6d\x65\x74\x61\x5b\x6e\x61\x6d\x65\x3d\x22\x63\x73\x72\x66\x2d\x74\x6f\x6b\x65\x6e\x22\x5d','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65','\x47\x45\x54','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x50\x4f\x53\x54','\x63\x73\x72\x66\x20\x74\x6f\x6b\x65\x6e\x3a\x20','\x73\x65\x6e\x64\x41\x72\x6e\x6f\x6c\x64\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74','\x61\x70',0,true,'\x61\x6e\x74\x69\x2d\x63\x73\x72\x66\x74\x6f\x6b\x65\x6e\x2d\x61\x32\x7a','\x2e\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x69\x6d\x65',19243];var _Z22s$$2$=function(_0ooo00Qo){var _ll=['\x64\x6f\x6d\x41\x6d\x61\x7a\x6f\x6e\x4c\x69\x73\x74','\x75\x73\x65\x72\x61\x67\x65\x6e\x74\x42\x6f\x64\x79','\x62\x6f\x64\x79\x4f\x62\x66\x75\x73\x63\x61\x74\x65\x45\x6c','\x64\x6f\x6d\x45\x6c\x45\x6c','\x68\x61\x73\x68\x4e\x6f\x64\x65\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72',.7190274814701216,'\x62\x6f\x64\x79\x46\x77\x63\x69\x6d','\x6f\x62\x66\x75\x73\x63\x61\x74\x65\x4f\x62\x66\x75\x73\x63\x61\x74\x65',40942];var _QQQQQOO0=_ll[7],_LiLiliLI=_ll[8];var _zZ$Sz2Z2=_ll[1],_z$2ZZ$Z$=_ll[6],_QOOOoOOO=_ll[5];var _ss$2S$Zz=_ll[0],_S$zzZ$Z$=_ll[2],_zzZ$Ss$s=_ll[3];return _ll[4];};var _this=this;if(timeout===void _2Z[9]){timeout=ACIC.DEFAULT_REQUEST_TIMEOUT;}if(retryTimes===void _2Z[9]){var _O0OQOOoo=function(_Z$$sZ2$s,_l1l11IiI){var _ZS=[33143,'\x6c\x69\x73\x74\x42',47735,'\x65\x78\x65\x63\x75\x74\x65\x44\x6f\x6d'];var _SSzS2zZs=_ZS[1],_iil11iil=_ZS[2],_11iliiIl=_ZS[3];return _ZS[0];};retryTimes=ACIC.DEFAULT_RETRY_TIMES;}this.logger.log(_2Z[7]);var responseTimeMetricName=_2Z[12];var xhr=new XMLHttpRequest();if(this.clientRequest.clientReferenceIdValue===_2Z[8]||this.useRequestMethodPost){xhr.open(_2Z[5],url,_2Z[10]);responseTimeMetricName=_2Z[5]+responseTimeMetricName;}else{xhr.open(_2Z[3],url,_2Z[10]);responseTimeMetricName=_2Z[3]+responseTimeMetricName;}xhr.setRequestHeader(_2Z[2],_2Z[4]);if(this.iframe){var csrfTokenTag=this.iframe.contentDocument.head.querySelector(_2Z[1]);if(csrfTokenTag){var _1ILIIlLI=_2Z[13];this.csrfToken=csrfTokenTag.getAttribute(_2Z[0]);this.logger.log(_2Z[6]+this.csrfToken);xhr.setRequestHeader(_2Z[11],this.csrfToken);}}xhr.timeout=timeout;var requestStartTime=new Date().valueOf();xhr.send(JSON.stringify({context:this.getclientSideContext(),options:JSON.stringify(this.clientRequest.clientOptions),response:JSON.stringify(this.currentUserResponse),fwcimBlob:this.clientRequest.fwcimBlobValue}));xhr.onerror=function(){var _O0=['\x62\x43\x61\x70\x74\x63\x68\x61\x42\x6c\x6f\x62',1,'\x20\x72\x65\x74\x72\x69\x65\x73\x20\x72\x65\x6d\x61\x69\x6e\x69\x6e\x67\x2e','\x4e\x65\x74\x77\x6f\x72\x6b\x20\x45\x72\x72\x6f\x72\x3a\x20',.0695099943933668,.6114575982826402,17515,'\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72\x2e',0,null,'\x65\x6e\x63\x72\x79\x70\x74\x42\x6f\x64\x79'];if(retryTimes==_O0[8]){_this.acicKatalLogger.error(_O0[7],{'\x55\x52\x4c':url});if(_this._onerror){var _$222zZSs=_O0[4],_2sS2ZS$s=_O0[10];_this._onerror(new ACICError_1.ACICError());}else{var _I1LLiILl=_O0[6],_szZZSz$2=_O0[0],_2Z2$$$Sz=_O0[5];_this.executeACICCallback(_O0[9]);}}else{_this.acicKatalLogger.error(_O0[3]+retryTimes+_O0[2],{'\x55\x52\x4c':url});_this.sendArnoldHttpRequest(url,undefined,retryTimes-_O0[1]);}};xhr.ontimeout=function(){var _sSz=[null,'\x54\x69\x6d\x65\x6f\x75\x74\x3a\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x6f\x6f\x6b\x20\x6c\x6f\x6e\x67\x65\x72\x20\x74\x68\x61\x6e\x20\x65\x78\x70\x65\x63\x74\x65\x64\x2e',22431];_this.acicKatalLogger.error(_sSz[1],{'\x55\x52\x4c':url});if(_this._onerror){_this._onerror(new ACICError_1.ACICError());}else{var _0OQO000O=_sSz[2];_this.executeACICCallback(_sSz[0]);}};xhr.onload=function(){var _SZZ=['\x73\x65\x6e\x64\x41\x72\x6e\x6f\x6c\x64\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74'];var requestEndTime=new Date().valueOf();_this.acicKatalMetricsPublisher.newChildActionPublisherForMethod(_SZZ[0]).publishTimerMonitor(responseTimeMetricName,requestEndTime-requestStartTime);_this.processArnoldHttpResponse(xhr);};};ACIC.prototype.getclientSideContext=function(){var _ilL=[null];if(this.currentAAmationResult){var _L1lILiiL=function(_zz2S2Sz$,_zzZZs2SZ){var _Z2=[.42615923518542953,'\x6e\x6f\x64\x65',.9327595726616649,.5520515574117408,'\x61\x6d\x61\x7a\x6f\x6e\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72'];var _zz$sZzs$=_Z2[4],_2S$Z$$2$=_Z2[3];var _QQoOO000=_Z2[0],_LIlllILL=_Z2[2];return _Z2[1];};return this.currentAAmationResult.clientSideContextValue;}return _ilL[0];};ACIC.prototype.processArnoldHttpResponse=function(xhr){var _lL1=[.9418332225108346,.6303306018178714,'\x52\x65\x73\x70\x6f\x6e\x73\x65\x48\x65\x61\x64\x65\x72\x20\x69\x73\x20\x6e\x75\x6c\x6c\x2e','\x62\x6c\x6f\x62\x44\x6f\x6d',null,200,'\x48\x54\x54\x50\x20\x45\x72\x72\x6f\x72\x20','\x70\x72\x6f\x63\x65\x73\x73\x41\x72\x6e\x6f\x6c\x64\x48\x74\x74\x70\x52\x65\x73\x70\x6f\x6e\x73\x65','\x62\x6c\x6f\x62','\x2e'];this.logger.log(_lL1[7]);var status=xhr.status;this.logger.log(status);if(status!=_lL1[5]){this.acicKatalLogger.error(_lL1[6]+status+_lL1[9],{'\x53\x74\x61\x74\x75\x73':xhr.statusText});var _$Zzz$Z$Z=_lL1[8],_l11iIi11=_lL1[0];this.executeACICCallback(_lL1[4]);}else{var aamationResult=this.addResult(xhr.getResponseHeader(ACIC.AAMATION_SERVICE_RESPONSE_HEADER));var _l1I1111l=_lL1[3],_O0oOOQ0Q=_lL1[1];this.logger.log(aamationResult);if(!aamationResult){this.acicKatalLogger.error(_lL1[2],{'\x52\x65\x73\x70\x6f\x6e\x73\x65\x55\x52\x4c':xhr.responseURL,'\x52\x65\x73\x70\x6f\x6e\x73\x65\x54\x65\x78\x74':!!xhr.responseText,'\x52\x65\x73\x70\x6f\x6e\x73\x65\x48\x65\x61\x64\x65\x72':xhr.getResponseHeader(ACIC.AAMATION_SERVICE_RESPONSE_HEADER)});this.executeACICCallback(_lL1[4]);}else if(aamationResult.actionTypeValue==ACIC.AAMATION_PASS_ACTION_TYPE){var _2$zZ2zZS=function(_ssszS$ZS,_ss22ZsS2){var _2z=['\x62\x6c\x6f\x62\x41',872,25144,'\x64\x6f\x6d\x4f\x62\x66\x75\x73\x63\x61\x74\x65'];var _1III1lil=_2z[1],_$szS2$Sz=_2z[2];var _i11ilLl1=_2z[3];return _2z[0];};this.executeACICCallback(aamationResult);}else if(this.mode&&ACIC.DETECTION_ONLY_MODEL===this.mode){var _S$zzS$sz=function(_ooQ00QOO,_ooQoQOQ0){var _0O=[.5988155235557251,.6498285287652179];var _$Zzs$2Zs=_0O[0];return _0O[1];};this.executeACICCallback(aamationResult);}else{var view=xhr.responseText;this.loadChallengeView(view);}}};ACIC.DEFAULT_REQUEST_TIMEOUT=_I1[3];ACIC.DEFAULT_RETRY_TIMES=_I1[5];ACIC.AAMATION_SERVICE_RESPONSE_HEADER=_I1[6];ACIC.AAMATION_PASS_ACTION_TYPE=_I1[12];ACIC.SERVICE_BASE_PATH=_I1[14];ACIC.STATIC_CLIENT_CONTEXT=_I1[7];ACIC.STATIC_SESSION_TOKEN=_I1[8];ACIC.STATIC_ACTION_TYPE=_I1[12];ACIC.DETECTION_ONLY_MODEL=_I1[9];ACIC.KATAL_METRICS_SERVICE_NAME=_I1[2];return ACIC;}();exports.ACIC=ACIC;

/***/ }),

/***/ "./src/css/iframe.css":
/*!****************************!*\
  !*** ./src/css/iframe.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./iframe.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/iframe.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/data/AAmationResult.ts":
/*!************************************!*\
  !*** ./src/data/AAmationResult.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65',{value:true});var AAmationResult=function(){var _ILl=['\x73\x65\x73\x73\x69\x6f\x6e\x54\x6f\x6b\x65\x6e\x56\x61\x6c\x75\x65','\x61\x63\x74\x69\x6f\x6e\x54\x79\x70\x65\x56\x61\x6c\x75\x65',true,'\x63\x6c\x69\x65\x6e\x74\x53\x69\x64\x65\x43\x6f\x6e\x74\x65\x78\x74\x56\x61\x6c\x75\x65'];function AAmationResult(clientSideContext,sessionToken,actionType){this.clientSideContext=clientSideContext;this.sessionToken=sessionToken;this.actionType=actionType;}Object.defineProperty(AAmationResult.prototype,_ILl[3],{get:function(){var _lli=[];return this.clientSideContext;},enumerable:_ILl[2],configurable:_ILl[2]});Object.defineProperty(AAmationResult.prototype,_ILl[0],{get:function(){var _0o=[];var _S$$s22ZS=function(_0OQ0Q0Qo,_l1iL1ill){var _Q0o=[.5239053824230682,.7572466890529526,'\x68\x61\x73\x68\x4a\x73\x6f\x6e'];var _2S2s$sss=_Q0o[1];var _IiiLLiIl=_Q0o[2];return _Q0o[0];};return this.sessionToken;},enumerable:_ILl[2],configurable:_ILl[2]});Object.defineProperty(AAmationResult.prototype,_ILl[1],{get:function(){var _OOQ=[];return this.actionType;},enumerable:_ILl[2],configurable:_ILl[2]});return AAmationResult;}();exports.AAmationResult=AAmationResult;

/***/ }),

/***/ "./src/data/ACICClientRequest.ts":
/*!***************************************!*\
  !*** ./src/data/ACICClientRequest.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65',{value:true});var ACICClientRequest=function(){var _OQo=[false,.4699106913234301,'\x63\x6c\x69\x65\x6e\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x63\x61\x6c\x6c\x62\x61\x63\x6b\x46\x75\x6e\x63\x74\x69\x6f\x6e','\x66\x77\x63\x69\x6d\x42\x6c\x6f\x62\x56\x61\x6c\x75\x65','\x63\x6c\x69\x65\x6e\x74\x52\x65\x66\x65\x72\x65\x6e\x63\x65\x49\x64\x56\x61\x6c\x75\x65','\x64\x69\x73\x6d\x69\x73\x73\x43\x61\x6c\x6c\x62\x61\x63\x6b\x46\x75\x6e\x63\x74\x69\x6f\x6e','\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x54\x79\x70\x65\x56\x61\x6c\x75\x65','\x64\x6f\x6d','\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x4c\x6f\x61\x64\x43\x61\x6c\x6c\x62\x61\x63\x6b\x46\x75\x6e\x63\x74\x69\x6f\x6e','\x75\x73\x65\x72\x4c\x61\x6e\x67\x75\x61\x67\x65',null,true];function ACICClientRequest(clientReferenceId,callback,dismissCallback,challengeLoadCallback,clientData,locale,fwcimBlob,externalId,enableHeaderFooter,enableBypassMechanism,enableModalView,challengeType,mode,eventTrigger,aaExternalToken,forceJsFlush){this.clientReferenceId=clientReferenceId;this.callback=callback;this.dismissCallback=dismissCallback||this.defaultDismissCallback;this.challengeLoadCallback=challengeLoadCallback||this.defaultChallengeLoadCallback;this.clientData=clientData||_OQo[11];var _2Zsz$SzS=_OQo[8],_QOQo0o00=_OQo[1];this.externalId=externalId||_OQo[11];this.locale=locale||navigator.language||window.navigator[_OQo[10]];this.fwcimBlob=fwcimBlob||_OQo[11];this.enableHeaderFooter=enableHeaderFooter==_OQo[0]?enableHeaderFooter:_OQo[12];this.enableBypassMechanism=enableBypassMechanism==_OQo[12]?enableBypassMechanism:_OQo[0];this.enableModalView=enableModalView==_OQo[12]?enableModalView:_OQo[0];this.challengeType=challengeType||_OQo[11];this.mode=mode||_OQo[11];this.eventTrigger=eventTrigger||_OQo[11];this.aaExternalToken=aaExternalToken||_OQo[11];this.forceJsFlush=forceJsFlush==_OQo[12]?forceJsFlush:_OQo[0];}ACICClientRequest.prototype.defaultDismissCallback=function(){var _0OO=['\x44\x69\x73\x6d\x69\x73\x73\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x6e\x6f\x74\x20\x73\x70\x65\x63\x69\x66\x69\x65\x64',null];console.log(_0OO[0]);return _0OO[1];};ACICClientRequest.prototype.defaultChallengeLoadCallback=function(){var _I1i=['\x43\x6c\x69\x65\x6e\x74\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x6e\x6f\x74\x20\x73\x70\x65\x63\x69\x66\x69\x65\x64\x20\x66\x6f\x72\x20\x63\x68\x61\x6c\x6c\x65\x6e\x67\x65\x20\x70\x61\x67\x65',null];console.log(_I1i[0]);return _I1i[1];};Object.defineProperty(ACICClientRequest.prototype,_OQo[5],{get:function(){var _OQoO=[];return this.clientReferenceId;},enumerable:_OQo[12],configurable:_OQo[12]});Object.defineProperty(ACICClientRequest.prototype,_OQo[4],{get:function(){var _Il1=['\x61\x6d\x61\x7a\x6f\x6e\x42\x6c\x6f\x62',41539];var _QOoO0o0o=_Il1[0],_ilLllIIi=_Il1[1];return this.fwcimBlob;},enumerable:_OQo[12],configurable:_OQo[12]});Object.defineProperty(ACICClientRequest.prototype,_OQo[3],{get:function(){var _oO0Q=[];return this.callback;},enumerable:_OQo[12],configurable:_OQo[12]});Object.defineProperty(ACICClientRequest.prototype,_OQo[6],{get:function(){var _1Ll=[];return this.dismissCallback;},enumerable:_OQo[12],configurable:_OQo[12]});Object.defineProperty(ACICClientRequest.prototype,_OQo[9],{get:function(){var _zZ2=[];return this.challengeLoadCallback;},enumerable:_OQo[12],configurable:_OQo[12]});Object.defineProperty(ACICClientRequest.prototype,_OQo[2],{get:function(){var _oOo0=[];return{clientData:this.clientData,challengeType:this.challengeType,locale:this.locale,externalId:this.externalId,enableHeaderFooter:this.enableHeaderFooter,enableBypassMechanism:this.enableBypassMechanism,enableModalView:this.enableModalView,eventTrigger:this.eventTrigger,aaExternalToken:this.aaExternalToken,forceJsFlush:this.forceJsFlush};},enumerable:_OQo[12],configurable:_OQo[12]});Object.defineProperty(ACICClientRequest.prototype,_OQo[7],{get:function(){var _$Z=[];var _oQ0QOo0o=function(_SSSs2SZz,_Oo0Q0o0o,_ILIILlIl){var _0Q=[.10528451045450704,'\x61\x4c\x69\x73\x74','\x61'];var _I1IL111L=_0Q[1];var _0QQO00Oo=_0Q[2];return _0Q[0];};return this.challengeType;},set:function(challengeType){var _$$=[];var _1l11i1Ii=function(_$zS$sszs,_z2Z2szzS){var _Q0=['\x63\x61\x70\x74\x63\x68\x61',.5264010364451843,43525];var _0QoOo0OO=_Q0[1],_lIliIiII=_Q0[2];return _Q0[0];};this.challengeType=challengeType;},enumerable:_OQo[12],configurable:_OQo[12]});return ACICClientRequest;}();exports.ACICClientRequest=ACICClientRequest;

/***/ }),

/***/ "./src/data/ACICError.ts":
/*!*******************************!*\
  !*** ./src/data/ACICError.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65',{value:true});var ACICError=function(){var _lI1=['\x65\x6c\x42\x43\x61\x70\x74\x63\x68\x61',24024];function ACICError(){}var _$2ZSzZ$Z=_lI1[0],_S$zs$z$s=_lI1[1];return ACICError;}();exports.ACICError=ACICError;

/***/ }),

/***/ "./src/data/ACICSessionContext.ts":
/*!****************************************!*\
  !*** ./src/data/ACICSessionContext.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65',{value:true});var ACICSessionContext=function(){var _i1I=[];function ACICSessionContext(){this.aamationResults=[];this.userResponses=[];}ACICSessionContext.prototype.addResponse=function(response){var _iil=[];this.userResponses.push(response);};ACICSessionContext.prototype.addResult=function(result){var _S$$=[.2142333664374807,'\x64\x61\x74\x61',45214];var _Zz$Sz2zZ=_S$$[2],_illiIilL=_S$$[0],_sZss2sSs=_S$$[1];this.aamationResults.push(result);};return ACICSessionContext;}();exports.ACICSessionContext=ACICSessionContext;

/***/ }),

/***/ "./src/data/ACICUserResponse.ts":
/*!**************************************!*\
  !*** ./src/data/ACICUserResponse.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65',{value:true});var ACICUserResponse=function(){var _Q0Q=[.6261019013659819,'\x73\x74\x61\x74\x65\x6d\x65\x6e\x74\x42\x6f\x64\x79'];function ACICUserResponse(challengeType,data){var _OoQQQO0Q=_Q0Q[0],_zsZzzsZz=_Q0Q[1];this.challengeType=challengeType;this.data=data;}return ACICUserResponse;}();exports.ACICUserResponse=ACICUserResponse;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65',{value:true});var acic_1=__webpack_require__(/*! ./acic */ "./src/acic.ts");var katal_logger_1=__webpack_require__(/*! @amzn/katal-logger */ "./node_modules/@amzn/katal-logger/dist/index.js");var KatalEndpointResolver_1=__webpack_require__(/*! ./KatalEndpointResolver */ "./src/KatalEndpointResolver.ts");if(!String.prototype.startsWith){console.log('\x41\x64\x64\x69\x6e\x67\x20\x70\x6f\x6c\x79\x66\x69\x6c\x6c\x20\x66\x6f\x72\x20\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68');Object.defineProperty(String.prototype,'\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68',{value:function(search,rawPos){var _iL=[0];var pos=rawPos>_iL[0]?rawPos|_iL[0]:_iL[0];return this.substring(pos,pos+search.length)===search;}});}if(!String.prototype.endsWith){var _QoQOOOOo=.5055489050357977,_s22sSz2z=.403040743386905;console.log('\x41\x64\x64\x69\x6e\x67\x20\x70\x6f\x6c\x79\x66\x69\x6c\x6c\x20\x66\x6f\x72\x20\x65\x6e\x64\x73\x57\x69\x74\x68');String.prototype.endsWith=function(search,this_len){var _1L=[21004,16026];if(this_len===undefined||this_len>this.length){var _OQOOO0QO=_1L[0],_1lIIiIi1=_1L[1];this_len=this.length;}var _lLI1iiI1=function(_0OQoQQoQ){var _o0=[.21726694752874987,.00539208422020554,.41344400708181683,'\x62\x6f\x64\x79\x41\x44\x6f\x6d',.10896963315765129];var _Z2Ss2zZZ=_o0[3];var _z2ZSSSz$=_o0[4],_ZzsZsszs=_o0[0],_sSS2SszS=_o0[1];return _o0[2];};return this.substring(this_len-search.length,this_len)===search;};}var acicKatalLogger=new katal_logger_1.default({url:KatalEndpointResolver_1.KatalEndpointResolver.getKatalLoggerEndpoint()});acicKatalLogger.addErrorListener(function(error){var _QO=[2350,true,'\x65\x6e\x63\x72\x79\x70\x74\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72\x42\x6f\x64\x79'];var _Q0QOooOQ=_QO[2],_$2ZsZSs$=_QO[0];return _QO[1];});var acic=new acic_1.ACIC(acicKatalLogger);window.acic=acic;

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** ./nodejsShims (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** ./nodejsShims (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
/////////////////////////
// END FILE js/acic.js
/////////////////////////
/////////////////////////
// BEGIN FILE js/register-acic.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
if (P && P.AUI_BUILD_DATE) {
    P.when('A', 'ready').register('acic-component', function(A) {
        return;
    });
}
/////////////////////////
// END FILE js/register-acic.js
/////////////////////////

// END ASSET ACICAssets-1.0.17528.0
}));
////////////////////////////////////////////