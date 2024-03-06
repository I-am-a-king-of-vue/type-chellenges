# 898-includes
## 题目
实现`Array.includes`  
例如:
```ts
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
```
## 分析
遍历元素然后进行判断即可  
> 注意:有一些元素是父子关系,比如`boolean`与`false`,应该返回`false`,所以使用题目文件提供的`Equal`方法来判断
## 题解
```ts
type Includes<T extends unknown[], K> =
  T extends [infer A, ...infer B] ? Equal<A,K> extends true ? true : Includes<B, K> : false
```
## 知识点
- 元素遍历
- 递归处理
- Equal判断