function myFunction()
{
    document.getElementById("textflow").createElement("p");
}

var btn = document.createElement("button");
btn.innerHTML = "PRESS TO START";
btn.display = "flex";
btn.style.position="absolute";
btn.style.top = "15%";
btn.style.right ="45%";
document.body.appendChild(btn);


var text = document.getElementById("wow"); 
text.addEventListener("mouseover", function() {
    btn.style.backgroundColor = purple; 
    btn.style.border = "4px solid #301934";

});

btn.addEventListener("click", function() {
    wow.style.display="flex";
   

});


function hide() {
    wow.style.display="flex";
}
