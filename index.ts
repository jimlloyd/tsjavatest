/// <reference path="typings/node/node.d.ts" />

import assert = require('assert');
import util = require('util');
import BluePromise = require('bluebird');
import reflection = require('./reflection');

reflection.ensureJvm()
  .then(() => {

    var Long: reflection.Long.Static = reflection.importClass('Long');
    var longnum: reflection.long_t = new Long('123456');

    var object: reflection.Object = reflection.newInstanceSync('java.lang.Object');
    var clazz: reflection.Class = object.getClass();
    var str: string = clazz.getName();

    assert.strictEqual(util.inspect(longnum), "{ [Number: 123456] longValue: '123456' }");
    assert.strictEqual(str, 'java.lang.Object');

    console.log('ok');

  });
