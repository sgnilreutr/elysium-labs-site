/* eslint-disable @typescript-eslint/no-explicit-any */
export type ReturnTypeOf<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
