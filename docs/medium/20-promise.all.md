# 20-promise.all
## 题目
给`PromiseAll`指定类型,他接收元素为`Promise`或者类似于`Promise`的对象的数组,返回值为`Promise<T>`,`T`是这样`Promise`的结果组成的数组  
例如:
```ts
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// 应推导出 `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)
```
## 分析
使用泛型变量来接收传入的数组,并返回一个`Promise`类型,其中对值进行特殊处理,进一步获取准确的类型
## 题解
```ts
type PromiseAllType = <T extends unknown[]>(a: [...T]) => Promise<{
  [K in keyof T]: GetPromiseType<T[K]>
}>;
type GetPromiseType<T> =
  T extends Promise<infer R> ? R : T
declare const PromiseAll: PromiseAllType;
```
## 知识点
- 递归
- 声明参数时,使用`[...T]`,而不是`T`是因为`[1,2,3]:T == number[], 而[1,2,3]:[...T] == [number,number,number]`