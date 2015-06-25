// java.d.ts
// This file will be published in DefinitelyTyped as java/java.d.ts

declare module 'java' {
  var Java: Java.NodeAPI;
  export = Java;
}

declare module Java {
  export interface Callback<T> {
    (err?: Error, result?: T): void;
  }

  interface Promisify {
    (funct: Function, receiver?: any): Function;
  }

  interface AsyncOptions {
    syncSuffix: string;
    asyncSuffix?: string;
    promiseSuffix?: string;
    promisify?: Promisify;
  }

  // *NodeAPI* declares methods & members exported by the node java module.
  interface NodeAPI {
    classpath: string[];
    asyncOptions: AsyncOptions;
    callMethod(instance: any, className: string, methodName: string, args: any[], callback: Callback<any>): void;
    callMethodSync(instance: any, className: string, methodName: string, ...args: any[]): any;
    callStaticMethodSync(className: string, methodName: string, ...args: any[]): any;
    instanceOf(javaObject: any, className: string): boolean;
    registerClient(before: (cb: Callback<void>) => void, after?: (cb: Callback<void>) => void): void;
    registerClientP(beforeP: () => Promise<void>, afterP?: () => Promise<void>): void;
    ensureJvm(done: Callback<void>): void;
    ensureJvm(): Promise<void>;

    import(className: string): any;
    newInstance(className: string, ...args: any[]): void;
    newInstanceSync(className: string, ...args: any[]): any;
    newInstancePromise(className: string, ...args: any[]): Promise<any>;
    newArray<T>(className: string, arg: any[]): any;
  }
}
