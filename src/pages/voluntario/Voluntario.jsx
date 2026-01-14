import s from './voluntario.module.scss'
import { Link } from 'react-router-dom'

const Voluntario = () => {
    return (
        <section className={ s.section }> 
            <section className={ s.sectionVoluntario }>
                <div>
                    <h1>Seja Voluntário</h1>
                    <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
                </div>
                <section className={ s.sectionCards }>
                    <article>
                        <h2>Impacto Direto</h2>
                        <p>Sua dedicação salva vidas e transforma comunidades</p>
                    </article>
                    <article>
                        <h2>Crescimento Pessoal</h2>
                        <p>Desenvolva habilidades e cresça profissionalmente</p>
                    </article>
                    <article>
                        <h2>Comunidade</h2>
                        <p>Faça parte de uma rede de profissionais comprometidos</p>
                    </article> 
                </section>
            </section>
            <section className={ s.sectionFormulario }>
                <section className={s.formularioConteudo}>                  
                    <h2>Inscrição para Voluntários</h2>
                    <h3>Dados Pessoais</h3>
                    <form>
                        <div>
                            <input type="text" placeholder="Seu nome *"/>  
                            <input type="email" placeholder="Seu email *"/>
                        </div>                        
                            <input type="tel" placeholder="Seu telefone *"/> 
                        <div className={s.areaMensagem}>
                            <label>Mensagem Adicional</label>
                            <input type="text" placeholder="Conte-nos porque você quer ser voluntário..."/>
                        </div>                                                              
                    </form>
                    <section>
                        <p>Entraremos em contato para mais informações</p>
                        <Link to="/" className={ s.btnInscricao }>Enviar Inscrição</Link>                         
                    </section>                                         
                </section>
            </section>                  
        </section>
        

    


        
    )
}

export default Voluntario