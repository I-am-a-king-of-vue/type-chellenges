# 1130-replacekeys
## 题目
替换联合类型中的键,如果没有则赋值`never`  
例如:
```ts
type NodeA = {
  type: "A"
  name: string
  flag: number
}

type NodeB = {
  type: "B"
  id: number
  flag: number
}

type NodeC = {
  type: "C"
  name: string
  flag: number
}

type Nodes = NodeA | NodeB | NodeC

type ReplacedNodes = ReplaceKeys<
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
```
## 分析
首先看到联合类型,就该想到联合类型的分散特性,所以
```ts
type ReplaceKeys<T extends Record<string,any>,K,L extends Record<string,any>> =
  T extends T
  ?
  : never
```
然后遍历对象的每个属性
```ts
type ReplaceKeys<T extends Record<string,any>,K,L extends Record<string,any>> =
  T extends T
  ? { [Key in keyof T]:T[K] }
  : never
```
最后对值做处理即可,首先判断当前属性是否是所需的属性`K`
```ts
Key extends K ? GetVal<Pick<L,Key & string>> : T[Key]
```
如果是的话,需要进行特殊处理,首先使用`Pick`提取出`L`中的属性,然后返回值即可  
注意,如果属性的值不存在,类型是`unknown`,需要转为`never`
```ts
type GetVal<T extends Record<string, any>> = {
  [K in keyof T]: Equal<T[K], unknown> extends true ? never : T[K]
}[keyof T]
```
## 题解
```ts
type ReplaceKeys<T extends Record<string, any>, K, L extends Record<string, any>> = // 原始的联合类型,指定的键,要替换的Record
  T extends T
  ? { [Key in keyof T]: Key extends K ? GetVal<Pick<L, Key & string>> : T[Key] }
  : never;
type GetVal<T extends Record<string, any>> = {
  [K in keyof T]: Equal<T[K], unknown> extends true ? never : T[K]
}[keyof T]
```
## 知识点
- 联合类型可分散
- `{...}[keyof T]`获取对象的值组成的联合类型
- `Pick`
- 属性的值不存在时,值类型是`unknown`