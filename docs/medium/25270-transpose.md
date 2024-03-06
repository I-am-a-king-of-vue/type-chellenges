# 25270-transpose
## 题目
旋转矩阵  
例如:
```ts
// 旋转矩阵
/**
 * [1,2,3]
 * [4,5,6]
 * 
 * [1,4]
 * [2,5]
 * [3,6]
 */
```
## 分析
提取数组的每一项组成一个新数组,然后遍历删除即可
## 题解
```ts
type Transpose<T extends unknown[][]> =
  T extends [infer A, ...infer B]
  ? A extends [infer C, ...infer D]
    ? ArrNotEmpty<[GetArrOne<T>, ...Transpose<ShiftAll<T>>]>
    : T
  : []
// 取出数组的第一个元素然后组成数组
type GetArrOne<T extends unknown[][], Arr extends unknown[] = []> =
  T extends [infer A, ...infer B extends unknown[][]]
  ? A extends [infer C, ...infer D]
    ? GetArrOne<B, [...Arr, C]>
    : never
  : Arr
// 对数组的每一项都执行shift操作
type ShiftAll<T extends unknown[][], Arr extends unknown[][] = []> =
  T extends [infer A extends unknown[], ...infer B extends unknown[][]]
  ? ShiftAll<B, [...Arr, Shift<A>]>
  : Arr
// 排除空数组
type ArrNotEmpty<T extends unknown[][], Arr extends unknown[][] = []> =
  T extends [infer A extends unknown[], ...infer B extends unknown[][]]
  ? A['length'] extends 0
    ? ArrNotEmpty<B, Arr>
    : ArrNotEmpty<B, [...Arr, A]>
  : Arr
type Shift<T extends unknown[]> =
  T extends [infer A, ...infer B] ? B : [];
```
## 知识点
- `shilft`
- 数组遍历
- 递归