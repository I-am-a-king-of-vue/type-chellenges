# 9142-checkRepeatedChars
## 题目
判断字符串中是否存在相同字符  
例如:
```ts
type CheckRepeatedChars<'abc'>   // false
type CheckRepeatedChars<'aba'>   // true
```
## 分析
基本思路就是将字符串转为数组,然后用原数组的长度对比去重后的数组长度即可  
题解的工具类都是其他题目中写好的,cv直接用即可  
直接使用字符串遍历会更简洁
## 题解
```ts
type Unique<T extends unknown[], Arr extends unknown[] = []> =
  T extends [infer A, ...infer B]
  ? IsExistence<A, Arr> extends true
  ? Unique<B, Arr>
  : Unique<B, [...Arr, A]>
  : Arr
type IsExistence<T, Arr extends unknown[]> =
  Arr extends [infer A, ...infer B]
  ? Equal<A, T> extends true
  ? true
  : IsExistence<T, B>
  : false
type StrToArr<T extends string, Arr extends string[] = []> =
  `${T}` extends `${infer A}${infer B}`
  ? StrToArr<B, [...Arr, A]>
  : Arr
type CheckRepeatedChars<T extends string> =
  StrToArr<T>['length'] extends Unique<StrToArr<T>>['length'] ? false : true;
```
## 知识点
- 字符串遍历