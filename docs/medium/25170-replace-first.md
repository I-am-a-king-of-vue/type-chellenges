# 25170-replace-first
## 题目
将数组的第一个匹配的类型替换为指定的类型
## 分析
遍历数组并保留前部分元素,查找到后替换,然后将前后部分跟替换元素组合即可
## 题解
```ts
type ReplaceFirst<T extends unknown[], I, R, Arr extends unknown[] = []> =
  T extends [infer A, ...infer B]
  ? A extends I
    ? [...Arr, R, ...B]
    : ReplaceFirst<B, I, R, [...Arr, A]>
  : Arr
```
## 知识点
- 数组遍历