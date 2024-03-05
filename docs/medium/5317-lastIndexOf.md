# 5317-lastIndexOf
## 题目
获取数组中指定的元素最后一次出现的位置
## 分析
逻辑同[indexOf](/medium/5153-indexOf.md)
## 题解
```ts
type InitArr<T extends number, E = unknown, L extends unknown[] = []> =
  L["length"] extends T ? L : InitArr<T, E, [...L, E]>;
type SubTra<T extends number, K extends number> =
  InitArr<T> extends [...args: InitArr<K>, ...infer R] ? R['length'] : never;
type LastIndexOf<T extends unknown[], U> =
  T extends [...infer A, infer B]
  ? Equal<B, U> extends true
    ? SubTra<T['length'], 1>
    : LastIndexOf<A, U>
  : -1;
```
## 知识点
- 数组遍历
- 递归