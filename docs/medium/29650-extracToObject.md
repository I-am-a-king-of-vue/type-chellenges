# 29650-extracToObject
## 题目
删除指定的属性
## 分析
## 题解
```ts
type ExtractToObject<T extends Record<string,any>, U extends keyof T> =
  U extends keyof T
  ? T[U] extends object
    ? ToObj<{
      [K in keyof T as K extends U ? never : K]: T[K]
    } & T[U]>
    : Omit<T, U>
  : T
type ToObj<T extends Record<string,any>> = {
  [K in keyof T]:T[K]
}
```
## 知识点