class Mago {
    constructor(name) {
        this.name = name;
        this.hechizo = new Hechizo('Bola de fuego');
    }
}

class Hechizo {
    constructor(name) {
        this.name = name;
    }

    getPower() {
        let power = Math.ceil(Math.random() * 100);
        return power;
    }
}

let mage1, mage2;

function createMages() {
    mage1 = new Mago('Mago1');
    mage2 = new Mago('Mago2');
}

function getWinner() {
    createMages();
    let winner, looser;
    let magePower1 = mage1.hechizo.getPower();
    let magePower2 = mage2.hechizo.getPower();
    if(magePower1 > magePower2){
        winner = mage1;
        looser = mage2;
    } else {
        winner = mage2;
        looser = mage1;
    }

    let msg = `${winner.name} ha ganado contra ${looser.name} con una ${winner.hechizo.name}(${magePower1} de poder contra ${magePower2} de poder)`;
    let result = document.querySelector('#result').innerHTML = msg;
}
