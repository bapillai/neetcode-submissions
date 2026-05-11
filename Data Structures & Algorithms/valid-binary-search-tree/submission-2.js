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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.validateBSTHelper(root,-Infinity,Infinity);
    }
    validateBSTHelper(root,minVal,maxVal) {
        if(root === null) {
            return true;
        }
        if(root.val <= minVal || root.val >= maxVal) {
            return false;
        }
        let leftIsValid = this.validateBSTHelper(root.left,minVal,root.val);
        let rightIsValid = this.validateBSTHelper(root.right,root.val,maxVal);
        return leftIsValid && rightIsValid;
    }
}
