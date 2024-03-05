# 2759-requiredbykeys
## 题目
将对象中指定的属性变为必选,如果`K`不存在时,全部变为必选  
例如:
```ts
interface User {
  name?: string
  age?: number
  address?: string
}

type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
```
## 分析
解题方法跟上题一样,只不过,变为可选是添加`?`,去掉可选为`-?`
## 题解
```ts
type RequiredByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = Merge<
  {
    [Key in keyof T as Key extends K ? Key : never]-?: T[Key]
  } & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
  }
>
type Merge<T extends Record<string,any>> = {
  [K in keyof T]:T[K]
}
```
## 知识点
- 交叉类型的合并
- 对象的遍历以及`as`
- 去掉可选标志