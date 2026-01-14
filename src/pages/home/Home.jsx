import s from './home.module.scss'
import Saude from '../../assets/saude.png'  
import Doutor from '../../assets/doutor.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <section className={ s.section }>
                <div className={ s.conteudo }>
                    <div className= { s.saudeBox }>
                        <img src={Saude} alt="Estetoscópio" />
                        <p className= { s.saudeBoxTexto }>Saúde para todos</p>
                    </div>
                    <h1>Sáude e cuidado sem barreiras</h1>
                    <p className={ s.conteudoTexto }>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>
                    <div className={ s.buttons }>
                        <Link to="/voluntario" className={ s.btnUm }>Seja Voluntário</Link>
                        <Link to="/" className={ s.btnDois }>Como Ajudar</Link>                        
                    </div>
                </div>
                    <div className= { s.doutorImgBox }>
                        <img src={ Doutor } alt="Médico sorridente com estetoscópio" />
                    </div>               
            </section>
            <section className={ s.sectionMissao }>
                <h2>Nossa Missão</h2>
                <p>Transformar vidas através do acesso universal a saúde de qualidade</p>
                <div className={s.boxCards}>
                    <article>
                        <h3>Acesso Equitativo</h3>
                        <p>Garantir que todos tenham acesso a cuidados de saúde de qualidade, independente de sua condição financeira.</p>
                    </article>
                    <article>
                        <h3>Comunidade Forte</h3>
                        <p>Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.</p>
                    </article>
                    <article>
                        <h3>Bem-estar Total</h3>
                        <p>Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.</p>
                    </article>
                </div>
            </section>
            <section className= { s.sectionImpacto }>
                <h2>Nosso Impacto</h2>
                <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>
                <div className= { s. boxCardsImpacto }>
                    <article>
                        <h3>2,500+</h3>
                        <p>Pessoas Atendidas.</p>
                    </article>
                    <article>
                        <h3>150+</h3>
                        <p>Profissionais Voluntários.</p>
                    </article>
                    <article>
                        <h3>98%</h3>
                        <p>Satisfação dos Pacientes.</p>
                    </article>
                    <article>
                        <h3>5+</h3>
                        <p>Anos de Dedicação.</p>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Home