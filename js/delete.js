import { getFirestore, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = getFirestore();

async function deleteUser() {
    const token = document.getElementById("token-input").value;
    const password = document.getElementById("password-input").value;

    if (!token || !password) {
        alert("❌ Bitte Token und Passwort eingeben.");
        return;
    }

    const userRef = doc(db, "users", token);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        const userData = userSnap.data();
        
        if (userData.password_admin !== password) {
            alert("❌ Falsches Passwort!");
            return;
        }

        await deleteDoc(userRef);
        alert("✅ Dein Konto wurde erfolgreich gelöscht.");
        window.location.href = "index.html";
    } else {
        alert("❌ Kein Nutzer mit diesem Token gefunden.");
    }
}

