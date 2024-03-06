# 3312-parameters
## 题目
实现内置的`Parameters`  
例如:
```ts
const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
```
## 分析
使用`extends infer`获取参数的类型`(...args:infer A)`,然后根据条件返回即可
## 题解
```ts
type MyParameters<T extends Function> = T extends (...args: infer A) => unknown ? A : never;
```
## 知识点
- 处理函数类型
- 获取函数类型的参数