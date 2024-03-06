# 27152-triangular-number
## 题目
累加  
例如: `3 = 1+2+3`
## 分析
根据值生成数组,然后将生成的数组展开报错即可
## 题解
```ts
type Triangular<T extends number, Arr extends number[] = [], Sum extends number[] = []> =
  Arr["length"] extends T
  ? Sum["length"]
  : Triangular<T, [...Arr, 1], [...Arr, ...Sum, 1]>
```
## 知识点
- 数组长度做计算