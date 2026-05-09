class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if(x === 1) {
            return 1;
        }
        if(n === 0) {
            return 1;
        }
        if(n < 0) {
            return 1/this.myPow(x,-n);
        }
        let half = this.myPow(x,Math.floor(n/2));
        if(n % 2 == 0) {
            return half * half;
        } else {
            return x * half * half;
        }
    }
}
