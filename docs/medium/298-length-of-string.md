# 298-length-of-string
## 题目
计算字符串长度
## 分析
这道题,乍一看没什么思路,ts没有提供用于计算的相关功能,但是提供了元组的`length`属性,  
所以我们可以用元组进行计数,最后返回元组的`length`即可
## 题解
```ts
type StringLen<T extends string, A extends string[] = []> =
  T extends `${infer B}${infer C}` ? StringLen<C, [...A, B]> : A["length"];
```
## 知识点
- 数组长度做计算
- 递归