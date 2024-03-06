# 599-merge
## 题目
将两个对象类型合并,后边类型的键值会覆盖前边类型的键值  
例如:
```ts
type foo = {
  name: string;
  age: string;
}

type coo = {
  age: number;
  sex: string
}

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
```
## 分析
一看到题目就有想法,使用交叉类型配合之前的`ToObj`直接秒了
## 题解
```ts
type Merge<T extends Record<string, any>, K extends Record<string, any>> =
  ToObj<Omit<T, keyof K> & K>;
type ToObj<T extends Record<string, any>> = {
  [K in keyof T]: T[K]
}
```
## 知识点
- 交叉类型的合并