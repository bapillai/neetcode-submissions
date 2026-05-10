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
    inorderTraversal(root) {
        let result = [];
        if(root === null) {
            return result;
        }
        let currentNode = root;
        while(currentNode !== null) {
            if(currentNode.left === null) {
                result.push(currentNode.val);
                currentNode = currentNode.right;
            } else {
                let predecessor = currentNode.left;
                while(predecessor.right !== null && predecessor.right !== currentNode) {
                    predecessor = predecessor.right;
                }
                if(predecessor.right === null) {
                    predecessor.right = currentNode;
                    currentNode = currentNode.left;
                } else {
                    predecessor.right = null;
                    result.push(currentNode.val);
                    currentNode = currentNode.right;
                }
            }
        }
        return result;
    }
}
