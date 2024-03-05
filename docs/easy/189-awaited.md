# 189-awaited
## 题目
获取Promise的类型  
例如:
```ts
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
```
## 分析
不允许传入基本类型,所以需要限制为`object`,使用`extends`进行判断然后使用`infer`获取类型,`infer`获取的类型可能是`Promise`类型,需要进一步递归
## 题解
```ts
type MyAwaited<T extends object> = T extends
  | Promise<infer R>
  | { then: (onfullfilled: (arg: infer R) => any) => any }
  ? GetVal<R>
  : T;
type GetVal<T> = T extends
  | Promise<infer R>
  | { then: (onfullfilled: (arg: infer R) => any) => any }
  ? GetVal<R>
  : T;
```
## 知识点
- 类型的递归使用