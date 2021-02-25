function handleTabClick(event, tabContainerToDisplay) {
    const contentTabs = document.getElementsByClassName("content-tab");
    let i;
    for (i = 0; i < contentTabs.length; i++) {
        contentTabs[i].style.display = "none";
    }
    const tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" is-active", "");
    }
    document.getElementById(tabContainerToDisplay).style.display = "block";
    event.currentTarget.className += " is-active";
}

export function openTab() {
    document.getElementById('windowsTab').onclick = function(event) {handleTabClick(event, "windowsContainer")};
    document.getElementById('linuxTab').onclick = function(event) {handleTabClick(event, "linuxContainer")};
    document.getElementById('macTab').onclick = function(event) {handleTabClick(event, "macContainer")};
  }