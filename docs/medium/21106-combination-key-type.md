# 21106-combination-key-type
## 题目
把多个修饰键两两组合,但不可以出现相同的修饰键组合
前面的值比后面的值高,即`cmd ctrl`是可以的，但`ctrl cmd`是不允许的。
## 分析
按顺序遍历即可,有一个变量永远比原变量少一个,这个不太会描述,多过几遍就能明白
## 题解
```ts
type Combs<T extends string[], U extends string[] = T extends [infer A, ...infer B] ? B : []> =
  T extends [infer A, ...infer B extends string[]]
  ? Uni<A & string, U> | Combs<B>
  : never
type Uni<T extends string, U extends string[]> =
  U extends [infer A extends string, ...infer B extends string[]]
  ? `${T} ${A}` | Uni<T, B>
  : never
```
## 知识点
- 数组遍历
- 递归