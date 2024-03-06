# 119-replaceAll
## 题目
实现`ReplaceAll`,同`Replace`,但需要匹配全部匹配项  
例如:
```ts
type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
```
## 分析
逻辑同`Replace`,最后加个递归即可
## 题解
```ts
type ReplaceAll<T extends string, K extends string, L extends string> =
  K extends "" ? T : T extends `${infer A}${K}${infer B}` ? `${A}${L}${ReplaceAll<B, K, L>}` : T
```
## 知识点
- 字符串的匹配:`T extends '${infer A}${K}${infer B}'`
- 递归