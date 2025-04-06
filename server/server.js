import express from 'express';
import cors from 'cors';
import stripe from 'stripe';
import { Firestore } from '@google-cloud/firestore';

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a Firestore
const db = new Firestore();

// Ruta: Comprar píxel
app.post('/api/buy-pixel', async (req, res) => {
    const { userId, pixelId } = req.body;
    
    try {
        await db.collection('pixels').doc(pixelId).update({
            owner: userId,
            purchasedAt: new Date()
        });
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: "Error al comprar píxel" });
    }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));