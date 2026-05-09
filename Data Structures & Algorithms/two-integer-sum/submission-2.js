class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length === 0 || !Array.isArray(nums)) {
            return [-1,-1];
        }
        let numSet = new Map();
        for(let i=0;i<nums.length;i++) {
            let num = nums[i];
            let diff = target - num;
            if(numSet.has(diff)) {
                return [i,numSet.get(diff)];
            } else {
                numSet.set(num,i);
            }
        }
        return [-1,-1];
    }
}
