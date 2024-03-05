# 62-type-lookup
## 题目
根据某个属性在联合类型中查找类型  
在此挑战中,在联合类型`Cat | Dog`中通过指定公共属性`type`的值来获取响应的类型  
例如:
```ts
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
```
## 分析
使用联合类型可分散的特性,依次进行对比  
对比`K`是否存在与`T`的值组成的联合类型中,使用`K extends T[keyof T]`即可
## 题解
```ts
type LookUp<T extends Record<string, any>, K extends string> = T extends T ? K extends T[keyof T] ? T : never : never
```
## 知识点
- 联合类型可分散
- 获取对象的值的联合类型