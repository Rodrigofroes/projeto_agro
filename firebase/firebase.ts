import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDULpl2Ni7gGL-lZB7DLTC9WccmbxsfsmU",
    authDomain: "coleta-de-solo-1aef9.firebaseapp.com",
    projectId: "coleta-de-solo-1aef9",
    storageBucket: "coleta-de-solo-1aef9.firebasestorage.app",
    messagingSenderId: "427264289540",
    appId: "1:427264289540:web:dcaf0cb9eead919969fe51",
    measurementId: "G-WM2F4R7DSX"
};

const app = initializeApp(firebaseConfig);

export { app };
