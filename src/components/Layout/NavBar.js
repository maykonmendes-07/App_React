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
          <li className={styles.item}><Link to="/"><strong>Home</strong></Link></li>
          <li className={styles.item}><Link to="/projects"><strong>Projetos</strong></Link></li>
          <li className={styles.item}><Link to="/Company"><strong>Empresa</strong></Link></li>                   
          <li className={styles.item}><Link to="/Contact"><strong>Contato</strong></Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar