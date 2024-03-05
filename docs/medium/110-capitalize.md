# 110-capitalize
## 题目
实现ts内置的`Capitalize`  
例如:
```ts
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
```
## 分析
实现首字母大写,获取第一个首字母,然后大写,拼接返回
## 题解
```ts
type MyCapitalize<T extends string> = T extends `${infer A}${infer B}` ? `${Uppercase<A>}${B}` : T;
```
## 知识点
- `Uppercase`:ts内置,将字母变为大写