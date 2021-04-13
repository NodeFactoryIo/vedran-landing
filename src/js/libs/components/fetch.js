import {loadBalancers} from "../constants/loadBalancers";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

export function getTableData() {
    const loadBalancerTableBody = document.getElementById('loadBalancerTableBody');
    loadBalancers.forEach(loadBalancer => {
        fetch(loadBalancer.metricsUrl)
        .then(data => data.text())
        .then(text => {
            const activeNodes =  Number(/vedran_number_of_active_nodes\s*(\d*)\n/g.exec(text)[1]);
            const penalizedNodes =  Number(/vedran_number_of_penalized_nodes\s*(\d*)\n/g.exec(text)[1]);
            const totalNodes = activeNodes + penalizedNodes;

            //create <tr>
            let tr = createNode('tr');
    
            //create <td>
            let loadBalancerNameTd = createNode('td');
            loadBalancerNameTd.innerHTML = loadBalancer.name;
            let loadBalancerNetworkTd = createNode('td');
            loadBalancerNetworkTd.innerHTML = loadBalancer.network;
            let loadBalancerUrlTd = createNode('td');
            loadBalancerUrlTd.innerHTML = loadBalancer.urls.join("<br/>");

            let activeNodeTd = createNode('td');
            activeNodeTd.innerHTML = activeNodes;
            let penalizedNodesTd = createNode('td');
            penalizedNodesTd.innerHTML = penalizedNodes;
            let totalNodesTd = createNode('td');
            totalNodesTd.innerHTML = totalNodes;

            //append <td>s to <tr>
            append(tr, loadBalancerNameTd);
            append(tr, loadBalancerNetworkTd);
            append(tr, loadBalancerUrlTd);
            append(tr, activeNodeTd);
            append(tr, penalizedNodesTd);
            append(tr, totalNodesTd);

            //append <tr> to <tbody>
            append(loadBalancerTableBody, tr);
        })

    });

}