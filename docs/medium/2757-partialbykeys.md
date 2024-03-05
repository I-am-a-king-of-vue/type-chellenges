# 2757-partialbykeys
## 题目
将对象中指定的属性变为可选,如果`K`不存在时,则全都变为可选  
例如:
```ts
interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
```
## 分析
这个题要分为两部分来做,首先,指定的`K`的属性要变为可选,没有被指定的不能为可选  
使用遍历对象加`as`可以轻松解决
```ts
[Key in keyof T as Key extends K ? Key : never]?:T[Key]
```
属性变可选加`?`即可,如果是不可选`Key extends K ? never : Key`即可  
两者组成一个交叉类型,记得最后合并为一个类型
## 题解
```ts
type PartialByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = Merge<
  {
    [Key in keyof T as Key extends K ? Key : never]?: T[Key]
  } & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
  }
>
type Merge<T extends Record<string, any>> = {
  [K in keyof T]: T[K]
}
```
## 知识点
- 交叉类型的合并
- 可选属性
- 对象的遍历以及`as`