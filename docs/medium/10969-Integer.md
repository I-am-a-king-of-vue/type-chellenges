# 10969-Integer
## 题目
判断是不是整型,是就返回本身,否则返回never
## 分析
将数字转为字符串进行截取,没有小数点即整数,直接返回,如果有小数点遍历查看是否都为0,如果是则返回本身  
注意要处理传入`number`的情况,所以`number extends T ? never : `
## 题解
```ts
type Integer<T extends number> =
  number extends T
  ? never
  : `${T}` extends `${infer A}.${infer B}`
    ? HasNotZero<B> extends true ? T : never
    : T
type HasNotZero<T extends string> =
  T extends `${infer A extends number}${infer B}`
  ? A extends 0
    ? HasNotZero<B>
    : false
  : true
```
## 知识点
- 数字转字符串
- 字符串的截取
- 遍历
- number判断