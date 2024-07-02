const graph = {
    'a': ['d','e'],
    'b': [],
    'c': ['a', 'b'],
    'd': [],
    'e': ['c'],
}

function findLoop(graph) {
    let queue = []
    queue.push(Object.keys(graph)[0])

    let visited = new Set()
    let loop = []
    
    while (queue.length > 0) {
        let current = queue.shift()

        if (!graph[current].length) {
            visited.add(current)
        } else {
            if (!loop.includes(current)) {
                loop.push(current)
                queue = [...queue, ...graph[current]]
                visited.add(current)
            }
        }
    }
    return loop
}

console.log(findLoop(graph))

const edges = [[1,2],[2,3],[4,2]]

function findCenter(edges) {
    let center = edges[0]
    for (let i = 1; i < edges.length; i++) {
        let edge = edges[i]
        if(center.includes(edge[0])) center = [edge[0]]
        if(center.includes(edge[1])) center = [edge[1]]
    }
    return center
}

console.log(findCenter(edges))


const trust = [[1,3],[2,3],[3,1]]

function findJudge(n,trust) {
    if(n === 1) return 1
  
    const degress = new Array(n+1).fill(0)
    for(const t of trust){
        degress[t[0]]--
        degress[t[1]]++
    }
    for(let i = 0 ; i < degress.length; i++){
        if(degress[i] === n - 1) return i
    }
    return -1
}

console.log(findJudge(3, trust))

function validPath(n, edges, source, destination) {
    if (n === 1) return n

    const graphMap = new Map()

    for (let i = 0; i < n; i++) {
        graphMap.set(i, [])
    }
    for (const [vertex1, vertex2] of edges) {
        graphMap.get(vertex1).push(vertex2)
        graphMap.get(vertex2).push(vertex1)
    }
    
    let stack = []
    let visited = new Set()
    stack.push(source)

    while (stack.length > 0) {
        let current = stack.pop()
        if (current === destination) return true

        if (!visited.has(current)) {
            visited.add(current)

            for (const neighbor of graphMap.get(current) || new Set()) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
    return false
}

console.log(validPath(10, [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]], 7, 9))