# 1367-remove-index-signature
## 题目
删除对象的可索引签名  
例如:
```ts
type Foo = {
  [key: string]: any
  foo(): void
}

type A = RemoveIndexSignature<Foo> // expected { foo(): void }
```
## 分析
可索引签名的类型是`string | number | symbol`,所以使用他们与`K`进行比较即可  
使用`string extends K`而不是`K extends string`是因为,可索引签名的类型是`string | number | symbol`而不是他们的子类型
## 题解
```ts
type RemoveIndexSignature<T extends Record<string, any>> = {
  [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K]
}
```
## 知识点
- 可索引签名的类型