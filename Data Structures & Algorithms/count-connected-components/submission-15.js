class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjacencyList = new Map();
        for(let i=0;i<n;i++) {
            adjacencyList.set(i,[]);
        }
        for(let [u,v] of edges) {
            adjacencyList.get(u).push(v);
            adjacencyList.get(v).push(u);
        }
        let visited = new Set();
        let numberOfComponents = 0;
        for(let i=0;i<n;i++) {
            if(!visited.has(i)) {
                this.bfs(i,adjacencyList,visited);
                numberOfComponents++;
            }
        }
        return numberOfComponents;
    }
    bfs(start,adjacencyList,visited) {
        let queue = [start];
        visited.add(start);
        while(queue.length > 0) {
            let node = queue.shift();
            for(let neighbor of adjacencyList.get(node)) {
               if(!visited.has(neighbor)) {
                 visited.add(neighbor);
                queue.push(neighbor);
               }
            }
        }
    } 
}
