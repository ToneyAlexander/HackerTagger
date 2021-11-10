//Save the JSON stored in the input field to chrome storage
function saveTags() {
    var tags = document.getElementById('tags').value;
    var tagJson = JSON.parse(tags);

    chrome.storage.sync.set({tags: tagJson});
    chrome.tabs.reload();
    window.close();
}

//Load the tags from storage and put them into the input field
function loadTags() {
    chrome.storage.sync.get(['tags'], function(result) {
        tags = result["tags"];
        if(tags && Object.keys(tags).length !== 0){
            document.getElementById('tags').value = JSON.stringify(tags, null, 2);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#saveTags')
        .addEventListener('click', saveTags);
    loadTags();
});