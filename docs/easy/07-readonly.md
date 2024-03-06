# 07-readonly
## 题目
不使用ts内置的`Readonly<T>`实现自定义的`Readonly<T>`  
例如:
```ts
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```
## 分析
`Readonly<T>`的作用是将一个接口类型声明为只读,即不可修改  
只需要遍历接口并添加`readonly`修饰符即可
## 题解
```ts
type MyReadonly<T extends Record<string, any>> = {
  readonly [K in keyof T]: T[K]
}
```
## 知识点
- `[K in keyof T]`:遍历对象
- `readonly`修饰符使属性变为可读