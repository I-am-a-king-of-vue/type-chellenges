# 5153-indexOf
## 题目
获取指定类型在数组中第一次出现的位置  
例如:
```ts
type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
```
## 分析
遍历数组记录位置即可
## 题解
```ts
type IndexOf<T extends unknown[], U, I extends unknown[] = []> =
  T extends [infer A, ...infer B]
  ? Equal<A, U> extends true
    ? I['length']
    : IndexOf<B, U, [...I,unknown]>
  : -1;
```
## 知识点
- 数组遍历
- 递归