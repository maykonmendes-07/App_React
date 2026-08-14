import { useLocation } from "react-router-dom"
import Message from "../Layout/Message"
import Container from "../Layout/Container"
import LinkButton from "../Layout/LinkButton"
import styles from "./Projects.module.css"
import ProjectCards from "../Project/ProjectCards"
import { useState, useEffect } from "react"
import Loading from "../Layout/Loading"

function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects", {
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    setProjects(data)
                    setRemoveLoading(true)

                })
                .catch((err) => console.log(err))
        },3000)
    }, [])

    function removeProject(id){

         fetch(`http://localhost:5000/projects/${id}`,{
            method:'DELETE',
            headers:{
                'contente-Type': 'application/json'
            },
    })
    .then((resp) => resp.json())
    .then(() =>{
        setProjects(projects.filter((project)=> project.id !==id))
        setProjectMessage('Projeto removido com sucesso')
    })
    .catch(err => console.log(err))

    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar projeto" />
            </div>
            {message && <Message type="sucess" msg={message} />}
            {projectMessage && <Message type="sucess" msg={projectMessage} />}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCards
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category}
                        handleRemove={removeProject}
                    />
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length===0 &&(
                   <p>Não há Projetos Cadastrados!</p> 
                )
                
                }
            </Container>

        </div>
    )
}
export default Projects