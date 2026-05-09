class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        if(piles.length === 0 || !Array.isArray(piles)) {
            return -1;
        }
        let low = 0;
        let high = Math.max(...piles);
        while(low < high) {
            let middle = Math.floor((low + high)/2);
            if(!this.canAchieve(middle,piles,h)) {
                low = middle + 1;
            } else {
                high = middle;
            }
        }
        return low;
    }
    canAchieve(timeThreshold,piles,totalTime) {
        let timeTaken = 0;
        for(let pile of piles) {
            timeTaken += Math.ceil(pile/timeThreshold);
        }
        return timeTaken <= totalTime;
    }
}
