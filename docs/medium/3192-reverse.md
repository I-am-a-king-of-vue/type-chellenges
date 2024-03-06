# 3192-reverse
## 题目
将数组的内容进行反转  
例如:
```ts
type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
```
## 分析
`extends`提取最后一个元素,然后当做第一个元素返回,再递归剩余元素
## 题解
```ts
type Reverse<T extends unknown[]> =
  T extends [...infer A, infer B] ? [B, ...Reverse<A>] : T
```
## 知识点
- `extends`做提取
- 递归