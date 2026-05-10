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
     * @return {number[]}
     */
    inorderTraversal(root,result = []) {
        if(root !== null) { 
            this.inorderTraversal(root.left,result);
            result.push(root.val);
            this.inorderTraversal(root.right,result);
        }
        return result;
    }
}
