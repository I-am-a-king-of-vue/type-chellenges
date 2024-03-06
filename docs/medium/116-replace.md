# 116-replace
## 题目
实现字符串的`Replace`  
例如:
```ts
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'
```
## 分析
使用字符串的匹配即可`${infer A}${K}${infer B}`
## 题解
```ts
type Replace<T extends string, K extends string, L extends string> =
  K extends "" ? T :
  T extends `${infer A}${K}${infer B}` ? `${A}${L}${B}` : T;
```
## 知识点
- 字符串的匹配:`T extends '${infer A}${K}${infer B}'`