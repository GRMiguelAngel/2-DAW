import {DBConnection} from "../../src/models/conect_firestone.js";

const database = new DBConnection()
const loginButton = document.getElementById("btnLogin");
const signupButton = document.getElementById("btnRegister");

loginButton.addEventListener("click", login);

signupButton.addEventListener("click", register);

async function login() {
    event.preventDefault()
    const inputUsername = document.getElementById("loginUsername").value;
    const inputPassword = document.getElementById("loginPassword").value;

    const allUsers = await database.readAll()

    for (const user of allUsers) {
        console.log(user);
        console.log(user["name"],  inputUsername);

        if (user.name == inputUsername && user["password"] == inputPassword) {
            window.open(`../../index.html?id=${user["id"]}`)
            
            return
        }
    }
}

async function register() {
    const inputUsername = document.getElementById("registerUsername").value
    const inputPassword = document.getElementById("registerPassword").value
    const repeatPassword = document.getElementById("registerRepeatPassword").value

    const allUsers = await database.readAll()

    for (const user of allUsers) {
        if (user["name"] == inputUsername) {
            alert("Error: Email already used! Please use another email...")
            return
        }
    } 

    if (inputPassword == repeatPassword) {
        const data = {
            name: inputUsername,
            password: inputPassword,
            balance: 1000,
            acquiredPokemons: [],
            basket: []
        }
        await database.create(data)
        alert(`New user ${inputUsername} created! Please login into the shop...`)
    } else {
        alert("Password don't matches!")
    }
}