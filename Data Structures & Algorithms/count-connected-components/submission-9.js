class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjacencyList = Array.from({length: n},() => []);
        for(let [u,v] of edges) {
            adjacencyList[u].push(v);
            adjacencyList[v].push(u);
        }
        let isConnected = 0;
        let visited = new Set();
        for(let i=0;i<n;i++) {
            if(!visited.has(i)) {
                this.bfsTraversal(i,adjacencyList,visited);
                isConnected++;
            }
        }
        return isConnected;
    }
    bfsTraversal(start,adjacencyList,visited) {
        let queue = [start];
        visited.add(start);
        while(queue.length > 0) {
            let node = queue.shift();
            for(let neighbor of adjacencyList[node]) {
                if(!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
    }
}
