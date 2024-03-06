# 2852-omitbytype
## 题目
从对象中删除属性值为`V`的类型  
例如:
```ts
type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }
```
## 分析
大体思路就是遍历对象配合`as`
## 题解
```ts
type OmitByType<T extends Record<string, any>, V> = {
  [K in keyof T as T[K] extends V ? never : K]: T[K]
}
```
## 知识点
- 对象的遍历
- `as`