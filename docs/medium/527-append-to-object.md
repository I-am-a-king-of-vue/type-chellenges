# 527-append-to-object
## 题目
向一个对象类型中添加新的类型  
例如:
```ts
type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
```
## 分析
这个题有一个比较简单的解法,使用交叉类型即可  
```ts
type AppendToObject<T extends Record<string,any>, Key extends string, value> = 
  ToObj<T & {[K in Key]:Value}>
type ToObj<T> = {
  [K in keyof T]:T[K]
}
```
使用`ToObj`将交叉类型变为一个对象  
第二种解法:
```ts
type AppendToObject<T extends Record<string, any>, Key extends string, Value extends any> = {
  [K in keyof T | Key]: K extends Key ? Value : T[K]
}
```
使用`Keyof T | Key`并且判断`K extends Key`来选择值
## 题解
```ts
type AppendToObject<T extends Record<string, any>, Key extends string, Value extends any> = {
  [K in keyof T | Key]: K extends Key ? Value : T[K]
}
```
## 知识点
- 交叉后的对象合并
- `keyof T | Key`