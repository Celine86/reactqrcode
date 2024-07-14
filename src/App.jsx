import './App.css'
import { Header } from "./layout/Header.jsx";
import { Footer } from "./layout/Footer.jsx";
import { QrCodeGenerator } from './components/QRCodeGenerator.jsx';

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
