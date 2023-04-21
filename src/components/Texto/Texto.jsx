import estilo from "./Texto.module.css"

const Texto = (props) => {

    const {type = "text"} = props
    const manejarCambio = (e) => {
         props.actualizar(e.target.value)
    }

  
    
    return <div className={estilo.div} >
        <label className={estilo.label}>{props.titulo}</label>
        <input className={estilo.input} placeholder={props.placeholder} required={props.required}value ={props.valor} onChange={manejarCambio} type={type} />
    </div>

}

export default Texto;