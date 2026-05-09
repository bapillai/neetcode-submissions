class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjacencyList = new Array(n);
        for(let i=0;i<n;i++) {
            adjacencyList[i] = [];
        }
        for(let [u,v] of edges) {
            adjacencyList[u].push(v);
            adjacencyList[v].push(u);
        }
        let connectedComponents = 0;
        let visited = new Set();
        for(let i=0;i<n;i++) {
            if(!visited.has(i)) {
                this.bfs(i,adjacencyList,visited)
                connectedComponents++;
            }
        }
        return connectedComponents;
    }
    bfs(start,adjacencyList,visited) {
        let queue = [];
        queue.push(start);
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
