# 4484-isTuple
## 题目
判断是不是元组
## 分析
这个乍看还是比较简单的,先判断是不是`never`,在判断是不是数组(记得加`readonly`)  
但是,数组跟元组如何区分呢  
数组跟元组最大的区别是,元组的大小是确定的,所以元组`['length']`是1 2 3...,而数组是`number`  
所以通过`number extends T["length"]`即可判断
## 题解
```ts
type IsTuple<T> =
  [T] extends [never]
  ? false
  : T extends readonly unknown[]
    ? number extends T['length']
      ? false
      : true
    : false;
```
## 知识点
- 数组与元组的区别