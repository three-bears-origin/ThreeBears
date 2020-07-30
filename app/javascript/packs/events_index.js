const timeline = document.getElementById("timeline");
var openCollapsible = null;

timeline.addEventListener("click", eventDropdown);

//open dropdown and scroll to event
function eventDropdown(event) {
    console.log(event);
    if (event.target.tagName == "A" || event.target.parentNode.tagName == "A") return;
    box = event.target.closest(".box");
    if (!box) return;

    thisCollapsible = box.nextElementSibling;
    if (!thisCollapsible.classList.contains("collapsible")) {
        alert("Error: collapsible must be next sibling after box");
        return;
    }

    if (thisCollapsible == openCollapsible) {
        thisCollapsible.classList.add("collapsed");
        openCollapsible = undefined;
    } else {
        thisCollapsible.classList.remove("collapsed");
        if (openCollapsible != undefined)
            openCollapsible.classList.add("collapsed");
        openCollapsible = thisCollapsible;
        box.scrollIntoView();
    }

}