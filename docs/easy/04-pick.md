# 04-pick
## 题目
不使用ts内置的`Pick<T,K>`,实现ts的`Pick<T,K>`类型  
例如:
```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```
## 分析
`Pick<T,K>`用于从一个接口类型T中提取字段K,组成一个新类型返回  
核心就是对类型的属性进行遍历,需要对传入的K进行限制,K的类型应该是T的键组成的联合类型
## 题解
```ts
type MyPick<T extends Record<string, any>, K extends keyof T> = {
  [K2 in keyof T as K2 extends K ? K2 : never]: T[K2]
}
```  
## 知识点
- `[Key in keyof T]`:遍历对象
- `[Key in K]`:遍历指定的键,`K extends keyof T`  