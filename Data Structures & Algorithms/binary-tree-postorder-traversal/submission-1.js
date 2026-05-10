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
    postorderTraversal(root) {
       let result = [];
       if(root === null) {
        return result;
       }
       let currentNode = root;
       while(currentNode !== null) {
        if(currentNode.right === null) {
            result.push(currentNode.val);
            currentNode = currentNode.left;
        } else {
            let predecessor = currentNode.right;
            while(predecessor.left !== null && predecessor.left !== currentNode) {
                predecessor = predecessor.left;
            }
            if(predecessor.left === null) {
                result.push(currentNode.val);
                predecessor.left = currentNode;
                currentNode = currentNode.right;
            } else {
                predecessor.left = null
                currentNode = currentNode.left;
            }
        }
       }
       return result.reverse();
    }
}
