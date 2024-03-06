# 2946-Objectentries
## 题目
将对象类型变为数组联合类型  
例如:
```ts
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
```
## 分析
首先肯定想到对象的遍历
```ts
type ObjectEntries<T extends Record<string,any>> = {
  [K in keyof T]:
}
```
最后的返回结果要返回一个联合类型,而`[keyof T]`正好是一个联合类型,那么只需要将对象的值设为数组,然后`[keyof T]`获取即可
```ts
type ObjectEntries<T extends Record<string,any>> = {
  [K in keyof T]:[K,T[K]]
}[keyof T]
```
基本的就已经做完了,观察用例,还要处理可选的情况,那么就先对T去除可选
```ts
type RemoveOptional<T extends Record<string, any>> = {
  [K in keyof T]-?: T[K]
}
type ObjectEntries<T extends Record<string,any>> = RemoveOptional<T>
```
然后使用之前的`ObjecEntries`的逻辑处理不就行了
```ts
type RemoveOptional<T extends Record<string, any>> = {
  [K in keyof T]-?: T[K]
}
type GetEntries<T extends Record<string, any>> = {
  [K in keyof T]: [K, T[K]]
}[keyof T]
type ObjectEntries<T extends Record<string, any>> = GetEntries<RemoveOptional<T>>;
```
为什么`{a?:undefined}`无法通过  
因为`{a?:undefined}`执行`-?`后,值就变为了`never`,所以需要特殊处理  
```ts
[K in keyof T]: [K, T[K] extends never ? undefined:T[K]]
```
## 题解
```ts
type RemoveOptional<T extends Record<string, any>> = {
  [K in keyof T]-?: T[K]
}
type GetEntries<T extends Record<string, any>> = {
  [K in keyof T]: [K, T[K] extends never ? undefined : T[K]] // T[K] never 包不包[]都可以
}[keyof T]
type ObjectEntries<T extends Record<string, any>> = GetEntries<RemoveOptional<T>>;
```
## 知识点
- 对象的遍历
- `{a?:undefined} -? {a:never}`
- `-?`