import './QRCodeGenerator.css';
import { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import * as htmlToImage from "html-to-image";

export function QrCodeGenerator () {

    const [value, setValue] = useState();
    const qrCodeRef = useRef(null);
    
    const downloadQRCode = () => {
      htmlToImage
        .toPng(qrCodeRef.current)
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "myQRCode.png";
          link.click();
        })
        .catch(function (error) {
          console.error("Pb de création du QRCode:", error);
        });
    };

    return (
    <main>
        <h1>Entrez votre url et obtenez un QRCode !</h1>
        <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Entrez une URL"
        />
        <div className="qrCodeContainer">
            {value ? (
                <div>
                    <div className="qrCode" ref={qrCodeRef}>
                        <span className='qrName'>{value}</span>
                        <QRCode 
                            title="Liline's Lab"
                            value={value}
                            size={165}
                            level='L'
                        />
                    </div>
                    <button onClick={downloadQRCode}>Télécharger le QRCode</button>
                </div>
            ) : (
                <p>Le QRCode apparaîtra ici !</p>
            )}
        </div>
    </main>
    )
}