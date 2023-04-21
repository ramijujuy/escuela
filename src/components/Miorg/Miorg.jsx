import estilo from "./Miorg.module.css"


const Miorg = (props) => {

   return <section className={estilo.sec}>
    <h3 className={estilo.h33}>Mi Organizacion </h3>
    <img className={estilo.img2} src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
   </section>
              
}

export default Miorg;