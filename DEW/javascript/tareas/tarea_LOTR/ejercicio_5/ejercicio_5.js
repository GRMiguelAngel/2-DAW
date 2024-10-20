const dbutton = document.getElementById("dark_button");
dbutton.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
});

const lbutton = document.getElementById("light_button");
lbutton.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});