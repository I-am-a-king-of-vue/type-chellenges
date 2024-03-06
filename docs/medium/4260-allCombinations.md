# 4260-allCombinations
## 题目
实现字符的全排列  
例如:
```ts
  AllCombinations<'ABC'> // '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
```
## 分析
这个题当时没什么思路,后来看了大佬的解析才做得出来  
之前我们做了一个全排列的题目,使用了联合类型可分化的特性,这个也需要  
首先将传入的字符串转为联合类型  
然后使用分散特性,将字符拼接返回
```ts
S extends S
  ? `${S}` | `${S}${AllCombinations<T, Exclude<K, S>>}`
/**
 * T "ABC" S "A"|"B"|"C" K = S
 * 分散
 * A|A(All<B|C>) = A|AB(All<C>) A|AC(All<B>) = A|AB|ABC A|AC|ACB
 */
```
## 题解
```ts
type StringToUnion<S extends string> =
  S extends `${infer A}${infer B}`
  ? A | StringToUnion<B>
  : ""
type AllCombinations<T extends string, K extends string = StringToUnion<T>, S extends string = K> =
  S extends S
  ? `${S}` | `${S}${AllCombinations<T, Exclude<K, S>>}`
  : ""
```
## 知识点
- 联合类型可分散
- 字符串转联合