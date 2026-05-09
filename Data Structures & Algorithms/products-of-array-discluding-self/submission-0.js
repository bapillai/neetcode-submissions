class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if(nums.length === 0 || !Array.isArray(nums)) {
            return [];
        }
        let products = new Array(nums.length).fill(1);
        let leftProductArr = new Array(nums.length).fill(1);
        let rightProductArr = new Array(nums.length).fill(1);
        let leftProductVal = 1;
        for(let i=0;i<nums.length;i++) {
            leftProductArr[i] = leftProductVal;
            leftProductVal *= nums[i];
        }
        let rightProductVal = 1;
        for(let i=nums.length - 1;i>=0;i--) {
            rightProductArr[i] = rightProductVal;
            rightProductVal *= nums[i];
        }
        for(let i=0;i<nums.length;i++) {
            products[i] = leftProductArr[i] * rightProductArr[i];
        }
        return products;
    }
}
