
import Navbar from './Componentes/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componentes/Footer';
import Main from './Componentes/Main.jsx';
import {NextUIProvider} from "@nextui-org/react";


function App() {
  return (
   <>
    <NextUIProvider>
   <Navbar/>
   <Main/>
   <Footer/>
   </NextUIProvider>
   </>
  );
}

export default App;
