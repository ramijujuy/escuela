import Colaborador from "../Colaborador/Colaborador"
import estilo from "./equipo.module.css"


const Equipo = (props) => {
   // Destructuro las props enviadas ojo con esto
   const {titulo, colorPrimario, colorSecundario, id} = props.equipo
   const {colaboradores} = props
   const {eliminar, actualizarColor, cambiarfav} = props
   return  <>
    { colaboradores.length > 0 &&
   <section className={estilo.section1} style={{backgroundColor: colorPrimario}}>
    <input className={estilo.input1} type="color" value={colorSecundario} onChange={(e) => actualizarColor(id, e.target.value)}/>
   <h3 className={estilo.h31} style={{borderColor: colorSecundario}} >{titulo}</h3>
   <div className={estilo.colaboradores2}>
      
       {
           colaboradores.map((colaborador, index) => {
               return (
               <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} colorSecundario={colorSecundario} eliminar={eliminar} cambiarfav={cambiarfav}/>)
           })
       }
                              
   </div>
</section> 
}
</>
  
}

export default Equipo