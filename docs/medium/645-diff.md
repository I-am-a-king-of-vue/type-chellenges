# 645-diff
## 题目
获取两个接口中的差值属性  
例如:
```ts
type Foo = {
  a: string;
  b: number;
}
type Bar = {
  a: string;
  c: boolean
}

type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }
```
## 分析
获取两个接口中的差值:
- 获取`T|K`双方共有的属性(`Pick<T, keyof K & keyof T>|Pick<K, keyof K & keyof T>`)
  - `keyof K & keyof T`的意思是,`K T`都存在的属性
- 然后分别进行删除(记得使用交叉类型连接)
- 最后使用`ToObj`进行合并
## 题解
```ts
type Diff<T extends Record<string, any>, K extends Record<string, any>> =
  ToObj<Omit<T, keyof Pick<T, keyof K & keyof T>> & Omit<K, keyof Pick<K, keyof T & keyof K>>>
type ToObj<T extends Record<string, any>> = {
  [K in keyof T]: T[K]
}
```
## 知识点
- `keyof K & keyof T`:匹配`K T`都存在的属性
- 交叉类型的合并