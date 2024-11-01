import DBConnection from "../models/dbconnection.js";

export default class UserController {
    constructor() {
        this.database = new DBConnection()
        this.id;
        this.name;
        this.password;
        this.money;
        this.inventory;
        this.shoppingCart;
        this.wishlist;
    }

    async fetchData(id) {
        const allUsers = await this.database.readAll()
        for (let user of allUsers) {
            if (user["id"] == id) {
                this.id = user["id"]
                this.name = user["name"];
                this.password = user["password"];
                this.money = user["money"];
                this.inventory = user["inventory"];
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

    async updateMoney() {
        await this.database.update(this.id, {money: this.money})
    }

    async updateInventory() {
        await this.database.update(this.id, {inventory: this.inventory})
    }

    printData() {
        console.log(this)
    }
}