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
    postorderTraversal(root,result = []) {
        if(root !== null) {
            this.postorderTraversal(root.left,result);
            this.postorderTraversal(root.right,result);
            result.push(root.val);
        }
        return result;
    }
}
