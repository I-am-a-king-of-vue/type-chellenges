# 3062-shift
## 题目
删除数组的第一个元素  
例如:
```ts
type Result = Shift<[3, 2, 1]> // [2, 1]
```
## 分析
通过`extends`取出第一个元素然后丢弃即可
## 题解
```ts
type Shift<T extends unknown[]> =
  T extends [infer A, ...infer B] ? B : [];
```
## 知识点
- `extends`做提取