import React from "react";
import {Link} from "react-router-dom";
import AuthorBadge from "../author-badge";


import "./styles.css";

export default function FeaturedPost () {
   return (
      <div className="featured-post-container" >
   <div>
    <img className="featured-post-imagem" src="https://www.institutodaconstrucao.com.br/wp-content/uploads/2022/02/background_pintor_interno-e1644333101638.jpg" alt="" />
      </div>

      <div>
      <p className="featured-post-date">fevereiro 10, 2023</p>

      <h2 className="featured-post-title">J.N. Serviços de Pintura.</h2>

       <p className="featured-post-description ">Pintor com 12 anos de experiência em Portugal, pinturas em paredes, muros e tetos, qualidade garantida nos serviços com excelência experiência comprovada em apartamentos e vivendas.Sou bom profissional e responsável. Atuo nas zonas de Coimbra, Ançã, Condeixa a Nova. Disponibilidade imediata, faça já o seu orçamento.</p>
      
     
<AuthorBadge />

<Link to="#">
<form className="send-message" onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Enviar Mensagem</button>
</form>
</Link>
</div>

</div>
    );
} 