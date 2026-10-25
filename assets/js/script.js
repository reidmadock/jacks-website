// Tabs are shown/hidden on one page. Each tab gets its own address
// (e.g. jackmadock.com/#research) so the browser's back and forward
// buttons move between tabs instead of leaving the site.
var homePage = "Jack Madock";

// Work out which tab the current address points to
function pageFromUrl() {
  var pageName = decodeURIComponent(window.location.hash.slice(1));
  if (pageName && document.getElementById(pageName)) {
    return pageName;
  }
  return homePage;
}

// Show one tab and underline its button; hide the rest
function showPage(pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabcontent.length; i++) {
    var isCurrent = tabcontent[i].id === pageName;
    tabcontent[i].style.display = isCurrent ? "block" : "none";
    tablinks[i].classList.toggle("active", isCurrent);
  }
}

// Called by the tab buttons
function openPage(evt, pageName) {
  if (pageName === pageFromUrl()) {
    return;
  }
  showPage(pageName);
  var url = pageName === homePage ? window.location.pathname : "#" + pageName;
  history.pushState(null, "", url);
}

// Back/forward buttons: show whichever tab the address now points to
window.addEventListener("popstate", function () {
  showPage(pageFromUrl());
});

// On first load, open the tab named in the address (if any)
showPage(pageFromUrl());
