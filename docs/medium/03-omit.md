# 03-omit
## 题目
实现ts的`Omit`类型  
例如:
```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```
## 分析
`Omit`用于在接口类型T中,省略掉键K,组成新类型返回
## 题解
```ts
type MyOmit<T extends Record<string, any>, K extends keyof T> = {
  [K2 in keyof T as K2 extends K ? never : K2]: T[K2]
}
```
## 知识点
- 遍历对象时,使用`as`操作符可以对键进行编辑