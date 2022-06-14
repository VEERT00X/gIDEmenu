// if url contais "github" continue

window.onload = function() {
    if(window.location.href.indexOf("github") > -1){
        console.log("supported");
    }
    else {
        const SaveButton = document.getElementById("SaveButton");
        
        const checkbox1 = document.getElementById("checkbox1");
        const checkbox2 = document.getElementById("checkbox2");
        const checkbox3 = document.getElementById("checkbox3");
        const checkbox4 = document.getElementById("checkbox4");
        const checkbox5 = document.getElementById("checkbox5");
        const checkbox6 = document.getElementById("checkbox6");
        
        // get the current settings
        chrome.storage.sync.get(["checkbox1", "checkbox2", "checkbox3", "checkbox4", "checkbox5", "checkbox6"], function(result) {
            checkbox1.checked = result.checkbox1;
            checkbox2.checked = result.checkbox2;
            checkbox3.checked = result.checkbox3;
            checkbox4.checked = result.checkbox4;
            checkbox5.checked = result.checkbox5;
            checkbox6.checked = result.checkbox6;
        });


        SaveButton.addEventListener("click", function() {

            // save chekboxes status to chrome storage
            chrome.storage.sync.set({
                checkbox1: checkbox1.checked,
                checkbox2: checkbox2.checked,
                checkbox3: checkbox3.checked,
                checkbox4: checkbox4.checked,
                checkbox5: checkbox5.checked,
                checkbox6: checkbox6.checked
            }, function() {
                console.log("saved");
                console.log(checkbox1.checked);
                console.log(checkbox2.checked);
                console.log(checkbox3.checked);
                console.log(checkbox4.checked);
                console.log(checkbox5.checked);
                console.log(checkbox6.checked);
            }
        )});
    }
}
