# 3243-flattenDepth
## 题目
打平数组,第二个参数指定打平的次数,默认1
例如:
```ts
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
```
## 分析
首先,看到默认打平一次,先写一个只打平一次的类型
```ts
type FlattenByOne<T extends unknown[]> =
  T extends [infer A, ...infer B]
  ? A extends unknown[]
    ? [...A, ...FlattenByOne<B>]
    : [A, ...FlattenByOne<B>]
  : T;
```
然后`FlattenDepth`接收两个参数的同时,扩展一个`Arr`用于计数,当`Arr['length']`等于U时停止打平  
否则的话递归调用即可
```ts
type FlattenDepth<T extends unknown[], U extends number = 1, Arr extends unknown[] = []> =
  Arr["length"] extends U
  ? T
  : FlattenDepth<FlattenByOne<T>, U, [1, ...Arr]>
```
但是用例有一个次数超过1000,会报错实例化过深,那么就需要在打平之前判断是否已经全部打平,即`T extends FlattenByOne<T>`
即
```ts
type FlattenDepth<T extends unknown[], U extends number = 1, Arr extends unknown[] = []> =
  Arr["length"] extends U
  ? T
  : T extends FlattenByOne<T>
    ? T
    : FlattenDepth<FlattenByOne<T>, U, [1, ...Arr]>
```
## 题解
```ts
type FlattenDepth<T extends unknown[], U extends number = 1, Arr extends unknown[] = []> =
  Arr["length"] extends U
  ? T
  : T extends FlattenByOne<T>
    ? T
    : FlattenDepth<FlattenByOne<T>, U, [1, ...Arr]>
type FlattenByOne<T extends unknown[]> =
  T extends [infer A, ...infer B]
  ? A extends unknown[]
    ? [...A, ...FlattenByOne<B>]
    : [A, ...FlattenByOne<B>]
  : T;
```
## 知识点
- 递归
- `extends`提取
- 数组计数