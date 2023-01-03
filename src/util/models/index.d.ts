
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  /**
   * To clip different system account
   */
  domain: number
  /**
   * user account
   */
  account: string
  password: string
  salt: string
  /**
   * register account type, 0 is this system, 1 is third_part from google and so on...
   */
  type: number
  /**
   * status code for user, 0: registered, 1: verify account, 2: archived and so on....
   */
  status: number
  /**
   * register time
   */
  createdAt: Date
}

/**
 * Model UserInfo
 * save User basic information
 */
export type UserInfo = {
  /**
   * User id
   */
  userId: number
  /**
   * user name
   */
  name: string | null
  /**
   * bind email, could use for forgot password and so on... is it verifed to see User.status
   */
  email: string | null
  /**
   * Customization data
   */
  custom: Prisma.JsonValue
}

/**
 * Model UserVerify
 * user verify code or another verify info
 */
export type UserVerify = {
  id: number
  /**
   * User id
   */
  userId: number
  /**
   * verify info type, 0: login, 1: email and so on...
   */
  type: number
  /**
   * code status, 0: usable, 1: disable and so on...
   */
  status: number
  /**
   * verify code
   */
  code: string
  /**
   * code expired time
   */
  expiredAt: Date
  /**
   * code created time
   */
  createdAt: Date
}

/**
 * Model LoginRecord
 * user login record, create only.
 */
