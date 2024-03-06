# 3060-unshift
## 题目
实现`Array.unshift`  
例如:
```ts
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
```
## 分析
同`Push`,扩展运算符即可
## 题解
```ts
type Unshift<T extends unknown[], K> = [K, ...T];
```
## 知识点
- 扩展运算符