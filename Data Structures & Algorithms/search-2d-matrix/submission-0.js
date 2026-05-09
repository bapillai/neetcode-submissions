class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if(matrix.length === 0 || !Array.isArray(matrix)) {
            return false;
        }
        let row = this.findRowNumber(matrix,target);
        let arr = matrix[row];
        let col = this.bisectLeft(arr,target);
        return !(col === arr.length || arr[col] !== target);
    }
    findRowNumber(matrix,target) {
        let low = 0 ;
        let high = matrix.length - 1;
        while(low < high) {
            let middle = Math.floor((low + high)/2);
            let row = matrix[middle];
            let rowStart = row[0];
            let rowEnd = row[row.length - 1];
            if(target >= rowStart && target <= rowEnd) {
                return middle;
            } else if(target > rowEnd) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        }
        return low;
    }
    bisectLeft(nums,target) {
        let low = 0;
        let high = nums.length;
        while(low < high) {
            let middle = Math.floor((low + high)/2);
            if(nums[middle] < target) {
                low = middle + 1;
            } else {
                high = middle;
            }
        }
        return low;
    }
}
