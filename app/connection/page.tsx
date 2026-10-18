import React, { useState } from 'react';

export default function ConnectionPage() {
    // États pour stocker la connexion
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [port, setPort] = useState<any>(null);

    // Fonction pour initialiser la connexion série
    const connectToSatellite = async () => {
        try {
            // Demande à l'utilisateur de sélectionner le port COM de la liaison Radio/Filaire
            const serialPort = await (navigator as any).serial.requestPort();
            
            // Ouverture du port avec la vitesse de la STM32 (ex: 115200 bauds)
            await serialPort.open({ baudRate: 115200 });
            
            setPort(serialPort);
            setIsConnected(true);
            console.log("Connecté au satellite Billy !");
            
            // Lancer la lecture continue en mode Passif/Actif
            readTelemetry(serialPort);

        } catch (error) {
            console.error("Erreur de connexion :", error);
        }
    };

    // Fonction pour lire les données entrantes (I2C, gyro, etc.)
    const readTelemetry = async (activePort: any) => {
        const textDecoder = new TextDecoderStream();
        const readableStreamClosed = activePort.readable.pipeTo(textDecoder.writable);
        const reader = textDecoder.readable.getReader();

        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) break; // La connexion a été fermée
                
                // 'value' contient les trames de données envoyées toutes les 2s
                console.log("Télémétrie reçue: ", value);
            }
        } catch (error) {
            console.error("Erreur de lecture :", error);
        } finally {
            reader.releaseLock();
        }
    };

    // Fonction pour fermer proprement la connexion
    const disconnectSatellite = async () => {
        if (port) {
            await port.close();
            setPort(null);
            setIsConnected(false);
            console.log("Déconnecté du satellite.");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Interface de Connexion - Billy CubeSat</h1>
            <p>Statut de la liaison radio : {isConnected ? "En ligne" : "Hors ligne"}</p>
            
            {/* Vous pourrez ajouter vos boutons ici plus tard 
                qui feront appel à connectToSatellite() et disconnectSatellite() */}
        </div>
    );
}