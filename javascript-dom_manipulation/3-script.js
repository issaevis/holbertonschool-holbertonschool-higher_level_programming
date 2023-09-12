function toggle() {
    const header = document.querySelector("header");
    header.classList.toggle("red");
    header.classList.toggle("green");
  } 

const toggleButton = document.getElementById("toggle_header");
toggleButton.addEventListener("click", toggle);
