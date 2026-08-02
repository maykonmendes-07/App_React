import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./NavBar.module.css"
import logo from "../../imagens/costs_logo.png"

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </li>
          <li className={styles.item}><Link to="/">Home</Link></li>
          <li className={styles.item}><Link to="/Company">Empresa</Link></li>
          <li className={styles.item}><Link to="/Contact">Contato</Link></li>
          <li className={styles.item}><Link to="/Newproject">Novo Projeto</Link></li>
          <li className={styles.item}><Link to="/projects">Meus Projetos</Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar