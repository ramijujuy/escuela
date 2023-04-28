import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Idiomas.css"
import { Link } from 'react-router-dom';
import Miorg from '../Miorg/Miorg';

function Idiomas() {
  
        
        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            const halfWidth = card.offsetWidth / 2;
            const halfHeight = card.offsetHeight / 2;
            const mouseX = e.clientX - card.offsetLeft - halfWidth;
            const mouseY = e.clientY - card.offsetTop - halfHeight;
            const rotateX = (mouseY / halfHeight) * 10;
            const rotateY = (mouseX / halfWidth) * -10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          };
        
          const handleMouseLeave = (e) => {
            const card = e.currentTarget;
            card.style.transform = 'none';
          };

    
        
          return (
            <>
            <Miorg />
            <div className="card-container">
              <Card className="card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} >
                <Card.Img variant="top" src="img/portugues.jpg" />
                <Card.ImgOverlay>

                <Card.Text className="card-text">
                   
                       <Link to="/portugues"> <h1>Si queres saber mas hace click</h1></Link>
                     </Card.Text>
                
                </Card.ImgOverlay>
              </Card>
        
              <Card className="card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <Card.Img variant="top" src="img/ingles.jpg" />
                <Card.ImgOverlay>
                <Card.Text className="card-text">
                <Link to="/portugues"> <h1>Si queres saber mas hace click</h1></Link>
                     </Card.Text>
                 
                </Card.ImgOverlay>
              </Card>
            </div>
            </>
          );
         
}

export default Idiomas;
