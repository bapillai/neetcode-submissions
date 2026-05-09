/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class TreeInfo {
    constructor(height, isBalanced) {
        this.height = height;
        this.isBalanced = isBalanced;
    }
}
class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.getTreeInfo(root).isBalanced;
    }
    getTreeInfo(root) {
        if(root === null) {
            return new TreeInfo(0,true);
        }
        let leftSubTree = this.getTreeInfo(root.left);
        let rightSubTree = this.getTreeInfo(root.right);
        let height = 1 + Math.max(leftSubTree.height, rightSubTree.height);
        let isBalanced = leftSubTree.isBalanced && rightSubTree.isBalanced && Math.abs(leftSubTree.height - rightSubTree.height) <= 1;
        return new TreeInfo(height, isBalanced);
    }
}
