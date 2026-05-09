class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length === 0 || !Array.isArray(nums)) {
            return -1;
        }
        let low = 0;
        let high = nums.length - 1;
        while(low <= high) {
            let middle = Math.floor((low + high)/2);
            if(nums[middle] === target) {
                return middle;
            } else if(nums[middle] < target) {
                low++;
            } else {
                high--;
            }
        }
        return -1;
    }
}
