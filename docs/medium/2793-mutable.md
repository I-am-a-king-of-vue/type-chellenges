# 2793-mutable
## 题目
将对象的全部属性变为可变  
例如:
```ts
interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
```
## 分析
这个题比较简单,遍历对象然后去除`readonly`标志即可,使用`-readonly`
## 题解
```ts
type Mutable<T extends Record<string, any>> = {
  -readonly [K in keyof T]: T[K]
}
```
## 知识点
- `-readonly`