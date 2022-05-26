function DeveloperPortal() {
    // get the current url
    var location = window.location.href;
    // if the url contains github.com
    if (location.includes("github.com")) {
        // replace .com with .dev
        var newurl = location.replace(".com", ".dev");
        // open new tab with new url
        window.open(newurl);
    }
};


function inject(){

    var DevButton = document.createElement("BUTTON")
    var DevButtonNode = document.createTextNode("Github.dev");
    DevButton.appendChild(DevButtonNode);
    DevButton.setAttribute("id", "RemButton");
    DevButton.addEventListener("click", DeveloperPortal);

    document.querySelector("body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex").appendChild(DevButton);

    // --------------------------------------------------

    // link to the "https://github.com/VEERT00X/Github-Dev-Plus"

    var GithubPlusMarker = document.createElement("a");
    var GithubPlusMarkerNode = document.createTextNode("Github Dev Plus");
    GithubPlusMarker.appendChild(GithubPlusMarkerNode);
    GithubPlusMarker.setAttribute("href", "https://github.com/VEERT00X/Github-Dev-Plus");
    GithubPlusMarker.setAttribute("target", "_blank");
    GithubPlusMarker.setAttribute("id", "GithubPlusMarker");

    document.querySelector("body > footer > div.position-relative.d-flex.flex-items-center.pb-2.f6.color-fg-muted.border-top.color-border-muted.flex-column-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.mt-6.pt-6 > ul.list-style-none.d-flex.flex-wrap.col-12.col-lg-8.flex-justify-center.flex-lg-justify-between.mb-2.mb-lg-0").appendChild(GithubPlusMarker);

}

function GetUsername() {

    var UserName = document.querySelector("body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > summary > img").alt;
    var UserName = UserName.replace("@", "");
    return UserName;    
}

function Modify() {

    var username = GetUsername();
    var url = window.location.href;
    
    // if url contains username and it's not the user's own profile
    if (url.includes(username)) {
        
        // if url is not "https://github.com/ + username"
        if (url != "https://github.com/" + username) {
            
            var RepoTypeIndicatior = document.querySelector("#repository-container-header > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > div > h2 > span.Label.Label--secondary.v-align-middle.mr-1");
            var RepoText = RepoTypeIndicatior.innerText;
    
            if (RepoText == "Public") {
                
                RepoTypeIndicatior.innerText = "Your Public Repository";
                RepoTypeIndicatior.style.color = "green";
                RepoTypeIndicatior.style.fontWeight = "bold";
                
            }
    
            if(RepoText == "Private") {
    
                RepoTypeIndicatior.innerText = "Your Private Repository";
                RepoTypeIndicatior.style.color = "red";
                RepoTypeIndicatior.style.fontWeight = "bold";
            }

        }



    }

}


inject();
window.onload = GetUsername();
Modify();
