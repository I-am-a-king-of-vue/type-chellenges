# 3188-tuple-to-nested-Object
## 题目
根据字符串数组以及`V`,生成一个嵌套数组  
例如:
```ts
type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
```
## 分析
思路是,`extends`做提取,获取第一个元素,然后返回一个对象,对象的值递归调用剩余的元素即可
## 题解
```ts
type TupleToNestedObject<T extends string[], V> =
  T extends [infer A extends string, ...infer B extends string[]] ? {
    [k in A]: TupleToNestedObject<B, V>
  } : V;
```
## 知识点
- `extends`做提取
- 递归
- `[K in A]`创建对象的键