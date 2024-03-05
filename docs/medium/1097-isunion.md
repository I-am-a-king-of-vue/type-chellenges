# 1097-isunion
## 题目
判断是否是联合类型  
例如:
```ts
type case1 = IsUnion<string> // false
type case2 = IsUnion<string | number> // true
type case3 = IsUnion<[string | number]> // false
```
## 分析
联合类型的特性是可分散,即当`extends`左侧是联合类型时,联合类型的每个类型都会参与计算  
那么,我们可以根据此特性,来比对分散的每个类型与原类型是否相同,如果相同则表示不为联合类型  
最后要处理`never`,当`T`为`never`直接返回`false`即可
## 题解
```ts
type IsNever<T> =
  [T] extends [never] ? true : false;
type IsUnion<T, K = T> =
  IsNever<T> extends true 
  ? false 
  : T extends T
    ? [K] extends [T] 
      ? false 
      : true
    : never
```
## 知识点
- 联合类型可分散