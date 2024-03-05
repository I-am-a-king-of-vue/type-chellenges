# 5360-unique
## 题目
数组去重  
例如:
```ts
type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]
```
## 分析
遍历数组,然后对元素检查是否存在,不存在的则加入存在的则不做处理,然后继续递归,最后返回去重后的结果
## 题解
```ts
type Unique<T extends unknown[], Arr extends unknown[] = []> =
  T extends [infer A, ...infer B]
  ? IsExistence<A, Arr> extends true
    ? Unique<B, Arr>
    : Unique<B, [...Arr, A]>
  : Arr
type IsExistence<T, Arr extends unknown[]> =
  Arr extends [infer A, ...infer B]
  ? Equal<A, T> extends true
    ? true
    : IsExistence<T, B>
  : false
```
## 知识点
- 数组的遍历
- 递归