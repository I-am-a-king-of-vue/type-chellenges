# 5821-mapTypes
## 题目
将对象的某个属性的类型转为另一个类型  
例如:
```ts
type StringToNumber = {
  mapFrom: string; // value of key which value is string
  mapTo: number; // will be transformed for number
}
type StringToNumber = { mapFrom: string; mapTo: number;}
MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }
```
## 分析
遍历对象获取值,然后比较值类型是否与`mapFrom`一致即可,遇到联合类型记得使用分散特性  
`U extends { mapFrom: T[K] }`分散的同时不会让值成为联合类型,因为只会匹配相同的
## 题解
```ts
type MapTypes<T extends Record<string, any>, U extends { mapFrom: any, mapTo: any }> = {
  [K in keyof T]: T[K] extends U["mapFrom"]
  ? U extends { mapFrom: T[K] }
    ? U["mapTo"]
    : never
  : T[K]
}
```
## 知识点
- 对象的遍历
- 联合类型的分散