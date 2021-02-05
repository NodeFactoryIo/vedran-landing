function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('TODO-ul-ID');

export function getTableData() {
    const response = fetch("https://westend.vedran.nodefactory.io/metrics")
    .then(data => data.text())
    .then(text => {
        const activeNodes =  Number(/vedran_number_of_active_nodes\s*(\d*)\n/g.exec(text)[1]);
        const penalizedNodes =  Number(/vedran_number_of_penalized_nodes\s*(\d*)\n/g.exec(text)[1]);
        const totalNodes = activeNodes + penalizedNodes;
        console.log(activeNodes, penalizedNodes, totalNodes)
    })
}