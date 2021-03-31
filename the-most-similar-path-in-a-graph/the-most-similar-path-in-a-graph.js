/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {string[]} names
 * @param {string[]} targetPath
 * @return {number[]}
 */
var mostSimilar = function(n, roads, names, targetPath) {
//     let graph = {};
    
//     let visited = {};
    
//    // stores the next node to be picked for current node and target index
//     const nextChoiceForMin = Array.from({
// 		length: n,
// 	}, x => new Array(targetPath.length));
    
//     for(let [a,b] of roads){
//         if(graph[a] == undefined){
//             graph[a] = [];
//         }
//          if(graph[b] == undefined){
//             graph[b] = [];
//         }
        
//         graph[a].push(b)
//         graph[b].push(a)
//     }
    
//     function dfs(node, index){
//         if(visited[node][index] != undefined)return visited[node][index];
        
//         let edits = names[index] != targetPath[index] ? 1 : 0;
        
//         if(edits === targetPath.length - 1){
//             return edits;
//         }
        
//         let minEdits = Infinity;
        
//         for(let nh of graph[node]){
//             const nextEdits = dfs(nh, index+1);
//             if(nextEdits < minEdits){
//                 minEdits = nextEdits;
//                 nextChoiceForMin[node][index] = nh
//             }
//         }
        
//         edits += minEdits;
//         visited[node][index] = edits;
//         return edits
        
//     }
    
    
//     let start = 0;
//     let minDis = Infinity;
    
//     for(let i=0; i < n ; i++){
//         let cost = dfs(i,0)
//         if(minDis > cost){
//             minDis = cost;
//             start = i;
//         }
//     }
    
    
//     console.log(nextChoiceForMin)
      // construct adjacency list
	const adjList = Array.from({
		length: n,
	}, x => []);

	for (const [s, t] of roads) {
		adjList[s].push(t);
		adjList[t].push(s);
	}
    
    // used for memoizing results
	const visited = Array.from({
		length: n,
	}, x => new Array(targetPath.length).fill(-1));

    // stores the next node to be picked for current node and target index
    const nextChoiceForMin = Array.from({
		length: n,
	}, x => new Array(targetPath.length));

	const DFS = (node, index) => {
        // return memoized result
        if (visited[node][index] !== -1) return visited[node][index];

        let edits = names[node] !== targetPath[index] ? 1 : 0;

        // at the end
		if (index === targetPath.length - 1) {
			return edits;
		}

		let minAddEdits = Number.POSITIVE_INFINITY;

        for (const nb of adjList[node]) {
            const nextDist = DFS(nb, index + 1);
            
            if (nextDist < minAddEdits) {
                minAddEdits = nextDist;
                nextChoiceForMin[node][index] = nb; // mark minimum edit dist path as next node
            }   
        }

        edits += minAddEdits;
        
        visited[node][index] = edits;
		return edits;
	};

	let minTotalDist = Number.POSITIVE_INFINITY;
    let start = 0;

	for (let i = 0; i < n; i++) {
        const cost = DFS(i, 0);
        if (cost < minTotalDist) {
            minTotalDist = cost;
            start = i; // start with the node which gives least cost path
        }
	}

	const result = [];
    
    console.log(nextChoiceForMin)
    
    // build result from next choices
    while (result.length < targetPath.length) {
        result.push(start);
        start = nextChoiceForMin[start][result.length - 1];
    }
    
    return result;
    
};