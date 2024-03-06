# 29785-deep-omit
## 题目
深度Omit  
例如:
```ts
type obj = {
  person: {
    name: string;
    age: {
      value: number
    }
  }
}

type test1 = DeepOmit<obj, 'person'>    // {}
type test2 = DeepOmit<obj, 'person.name'> // { person: { age: { value: number } } }
type test3 = DeepOmit<obj, 'name'> // { person: { name: string; age: { value: number } } }
type test4 = DeepOmit<obj, 'person.age.value'> // { person: { name: string; age: {} } }
```
## 分析
## 题解
```ts
type DeepOmit<T extends object, U extends string> =
  U extends `${infer A}.${infer B}`
  ? {
    [K in keyof T]: K extends A ? DeepOmit<T[K] & object, B> : T[K]
  }
  : Omit<T, U>
```
## 知识点