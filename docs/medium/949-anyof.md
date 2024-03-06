# 949-anyof
## 题目
实现一个`any`类型,接收一个数组,如果数组中任意一个元素为真,则返回`true`,否则返回`false`,空数组返回`false`  
例如: 
```ts
type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
```
## 分析
首先,我们要知道哪些元素是`false`,看题目得知`0 | "" | false | [] | {} | null | undefined`返回false,  
接下来只需要遍历数组进行比对即可  
`{...} extends {}`为真,所以需要进行`Equal`对比
## 题解
```ts
type FalseUnionIgObj = 0 | "" | false | [] | null | undefined;
type AnyOf<T extends unknown[]> =
  T extends [infer A, ...infer B]
  ? Equal<A, {}> extends true
    ? AnyOf<B>
    : A extends FalseUnionIgObj
      ? AnyOf<B>
      : true
  : false
```
## 知识点
- `Equal`
- `{...} extends {}`为真