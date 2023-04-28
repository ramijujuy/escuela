import { useState } from "react";
import Boton from "../Boton/Boton";
import Texto from "../Texto/Texto";
import Lista from "../lista/lista";
import estilo from "./Formulario.module.css"
import {v4 as uuid} from "uuid";




const Formulario = (props) => {
    
    console.log(props)

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");
    const[titulo, setTitulo] = useState("");
    const[colorPrimario, setColorprimario] = useState("");

    const Envio = (event) => {
        event.preventDefault()
        let datos = {
            id: uuid(),
            nombre,
            puesto,
            foto,
            equipo,
            fav:false
        }

        props.enviarmensaje(datos)
                     
     }

   


    return <section className={estilo.sectionform}>

        <form className={estilo.form1} onSubmit={Envio}>
        <h2 className={estilo.h21}> Rellena el Formulario para informarte.</h2>
        <Texto titulo="Nombre" placeholder="Ingrese el Nombre..." required={true} valor={nombre} actualizar={setNombre} type="text"/>
        <Texto titulo="Puesto" placeholder="Ingrese puesto..." valor={puesto} actualizar={setPuesto} type="text"/>
        <Texto titulo="Foto" placeholder="Ingrese enlace de la foto..." valor={foto} actualizar={setFoto} type="text"/>
        <Lista valor={equipo} actualizar={setEquipo} equipos={props.equipos} type="text"/>
        <Boton registrarColaborador={props.enviarmensaje}/>
        </form>
       
       
    </section>
}

export default Formulario;