class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if(nums.length === 0 || !Array.isArray(nums)) {
            return [-1,-1,-1];
        }
        nums.sort((a,b) => a - b);
        let result = [];
        for(let i=0;i<nums.length - 2;i++) {
            if(i > 0 && nums[i] === nums[i-1]) {
               continue;
            }
            let leftIdx = i + 1;
            let rightIdx = nums.length - 1;
            while(leftIdx < rightIdx) {
                let currentSum = nums[i] + nums[leftIdx] + nums[rightIdx];
                if(currentSum === 0) {
                    result.push([nums[i],nums[leftIdx],nums[rightIdx]]);
                    while(leftIdx < rightIdx && nums[leftIdx] === nums[leftIdx + 1]) {
                        leftIdx++;
                    }
                    while(leftIdx < rightIdx && nums[rightIdx] === nums[rightIdx - 1]) {
                        rightIdx--;
                    }
                    leftIdx++;
                    rightIdx--;
                } else if(currentSum < 0) {
                    leftIdx++;
                } else {
                    rightIdx--;
                }
            }
        }
        return result;
    }
}
