# 1978-percentage-parser
## 题目
将一个数字字符串转为字符串数组,数组包括三部分[符号,数字本身,符号],没有匹配则用空字符串占位  
例如:
```ts
type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = PercentageParser<PString1> // expected ['', '', '']
type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
type R5 = PercentageParser<PString5> // expected ["", "85", ""]
```
## 分析
首先定义两个类型分别匹配`+ -`以及数字0-9,然后提取字符串递归对比即可
## 题解
```ts
type StartIndex = '+' | '-';
type NumberIndex = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type PercentageParser<T extends string, Str extends string = "", C extends string = "", E extends string = ""> =
  T extends `${infer S}${infer B}`
  ? S extends StartIndex
    ? PercentageParser<B, `${Str}${S}`>
    : S extends NumberIndex
      ? PercentageParser<B, Str, `${C}${S}`>
      : PercentageParser<B, Str, C, S>
  : [Str, C, E]
```
## 知识点
- 字符串的提取
- 递归