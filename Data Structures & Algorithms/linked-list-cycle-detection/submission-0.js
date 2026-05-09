/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(head === null) {
            return head;
        }
        let slowNode = head;
        let fastNode = head.next;
        while(fastNode && fastNode.next && slowNode !== fastNode) {
            slowNode = slowNode.next;
            fastNode = fastNode.next.next;
        }
        return slowNode === fastNode;
    }
}
