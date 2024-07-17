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
                <div className="thecode">
                    <QRCode 
                        id="thisQRCode"
                        title="Liline's Lab"
                        value={value}
                        size={165}
                        level='L'
                    />
                </div>
            ) : (
                <p>Le QRCode apparaîtra ici !</p>
            )}
        </div>
    </main>
    )
}