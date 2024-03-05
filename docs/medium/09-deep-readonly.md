# 09-deep-readonly
## 题目
实现一个类型`DeepReadonly`进行深度只读  
假设我们只处理对象  
例如:
```ts
type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type Todo = DeepReadonly<X> // should be same as `Expected`
```
## 分析
遍历对象然后将每个属性变为只读即可,判断值是否是对象并决定是否继续递归调用  
这时查看会看到被深层次嵌套的类型并未发生改变,这是ts特性导致的,只有在类型被使用时才会进行计算,所以需要使用`T extends never?never:`来强制参与计算
> 注意: `Function extends Record<string,any>`是`true`,所以需要进一步判断
## 题解
```ts
type DeepReadonly<T extends Record<string, any>> = T extends never ? never : {
  readonly [K in keyof T]: T[K] extends Record<string, any> ? T[K] extends Function ? T[K] : DeepReadonly<T[K]> : T[K]
}
```
## 知识点
- 类型的递归
- `Function extends Record<string,any>`为`true`