function three_var_control(){

    let a, b, c;
    a = parseFloat(document.getElementById("num1_ejer1").value);
    b = parseFloat(document.getElementById("num2_ejer1").value);
    c = parseFloat(document.getElementById("num3_ejer1").value);

    if (a < 0 || b < 0 || c < 0){
        message = "Error: hay variables con valores negativos.";
    } 
    else if (a == 0 && b == 0 && c == 0){
        message = "Error: todas las variables son iguales a cero.";
    }
    else if (a + b + c > 10 && a != b && b != c && c != a){
        console.log(a+b+c)
        message = "Error: la suma total de las variables es mayor a 10, siendo todas estas diferentes."
    }
    else {
        message = "Todo esta correcto."
    }

    document.getElementById("result1").textContent = message
    console.log(message);
}