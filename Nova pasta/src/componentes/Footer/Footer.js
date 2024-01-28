import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <footer className="premium">
            <div className="premium__text"> 
                <p className="premium__title">Testar o premium de graça</p>
                <p className="premium__subtitle">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns
                    anúncios. Não precisa de cartão de crédito.
                </p>
            </div>
            <div className="premium__button">
                <button type="button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
};

export default Footer

