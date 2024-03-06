# 9616-parse-url-params
## 题目
获取`url`的参数  
例如:
```ts
ParseUrlParams<':id'> // id
ParseUrlParams<'posts/:id'> // id
ParseUrlParams<'posts/:id/:user'> // id | user
```
## 分析
这个一看就比较简单,使用`:`匹配字符串,然后判断后边是否还能使用`:`匹配,然后递归即可,最后将结果组成联合类型返回即可,我的做法是使用数组保存结果,最后返回`[number]`即可
## 题解
```ts
type ParseUrlParams<T extends string, Arr extends string[] = []> =
  T extends `${string}:${infer A}`
  ? A extends `${infer B extends string}/${infer C}`
    ? ParseUrlParams<C, [...Arr, B]>
    : [...Arr, A][number]
  : Arr[number]
```
## 知识点
- 字符串的提取
- `数组[number]`获取数组元素组成的联合类型