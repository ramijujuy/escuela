import estilo from "./Colaborador.module.css"
import {TiDeleteOutline} from "react-icons/ti"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import { useState } from "react"

const Colaborador = (props)=> {
    const {nombre, foto, puesto, id, fav} = props.datos
    const {colorPrimario, colorSecundario, eliminar, cambiarfav} = props



    
    
    return (
        <div className={estilo.colaborador1}>
            <div className={estilo.encabezado1} style={{backgroundColor: colorSecundario}}> 
            <TiDeleteOutline className={estilo.eliminar} onClick={()=>eliminar(id)}/>
            <img src={foto}alt={nombre} className={estilo.img1}></img>
            </div>
            <div className={estilo.info} style={{borderColor: colorSecundario}}>
                  <h4 className={estilo.nombre}>{nombre}</h4>
                  <h5 className={estilo.puesto}>{puesto}</h5>
                  {fav ? <AiFillHeart color="red" onClick={()=>cambiarfav(id)} />: <AiOutlineHeart onClick={()=>cambiarfav(id)} />  }
            </div>
        </div>
    )
}

export default Colaborador

