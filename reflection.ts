// reflection.ts
/// <reference path="typings/java/java.d.ts" />
/// <reference path="typings/bluebird/bluebird.d.ts" />

export import java = require('java');
export module JavaReflection {
  'use strict';

  // Node-java has special handling for methods that return long or java.lang.Long,
  // returning a Javascript Number but with an additional property longValue.
  export interface longValue_t extends Number {
    longValue: string;
  }

  // Node-java can automatically coerce a javascript string into a java.lang.String.
  // This special type alias allows to declare that possiblity to Typescript.
  export type string_t = string | java.lang.String;

  // Java methods that take java.lang.Object parameters implicitly will take a java.lang.String.
  // But string_t is not sufficient for this case, we need object_t.
  export type object_t = java.lang.Object | string | boolean | number | longValue_t;

  // Java methods that take long or java.lang.Long parameters may take javascript numbers,
  // longValue_t (see above) or java.lang.Long.
  // This special type alias allows to declare that possiblity to Typescript.
  export type long_t = number | longValue_t | java.lang.Long;

  // Handling of other primitive numeric types is simpler, as there is no loss of precision.
  export type boolean_t = boolean | java.lang.Boolean;

  export interface array_t<T> extends java.lang.Object {
    // This is an opaque type for a java array_t T[];
    // Use Java.newArray<T>(className, [...]) to create wherever a Java method expects a T[],
    // most notably for vararg parameteters.
    __dummy: T;
  }

  export type object_array_t = array_t<java.lang.Object> | object_t[];

  export import Callback = Java.Callback;

  export import Boolean = java.lang.Boolean;
  export import Class = java.lang.Class;
  export import Long = java.lang.Long;
  export import Object = java.lang.Object;
  export import String = java.lang.String;

  export module java.lang {
    export interface Boolean extends JavaReflection.java.lang.Object {
      // public boolean java.lang.Boolean.booleanValue()
      booleanValueA( cb: Callback<boolean>): void;
      booleanValue(): boolean;
      booleanValueP(): Promise<boolean>;
      // public int java.lang.Boolean.compareTo(java.lang.Boolean)
      compareToA(arg0: boolean_t, cb: Callback<object_t>): void;
      compareTo(arg0: boolean_t): object_t;
      compareToP(arg0: boolean_t): Promise<object_t>;
      // public int java.lang.Boolean.compareTo(java.lang.Object)
      compareToA(arg0: object_t, cb: Callback<object_t>): void;
      compareTo(arg0: object_t): object_t;
      compareToP(arg0: object_t): Promise<object_t>;
      // public boolean java.lang.Object.equals(java.lang.Object)
      equalsA(arg0: object_t, cb: Callback<boolean>): void;
      equals(arg0: object_t): boolean;
      equalsP(arg0: object_t): Promise<boolean>;
      // public final native java.lang.Class<?> java.lang.Object.getClass()
      getClassA( cb: Callback<Class>): void;
      getClass(): Class;
      getClassP(): Promise<Class>;
      // public native int java.lang.Object.hashCode()
      hashCodeA( cb: Callback<object_t>): void;
      hashCode(): object_t;
      hashCodeP(): Promise<object_t>;
      // public final native void java.lang.Object.notify()
      notifyA( cb: Callback<void>): void;
      notify(): void;
      notifyP(): Promise<void>;
      // public final native void java.lang.Object.notifyAll()
      notifyAllA( cb: Callback<void>): void;
      notifyAll(): void;
      notifyAllP(): Promise<void>;
      // public java.lang.String java.lang.Object.toString()
      toStringA( cb: Callback<string>): void;
      toString(): string;
      toStringP(): Promise<string>;
      // public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
      waitA(arg0: long_t, arg1: object_t, cb: Callback<void>): void;
      wait(arg0: long_t, arg1: object_t): void;
      waitP(arg0: long_t, arg1: object_t): Promise<void>;
      // public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
      waitA(arg0: long_t, cb: Callback<void>): void;
      wait(arg0: long_t): void;
      waitP(arg0: long_t): Promise<void>;
      // public final void java.lang.Object.wait() throws java.lang.InterruptedException
      waitA( cb: Callback<void>): void;
      wait(): void;
      waitP(): Promise<void>;
    }
    export module Boolean {
      export interface Static {
        new (arg0: string_t): java.lang.Boolean;
        new (arg0: boolean_t): java.lang.Boolean;
        // public static int java.lang.Boolean.compare(boolean,boolean)
        compareA(arg0: boolean_t, arg1: boolean_t, cb: Callback<object_t>): void;
        compare(arg0: boolean_t, arg1: boolean_t): object_t;
        compareP(arg0: boolean_t, arg1: boolean_t): Promise<object_t>;
        // public static boolean java.lang.Boolean.getBoolean(java.lang.String)
        getBooleanA(arg0: string_t, cb: Callback<boolean>): void;
        getBoolean(arg0: string_t): boolean;
        getBooleanP(arg0: string_t): Promise<boolean>;
        // public static int java.lang.Boolean.hashCode(boolean)
        hashCodeA(arg0: boolean_t, cb: Callback<object_t>): void;
        hashCode(arg0: boolean_t): object_t;
        hashCodeP(arg0: boolean_t): Promise<object_t>;
        // public static boolean java.lang.Boolean.logicalAnd(boolean,boolean)
        logicalAndA(arg0: boolean_t, arg1: boolean_t, cb: Callback<boolean>): void;
        logicalAnd(arg0: boolean_t, arg1: boolean_t): boolean;
        logicalAndP(arg0: boolean_t, arg1: boolean_t): Promise<boolean>;
        // public static boolean java.lang.Boolean.logicalOr(boolean,boolean)
        logicalOrA(arg0: boolean_t, arg1: boolean_t, cb: Callback<boolean>): void;
        logicalOr(arg0: boolean_t, arg1: boolean_t): boolean;
        logicalOrP(arg0: boolean_t, arg1: boolean_t): Promise<boolean>;
        // public static boolean java.lang.Boolean.logicalXor(boolean,boolean)
        logicalXorA(arg0: boolean_t, arg1: boolean_t, cb: Callback<boolean>): void;
        logicalXor(arg0: boolean_t, arg1: boolean_t): boolean;
        logicalXorP(arg0: boolean_t, arg1: boolean_t): Promise<boolean>;
        // public static boolean java.lang.Boolean.parseBoolean(java.lang.String)
        parseBooleanA(arg0: string_t, cb: Callback<boolean>): void;
        parseBoolean(arg0: string_t): boolean;
        parseBooleanP(arg0: string_t): Promise<boolean>;
        // public static java.lang.String java.lang.Boolean.toString(boolean)
        toStringA(arg0: boolean_t, cb: Callback<string>): void;
        toString(arg0: boolean_t): string;
        toStringP(arg0: boolean_t): Promise<string>;
        // public static java.lang.Boolean java.lang.Boolean.valueOf(java.lang.String)
        valueOfA(arg0: string_t, cb: Callback<boolean>): void;
        valueOf(arg0: string_t): boolean;
        valueOfP(arg0: string_t): Promise<boolean>;
        // public static java.lang.Boolean java.lang.Boolean.valueOf(boolean)
        valueOfA(arg0: boolean_t, cb: Callback<boolean>): void;
        valueOf(arg0: boolean_t): boolean;
        valueOfP(arg0: boolean_t): Promise<boolean>;
        TRUE: boolean;
        FALSE: boolean;
        TYPE: Class;
      }
    }
  }

