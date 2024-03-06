# 9989-count-element-number-to-Object
## 题目
统计数组中元素的个数  
例如:
```ts
type Simple1 = CountElementNumberToObject<[]> // return {}
type Simple2 = CountElementNumberToObject<[1,2,3,4,5]> 
/*
 return {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1
}
*/
type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]> 
/*
 return {
  1: 2,
  2: 2,
  3: 2,
  4: 1,
  5: 1
}
*/
```
## 分析
首先使用之前的[Flatten](/medium/459-flatten.md)将数组全部打平  
`K`是打平后的数组,参与遍历,`T`没用了,`L`永远等于最初的`K`,用于参与比较  
首先处理`never`情况,然后遍历`K`处理第一个元素,然后剩余元素参与递归  
处理第一个元素即第一个元素为键,数量为值创建一个对象,并使用交叉类型进行递归  
获取数量即遍历数组找寻相同元素即可,最后将结果进行`ToObj`合并即可
## 题解
```ts
type Flatten<T extends unknown[]> =
  T extends [infer A, ...infer B] ? A extends unknown[] ? [...Flatten<A>, ...Flatten<B>] : [A, ...Flatten<B>] : T
type CountElementNumberToObject<T extends unknown[], K extends unknown[] = Flatten<T>, L extends unknown[] = K> =
  [K] extends [never] ? {}
  : K extends [infer A extends string | number, ...infer B]
    ? ToObj<{ [Key in A]: GetNum<L,A>['length'] }&CountElementNumberToObject<T,B,L>>
    : {}
type GetNum<T extends unknown[], K> = 
  T extends [infer A, ...infer B]
  ? A extends K
    ? [A,...GetNum<B,K>]
    : GetNum<B,K>
  : []
type ToObj<T extends Record<string,any>> = {
  [K in keyof T]:T[K]
}
```
## 知识点
- 递归
- `Flatten`
- 交叉类型的合并