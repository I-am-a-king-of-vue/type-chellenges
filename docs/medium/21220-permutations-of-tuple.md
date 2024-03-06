# 21220-permutations-of-tuple
## 题目
将数组转为联合类型  
例如:
```ts
// [1,2,3] ==> [1,2,3]|[2,3,1]|[3,2,1]|[1,3,2]|[3,1,2]|[2,1,3]
```
## 分析
这个比较迷茫,看的大佬解析,有懂的大佬希望能教一下
## 题解
```ts
type A1<T extends unknown[], U extends unknown[] = T, R extends unknown[] | never = never> =
  T extends [infer A, ...infer B]
  ? [...B, A] extends U
    ? [...B, A] | R
    : A1<[...B, A], U, [...B, A] | R>
  : [];
type PermutationsOfTuple<T extends unknown[], U extends unknown[] = T, K extends unknown[] = A1<T, U>> =
  K extends K
  ? TwoArr<K> | K
  : never;
type TwoArr<T extends unknown[], Arr extends unknown[] = []> =
  T extends [infer A, infer B, ...infer C]
  ? TwoArr<C, [...Arr, B, A]>
  : [...Arr, ...T]
```
## 知识点