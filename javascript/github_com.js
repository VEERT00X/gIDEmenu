const platform = location.host.split('.')[0];
console.log("Github.com extension loaded, platform: " + platform);

function GetUsername() {
    var UserName = document.querySelector("body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > summary > img").alt;
    var UserName = UserName.replace("@", "");
    return UserName;    
}

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

        chrome.storage.sync.get(["checkbox1", "checkbox2", "checkbox3", "checkbox4", "checkbox5", "checkbox6", "checkbox7"], function(result) {
            const checkbox1 = result.checkbox1;
            const checkbox2 = result.checkbox2;
            const checkbox3 = result.checkbox3;
            const checkbox4 = result.checkbox4;
            const checkbox5 = result.checkbox5;
            const checkbox6 = result.checkbox6;
            console.log(checkbox1 , checkbox2 , checkbox3 , checkbox4 , checkbox5 , checkbox6);
            
            if (checkbox4 == true) {
                console.log("checkbox4 is true");
                var VisualStudio_btn = document.createElement("button");
                VisualStudio_btn.className = "dropdown-item btn-link sas open-in-vscode-local";
                VisualStudio_btn.innerHTML = "Open in Visual Studio";
                VisualStudio_btn.onclick = function() {
                    const VS_url = "git-client://clone?repo=https%3A%2F%2Fgithub.com%2F";
                    const UserName = GetUsername();
                    const RepoName = MainUrl.split("/")[4];
                    const VS_url_full = VS_url + UserName + "%2F" + RepoName;
                    window.location.href = VS_url_full;
                }
                Ide_div.appendChild(VisualStudio_btn);

            }

            if (checkbox1 == true) {
                
                // create a button called github.dev
                var github_dev = document.createElement("button");
                github_dev.innerHTML = "Github.dev";
                github_dev.className = "dropdown-item btn-link sas ";
                github_dev.onclick = function() {
                    
                    const newUrl = MainUrl.replace("com", "dev");
                    window.location.href = newUrl;
                }
    
                Ide_div.appendChild(github_dev);            
    
            }

            if (checkbox2 == true) {
                var repository_status = document.querySelector("#repository-container-header > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > div > div > span.Label.Label--secondary.v-align-middle.mr-1");
                const UserName = GetUsername();
                if (window.location.href.includes(UserName)) {
            
                    if (repository_status.innerText == "Public") {
                        repository_status.innerText = "Your Public Repository";
                        repository_status.style.color = "green";
                        repository_status.style.fontWeight = "bold";
                    }
    
                    if (repository_status.innerText == "Private") {
                        repository_status.innerText = "Your Private Repository";
                        repository_status.style.color = "red";
                        repository_status.style.fontWeight = "bold";
                    }
                }
            }
            
            if (checkbox5 == true) {
                ReplItBtn = document.createElement("button");
                ReplItBtn.innerHTML = "Replit.com";
                ReplItBtn.className = "dropdown-item btn-link sas";
                ReplItBtn.onclick = function() {
                    
                    const UserName = GetUsername();
                    const Repository = window.location.href.split("/")[4];

                    var newUrl = "https://repl.it/@" + UserName + "/" + Repository;
                    window.location.href = newUrl;
                    
                }
                Ide_div.appendChild(ReplItBtn);
            }
            
            if (checkbox6 == true) {
                var vscode_dev = document.createElement("button");
                vscode_dev.innerHTML = "VSCode.dev";
                vscode_dev.className = "dropdown-item btn-link sas";
                vscode_dev.onclick = function() {
    
                    newurl = MainUrl.replace("github.com", "vscode.dev/github/");
                    window.location.href = newurl;
                }
                Ide_div.appendChild(vscode_dev);
            }
        
    
        });
        
        var OpenInVSCodeLocal = document.createElement("button");
        OpenInVSCodeLocal.innerHTML = "Open in VSCode";
        OpenInVSCodeLocal.className = "dropdown-item btn-link sas open-in-vscode-local";
        OpenInVSCodeLocal.onclick = function() {
            vsLocalLink = "vscode://vscode.git/clone?url=https://github.com/"
            const UserName = GetUsername();
            const Repository = window.location.href.split("/")[4];
            vsLocalLink = vsLocalLink + UserName + "/" + Repository;
            window.location.href = vsLocalLink;
        }
        Ide_div.appendChild(OpenInVSCodeLocal);


        // append to the list
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
