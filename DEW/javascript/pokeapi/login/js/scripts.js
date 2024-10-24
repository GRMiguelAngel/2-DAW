// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

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

const Lsubmit = document.getElementById('btn-login');
  Lsubmit.addEventListener('click',function(event){
    event.preventDefault()
    const auth = getAuth();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Iniciando sesión...')
    window.location.href ="../index.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

  })

const submit = document.getElementById('btn-register');
  submit.addEventListener('click',function(event){
    event.preventDefault()
    const auth = getAuth();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('creado cuenta')
    console.log( window.location.href);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

  })