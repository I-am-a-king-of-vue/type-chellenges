# 30430-tower-of-hanoi
## 题目
汉诺塔问题
## 分析
## 题解
```ts
type Hanoi<N extends number, From = 'A', To = 'B', Intermediate = 'C'> = Helper<N, [], From, To, Intermediate>
type Helper<N extends number, C extends 1[], From extends unknown, To extends unknown, Intermediate extends unknown> = C['length'] extends N
  ? []
  : [...Helper<N, [...C, 1], From, Intermediate, To>, [From, To], ...Helper<N, [...C, 1], Intermediate, To, From>]
```
## 知识点