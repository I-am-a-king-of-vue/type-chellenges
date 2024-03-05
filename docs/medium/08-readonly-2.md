# 08-readonly-2
## 题目
实现一个`Readonly2`类型,类型K指定类型T中要为只读的属性,如果K不存在,则所有属性都为只读  
例如:
```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
```
## 分析
看似复杂,只需细细分析即可  
- 当K存在时,T类型中的K需要变为只读
- 当K不存在时,都需要变为只读
那么,可以分为两部分:
- `Readonly<Pick<T,K>>`:将从T中提取出K组成新类型,并且变为只读
- `Omit<T,K>`:剩余的不为只读的属性
然后使用`&`运算符组合即可  
但是这样无法查看到具体的类型,所以需要`ToObj`包一下
> 记得将K的默认值设置为keyof T,当K不存在时全部变为只读
## 题解
```ts
type MyReadonly<T extends Record<string, any>, K extends keyof T = keyof T> = ToObj<Readonly<Pick<T, K>> & Omit<T, K>>;
type ToObj<T extends Record<string, any>> = {
  [K in keyof T]: T[K]
}
```
## 知识点
- `Pick与Omit`的妙用