import DBConnection from "./models/dbconnection.js";

const database = new DBConnection()
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("btnRegister");

loginButton.addEventListener("click", login);

signupButton.addEventListener("click", register);

async function login() {
    const inputUsername = document.getElementById("loginEmail").value;
    const inputPassword = document.getElementById("loginPassword").value;

    const allUsers = await database.readAll()

    for (const user of allUsers) {
        console.log(user)
        if (user["name"] == inputUsername && user["password"] == inputPassword) {
            window.open(`index.html?id=${user["id"]}`)
            
            return
        }
    }
}

async function register() {
    const inputUsername = document.getElementById("signup-username").value
    const inputPassword = document.getElementById("signup-password").value
    const repeatPassword = document.getElementById("signup-r-password").value

    const allUsers = await database.readAll()

    for (const user of allUsers) {
        if (user["name"] == inputUsername) {
            alert("Error: Username already used! Please use another username...")
            return
        }
    } 

    if (inputPassword == repeatPassword) {
        const data = {
            name: inputUsername,
            password: inputPassword,
            money: 10000,
            wishlist: [],
            inventory: [],
            basket: []
        }
        await database.create(data)
        alert(`New user ${inputUsername} created! Please login into the shop...`)
    } else {
        alert("Password don't matches!")
    }
}

signupButton.addEventListener("click", function(e) {

});