# 4803-trim-right
## 题目
去除右侧的空白  
## 分析
这个已经在[Trim](/medium/108-trim.md)一节做过,直接cv即可
## 题解
```ts
type TrimRight<T extends string> =
  T extends `${infer A}${" " | "\n" | "\t"}` ? TrimRight<A> : T;
```
## 知识点
- 字符串的提取