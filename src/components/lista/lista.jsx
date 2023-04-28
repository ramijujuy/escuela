import estilo from "./lista.module.css"

const Lista = (props) => {
   

    const manejarCambio = (e) => {
        console.log("cambio")
        props.actualizar(e.target.value)
    }

    return <div className={estilo.div}>
        <label className={estilo.label}>Equipo</label>
        <select className={estilo.select} value={props.valor} onChange={manejarCambio}>
           <option value="" disabled defaultValue="" hidden>Seleccionar el motivo</option> 
           { props.equipos.map((dato, index) => <option key={index} value={props.equipos.titulo}>{dato.titulo}</option>) }
                     
        </select>
    </div>
}

export default Lista;