  export module java.lang {
    export interface Class extends JavaReflection.java.lang.Object {
      // public <U> java.lang.Class<? extends U> java.lang.Class.asSubclass(java.lang.Class<U>)
      asSubclassA(arg0: Class, cb: Callback<Class>): void;
      asSubclass(arg0: Class): Class;
      asSubclassP(arg0: Class): Promise<Class>;
      // public T java.lang.Class.cast(java.lang.Object)
      castA(arg0: object_t, cb: Callback<object_t>): void;
      cast(arg0: object_t): object_t;
      castP(arg0: object_t): Promise<object_t>;
      // public boolean java.lang.Class.desiredAssertionStatus()
      desiredAssertionStatusA( cb: Callback<boolean>): void;
      desiredAssertionStatus(): boolean;
      desiredAssertionStatusP(): Promise<boolean>;
      // public boolean java.lang.Object.equals(java.lang.Object)
      equalsA(arg0: object_t, cb: Callback<boolean>): void;
      equals(arg0: object_t): boolean;
      equalsP(arg0: object_t): Promise<boolean>;
      // public java.lang.reflect.AnnotatedType[] java.lang.Class.getAnnotatedInterfaces()
      getAnnotatedInterfacesA( cb: Callback<object_t[]>): void;
      getAnnotatedInterfaces(): object_t[];
      getAnnotatedInterfacesP(): Promise<object_t[]>;
      // public java.lang.reflect.AnnotatedType java.lang.Class.getAnnotatedSuperclass()
      getAnnotatedSuperclassA( cb: Callback<object_t>): void;
      getAnnotatedSuperclass(): object_t;
      getAnnotatedSuperclassP(): Promise<object_t>;
      // public <A> A java.lang.Class.getAnnotation(java.lang.Class<A>)
      getAnnotationA(arg0: Class, cb: Callback<object_t>): void;
      getAnnotation(arg0: Class): object_t;
      getAnnotationP(arg0: Class): Promise<object_t>;
      // public java.lang.annotation.Annotation[] java.lang.Class.getAnnotations()
      getAnnotationsA( cb: Callback<object_t[]>): void;
      getAnnotations(): object_t[];
      getAnnotationsP(): Promise<object_t[]>;
      // public <A> A[] java.lang.Class.getAnnotationsByType(java.lang.Class<A>)
      getAnnotationsByTypeA(arg0: Class, cb: Callback<object_t[]>): void;
      getAnnotationsByType(arg0: Class): object_t[];
      getAnnotationsByTypeP(arg0: Class): Promise<object_t[]>;
      // public java.lang.String java.lang.Class.getCanonicalName()
      getCanonicalNameA( cb: Callback<string>): void;
      getCanonicalName(): string;
      getCanonicalNameP(): Promise<string>;
      // public final native java.lang.Class<?> java.lang.Object.getClass()
      getClassA( cb: Callback<Class>): void;
      getClass(): Class;
      getClassP(): Promise<Class>;
      // public java.lang.Class<?>[] java.lang.Class.getClasses()
      getClassesA( cb: Callback<Class[]>): void;
      getClasses(): Class[];
      getClassesP(): Promise<Class[]>;
      // public java.lang.ClassLoader java.lang.Class.getClassLoader()
      getClassLoaderA( cb: Callback<object_t>): void;
      getClassLoader(): object_t;
      getClassLoaderP(): Promise<object_t>;
      // public native java.lang.Class<?> java.lang.Class.getComponentType()
      getComponentTypeA( cb: Callback<Class>): void;
      getComponentType(): Class;
      getComponentTypeP(): Promise<Class>;
      // public java.lang.reflect.Constructor<T> java.lang.Class.getConstructor(java.lang.Class<?>...) throws java.lang.NoSuchMethodException,java.lang.SecurityException
      getConstructorA(arg0: array_t<Class>, cb: Callback<object_t>): void;
      getConstructor(...arg0: Class[]): object_t;
      getConstructor(arg0: array_t<Class>): object_t;
      getConstructorP(...arg0: Class[]): Promise<object_t>;
      getConstructorP(arg0: array_t<Class>): Promise<object_t>;
      // public java.lang.reflect.Constructor<?>[] java.lang.Class.getConstructors() throws java.lang.SecurityException
      getConstructorsA( cb: Callback<object_t[]>): void;
      getConstructors(): object_t[];
      getConstructorsP(): Promise<object_t[]>;
      // public <A> A java.lang.Class.getDeclaredAnnotation(java.lang.Class<A>)
      getDeclaredAnnotationA(arg0: Class, cb: Callback<object_t>): void;
      getDeclaredAnnotation(arg0: Class): object_t;
      getDeclaredAnnotationP(arg0: Class): Promise<object_t>;
      // public java.lang.annotation.Annotation[] java.lang.Class.getDeclaredAnnotations()
      getDeclaredAnnotationsA( cb: Callback<object_t[]>): void;
      getDeclaredAnnotations(): object_t[];
      getDeclaredAnnotationsP(): Promise<object_t[]>;
      // public <A> A[] java.lang.Class.getDeclaredAnnotationsByType(java.lang.Class<A>)
      getDeclaredAnnotationsByTypeA(arg0: Class, cb: Callback<object_t[]>): void;
      getDeclaredAnnotationsByType(arg0: Class): object_t[];
      getDeclaredAnnotationsByTypeP(arg0: Class): Promise<object_t[]>;
      // public java.lang.Class<?>[] java.lang.Class.getDeclaredClasses() throws java.lang.SecurityException
      getDeclaredClassesA( cb: Callback<Class[]>): void;
      getDeclaredClasses(): Class[];
      getDeclaredClassesP(): Promise<Class[]>;
      // public java.lang.reflect.Constructor<T> java.lang.Class.getDeclaredConstructor(java.lang.Class<?>...) throws java.lang.NoSuchMethodException,java.lang.SecurityException
      getDeclaredConstructorA(arg0: array_t<Class>, cb: Callback<object_t>): void;
      getDeclaredConstructor(...arg0: Class[]): object_t;
      getDeclaredConstructor(arg0: array_t<Class>): object_t;
      getDeclaredConstructorP(...arg0: Class[]): Promise<object_t>;
      getDeclaredConstructorP(arg0: array_t<Class>): Promise<object_t>;
      // public java.lang.reflect.Constructor<?>[] java.lang.Class.getDeclaredConstructors() throws java.lang.SecurityException
      getDeclaredConstructorsA( cb: Callback<object_t[]>): void;
      getDeclaredConstructors(): object_t[];
      getDeclaredConstructorsP(): Promise<object_t[]>;
      // public java.lang.reflect.Field java.lang.Class.getDeclaredField(java.lang.String) throws java.lang.NoSuchFieldException,java.lang.SecurityException
      getDeclaredFieldA(arg0: string_t, cb: Callback<object_t>): void;
      getDeclaredField(arg0: string_t): object_t;
      getDeclaredFieldP(arg0: string_t): Promise<object_t>;
      // public java.lang.reflect.Field[] java.lang.Class.getDeclaredFields() throws java.lang.SecurityException
      getDeclaredFieldsA( cb: Callback<object_t[]>): void;
      getDeclaredFields(): object_t[];
      getDeclaredFieldsP(): Promise<object_t[]>;
      // public java.lang.reflect.Method java.lang.Class.getDeclaredMethod(java.lang.String,java.lang.Class<?>...) throws java.lang.NoSuchMethodException,java.lang.SecurityException
      getDeclaredMethodA(arg0: string_t, arg1: array_t<Class>, cb: Callback<object_t>): void;
      getDeclaredMethod(arg0: string_t, ...arg1: Class[]): object_t;
      getDeclaredMethod(arg0: string_t, arg1: array_t<Class>): object_t;
      getDeclaredMethodP(arg0: string_t, ...arg1: Class[]): Promise<object_t>;
      getDeclaredMethodP(arg0: string_t, arg1: array_t<Class>): Promise<object_t>;
      // public java.lang.reflect.Method[] java.lang.Class.getDeclaredMethods() throws java.lang.SecurityException
      getDeclaredMethodsA( cb: Callback<object_t[]>): void;
      getDeclaredMethods(): object_t[];
      getDeclaredMethodsP(): Promise<object_t[]>;
      // public java.lang.Class<?> java.lang.Class.getDeclaringClass() throws java.lang.SecurityException
      getDeclaringClassA( cb: Callback<Class>): void;
      getDeclaringClass(): Class;
      getDeclaringClassP(): Promise<Class>;
      // public java.lang.Class<?> java.lang.Class.getEnclosingClass() throws java.lang.SecurityException
      getEnclosingClassA( cb: Callback<Class>): void;
      getEnclosingClass(): Class;
      getEnclosingClassP(): Promise<Class>;
      // public java.lang.reflect.Constructor<?> java.lang.Class.getEnclosingConstructor() throws java.lang.SecurityException
      getEnclosingConstructorA( cb: Callback<object_t>): void;
      getEnclosingConstructor(): object_t;
      getEnclosingConstructorP(): Promise<object_t>;
      // public java.lang.reflect.Method java.lang.Class.getEnclosingMethod() throws java.lang.SecurityException
      getEnclosingMethodA( cb: Callback<object_t>): void;
      getEnclosingMethod(): object_t;
      getEnclosingMethodP(): Promise<object_t>;
      // public T[] java.lang.Class.getEnumConstants()
      getEnumConstantsA( cb: Callback<object_t[]>): void;
      getEnumConstants(): object_t[];
      getEnumConstantsP(): Promise<object_t[]>;
      // public java.lang.reflect.Field java.lang.Class.getField(java.lang.String) throws java.lang.NoSuchFieldException,java.lang.SecurityException
      getFieldA(arg0: string_t, cb: Callback<object_t>): void;
      getField(arg0: string_t): object_t;
      getFieldP(arg0: string_t): Promise<object_t>;
      // public java.lang.reflect.Field[] java.lang.Class.getFields() throws java.lang.SecurityException
      getFieldsA( cb: Callback<object_t[]>): void;
      getFields(): object_t[];
      getFieldsP(): Promise<object_t[]>;
      // public java.lang.reflect.Type[] java.lang.Class.getGenericInterfaces()
      getGenericInterfacesA( cb: Callback<object_t[]>): void;
      getGenericInterfaces(): object_t[];
      getGenericInterfacesP(): Promise<object_t[]>;
      // public java.lang.reflect.Type java.lang.Class.getGenericSuperclass()
      getGenericSuperclassA( cb: Callback<object_t>): void;
      getGenericSuperclass(): object_t;
      getGenericSuperclassP(): Promise<object_t>;
      // public java.lang.Class<?>[] java.lang.Class.getInterfaces()
      getInterfacesA( cb: Callback<Class[]>): void;
      getInterfaces(): Class[];
      getInterfacesP(): Promise<Class[]>;
      // public java.lang.reflect.Method java.lang.Class.getMethod(java.lang.String,java.lang.Class<?>...) throws java.lang.NoSuchMethodException,java.lang.SecurityException
      getMethodA(arg0: string_t, arg1: array_t<Class>, cb: Callback<object_t>): void;
      getMethod(arg0: string_t, ...arg1: Class[]): object_t;
      getMethod(arg0: string_t, arg1: array_t<Class>): object_t;
      getMethodP(arg0: string_t, ...arg1: Class[]): Promise<object_t>;
      getMethodP(arg0: string_t, arg1: array_t<Class>): Promise<object_t>;
      // public java.lang.reflect.Method[] java.lang.Class.getMethods() throws java.lang.SecurityException
      getMethodsA( cb: Callback<object_t[]>): void;
      getMethods(): object_t[];
      getMethodsP(): Promise<object_t[]>;
      // public native int java.lang.Class.getModifiers()
      getModifiersA( cb: Callback<object_t>): void;
      getModifiers(): object_t;
      getModifiersP(): Promise<object_t>;
      // public java.lang.String java.lang.Class.getName()
      getNameA( cb: Callback<string>): void;
      getName(): string;
      getNameP(): Promise<string>;
      // public java.lang.Package java.lang.Class.getPackage()
      getPackageA( cb: Callback<object_t>): void;
      getPackage(): object_t;
      getPackageP(): Promise<object_t>;
      // public java.security.ProtectionDomain java.lang.Class.getProtectionDomain()
      getProtectionDomainA( cb: Callback<object_t>): void;
      getProtectionDomain(): object_t;
      getProtectionDomainP(): Promise<object_t>;
      // public java.net.URL java.lang.Class.getResource(java.lang.String)
      getResourceA(arg0: string_t, cb: Callback<object_t>): void;
      getResource(arg0: string_t): object_t;
      getResourceP(arg0: string_t): Promise<object_t>;
      // public java.io.InputStream java.lang.Class.getResourceAsStream(java.lang.String)
      getResourceAsStreamA(arg0: string_t, cb: Callback<object_t>): void;
      getResourceAsStream(arg0: string_t): object_t;
      getResourceAsStreamP(arg0: string_t): Promise<object_t>;
      // public native java.lang.Object[] java.lang.Class.getSigners()
      getSignersA( cb: Callback<object_t[]>): void;
      getSigners(): object_t[];
      getSignersP(): Promise<object_t[]>;
      // public java.lang.String java.lang.Class.getSimpleName()
      getSimpleNameA( cb: Callback<string>): void;
      getSimpleName(): string;
      getSimpleNameP(): Promise<string>;
      // public native java.lang.Class<? super T> java.lang.Class.getSuperclass()
      getSuperclassA( cb: Callback<Class>): void;
      getSuperclass(): Class;
      getSuperclassP(): Promise<Class>;
      // public java.lang.String java.lang.Class.getTypeName()
      getTypeNameA( cb: Callback<string>): void;
      getTypeName(): string;
      getTypeNameP(): Promise<string>;
      // public java.lang.reflect.TypeVariable<java.lang.Class<T>>[] java.lang.Class.getTypeParameters()
      getTypeParametersA( cb: Callback<object_t[]>): void;
      getTypeParameters(): object_t[];
      getTypeParametersP(): Promise<object_t[]>;
      // public native int java.lang.Object.hashCode()
      hashCodeA( cb: Callback<object_t>): void;
      hashCode(): object_t;
      hashCodeP(): Promise<object_t>;
      // public boolean java.lang.Class.isAnnotation()
      isAnnotationA( cb: Callback<boolean>): void;
      isAnnotation(): boolean;
      isAnnotationP(): Promise<boolean>;
      // public boolean java.lang.Class.isAnnotationPresent(java.lang.Class<? extends java.lang.annotation.Annotation>)
      isAnnotationPresentA(arg0: Class, cb: Callback<boolean>): void;
      isAnnotationPresent(arg0: Class): boolean;
      isAnnotationPresentP(arg0: Class): Promise<boolean>;
      // public boolean java.lang.Class.isAnonymousClass()
      isAnonymousClassA( cb: Callback<boolean>): void;
      isAnonymousClass(): boolean;
      isAnonymousClassP(): Promise<boolean>;
      // public native boolean java.lang.Class.isArray()
      isArrayA( cb: Callback<boolean>): void;
      isArray(): boolean;
      isArrayP(): Promise<boolean>;
      // public native boolean java.lang.Class.isAssignableFrom(java.lang.Class<?>)
      isAssignableFromA(arg0: Class, cb: Callback<boolean>): void;
      isAssignableFrom(arg0: Class): boolean;
      isAssignableFromP(arg0: Class): Promise<boolean>;
      // public boolean java.lang.Class.isEnum()
      isEnumA( cb: Callback<boolean>): void;
      isEnum(): boolean;
      isEnumP(): Promise<boolean>;
      // public native boolean java.lang.Class.isInstance(java.lang.Object)
      isInstanceA(arg0: object_t, cb: Callback<boolean>): void;
      isInstance(arg0: object_t): boolean;
      isInstanceP(arg0: object_t): Promise<boolean>;
      // public native boolean java.lang.Class.isInterface()
      isInterfaceA( cb: Callback<boolean>): void;
      isInterface(): boolean;
      isInterfaceP(): Promise<boolean>;
      // public boolean java.lang.Class.isLocalClass()
      isLocalClassA( cb: Callback<boolean>): void;
      isLocalClass(): boolean;
      isLocalClassP(): Promise<boolean>;
      // public boolean java.lang.Class.isMemberClass()
      isMemberClassA( cb: Callback<boolean>): void;
      isMemberClass(): boolean;
      isMemberClassP(): Promise<boolean>;
      // public native boolean java.lang.Class.isPrimitive()
      isPrimitiveA( cb: Callback<boolean>): void;
      isPrimitive(): boolean;
      isPrimitiveP(): Promise<boolean>;
      // public boolean java.lang.Class.isSynthetic()
      isSyntheticA( cb: Callback<boolean>): void;
      isSynthetic(): boolean;
      isSyntheticP(): Promise<boolean>;
      // public T java.lang.Class.newInstance() throws java.lang.InstantiationException,java.lang.IllegalAccessException
      newInstanceA( cb: Callback<object_t>): void;
      newInstance(): object_t;
      newInstanceP(): Promise<object_t>;
      // public final native void java.lang.Object.notify()
      notifyA( cb: Callback<void>): void;
      notify(): void;
      notifyP(): Promise<void>;
      // public final native void java.lang.Object.notifyAll()
      notifyAllA( cb: Callback<void>): void;
      notifyAll(): void;
      notifyAllP(): Promise<void>;
      // public java.lang.String java.lang.Class.toGenericString()
      toGenericStringA( cb: Callback<string>): void;
      toGenericString(): string;
      toGenericStringP(): Promise<string>;
      // public java.lang.String java.lang.Object.toString()
      toStringA( cb: Callback<string>): void;
      toString(): string;
      toStringP(): Promise<string>;
      // public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
      waitA(arg0: long_t, arg1: object_t, cb: Callback<void>): void;
      wait(arg0: long_t, arg1: object_t): void;
      waitP(arg0: long_t, arg1: object_t): Promise<void>;
      // public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
      waitA(arg0: long_t, cb: Callback<void>): void;
      wait(arg0: long_t): void;
      waitP(arg0: long_t): Promise<void>;
      // public final void java.lang.Object.wait() throws java.lang.InterruptedException
      waitA( cb: Callback<void>): void;
      wait(): void;
      waitP(): Promise<void>;
    }
    export module Class {
      export interface Static {
        // public static java.lang.Class<?> java.lang.Class.forName(java.lang.String,boolean,java.lang.ClassLoader) throws java.lang.ClassNotFoundException
        forNameA(arg0: string_t, arg1: boolean_t, arg2: object_t, cb: Callback<Class>): void;
        forName(arg0: string_t, arg1: boolean_t, arg2: object_t): Class;
        forNameP(arg0: string_t, arg1: boolean_t, arg2: object_t): Promise<Class>;
        // public static java.lang.Class<?> java.lang.Class.forName(java.lang.String) throws java.lang.ClassNotFoundException
        forNameA(arg0: string_t, cb: Callback<Class>): void;
        forName(arg0: string_t): Class;
        forNameP(arg0: string_t): Promise<Class>;
      }
    }
  }

