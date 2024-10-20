let button =  document.getElementById("button");

button.addEventListener("click", function(){
    let password = document.getElementById('password').value;
    if (password === 'Vengadores'){
        let paragraph = document.getElementById('parrafo');
        paragraph.textContent = 'Assemble!';
    };
});