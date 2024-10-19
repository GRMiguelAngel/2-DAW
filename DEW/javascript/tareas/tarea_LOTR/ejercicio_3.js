class Ejercito {
    constructor(name, battalion_qty, power, morale) {
        this.name = name;
        this.battalion_qty = battalion_qty;
        this.power = power;
        this.morale = morale;
    }

    get strength() {
        return this.battalion_qty + this.power * this.morale
    }
}

const button = document.getElementById("button");
button.addEventListener("click", function() {
    const ejercito_1 = new Ejercito("Lobos", 30, 1000, 0.7);
    const ejercito_2 = new Ejercito("Goblins", 120, 250, 0.3);
    const ejercito_3 = new Ejercito("Hombres", 30, 1500, 0.9);
    const ejercito_4 = new Ejercito("Elfos", 10, 1950, 0.5);
    const ejercito_5 = new Ejercito("Enanos", 45, 1700, 0.6);
    const ejercitos = [ejercito_1, ejercito_2, ejercito_3, ejercito_4, ejercito_5];

    let triunfador = ejercitos[0];
    for (let ejercito of ejercitos) {
        console.log(ejercito)
        console.log(ejercito)
        if (ejercito.strength > triunfador.strength) {
            triunfador = ejercito
        }
    }

    const ganador = document.getElementById("ganador");
    ganador.innerHTML = `El ejercito de los ${triunfador.name} ha ganado la batalla con ${triunfador.strength} de fuerza !`
});