# 26401-json-schema-to-typeScript
## 题目
根据json获取类型
## 分析
## 题解
```ts
type JSONSchema2TS<T extends Record<string, any>, U extends unknown = JsonToType<T>, Req extends string[] = T["required"]> =
  Equal<Req, unknown> extends true
  ? U
  : RemoveIndexSignature2<ToObj<OmitAll<U & Record<string, any>, Req> & PickAll<U & Record<string, any>, Req>>>
type JsonToType<T extends Record<string, any>, U extends unknown = T["type"], E extends unknown[] = T["enum"]> =
  E extends unknown[]
  ? E[number]
    : U extends "string"
      ? string
      : U extends "number"
        ? number
        : U extends "boolean"
          ? boolean
          : U extends "object"
            ? Equal<T["properties"], unknown> extends true
              ? Record<string, unknown>
              : Equal<T["properties"], {}> extends true
              ? {}
              : { [Key in keyof T["properties"]]?: JsonToType<T["properties"][Key]> }
            : U extends "array"
              ? Equal<T["items"], unknown> extends true
              ? unknown[]
              : JsonToType<T["items"]>[]
  : T
type PickAll<T extends Record<string, any>, U extends string[], N extends string = U[number]> = T extends never ? never : {
  [K in keyof T as K extends N ? K : never]-?: MyRequired<T[K]>
}
type OmitAll<T extends Record<string, any>, U extends string[], N extends string = U[number]> = T extends never ? never : {
  [K in keyof T as K extends N ? never : K]: T[K]
}
type MyRequired<T extends Record<string, any>> = T extends never ? never : {
  [K in keyof T]-?: T[K]
}
type RemoveIndexSignature2<T extends Record<string, any>> = {
  [K in keyof T as K extends `${infer R}` ? K : never]: T[K]
}
type ToObj<T extends Record<string, any>> = {
  [K in keyof T]: T[K]
}
```
## 知识点