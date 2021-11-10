//Load the tags from storage and place them on the page in callback
function loadTags() {
    chrome.storage.sync.get(["tags"], function(result) {
        tags = result["tags"]
        if(tags && Object.keys(tags).length !== 0){
            tagUsers(result["tags"])
        }
    });
}

//Search through all users on the page, adding a tag if available
function tagUsers(tags) {
    var elements = document.getElementsByClassName('hnuser');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        //<a href="user?id=username" class="hnuser">username</a>
        //Possibly add a short-curcuit to search?
        //Can maybe check at this level for tag existing...
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            //Fix for names with styling
            if (node.nodeType === 1) {
                node = node.childNodes[0];
            }
            if (node.nodeType === 3) {
                var username = node.nodeValue;

                if(tags[username] && tags[username]["tag"]) {
                    insertElementAfter(element, buildHackertag(tags[username]["tag"]));
                }
            }
        }
    }
}

//Inserts nextElement in the DOM after originalElement
function insertElementAfter(originalElement, nextElement) {
    originalElement.parentNode.insertBefore(nextElement, originalElement.nextSibling);
}

//Build the element for a tag
function buildHackertag(tagText) {
    var tag = document.createElement("b");
    tag.classList.add("hackertag");
    tag.appendChild(document.createTextNode(tagText));
    return tag;
}

loadTags();
