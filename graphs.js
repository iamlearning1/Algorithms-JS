class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => item != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => item != v1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(item => this.removeEdge(vertex, item));
    delete this.adjacencyList[vertex];
  }

  depthFirstSearchRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList; // this.adjacencyList won't be accesible inside IIFE
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);
    return result;
  }

  depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Hong Kong");
graph.addVertex("Los Angeles");

graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "Hong Kong");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Dallas", "Hong Kong");
graph.addEdge("Dallas", "Los Angeles");
graph.addEdge("Hong Kong", "Los Angeles");

// graph.removeEdge("Tokyo", "Dallas");
// graph.removeVertex("Hong Kong");

// console.log(graph.depthFirstSearchRecursive("Tokyo"));
// console.log(graph.depthFirstSearchIterative("Tokyo"));
console.log(graph.breadthFirstSearch("Tokyo"));
// console.log(JSON.stringify(graph, undefined, 2));
