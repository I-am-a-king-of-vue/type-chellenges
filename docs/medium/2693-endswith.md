# 2693-endswith
## 题目
判断字符串是否以指定字符串结尾  
例如:
```ts
type a = EndsWith<'abc', 'bc'> // expected to be true
type b = EndsWith<'abc', 'abc'> // expected to be true
type c = EndsWith<'abc', 'd'> // expected to be false
```
## 分析
没什么好说的,字符串提取秒了
## 题解
```ts
type EndsWith<T extends string, U extends string> =
  T extends `${string}${U}` ? true : false;
```
## 知识点
- 字符串的提取