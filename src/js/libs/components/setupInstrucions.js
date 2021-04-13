function handleTabClick(event, id) {
    event.preventDefault(); 
    window.location.hash = id;
}

function switchTab(newContainerId) {
    const contentTabs = document.getElementsByClassName("content-tab");
    let i;
    for (i = 0; i < contentTabs.length; i++) {
        contentTabs[i].style.display = "none";
    }
    const tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" is-active", "");
    }
    document.getElementById(newContainerId).style.display = "block";
    document.getElementById(newContainerId.replace("Container", "Tab")).className += " is-active";
}

export function openTab() {
    document.getElementById('windowsTab').onclick = function(event) {handleTabClick(event, "windowsContainer")};
    document.getElementById('linuxTab').onclick = function(event) {handleTabClick(event, "linuxContainer")};
    document.getElementById('macTab').onclick = function(event) {handleTabClick(event, "macContainer")};

    window.onhashchange = function() {
        var adressBarHash = window.location.hash;
        if(!["#windowsContainer", "#linuxContainer", "#macContainer"].includes(adressBarHash)) {
            adressBarHash = "#windowsContainer";
        }
        switchTab(adressBarHash.replace("#", ""))
    }
  }