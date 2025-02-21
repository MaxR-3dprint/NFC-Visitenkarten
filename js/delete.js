import { getAuth, signInWithEmailAndPassword, deleteUser } from "firebase/auth";

function deleteAccount() {
    const email = document.getElementById('delete-email').value;
    const password = document.getElementById('delete-password').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        deleteUser(userCredential.user)
        .then(() => {
            alert("✅ Konto gelöscht!");
        });
    })
    .catch((error) => {
        alert("Fehler: " + error.message);
    });
}

