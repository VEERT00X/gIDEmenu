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

// -------------------------------------------------- 

var btn = document.createElement("BUTTON")
var t = document.createTextNode("Github.dev");
btn.appendChild(t);
btn.setAttribute("id", "RemButton");
btn.addEventListener("click", DeveloperPortal);

document.querySelector("body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex").appendChild(btn);
