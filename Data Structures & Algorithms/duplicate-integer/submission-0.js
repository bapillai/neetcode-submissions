class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSet = new Set();
        for(let num of nums) {
            if(!numSet.has(num)) {
                numSet.add(num);
            } else {
                return true;
            }
        }
        return false;
    }
}
