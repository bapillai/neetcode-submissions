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
    constructor(diameter,height) {
        this.diameter = diameter;
        this.height = height;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        return this.getTreeInfo(root).diameter;
    }
    getTreeInfo(root) {
        if(root === null) {
            return new TreeInfo(0,0);
        }
        let leftSubTree = this.getTreeInfo(root.left);
        let rightSubTree = this.getTreeInfo(root.right);
        let diameter = Math.max(leftSubTree.diameter,rightSubTree.diameter, leftSubTree.height + rightSubTree.height);
        let height = Math.max(leftSubTree.height,rightSubTree.height) + 1;
        return new TreeInfo(diameter,height);
    }
}
