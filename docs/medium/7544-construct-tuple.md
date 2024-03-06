# 7544-construct-tuple
## 题目
生成指定长度的数组
## 分析
跟我们做的工具类`InitArr`一模一样
## 题解
```ts
type ConstructTuple<T extends number, E = unknown, L extends unknown[] = []> =
  L["length"] extends T ? L : ConstructTuple<T, E, [...L, E]>;
```
## 知识点
- 递归
- 数组长度做计数