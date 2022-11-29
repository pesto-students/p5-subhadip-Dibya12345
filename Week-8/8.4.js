class Graph {
    constructor(V) {
        this.V = V;

        this.graph = new Array(V + 1);
        for (let i = 0; i < V + 1; i++) {
            this.graph[i] = new Array(V + 1);

            for (let j = 0; j < (V + 1); j++) {
                this.graph[i][j] = 0;
            }

        }
        for (let i = 1; i <= V; i++)
            this.graph[i][i] = 1;
    }
    addEdge(v, w) {
        this.graph[v][w] = 1;
        this.graph[w][v] = 1;
    }
    isReachable(s, d) {
        if (this.graph[s][d] == 1)
            return true;
        else
            return false;
    }
    computePaths() {
        for (let k = 1; k <= this.V; k++) {
            for (let i = 1; i <= this.V; i++) {
                for (let j = 1; j <= this.V; j++)
                    this.graph[i][j] = this.graph[i][j] | ((this.graph[i][k] != 0 && this.graph[k][j] != 0) ? 1 : 0);
            }
        }
    }

}

let myGraph = new Graph(3);
myGraph.addEdge(0, 1);
myGraph.addEdge(1, 2);
myGraph.addEdge(2, 0);
myGraph.computePaths();

let u = 0, v = 2;
if (myGraph.isReachable(u, v))
    console.log("true");
else
    console.log("false");