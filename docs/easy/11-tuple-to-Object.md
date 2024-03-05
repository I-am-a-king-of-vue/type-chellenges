# 11-tuple to Object
## 题目
将元组类型转为对象类型,这个对象类型的键值与元组的元素一致  
例如:
```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```
## 分析
遍历数组,然后设置键与值即可  
> 注意: 键应该是string|number|symbol的类型,ts内置类型`(PropertyKey)`
> `as const`会添加`readonly`标识,因此限制T的值时限制为只读数组
## 题解
```ts
type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K
}
```
### 知识点
- ts内置类型`type PropertyKey = string | symbol | number`
- `as const`会根据值生成一份字面量类型,并添加`readonly`前缀
- 遍历数组的方法:`T[number]`