const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
};


function dfs(graph, start) {

    const stack = [start];
    const visited = new Set();
    const result = [];

    while (stack.length) {
        const vertex = stack.pop();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of graph[vertex]) {
                stack.push(neighbor);
            }
        }
    }

    return result;
}

dfs(graph, 'A'); // ['A', 'D', 'E', 'F', 'B', 'C']