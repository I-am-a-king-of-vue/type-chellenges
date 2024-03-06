# 17973-deepMutable
## 题目
将嵌套的只读对象变为可变对象  
例如:
```ts
type X = {
  readonly a: () => 1
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: "s"
        }
        readonly k: "hello"
      }
    }
  }
}

type Expected = {
  a: () => 1
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: "s"
        }
        k: "hello"
      }
    }
  }
}

type Todo = DeepMutable<X> // should be same as `Expected`
```
## 分析
对象遍历删除`readonly`即可
## 题解
```ts
type DeepMutable<T extends Record<string, any>> = T extends never ? never : {
  -readonly [K in keyof T]: T[K] extends Function ? T[K] : T[K] extends Record<string, any> ? DeepMutable<T[K]> : T[K]
}
```
## 知识点
- `-readonly`