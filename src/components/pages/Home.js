import style from './Home.module.css'
import Savings from '../../imagens/savings.svg'
import LinkButton from '../Layout/LinkButton'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <section className={style.home_container}>
            <h1> Bem-Vindo ao <span>Cost</span></h1>
            <p>Comece a gerenciar o seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar projeto"/>
            <img src={Savings} alt="savings"/>

        </section>
    )
}
export default Home