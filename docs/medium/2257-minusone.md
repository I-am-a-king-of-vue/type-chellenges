# 2257-minusone
## 题目
给出一个正整数作为参数,然后返回-1的值  
例如:
```ts
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
```
## 分析
这个题乍一看蛮简单的,预设一个空数组然后循环添加一个元素,用`length`属性对比即可  
但是有一个致命的问题,ts递归最大次数是**1000**次,所以那些值超过1000的会报错实例化过深  
所以在这用了一个取巧的方法:
- 定义一个工具类型`StrToArr`用于将字符串变为数组
- 定义一个工具类型`ParseInt`用于将字符串转为数字
- 定义一个工具类型`InitArr`用于创建指定长度的数组
- 定义一个工具类型`SubTra`用于进行减法运算
- 定义一个工具类型`ArrToNum`用于将字符串类型的数组转为数字
- 定义一个工具类型`GreaterThan`用于比较两者大小(>= true < false)
- 首先判断是否存在0的情况,然后直接返回-1
- 然后判断`T`是否小于1000,比较方式是将`T`转为数组,然后比较`length`与4的大小,如果返回false直接使用`Subtra`减一即可
- 如果大于等于1000,那么提取出最后一个字符,判断是否大于0,如果大于0则直接减一然后与剩余元素拼接转成数字即可
这里有些取巧,没有再判断如果为0的情况
## 题解
```ts
type StrToArr<T extends string, Arr extends string[] = []> =
  `${T}` extends `${infer A}${infer B}`
  ? StrToArr<B, [...Arr, A]>
  : Arr
type ParseInt<T extends string> =
  T extends `${infer A extends number}` ? A : never;
type InitArr<T extends number, E = unknown, L extends unknown[] = []> =
  L["length"] extends T ? L : InitArr<T, E, [...L, E]>;
type SubTra<T extends number, K extends number> =
  InitArr<T> extends [...args: InitArr<K>, ...infer R] ? R['length'] : never;
type ArrToNum<T extends string[], Str extends string = ""> =
  T extends [infer A extends string, ...infer B extends string[]]
  ? ArrToNum<B, `${Str}${A}`>
  : ParseInt<Str>
type GreaterThan<T extends number, K extends number> =
  SubTra<T, K> extends never ? false : true;
type MinusOne<T extends number> =
  T extends 0
  ? -1
  : GreaterThan<StrToArr<`${T}`>['length'], 4> extends false
    ? SubTra<T, 1>
    : StrToArr<`${T}`> extends [...infer A, infer B extends string]
      ? ParseInt<B> extends 0
        ? never
        : [...A, `${SubTra<ParseInt<B>, 1>}`] extends [...infer A extends string[]] ? ArrToNum<A> : never
      : never
```
## 知识点
- ts递归最大数为1000
- 数组长度做计算