function is_even(){

    const x = parseInt(document.getElementById("num_ejer2").value);
    switch (x) {
        case 0:
            message ="Este es muy fácil… ¡prueba otro!";
            break;
        case 2:
        case 4:
        case 6:
            message = "El número es par";
            break;
        case 1:
        case 3:
        case 5:
            message = "El número es impar";
            break;
        default:
            message = "¡¡Sólo sé contar de 0 a 6!!"
    }
    document.getElementById("result2").textContent = message
    console.log(message)
}