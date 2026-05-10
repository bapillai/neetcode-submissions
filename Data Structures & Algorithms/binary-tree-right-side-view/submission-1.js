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
    rightSideView(root) {
        let result = [];
        if(root === null) {
            return result;
        }
        let queue = [root];
        let front = 0;
        while(front < queue.length) {
            let length = queue.length - front;
            let levels = [];
            for(let i=0;i<length;i++) {
                let node = queue[front++];
                if(node) {
                    levels.push(node.val);
                    if(node.left) {
                        queue.push(node.left);
                    }
                    if(node.right) {
                        queue.push(node.right);
                    }
                }
            }
            result.push(levels[levels.length - 1]);
        }
        return result;
    }
}
