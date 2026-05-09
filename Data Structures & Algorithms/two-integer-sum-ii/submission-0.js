class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if(numbers.length === 0 || !Array.isArray(numbers)) {
            return [];
        }
        let leftIdx = 0;
        let rightIdx = numbers.length - 1;
        while(leftIdx < rightIdx) {
            let currentSum = numbers[rightIdx] + numbers[leftIdx];
            if(currentSum === target) {
                return [leftIdx + 1,rightIdx + 1];
            } else if(currentSum < target) {
                leftIdx++;
            } else {
                rightIdx--;
            }
        }
        return [];
    }
}
