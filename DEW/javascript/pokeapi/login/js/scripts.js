// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvu5e02YsGZ9sXUpSwrU7pLWMXJVTB_aI",
  authDomain: "pokeapi-5bada.firebaseapp.com",
  projectId: "pokeapi-5bada",
  storageBucket: "pokeapi-5bada.appspot.com",
  messagingSenderId: "1003057443878",
  appId: "1:1003057443878:web:ef7f7c44a539130ae4e2e7",
  measurementId: "G-QJ1XQYZ9LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Expresión regular para validar email
const emailPattern = /.+@.+\..+/;

// Expresión regular de contraseña que acepte al menos una letra mayúscula,
// un número, un símbolo y una longitud mínima de 8 caracteres
const passwordPattern =
  /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$/;

function validateLogin() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Limito longitud del campo
  if (username.length >= 10) {
    alert("El nombre de usuario debe tener al menos 3 caracteres.");
    return false;
  }

  // Compruebo el formato mínimo de la contraseña
  if (!passwordPattern.test(password)) {
    alert(
      "La contraseña debe tener al menos 8 caracteres, incluir una letra, al menos una mayúscula, un símbolo y un número."
    );
    return false;
  }

  const submit = document.getElementsByClassName('btn-primary');
  submit.addEventListener('click', function(event){
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert('Creando cuenta...')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
      // ..
    });

  return true;
}

function validateRegister() {
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Limito longitud del campo username
  if (username.length >= 10) {
    alert("El nombre es muy largo.");
    return false;
  }
  
  // Compruebo el formato del correo
  if (!emailPattern.test(email)) {
    alert("Por favor, introduce un correo electrónico válido.");
    return false;
  }

  // Compruebo el formato mínimo de la contraseña
  if (!passwordPattern.test(password)) {
    alert(
      "La contraseña debe tener al menos 8 caracteres, incluir una letra y un número."
    );
    return false;
  }

  // Confirmo que ha escrito correctamente la contraseña
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return false;
  }

  const submit = document.getElementsByClassName('btn-primary');
  submit.addEventListener('click', function(event){
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert('Creando cuenta...')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
      // ..
    });

  return true;
  
}

