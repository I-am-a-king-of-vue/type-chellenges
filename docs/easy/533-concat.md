# 533-concat
## 题目
实现`Array.concat`
## 分析
使用扩展运算符即可
## 题解
```ts
type Concat<T extends readonly unknown[], K extends readonly unknown[]> = [...T, ...K];
```
## 知识点
- ts中扩展运算符的使用