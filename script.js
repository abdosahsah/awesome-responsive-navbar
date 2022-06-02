let navbarIcon = document.getElementById("navbar-icon");
let navbarList = document.getElementById("navbar-list");
let icon = document.getElementById("icon");

navbarIcon.addEventListener('click', () => {

    if (navbarList.style.left == "-100%") {
        navbarList.style.left = "0%";
        icon.className = "fas fa-times"
    }
    else {
        navbarList.style.left = "-100%";
        icon.className = "fas fa-bars"
    }
})