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
         let current = root;

        while (current !== null) {
            if (p.val < current.val && q.val < current.val) {
                // Both nodes are in the left subtree
                current = current.left;
            } else if (p.val > current.val && q.val > current.val) {
                // Both nodes are in the right subtree
                current = current.right;
            } else {
                // We've found the split point — current is LCA
                return current;
            }
        }

        return null; // should never happen if p and q exist
    }
}
