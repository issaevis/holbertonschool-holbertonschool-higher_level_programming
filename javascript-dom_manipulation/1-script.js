function turnRed()
{
    const heading = document.querySelector("header");
    heading.style.color= "#FF0000";
}
document.getElementById("red_header").addEventListener("click", turnRed);
