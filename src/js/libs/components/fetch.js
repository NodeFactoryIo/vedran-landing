function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('metricsData');

export function getTableData() {
    const response = fetch("https://westend.vedran.nodefactory.io/metrics")
    .then(data => data.text())
    .then(text => {
        const activeNodes =  Number(/vedran_number_of_active_nodes\s*(\d*)\n/g.exec(text)[1]);
        const penalizedNodes =  Number(/vedran_number_of_penalized_nodes\s*(\d*)\n/g.exec(text)[1]);
        const totalNodes = activeNodes + penalizedNodes;
        let li = createNode('li');
        let activeNodesSpan = createNode('span');
        let penalizedNodesSpan = createNode('span');
        let totalNodesSpan = createNode('span');
        activeNodesSpan.innerHTML = `Active nodes ${activeNodes}`;
        penalizedNodesSpan.innerHTML = `Penalized nodes ${penalizedNodes}`;
        totalNodesSpan.innerHTML = `Total nodes ${totalNodes}`;
        append(li, activeNodesSpan);
        append(li, penalizedNodesSpan);
        append(li, totalNodesSpan);
        append(ul, li);
        console.log(activeNodes, penalizedNodes, totalNodes)
    })
}