export type LoginRecord = {
  id: number
  userId: number
  /**
   * status code 0: succeed, 1: failed and so on....
   */
  code: number
  /**
   * record created At, it is often crated at loging
   */
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<GlobalReject>;

  /**
   * `prisma.userVerify`: Exposes CRUD operations for the **UserVerify** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVerifies
    * const userVerifies = await prisma.userVerify.findMany()
    * ```
    */
  get userVerify(): Prisma.UserVerifyDelegate<GlobalReject>;

  /**
   * `prisma.loginRecord`: Exposes CRUD operations for the **LoginRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginRecords
    * const loginRecords = await prisma.loginRecord.findMany()
    * ```
    */
  get loginRecord(): Prisma.LoginRecordDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    UserInfo: 'UserInfo',
    UserVerify: 'UserVerify',
    LoginRecord: 'LoginRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

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
    LoginRecord: number
    UserVerify: number
  }

  export type UserCountOutputTypeSelect = {
    LoginRecord?: boolean
    UserVerify?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    domain: number | null
    type: number | null
    status: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    domain: number | null
    type: number | null
    status: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    domain: number | null
    account: string | null
    password: string | null
    salt: string | null
    type: number | null
    status: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    domain: number | null
    account: string | null
    password: string | null
    salt: string | null
    type: number | null
    status: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    domain: number
    account: number
    password: number
    salt: number
    type: number
    status: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    domain?: true
    type?: true
    status?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    domain?: true
    type?: true
    status?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    domain?: true
    account?: true
    password?: true
    salt?: true
    type?: true
    status?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    domain?: true
    account?: true
    password?: true
    salt?: true
    type?: true
    status?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    domain?: true
    account?: true
    password?: true
    salt?: true
    type?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    domain: number
    account: string
    password: string
    salt: string
    type: number
    status: number
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    domain?: boolean
    account?: boolean
    password?: boolean
    salt?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    userInfo?: boolean | UserInfoArgs
    LoginRecord?: boolean | UserLoginRecordArgs
    UserVerify?: boolean | UserUserVerifyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    userInfo?: boolean | UserInfoArgs
    LoginRecord?: boolean | UserLoginRecordArgs
    UserVerify?: boolean | UserUserVerifyArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'userInfo' ? UserInfoGetPayload<S['include'][P]> | null :
        P extends 'LoginRecord' ? Array < LoginRecordGetPayload<S['include'][P]>>  :
        P extends 'UserVerify' ? Array < UserVerifyGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'userInfo' ? UserInfoGetPayload<S['select'][P]> | null :
        P extends 'LoginRecord' ? Array < LoginRecordGetPayload<S['select'][P]>>  :
        P extends 'UserVerify' ? Array < UserVerifyGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    userInfo<T extends UserInfoArgs= {}>(args?: Subset<T, UserInfoArgs>): Prisma__UserInfoClient<UserInfoGetPayload<T> | Null>;

    LoginRecord<T extends UserLoginRecordArgs= {}>(args?: Subset<T, UserLoginRecordArgs>): PrismaPromise<Array<LoginRecordGetPayload<T>>| Null>;

    UserVerify<T extends UserUserVerifyArgs= {}>(args?: Subset<T, UserUserVerifyArgs>): PrismaPromise<Array<UserVerifyGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User.LoginRecord
   */
  export type UserLoginRecordArgs = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    where?: LoginRecordWhereInput
    orderBy?: Enumerable<LoginRecordOrderByWithRelationInput>
    cursor?: LoginRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LoginRecordScalarFieldEnum>
  }


  /**
   * User.UserVerify
   */
  export type UserUserVerifyArgs = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    where?: UserVerifyWhereInput
    orderBy?: Enumerable<UserVerifyOrderByWithRelationInput>
    cursor?: UserVerifyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserVerifyScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model UserInfo
   */


  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserInfoSumAggregateOutputType = {
    userId: number | null
  }

  export type UserInfoMinAggregateOutputType = {
    userId: number | null
    name: string | null
    email: string | null
  }

  export type UserInfoMaxAggregateOutputType = {
    userId: number | null
    name: string | null
    email: string | null
  }

  export type UserInfoCountAggregateOutputType = {
    userId: number
    name: number
    email: number
    custom: number
    _all: number
  }


  export type UserInfoAvgAggregateInputType = {
    userId?: true
  }

  export type UserInfoSumAggregateInputType = {
    userId?: true
  }

  export type UserInfoMinAggregateInputType = {
    userId?: true
    name?: true
    email?: true
  }

  export type UserInfoMaxAggregateInputType = {
    userId?: true
    name?: true
    email?: true
  }

  export type UserInfoCountAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    custom?: true
    _all?: true
  }

  export type UserInfoAggregateArgs = {
    /**
     * Filter which UserInfo to aggregate.
     * 
    **/
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<UserInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs = {
    where?: UserInfoWhereInput
    orderBy?: Enumerable<UserInfoOrderByWithAggregationInput>
    by: Array<UserInfoScalarFieldEnum>
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _avg?: UserInfoAvgAggregateInputType
    _sum?: UserInfoSumAggregateInputType
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }


  export type UserInfoGroupByOutputType = {
    userId: number
    name: string | null
    email: string | null
    custom: JsonValue
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect = {
    userId?: boolean
    name?: boolean
    email?: boolean
    custom?: boolean
    user?: boolean | UserArgs
  }


  export type UserInfoInclude = {
    user?: boolean | UserArgs
  } 

  export type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserInfo :
    S extends undefined ? never :
    S extends { include: any } & (UserInfoArgs | UserInfoFindManyArgs)
    ? UserInfo  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserInfoArgs | UserInfoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserInfo ? UserInfo[P] : never
  } 
      : UserInfo


  type UserInfoCountArgs = Merge<
    Omit<UserInfoFindManyArgs, 'select' | 'include'> & {
      select?: UserInfoCountAggregateInputType | true
    }
  >

  export interface UserInfoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserInfoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserInfoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserInfo'> extends True ? Prisma__UserInfoClient<UserInfoGetPayload<T>> : Prisma__UserInfoClient<UserInfoGetPayload<T> | null, null>

    /**
     * Find one UserInfo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserInfoFindUniqueOrThrowArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserInfoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserInfoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserInfo'> extends True ? Prisma__UserInfoClient<UserInfoGetPayload<T>> : Prisma__UserInfoClient<UserInfoGetPayload<T> | null, null>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userInfoWithUserIdOnly = await prisma.userInfo.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserInfoFindManyArgs>(
      args?: SelectSubset<T, UserInfoFindManyArgs>
    ): PrismaPromise<Array<UserInfoGetPayload<T>>>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
    **/
    create<T extends UserInfoCreateArgs>(
      args: SelectSubset<T, UserInfoCreateArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Create many UserInfos.
     *     @param {UserInfoCreateManyArgs} args - Arguments to create many UserInfos.
     *     @example
     *     // Create many UserInfos
     *     const userInfo = await prisma.userInfo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserInfoCreateManyArgs>(
      args?: SelectSubset<T, UserInfoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
    **/
    delete<T extends UserInfoDeleteArgs>(
      args: SelectSubset<T, UserInfoDeleteArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserInfoUpdateArgs>(
      args: SelectSubset<T, UserInfoUpdateArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserInfoDeleteManyArgs>(
      args?: SelectSubset<T, UserInfoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserInfoUpdateManyArgs>(
      args: SelectSubset<T, UserInfoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
    **/
    upsert<T extends UserInfoUpsertArgs>(
      args: SelectSubset<T, UserInfoUpsertArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
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
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserInfoClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserInfo base type for findUnique actions
   */
  export type UserInfoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfo to fetch.
     * 
    **/
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUnique
   */
  export interface UserInfoFindUniqueArgs extends UserInfoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfo to fetch.
     * 
    **/
    where: UserInfoWhereUniqueInput
  }


  /**
   * UserInfo base type for findFirst actions
   */
  export type UserInfoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfo to fetch.
     * 
    **/
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<UserInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     * 
    **/
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     * 
    **/
    distinct?: Enumerable<UserInfoScalarFieldEnum>
  }

  /**
   * UserInfo findFirst
   */
  export interface UserInfoFindFirstArgs extends UserInfoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfo to fetch.
     * 
    **/
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<UserInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     * 
    **/
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     * 
    **/
    distinct?: Enumerable<UserInfoScalarFieldEnum>
  }


  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfos to fetch.
     * 
    **/
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<UserInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     * 
    **/
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserInfoScalarFieldEnum>
  }


  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
    /**
     * The data needed to create a UserInfo.
     * 
    **/
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }


  /**
   * UserInfo createMany
   */
  export type UserInfoCreateManyArgs = {
    /**
     * The data used to create many UserInfos.
     * 
    **/
    data: Enumerable<UserInfoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
    /**
     * The data needed to update a UserInfo.
     * 
    **/
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     * 
    **/
    where: UserInfoWhereUniqueInput
  }


  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs = {
    /**
     * The data used to update UserInfos.
     * 
    **/
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     * 
    **/
    where?: UserInfoWhereInput
  }


  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     * 
    **/
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     * 
    **/
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }


  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
    /**
     * Filter which UserInfo to delete.
     * 
    **/
    where: UserInfoWhereUniqueInput
  }


  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs = {
    /**
     * Filter which UserInfos to delete
     * 
    **/
    where?: UserInfoWhereInput
  }


  /**
   * UserInfo without action
   */
  export type UserInfoArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     * 
    **/
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInfoInclude | null
  }



  /**
   * Model UserVerify
   */


  export type AggregateUserVerify = {
    _count: UserVerifyCountAggregateOutputType | null
    _avg: UserVerifyAvgAggregateOutputType | null
    _sum: UserVerifySumAggregateOutputType | null
    _min: UserVerifyMinAggregateOutputType | null
    _max: UserVerifyMaxAggregateOutputType | null
  }

  export type UserVerifyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    type: number | null
    status: number | null
  }

  export type UserVerifySumAggregateOutputType = {
    id: number | null
    userId: number | null
    type: number | null
    status: number | null
  }

  export type UserVerifyMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: number | null
    status: number | null
    code: string | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type UserVerifyMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: number | null
    status: number | null
    code: string | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type UserVerifyCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    status: number
    code: number
    expiredAt: number
    createdAt: number
    _all: number
  }


  export type UserVerifyAvgAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
  }

  export type UserVerifySumAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
  }

  export type UserVerifyMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    code?: true
    expiredAt?: true
    createdAt?: true
  }

  export type UserVerifyMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    code?: true
    expiredAt?: true
    createdAt?: true
  }

  export type UserVerifyCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    code?: true
    expiredAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserVerifyAggregateArgs = {
    /**
     * Filter which UserVerify to aggregate.
     * 
    **/
    where?: UserVerifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVerifies to fetch.
     * 
    **/
    orderBy?: Enumerable<UserVerifyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserVerifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVerifies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVerifies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVerifies
    **/
    _count?: true | UserVerifyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserVerifyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserVerifySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVerifyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVerifyMaxAggregateInputType
  }

  export type GetUserVerifyAggregateType<T extends UserVerifyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVerify]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVerify[P]>
      : GetScalarType<T[P], AggregateUserVerify[P]>
  }




  export type UserVerifyGroupByArgs = {
    where?: UserVerifyWhereInput
    orderBy?: Enumerable<UserVerifyOrderByWithAggregationInput>
    by: Array<UserVerifyScalarFieldEnum>
    having?: UserVerifyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVerifyCountAggregateInputType | true
    _avg?: UserVerifyAvgAggregateInputType
    _sum?: UserVerifySumAggregateInputType
    _min?: UserVerifyMinAggregateInputType
    _max?: UserVerifyMaxAggregateInputType
  }


  export type UserVerifyGroupByOutputType = {
    id: number
    userId: number
    type: number
    status: number
    code: string
    expiredAt: Date
    createdAt: Date
    _count: UserVerifyCountAggregateOutputType | null
    _avg: UserVerifyAvgAggregateOutputType | null
    _sum: UserVerifySumAggregateOutputType | null
    _min: UserVerifyMinAggregateOutputType | null
    _max: UserVerifyMaxAggregateOutputType | null
  }

  type GetUserVerifyGroupByPayload<T extends UserVerifyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserVerifyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVerifyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVerifyGroupByOutputType[P]>
            : GetScalarType<T[P], UserVerifyGroupByOutputType[P]>
        }
      >
    >


  export type UserVerifySelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    code?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    user?: boolean | UserArgs
  }


  export type UserVerifyInclude = {
    user?: boolean | UserArgs
  } 

  export type UserVerifyGetPayload<S extends boolean | null | undefined | UserVerifyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserVerify :
    S extends undefined ? never :
    S extends { include: any } & (UserVerifyArgs | UserVerifyFindManyArgs)
    ? UserVerify  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserVerifyArgs | UserVerifyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserVerify ? UserVerify[P] : never
  } 
      : UserVerify


  type UserVerifyCountArgs = Merge<
    Omit<UserVerifyFindManyArgs, 'select' | 'include'> & {
      select?: UserVerifyCountAggregateInputType | true
    }
  >

  export interface UserVerifyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserVerify that matches the filter.
     * @param {UserVerifyFindUniqueArgs} args - Arguments to find a UserVerify
     * @example
     * // Get one UserVerify
     * const userVerify = await prisma.userVerify.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserVerifyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserVerifyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserVerify'> extends True ? Prisma__UserVerifyClient<UserVerifyGetPayload<T>> : Prisma__UserVerifyClient<UserVerifyGetPayload<T> | null, null>

    /**
     * Find one UserVerify that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserVerifyFindUniqueOrThrowArgs} args - Arguments to find a UserVerify
     * @example
     * // Get one UserVerify
     * const userVerify = await prisma.userVerify.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserVerifyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserVerifyFindUniqueOrThrowArgs>
    ): Prisma__UserVerifyClient<UserVerifyGetPayload<T>>

    /**
     * Find the first UserVerify that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyFindFirstArgs} args - Arguments to find a UserVerify
     * @example
     * // Get one UserVerify
     * const userVerify = await prisma.userVerify.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserVerifyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserVerifyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserVerify'> extends True ? Prisma__UserVerifyClient<UserVerifyGetPayload<T>> : Prisma__UserVerifyClient<UserVerifyGetPayload<T> | null, null>

    /**
     * Find the first UserVerify that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyFindFirstOrThrowArgs} args - Arguments to find a UserVerify
     * @example
     * // Get one UserVerify
     * const userVerify = await prisma.userVerify.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserVerifyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserVerifyFindFirstOrThrowArgs>
    ): Prisma__UserVerifyClient<UserVerifyGetPayload<T>>

    /**
     * Find zero or more UserVerifies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVerifies
     * const userVerifies = await prisma.userVerify.findMany()
     * 
     * // Get first 10 UserVerifies
     * const userVerifies = await prisma.userVerify.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVerifyWithIdOnly = await prisma.userVerify.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserVerifyFindManyArgs>(
      args?: SelectSubset<T, UserVerifyFindManyArgs>
    ): PrismaPromise<Array<UserVerifyGetPayload<T>>>

    /**
     * Create a UserVerify.
     * @param {UserVerifyCreateArgs} args - Arguments to create a UserVerify.
     * @example
     * // Create one UserVerify
     * const UserVerify = await prisma.userVerify.create({
     *   data: {
     *     // ... data to create a UserVerify
     *   }
     * })
     * 
    **/
    create<T extends UserVerifyCreateArgs>(
      args: SelectSubset<T, UserVerifyCreateArgs>
    ): Prisma__UserVerifyClient<UserVerifyGetPayload<T>>

    /**
     * Create many UserVerifies.
     *     @param {UserVerifyCreateManyArgs} args - Arguments to create many UserVerifies.
     *     @example
     *     // Create many UserVerifies
     *     const userVerify = await prisma.userVerify.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserVerifyCreateManyArgs>(
      args?: SelectSubset<T, UserVerifyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserVerify.
     * @param {UserVerifyDeleteArgs} args - Arguments to delete one UserVerify.
     * @example
     * // Delete one UserVerify
     * const UserVerify = await prisma.userVerify.delete({
     *   where: {
     *     // ... filter to delete one UserVerify
     *   }
     * })
     * 
    **/
    delete<T extends UserVerifyDeleteArgs>(
      args: SelectSubset<T, UserVerifyDeleteArgs>
    ): Prisma__UserVerifyClient<UserVerifyGetPayload<T>>

    /**
     * Update one UserVerify.
     * @param {UserVerifyUpdateArgs} args - Arguments to update one UserVerify.
     * @example
     * // Update one UserVerify
     * const userVerify = await prisma.userVerify.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserVerifyUpdateArgs>(
      args: SelectSubset<T, UserVerifyUpdateArgs>
    ): Prisma__UserVerifyClient<UserVerifyGetPayload<T>>

    /**
     * Delete zero or more UserVerifies.
     * @param {UserVerifyDeleteManyArgs} args - Arguments to filter UserVerifies to delete.
     * @example
     * // Delete a few UserVerifies
     * const { count } = await prisma.userVerify.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserVerifyDeleteManyArgs>(
      args?: SelectSubset<T, UserVerifyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVerifies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVerifies
     * const userVerify = await prisma.userVerify.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserVerifyUpdateManyArgs>(
      args: SelectSubset<T, UserVerifyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserVerify.
     * @param {UserVerifyUpsertArgs} args - Arguments to update or create a UserVerify.
     * @example
     * // Update or create a UserVerify
     * const userVerify = await prisma.userVerify.upsert({
     *   create: {
     *     // ... data to create a UserVerify
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVerify we want to update
     *   }
     * })
    **/
    upsert<T extends UserVerifyUpsertArgs>(
      args: SelectSubset<T, UserVerifyUpsertArgs>
    ): Prisma__UserVerifyClient<UserVerifyGetPayload<T>>

    /**
     * Count the number of UserVerifies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyCountArgs} args - Arguments to filter UserVerifies to count.
     * @example
     * // Count the number of UserVerifies
     * const count = await prisma.userVerify.count({
     *   where: {
     *     // ... the filter for the UserVerifies we want to count
     *   }
     * })
    **/
    count<T extends UserVerifyCountArgs>(
      args?: Subset<T, UserVerifyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVerifyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVerify.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserVerifyAggregateArgs>(args: Subset<T, UserVerifyAggregateArgs>): PrismaPromise<GetUserVerifyAggregateType<T>>

    /**
     * Group by UserVerify.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyGroupByArgs} args - Group by arguments.
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
      T extends UserVerifyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVerifyGroupByArgs['orderBy'] }
        : { orderBy?: UserVerifyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserVerifyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVerifyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVerify.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserVerifyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserVerify base type for findUnique actions
   */
  export type UserVerifyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    /**
     * Filter, which UserVerify to fetch.
     * 
    **/
    where: UserVerifyWhereUniqueInput
  }

  /**
   * UserVerify findUnique
   */
  export interface UserVerifyFindUniqueArgs extends UserVerifyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserVerify findUniqueOrThrow
   */
  export type UserVerifyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    /**
     * Filter, which UserVerify to fetch.
     * 
    **/
    where: UserVerifyWhereUniqueInput
  }


  /**
   * UserVerify base type for findFirst actions
   */
  export type UserVerifyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    /**
     * Filter, which UserVerify to fetch.
     * 
    **/
    where?: UserVerifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVerifies to fetch.
     * 
    **/
    orderBy?: Enumerable<UserVerifyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVerifies.
     * 
    **/
    cursor?: UserVerifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVerifies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVerifies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVerifies.
     * 
    **/
    distinct?: Enumerable<UserVerifyScalarFieldEnum>
  }

  /**
   * UserVerify findFirst
   */
  export interface UserVerifyFindFirstArgs extends UserVerifyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserVerify findFirstOrThrow
   */
  export type UserVerifyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    /**
     * Filter, which UserVerify to fetch.
     * 
    **/
    where?: UserVerifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVerifies to fetch.
     * 
    **/
    orderBy?: Enumerable<UserVerifyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVerifies.
     * 
    **/
    cursor?: UserVerifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVerifies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVerifies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVerifies.
     * 
    **/
    distinct?: Enumerable<UserVerifyScalarFieldEnum>
  }


  /**
   * UserVerify findMany
   */
  export type UserVerifyFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    /**
     * Filter, which UserVerifies to fetch.
     * 
    **/
    where?: UserVerifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVerifies to fetch.
     * 
    **/
    orderBy?: Enumerable<UserVerifyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVerifies.
     * 
    **/
    cursor?: UserVerifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVerifies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVerifies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserVerifyScalarFieldEnum>
  }


  /**
   * UserVerify create
   */
  export type UserVerifyCreateArgs = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    /**
     * The data needed to create a UserVerify.
     * 
    **/
    data: XOR<UserVerifyCreateInput, UserVerifyUncheckedCreateInput>
  }


  /**
   * UserVerify createMany
   */
  export type UserVerifyCreateManyArgs = {
    /**
     * The data used to create many UserVerifies.
     * 
    **/
    data: Enumerable<UserVerifyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserVerify update
   */
  export type UserVerifyUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    /**
     * The data needed to update a UserVerify.
     * 
    **/
    data: XOR<UserVerifyUpdateInput, UserVerifyUncheckedUpdateInput>
    /**
     * Choose, which UserVerify to update.
     * 
    **/
    where: UserVerifyWhereUniqueInput
  }


  /**
   * UserVerify updateMany
   */
  export type UserVerifyUpdateManyArgs = {
    /**
     * The data used to update UserVerifies.
     * 
    **/
    data: XOR<UserVerifyUpdateManyMutationInput, UserVerifyUncheckedUpdateManyInput>
    /**
     * Filter which UserVerifies to update
     * 
    **/
    where?: UserVerifyWhereInput
  }


  /**
   * UserVerify upsert
   */
  export type UserVerifyUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    /**
     * The filter to search for the UserVerify to update in case it exists.
     * 
    **/
    where: UserVerifyWhereUniqueInput
    /**
     * In case the UserVerify found by the `where` argument doesn't exist, create a new UserVerify with this data.
     * 
    **/
    create: XOR<UserVerifyCreateInput, UserVerifyUncheckedCreateInput>
    /**
     * In case the UserVerify was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserVerifyUpdateInput, UserVerifyUncheckedUpdateInput>
  }


  /**
   * UserVerify delete
   */
  export type UserVerifyDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
    /**
     * Filter which UserVerify to delete.
     * 
    **/
    where: UserVerifyWhereUniqueInput
  }


  /**
   * UserVerify deleteMany
   */
  export type UserVerifyDeleteManyArgs = {
    /**
     * Filter which UserVerifies to delete
     * 
    **/
    where?: UserVerifyWhereInput
  }


  /**
   * UserVerify without action
   */
  export type UserVerifyArgs = {
    /**
     * Select specific fields to fetch from the UserVerify
     * 
    **/
    select?: UserVerifySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserVerifyInclude | null
  }



  /**
   * Model LoginRecord
   */


  export type AggregateLoginRecord = {
    _count: LoginRecordCountAggregateOutputType | null
    _avg: LoginRecordAvgAggregateOutputType | null
    _sum: LoginRecordSumAggregateOutputType | null
    _min: LoginRecordMinAggregateOutputType | null
    _max: LoginRecordMaxAggregateOutputType | null
  }

  export type LoginRecordAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    code: number | null
  }

  export type LoginRecordSumAggregateOutputType = {
    id: number | null
    userId: number | null
    code: number | null
  }

  export type LoginRecordMinAggregateOutputType = {
    id: number | null
    userId: number | null
    code: number | null
    createdAt: Date | null
  }

  export type LoginRecordMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    code: number | null
    createdAt: Date | null
  }

  export type LoginRecordCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    createdAt: number
    _all: number
  }


  export type LoginRecordAvgAggregateInputType = {
    id?: true
    userId?: true
    code?: true
  }

  export type LoginRecordSumAggregateInputType = {
    id?: true
    userId?: true
    code?: true
  }

  export type LoginRecordMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
  }

  export type LoginRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
  }

  export type LoginRecordCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
    _all?: true
  }

  export type LoginRecordAggregateArgs = {
    /**
     * Filter which LoginRecord to aggregate.
     * 
    **/
    where?: LoginRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<LoginRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LoginRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginRecords
    **/
    _count?: true | LoginRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginRecordMaxAggregateInputType
  }

  export type GetLoginRecordAggregateType<T extends LoginRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginRecord[P]>
      : GetScalarType<T[P], AggregateLoginRecord[P]>
  }




  export type LoginRecordGroupByArgs = {
    where?: LoginRecordWhereInput
    orderBy?: Enumerable<LoginRecordOrderByWithAggregationInput>
    by: Array<LoginRecordScalarFieldEnum>
    having?: LoginRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginRecordCountAggregateInputType | true
    _avg?: LoginRecordAvgAggregateInputType
    _sum?: LoginRecordSumAggregateInputType
    _min?: LoginRecordMinAggregateInputType
    _max?: LoginRecordMaxAggregateInputType
  }


  export type LoginRecordGroupByOutputType = {
    id: number
    userId: number
    code: number
    createdAt: Date
    _count: LoginRecordCountAggregateOutputType | null
    _avg: LoginRecordAvgAggregateOutputType | null
    _sum: LoginRecordSumAggregateOutputType | null
    _min: LoginRecordMinAggregateOutputType | null
    _max: LoginRecordMaxAggregateOutputType | null
  }

  type GetLoginRecordGroupByPayload<T extends LoginRecordGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LoginRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginRecordGroupByOutputType[P]>
            : GetScalarType<T[P], LoginRecordGroupByOutputType[P]>
        }
      >
    >


  export type LoginRecordSelect = {
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    user?: boolean | UserArgs
  }


  export type LoginRecordInclude = {
    user?: boolean | UserArgs
  } 

  export type LoginRecordGetPayload<S extends boolean | null | undefined | LoginRecordArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LoginRecord :
    S extends undefined ? never :
    S extends { include: any } & (LoginRecordArgs | LoginRecordFindManyArgs)
    ? LoginRecord  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LoginRecordArgs | LoginRecordFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof LoginRecord ? LoginRecord[P] : never
  } 
      : LoginRecord


  type LoginRecordCountArgs = Merge<
    Omit<LoginRecordFindManyArgs, 'select' | 'include'> & {
      select?: LoginRecordCountAggregateInputType | true
    }
  >

  export interface LoginRecordDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one LoginRecord that matches the filter.
     * @param {LoginRecordFindUniqueArgs} args - Arguments to find a LoginRecord
     * @example
     * // Get one LoginRecord
     * const loginRecord = await prisma.loginRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LoginRecordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LoginRecordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LoginRecord'> extends True ? Prisma__LoginRecordClient<LoginRecordGetPayload<T>> : Prisma__LoginRecordClient<LoginRecordGetPayload<T> | null, null>

    /**
     * Find one LoginRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LoginRecordFindUniqueOrThrowArgs} args - Arguments to find a LoginRecord
     * @example
     * // Get one LoginRecord
     * const loginRecord = await prisma.loginRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LoginRecordFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LoginRecordFindUniqueOrThrowArgs>
    ): Prisma__LoginRecordClient<LoginRecordGetPayload<T>>

    /**
     * Find the first LoginRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginRecordFindFirstArgs} args - Arguments to find a LoginRecord
     * @example
     * // Get one LoginRecord
     * const loginRecord = await prisma.loginRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LoginRecordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LoginRecordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LoginRecord'> extends True ? Prisma__LoginRecordClient<LoginRecordGetPayload<T>> : Prisma__LoginRecordClient<LoginRecordGetPayload<T> | null, null>

    /**
     * Find the first LoginRecord that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginRecordFindFirstOrThrowArgs} args - Arguments to find a LoginRecord
     * @example
     * // Get one LoginRecord
     * const loginRecord = await prisma.loginRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LoginRecordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LoginRecordFindFirstOrThrowArgs>
    ): Prisma__LoginRecordClient<LoginRecordGetPayload<T>>

    /**
     * Find zero or more LoginRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginRecords
     * const loginRecords = await prisma.loginRecord.findMany()
     * 
     * // Get first 10 LoginRecords
     * const loginRecords = await prisma.loginRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginRecordWithIdOnly = await prisma.loginRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LoginRecordFindManyArgs>(
      args?: SelectSubset<T, LoginRecordFindManyArgs>
    ): PrismaPromise<Array<LoginRecordGetPayload<T>>>

    /**
     * Create a LoginRecord.
     * @param {LoginRecordCreateArgs} args - Arguments to create a LoginRecord.
     * @example
     * // Create one LoginRecord
     * const LoginRecord = await prisma.loginRecord.create({
     *   data: {
     *     // ... data to create a LoginRecord
     *   }
     * })
     * 
    **/
    create<T extends LoginRecordCreateArgs>(
      args: SelectSubset<T, LoginRecordCreateArgs>
    ): Prisma__LoginRecordClient<LoginRecordGetPayload<T>>

    /**
     * Create many LoginRecords.
     *     @param {LoginRecordCreateManyArgs} args - Arguments to create many LoginRecords.
     *     @example
     *     // Create many LoginRecords
     *     const loginRecord = await prisma.loginRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LoginRecordCreateManyArgs>(
      args?: SelectSubset<T, LoginRecordCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a LoginRecord.
     * @param {LoginRecordDeleteArgs} args - Arguments to delete one LoginRecord.
     * @example
     * // Delete one LoginRecord
     * const LoginRecord = await prisma.loginRecord.delete({
     *   where: {
     *     // ... filter to delete one LoginRecord
     *   }
     * })
     * 
    **/
    delete<T extends LoginRecordDeleteArgs>(
      args: SelectSubset<T, LoginRecordDeleteArgs>
    ): Prisma__LoginRecordClient<LoginRecordGetPayload<T>>

    /**
     * Update one LoginRecord.
     * @param {LoginRecordUpdateArgs} args - Arguments to update one LoginRecord.
     * @example
     * // Update one LoginRecord
     * const loginRecord = await prisma.loginRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LoginRecordUpdateArgs>(
      args: SelectSubset<T, LoginRecordUpdateArgs>
    ): Prisma__LoginRecordClient<LoginRecordGetPayload<T>>

    /**
     * Delete zero or more LoginRecords.
     * @param {LoginRecordDeleteManyArgs} args - Arguments to filter LoginRecords to delete.
     * @example
     * // Delete a few LoginRecords
     * const { count } = await prisma.loginRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LoginRecordDeleteManyArgs>(
      args?: SelectSubset<T, LoginRecordDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginRecords
     * const loginRecord = await prisma.loginRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LoginRecordUpdateManyArgs>(
      args: SelectSubset<T, LoginRecordUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one LoginRecord.
     * @param {LoginRecordUpsertArgs} args - Arguments to update or create a LoginRecord.
     * @example
     * // Update or create a LoginRecord
     * const loginRecord = await prisma.loginRecord.upsert({
     *   create: {
     *     // ... data to create a LoginRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginRecord we want to update
     *   }
     * })
    **/
    upsert<T extends LoginRecordUpsertArgs>(
      args: SelectSubset<T, LoginRecordUpsertArgs>
    ): Prisma__LoginRecordClient<LoginRecordGetPayload<T>>

    /**
     * Count the number of LoginRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginRecordCountArgs} args - Arguments to filter LoginRecords to count.
     * @example
     * // Count the number of LoginRecords
     * const count = await prisma.loginRecord.count({
     *   where: {
     *     // ... the filter for the LoginRecords we want to count
     *   }
     * })
    **/
    count<T extends LoginRecordCountArgs>(
      args?: Subset<T, LoginRecordCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginRecordAggregateArgs>(args: Subset<T, LoginRecordAggregateArgs>): PrismaPromise<GetLoginRecordAggregateType<T>>

    /**
     * Group by LoginRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginRecordGroupByArgs} args - Group by arguments.
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
      T extends LoginRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginRecordGroupByArgs['orderBy'] }
        : { orderBy?: LoginRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LoginRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginRecordGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LoginRecordClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LoginRecord base type for findUnique actions
   */
  export type LoginRecordFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    /**
     * Filter, which LoginRecord to fetch.
     * 
    **/
    where: LoginRecordWhereUniqueInput
  }

  /**
   * LoginRecord findUnique
   */
  export interface LoginRecordFindUniqueArgs extends LoginRecordFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LoginRecord findUniqueOrThrow
   */
  export type LoginRecordFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    /**
     * Filter, which LoginRecord to fetch.
     * 
    **/
    where: LoginRecordWhereUniqueInput
  }


  /**
   * LoginRecord base type for findFirst actions
   */
  export type LoginRecordFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    /**
     * Filter, which LoginRecord to fetch.
     * 
    **/
    where?: LoginRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<LoginRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginRecords.
     * 
    **/
    cursor?: LoginRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginRecords.
     * 
    **/
    distinct?: Enumerable<LoginRecordScalarFieldEnum>
  }

  /**
   * LoginRecord findFirst
   */
  export interface LoginRecordFindFirstArgs extends LoginRecordFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LoginRecord findFirstOrThrow
   */
  export type LoginRecordFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    /**
     * Filter, which LoginRecord to fetch.
     * 
    **/
    where?: LoginRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<LoginRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginRecords.
     * 
    **/
    cursor?: LoginRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginRecords.
     * 
    **/
    distinct?: Enumerable<LoginRecordScalarFieldEnum>
  }


  /**
   * LoginRecord findMany
   */
  export type LoginRecordFindManyArgs = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    /**
     * Filter, which LoginRecords to fetch.
     * 
    **/
    where?: LoginRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<LoginRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginRecords.
     * 
    **/
    cursor?: LoginRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginRecords.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LoginRecordScalarFieldEnum>
  }


  /**
   * LoginRecord create
   */
  export type LoginRecordCreateArgs = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    /**
     * The data needed to create a LoginRecord.
     * 
    **/
    data: XOR<LoginRecordCreateInput, LoginRecordUncheckedCreateInput>
  }


  /**
   * LoginRecord createMany
   */
  export type LoginRecordCreateManyArgs = {
    /**
     * The data used to create many LoginRecords.
     * 
    **/
    data: Enumerable<LoginRecordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * LoginRecord update
   */
  export type LoginRecordUpdateArgs = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    /**
     * The data needed to update a LoginRecord.
     * 
    **/
    data: XOR<LoginRecordUpdateInput, LoginRecordUncheckedUpdateInput>
    /**
     * Choose, which LoginRecord to update.
     * 
    **/
    where: LoginRecordWhereUniqueInput
  }


  /**
   * LoginRecord updateMany
   */
  export type LoginRecordUpdateManyArgs = {
    /**
     * The data used to update LoginRecords.
     * 
    **/
    data: XOR<LoginRecordUpdateManyMutationInput, LoginRecordUncheckedUpdateManyInput>
    /**
     * Filter which LoginRecords to update
     * 
    **/
    where?: LoginRecordWhereInput
  }


  /**
   * LoginRecord upsert
   */
  export type LoginRecordUpsertArgs = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    /**
     * The filter to search for the LoginRecord to update in case it exists.
     * 
    **/
    where: LoginRecordWhereUniqueInput
    /**
     * In case the LoginRecord found by the `where` argument doesn't exist, create a new LoginRecord with this data.
     * 
    **/
    create: XOR<LoginRecordCreateInput, LoginRecordUncheckedCreateInput>
    /**
     * In case the LoginRecord was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LoginRecordUpdateInput, LoginRecordUncheckedUpdateInput>
  }


  /**
   * LoginRecord delete
   */
  export type LoginRecordDeleteArgs = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
    /**
     * Filter which LoginRecord to delete.
     * 
    **/
    where: LoginRecordWhereUniqueInput
  }


  /**
   * LoginRecord deleteMany
   */
  export type LoginRecordDeleteManyArgs = {
    /**
     * Filter which LoginRecords to delete
     * 
    **/
    where?: LoginRecordWhereInput
  }


  /**
   * LoginRecord without action
   */
  export type LoginRecordArgs = {
    /**
     * Select specific fields to fetch from the LoginRecord
     * 
    **/
    select?: LoginRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoginRecordInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const LoginRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    createdAt: 'createdAt'
  };

  export type LoginRecordScalarFieldEnum = (typeof LoginRecordScalarFieldEnum)[keyof typeof LoginRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserInfoScalarFieldEnum: {
    userId: 'userId',
    name: 'name',
    email: 'email',
    custom: 'custom'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    domain: 'domain',
    account: 'account',
    password: 'password',
    salt: 'salt',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserVerifyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    status: 'status',
    code: 'code',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt'
  };

  export type UserVerifyScalarFieldEnum = (typeof UserVerifyScalarFieldEnum)[keyof typeof UserVerifyScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    domain?: IntFilter | number
    account?: StringFilter | string
    password?: StringFilter | string
    salt?: StringFilter | string
    type?: IntFilter | number
    status?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    userInfo?: XOR<UserInfoRelationFilter, UserInfoWhereInput> | null
    LoginRecord?: LoginRecordListRelationFilter
    UserVerify?: UserVerifyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    account?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userInfo?: UserInfoOrderByWithRelationInput
    LoginRecord?: LoginRecordOrderByRelationAggregateInput
    UserVerify?: UserVerifyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    domain_account?: UserDomainAccountCompoundUniqueInput
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    account?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    domain?: IntWithAggregatesFilter | number
    account?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    salt?: StringWithAggregatesFilter | string
    type?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserInfoWhereInput = {
    AND?: Enumerable<UserInfoWhereInput>
    OR?: Enumerable<UserInfoWhereInput>
    NOT?: Enumerable<UserInfoWhereInput>
    userId?: IntFilter | number
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    custom?: JsonFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserInfoOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    custom?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserInfoWhereUniqueInput = {
    userId?: number
  }

  export type UserInfoOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    custom?: SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _avg?: UserInfoAvgOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
    _sum?: UserInfoSumOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserInfoScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserInfoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserInfoScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    custom?: JsonWithAggregatesFilter
  }

  export type UserVerifyWhereInput = {
    AND?: Enumerable<UserVerifyWhereInput>
    OR?: Enumerable<UserVerifyWhereInput>
    NOT?: Enumerable<UserVerifyWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    type?: IntFilter | number
    status?: IntFilter | number
    code?: StringFilter | string
    expiredAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserVerifyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    code?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserVerifyWhereUniqueInput = {
    id?: number
  }

  export type UserVerifyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    code?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserVerifyCountOrderByAggregateInput
    _avg?: UserVerifyAvgOrderByAggregateInput
    _max?: UserVerifyMaxOrderByAggregateInput
    _min?: UserVerifyMinOrderByAggregateInput
    _sum?: UserVerifySumOrderByAggregateInput
  }

  export type UserVerifyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserVerifyScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserVerifyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserVerifyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    type?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    expiredAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LoginRecordWhereInput = {
    AND?: Enumerable<LoginRecordWhereInput>
    OR?: Enumerable<LoginRecordWhereInput>
    NOT?: Enumerable<LoginRecordWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    code?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LoginRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LoginRecordWhereUniqueInput = {
    id?: number
  }

  export type LoginRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    _count?: LoginRecordCountOrderByAggregateInput
    _avg?: LoginRecordAvgOrderByAggregateInput
    _max?: LoginRecordMaxOrderByAggregateInput
    _min?: LoginRecordMinOrderByAggregateInput
    _sum?: LoginRecordSumOrderByAggregateInput
  }

  export type LoginRecordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LoginRecordScalarWhereWithAggregatesInput>
    OR?: Enumerable<LoginRecordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LoginRecordScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    code?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    domain?: number
    account: string
    password: string
    salt: string
    type?: number
    status?: number
    createdAt?: Date | string
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
    LoginRecord?: LoginRecordCreateNestedManyWithoutUserInput
    UserVerify?: UserVerifyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    domain?: number
    account: string
    password: string
    salt: string
    type?: number
    status?: number
    createdAt?: Date | string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
    LoginRecord?: LoginRecordUncheckedCreateNestedManyWithoutUserInput
    UserVerify?: UserVerifyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
    LoginRecord?: LoginRecordUpdateManyWithoutUserNestedInput
    UserVerify?: UserVerifyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
    LoginRecord?: LoginRecordUncheckedUpdateManyWithoutUserNestedInput
    UserVerify?: UserVerifyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    domain?: number
    account: string
    password: string
    salt: string
    type?: number
    status?: number
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInfoCreateInput = {
    name?: string | null
    email?: string | null
    custom?: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutUserInfoInput
  }

  export type UserInfoUncheckedCreateInput = {
    userId: number
    name?: string | null
    email?: string | null
    custom?: JsonNullValueInput | InputJsonValue
  }

  export type UserInfoUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    custom?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutUserInfoNestedInput
  }

  export type UserInfoUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    custom?: JsonNullValueInput | InputJsonValue
  }

  export type UserInfoCreateManyInput = {
    userId: number
    name?: string | null
    email?: string | null
    custom?: JsonNullValueInput | InputJsonValue
  }

  export type UserInfoUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    custom?: JsonNullValueInput | InputJsonValue
  }

  export type UserInfoUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    custom?: JsonNullValueInput | InputJsonValue
  }

  export type UserVerifyCreateInput = {
    type: number
    status: number
    code: string
    expiredAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserVerifyInput
  }

  export type UserVerifyUncheckedCreateInput = {
    id?: number
    userId: number
    type: number
    status: number
    code: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type UserVerifyUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserVerifyNestedInput
  }

  export type UserVerifyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVerifyCreateManyInput = {
    id?: number
    userId: number
    type: number
    status: number
    code: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type UserVerifyUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVerifyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginRecordCreateInput = {
    userId: number
    code: number
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutLoginRecordInput
  }

  export type LoginRecordUncheckedCreateInput = {
    id?: number
    userId: number
    code: number
    createdAt?: Date | string
  }

  export type LoginRecordUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoginRecordNestedInput
  }

  export type LoginRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginRecordCreateManyInput = {
    id?: number
    userId: number
    code: number
    createdAt?: Date | string
  }

  export type LoginRecordUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserInfoRelationFilter = {
    is?: UserInfoWhereInput | null
    isNot?: UserInfoWhereInput | null
  }

  export type LoginRecordListRelationFilter = {
    every?: LoginRecordWhereInput
    some?: LoginRecordWhereInput
    none?: LoginRecordWhereInput
  }

  export type UserVerifyListRelationFilter = {
    every?: UserVerifyWhereInput
    some?: UserVerifyWhereInput
    none?: UserVerifyWhereInput
  }

  export type LoginRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserVerifyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDomainAccountCompoundUniqueInput = {
    domain: number
    account: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    account?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    account?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    account?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserInfoCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    custom?: SortOrder
  }

  export type UserInfoAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserInfoSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type UserVerifyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    code?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVerifyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type UserVerifyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    code?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVerifyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    code?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVerifySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type LoginRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
  }

  export type LoginRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
  }

  export type UserInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    connect?: UserInfoWhereUniqueInput
  }

  export type LoginRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LoginRecordCreateWithoutUserInput>, Enumerable<LoginRecordUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LoginRecordCreateOrConnectWithoutUserInput>
    createMany?: LoginRecordCreateManyUserInputEnvelope
    connect?: Enumerable<LoginRecordWhereUniqueInput>
  }

  export type UserVerifyCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserVerifyCreateWithoutUserInput>, Enumerable<UserVerifyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserVerifyCreateOrConnectWithoutUserInput>
    createMany?: UserVerifyCreateManyUserInputEnvelope
    connect?: Enumerable<UserVerifyWhereUniqueInput>
  }

  export type UserInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    connect?: UserInfoWhereUniqueInput
  }

  export type LoginRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LoginRecordCreateWithoutUserInput>, Enumerable<LoginRecordUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LoginRecordCreateOrConnectWithoutUserInput>
    createMany?: LoginRecordCreateManyUserInputEnvelope
    connect?: Enumerable<LoginRecordWhereUniqueInput>
  }

  export type UserVerifyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserVerifyCreateWithoutUserInput>, Enumerable<UserVerifyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserVerifyCreateOrConnectWithoutUserInput>
    createMany?: UserVerifyCreateManyUserInputEnvelope
    connect?: Enumerable<UserVerifyWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    upsert?: UserInfoUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<UserInfoUpdateWithoutUserInput, UserInfoUncheckedUpdateWithoutUserInput>
  }

  export type LoginRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LoginRecordCreateWithoutUserInput>, Enumerable<LoginRecordUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LoginRecordCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LoginRecordUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LoginRecordCreateManyUserInputEnvelope
    set?: Enumerable<LoginRecordWhereUniqueInput>
    disconnect?: Enumerable<LoginRecordWhereUniqueInput>
    delete?: Enumerable<LoginRecordWhereUniqueInput>
    connect?: Enumerable<LoginRecordWhereUniqueInput>
    update?: Enumerable<LoginRecordUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LoginRecordUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LoginRecordScalarWhereInput>
  }

  export type UserVerifyUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserVerifyCreateWithoutUserInput>, Enumerable<UserVerifyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserVerifyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserVerifyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserVerifyCreateManyUserInputEnvelope
    set?: Enumerable<UserVerifyWhereUniqueInput>
    disconnect?: Enumerable<UserVerifyWhereUniqueInput>
    delete?: Enumerable<UserVerifyWhereUniqueInput>
    connect?: Enumerable<UserVerifyWhereUniqueInput>
    update?: Enumerable<UserVerifyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserVerifyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserVerifyScalarWhereInput>
  }

  export type UserInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    upsert?: UserInfoUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<UserInfoUpdateWithoutUserInput, UserInfoUncheckedUpdateWithoutUserInput>
  }

  export type LoginRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LoginRecordCreateWithoutUserInput>, Enumerable<LoginRecordUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LoginRecordCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LoginRecordUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LoginRecordCreateManyUserInputEnvelope
    set?: Enumerable<LoginRecordWhereUniqueInput>
    disconnect?: Enumerable<LoginRecordWhereUniqueInput>
    delete?: Enumerable<LoginRecordWhereUniqueInput>
    connect?: Enumerable<LoginRecordWhereUniqueInput>
    update?: Enumerable<LoginRecordUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LoginRecordUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LoginRecordScalarWhereInput>
  }

  export type UserVerifyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserVerifyCreateWithoutUserInput>, Enumerable<UserVerifyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserVerifyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserVerifyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserVerifyCreateManyUserInputEnvelope
    set?: Enumerable<UserVerifyWhereUniqueInput>
    disconnect?: Enumerable<UserVerifyWhereUniqueInput>
    delete?: Enumerable<UserVerifyWhereUniqueInput>
    connect?: Enumerable<UserVerifyWhereUniqueInput>
    update?: Enumerable<UserVerifyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserVerifyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserVerifyScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserInfoInput = {
    create?: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInfoInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutUserInfoNestedInput = {
    create?: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInfoInput
    upsert?: UserUpsertWithoutUserInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserInfoInput, UserUncheckedUpdateWithoutUserInfoInput>
  }

  export type UserCreateNestedOneWithoutUserVerifyInput = {
    create?: XOR<UserCreateWithoutUserVerifyInput, UserUncheckedCreateWithoutUserVerifyInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserVerifyInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserVerifyNestedInput = {
    create?: XOR<UserCreateWithoutUserVerifyInput, UserUncheckedCreateWithoutUserVerifyInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserVerifyInput
    upsert?: UserUpsertWithoutUserVerifyInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserVerifyInput, UserUncheckedUpdateWithoutUserVerifyInput>
  }

  export type UserCreateNestedOneWithoutLoginRecordInput = {
    create?: XOR<UserCreateWithoutLoginRecordInput, UserUncheckedCreateWithoutLoginRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginRecordInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLoginRecordNestedInput = {
    create?: XOR<UserCreateWithoutLoginRecordInput, UserUncheckedCreateWithoutLoginRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginRecordInput
    upsert?: UserUpsertWithoutLoginRecordInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLoginRecordInput, UserUncheckedUpdateWithoutLoginRecordInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type UserInfoCreateWithoutUserInput = {
    name?: string | null
    email?: string | null
    custom?: JsonNullValueInput | InputJsonValue
  }

  export type UserInfoUncheckedCreateWithoutUserInput = {
    name?: string | null
    email?: string | null
    custom?: JsonNullValueInput | InputJsonValue
  }

  export type UserInfoCreateOrConnectWithoutUserInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
  }

  export type LoginRecordCreateWithoutUserInput = {
    userId: number
    code: number
    createdAt?: Date | string
  }

  export type LoginRecordUncheckedCreateWithoutUserInput = {
    userId: number
    code: number
    createdAt?: Date | string
  }

  export type LoginRecordCreateOrConnectWithoutUserInput = {
    where: LoginRecordWhereUniqueInput
    create: XOR<LoginRecordCreateWithoutUserInput, LoginRecordUncheckedCreateWithoutUserInput>
  }

  export type LoginRecordCreateManyUserInputEnvelope = {
    data: Enumerable<LoginRecordCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserVerifyCreateWithoutUserInput = {
    type: number
    status: number
    code: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type UserVerifyUncheckedCreateWithoutUserInput = {
    id?: number
    type: number
    status: number
    code: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type UserVerifyCreateOrConnectWithoutUserInput = {
    where: UserVerifyWhereUniqueInput
    create: XOR<UserVerifyCreateWithoutUserInput, UserVerifyUncheckedCreateWithoutUserInput>
  }

  export type UserVerifyCreateManyUserInputEnvelope = {
    data: Enumerable<UserVerifyCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserInfoUpsertWithoutUserInput = {
    update: XOR<UserInfoUpdateWithoutUserInput, UserInfoUncheckedUpdateWithoutUserInput>
    create: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
  }

  export type UserInfoUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    custom?: JsonNullValueInput | InputJsonValue
  }

  export type UserInfoUncheckedUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    custom?: JsonNullValueInput | InputJsonValue
  }

  export type LoginRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: LoginRecordWhereUniqueInput
    update: XOR<LoginRecordUpdateWithoutUserInput, LoginRecordUncheckedUpdateWithoutUserInput>
    create: XOR<LoginRecordCreateWithoutUserInput, LoginRecordUncheckedCreateWithoutUserInput>
  }

  export type LoginRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: LoginRecordWhereUniqueInput
    data: XOR<LoginRecordUpdateWithoutUserInput, LoginRecordUncheckedUpdateWithoutUserInput>
  }

  export type LoginRecordUpdateManyWithWhereWithoutUserInput = {
    where: LoginRecordScalarWhereInput
    data: XOR<LoginRecordUpdateManyMutationInput, LoginRecordUncheckedUpdateManyWithoutLoginRecordInput>
  }

  export type LoginRecordScalarWhereInput = {
    AND?: Enumerable<LoginRecordScalarWhereInput>
    OR?: Enumerable<LoginRecordScalarWhereInput>
    NOT?: Enumerable<LoginRecordScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    code?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserVerifyUpsertWithWhereUniqueWithoutUserInput = {
    where: UserVerifyWhereUniqueInput
    update: XOR<UserVerifyUpdateWithoutUserInput, UserVerifyUncheckedUpdateWithoutUserInput>
    create: XOR<UserVerifyCreateWithoutUserInput, UserVerifyUncheckedCreateWithoutUserInput>
  }

  export type UserVerifyUpdateWithWhereUniqueWithoutUserInput = {
    where: UserVerifyWhereUniqueInput
    data: XOR<UserVerifyUpdateWithoutUserInput, UserVerifyUncheckedUpdateWithoutUserInput>
  }

  export type UserVerifyUpdateManyWithWhereWithoutUserInput = {
    where: UserVerifyScalarWhereInput
    data: XOR<UserVerifyUpdateManyMutationInput, UserVerifyUncheckedUpdateManyWithoutUserVerifyInput>
  }

  export type UserVerifyScalarWhereInput = {
    AND?: Enumerable<UserVerifyScalarWhereInput>
    OR?: Enumerable<UserVerifyScalarWhereInput>
    NOT?: Enumerable<UserVerifyScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    type?: IntFilter | number
    status?: IntFilter | number
    code?: StringFilter | string
    expiredAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutUserInfoInput = {
    domain?: number
    account: string
    password: string
    salt: string
    type?: number
    status?: number
    createdAt?: Date | string
    LoginRecord?: LoginRecordCreateNestedManyWithoutUserInput
    UserVerify?: UserVerifyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserInfoInput = {
    id?: number
    domain?: number
    account: string
    password: string
    salt: string
    type?: number
    status?: number
    createdAt?: Date | string
    LoginRecord?: LoginRecordUncheckedCreateNestedManyWithoutUserInput
    UserVerify?: UserVerifyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
  }

  export type UserUpsertWithoutUserInfoInput = {
    update: XOR<UserUpdateWithoutUserInfoInput, UserUncheckedUpdateWithoutUserInfoInput>
    create: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
  }

  export type UserUpdateWithoutUserInfoInput = {
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LoginRecord?: LoginRecordUpdateManyWithoutUserNestedInput
    UserVerify?: UserVerifyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LoginRecord?: LoginRecordUncheckedUpdateManyWithoutUserNestedInput
    UserVerify?: UserVerifyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserVerifyInput = {
    domain?: number
    account: string
    password: string
    salt: string
    type?: number
    status?: number
    createdAt?: Date | string
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
    LoginRecord?: LoginRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserVerifyInput = {
    id?: number
    domain?: number
    account: string
    password: string
    salt: string
    type?: number
    status?: number
    createdAt?: Date | string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
    LoginRecord?: LoginRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserVerifyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserVerifyInput, UserUncheckedCreateWithoutUserVerifyInput>
  }

  export type UserUpsertWithoutUserVerifyInput = {
    update: XOR<UserUpdateWithoutUserVerifyInput, UserUncheckedUpdateWithoutUserVerifyInput>
    create: XOR<UserCreateWithoutUserVerifyInput, UserUncheckedCreateWithoutUserVerifyInput>
  }

  export type UserUpdateWithoutUserVerifyInput = {
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
    LoginRecord?: LoginRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserVerifyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
    LoginRecord?: LoginRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLoginRecordInput = {
    domain?: number
    account: string
    password: string
    salt: string
    type?: number
    status?: number
    createdAt?: Date | string
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
    UserVerify?: UserVerifyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLoginRecordInput = {
    id?: number
    domain?: number
    account: string
    password: string
    salt: string
    type?: number
    status?: number
    createdAt?: Date | string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
    UserVerify?: UserVerifyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLoginRecordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoginRecordInput, UserUncheckedCreateWithoutLoginRecordInput>
  }

  export type UserUpsertWithoutLoginRecordInput = {
    update: XOR<UserUpdateWithoutLoginRecordInput, UserUncheckedUpdateWithoutLoginRecordInput>
    create: XOR<UserCreateWithoutLoginRecordInput, UserUncheckedCreateWithoutLoginRecordInput>
  }

  export type UserUpdateWithoutLoginRecordInput = {
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
    UserVerify?: UserVerifyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLoginRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
    UserVerify?: UserVerifyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LoginRecordCreateManyUserInput = {
    userId: number
    code: number
    createdAt?: Date | string
  }

  export type UserVerifyCreateManyUserInput = {
    id?: number
    type: number
    status: number
    code: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type LoginRecordUpdateWithoutUserInput = {
    userId?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginRecordUncheckedUpdateWithoutUserInput = {
    userId?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginRecordUncheckedUpdateManyWithoutLoginRecordInput = {
    userId?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVerifyUpdateWithoutUserInput = {
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVerifyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVerifyUncheckedUpdateManyWithoutUserVerifyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
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