# 5117-without
## 题目
去除数组中指定的元素  
例如:
```ts
type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
```
## 分析
看例题,`V`有两种情况,[]或者数字,所以将分为两种情况进行处理,逻辑都是相似  
遍历数组`T`,然后与`V`进行对比,如果`V`是数组,再遍历数组,将`T`的每个元素与`V`的每个元素比对即可,不同的元素保存在`Arr`最后返回
## 题解
```ts
type Without<T extends unknown[], V extends unknown[] | number, Arr extends unknown[] = []> =
  V extends number
  ? T extends [infer A, ...infer B]
    ? A extends V
      ? Without<B, V, Arr>
      : Without<B, V, [...Arr, A]>
    : Arr
  : V extends [infer A, ...infer B]
    ? T extends [infer C, ...infer D]
      ? C extends A
        ? Without<D, V, Arr>
        : Without<D, V, [...Arr, C]>
      : B extends []
        ? Arr
        : Without<Arr, B>
    : never
```
## 知识点