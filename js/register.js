import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
function registerUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("✅ Registrierung erfolgreich!");
    })
    .catch((error) => {
        alert("Fehler: " + error.message);
    });
}

