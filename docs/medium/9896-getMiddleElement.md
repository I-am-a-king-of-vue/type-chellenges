# 9896-getMiddleElement
## 题目
获取数组的中间元素  
例如:
```ts
type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]>, // 返回 [3]
type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // 返回 [3, 4]
```
## 分析
之前我们做过两个类型,分别是`pop shift`,一个是删除数组的最后一个元素,一个是删除数组的第一个元素  
而数组中间元素无非就三种情况,当数组为空时,返回空数组,当数组长度为偶数时,返回两个元素,当数组长度为奇书时,返回一个元素  
那么我们就递归调用即可,每次调用对数组删除第一个以及最后一个元素即可,最后判断长度是否等于0/1/2
## 题解
```ts
type Pop<T extends unknown[]> = T extends [...infer A, infer B] ? A : [];
type Shift<T extends unknown[]> =
  T extends [infer A, ...infer B] ? B : [];
type GetMiddleElement<T extends unknown[]> =
  T["length"] extends 0 | 1 | 2
  ? T
  : GetMiddleElement<Pop<Shift<T>>>;
```
## 知识点
- `shift pop`
- 递归