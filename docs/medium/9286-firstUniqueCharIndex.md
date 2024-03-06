# 9286-firstUniqueCharIndex
## 题目
找出字符串的第一个非重复的字符的索引
## 分析
提取每个字符,然后将每一个字符与字符串进行对比,然后返回索引即可
## 题解
```ts
type FirstUniqueCharIndex<T extends string, I extends unknown[] = [], U extends string = T> =
  T extends `${infer A}${infer B}`
  ? Has<A, U> extends false
    ? I["length"]
    : FirstUniqueCharIndex<B, [...I, unknown], U>
  : -1
type Has<T extends string, U extends string, Arr extends string[] = []> =
  Arr['length'] extends 2
  ? true
  : U extends `${infer A}${infer B}`
    ? T extends A
      ? Has<T, B, [...Arr, A]>
      : Has<T, B, Arr>
    : false
```
## 知识点
- 字符串的提取
- 字符串的遍历