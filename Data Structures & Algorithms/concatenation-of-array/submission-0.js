class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [...nums];
        for(let num of nums) {
            ans.push(num);
        }
        return ans;
    }
}
