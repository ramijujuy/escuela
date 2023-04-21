import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import { Header } from './components/Header/header';
import Miorg from './components/Miorg/Miorg';
import Equipo from './components/Equipo/equipo';
import Footer from './components/Footer/Footer';
import {v4 as uuid} from "uuid";

// ejemplo de ternario condicion && seMuestra fijate que abajo preguntamos y ponemos como un else

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([
    {
    id: uuid(),
    equipo: "Front End",
    foto: "/img/ramiro.jpg",
    nombre: "Ramiro Alfaro",
    puesto: "Desarrollador de software",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head e Instructor",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }])

  const [equipos, setEquipos] = useState( [
    { 
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278" ,
      colorSecundario: "#d9f7e9",
      
    },
    
    {
      id: uuid(),
      titulo: "Front End",
    colorPrimario: "#e8f8ff" ,
    colorSecundario: "#82cffa"
    },
    { 
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#f0f8e2" ,
      colorSecundario: "#a6d157"
    },
    { 
      id: uuid(),
      titulo: "Devops",
    colorPrimario: "#fde7e8" ,
    colorSecundario: "#e06b69"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
    colorPrimario: "#5fae9f5" ,
    colorSecundario: "#db6ebf"
    },
    { 
      id: uuid(),titulo: "Movil",
    colorPrimario: "#fff5d9" ,
    colorSecundario: "#ffba05"
    },
    {
      id: uuid(),
       titulo: "Innovación y Gestión",
    colorPrimario: "#ffeedf" ,
    colorSecundario: "#ff8a29"
    }

  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (datos)=> {
    setColaboradores([...colaboradores, datos]) 
    }

   const eliminarColaborador = (id)=>{
    console.log("llego al elimina", id)
    const delcolaborador = colaboradores.filter((e) => e.id !== id)
    setColaboradores(delcolaborador)
   } 

   //Actualizo color equipo

   const actualizarColor = (key, color) => {
      const newequipo = equipos.map((e) => {
      if (e.id === key) {
       e.colorPrimario = color
      }
      return e
    })
       setEquipos(newequipo)
      
   }

   //actualizo el me gusta

   const Cambiar = (id) =>{
    console.log("llego a cambiar fav", id)
    const newcolaborador = colaboradores.map((e) => {
      if ( e.id === id) {
        e.fav = !e.fav }
        return e
    })

    setColaboradores(newcolaborador)
   
}

   const registrarEquipo = (datos)=> {
    setEquipos([...equipos, datos]) 
    }

  

  return (
    <div>

     <Header/>
     {mostrarFormulario === true ? <Formulario equipos={equipos} registrarColaborador={registrarColaborador} registrarEquipo={registrarEquipo} /> : <div></div> }
     
     <Miorg cambiarMostrar={cambiarMostrar}/>
     {equipos.map((dato, index) => {
      return (
     <Equipo key={index} equipo={dato} colaboradores={colaboradores.filter(colaborador =>colaborador.equipo === dato.titulo)} eliminar={eliminarColaborador} actualizarColor={actualizarColor} cambiarfav={Cambiar}/>)})}

     <Footer />
     </div>

     
  );
}

export default App;
