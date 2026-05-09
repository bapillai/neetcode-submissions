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
            } else if(nums[middle] < nums[high]){
                if(target > nums[middle] && target <= nums[high]) {
                    low = middle + 1;
                } else {
                    high = middle - 1;
                }
            }else  {
                if(target >= nums[low] && target < nums[middle]) {
                    high = middle - 1;
                } else {
                    low = middle + 1;
                } 
            } 
        }
        return -1;
    }
}
