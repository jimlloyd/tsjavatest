/// <reference path="typings/node/node.d.ts" />

import assert = require('assert');
import util = require('util');
import BluePromise = require('bluebird');
import reflection = require('./reflection');

import JavaReflection = reflection.JavaReflection;

// TODO: move this into reflection.ts
reflection.java.asyncOptions = {
    "syncSuffix": "",
    "asyncSuffix": "A",
    "promiseSuffix": "P",
    promisify: BluePromise.promisify
};

// TODO: reflection.ts should export the function import(), which will call java.import().
var Long: JavaReflection.Long.Static = reflection.java.import('java.lang.Long');
var longnum: JavaReflection.long_t = new Long('123456');

// TODO: reflection.ts should export newInstanceSync(), which will call java.import().
var object: JavaReflection.Object = reflection.java.newInstanceSync('java.lang.Object');
var clazz: JavaReflection.Class = object.getClass();
var str: string = clazz.getName();

assert.strictEqual(util.inspect(longnum), "{ [Number: 123456] longValue: '123456' }");
assert.strictEqual(str, 'java.lang.Object');

console.log('ok');

