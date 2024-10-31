import DBConnection from "../models/conect_firestone.js";

export default class UserController {
    constructor() {
        this.database = new DBConnection()
        this.id;
        this.balance;
        this.acquiredPokemons;
        this.basket;
        this.wishlist;
    }

    async fetchData(id) {
        const allUsers = await this.database.readAll()
        for (let user of allUsers) {
            if (user["id"] == id) {
                this.id = user["id"]
                this.balance = user["balance"];
                this.acquiredPokemons = user["acquiredPokemons"];
                this.basket = user["basket"];
                this.wishlist = user["wishlist"];
                return
            }
        }
    }

    async updateWishlist() {
        await this.database.update(this.id, {wishlist: this.wishlist})
    }

    async updateBasket() {
        await this.database.update(this.id, {basket: this.basket})
    }

    async updatebalance() {
        await this.database.update(this.id, {balance: this.balance})
    }

    async updateacquiredPokemons() {
        await this.database.update(this.id, {acquiredPokemons: this.acquiredPokemons})
    }

    printData() {
        console.log(this)
    }
}