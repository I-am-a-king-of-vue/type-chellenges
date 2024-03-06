# 8767-combination
## 题目
数组的全排列  
例如:
```ts
// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<['foo', 'bar', 'baz']>
```
## 分析
跟[字符的全排列](/medium/4260-allCombinations.md)有异曲同工之妙
## 题解
```ts
type Combination<T extends string[], U extends string = T[number], C extends string = U> =
  U extends U
  ? U | `${U} ${Combination<[], Exclude<C, U>>}`
  : ""
```
## 知识点
- 联合类型可分散
- 获取数组的值的联合类型