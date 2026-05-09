class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (!Array.isArray(nums) || nums.length < 3) {
            return [];
        }

        nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < nums.length - 2; i++) {
            // ✅ Skip duplicate 'i' values
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let leftIdx = i + 1;
            let rightIdx = nums.length - 1;

            while (leftIdx < rightIdx) {
                const currentSum = nums[i] + nums[leftIdx] + nums[rightIdx];

                if (currentSum === 0) {
                    result.push([nums[i], nums[leftIdx], nums[rightIdx]]);

                    // ✅ Skip duplicates for left
                    while (leftIdx < rightIdx && nums[leftIdx] === nums[leftIdx + 1]) {
                        leftIdx++;
                    }

                    // ✅ Skip duplicates for right
                    while (leftIdx < rightIdx && nums[rightIdx] === nums[rightIdx - 1]) {
                        rightIdx--;
                    }

                    leftIdx++;
                    rightIdx--;
                } else if (currentSum < 0) {
                    leftIdx++;
                } else {
                    rightIdx--;
                }
            }
        }

        return result;
    }
}
