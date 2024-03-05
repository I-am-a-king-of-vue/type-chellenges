# 296-permutaion
## 题目
实现联合类型的全排列,将联合类型转换成所有可能的全排列数组的联合类型  
例如:
```ts
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
```
## 分析
首先处理`never`,使用`[T] extends [never]`来判断  
然后利用联合类型的分散特性来计算  
使用K来记录当前联合类型,因为分发后,T代表的是当前元素(比如A)  
步骤:
```ts
/**
 * T = A K = A | B | C
 * 进入分散
 * [A,...Permutation<B|C>]
 * T = B K = B | C
 * 进入分散
 * [A,B,...Permutation<C>]
 * T = C K = C
 * 进入分散
 * [A,B,C,...Permutation<never>]
 * 结束
 * T = C K = B | C
 * 进入分散
 * [A,C,...Permutation<B>]
 * T = B K = B
 * 进入分散
 * [A,C,B,...Permutation<never>]
 */
```
如果不加`never`判断的话,最后的值是never,因为`Exclude<T,T>`的值是never  
`type IsNever<T> = T extends never ? 1 : 2;`  
值是`never`,因为如果`extends`运算符左侧如果是`never`,则直接返回`never`,需要包装成数组来比较
这个题目比较绕,需要细细分析
## 题解
```ts
type Permutation<T, K = T> =
  [T] extends [never]
  ? []
  : T extends T
    ? [T,...Permutation<Exclude<K,T>>]
    : never
```
## 知识点
- 联合类型的发散特性
- never的特性
- 递归嵌套