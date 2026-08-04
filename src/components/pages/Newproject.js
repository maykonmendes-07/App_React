import style from './NewProject.module.css'
import ProjectForm from '../Project/ProjectForm'

function Home(){
    return(
    <div className={style.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu Projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}
export default Home