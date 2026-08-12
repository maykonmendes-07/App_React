import styles from "./ProjectCards.module.css"

import {Bspencil, BsFilltrashFill} from "react-icons/bs"

function ProjectCards({ id, name = "Projeto sem nome", budget = "0", category, handleRemove }) {
    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span>R${budget}
            </p>
            <p>
                <span></span>{category?.name}
            </p>
            <div>
                <p>Editar</p>
                <p>Remover</p>

            </div>
        </div>

    )


}
export default ProjectCards