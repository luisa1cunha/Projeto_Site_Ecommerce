
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model camisasfutebol
 * 
 */
export type camisasfutebol = $Result.DefaultSelection<Prisma.$camisasfutebolPayload>
/**
 * Model RequestLog
 * 
 */
export type RequestLog = $Result.DefaultSelection<Prisma.$RequestLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.camisasfutebol`: Exposes CRUD operations for the **camisasfutebol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Camisasfutebols
    * const camisasfutebols = await prisma.camisasfutebol.findMany()
    * ```
    */
  get camisasfutebol(): Prisma.camisasfutebolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestLog`: Exposes CRUD operations for the **RequestLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestLogs
    * const requestLogs = await prisma.requestLog.findMany()
    * ```
    */
  get requestLog(): Prisma.RequestLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    camisasfutebol: 'camisasfutebol',
    RequestLog: 'RequestLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "camisasfutebol" | "requestLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      camisasfutebol: {
        payload: Prisma.$camisasfutebolPayload<ExtArgs>
        fields: Prisma.camisasfutebolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.camisasfutebolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.camisasfutebolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload>
          }
          findFirst: {
            args: Prisma.camisasfutebolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.camisasfutebolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload>
          }
          findMany: {
            args: Prisma.camisasfutebolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload>[]
          }
          create: {
            args: Prisma.camisasfutebolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload>
          }
          createMany: {
            args: Prisma.camisasfutebolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.camisasfutebolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload>[]
          }
          delete: {
            args: Prisma.camisasfutebolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload>
          }
          update: {
            args: Prisma.camisasfutebolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload>
          }
          deleteMany: {
            args: Prisma.camisasfutebolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.camisasfutebolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.camisasfutebolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload>[]
          }
          upsert: {
            args: Prisma.camisasfutebolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camisasfutebolPayload>
          }
          aggregate: {
            args: Prisma.CamisasfutebolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCamisasfutebol>
          }
          groupBy: {
            args: Prisma.camisasfutebolGroupByArgs<ExtArgs>
            result: $Utils.Optional<CamisasfutebolGroupByOutputType>[]
          }
          count: {
            args: Prisma.camisasfutebolCountArgs<ExtArgs>
            result: $Utils.Optional<CamisasfutebolCountAggregateOutputType> | number
          }
        }
      }
      RequestLog: {
        payload: Prisma.$RequestLogPayload<ExtArgs>
        fields: Prisma.RequestLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload>
          }
          findFirst: {
            args: Prisma.RequestLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload>
          }
          findMany: {
            args: Prisma.RequestLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload>[]
          }
          create: {
            args: Prisma.RequestLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload>
          }
          createMany: {
            args: Prisma.RequestLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload>[]
          }
          delete: {
            args: Prisma.RequestLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload>
          }
          update: {
            args: Prisma.RequestLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload>
          }
          deleteMany: {
            args: Prisma.RequestLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload>[]
          }
          upsert: {
            args: Prisma.RequestLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestLogPayload>
          }
          aggregate: {
            args: Prisma.RequestLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestLog>
          }
          groupBy: {
            args: Prisma.RequestLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestLogCountArgs<ExtArgs>
            result: $Utils.Optional<RequestLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    camisasfutebol?: camisasfutebolOmit
    requestLog?: RequestLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    requestLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestLogs?: boolean | UserCountOutputTypeCountRequestLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    nome: string | null
    sobrenome: string | null
    email: string | null
    id: string | null
    senhaHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    nome: string | null
    sobrenome: string | null
    email: string | null
    id: string | null
    senhaHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    nome: number
    sobrenome: number
    email: number
    id: number
    senhaHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    nome?: true
    sobrenome?: true
    email?: true
    id?: true
    senhaHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    nome?: true
    sobrenome?: true
    email?: true
    id?: true
    senhaHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    nome?: true
    sobrenome?: true
    email?: true
    id?: true
    senhaHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    nome: string
    sobrenome: string | null
    email: string
    id: string
    senhaHash: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    id?: boolean
    senhaHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestLogs?: boolean | User$requestLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    id?: boolean
    senhaHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    id?: boolean
    senhaHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    id?: boolean
    senhaHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "sobrenome" | "email" | "id" | "senhaHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestLogs?: boolean | User$requestLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      requestLogs: Prisma.$RequestLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      sobrenome: string | null
      email: string
      id: string
      senhaHash: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const userWithNomeOnly = await prisma.user.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `nome`
     * const userWithNomeOnly = await prisma.user.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `nome`
     * const userWithNomeOnly = await prisma.user.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requestLogs<T extends User$requestLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly nome: FieldRef<"User", 'String'>
    readonly sobrenome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly id: FieldRef<"User", 'String'>
    readonly senhaHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.requestLogs
   */
  export type User$requestLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    where?: RequestLogWhereInput
    orderBy?: RequestLogOrderByWithRelationInput | RequestLogOrderByWithRelationInput[]
    cursor?: RequestLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestLogScalarFieldEnum | RequestLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model camisasfutebol
   */

  export type AggregateCamisasfutebol = {
    _count: CamisasfutebolCountAggregateOutputType | null
    _avg: CamisasfutebolAvgAggregateOutputType | null
    _sum: CamisasfutebolSumAggregateOutputType | null
    _min: CamisasfutebolMinAggregateOutputType | null
    _max: CamisasfutebolMaxAggregateOutputType | null
  }

  export type CamisasfutebolAvgAggregateOutputType = {
    preco: number | null
    ano: number | null
  }

  export type CamisasfutebolSumAggregateOutputType = {
    preco: number | null
    ano: number | null
  }

  export type CamisasfutebolMinAggregateOutputType = {
    id: string | null
    nome: string | null
    preco: number | null
    time: string | null
    descricao: string | null
    modelo: string | null
    versao: string | null
    tamanho: string | null
    ano: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CamisasfutebolMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    preco: number | null
    time: string | null
    descricao: string | null
    modelo: string | null
    versao: string | null
    tamanho: string | null
    ano: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CamisasfutebolCountAggregateOutputType = {
    id: number
    nome: number
    preco: number
    time: number
    descricao: number
    imagens: number
    modelo: number
    versao: number
    tamanho: number
    ano: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CamisasfutebolAvgAggregateInputType = {
    preco?: true
    ano?: true
  }

  export type CamisasfutebolSumAggregateInputType = {
    preco?: true
    ano?: true
  }

  export type CamisasfutebolMinAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    time?: true
    descricao?: true
    modelo?: true
    versao?: true
    tamanho?: true
    ano?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CamisasfutebolMaxAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    time?: true
    descricao?: true
    modelo?: true
    versao?: true
    tamanho?: true
    ano?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CamisasfutebolCountAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    time?: true
    descricao?: true
    imagens?: true
    modelo?: true
    versao?: true
    tamanho?: true
    ano?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CamisasfutebolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which camisasfutebol to aggregate.
     */
    where?: camisasfutebolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camisasfutebols to fetch.
     */
    orderBy?: camisasfutebolOrderByWithRelationInput | camisasfutebolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: camisasfutebolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camisasfutebols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camisasfutebols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned camisasfutebols
    **/
    _count?: true | CamisasfutebolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CamisasfutebolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CamisasfutebolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CamisasfutebolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CamisasfutebolMaxAggregateInputType
  }

  export type GetCamisasfutebolAggregateType<T extends CamisasfutebolAggregateArgs> = {
        [P in keyof T & keyof AggregateCamisasfutebol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCamisasfutebol[P]>
      : GetScalarType<T[P], AggregateCamisasfutebol[P]>
  }




  export type camisasfutebolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: camisasfutebolWhereInput
    orderBy?: camisasfutebolOrderByWithAggregationInput | camisasfutebolOrderByWithAggregationInput[]
    by: CamisasfutebolScalarFieldEnum[] | CamisasfutebolScalarFieldEnum
    having?: camisasfutebolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CamisasfutebolCountAggregateInputType | true
    _avg?: CamisasfutebolAvgAggregateInputType
    _sum?: CamisasfutebolSumAggregateInputType
    _min?: CamisasfutebolMinAggregateInputType
    _max?: CamisasfutebolMaxAggregateInputType
  }

  export type CamisasfutebolGroupByOutputType = {
    id: string
    nome: string
    preco: number
    time: string
    descricao: string
    imagens: string[]
    modelo: string
    versao: string
    tamanho: string
    ano: number | null
    createdAt: Date
    updatedAt: Date
    _count: CamisasfutebolCountAggregateOutputType | null
    _avg: CamisasfutebolAvgAggregateOutputType | null
    _sum: CamisasfutebolSumAggregateOutputType | null
    _min: CamisasfutebolMinAggregateOutputType | null
    _max: CamisasfutebolMaxAggregateOutputType | null
  }

  type GetCamisasfutebolGroupByPayload<T extends camisasfutebolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CamisasfutebolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CamisasfutebolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CamisasfutebolGroupByOutputType[P]>
            : GetScalarType<T[P], CamisasfutebolGroupByOutputType[P]>
        }
      >
    >


  export type camisasfutebolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    time?: boolean
    descricao?: boolean
    imagens?: boolean
    modelo?: boolean
    versao?: boolean
    tamanho?: boolean
    ano?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["camisasfutebol"]>

  export type camisasfutebolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    time?: boolean
    descricao?: boolean
    imagens?: boolean
    modelo?: boolean
    versao?: boolean
    tamanho?: boolean
    ano?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["camisasfutebol"]>

  export type camisasfutebolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    time?: boolean
    descricao?: boolean
    imagens?: boolean
    modelo?: boolean
    versao?: boolean
    tamanho?: boolean
    ano?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["camisasfutebol"]>

  export type camisasfutebolSelectScalar = {
    id?: boolean
    nome?: boolean
    preco?: boolean
    time?: boolean
    descricao?: boolean
    imagens?: boolean
    modelo?: boolean
    versao?: boolean
    tamanho?: boolean
    ano?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type camisasfutebolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "preco" | "time" | "descricao" | "imagens" | "modelo" | "versao" | "tamanho" | "ano" | "createdAt" | "updatedAt", ExtArgs["result"]["camisasfutebol"]>

  export type $camisasfutebolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "camisasfutebol"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      preco: number
      time: string
      descricao: string
      imagens: string[]
      modelo: string
      versao: string
      tamanho: string
      ano: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["camisasfutebol"]>
    composites: {}
  }

  type camisasfutebolGetPayload<S extends boolean | null | undefined | camisasfutebolDefaultArgs> = $Result.GetResult<Prisma.$camisasfutebolPayload, S>

  type camisasfutebolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<camisasfutebolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CamisasfutebolCountAggregateInputType | true
    }

  export interface camisasfutebolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['camisasfutebol'], meta: { name: 'camisasfutebol' } }
    /**
     * Find zero or one Camisasfutebol that matches the filter.
     * @param {camisasfutebolFindUniqueArgs} args - Arguments to find a Camisasfutebol
     * @example
     * // Get one Camisasfutebol
     * const camisasfutebol = await prisma.camisasfutebol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends camisasfutebolFindUniqueArgs>(args: SelectSubset<T, camisasfutebolFindUniqueArgs<ExtArgs>>): Prisma__camisasfutebolClient<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Camisasfutebol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {camisasfutebolFindUniqueOrThrowArgs} args - Arguments to find a Camisasfutebol
     * @example
     * // Get one Camisasfutebol
     * const camisasfutebol = await prisma.camisasfutebol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends camisasfutebolFindUniqueOrThrowArgs>(args: SelectSubset<T, camisasfutebolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__camisasfutebolClient<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Camisasfutebol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camisasfutebolFindFirstArgs} args - Arguments to find a Camisasfutebol
     * @example
     * // Get one Camisasfutebol
     * const camisasfutebol = await prisma.camisasfutebol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends camisasfutebolFindFirstArgs>(args?: SelectSubset<T, camisasfutebolFindFirstArgs<ExtArgs>>): Prisma__camisasfutebolClient<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Camisasfutebol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camisasfutebolFindFirstOrThrowArgs} args - Arguments to find a Camisasfutebol
     * @example
     * // Get one Camisasfutebol
     * const camisasfutebol = await prisma.camisasfutebol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends camisasfutebolFindFirstOrThrowArgs>(args?: SelectSubset<T, camisasfutebolFindFirstOrThrowArgs<ExtArgs>>): Prisma__camisasfutebolClient<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Camisasfutebols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camisasfutebolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Camisasfutebols
     * const camisasfutebols = await prisma.camisasfutebol.findMany()
     * 
     * // Get first 10 Camisasfutebols
     * const camisasfutebols = await prisma.camisasfutebol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const camisasfutebolWithIdOnly = await prisma.camisasfutebol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends camisasfutebolFindManyArgs>(args?: SelectSubset<T, camisasfutebolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Camisasfutebol.
     * @param {camisasfutebolCreateArgs} args - Arguments to create a Camisasfutebol.
     * @example
     * // Create one Camisasfutebol
     * const Camisasfutebol = await prisma.camisasfutebol.create({
     *   data: {
     *     // ... data to create a Camisasfutebol
     *   }
     * })
     * 
     */
    create<T extends camisasfutebolCreateArgs>(args: SelectSubset<T, camisasfutebolCreateArgs<ExtArgs>>): Prisma__camisasfutebolClient<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Camisasfutebols.
     * @param {camisasfutebolCreateManyArgs} args - Arguments to create many Camisasfutebols.
     * @example
     * // Create many Camisasfutebols
     * const camisasfutebol = await prisma.camisasfutebol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends camisasfutebolCreateManyArgs>(args?: SelectSubset<T, camisasfutebolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Camisasfutebols and returns the data saved in the database.
     * @param {camisasfutebolCreateManyAndReturnArgs} args - Arguments to create many Camisasfutebols.
     * @example
     * // Create many Camisasfutebols
     * const camisasfutebol = await prisma.camisasfutebol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Camisasfutebols and only return the `id`
     * const camisasfutebolWithIdOnly = await prisma.camisasfutebol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends camisasfutebolCreateManyAndReturnArgs>(args?: SelectSubset<T, camisasfutebolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Camisasfutebol.
     * @param {camisasfutebolDeleteArgs} args - Arguments to delete one Camisasfutebol.
     * @example
     * // Delete one Camisasfutebol
     * const Camisasfutebol = await prisma.camisasfutebol.delete({
     *   where: {
     *     // ... filter to delete one Camisasfutebol
     *   }
     * })
     * 
     */
    delete<T extends camisasfutebolDeleteArgs>(args: SelectSubset<T, camisasfutebolDeleteArgs<ExtArgs>>): Prisma__camisasfutebolClient<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Camisasfutebol.
     * @param {camisasfutebolUpdateArgs} args - Arguments to update one Camisasfutebol.
     * @example
     * // Update one Camisasfutebol
     * const camisasfutebol = await prisma.camisasfutebol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends camisasfutebolUpdateArgs>(args: SelectSubset<T, camisasfutebolUpdateArgs<ExtArgs>>): Prisma__camisasfutebolClient<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Camisasfutebols.
     * @param {camisasfutebolDeleteManyArgs} args - Arguments to filter Camisasfutebols to delete.
     * @example
     * // Delete a few Camisasfutebols
     * const { count } = await prisma.camisasfutebol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends camisasfutebolDeleteManyArgs>(args?: SelectSubset<T, camisasfutebolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Camisasfutebols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camisasfutebolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Camisasfutebols
     * const camisasfutebol = await prisma.camisasfutebol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends camisasfutebolUpdateManyArgs>(args: SelectSubset<T, camisasfutebolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Camisasfutebols and returns the data updated in the database.
     * @param {camisasfutebolUpdateManyAndReturnArgs} args - Arguments to update many Camisasfutebols.
     * @example
     * // Update many Camisasfutebols
     * const camisasfutebol = await prisma.camisasfutebol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Camisasfutebols and only return the `id`
     * const camisasfutebolWithIdOnly = await prisma.camisasfutebol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends camisasfutebolUpdateManyAndReturnArgs>(args: SelectSubset<T, camisasfutebolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Camisasfutebol.
     * @param {camisasfutebolUpsertArgs} args - Arguments to update or create a Camisasfutebol.
     * @example
     * // Update or create a Camisasfutebol
     * const camisasfutebol = await prisma.camisasfutebol.upsert({
     *   create: {
     *     // ... data to create a Camisasfutebol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Camisasfutebol we want to update
     *   }
     * })
     */
    upsert<T extends camisasfutebolUpsertArgs>(args: SelectSubset<T, camisasfutebolUpsertArgs<ExtArgs>>): Prisma__camisasfutebolClient<$Result.GetResult<Prisma.$camisasfutebolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Camisasfutebols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camisasfutebolCountArgs} args - Arguments to filter Camisasfutebols to count.
     * @example
     * // Count the number of Camisasfutebols
     * const count = await prisma.camisasfutebol.count({
     *   where: {
     *     // ... the filter for the Camisasfutebols we want to count
     *   }
     * })
    **/
    count<T extends camisasfutebolCountArgs>(
      args?: Subset<T, camisasfutebolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CamisasfutebolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Camisasfutebol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CamisasfutebolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CamisasfutebolAggregateArgs>(args: Subset<T, CamisasfutebolAggregateArgs>): Prisma.PrismaPromise<GetCamisasfutebolAggregateType<T>>

    /**
     * Group by Camisasfutebol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camisasfutebolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends camisasfutebolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: camisasfutebolGroupByArgs['orderBy'] }
        : { orderBy?: camisasfutebolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, camisasfutebolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCamisasfutebolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the camisasfutebol model
   */
  readonly fields: camisasfutebolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for camisasfutebol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__camisasfutebolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the camisasfutebol model
   */
  interface camisasfutebolFieldRefs {
    readonly id: FieldRef<"camisasfutebol", 'String'>
    readonly nome: FieldRef<"camisasfutebol", 'String'>
    readonly preco: FieldRef<"camisasfutebol", 'Float'>
    readonly time: FieldRef<"camisasfutebol", 'String'>
    readonly descricao: FieldRef<"camisasfutebol", 'String'>
    readonly imagens: FieldRef<"camisasfutebol", 'String[]'>
    readonly modelo: FieldRef<"camisasfutebol", 'String'>
    readonly versao: FieldRef<"camisasfutebol", 'String'>
    readonly tamanho: FieldRef<"camisasfutebol", 'String'>
    readonly ano: FieldRef<"camisasfutebol", 'Int'>
    readonly createdAt: FieldRef<"camisasfutebol", 'DateTime'>
    readonly updatedAt: FieldRef<"camisasfutebol", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * camisasfutebol findUnique
   */
  export type camisasfutebolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * Filter, which camisasfutebol to fetch.
     */
    where: camisasfutebolWhereUniqueInput
  }

  /**
   * camisasfutebol findUniqueOrThrow
   */
  export type camisasfutebolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * Filter, which camisasfutebol to fetch.
     */
    where: camisasfutebolWhereUniqueInput
  }

  /**
   * camisasfutebol findFirst
   */
  export type camisasfutebolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * Filter, which camisasfutebol to fetch.
     */
    where?: camisasfutebolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camisasfutebols to fetch.
     */
    orderBy?: camisasfutebolOrderByWithRelationInput | camisasfutebolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for camisasfutebols.
     */
    cursor?: camisasfutebolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camisasfutebols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camisasfutebols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of camisasfutebols.
     */
    distinct?: CamisasfutebolScalarFieldEnum | CamisasfutebolScalarFieldEnum[]
  }

  /**
   * camisasfutebol findFirstOrThrow
   */
  export type camisasfutebolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * Filter, which camisasfutebol to fetch.
     */
    where?: camisasfutebolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camisasfutebols to fetch.
     */
    orderBy?: camisasfutebolOrderByWithRelationInput | camisasfutebolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for camisasfutebols.
     */
    cursor?: camisasfutebolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camisasfutebols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camisasfutebols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of camisasfutebols.
     */
    distinct?: CamisasfutebolScalarFieldEnum | CamisasfutebolScalarFieldEnum[]
  }

  /**
   * camisasfutebol findMany
   */
  export type camisasfutebolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * Filter, which camisasfutebols to fetch.
     */
    where?: camisasfutebolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camisasfutebols to fetch.
     */
    orderBy?: camisasfutebolOrderByWithRelationInput | camisasfutebolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing camisasfutebols.
     */
    cursor?: camisasfutebolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camisasfutebols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camisasfutebols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of camisasfutebols.
     */
    distinct?: CamisasfutebolScalarFieldEnum | CamisasfutebolScalarFieldEnum[]
  }

  /**
   * camisasfutebol create
   */
  export type camisasfutebolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * The data needed to create a camisasfutebol.
     */
    data?: XOR<camisasfutebolCreateInput, camisasfutebolUncheckedCreateInput>
  }

  /**
   * camisasfutebol createMany
   */
  export type camisasfutebolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many camisasfutebols.
     */
    data: camisasfutebolCreateManyInput | camisasfutebolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * camisasfutebol createManyAndReturn
   */
  export type camisasfutebolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * The data used to create many camisasfutebols.
     */
    data: camisasfutebolCreateManyInput | camisasfutebolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * camisasfutebol update
   */
  export type camisasfutebolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * The data needed to update a camisasfutebol.
     */
    data: XOR<camisasfutebolUpdateInput, camisasfutebolUncheckedUpdateInput>
    /**
     * Choose, which camisasfutebol to update.
     */
    where: camisasfutebolWhereUniqueInput
  }

  /**
   * camisasfutebol updateMany
   */
  export type camisasfutebolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update camisasfutebols.
     */
    data: XOR<camisasfutebolUpdateManyMutationInput, camisasfutebolUncheckedUpdateManyInput>
    /**
     * Filter which camisasfutebols to update
     */
    where?: camisasfutebolWhereInput
    /**
     * Limit how many camisasfutebols to update.
     */
    limit?: number
  }

  /**
   * camisasfutebol updateManyAndReturn
   */
  export type camisasfutebolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * The data used to update camisasfutebols.
     */
    data: XOR<camisasfutebolUpdateManyMutationInput, camisasfutebolUncheckedUpdateManyInput>
    /**
     * Filter which camisasfutebols to update
     */
    where?: camisasfutebolWhereInput
    /**
     * Limit how many camisasfutebols to update.
     */
    limit?: number
  }

  /**
   * camisasfutebol upsert
   */
  export type camisasfutebolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * The filter to search for the camisasfutebol to update in case it exists.
     */
    where: camisasfutebolWhereUniqueInput
    /**
     * In case the camisasfutebol found by the `where` argument doesn't exist, create a new camisasfutebol with this data.
     */
    create: XOR<camisasfutebolCreateInput, camisasfutebolUncheckedCreateInput>
    /**
     * In case the camisasfutebol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<camisasfutebolUpdateInput, camisasfutebolUncheckedUpdateInput>
  }

  /**
   * camisasfutebol delete
   */
  export type camisasfutebolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
    /**
     * Filter which camisasfutebol to delete.
     */
    where: camisasfutebolWhereUniqueInput
  }

  /**
   * camisasfutebol deleteMany
   */
  export type camisasfutebolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which camisasfutebols to delete
     */
    where?: camisasfutebolWhereInput
    /**
     * Limit how many camisasfutebols to delete.
     */
    limit?: number
  }

  /**
   * camisasfutebol without action
   */
  export type camisasfutebolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camisasfutebol
     */
    select?: camisasfutebolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camisasfutebol
     */
    omit?: camisasfutebolOmit<ExtArgs> | null
  }


  /**
   * Model RequestLog
   */

  export type AggregateRequestLog = {
    _count: RequestLogCountAggregateOutputType | null
    _avg: RequestLogAvgAggregateOutputType | null
    _sum: RequestLogSumAggregateOutputType | null
    _min: RequestLogMinAggregateOutputType | null
    _max: RequestLogMaxAggregateOutputType | null
  }

  export type RequestLogAvgAggregateOutputType = {
    statusCode: number | null
    durationMs: number | null
  }

  export type RequestLogSumAggregateOutputType = {
    statusCode: number | null
    durationMs: number | null
  }

  export type RequestLogMinAggregateOutputType = {
    id: string | null
    method: string | null
    path: string | null
    statusCode: number | null
    durationMs: number | null
    ip: string | null
    userAgent: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type RequestLogMaxAggregateOutputType = {
    id: string | null
    method: string | null
    path: string | null
    statusCode: number | null
    durationMs: number | null
    ip: string | null
    userAgent: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type RequestLogCountAggregateOutputType = {
    id: number
    method: number
    path: number
    statusCode: number
    durationMs: number
    ip: number
    userAgent: number
    userId: number
    createdAt: number
    _all: number
  }


  export type RequestLogAvgAggregateInputType = {
    statusCode?: true
    durationMs?: true
  }

  export type RequestLogSumAggregateInputType = {
    statusCode?: true
    durationMs?: true
  }

  export type RequestLogMinAggregateInputType = {
    id?: true
    method?: true
    path?: true
    statusCode?: true
    durationMs?: true
    ip?: true
    userAgent?: true
    userId?: true
    createdAt?: true
  }

  export type RequestLogMaxAggregateInputType = {
    id?: true
    method?: true
    path?: true
    statusCode?: true
    durationMs?: true
    ip?: true
    userAgent?: true
    userId?: true
    createdAt?: true
  }

  export type RequestLogCountAggregateInputType = {
    id?: true
    method?: true
    path?: true
    statusCode?: true
    durationMs?: true
    ip?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type RequestLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestLog to aggregate.
     */
    where?: RequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestLogs to fetch.
     */
    orderBy?: RequestLogOrderByWithRelationInput | RequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestLogs
    **/
    _count?: true | RequestLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestLogMaxAggregateInputType
  }

  export type GetRequestLogAggregateType<T extends RequestLogAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestLog[P]>
      : GetScalarType<T[P], AggregateRequestLog[P]>
  }




  export type RequestLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestLogWhereInput
    orderBy?: RequestLogOrderByWithAggregationInput | RequestLogOrderByWithAggregationInput[]
    by: RequestLogScalarFieldEnum[] | RequestLogScalarFieldEnum
    having?: RequestLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestLogCountAggregateInputType | true
    _avg?: RequestLogAvgAggregateInputType
    _sum?: RequestLogSumAggregateInputType
    _min?: RequestLogMinAggregateInputType
    _max?: RequestLogMaxAggregateInputType
  }

  export type RequestLogGroupByOutputType = {
    id: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ip: string | null
    userAgent: string | null
    userId: string | null
    createdAt: Date
    _count: RequestLogCountAggregateOutputType | null
    _avg: RequestLogAvgAggregateOutputType | null
    _sum: RequestLogSumAggregateOutputType | null
    _min: RequestLogMinAggregateOutputType | null
    _max: RequestLogMaxAggregateOutputType | null
  }

  type GetRequestLogGroupByPayload<T extends RequestLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestLogGroupByOutputType[P]>
            : GetScalarType<T[P], RequestLogGroupByOutputType[P]>
        }
      >
    >


  export type RequestLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    durationMs?: boolean
    ip?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | RequestLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["requestLog"]>

  export type RequestLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    durationMs?: boolean
    ip?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | RequestLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["requestLog"]>

  export type RequestLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    durationMs?: boolean
    ip?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | RequestLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["requestLog"]>

  export type RequestLogSelectScalar = {
    id?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    durationMs?: boolean
    ip?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type RequestLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "method" | "path" | "statusCode" | "durationMs" | "ip" | "userAgent" | "userId" | "createdAt", ExtArgs["result"]["requestLog"]>
  export type RequestLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RequestLog$userArgs<ExtArgs>
  }
  export type RequestLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RequestLog$userArgs<ExtArgs>
  }
  export type RequestLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RequestLog$userArgs<ExtArgs>
  }

  export type $RequestLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      method: string
      path: string
      statusCode: number
      durationMs: number
      ip: string | null
      userAgent: string | null
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["requestLog"]>
    composites: {}
  }

  type RequestLogGetPayload<S extends boolean | null | undefined | RequestLogDefaultArgs> = $Result.GetResult<Prisma.$RequestLogPayload, S>

  type RequestLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestLogCountAggregateInputType | true
    }

  export interface RequestLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestLog'], meta: { name: 'RequestLog' } }
    /**
     * Find zero or one RequestLog that matches the filter.
     * @param {RequestLogFindUniqueArgs} args - Arguments to find a RequestLog
     * @example
     * // Get one RequestLog
     * const requestLog = await prisma.requestLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestLogFindUniqueArgs>(args: SelectSubset<T, RequestLogFindUniqueArgs<ExtArgs>>): Prisma__RequestLogClient<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestLogFindUniqueOrThrowArgs} args - Arguments to find a RequestLog
     * @example
     * // Get one RequestLog
     * const requestLog = await prisma.requestLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestLogFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestLogClient<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogFindFirstArgs} args - Arguments to find a RequestLog
     * @example
     * // Get one RequestLog
     * const requestLog = await prisma.requestLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestLogFindFirstArgs>(args?: SelectSubset<T, RequestLogFindFirstArgs<ExtArgs>>): Prisma__RequestLogClient<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogFindFirstOrThrowArgs} args - Arguments to find a RequestLog
     * @example
     * // Get one RequestLog
     * const requestLog = await prisma.requestLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestLogFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestLogClient<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestLogs
     * const requestLogs = await prisma.requestLog.findMany()
     * 
     * // Get first 10 RequestLogs
     * const requestLogs = await prisma.requestLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestLogWithIdOnly = await prisma.requestLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestLogFindManyArgs>(args?: SelectSubset<T, RequestLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestLog.
     * @param {RequestLogCreateArgs} args - Arguments to create a RequestLog.
     * @example
     * // Create one RequestLog
     * const RequestLog = await prisma.requestLog.create({
     *   data: {
     *     // ... data to create a RequestLog
     *   }
     * })
     * 
     */
    create<T extends RequestLogCreateArgs>(args: SelectSubset<T, RequestLogCreateArgs<ExtArgs>>): Prisma__RequestLogClient<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestLogs.
     * @param {RequestLogCreateManyArgs} args - Arguments to create many RequestLogs.
     * @example
     * // Create many RequestLogs
     * const requestLog = await prisma.requestLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestLogCreateManyArgs>(args?: SelectSubset<T, RequestLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestLogs and returns the data saved in the database.
     * @param {RequestLogCreateManyAndReturnArgs} args - Arguments to create many RequestLogs.
     * @example
     * // Create many RequestLogs
     * const requestLog = await prisma.requestLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestLogs and only return the `id`
     * const requestLogWithIdOnly = await prisma.requestLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestLogCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestLog.
     * @param {RequestLogDeleteArgs} args - Arguments to delete one RequestLog.
     * @example
     * // Delete one RequestLog
     * const RequestLog = await prisma.requestLog.delete({
     *   where: {
     *     // ... filter to delete one RequestLog
     *   }
     * })
     * 
     */
    delete<T extends RequestLogDeleteArgs>(args: SelectSubset<T, RequestLogDeleteArgs<ExtArgs>>): Prisma__RequestLogClient<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestLog.
     * @param {RequestLogUpdateArgs} args - Arguments to update one RequestLog.
     * @example
     * // Update one RequestLog
     * const requestLog = await prisma.requestLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestLogUpdateArgs>(args: SelectSubset<T, RequestLogUpdateArgs<ExtArgs>>): Prisma__RequestLogClient<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestLogs.
     * @param {RequestLogDeleteManyArgs} args - Arguments to filter RequestLogs to delete.
     * @example
     * // Delete a few RequestLogs
     * const { count } = await prisma.requestLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestLogDeleteManyArgs>(args?: SelectSubset<T, RequestLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestLogs
     * const requestLog = await prisma.requestLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestLogUpdateManyArgs>(args: SelectSubset<T, RequestLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestLogs and returns the data updated in the database.
     * @param {RequestLogUpdateManyAndReturnArgs} args - Arguments to update many RequestLogs.
     * @example
     * // Update many RequestLogs
     * const requestLog = await prisma.requestLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestLogs and only return the `id`
     * const requestLogWithIdOnly = await prisma.requestLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestLogUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestLog.
     * @param {RequestLogUpsertArgs} args - Arguments to update or create a RequestLog.
     * @example
     * // Update or create a RequestLog
     * const requestLog = await prisma.requestLog.upsert({
     *   create: {
     *     // ... data to create a RequestLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestLog we want to update
     *   }
     * })
     */
    upsert<T extends RequestLogUpsertArgs>(args: SelectSubset<T, RequestLogUpsertArgs<ExtArgs>>): Prisma__RequestLogClient<$Result.GetResult<Prisma.$RequestLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogCountArgs} args - Arguments to filter RequestLogs to count.
     * @example
     * // Count the number of RequestLogs
     * const count = await prisma.requestLog.count({
     *   where: {
     *     // ... the filter for the RequestLogs we want to count
     *   }
     * })
    **/
    count<T extends RequestLogCountArgs>(
      args?: Subset<T, RequestLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestLogAggregateArgs>(args: Subset<T, RequestLogAggregateArgs>): Prisma.PrismaPromise<GetRequestLogAggregateType<T>>

    /**
     * Group by RequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestLogGroupByArgs['orderBy'] }
        : { orderBy?: RequestLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestLog model
   */
  readonly fields: RequestLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends RequestLog$userArgs<ExtArgs> = {}>(args?: Subset<T, RequestLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequestLog model
   */
  interface RequestLogFieldRefs {
    readonly id: FieldRef<"RequestLog", 'String'>
    readonly method: FieldRef<"RequestLog", 'String'>
    readonly path: FieldRef<"RequestLog", 'String'>
    readonly statusCode: FieldRef<"RequestLog", 'Int'>
    readonly durationMs: FieldRef<"RequestLog", 'Int'>
    readonly ip: FieldRef<"RequestLog", 'String'>
    readonly userAgent: FieldRef<"RequestLog", 'String'>
    readonly userId: FieldRef<"RequestLog", 'String'>
    readonly createdAt: FieldRef<"RequestLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestLog findUnique
   */
  export type RequestLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestLog to fetch.
     */
    where: RequestLogWhereUniqueInput
  }

  /**
   * RequestLog findUniqueOrThrow
   */
  export type RequestLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestLog to fetch.
     */
    where: RequestLogWhereUniqueInput
  }

  /**
   * RequestLog findFirst
   */
  export type RequestLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestLog to fetch.
     */
    where?: RequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestLogs to fetch.
     */
    orderBy?: RequestLogOrderByWithRelationInput | RequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestLogs.
     */
    cursor?: RequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestLogs.
     */
    distinct?: RequestLogScalarFieldEnum | RequestLogScalarFieldEnum[]
  }

  /**
   * RequestLog findFirstOrThrow
   */
  export type RequestLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestLog to fetch.
     */
    where?: RequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestLogs to fetch.
     */
    orderBy?: RequestLogOrderByWithRelationInput | RequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestLogs.
     */
    cursor?: RequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestLogs.
     */
    distinct?: RequestLogScalarFieldEnum | RequestLogScalarFieldEnum[]
  }

  /**
   * RequestLog findMany
   */
  export type RequestLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    /**
     * Filter, which RequestLogs to fetch.
     */
    where?: RequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestLogs to fetch.
     */
    orderBy?: RequestLogOrderByWithRelationInput | RequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestLogs.
     */
    cursor?: RequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestLogs.
     */
    distinct?: RequestLogScalarFieldEnum | RequestLogScalarFieldEnum[]
  }

  /**
   * RequestLog create
   */
  export type RequestLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestLog.
     */
    data: XOR<RequestLogCreateInput, RequestLogUncheckedCreateInput>
  }

  /**
   * RequestLog createMany
   */
  export type RequestLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestLogs.
     */
    data: RequestLogCreateManyInput | RequestLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestLog createManyAndReturn
   */
  export type RequestLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * The data used to create many RequestLogs.
     */
    data: RequestLogCreateManyInput | RequestLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestLog update
   */
  export type RequestLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestLog.
     */
    data: XOR<RequestLogUpdateInput, RequestLogUncheckedUpdateInput>
    /**
     * Choose, which RequestLog to update.
     */
    where: RequestLogWhereUniqueInput
  }

  /**
   * RequestLog updateMany
   */
  export type RequestLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestLogs.
     */
    data: XOR<RequestLogUpdateManyMutationInput, RequestLogUncheckedUpdateManyInput>
    /**
     * Filter which RequestLogs to update
     */
    where?: RequestLogWhereInput
    /**
     * Limit how many RequestLogs to update.
     */
    limit?: number
  }

  /**
   * RequestLog updateManyAndReturn
   */
  export type RequestLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * The data used to update RequestLogs.
     */
    data: XOR<RequestLogUpdateManyMutationInput, RequestLogUncheckedUpdateManyInput>
    /**
     * Filter which RequestLogs to update
     */
    where?: RequestLogWhereInput
    /**
     * Limit how many RequestLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestLog upsert
   */
  export type RequestLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestLog to update in case it exists.
     */
    where: RequestLogWhereUniqueInput
    /**
     * In case the RequestLog found by the `where` argument doesn't exist, create a new RequestLog with this data.
     */
    create: XOR<RequestLogCreateInput, RequestLogUncheckedCreateInput>
    /**
     * In case the RequestLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestLogUpdateInput, RequestLogUncheckedUpdateInput>
  }

  /**
   * RequestLog delete
   */
  export type RequestLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
    /**
     * Filter which RequestLog to delete.
     */
    where: RequestLogWhereUniqueInput
  }

  /**
   * RequestLog deleteMany
   */
  export type RequestLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestLogs to delete
     */
    where?: RequestLogWhereInput
    /**
     * Limit how many RequestLogs to delete.
     */
    limit?: number
  }

  /**
   * RequestLog.user
   */
  export type RequestLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RequestLog without action
   */
  export type RequestLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestLog
     */
    select?: RequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestLog
     */
    omit?: RequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    nome: 'nome',
    sobrenome: 'sobrenome',
    email: 'email',
    id: 'id',
    senhaHash: 'senhaHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CamisasfutebolScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    preco: 'preco',
    time: 'time',
    descricao: 'descricao',
    imagens: 'imagens',
    modelo: 'modelo',
    versao: 'versao',
    tamanho: 'tamanho',
    ano: 'ano',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CamisasfutebolScalarFieldEnum = (typeof CamisasfutebolScalarFieldEnum)[keyof typeof CamisasfutebolScalarFieldEnum]


  export const RequestLogScalarFieldEnum: {
    id: 'id',
    method: 'method',
    path: 'path',
    statusCode: 'statusCode',
    durationMs: 'durationMs',
    ip: 'ip',
    userAgent: 'userAgent',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type RequestLogScalarFieldEnum = (typeof RequestLogScalarFieldEnum)[keyof typeof RequestLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    sobrenome?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    id?: UuidFilter<"User"> | string
    senhaHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    requestLogs?: RequestLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    nome?: SortOrder
    sobrenome?: SortOrderInput | SortOrder
    email?: SortOrder
    id?: SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestLogs?: RequestLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    sobrenome?: StringNullableFilter<"User"> | string | null
    senhaHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    requestLogs?: RequestLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    nome?: SortOrder
    sobrenome?: SortOrderInput | SortOrder
    email?: SortOrder
    id?: SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"User"> | string
    sobrenome?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    id?: UuidWithAggregatesFilter<"User"> | string
    senhaHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type camisasfutebolWhereInput = {
    AND?: camisasfutebolWhereInput | camisasfutebolWhereInput[]
    OR?: camisasfutebolWhereInput[]
    NOT?: camisasfutebolWhereInput | camisasfutebolWhereInput[]
    id?: UuidFilter<"camisasfutebol"> | string
    nome?: StringFilter<"camisasfutebol"> | string
    preco?: FloatFilter<"camisasfutebol"> | number
    time?: StringFilter<"camisasfutebol"> | string
    descricao?: StringFilter<"camisasfutebol"> | string
    imagens?: StringNullableListFilter<"camisasfutebol">
    modelo?: StringFilter<"camisasfutebol"> | string
    versao?: StringFilter<"camisasfutebol"> | string
    tamanho?: StringFilter<"camisasfutebol"> | string
    ano?: IntNullableFilter<"camisasfutebol"> | number | null
    createdAt?: DateTimeFilter<"camisasfutebol"> | Date | string
    updatedAt?: DateTimeFilter<"camisasfutebol"> | Date | string
  }

  export type camisasfutebolOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    time?: SortOrder
    descricao?: SortOrder
    imagens?: SortOrder
    modelo?: SortOrder
    versao?: SortOrder
    tamanho?: SortOrder
    ano?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type camisasfutebolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: camisasfutebolWhereInput | camisasfutebolWhereInput[]
    OR?: camisasfutebolWhereInput[]
    NOT?: camisasfutebolWhereInput | camisasfutebolWhereInput[]
    nome?: StringFilter<"camisasfutebol"> | string
    preco?: FloatFilter<"camisasfutebol"> | number
    time?: StringFilter<"camisasfutebol"> | string
    descricao?: StringFilter<"camisasfutebol"> | string
    imagens?: StringNullableListFilter<"camisasfutebol">
    modelo?: StringFilter<"camisasfutebol"> | string
    versao?: StringFilter<"camisasfutebol"> | string
    tamanho?: StringFilter<"camisasfutebol"> | string
    ano?: IntNullableFilter<"camisasfutebol"> | number | null
    createdAt?: DateTimeFilter<"camisasfutebol"> | Date | string
    updatedAt?: DateTimeFilter<"camisasfutebol"> | Date | string
  }, "id">

  export type camisasfutebolOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    time?: SortOrder
    descricao?: SortOrder
    imagens?: SortOrder
    modelo?: SortOrder
    versao?: SortOrder
    tamanho?: SortOrder
    ano?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: camisasfutebolCountOrderByAggregateInput
    _avg?: camisasfutebolAvgOrderByAggregateInput
    _max?: camisasfutebolMaxOrderByAggregateInput
    _min?: camisasfutebolMinOrderByAggregateInput
    _sum?: camisasfutebolSumOrderByAggregateInput
  }

  export type camisasfutebolScalarWhereWithAggregatesInput = {
    AND?: camisasfutebolScalarWhereWithAggregatesInput | camisasfutebolScalarWhereWithAggregatesInput[]
    OR?: camisasfutebolScalarWhereWithAggregatesInput[]
    NOT?: camisasfutebolScalarWhereWithAggregatesInput | camisasfutebolScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"camisasfutebol"> | string
    nome?: StringWithAggregatesFilter<"camisasfutebol"> | string
    preco?: FloatWithAggregatesFilter<"camisasfutebol"> | number
    time?: StringWithAggregatesFilter<"camisasfutebol"> | string
    descricao?: StringWithAggregatesFilter<"camisasfutebol"> | string
    imagens?: StringNullableListFilter<"camisasfutebol">
    modelo?: StringWithAggregatesFilter<"camisasfutebol"> | string
    versao?: StringWithAggregatesFilter<"camisasfutebol"> | string
    tamanho?: StringWithAggregatesFilter<"camisasfutebol"> | string
    ano?: IntNullableWithAggregatesFilter<"camisasfutebol"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"camisasfutebol"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"camisasfutebol"> | Date | string
  }

  export type RequestLogWhereInput = {
    AND?: RequestLogWhereInput | RequestLogWhereInput[]
    OR?: RequestLogWhereInput[]
    NOT?: RequestLogWhereInput | RequestLogWhereInput[]
    id?: UuidFilter<"RequestLog"> | string
    method?: StringFilter<"RequestLog"> | string
    path?: StringFilter<"RequestLog"> | string
    statusCode?: IntFilter<"RequestLog"> | number
    durationMs?: IntFilter<"RequestLog"> | number
    ip?: StringNullableFilter<"RequestLog"> | string | null
    userAgent?: StringNullableFilter<"RequestLog"> | string | null
    userId?: UuidNullableFilter<"RequestLog"> | string | null
    createdAt?: DateTimeFilter<"RequestLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RequestLogOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RequestLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestLogWhereInput | RequestLogWhereInput[]
    OR?: RequestLogWhereInput[]
    NOT?: RequestLogWhereInput | RequestLogWhereInput[]
    method?: StringFilter<"RequestLog"> | string
    path?: StringFilter<"RequestLog"> | string
    statusCode?: IntFilter<"RequestLog"> | number
    durationMs?: IntFilter<"RequestLog"> | number
    ip?: StringNullableFilter<"RequestLog"> | string | null
    userAgent?: StringNullableFilter<"RequestLog"> | string | null
    userId?: UuidNullableFilter<"RequestLog"> | string | null
    createdAt?: DateTimeFilter<"RequestLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RequestLogOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RequestLogCountOrderByAggregateInput
    _avg?: RequestLogAvgOrderByAggregateInput
    _max?: RequestLogMaxOrderByAggregateInput
    _min?: RequestLogMinOrderByAggregateInput
    _sum?: RequestLogSumOrderByAggregateInput
  }

  export type RequestLogScalarWhereWithAggregatesInput = {
    AND?: RequestLogScalarWhereWithAggregatesInput | RequestLogScalarWhereWithAggregatesInput[]
    OR?: RequestLogScalarWhereWithAggregatesInput[]
    NOT?: RequestLogScalarWhereWithAggregatesInput | RequestLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RequestLog"> | string
    method?: StringWithAggregatesFilter<"RequestLog"> | string
    path?: StringWithAggregatesFilter<"RequestLog"> | string
    statusCode?: IntWithAggregatesFilter<"RequestLog"> | number
    durationMs?: IntWithAggregatesFilter<"RequestLog"> | number
    ip?: StringNullableWithAggregatesFilter<"RequestLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"RequestLog"> | string | null
    userId?: UuidNullableWithAggregatesFilter<"RequestLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RequestLog"> | Date | string
  }

  export type UserCreateInput = {
    nome: string
    sobrenome?: string | null
    email: string
    id?: string
    senhaHash?: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    requestLogs?: RequestLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    nome: string
    sobrenome?: string | null
    email: string
    id?: string
    senhaHash?: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    requestLogs?: RequestLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestLogs?: RequestLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestLogs?: RequestLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    nome: string
    sobrenome?: string | null
    email: string
    id?: string
    senhaHash?: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type camisasfutebolCreateInput = {
    id?: string
    nome?: string
    preco?: number
    time?: string
    descricao?: string
    imagens?: camisasfutebolCreateimagensInput | string[]
    modelo?: string
    versao?: string
    tamanho?: string
    ano?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type camisasfutebolUncheckedCreateInput = {
    id?: string
    nome?: string
    preco?: number
    time?: string
    descricao?: string
    imagens?: camisasfutebolCreateimagensInput | string[]
    modelo?: string
    versao?: string
    tamanho?: string
    ano?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type camisasfutebolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: camisasfutebolUpdateimagensInput | string[]
    modelo?: StringFieldUpdateOperationsInput | string
    versao?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type camisasfutebolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: camisasfutebolUpdateimagensInput | string[]
    modelo?: StringFieldUpdateOperationsInput | string
    versao?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type camisasfutebolCreateManyInput = {
    id?: string
    nome?: string
    preco?: number
    time?: string
    descricao?: string
    imagens?: camisasfutebolCreateimagensInput | string[]
    modelo?: string
    versao?: string
    tamanho?: string
    ano?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type camisasfutebolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: camisasfutebolUpdateimagensInput | string[]
    modelo?: StringFieldUpdateOperationsInput | string
    versao?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type camisasfutebolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: camisasfutebolUpdateimagensInput | string[]
    modelo?: StringFieldUpdateOperationsInput | string
    versao?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogCreateInput = {
    id?: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutRequestLogsInput
  }

  export type RequestLogUncheckedCreateInput = {
    id?: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ip?: string | null
    userAgent?: string | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type RequestLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutRequestLogsNestedInput
  }

  export type RequestLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogCreateManyInput = {
    id?: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ip?: string | null
    userAgent?: string | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type RequestLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RequestLogListRelationFilter = {
    every?: RequestLogWhereInput
    some?: RequestLogWhereInput
    none?: RequestLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RequestLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    id?: SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    id?: SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    id?: SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type camisasfutebolCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    time?: SortOrder
    descricao?: SortOrder
    imagens?: SortOrder
    modelo?: SortOrder
    versao?: SortOrder
    tamanho?: SortOrder
    ano?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type camisasfutebolAvgOrderByAggregateInput = {
    preco?: SortOrder
    ano?: SortOrder
  }

  export type camisasfutebolMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    time?: SortOrder
    descricao?: SortOrder
    modelo?: SortOrder
    versao?: SortOrder
    tamanho?: SortOrder
    ano?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type camisasfutebolMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    time?: SortOrder
    descricao?: SortOrder
    modelo?: SortOrder
    versao?: SortOrder
    tamanho?: SortOrder
    ano?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type camisasfutebolSumOrderByAggregateInput = {
    preco?: SortOrder
    ano?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RequestLogCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    durationMs?: SortOrder
  }

  export type RequestLogMaxOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestLogMinOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
    durationMs?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RequestLogCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestLogCreateWithoutUserInput, RequestLogUncheckedCreateWithoutUserInput> | RequestLogCreateWithoutUserInput[] | RequestLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestLogCreateOrConnectWithoutUserInput | RequestLogCreateOrConnectWithoutUserInput[]
    createMany?: RequestLogCreateManyUserInputEnvelope
    connect?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
  }

  export type RequestLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestLogCreateWithoutUserInput, RequestLogUncheckedCreateWithoutUserInput> | RequestLogCreateWithoutUserInput[] | RequestLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestLogCreateOrConnectWithoutUserInput | RequestLogCreateOrConnectWithoutUserInput[]
    createMany?: RequestLogCreateManyUserInputEnvelope
    connect?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RequestLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestLogCreateWithoutUserInput, RequestLogUncheckedCreateWithoutUserInput> | RequestLogCreateWithoutUserInput[] | RequestLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestLogCreateOrConnectWithoutUserInput | RequestLogCreateOrConnectWithoutUserInput[]
    upsert?: RequestLogUpsertWithWhereUniqueWithoutUserInput | RequestLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestLogCreateManyUserInputEnvelope
    set?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
    disconnect?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
    delete?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
    connect?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
    update?: RequestLogUpdateWithWhereUniqueWithoutUserInput | RequestLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestLogUpdateManyWithWhereWithoutUserInput | RequestLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestLogScalarWhereInput | RequestLogScalarWhereInput[]
  }

  export type RequestLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestLogCreateWithoutUserInput, RequestLogUncheckedCreateWithoutUserInput> | RequestLogCreateWithoutUserInput[] | RequestLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestLogCreateOrConnectWithoutUserInput | RequestLogCreateOrConnectWithoutUserInput[]
    upsert?: RequestLogUpsertWithWhereUniqueWithoutUserInput | RequestLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestLogCreateManyUserInputEnvelope
    set?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
    disconnect?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
    delete?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
    connect?: RequestLogWhereUniqueInput | RequestLogWhereUniqueInput[]
    update?: RequestLogUpdateWithWhereUniqueWithoutUserInput | RequestLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestLogUpdateManyWithWhereWithoutUserInput | RequestLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestLogScalarWhereInput | RequestLogScalarWhereInput[]
  }

  export type camisasfutebolCreateimagensInput = {
    set: string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type camisasfutebolUpdateimagensInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutRequestLogsInput = {
    create?: XOR<UserCreateWithoutRequestLogsInput, UserUncheckedCreateWithoutRequestLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestLogsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutRequestLogsNestedInput = {
    create?: XOR<UserCreateWithoutRequestLogsInput, UserUncheckedCreateWithoutRequestLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestLogsInput
    upsert?: UserUpsertWithoutRequestLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestLogsInput, UserUpdateWithoutRequestLogsInput>, UserUncheckedUpdateWithoutRequestLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RequestLogCreateWithoutUserInput = {
    id?: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type RequestLogUncheckedCreateWithoutUserInput = {
    id?: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type RequestLogCreateOrConnectWithoutUserInput = {
    where: RequestLogWhereUniqueInput
    create: XOR<RequestLogCreateWithoutUserInput, RequestLogUncheckedCreateWithoutUserInput>
  }

  export type RequestLogCreateManyUserInputEnvelope = {
    data: RequestLogCreateManyUserInput | RequestLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RequestLogUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestLogWhereUniqueInput
    update: XOR<RequestLogUpdateWithoutUserInput, RequestLogUncheckedUpdateWithoutUserInput>
    create: XOR<RequestLogCreateWithoutUserInput, RequestLogUncheckedCreateWithoutUserInput>
  }

  export type RequestLogUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestLogWhereUniqueInput
    data: XOR<RequestLogUpdateWithoutUserInput, RequestLogUncheckedUpdateWithoutUserInput>
  }

  export type RequestLogUpdateManyWithWhereWithoutUserInput = {
    where: RequestLogScalarWhereInput
    data: XOR<RequestLogUpdateManyMutationInput, RequestLogUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestLogScalarWhereInput = {
    AND?: RequestLogScalarWhereInput | RequestLogScalarWhereInput[]
    OR?: RequestLogScalarWhereInput[]
    NOT?: RequestLogScalarWhereInput | RequestLogScalarWhereInput[]
    id?: UuidFilter<"RequestLog"> | string
    method?: StringFilter<"RequestLog"> | string
    path?: StringFilter<"RequestLog"> | string
    statusCode?: IntFilter<"RequestLog"> | number
    durationMs?: IntFilter<"RequestLog"> | number
    ip?: StringNullableFilter<"RequestLog"> | string | null
    userAgent?: StringNullableFilter<"RequestLog"> | string | null
    userId?: UuidNullableFilter<"RequestLog"> | string | null
    createdAt?: DateTimeFilter<"RequestLog"> | Date | string
  }

  export type UserCreateWithoutRequestLogsInput = {
    nome: string
    sobrenome?: string | null
    email: string
    id?: string
    senhaHash?: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRequestLogsInput = {
    nome: string
    sobrenome?: string | null
    email: string
    id?: string
    senhaHash?: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRequestLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestLogsInput, UserUncheckedCreateWithoutRequestLogsInput>
  }

  export type UserUpsertWithoutRequestLogsInput = {
    update: XOR<UserUpdateWithoutRequestLogsInput, UserUncheckedUpdateWithoutRequestLogsInput>
    create: XOR<UserCreateWithoutRequestLogsInput, UserUncheckedCreateWithoutRequestLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestLogsInput, UserUncheckedUpdateWithoutRequestLogsInput>
  }

  export type UserUpdateWithoutRequestLogsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRequestLogsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogCreateManyUserInput = {
    id?: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type RequestLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}