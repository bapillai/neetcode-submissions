class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // Step 1: Build adjacency list
        const adj = Array.from({ length: n }, () => []);
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        // Step 2: Visited set
        const visited = new Set();
        let componentCount = 0;

        // Step 3: Traverse all nodes
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                this.bfs(i, adj, visited);
                componentCount++;
            }
        }

        return componentCount;
    }

    bfs(start, adj, visited) {
        const queue = [start];
        visited.add(start);

        while (queue.length > 0) {
            const node = queue.shift();
            for (let neighbor of adj[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}
