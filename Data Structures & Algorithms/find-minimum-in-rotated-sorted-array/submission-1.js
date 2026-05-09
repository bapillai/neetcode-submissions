class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length  === 0 || !Array.isArray(nums)) {
            return -1;
        }
        let low = 0;
        let high = nums.length - 1;
        while(low < high) {
            let middle = Math.floor((low + high)/2);
            if(nums[middle] > nums[high]) {
                low = middle + 1;
            } else {
                high = middle;
            }
        }
        return nums[low];
    }
}