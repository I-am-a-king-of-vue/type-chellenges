# 2688-startswith
## 题目
判断字符串是否以某个字符串开头  
例如:
```ts
type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false
```
## 分析
没什么好说的,字符串提取直接秒了
## 题解
```ts
type StartsWith<T extends string, U extends string> =
  T extends `${U}${string}` ? true : false;
```
## 知识点
- 字符串的提取