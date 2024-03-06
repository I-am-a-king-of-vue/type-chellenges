# 3196-fliparguments
## 题目
反转函数入参的类型  
例如:
```ts
type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void
```
## 分析
获取函数的入参类型,然后使用上题的类型进行反转,返回一个新类型即可  
获取函数的入参类型的方法`T extends (...args: infer A) => infer R`
## 题解
```ts
type FlipArguments<T extends Function> =
  T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R : never;
type Reverse<T extends unknown[]> =
  T extends [...infer A, infer B] ? [B, ...Reverse<A>] : T
```
## 知识点
- `extends`做提取