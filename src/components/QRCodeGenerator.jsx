import './QRCodeGenerator.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import saveSvgAsPng from 'save-svg-as-png';


export function QrCodeGenerator () {

    const [value, setValue] = useState();
    const handleClick = () => {
        saveSvgAsPng.saveSvgAsPng(document.getElementById("thisQRCode"), `myQRCode.png`)
    }
    
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
                <div>
                <div className="thecode">
                    <QRCode 
                        id="thisQRCode"
                        title="Liline's Lab"
                        value={value}
                        size={165}
                        level='L'
                    />
                </div>
                    <button onClick={() => handleClick()}>Télécharger</button>
                </div>
            ) : (
                <p>Le QRCode apparaîtra ici !</p>
            )}
        </div>
    </main>
    )
}