import React from 'react'
import s from './footer.module.scss'
import Logo from '../../assets/logo.png'
import Email from '../../assets/email-icon.png'
import Telefone from '../../assets/telefone-icon.png'
import Localizacao from '../../assets/localizacao-icon.png'


const Footer = () => {
  return (
    <div className= { s.footer }>
        <div className= { s.BoxFooter }> 
            <section>
            <div className= {s.Logo} >
                <img src={Logo} alt= "Imagem do logo do site Médicos Voluntários" />
                <p>Médicos & Dentistas</p>
            </div>     
            <p>Saúde e cuidado sem barreiras para toda comunidade</p> 
        </section>              
        <section> 
            <h3>Contato</h3>
            <div className= { s.ContatoFooter }>
                <img src = {Email} alt= "Ícone de email" />
                <email>contato@medico-dentita.org</email>
            </div>
              <div className= { s.ContatoFooter }>
                <img src = {Telefone} alt= "Ícone de telefone" />
                <p>(11)3000-0000</p>
            </div>
              <div className= { s.ContatoFooter }>
                <img src = {Localizacao} alt= "Ícone de localização" />
                <p>São Paulo, Brasil</p>
            </div>
        </section> 
        <section>
            <h3>Redes Sociais</h3>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>
        </section>   
        </div>        
        <section className= { s.Direitos }>
            <p>&copy; 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>          
        </section>               
    </div>    
  )
}

export default Footer

