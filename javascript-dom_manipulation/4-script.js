function addLi()
{
    const ul = document.querySelector(".my_list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode("Item"));
    ul.appendChild(li);
}

const toggleButton = document.getElementById("add_item");
toggleButton.addEventListener("click", addLi);
