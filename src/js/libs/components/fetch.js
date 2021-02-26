function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const tr1 = document.getElementById('loadBalancer1');

export function getTableData() {
    const response = fetch("https://westend.vedran.nodefactory.io/metrics")
    .then(data => data.text())
    .then(text => {
        const activeNodes =  Number(/vedran_number_of_active_nodes\s*(\d*)\n/g.exec(text)[1]);
        const penalizedNodes =  Number(/vedran_number_of_penalized_nodes\s*(\d*)\n/g.exec(text)[1]);
        const totalNodes = activeNodes + penalizedNodes;
        const loadBalancerName = "N/A"
        const loadBalancerUrl = "https://westend.vedran.nodefactory.io/metrics"

        //create <a>
        let loadBalancerUrlA = createNode('a');
        let loadBalancerUrlAText = document.createTextNode("link");
        loadBalancerUrlA.setAttribute('href', loadBalancerUrl);
        loadBalancerUrlA.setAttribute('target', "_blank");
        loadBalancerUrlA.appendChild(loadBalancerUrlAText);

        //append <a> to <td>
        let loadBalancerUrlTd = createNode('td');
        append(loadBalancerUrlTd, loadBalancerUrlA)

        //create <td>s
        let loadBalancerNameTd = createNode('td');
        loadBalancerNameTd.innerHTML = loadBalancerName;
        let activeNodeTd = createNode('td');
        activeNodeTd.innerHTML = activeNodes;
        let penalizedNodesTd = createNode('td');
        penalizedNodesTd.innerHTML = penalizedNodes;
        let totalNodesTd = createNode('td');
        totalNodesTd.innerHTML = totalNodes;

        //append <td>s to <tr>
        append(tr1, loadBalancerNameTd);
        append(tr1, loadBalancerUrlTd);
        append(tr1, activeNodeTd);
        append(tr1, penalizedNodesTd);
        append(tr1, totalNodesTd);
    })
}