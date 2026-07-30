import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./NavBar.module.css"
import logo from "../../imagens/costs_logo.png"

function NavBar() {
    return (
        <nav class={styles.navbar}>
            <container>
                <ul class={styles.list}>
                    <li Class={styles.item}><Link to="/"><img src={logo} alt="logo"></img></Link></li>
                    <li Class={styles.item}><Link to="/">Home</Link></li>
                    <li Class={styles.item}><Link to="/Company">Empresa</Link></li>
                    <li Class={styles.item}><Link to="/Contact">Contato</Link></li>
                    <li Class={styles.item}><Link to="/Newproject">Novo Projeto</Link></li>
                    <li Class={styles.item}><Link to="/projects">Meus Projetos</Link></li>
                </ul>
            </container>
        </nav>

    )
}
export default NavBar