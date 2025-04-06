import { initAuth, login, logout } from './auth.js';
import { loadMap, buyPixel } from './pixels.js';

// Inicializar Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Init App
document.addEventListener('DOMContentLoaded', () => {
    initAuth(firebaseConfig);
    loadMap(1000, 1000); // Mapa de 1M píxeles (1000x1000)
});