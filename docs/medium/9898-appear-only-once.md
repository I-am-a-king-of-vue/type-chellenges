# 9898-appear-only-once
## 题目
找出数组中只出现过一次的元素  
例如:  
输入[1,2,2,3,3,4,5,6,6,6]，输出[1,4,5]
## 分析
解题方式跟[字符串重复](/medium/9286-firstUniqueCharIndex.md)解法类似
## 题解
```ts
type FindEles<T extends unknown[], U extends unknown[] = T, Arr extends unknown[] = []> =
  T extends [infer A, ...infer B]
  ? OnceArr<A, U> extends true
    ? FindEles<B, U, [...Arr, A]>
    : FindEles<B, U, Arr>
  : Arr
type OnceArr<T, U extends unknown[], Arr extends unknown[] = []> =
  U extends [infer A, ...infer B extends unknown[]]
  ? T extends A
    ? OnceArr<T, B, [...Arr, A]>
    : OnceArr<T, B, Arr>
  : Arr['length'] extends 1 ? true : false
```
## 知识点
- 数组遍历
- 递归