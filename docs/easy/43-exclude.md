# 43-exclude
## 题目
实现ts内置的`Exclude<T,K>`  
例如:
```ts
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```
## 分析
`Exclude<T,K>`用于从联合类型T中删除K类型,联合类型在`extends`左侧时会分发,T类型的每个类型都会参与判断  
如果一致则返回never,否则返回T,即可实现
## 题解
```ts
type MyExclude<T extends unknown, K extends unknown> =
  T extends K ? never : T;
```
## 知识点
- 联合类型在`extends`左侧会分散,每个类型都会参与计算