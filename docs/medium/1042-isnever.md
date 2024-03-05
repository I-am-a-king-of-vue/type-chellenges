# 1042-isnever
## 题目
判断一个类型是不是`never`  
例如:
```ts
type A = IsNever<never> // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false
```
## 分析
使用`Equal`判断即可  
如果不借用的话,直接比较即可,但是用例`IsNever<never>`会返回`never`,原因是当`never`在`extends`左侧时,会直接返回`never`,只需要用`[]`分别包裹`extends`左右即可
## 题解
```ts
type IsNever<T> =
  [T] extends [never] ? true : false;
```
## 知识点
- `[T] extends [never]`