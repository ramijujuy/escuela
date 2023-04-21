import estilos from "./Footer.module.css"
const Footer = () => {

    return <footer className={estilos.footer1} style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className={estilos.redes}>
            <a href="https://www.aluracursos.com/">
                 <img src="img/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.aluracursos.com/">
                 <img src="img/twitter.png" alt="Twitter"/>
            </a>

            <a href="https://www.aluracursos.com/">
                 <img src="img/instagram.png" alt="Instagram"/>
            </a>
        
        </div>

        <img src="img/Logo.png" alt="Org"/>
        <strong>Desarrollado por RFA</strong>



    </footer>

}

export default Footer