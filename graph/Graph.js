
class Graph
{
    constructor()
    {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node)
    {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2)
    {
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)

    }

    showGrpah()
    {
        const allNodes = Object.keys(this.adjacentList);
        for(let node of allNodes)
        {
            console.log("-->", node);
            const nodes = this.adjacentList[node];
            for(let node of nodes) {
                console.log(node);
                
            }
        }
    }
}

var graph = new Graph()

graph.addVertex("0")
graph.addVertex("1")
graph.addVertex("2")
graph.addVertex("3")
graph.addVertex("4")
graph.addVertex("5")
graph.addVertex("6")

graph.addEdge(3, 1);
graph.addEdge(3, 4);
graph.addEdge(4, 2);
graph.addEdge(4, 5);
graph.addEdge(1, 2);
graph.addEdge(1, 0);
graph.addEdge(0, 2);
graph.addEdge(6, 5);
graph.showGrpah()

