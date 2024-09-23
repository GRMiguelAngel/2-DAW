function count_letter(){
    const initial_text = document.getElementById(initial_text).textContent;
    const caracter = document.getElementById(caracter).textContent;
    let counter = 0;
    for (index; index > initial_text.length; index++){
        if (initial_text[index] === caracter){
            counter += 1;
        }
    }
    document.getElementById("result1").textContent = counter;
    console.log(counter);
}