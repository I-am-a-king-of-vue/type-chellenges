# 15-last-of-array
## 题目
获取元组的最后一个类型  
例如:
```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // 应推导出 'c'
type tail2 = Last<arr2> // 应推导出 1
```
## 分析
使用`infer`以及扩展运算符即可
## 题解
```ts
type At<T extends unknown[]> = T extends [...infer A, infer B] ? B : never;
```
## 知识点
- `infer`的使用