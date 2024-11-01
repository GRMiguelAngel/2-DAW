import DBConnection from "../models/conect_firestone.js";

export default class UserController {
    constructor() {
        this.database = new DBConnection()
        this.id;
        this.name;
        this.password;
        this.balance;
        this.acquiredPokemons;
        this.basket;
    }

    async fetchData(id) {
        const allUsers = await this.database.readAll()
        for (let user of allUsers) {
            if (user["id"] == id) {
                this.id = user["id"]
                this.email = user["email"];
                this.password = user["password"];
                this.balance = user["balance"];
                this.basket = user["basket"];
                this.acquiredPokemons = user["acquiredPokemons"];
                return
            }
        }
    }

    async updateBasket() {
        await this.database.update(this.id, {basket: this.basket})
    }

    async updateBalance() {
        await this.database.update(this.id, {balance: this.balance})
    }

    async updateacquiredPokemons() {
        await this.database.update(this.id, {acquiredPokemons: this.acquiredPokemons})
    }

    printData() {
        console.log(this)
    }
}