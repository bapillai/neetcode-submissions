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

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root === null || root.val === p.val || root.val === q.val) {
            return root;
        }
        let leftSubTree = this.lowestCommonAncestor(root.left,p,q);
        let rightSubTree = this.lowestCommonAncestor(root.right,p,q);
        if(leftSubTree === null) {
            return rightSubTree;
        }
        if(rightSubTree === null) {
            return leftSubTree;
        }
        return root;
    }
}
