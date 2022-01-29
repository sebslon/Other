class Graph {
  constructor() {
    this.nodes = [];
    this.adjacentList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacentList[node] = [];
  }

  removeNode(node) {
    // Remove the node from all edge lists
    Object.values(this.adjacentList).forEach((edgeList) => {
      const edgeListIndex = edgeList.indexOf(node);

      if (edgeListIndex !== -1) {
        edgeList.splice(edgeListIndex, 1);
      }
    });

    // Remove the node from the node list
    const nodeListIndex = this.nodes.indexOf(node);
    if (nodeListIndex !== -1) {
      delete this.adjacentList[node];
      return this.nodes.splice(nodeListIndex, 1);
    }
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  removeEdge(node1, node2) {
    const indexOfNode2 =
      this.adjacentList[node1] && this.adjacentList[node1].indexOf(node2);
    const indexOfNode1 =
      this.adjacentList[node2] && this.adjacentList[node2].indexOf(node1);

    const badIndices =
      this.adjacentList[node1] == undefined ||
      this.adjacentList[node2] == undefined;

    if (badIndices) {
      return "Please pass in valid indices";
    } else {
      this.adjacentList[node1].splice(indexOfNode2, 1);
      this.adjacentList[node2].splice(indexOfNode1, 1);
    }
  }

  // With use of stack
  depthFirstTraversal(startingNode, func = console.log) {
    if (startingNode == undefined) return "No starting node was provided";

    const nodeStack = [];
    const visited = [];

    nodeStack.push(startingNode);
    visited[startingNode] = true; // keeping track of visited nodes

    while (nodeStack.length) {
      const current = nodeStack.pop();
      const neighbors = this.adjacentList[current];
      func(current);

      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          nodeStack.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }

  // With use of queue
  breadthFirstTraversal(startingNode, func = console.log) {
    if (startingNode == undefined) return "No starting node was provided";

    const nodeQueue = [];
    const visited = [];

    nodeQueue.push(startingNode);
    visited[startingNode] = true;

    while (nodeQueue.length) {
      const current = nodeQueue.shift();
      const neighbors = this.adjacentList[current];
      func(current);

      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          nodeQueue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }
}

export default Graph;