  export module java.lang {
    export interface Long extends JavaReflection.java.lang.Object {
      // public byte java.lang.Long.byteValue()
      byteValueA( cb: Callback<object_t>): void;
      byteValue(): object_t;
      byteValueP(): Promise<object_t>;
      // public int java.lang.Long.compareTo(java.lang.Object)
      compareToA(arg0: object_t, cb: Callback<object_t>): void;
      compareTo(arg0: object_t): object_t;
      compareToP(arg0: object_t): Promise<object_t>;
      // public int java.lang.Long.compareTo(java.lang.Long)
      compareToA(arg0: long_t, cb: Callback<object_t>): void;
      compareTo(arg0: long_t): object_t;
      compareToP(arg0: long_t): Promise<object_t>;
      // public double java.lang.Long.doubleValue()
      doubleValueA( cb: Callback<object_t>): void;
      doubleValue(): object_t;
      doubleValueP(): Promise<object_t>;
      // public boolean java.lang.Object.equals(java.lang.Object)
      equalsA(arg0: object_t, cb: Callback<boolean>): void;
      equals(arg0: object_t): boolean;
      equalsP(arg0: object_t): Promise<boolean>;
      // public float java.lang.Long.floatValue()
      floatValueA( cb: Callback<object_t>): void;
      floatValue(): object_t;
      floatValueP(): Promise<object_t>;
      // public final native java.lang.Class<?> java.lang.Object.getClass()
      getClassA( cb: Callback<Class>): void;
      getClass(): Class;
      getClassP(): Promise<Class>;
      // public native int java.lang.Object.hashCode()
      hashCodeA( cb: Callback<object_t>): void;
      hashCode(): object_t;
      hashCodeP(): Promise<object_t>;
      // public int java.lang.Long.intValue()
      intValueA( cb: Callback<object_t>): void;
      intValue(): object_t;
      intValueP(): Promise<object_t>;
      // public long java.lang.Long.longValue()
      longValueA( cb: Callback<longValue_t>): void;
      longValue(): longValue_t;
      longValueP(): Promise<longValue_t>;
      // public final native void java.lang.Object.notify()
      notifyA( cb: Callback<void>): void;
      notify(): void;
      notifyP(): Promise<void>;
      // public final native void java.lang.Object.notifyAll()
      notifyAllA( cb: Callback<void>): void;
      notifyAll(): void;
      notifyAllP(): Promise<void>;
      // public short java.lang.Long.shortValue()
      shortValueA( cb: Callback<object_t>): void;
      shortValue(): object_t;
      shortValueP(): Promise<object_t>;
      // public java.lang.String java.lang.Object.toString()
      toStringA( cb: Callback<string>): void;
      toString(): string;
      toStringP(): Promise<string>;
      // public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
      waitA(arg0: long_t, arg1: object_t, cb: Callback<void>): void;
      wait(arg0: long_t, arg1: object_t): void;
      waitP(arg0: long_t, arg1: object_t): Promise<void>;
      // public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
      waitA(arg0: long_t, cb: Callback<void>): void;
      wait(arg0: long_t): void;
      waitP(arg0: long_t): Promise<void>;
      // public final void java.lang.Object.wait() throws java.lang.InterruptedException
      waitA( cb: Callback<void>): void;
      wait(): void;
      waitP(): Promise<void>;
    }
    export module Long {
      export interface Static {
        new (arg0: string_t): java.lang.Long;
        new (arg0: long_t): java.lang.Long;
        // public static int java.lang.Long.bitCount(long)
        bitCountA(arg0: long_t, cb: Callback<object_t>): void;
        bitCount(arg0: long_t): object_t;
        bitCountP(arg0: long_t): Promise<object_t>;
        // public static int java.lang.Long.compare(long,long)
        compareA(arg0: long_t, arg1: long_t, cb: Callback<object_t>): void;
        compare(arg0: long_t, arg1: long_t): object_t;
        compareP(arg0: long_t, arg1: long_t): Promise<object_t>;
        // public static int java.lang.Long.compareUnsigned(long,long)
        compareUnsignedA(arg0: long_t, arg1: long_t, cb: Callback<object_t>): void;
        compareUnsigned(arg0: long_t, arg1: long_t): object_t;
        compareUnsignedP(arg0: long_t, arg1: long_t): Promise<object_t>;
        // public static java.lang.Long java.lang.Long.decode(java.lang.String) throws java.lang.NumberFormatException
        decodeA(arg0: string_t, cb: Callback<longValue_t>): void;
        decode(arg0: string_t): longValue_t;
        decodeP(arg0: string_t): Promise<longValue_t>;
        // public static long java.lang.Long.divideUnsigned(long,long)
        divideUnsignedA(arg0: long_t, arg1: long_t, cb: Callback<longValue_t>): void;
        divideUnsigned(arg0: long_t, arg1: long_t): longValue_t;
        divideUnsignedP(arg0: long_t, arg1: long_t): Promise<longValue_t>;
        // public static java.lang.Long java.lang.Long.getLong(java.lang.String,java.lang.Long)
        getLongA(arg0: string_t, arg1: long_t, cb: Callback<longValue_t>): void;
        getLong(arg0: string_t, arg1: long_t): longValue_t;
        getLongP(arg0: string_t, arg1: long_t): Promise<longValue_t>;
        // public static java.lang.Long java.lang.Long.getLong(java.lang.String,long)
        getLongA(arg0: string_t, arg1: long_t, cb: Callback<longValue_t>): void;
        getLong(arg0: string_t, arg1: long_t): longValue_t;
        getLongP(arg0: string_t, arg1: long_t): Promise<longValue_t>;
        // public static java.lang.Long java.lang.Long.getLong(java.lang.String)
        getLongA(arg0: string_t, cb: Callback<longValue_t>): void;
        getLong(arg0: string_t): longValue_t;
        getLongP(arg0: string_t): Promise<longValue_t>;
        // public static int java.lang.Long.hashCode(long)
        hashCodeA(arg0: long_t, cb: Callback<object_t>): void;
        hashCode(arg0: long_t): object_t;
        hashCodeP(arg0: long_t): Promise<object_t>;
        // public static long java.lang.Long.highestOneBit(long)
        highestOneBitA(arg0: long_t, cb: Callback<longValue_t>): void;
        highestOneBit(arg0: long_t): longValue_t;
        highestOneBitP(arg0: long_t): Promise<longValue_t>;
        // public static long java.lang.Long.lowestOneBit(long)
        lowestOneBitA(arg0: long_t, cb: Callback<longValue_t>): void;
        lowestOneBit(arg0: long_t): longValue_t;
        lowestOneBitP(arg0: long_t): Promise<longValue_t>;
        // public static long java.lang.Long.max(long,long)
        maxA(arg0: long_t, arg1: long_t, cb: Callback<longValue_t>): void;
        max(arg0: long_t, arg1: long_t): longValue_t;
        maxP(arg0: long_t, arg1: long_t): Promise<longValue_t>;
        // public static long java.lang.Long.min(long,long)
        minA(arg0: long_t, arg1: long_t, cb: Callback<longValue_t>): void;
        min(arg0: long_t, arg1: long_t): longValue_t;
        minP(arg0: long_t, arg1: long_t): Promise<longValue_t>;
        // public static int java.lang.Long.numberOfLeadingZeros(long)
        numberOfLeadingZerosA(arg0: long_t, cb: Callback<object_t>): void;
        numberOfLeadingZeros(arg0: long_t): object_t;
        numberOfLeadingZerosP(arg0: long_t): Promise<object_t>;
        // public static int java.lang.Long.numberOfTrailingZeros(long)
        numberOfTrailingZerosA(arg0: long_t, cb: Callback<object_t>): void;
        numberOfTrailingZeros(arg0: long_t): object_t;
        numberOfTrailingZerosP(arg0: long_t): Promise<object_t>;
        // public static long java.lang.Long.parseLong(java.lang.String,int) throws java.lang.NumberFormatException
        parseLongA(arg0: string_t, arg1: object_t, cb: Callback<longValue_t>): void;
        parseLong(arg0: string_t, arg1: object_t): longValue_t;
        parseLongP(arg0: string_t, arg1: object_t): Promise<longValue_t>;
        // public static long java.lang.Long.parseLong(java.lang.String) throws java.lang.NumberFormatException
        parseLongA(arg0: string_t, cb: Callback<longValue_t>): void;
        parseLong(arg0: string_t): longValue_t;
        parseLongP(arg0: string_t): Promise<longValue_t>;
        // public static long java.lang.Long.parseUnsignedLong(java.lang.String,int) throws java.lang.NumberFormatException
        parseUnsignedLongA(arg0: string_t, arg1: object_t, cb: Callback<longValue_t>): void;
        parseUnsignedLong(arg0: string_t, arg1: object_t): longValue_t;
        parseUnsignedLongP(arg0: string_t, arg1: object_t): Promise<longValue_t>;
        // public static long java.lang.Long.parseUnsignedLong(java.lang.String) throws java.lang.NumberFormatException
        parseUnsignedLongA(arg0: string_t, cb: Callback<longValue_t>): void;
        parseUnsignedLong(arg0: string_t): longValue_t;
        parseUnsignedLongP(arg0: string_t): Promise<longValue_t>;
        // public static long java.lang.Long.remainderUnsigned(long,long)
        remainderUnsignedA(arg0: long_t, arg1: long_t, cb: Callback<longValue_t>): void;
        remainderUnsigned(arg0: long_t, arg1: long_t): longValue_t;
        remainderUnsignedP(arg0: long_t, arg1: long_t): Promise<longValue_t>;
        // public static long java.lang.Long.reverse(long)
        reverseA(arg0: long_t, cb: Callback<longValue_t>): void;
        reverse(arg0: long_t): longValue_t;
        reverseP(arg0: long_t): Promise<longValue_t>;
        // public static long java.lang.Long.reverseBytes(long)
        reverseBytesA(arg0: long_t, cb: Callback<longValue_t>): void;
        reverseBytes(arg0: long_t): longValue_t;
        reverseBytesP(arg0: long_t): Promise<longValue_t>;
        // public static long java.lang.Long.rotateLeft(long,int)
        rotateLeftA(arg0: long_t, arg1: object_t, cb: Callback<longValue_t>): void;
        rotateLeft(arg0: long_t, arg1: object_t): longValue_t;
        rotateLeftP(arg0: long_t, arg1: object_t): Promise<longValue_t>;
        // public static long java.lang.Long.rotateRight(long,int)
        rotateRightA(arg0: long_t, arg1: object_t, cb: Callback<longValue_t>): void;
        rotateRight(arg0: long_t, arg1: object_t): longValue_t;
        rotateRightP(arg0: long_t, arg1: object_t): Promise<longValue_t>;
        // public static int java.lang.Long.signum(long)
        signumA(arg0: long_t, cb: Callback<object_t>): void;
        signum(arg0: long_t): object_t;
        signumP(arg0: long_t): Promise<object_t>;
        // public static long java.lang.Long.sum(long,long)
        sumA(arg0: long_t, arg1: long_t, cb: Callback<longValue_t>): void;
        sum(arg0: long_t, arg1: long_t): longValue_t;
        sumP(arg0: long_t, arg1: long_t): Promise<longValue_t>;
        // public static java.lang.String java.lang.Long.toBinaryString(long)
        toBinaryStringA(arg0: long_t, cb: Callback<string>): void;
        toBinaryString(arg0: long_t): string;
        toBinaryStringP(arg0: long_t): Promise<string>;
        // public static java.lang.String java.lang.Long.toHexString(long)
        toHexStringA(arg0: long_t, cb: Callback<string>): void;
        toHexString(arg0: long_t): string;
        toHexStringP(arg0: long_t): Promise<string>;
        // public static java.lang.String java.lang.Long.toOctalString(long)
        toOctalStringA(arg0: long_t, cb: Callback<string>): void;
        toOctalString(arg0: long_t): string;
        toOctalStringP(arg0: long_t): Promise<string>;
        // public static java.lang.String java.lang.Long.toString(long,int)
        toStringA(arg0: long_t, arg1: object_t, cb: Callback<string>): void;
        toString(arg0: long_t, arg1: object_t): string;
        toStringP(arg0: long_t, arg1: object_t): Promise<string>;
        // public static java.lang.String java.lang.Long.toString(long)
        toStringA(arg0: long_t, cb: Callback<string>): void;
        toString(arg0: long_t): string;
        toStringP(arg0: long_t): Promise<string>;
        // public static java.lang.String java.lang.Long.toUnsignedString(long,int)
        toUnsignedStringA(arg0: long_t, arg1: object_t, cb: Callback<string>): void;
        toUnsignedString(arg0: long_t, arg1: object_t): string;
        toUnsignedStringP(arg0: long_t, arg1: object_t): Promise<string>;
        // public static java.lang.String java.lang.Long.toUnsignedString(long)
        toUnsignedStringA(arg0: long_t, cb: Callback<string>): void;
        toUnsignedString(arg0: long_t): string;
        toUnsignedStringP(arg0: long_t): Promise<string>;
        // public static java.lang.Long java.lang.Long.valueOf(java.lang.String,int) throws java.lang.NumberFormatException
        valueOfA(arg0: string_t, arg1: object_t, cb: Callback<longValue_t>): void;
        valueOf(arg0: string_t, arg1: object_t): longValue_t;
        valueOfP(arg0: string_t, arg1: object_t): Promise<longValue_t>;
        // public static java.lang.Long java.lang.Long.valueOf(java.lang.String) throws java.lang.NumberFormatException
        valueOfA(arg0: string_t, cb: Callback<longValue_t>): void;
        valueOf(arg0: string_t): longValue_t;
        valueOfP(arg0: string_t): Promise<longValue_t>;
        // public static java.lang.Long java.lang.Long.valueOf(long)
        valueOfA(arg0: long_t, cb: Callback<longValue_t>): void;
        valueOf(arg0: long_t): longValue_t;
        valueOfP(arg0: long_t): Promise<longValue_t>;
        MIN_VALUE: longValue_t;
        MAX_VALUE: longValue_t;
        TYPE: Class;
        SIZE: object_t;
        BYTES: object_t;
      }
    }
  }

