import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyAvu5e02YsGZ9sXUpSwrU7pLWMXJVTB_aI",
    authDomain: "pokeapi-5bada.firebaseapp.com",
    projectId: "pokeapi-5bada",
    storageBucket: "pokeapi-5bada.firebasestorage.app",
    messagingSenderId: "1003057443878",
    appId: "1:1003057443878:web:ef7f7c44a539130ae4e2e7",
    measurementId: "G-QJ1XQYZ9LB"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

const submit = document.getElementById('submit');
submit.addEventListener('click', function(event) {
  event.preventDefault();
  const auth = getAuth();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      
      // Set an initial amount of money (you can adjust this as needed)
      localStorage.setItem('userMoney', '1000');
      
      alert('Login successful');
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Login error: ' + errorMessage);
    });
});

