# 191-append-argument
## 题目
实现类型`AppendArgument`,接收一个函数以及一个任意类型,返回一个新函数,新函数的参数类型多一个任意类型  
例如:
```ts
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean> 
// 期望是 (a: number, b: string, x: boolean) => number
```
## 分析
使用`extends`判断是否是函数类型,同时可以通过`(...args:infer A) => infer R`获取到函数类型  
如果是,返回一个函数类型`()=>R`,然后对返回的函数类型进行类型声明,他的类型是原函数参数的类型,然后加一个任意类型,就等于  
`(...args:[...A,K]) => R`
## 题解
```ts
type AppendArgument<T extends Function, Type> =
  T extends (...args: infer A) => infer R ? (...args: [...A, Type]) => R : never;
```
## 知识点
- 获取函数的参数以及返回值类型
- 扩展元组