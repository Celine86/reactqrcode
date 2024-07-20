import './App.css'
import { Header } from "./components/layout/Header.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { QrCodeGenerator } from './components/parts/QRCodeGenerator.jsx';

function App() {

  return (
    <>
      <Header />
        <QrCodeGenerator />
      <Footer />
    </>
  )
}

export default App
