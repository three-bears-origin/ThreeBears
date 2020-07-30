const timeline = document.querySelector(".timeline");

timeline.addEventListener("click", eventDropdown);

//open dropdown and scroll to event
function eventDropdown(event) {
    box = event.target.closest(".box");
    if (box == null) return;

    collapsible = box.nextElementSibling;
    collapsibleCL = collapsible.classList;
    if (!collapsibleCL.contains("collapsible")) {
        alert("Error: collapsible must come after box");
        return;
    }

    if (collapsibleCL.contains("collapsed")) {
        collapsibleCL.remove("collapsed");
        box.scrollIntoView();
    } else {
        collapsibleCL.add("collapsed");
    }

}