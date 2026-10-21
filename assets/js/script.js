// Probably need to adjust this function, but not sure
// W3 provided the base code and I assume they know what they're doing
viewHistory = [];

function openPage(evt, pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
        // tabcontent[i].className.replace(" active","not-active");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";

  viewHistory.push(pageName);
  history.pushState({page : 1}, "","?page=1");
  console.log(viewHistory);
}

// window.addEventListener('popstate', (event) => {
//             console.log("The user navigated back or forward!");
//             // Custom logic goes here (e.g., closing a modal or updating UI)
//             navigateBack(event);
//           });

// function navigateBack(event) {
//     if (viewHistory.length > 1) {
//       openPage(event,viewHistory.pop());
//     }
// }