# 4499-chunk
## 题目
将数组`T`分割为二维数组,每个数组的元素的个数的`U`  
例如:
```ts
type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
```
## 分析
使用一个`Arr`来计数,然后循环数组向`Arr`添加即可,如果`Arr['length']等于U`,则返回`[Arr,...Chunk<...>]`
## 题解
```ts
type Chunk<T extends unknown[], K extends number, Arr extends unknown[] = []> =
  T extends [infer A, ...infer B]
  ? Arr['length'] extends K
    ? [Arr, ...Chunk<T, K, []>]
    : Chunk<B, K, [...Arr, A]>
  : Arr extends [] 
    ? [] 
    : [Arr]
```
## 知识点
- 递归
- 数组遍历