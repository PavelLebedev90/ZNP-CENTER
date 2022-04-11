let graph = {};
graph["Tver"] = {};
graph["Tver"]["Klin"] = 6;
graph["Tver"]["Dubna"] = 2;
graph["Klin"] = {};
graph["Klin"]["Moscow"] = 1;
graph["Dubna"] = {};
graph["Dubna"]["Klin"] = 3;
graph["Dubna"]["Moscow"] = 5;
graph["Moscow"] = {};

let costs = {};
costs["Klin"] = 6;
costs["Dubna"] = 2;
costs["Moscow"] = Infinity;


const findLowestCostNode =  (costs, processed) => {
    let lowestCost = Infinity;
    let lowestCostIndex = null;
    for (let node in costs) {
        let cost = costs[node];
        if (cost < lowestCost && processed.indexOf(node) === -1) {
            lowestCost = costs[node];
            lowestCostIndex = node;
        }
    }
    return lowestCostIndex;
}

const findLowestCostWay = (graph, costs) => {
    let processed = [];

    let node = findLowestCostNode(costs, processed);
    while (node !== null) {
        let cost = costs[node]; //2
        let neighbors = graph[node];
        for (let n in neighbors) {
            let newCost = cost + neighbors[n];
            if (newCost < costs[n]) {
                costs[n] = newCost;
            }
        }
        processed.push(node);
        node = findLowestCostNode(costs, processed);
    }

    return costs
}
console.log(findLowestCostWay(graph, costs).Moscow);
