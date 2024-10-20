class Jedi {
    constructor(name, nivelFuerza, arma) {
        this.name = name;
        this.nivelFuerza = nivelFuerza;
        this.arma = arma;
    }
}

class Sith {
    constructor(name, nivelFuerza, arma) {
        this.name = name;
        this.nivelFuerza = nivelFuerza;
        this.arma = arma;
    }
}

const button = document.getElementById("button");
button.addEventListener("click", function() {
    const jedi = new Jedi("Luke Skywalker", 1000, "Blaster");
    const sith = new Sith("Darth Vader", 990, "Sable Laser");

    let winner = null;
    if (jedi.nivelFuerza > sith.nivelFuerza) {
            winner = jedi;
        } else {
            winner = sith;
        }
    

    const ganador = document.getElementById("ganador");
    ganador.innerHTML = `El luchador ${winner.name} ha ganado la batalla con ${winner.nivelFuerza} de fuerza y su ${winner.arma} !`
});