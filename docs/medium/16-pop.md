# 16-pop
## 题目
删除元组的最后一项  
例如:
```ts
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
```
## 分析
使用扩展运算符即可
## 题解
```ts
type Pop<T extends unknown[]> = T extends [...infer A, infer B] ? A : [];
```
## 知识点
- 扩展运算符