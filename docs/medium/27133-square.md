# 27133-square
## 题目
返回一个数的平方
## 分析
## 题解
```ts
type Square<T extends number, U extends number = Abs<T>> =
  `${U}` extends `${infer A extends number}00` ? `${Multiply<A, A> & number}0000` extends `${infer R extends number}` ? R : never : Multiply<U, U>
type Abs<T extends number> =
  `${T}` extends `-${infer R extends number}` ? R : T;
type Multiply<T extends number, K extends number, A extends unknown[] = []> =
  T extends 0 ? A['length'] : Multiply<SubTra<T, 1>, K, [...A, ...InitArr<K>]>
type res89 = Square<100>
// 累加 3 == 1+2+3
type Triangular<T extends number, Arr extends number[] = [], Sum extends number[] = []> =
  Arr["length"] extends T
  ? Sum["length"]
  : Triangular<T, [...Arr, 1], [...Arr, ...Sum, 1]>
```
## 知识点