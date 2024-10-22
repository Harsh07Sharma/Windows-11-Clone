let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

// Function to toggle the start menu
taskbar.addEventListener("click", () => {
    if (startmenu.style.bottom == "50px") {
        closeStartMenu();
    } else {
        openStartMenu();
    }
});

// Function to open the start menu
function openStartMenu() {
    startmenu.style.bottom = "50px";
    startmenu.style.opacity = "1"; 
    taskbar.classList.add("active"); 
}

// Function to close the start menu
function closeStartMenu() {
    startmenu.style.bottom = "-655px";
    startmenu.style.opacity = "0"; 
    taskbar.classList.remove("active"); 
}

// Close start menu if user clicks outside of it
document.addEventListener("click", (event) => {
    if (!taskbar.contains(event.target) && !startmenu.contains(event.target)) {
        closeStartMenu();
    }
});
