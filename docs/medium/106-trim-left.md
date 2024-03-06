# 106-trim-left
## 题目
去除左侧空白  
例如:
```ts
type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '
```
## 分析
这一道题目比较简单,递归提取字符串即可
## 题解
```ts
type TrimLeft<T extends string> =
  T extends `${" " | "\n" | "\t"}${infer A}` ? TrimLeft<A> : T;
```
## 知识点
- 递归
- 提取字符串