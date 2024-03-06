# 28333-public-type
## 题目
获取键不为_开头的属性
## 分析
遍历对象属性使用`as`即可
## 题解
```ts
type PublicType<T extends object> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K]
}
```
## 知识点
- 遍历对象
- `as`