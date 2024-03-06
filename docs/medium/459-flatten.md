# 459-flatten
## 题目
将嵌套的数组打平  
```ts
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
```
## 分析
这个题比较简单,递归秒了  
使用`extends infer`获取单个元素跟剩下的元素,并判断单个元素是否为数组,并递归调用即可
## 题解
```ts
type Flatten<T extends unknown[]> =
  T extends [infer A, ...infer B] ? A extends unknown[] ? [...Flatten<A>, ...Flatten<B>] : [A, ...Flatten<B>] : T
```
## 知识点
- 递归
- 元组遍历:`T extends [infer A,...infer B]`
- 元组边界条件:必须有一个元素,B可以是[]