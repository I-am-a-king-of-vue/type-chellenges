# 529-absolute
## 题目
实现一个接收`string|bigint`的类型,返回一个正整数字符串  
例如:
```ts
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
```
## 分析
通过字符串的分割即可
## 题解
```ts
type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer A}` ? A : `${T}`
```
## 知识点
- 字符串的分割