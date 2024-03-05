# 3376-inorderTraversal
## 题目
中序遍历,获取全部的`val`并组成元组返回  
例如:
```ts
const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

type A = InorderTraversal<typeof tree1> // [1, 3, 2]
```
## 分析
中序遍历是一种二叉树的遍历方式,按照左子树-根节点-右子树的顺序访问二叉树的节点  
## 题解
```ts
interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> =
  [T] extends [TreeNode]
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : []
```
## 知识点
- 递归嵌套