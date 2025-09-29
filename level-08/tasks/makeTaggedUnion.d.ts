export type Tagged<TTag extends string, TPayload> = { type: TTag } & TPayload;
export type UnionOf<T extends Record<string, object>> = {
  [K in keyof T]: Tagged<K & string, T[K]>;
}[keyof T];
export declare function makeTaggedUnion<T extends Record<string, object>>(
  cases: T
): UnionOf<T>;
