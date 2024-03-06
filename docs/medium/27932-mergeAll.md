# 27932-mergeAll
## 题目
传入一个对象元素,组成新对象返回,如果多个对象键相同,那么值就要返回一个联合类型
## 分析
## 题解
```ts
type MergeAll<XS extends object[], Res = {}> =
  XS extends [infer L, ...infer R extends object[]]
  ? MergeAll<R, Omit<Res, keyof L> & {
    [p in keyof L]: p extends keyof Res ? L[p] | Res[p] : L[p]
  }>
  : Omit<Res, never>;
```
## 知识点