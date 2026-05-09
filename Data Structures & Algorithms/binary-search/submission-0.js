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
        let leftIdx = 0;
        let rightIdx = nums.length - 1;
        while(leftIdx <= rightIdx) {
            let middle = Math.floor((leftIdx + rightIdx)/2);
            if(nums[middle] === target) {
                return middle;
            } else if(nums[middle] < target) {
                leftIdx++;
            } else {
                rightIdx--;
            }
        }
        return -1;
    }
}
