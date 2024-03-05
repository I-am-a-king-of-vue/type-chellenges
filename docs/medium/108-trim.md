# 108-trim
## 题目
去除两侧空白  
例如:
```ts
type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
```
## 分析
逻辑同上一个类似,分别去除两侧的空白即可
## 题解
```ts
type TrimLeft<T extends string> =
  T extends `${" " | "\n" | "\t"}${infer A}` ? TrimLeft<A> : T;
type TrimRight<T extends string> =
  T extends `${infer A}${" " | "\n" | "\t"}` ? TrimRight<A> : T;
type Trim<T extends string> = TrimLeft<TrimRight<T>>;
```
## 知识点
- 递归
- 字符串提取