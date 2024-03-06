# 4182-fibonacci-sequence
## 题目
斐波那契数列是指一个由0和1开始,后续每一项都是前两项之和  
`F(0)=0 F(1)=1`  
`F(n)=F(n-1)+F(n-2) n>1`
例如:
```ts
type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
```
## 分析
`T`如果小于3,则返回1,这里为了省事没有判断0的情况  
设置一个`Arr`进行保存数列的内容,如果长度与`T`一致,那么返回最后一个元素即可  
否则继续相加递归  
这些工具类都是写过的,用于进行数学计算加 减 比较大小  
如果不使用工具类而是用数组计数会更简洁
## 题解
```ts
type InitArr<T extends number, E = unknown, L extends unknown[] = []> =
  L["length"] extends T ? L : InitArr<T, E, [...L, E]>;
type Add<T extends number, K extends number> =
  [...InitArr<T>, ...InitArr<K>]['length']
type SubTra<T extends number, K extends number> =
  InitArr<T> extends [...args: InitArr<K>, ...infer R] ? R['length'] : never;
type GreaterThan<T extends number, K extends number> =
  SubTra<T, K> extends never ? false : true;
type Fibonacci<T extends number, Arr extends number[] = [1, 1]> =
  GreaterThan<T, 3> extends true
  ? Arr["length"] extends T
    ? Arr extends [...infer A, infer B] ? B : never
    : Arr extends [...infer A, infer B extends number, infer C extends number] ? Fibonacci<T, [...Arr, Add<B, C> & number]> : never
  : 1
```
## 知识点
- 数组长度做计算
- 递归嵌套