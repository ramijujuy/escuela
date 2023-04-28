import React from 'react';
import Formulario from '../Formulario/Formulario';
import { Link } from 'react-router-dom';



function Detalle({ title, videoUrl, description }) {
  
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>{title}</h2>
          <div style={{ width: '100%', maxWidth: '800px' }}>
            <iframe
              style={{ width: '100%', height: '500px' }}
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>{description}</p>

          <Link to={"/contacto"}>Contactanos</Link>
        </div>

        
      );
}

export default Detalle;
