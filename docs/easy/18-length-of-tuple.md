# 18-length of tuple
## 题目
根据传入的只读元组获取数组长度  
例如:
```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```
## 分析
元组有一个`length`属性,即可获取元组的长度
## 题解
```ts
type Length<T extends readonly unknown[]> = T['length']
```
## 知识点
- `T['length']`:获取元组长度