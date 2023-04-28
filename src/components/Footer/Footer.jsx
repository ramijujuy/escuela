import estilos from "./Footer.css"
const Footer = () => {

    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-social-media">
              <a href="https://www.facebook.com/">
              <img src="img/facebook.png" alt="Facebook"/>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="img/twitter.png" alt="Twitter"/>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="img/instagram.png" alt="Instagram"/>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p className="footer-text">© 2023 Todos los derechos reservados</p>
          </div>
        </footer>
      );
}

export default Footer

/* return <footer className={estilos.footer1} style={{backgroundImage:"url(/img/footer.png)"}}>
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



</footer> */
