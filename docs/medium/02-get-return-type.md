# 02-get-return-type
## 题目
实现ts的`ReturnType`类型  
例如:
```ts
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
```
## 分析
跟获取函数参数类似,使用`extends`获取`(...args:any[]) => infer R`获取返回值类型`R`
## 题解
```ts
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : never;
```
## 知识点
- 获取函数返回值