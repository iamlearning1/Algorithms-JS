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
graph.removeVertex("Hong Kong");

console.log(JSON.stringify(graph, undefined, 2));
