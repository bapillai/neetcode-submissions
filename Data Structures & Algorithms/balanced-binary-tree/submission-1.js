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
    constructor(isBalanced,height) {
        this.isBalanced = isBalanced;
        this.height = height;
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
            return new TreeInfo(true,0);
        }
        let leftSubTree = this.getTreeInfo(root.left);
        let rightSubTree = this.getTreeInfo(root.right);
        let isBalanced = leftSubTree.isBalanced && rightSubTree.isBalanced && Math.abs(leftSubTree.height - rightSubTree.height) <= 1;
        let height = 1 + Math.max(leftSubTree.height, rightSubTree.height);
        return new TreeInfo(isBalanced,height);
    }
}
