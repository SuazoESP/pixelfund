export const initAuth = (config) => {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            document.getElementById('auth-button').textContent = 'Cerrar Sesión';
            document.getElementById('user-dashboard').style.display = 'block';
        } else {
            document.getElementById('auth-button').textContent = 'Iniciar Sesión';
        }
    });
};

export const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
};