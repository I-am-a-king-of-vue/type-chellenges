# 18220-filter
## 题目
从数组中过滤指定的类型
## 分析
与上题类似,遍历判断即可
## 题解
```ts
type Filter<T extends unknown[], U, Arr extends unknown[] = []> =
  T extends [infer A, ...infer B]
  ? A extends U
    ? Filter<B, U, [...Arr, A]>
    : Filter<B, U, Arr>
  : Arr
```
## 知识点
- 数组遍历