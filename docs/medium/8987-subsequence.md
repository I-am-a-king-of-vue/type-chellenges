# 8987-subsequence
## 题目
数组的全组合  
例如:
```ts
type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
```
## 分析
```ts
/*
[1, 2]
遍历到 1
选1
    1 | 遍历到 2
        选2
            得到 [1, 2]
        不选2
            得到 [1]
不选1
    遍历到 2
        选2 
            得到 [2]
        不选2
            得到 []
*/
```
这个整体下来还是比较迷茫
## 题解
```ts
type Subsequence<T extends unknown[]> =
  T extends [infer A, ...infer B]
  ? [A, ...Subsequence<B>] | Subsequence<B>
  : []
```
## 知识点
- 递归