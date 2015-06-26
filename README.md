# tsjavatest
A quick hack to show one way ts-java could generate composable modules

## Problem
Currently `ts-java` forces an app developer to configure all Java classes the app will need with one configuration file. It is effectively impossible to create composable modules, each with only the Java classes needed for the module.

## Planned Solution

#### Reduce java.d.ts to bare essentials, published in DefinitelyTyped

`ts-java` currently generates a `java.d.ts` file which claims to be the interface for the npm module [java](https://www.npmjs.com/package/java), even though the interface includes Java classes that will only be present in any application that uses the `java.d.ts` file if the application arranges to load the jars containing those classes. 

The `java` module should have a `java.d.ts` file that specifies the functional interface directly exposed by it, usable by any Typescript application that uses `java`, whether that application uses `ts-java` or not. That `java.d.ts` file could declare a few Java classes that any such Typescript application would likely use (e.g. `java.lang.Object`, `java.lang.String`, etc.) but as the sample code in this project demonstrates, it isn't necessary.

#### Generate a Typescript source file with both Java interfaces and glue code.

`ts-java` currently can optionally generated an `autoImport.ts` file, which contains a small amount of glue code to provide the `autoImport()` function for importing Java classes using their short name. The revised `ts-java` will enhance this functionality. The `ts-java` configuration will specify the name of the file to be produced, which should be named after the Java API that is being exposed. For example, the Java Refection API might be exposed in a file `java-reflection.ts`. This file would contain the interfaces for all of the Java classes. It would also contain implementations of methods such as `import()` and `newInstance()`. Since `import()` will be implemented, it should be possible to build the functionality of `autoImport()` into `import()`, so that classes can be imported by either their short class name or their full class path.

#### Composability

An application will be able tp use two or more `ts-java` generated Typescript modules. Each module will have its own independent namespace of Java classes. All such modules will include at least some core classes (`java.lang.Object`, etc.), possibly many such classes. It does not seem possible to exploit declaration merging so that the are all included in one global `Java` module as currently done by `ts-java`, but it's unnecessary to do so. An application should be able to create an object in one module, and the pass it to a function in another module, with type safety, since Typescript uses [structural typing](http://www.typescriptlang.org/Handbook#type-compatibility).

## About this project's code

#### typings/java/java.d.ts

This git repository includes the file `typings/java/java.d.ts`, which was manually created by editing a `java.d.ts` file generated with the current `ts-java`. A version of this file will be published in DefinitelyTyped, but it is convenient in this project to commit the file, so that it can be revised without updating DefinitelyTyped.

#### reflection.ts

This file illustrates the expected output of ts-java. We named it `reflection.ts` as if it would be used to implement the Java Reflection API, but for simplicity it includes only a subset of that API.

Note that the `reflection.ts` here is still a work in progress. Some of the necessary changes are called out with TODO comments.

#### index.ts

This file represents an application using using reflection.ts.
