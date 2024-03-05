# 14-first of Array
## 题目
获取数组的第一个元素类型  
例如:
```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3
```
## 分析
首先限制T的类型为`unknown[]`的数组,然后使用`extends infer`即可
## 题解
```ts
type First<T extends unknown[]> = T extends [infer A, ...infer B] ? A : never;
```
## 知识点
- 使用`extends`条件判断
- 使用`infer`定义变量