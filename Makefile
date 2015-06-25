.PHONY: default test compile clean

default: test

ALL_TS_SRC=$(filter-out %.d.ts,$(wildcard *.ts))
ALL_TS_OBJ=$(patsubst %.ts,%.js,$(ALL_TS_SRC))

TSC=./node_modules/.bin/tsc
TSC_OPTS=--module commonjs --target ES5 --sourceMap --noEmitOnError --noImplicitAny --declaration

%.js: %.ts
	$(TSC) $(TSC_OPTS) $< || (rm -f $@ && false)

compile: $(ALL_TS_OBJ)

test: $(ALL_TS_OBJ)
	node index.js

clean:
	rm -f $(ALL_TS_OBJ)
