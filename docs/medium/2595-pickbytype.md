# 2595-pickbytype
## 题目
根据值的类型提取相同类型的属性  
例如:
```ts
type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }
```
## 分析
这个比较简单,遍历对象然后使用`as`操作符判断即可
## 题解
```ts
type PickByType<T extends Record<string, any>, Val> = {
  [K in keyof T as T[K] extends Val ? K : never]: Val
}
```
## 知识点
- 对象的遍历
- `as`