  export module java.lang {
    export interface Object  {
      // public boolean java.lang.Object.equals(java.lang.Object)
      equalsA(arg0: object_t, cb: Callback<boolean>): void;
      equals(arg0: object_t): boolean;
      equalsP(arg0: object_t): Promise<boolean>;
      // public final native java.lang.Class<?> java.lang.Object.getClass()
      getClassA( cb: Callback<Class>): void;
      getClass(): Class;
      getClassP(): Promise<Class>;
      // public native int java.lang.Object.hashCode()
      hashCodeA( cb: Callback<object_t>): void;
      hashCode(): object_t;
      hashCodeP(): Promise<object_t>;
      // public final native void java.lang.Object.notify()
      notifyA( cb: Callback<void>): void;
      notify(): void;
      notifyP(): Promise<void>;
      // public final native void java.lang.Object.notifyAll()
      notifyAllA( cb: Callback<void>): void;
      notifyAll(): void;
      notifyAllP(): Promise<void>;
      // public java.lang.String java.lang.Object.toString()
      toStringA( cb: Callback<string>): void;
      toString(): string;
      toStringP(): Promise<string>;
      // public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
      waitA(arg0: long_t, arg1: object_t, cb: Callback<void>): void;
      wait(arg0: long_t, arg1: object_t): void;
      waitP(arg0: long_t, arg1: object_t): Promise<void>;
      // public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
      waitA(arg0: long_t, cb: Callback<void>): void;
      wait(arg0: long_t): void;
      waitP(arg0: long_t): Promise<void>;
      // public final void java.lang.Object.wait() throws java.lang.InterruptedException
      waitA( cb: Callback<void>): void;
      wait(): void;
      waitP(): Promise<void>;
    }
    export module Object {
      export interface Static {
        new (): java.lang.Object;
      }
    }
  }

