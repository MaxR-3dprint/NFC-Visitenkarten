// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyCMwt-eSBsSm8TOhAPy-0uTbcE_yqkQZZY",
    authDomain: "nfc-1-7a129.firebaseapp.com",
    projectId: "nfc-1-7a129",
    storageBucket: "nfc-1-7a129.firebasestorage.app",
    messagingSenderId: "998146222147",
    appId: "1:998146222147:web:cae43ba03cec87908eccf6"
};

// Initialisierung von Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

