import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import { Header } from './components/Header/Header';

import Idiomas from './components/Idiomas/Idiomas';
import Footer from './components/Footer/Footer';
import {v4 as uuid} from "uuid";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Detalle from './components/CardDetalle/CardDetalle';
import Landing from './components/Landing/Landing';
import Somos from './components/Somos/Somos';

// ejemplo de ternario condicion && seMuestra fijate que abajo preguntamos y ponemos como un else

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)


  const idiomas =  [
    { 
      id: uuid(),
      img: "img/portugues.jpg",
      titulo: "Portugues",
      colorPrimario: "#57c278" ,
      colorSecundario: "#d9f7e9",
      
    },
    
    {
      id: uuid(),
      img: "img/ingles.jpg",
      titulo: "Ingles",
    colorPrimario: "#e8f8ff" ,
    colorSecundario: "#82cffa"
    }
  ]

  const equipos = [{titulo:"Quiero informacion del curso de portugues"},{titulo:"Quiero informacion del curso de ingles"},{ titulo: "COSTOS Y FORMAS DE PAGO" },{ titulo: "MODALIDAD DE ESTUDIO" },{ titulo: "OTROS" }  ]

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const enviarmensaje = (datos) =>{
    console.log(datos)
  }



  return (
    <div>
      <Router>

     <Header/>

   

      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={ <Idiomas />}/>
        <Route path='/somos' element={ <Somos />} />
        <Route path='/contacto' element={<Formulario equipos={equipos} enviarmensaje={enviarmensaje}/>} />
        <Route path='/portugues' element={<Detalle title="Prueba de idioma detalle" videoUrl="https://www.youtube.com/embed/DoF7M7Ku7tE" description="desacripcion"/>}/>
      </Routes>
    
     <Footer />

     </Router>
     </div>

     
  );
}

export default App;
