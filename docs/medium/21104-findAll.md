# 21104-findAll
## 题目
查询字符串中指定字符串出现的所有位置
## 分析
遍历字符串的每一个字符,同时遍历指定字符串的每个字符,如果字符串的第一个字符与指定字符串的第一个字符匹配,查看字符串是否以指定字符串开头,然后记录位置即可
## 题解
```ts
type FindAll<T extends string, U extends string, I extends 1[] = [], Arr extends number[] = []> =
  T extends `${infer A}${infer B}`
  ? U extends `${infer C}${string}`
    ? A extends C
      ? T extends `${U}${string}`
        ? FindAll<B, U, [...I, 1], [...Arr, I["length"]]>
        : FindAll<B, U, [...I, 1], Arr>
      : FindAll<B, U, [...I, 1], Arr>
    : FindAll<B, U, [...I, 1], Arr>
  : Arr
```
## 知识点
- 字符串的遍历
- 字符串的匹配