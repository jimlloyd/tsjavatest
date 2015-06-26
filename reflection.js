// reflection.ts
/// <reference path="typings/java/java.d.ts" />
/// <reference path="typings/bluebird/bluebird.d.ts" />
var _java = require('java');
var BluePromise = require('bluebird');
_java.asyncOptions = {
    syncSuffix: "",
    asyncSuffix: "A",
    promiseSuffix: "P",
    promisify: BluePromise.promisify
};
_java.registerClientP(function () {
    // TODO: If this were a module that required adding anything to the classpath, we'd do it here.
    return BluePromise.resolve();
});
var _Module;
(function (_Module) {
    'use strict';
    function ensureJvm() {
        return _java.ensureJvm();
    }
    _Module.ensureJvm = ensureJvm;
    var shortToLongMap = {
        // TODO: All short to full name mappings
        'Object': 'java.lang.Object',
        'String': 'java.lang.String',
        'Long': 'java.lang.Long'
    };
    function importClass(className) {
        if (className in shortToLongMap) {
            className = shortToLongMap[className];
        }
        return _java.import(className);
    }
    _Module.importClass = importClass;
    // TODO: All overloads of newInstanceSync
    function newInstanceSync(className) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        args.unshift(className);
        return _java.newInstanceSync.apply(_java, args);
    }
    _Module.newInstanceSync = newInstanceSync;
})(_Module || (_Module = {}));
module.exports = _Module;
//# sourceMappingURL=reflection.js.map