# 27862-acrtesianProduct
## 题目
将两个联合类型转为数组联合类型
## 分析
使用联合类型可分散的特性即可
## 题解
```ts
type CartesianProduct<T, U> =
  T extends T
  ? U extends U
    ? [T, U]
    : never
  : never
```
## 知识点
- 联合类型可分散