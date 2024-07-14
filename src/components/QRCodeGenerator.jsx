import './QRCodeGenerator.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';

export function QrCodeGenerator () {

    const [value, setValue] = useState();
    
    return (
    <main>
        <h1>Entrez votre url et obtenez un QRCode !</h1>
        <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Entrez une URL"
        />
        <div className="qrcode">
            {value ? (
                <QRCode 
                    title="Liline's Lab"
                    value={value}
                />
            ) : (
                <p>Le QRCode apparaîtra ici !</p>
            )}
        </div>
    </main>
    )
}