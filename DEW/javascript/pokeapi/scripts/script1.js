const button = document.querySelector("button");

button.addEventListener("click", () => {
    // alert("Me han pulsado.");
    document.querySelectorAll("#filtro").forEach( (e) => {
        // console.log(e); 
        e.style.visibility = "visible";
    })
});

button.addEventListener("click", () => {
    // alert("Me han pulsado.");
    document.querySelectorAll("#btn_lista_deseo").forEach( (e) => {
        // console.log(e); 
        e.style.visibility = "visible";
    })
});

button.addEventListener("click", () => {
    // alert("Me han pulsado.");
    let lista_pokemon = document.querySelector(".lista_pokemon");
        // console.log(e); 
        lista_pokemon.style.visibility = "visible";

    mostrar_pokemon();
    });

    function mostrar_pokemon() {
        document.querySelector(".loading_datum").style.visibility = "visible"
    }