var openCollapsible = null;

$(document).on('turbolinks:load', function() {
    $('[data-js-new-contribution]').click(function(event){
        event.preventDefault();
        c = getClosestCollapsible(event.target);
        $('#' + c.id).html("<%= j (render partial: 'new') %>");
    });

    const timeline = document.getElementById("timeline");
    if (timeline)
        timeline.addEventListener("click", toggleCollapsible); 
});

//open collapsible and scroll to event or close
function toggleCollapsible(event) {
    if (event.target.classList.contains("trash")) return;

    let thisCollapsible = getClosestCollapsible(event.target);

    // if clicking an icon that isn't trash
    let mustOpen = event.target.classList.contains("icon");

    if (mustOpen && openCollapsible == thisCollapsible) return;

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

// must be called from within a box element
function getClosestCollapsible(e) {
    box = e.closest(".box");
    if (!box) return null;

    result = box.nextElementSibling;
    if (!result.classList.contains("collapsible")) {
        alert("Error: collapsible must be next sibling after box");
        return null;
    }

    return result;
}

//change HTML code within collapsible to a new-contribution form
function collapsibleTransition() {

}
