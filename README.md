# tsjavatest
A quick hack to show one way ts-java could generate composable modules

**Problem**: Currently ts-java forces an app developer to configure all Java classes the app will need with one configuration file. It is effectively impossible to create composable modules, each with only the Java classes needed for the module.

**Possible Solution**: 

1. Create one java.d.ts file that declares just the javascript interface exposed by node-java, but does not declare interfaces for any Java classes -- not even java.lang.Object. This java.d.ts file can be published in DefinitelyTyped, and in theory needs updating only when node-java introduces new APIs.
2. Modify ts-java so that instead of creating a .d.ts file, it generates a .ts file. ts-java already can produce the `autoImport.ts` file. We essentially will just enhance the content of this file, and give it a better name. For clarity, let's assume we're creating a module that exposes the Java Reflection API, and we choose to call the file `reflection.ts`. The file will contain declarations for all of the java classes needed by the reflection API (including `java.lang.Object`, `java.lang.String`, etc.) rather than obtaining then from the `java.d.ts` file.
3. The autoImport functionality will automatically be included.
4. Each such .ts file created by ts-java will have to declare an outer module equivalent to the `Java` module ts-java has been creating in java.d.ts. It would be nice if we could always use `Java` as the name of this outer module, and take advantage of declaration merging, but it seems that Typescript doesn't allow this.

