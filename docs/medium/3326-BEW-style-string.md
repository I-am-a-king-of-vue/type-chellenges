# 3326-BEW-style-string
## 题目
将三个数组的内容使用`a__b--c`的形式连接,并给出全排列  
例如:
```ts
BEM<'btn', ['price'], ['warning', 'success']> // 'btn__price--warning' | 'btn__price--success' 
```
## 分析
有两个小技巧
- `数组[number]`会获取数组元素组成的联合类型
- `string数组[number]`会自动变为`string数组元素`|`string数组元素|...`
所以就很简单了,看题解
## 题解
```ts
type BEM<B extends string, E extends string[], M extends string[]> =
  E extends []
  ? M extends []
    ? `${B}`
    : `${B}--${M[number]}`
  : M extends []
    ? `${B}__${E[number]}`
    : `${B}__${E[number]}--${M[number]}`
```
## 知识点
- `数组[number]`获取数组元素组成的联合类型
- `${string}数组[number]`会获取字符串与数组元素拼接的全部可能的联合类型