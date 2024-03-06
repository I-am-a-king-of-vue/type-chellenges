# 2070-drop-char
## 题目
从字符串中删除指定字符  
例如:
```ts
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
```
## 分析
字符串提取然后依次对比递归即可
## 题解
```ts
type DropChar<T extends string, D extends string, Str extends string = ""> =
  T extends `${infer S}${infer B}`
  ? S extends D
    ? DropChar<B, D, Str>
    : DropChar<B, D, `${Str}${S}`>
  : Str
```
## 知识点
- 字符串的提取
- 递归