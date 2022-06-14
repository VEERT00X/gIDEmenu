const platform = location.host.split('.')[0];
console.log("Github.com extension loaded, platform: " + platform);

async function init () {
  
  switch (platform) {
    case 'github': {

        const MainUrl = window.location.href

        RemoteList = document.querySelector("#repository-container-header > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul");
        IDE_Details = document.createElement("details");
        IDE_Summary = document.createElement("summary");
        IDE_Summary.role = "button";
        IDE_Summary.innerHTML = "Development Environment";
        IDE_Details.className = "rounded-left-2 border-right-0 btn-sm btn BtnGroup-item sec";
        IDE_Details.appendChild(IDE_Summary);
        Ide_div = document.createElement("div");
        Ide_div.className = "dropdown-menu dropdown-menu-sw";
        IDE_Details.appendChild(Ide_div);

        chrome.storage.sync.get(["checkbox1", "checkbox2", "checkbox3", "checkbox5", "checkbox6", "checkbox7"], function(result) {
            const checkbox1 = result.checkbox1;
            const checkbox2 = result.checkbox2;
            const checkbox3 = result.checkbox3;
            const checkbox4 = result.checkbox4;
            const checkbox5 = result.checkbox5;
            const checkbox6 = result.checkbox6;
            console.log(checkbox1 , checkbox2 , checkbox3 , checkbox4 , checkbox5 , checkbox6);
            
            if (checkbox1 == true) {
                
                // create a button called github.dev
                var github_dev = document.createElement("button");
                github_dev.innerHTML = "Github.Dev";
                github_dev.className = "dropdown-item btn-link sas";
                github_dev.onclick = function() {
                    
                    const newUrl = MainUrl.replace("com", "dev");
                    window.location.href = newUrl;
                }
    
                Ide_div.appendChild(github_dev);            
    
            }
            
            if (checkbox5 == true) {
                ReplItBtn = document.createElement("button");
                ReplItBtn.innerHTML = "Replit";
                ReplItBtn.className = "dropdown-item btn-link sas";
                ReplItBtn.onclick = function() {
                    
                    var newUrl = MainUrl.replace("https://", "");
                    window.location.href = "https://replit.com/" + newUrl;
                    
                }
                Ide_div.appendChild(ReplItBtn);
            }
            
            if (checkbox6 == true) {
                var vscode_dev = document.createElement("button");
                vscode_dev.innerHTML = "VSCode.Dev";
                vscode_dev.className = "dropdown-item btn-link sas";
                vscode_dev.onclick = function() {
    
                    newurl = MainUrl.replace("github.com", "vscode.dev/github/");
                    window.location.href = newurl;
                }
                Ide_div.appendChild(vscode_dev);
            }
    
    
        });
        
        IDE_Details.addEventListener("mousedown", function() {
            IDE_Summary.disabled = true;
        });
        // If mouse leaves the IDE details close the dropdown
        IDE_Details.addEventListener("mouseleave", function() {
            IDE_Summary.disabled = false;
            IDE_Details.open = false;
        });

        // Add the IDE details to the page
        try{ RemoteList.appendChild(IDE_Details); }
        catch(err){ console.log(err); }
      
      break;
    }
    default: {
      break;
    }
  }
}

if (window.location.href.includes("github.com")) {
    
    window.addEventListener("load", init);


}
