# 12-chainable-options
## 题目
在js中我们经常使用可串联的函数构建一个对象,使用ts给他赋上类型  
需要提供两个函数`option(key,value)`和`get()`,在`option`中需要使用提供的`key value`扩展当前的对象类型,使用`get`获取最终结果  
`key`只能被使用一次  
例如:
```ts
declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
```
## 分析
- 首先根据题目得知,`config`的类型应该是一个包含`option与get`方法的对象
- 所以我们在`Chainable`接口声明一个泛型变量`T`,用于保存`option`添加的属性值
- 所以`get`返回值的类型就是`T`
- 接下来处理`option`的类型
- 首先声明两个泛型变量,用于代表`option`的键值类型,所以`A extends string`,`B`可以是任意类型
- 注意,题目中有一句话**`key`只能被使用一次**,所以`key`的类型需要判断,如果有则不能使用`A extends keyof T ? never : A`
- 然后递归使用即可
> `Merge`只是方便查看,与题目无意义
## 题解
```ts
interface Chainable<T = {}> {
  option: <A extends string, B>(key: A extends keyof T ? never : A, val: B) => Chainable<Merge<Omit<T, keyof { [K in A]: B }> & { [K in A]: B }>>;
  get: () => T;
}
type Merge<T extends Record<string, any>> = T extends never ? never : {
  [Key in keyof T]: T[Key]
}
declare const config: Chainable;
```
## 知识点
- 递归解决问题
- 泛型变量