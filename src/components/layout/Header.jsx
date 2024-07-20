import './Header.css';
import catGreen from '/cat-green.png';
import catYellow from '/cat-yellow.png';

export function Header() {
    return (
        <header>
            <a target="_blank" href="https://lilineslab.fr">
                <img className="mainLogo" src={catGreen}
                    onMouseOver={e => e.currentTarget.src = catYellow}
                    onMouseOut={e => e.currentTarget.src = catGreen}
                />
            </a>
            <h1 className="mytitle">QR Code Generator</h1>
        </header>
    )
}