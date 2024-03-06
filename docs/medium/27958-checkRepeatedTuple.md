# 27958-checkRepeatedTuple
## 题目
判断一个元组中是否有相同的元素
## 分析
遍历数组,然后与剩余的元素对比即可
## 题解
```ts
type CheckRepeatedTuple<T extends unknown[]> =
  T extends [infer A, ...infer B extends unknown[]]
  ? A extends B[number]
    ? true
    : CheckRepeatedTuple<B>
  : false
```
## 知识点
- 数组遍历
- 递归