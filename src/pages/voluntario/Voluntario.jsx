import s from './voluntario.module.scss'
import Button from '../../components/button/button.jsx'

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
                    <h3>Inscrição para Voluntários</h3>
                    <h4>Dados Pessoais</h4>
                    <form>
                        <div className= {s.formularioPessoal}>
                            <input type="text" placeholder="Seu nome *"/>  
                            <input type="email" placeholder="Seu email *"/>
                        </div>                        
                            <input type="tel" pattern= "[0-9]{3}-[0-9]{5}-[0-9]{4}" placeholder="Seu telefone *"/> 
                        <div className={s.areaMensagem}>
                            <h4>Mensagem Adicional</h4>
                            <textarea name="messagem" rows="10" cols="142" placeholder="Conte-nos por que você quer ser um voluntário..."></textarea>
                        </div>                                                              
                    </form>
                    <section className={s.enviarInscricao}>
                        <p>Entraremos em contato para mais informações</p>
                         <Button text= 'Enviar Inscrição' to='/voluntario'/>                                                 
                    </section>                                         
                </section>
            </section>                  
        </section>
        

    


        
    )
}

export default Voluntario