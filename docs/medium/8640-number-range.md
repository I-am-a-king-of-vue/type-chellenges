# 8640-number-range
## 题目
生成指定范围数字的联合类型  
例如:
```ts
type result = NumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
```
## 分析
使用`Add`工具类累加,判断开始结尾即可
## 题解
```ts
type InitArr<T extends number, E = unknown, L extends unknown[] = []> =
  L["length"] extends T ? L : InitArr<T, E, [...L, E]>;
type Add<T extends number, K extends number> =
  [...InitArr<T>, ...InitArr<K>]['length']
type NumberRange<T extends number, U extends number, R extends number | never = never> =
  T extends U
  ? T | R
  : NumberRange<Add<T, 1> & number, U, T | R>
```
## 知识点
- 数组长度做计算
- 递归