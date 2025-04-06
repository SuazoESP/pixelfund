export const buyPixel = async (pixelId) => {
    const user = firebase.auth().currentUser;
    if (!user) return alert("¡Regístrate primero!");
    
    const response = await fetch('/api/buy-pixel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.uid, pixelId })
    });
    
    if (response.ok) {
        alert("¡Píxel comprado!");
    }
};