/// <reference path="typings/node/node.d.ts" />
var assert = require('assert');
var util = require('util');
var reflection = require('./reflection');
reflection.ensureJvm().then(function () {
    var Long = reflection.importClass('Long');
    var longnum = new Long('123456');
    var object = reflection.newInstanceSync('java.lang.Object');
    var clazz = object.getClass();
    var str = clazz.getName();
    assert.strictEqual(util.inspect(longnum), "{ [Number: 123456] longValue: '123456' }");
    assert.strictEqual(str, 'java.lang.Object');
    console.log('ok');
});
//# sourceMappingURL=index.js.map