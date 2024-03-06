# 10-tuple-to-union
## 题目
元组类型转联合类型  
例如:
```ts
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```
## 分析
这题比较简单,跟获取元组长度差不多,使用`[number]`即可
## 题解
```ts
type TupleToUnion<T extends unknown[]> = T[number];
```
## 知识点
- 获取数组的全部属性组成的联合类型