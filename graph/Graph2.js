class Node
{
    constructor(value)
    {
        this.value = value
    }
}

class Graph
{
    constructor()
    {
        this.numberOfNodes = 0
        this.adjacentList = {}
    }
    addVertex(node)
    {
        return new Node(node)
    }

    addEdge(node1, node2)
    {
        this.adjacentList[this.numberOfNodes] = [node1, node2]
        this.numberOfNodes++
    }
}

var graph = new Graph()

v1 = graph.addVertex("1")
v2 = graph.addVertex("2")
v3 = graph.addVertex("3")
v4 = graph.addVertex("4")
v5 = graph.addVertex("5")
v6 = graph.addVertex("6")

graph.addEdge(v1, v2);
graph.addEdge(v2, v3);
graph.addEdge(v3, v4);
graph.addEdge(v4, v5);
graph.addEdge(v5, v3);

console.log("ADJACENCY LIST", graph.adjacentList);
