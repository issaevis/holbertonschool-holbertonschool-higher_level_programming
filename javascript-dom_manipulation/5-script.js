function replace(){
    const header = document.querySelector("header");
    header.innerText= "New Header!!!";
}

document.getElementById("update_header").addEventListener("click", replace);