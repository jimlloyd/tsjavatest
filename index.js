/// <reference path="typings/node/node.d.ts" />
var assert = require('assert');
var util = require('util');
var BluePromise = require('bluebird');
var reflection = require('./reflection');
// TODO: move this into reflection.ts
reflection.java.asyncOptions = {
    "syncSuffix": "",
    "asyncSuffix": "A",
    "promiseSuffix": "P",
    promisify: BluePromise.promisify
};
// TODO: reflection.ts should export the function import(), which will call java.import().
var Long = reflection.java.import('java.lang.Long');
var longnum = new Long('123456');
// TODO: reflection.ts should export newInstanceSync(), which will call java.import().
var object = reflection.java.newInstanceSync('java.lang.Object');
var clazz = object.getClass();
var str = clazz.getName();
assert.strictEqual(util.inspect(longnum), "{ [Number: 123456] longValue: '123456' }");
assert.strictEqual(str, 'java.lang.Object');
console.log('ok');
//# sourceMappingURL=index.js.map