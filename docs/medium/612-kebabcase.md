# 612-kebabcase
## 题目
将大驼峰转为用`-`拼接的字符串  
例如:
```ts
type FooBarBaz = KebabCase<"FooBarBaz">
const foobarbaz: FooBarBaz = "foo-bar-baz"

type DoNothing = KebabCase<"do-nothing">
const doNothing: DoNothing = "do-nothing"
```
## 分析
使用字符串提取开头第一个字符,然后判断剩余字符是否是小写字母开头,如果不是,则返回小写的`A`并用`-`拼接继续做递归
## 题解
```ts
type KebabCase<T extends string> =
  T extends `${infer A}${infer B}` 
  ? B extends Uncapitalize<B> 
    ? `${Lowercase<A>}${KebabCase<B>}` 
    : `${Lowercase<A>}-${KebabCase<B>}` 
  : "";
```
## 知识点
- ts内置工具:`Uncapitalize`将字符串首字母小写
- 递归
- 字符串提取