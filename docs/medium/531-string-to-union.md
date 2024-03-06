# 531-string-to-union
## 题目
将字符串转为联合类型  
例如:
```ts
type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
```
## 分析
使用字符串提取,然后递归调用即可
## 题解
```ts
type StringToUnion<T extends string> =
  T extends `${infer A}${infer B}` ? A | StringToUnion<B> : never;
```
## 知识点
- 字符串提取
- 递归