  export module java.lang {
    export interface String extends JavaReflection.java.lang.Object {
      // public char java.lang.String.charAt(int)
      charAtA(arg0: object_t, cb: Callback<object_t>): void;
      charAt(arg0: object_t): object_t;
      charAtP(arg0: object_t): Promise<object_t>;
      // public default java.util.stream.IntStream java.lang.CharSequence.chars()
      charsA( cb: Callback<object_t>): void;
      chars(): object_t;
      charsP(): Promise<object_t>;
      // public int java.lang.String.codePointAt(int)
      codePointAtA(arg0: object_t, cb: Callback<object_t>): void;
      codePointAt(arg0: object_t): object_t;
      codePointAtP(arg0: object_t): Promise<object_t>;
      // public int java.lang.String.codePointBefore(int)
      codePointBeforeA(arg0: object_t, cb: Callback<object_t>): void;
      codePointBefore(arg0: object_t): object_t;
      codePointBeforeP(arg0: object_t): Promise<object_t>;
      // public int java.lang.String.codePointCount(int,int)
      codePointCountA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
      codePointCount(arg0: object_t, arg1: object_t): object_t;
      codePointCountP(arg0: object_t, arg1: object_t): Promise<object_t>;
      // public default java.util.stream.IntStream java.lang.CharSequence.codePoints()
      codePointsA( cb: Callback<object_t>): void;
      codePoints(): object_t;
      codePointsP(): Promise<object_t>;
      // public int java.lang.String.compareTo(java.lang.String)
      compareToA(arg0: string_t, cb: Callback<object_t>): void;
      compareTo(arg0: string_t): object_t;
      compareToP(arg0: string_t): Promise<object_t>;
      // public int java.lang.String.compareTo(java.lang.Object)
      compareToA(arg0: object_t, cb: Callback<object_t>): void;
      compareTo(arg0: object_t): object_t;
      compareToP(arg0: object_t): Promise<object_t>;
      // public int java.lang.String.compareToIgnoreCase(java.lang.String)
      compareToIgnoreCaseA(arg0: string_t, cb: Callback<object_t>): void;
      compareToIgnoreCase(arg0: string_t): object_t;
      compareToIgnoreCaseP(arg0: string_t): Promise<object_t>;
      // public java.lang.String java.lang.String.concat(java.lang.String)
      concatA(arg0: string_t, cb: Callback<string>): void;
      concat(arg0: string_t): string;
      concatP(arg0: string_t): Promise<string>;
      // public boolean java.lang.String.contains(java.lang.CharSequence)
      containsA(arg0: object_t, cb: Callback<boolean>): void;
      contains(arg0: object_t): boolean;
      containsP(arg0: object_t): Promise<boolean>;
      // public boolean java.lang.String.contentEquals(java.lang.StringBuffer)
      contentEqualsA(arg0: object_t, cb: Callback<boolean>): void;
      contentEquals(arg0: object_t): boolean;
      contentEqualsP(arg0: object_t): Promise<boolean>;
      // public boolean java.lang.String.contentEquals(java.lang.CharSequence)
      contentEqualsA(arg0: object_t, cb: Callback<boolean>): void;
      contentEquals(arg0: object_t): boolean;
      contentEqualsP(arg0: object_t): Promise<boolean>;
      // public boolean java.lang.String.endsWith(java.lang.String)
      endsWithA(arg0: string_t, cb: Callback<boolean>): void;
      endsWith(arg0: string_t): boolean;
      endsWithP(arg0: string_t): Promise<boolean>;
      // public boolean java.lang.Object.equals(java.lang.Object)
      equalsA(arg0: object_t, cb: Callback<boolean>): void;
      equals(arg0: object_t): boolean;
      equalsP(arg0: object_t): Promise<boolean>;
      // public boolean java.lang.String.equalsIgnoreCase(java.lang.String)
      equalsIgnoreCaseA(arg0: string_t, cb: Callback<boolean>): void;
      equalsIgnoreCase(arg0: string_t): boolean;
      equalsIgnoreCaseP(arg0: string_t): Promise<boolean>;
      // public void java.lang.String.getBytes(int,int,byte[],int)
      getBytesA(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t, cb: Callback<void>): void;
      getBytes(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t): void;
      getBytesP(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t): Promise<void>;
      // public byte[] java.lang.String.getBytes(java.nio.charset.Charset)
      getBytesA(arg0: object_t, cb: Callback<object_t[]>): void;
      getBytes(arg0: object_t): object_t[];
      getBytesP(arg0: object_t): Promise<object_t[]>;
      // public byte[] java.lang.String.getBytes(java.lang.String) throws java.io.UnsupportedEncodingException
      getBytesA(arg0: string_t, cb: Callback<object_t[]>): void;
      getBytes(arg0: string_t): object_t[];
      getBytesP(arg0: string_t): Promise<object_t[]>;
      // public byte[] java.lang.String.getBytes()
      getBytesA( cb: Callback<object_t[]>): void;
      getBytes(): object_t[];
      getBytesP(): Promise<object_t[]>;
      // public void java.lang.String.getChars(int,int,char[],int)
      getCharsA(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t, cb: Callback<void>): void;
      getChars(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t): void;
      getCharsP(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t): Promise<void>;
      // public final native java.lang.Class<?> java.lang.Object.getClass()
      getClassA( cb: Callback<Class>): void;
      getClass(): Class;
      getClassP(): Promise<Class>;
      // public native int java.lang.Object.hashCode()
      hashCodeA( cb: Callback<object_t>): void;
      hashCode(): object_t;
      hashCodeP(): Promise<object_t>;
      // public int java.lang.String.indexOf(java.lang.String,int)
      indexOfA(arg0: string_t, arg1: object_t, cb: Callback<object_t>): void;
      indexOf(arg0: string_t, arg1: object_t): object_t;
      indexOfP(arg0: string_t, arg1: object_t): Promise<object_t>;
      // public int java.lang.String.indexOf(int,int)
      indexOfA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
      indexOf(arg0: object_t, arg1: object_t): object_t;
      indexOfP(arg0: object_t, arg1: object_t): Promise<object_t>;
      // public int java.lang.String.indexOf(java.lang.String)
      indexOfA(arg0: string_t, cb: Callback<object_t>): void;
      indexOf(arg0: string_t): object_t;
      indexOfP(arg0: string_t): Promise<object_t>;
      // public int java.lang.String.indexOf(int)
      indexOfA(arg0: object_t, cb: Callback<object_t>): void;
      indexOf(arg0: object_t): object_t;
      indexOfP(arg0: object_t): Promise<object_t>;
      // public native java.lang.String java.lang.String.intern()
      internA( cb: Callback<string>): void;
      intern(): string;
      internP(): Promise<string>;
      // public boolean java.lang.String.isEmpty()
      isEmptyA( cb: Callback<boolean>): void;
      isEmpty(): boolean;
      isEmptyP(): Promise<boolean>;
      // public int java.lang.String.lastIndexOf(java.lang.String,int)
      lastIndexOfA(arg0: string_t, arg1: object_t, cb: Callback<object_t>): void;
      lastIndexOf(arg0: string_t, arg1: object_t): object_t;
      lastIndexOfP(arg0: string_t, arg1: object_t): Promise<object_t>;
      // public int java.lang.String.lastIndexOf(int,int)
      lastIndexOfA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
      lastIndexOf(arg0: object_t, arg1: object_t): object_t;
      lastIndexOfP(arg0: object_t, arg1: object_t): Promise<object_t>;
      // public int java.lang.String.lastIndexOf(java.lang.String)
      lastIndexOfA(arg0: string_t, cb: Callback<object_t>): void;
      lastIndexOf(arg0: string_t): object_t;
      lastIndexOfP(arg0: string_t): Promise<object_t>;
      // public int java.lang.String.lastIndexOf(int)
      lastIndexOfA(arg0: object_t, cb: Callback<object_t>): void;
      lastIndexOf(arg0: object_t): object_t;
      lastIndexOfP(arg0: object_t): Promise<object_t>;
      // public int java.lang.String.length()
      lengthA( cb: Callback<object_t>): void;
      length(): object_t;
      lengthP(): Promise<object_t>;
      // public boolean java.lang.String.matches(java.lang.String)
      matchesA(arg0: string_t, cb: Callback<boolean>): void;
      matches(arg0: string_t): boolean;
      matchesP(arg0: string_t): Promise<boolean>;
      // public final native void java.lang.Object.notify()
      notifyA( cb: Callback<void>): void;
      notify(): void;
      notifyP(): Promise<void>;
      // public final native void java.lang.Object.notifyAll()
      notifyAllA( cb: Callback<void>): void;
      notifyAll(): void;
      notifyAllP(): Promise<void>;
      // public int java.lang.String.offsetByCodePoints(int,int)
      offsetByCodePointsA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
      offsetByCodePoints(arg0: object_t, arg1: object_t): object_t;
      offsetByCodePointsP(arg0: object_t, arg1: object_t): Promise<object_t>;
      // public boolean java.lang.String.regionMatches(boolean,int,java.lang.String,int,int)
      regionMatchesA(arg0: boolean_t, arg1: object_t, arg2: string_t, arg3: object_t, arg4: object_t, cb: Callback<boolean>): void;
      regionMatches(arg0: boolean_t, arg1: object_t, arg2: string_t, arg3: object_t, arg4: object_t): boolean;
      regionMatchesP(arg0: boolean_t, arg1: object_t, arg2: string_t, arg3: object_t, arg4: object_t): Promise<boolean>;
      // public boolean java.lang.String.regionMatches(int,java.lang.String,int,int)
      regionMatchesA(arg0: object_t, arg1: string_t, arg2: object_t, arg3: object_t, cb: Callback<boolean>): void;
      regionMatches(arg0: object_t, arg1: string_t, arg2: object_t, arg3: object_t): boolean;
      regionMatchesP(arg0: object_t, arg1: string_t, arg2: object_t, arg3: object_t): Promise<boolean>;
      // public java.lang.String java.lang.String.replace(java.lang.CharSequence,java.lang.CharSequence)
      replaceA(arg0: object_t, arg1: object_t, cb: Callback<string>): void;
      replace(arg0: object_t, arg1: object_t): string;
      replaceP(arg0: object_t, arg1: object_t): Promise<string>;
      // public java.lang.String java.lang.String.replace(char,char)
      replaceA(arg0: object_t, arg1: object_t, cb: Callback<string>): void;
      replace(arg0: object_t, arg1: object_t): string;
      replaceP(arg0: object_t, arg1: object_t): Promise<string>;
      // public java.lang.String java.lang.String.replaceAll(java.lang.String,java.lang.String)
      replaceAllA(arg0: string_t, arg1: string_t, cb: Callback<string>): void;
      replaceAll(arg0: string_t, arg1: string_t): string;
      replaceAllP(arg0: string_t, arg1: string_t): Promise<string>;
      // public java.lang.String java.lang.String.replaceFirst(java.lang.String,java.lang.String)
      replaceFirstA(arg0: string_t, arg1: string_t, cb: Callback<string>): void;
      replaceFirst(arg0: string_t, arg1: string_t): string;
      replaceFirstP(arg0: string_t, arg1: string_t): Promise<string>;
      // public java.lang.String[] java.lang.String.split(java.lang.String,int)
      splitA(arg0: string_t, arg1: object_t, cb: Callback<string[]>): void;
      split(arg0: string_t, arg1: object_t): string[];
      splitP(arg0: string_t, arg1: object_t): Promise<string[]>;
      // public java.lang.String[] java.lang.String.split(java.lang.String)
      splitA(arg0: string_t, cb: Callback<string[]>): void;
      split(arg0: string_t): string[];
      splitP(arg0: string_t): Promise<string[]>;
      // public boolean java.lang.String.startsWith(java.lang.String,int)
      startsWithA(arg0: string_t, arg1: object_t, cb: Callback<boolean>): void;
      startsWith(arg0: string_t, arg1: object_t): boolean;
      startsWithP(arg0: string_t, arg1: object_t): Promise<boolean>;
      // public boolean java.lang.String.startsWith(java.lang.String)
      startsWithA(arg0: string_t, cb: Callback<boolean>): void;
      startsWith(arg0: string_t): boolean;
      startsWithP(arg0: string_t): Promise<boolean>;
      // public java.lang.CharSequence java.lang.String.subSequence(int,int)
      subSequenceA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
      subSequence(arg0: object_t, arg1: object_t): object_t;
      subSequenceP(arg0: object_t, arg1: object_t): Promise<object_t>;
      // public java.lang.String java.lang.String.substring(int,int)
      substringA(arg0: object_t, arg1: object_t, cb: Callback<string>): void;
      substring(arg0: object_t, arg1: object_t): string;
      substringP(arg0: object_t, arg1: object_t): Promise<string>;
      // public java.lang.String java.lang.String.substring(int)
      substringA(arg0: object_t, cb: Callback<string>): void;
      substring(arg0: object_t): string;
      substringP(arg0: object_t): Promise<string>;
      // public char[] java.lang.String.toCharArray()
      toCharArrayA( cb: Callback<object_t[]>): void;
      toCharArray(): object_t[];
      toCharArrayP(): Promise<object_t[]>;
      // public java.lang.String java.lang.String.toLowerCase(java.util.Locale)
      toLowerCaseA(arg0: object_t, cb: Callback<string>): void;
      toLowerCase(arg0: object_t): string;
      toLowerCaseP(arg0: object_t): Promise<string>;
      // public java.lang.String java.lang.String.toLowerCase()
      toLowerCaseA( cb: Callback<string>): void;
      toLowerCase(): string;
      toLowerCaseP(): Promise<string>;
      // public java.lang.String java.lang.Object.toString()
      toStringA( cb: Callback<string>): void;
      toString(): string;
      toStringP(): Promise<string>;
      // public java.lang.String java.lang.String.toUpperCase(java.util.Locale)
      toUpperCaseA(arg0: object_t, cb: Callback<string>): void;
      toUpperCase(arg0: object_t): string;
      toUpperCaseP(arg0: object_t): Promise<string>;
      // public java.lang.String java.lang.String.toUpperCase()
      toUpperCaseA( cb: Callback<string>): void;
      toUpperCase(): string;
      toUpperCaseP(): Promise<string>;
      // public java.lang.String java.lang.String.trim()
      trimA( cb: Callback<string>): void;
      trim(): string;
      trimP(): Promise<string>;
      // public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
      waitA(arg0: long_t, arg1: object_t, cb: Callback<void>): void;
      wait(arg0: long_t, arg1: object_t): void;
      waitP(arg0: long_t, arg1: object_t): Promise<void>;
      // public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
      waitA(arg0: long_t, cb: Callback<void>): void;
      wait(arg0: long_t): void;
      waitP(arg0: long_t): Promise<void>;
      // public final void java.lang.Object.wait() throws java.lang.InterruptedException
      waitA( cb: Callback<void>): void;
      wait(): void;
      waitP(): Promise<void>;
    }
    export module String {
      export interface Static {
        new (arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): java.lang.String;
        new (arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: string_t): java.lang.String;
        new (arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): java.lang.String;
        new (arg0: object_array_t, arg1: object_t, arg2: object_t): java.lang.String;
        new (arg0: object_array_t, arg1: object_t, arg2: object_t): java.lang.String;
        new (arg0: object_array_t, arg1: object_t, arg2: object_t): java.lang.String;
        new (arg0: object_array_t, arg1: object_t): java.lang.String;
        new (arg0: object_array_t, arg1: string_t): java.lang.String;
        new (arg0: object_array_t, arg1: object_t): java.lang.String;
        new (arg0: object_t): java.lang.String;
        new (arg0: object_t): java.lang.String;
        new (arg0: string_t): java.lang.String;
        new (arg0: object_array_t): java.lang.String;
        new (arg0: object_array_t): java.lang.String;
        new (): java.lang.String;
        // public static java.lang.String java.lang.String.copyValueOf(char[],int,int)
        copyValueOfA(arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
        copyValueOf(arg0: object_array_t, arg1: object_t, arg2: object_t): string;
        copyValueOfP(arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
        // public static java.lang.String java.lang.String.copyValueOf(char[])
        copyValueOfA(arg0: object_array_t, cb: Callback<string>): void;
        copyValueOf(arg0: object_array_t): string;
        copyValueOfP(arg0: object_array_t): Promise<string>;
        // public static java.lang.String java.lang.String.format(java.util.Locale,java.lang.String,java.lang.Object...)
        formatA(arg0: object_t, arg1: string_t, arg2: object_array_t, cb: Callback<string>): void;
        format(arg0: object_t, arg1: string_t, ...arg2: object_t[]): string;
        format(arg0: object_t, arg1: string_t, arg2: object_array_t): string;
        formatP(arg0: object_t, arg1: string_t, ...arg2: object_t[]): Promise<string>;
        formatP(arg0: object_t, arg1: string_t, arg2: object_array_t): Promise<string>;
        // public static java.lang.String java.lang.String.format(java.lang.String,java.lang.Object...)
        formatA(arg0: string_t, arg1: object_array_t, cb: Callback<string>): void;
        format(arg0: string_t, ...arg1: object_t[]): string;
        format(arg0: string_t, arg1: object_array_t): string;
        formatP(arg0: string_t, ...arg1: object_t[]): Promise<string>;
        formatP(arg0: string_t, arg1: object_array_t): Promise<string>;
        // public static java.lang.String java.lang.String.join(java.lang.CharSequence,java.lang.CharSequence...)
        joinA(arg0: object_t, arg1: object_array_t, cb: Callback<string>): void;
        join(arg0: object_t, ...arg1: object_t[]): string;
        join(arg0: object_t, arg1: object_array_t): string;
        joinP(arg0: object_t, ...arg1: object_t[]): Promise<string>;
        joinP(arg0: object_t, arg1: object_array_t): Promise<string>;
        // public static java.lang.String java.lang.String.join(java.lang.CharSequence,java.lang.Iterable<? extends java.lang.CharSequence>)
        joinA(arg0: object_t, arg1: object_t, cb: Callback<string>): void;
        join(arg0: object_t, arg1: object_t): string;
        joinP(arg0: object_t, arg1: object_t): Promise<string>;
        // public static java.lang.String java.lang.String.valueOf(char[],int,int)
        valueOfA(arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
        valueOf(arg0: object_array_t, arg1: object_t, arg2: object_t): string;
        valueOfP(arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
        // public static java.lang.String java.lang.String.valueOf(java.lang.Object)
        valueOfA(arg0: object_t, cb: Callback<string>): void;
        valueOf(arg0: object_t): string;
        valueOfP(arg0: object_t): Promise<string>;
        // public static java.lang.String java.lang.String.valueOf(char[])
        valueOfA(arg0: object_array_t, cb: Callback<string>): void;
        valueOf(arg0: object_array_t): string;
        valueOfP(arg0: object_array_t): Promise<string>;
        // public static java.lang.String java.lang.String.valueOf(boolean)
        valueOfA(arg0: boolean_t, cb: Callback<string>): void;
        valueOf(arg0: boolean_t): string;
        valueOfP(arg0: boolean_t): Promise<string>;
        // public static java.lang.String java.lang.String.valueOf(long)
        valueOfA(arg0: long_t, cb: Callback<string>): void;
        valueOf(arg0: long_t): string;
        valueOfP(arg0: long_t): Promise<string>;
        // public static java.lang.String java.lang.String.valueOf(int)
        valueOfA(arg0: object_t, cb: Callback<string>): void;
        valueOf(arg0: object_t): string;
        valueOfP(arg0: object_t): Promise<string>;
        // public static java.lang.String java.lang.String.valueOf(float)
        valueOfA(arg0: object_t, cb: Callback<string>): void;
        valueOf(arg0: object_t): string;
        valueOfP(arg0: object_t): Promise<string>;
        // public static java.lang.String java.lang.String.valueOf(double)
        valueOfA(arg0: object_t, cb: Callback<string>): void;
        valueOf(arg0: object_t): string;
        valueOfP(arg0: object_t): Promise<string>;
        // public static java.lang.String java.lang.String.valueOf(char)
        valueOfA(arg0: object_t, cb: Callback<string>): void;
        valueOf(arg0: object_t): string;
        valueOfP(arg0: object_t): Promise<string>;
        CASE_INSENSITIVE_ORDER: object_t;
      }
    }
  }

}
