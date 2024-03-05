# 4425-greater-than
## 题目
比较两个数的大小  
例如:
```ts
GreaterThan<2, 1> //should be true
GreaterThan<1, 1> //should be false
GreaterThan<10, 100> //should be false
GreaterThan<111, 11> //should be true
```
## 分析
只需要将之前的方法改造一下即可  
`never extends`任何类型都为真,这不知道为什么  
所以之前的类型需要改一下`SubTra<T,K> extends ) ? false : true`  
然后就是处理长度大于1000,还是通过先转成元素然后进行计算,如果不为`never`则表示超过1000,这时再进行之前的逻辑会报错  
`BigNumGreaterThan`进行比较,先比较长度,通过长度大小可以确定两个数的大小  
如果一致则细致比较每一个元素即可,比较绕,可以细细分析一下
## 题解
```ts
type InitArr<T extends number, E = unknown, L extends unknown[] = []> =
  L["length"] extends T ? L : InitArr<T, E, [...L, E]>;
type SubTra<T extends number, K extends number> =
  InitArr<T> extends [...args: InitArr<K>, ...infer R] ? R['length'] : never;
type GreaterThan<T extends number, K extends number> =
  [SubTra<NumberToTuple<`${T}`>["length"], 4>] extends [never]
  ? SubTra<T, K> extends 0 ? false : true
  : BigNumGreaterThan<T, K> // 大于最大深度1000
type NumberToTuple<T extends string, Arr extends string[] = []> =
  T extends `${infer A}${infer B extends string}` ? NumberToTuple<B, [...Arr, A]> : Arr;
type BigNumGreaterThan<T extends number, K extends number> =
  [SubTra<NumberToTuple<`${T}`>["length"], NumberToTuple<`${K}`>["length"]>] extends [never]
  ? false // 如果T的长度比K的长,则T<K false
  : SubTra<NumberToTuple<`${T}`>["length"], NumberToTuple<`${K}`>["length"]> extends 0
    ? GreaterThanArr<NumberToTuple<`${T}`>, NumberToTuple<`${K}`>> // 长度一致,需要细致比较
    : true // T>K true
type GreaterThanArr<T extends string[], K extends string[]> =
  T extends [infer A extends string, ...infer B extends string[]]
  ? K extends [infer C extends string, ... infer D extends string[]]
    ? GreaterThan<StrToNum<A>, StrToNum<C>> extends true
      ? true
      : GreaterThanArr<B, D>
    : never
  : false;
type StrToNum<T extends string> = T extends `${infer S extends number}` ? S : never;
```
## 知识点