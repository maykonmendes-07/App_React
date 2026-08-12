import { useLocation } from "react-router-dom"
import Message from "../Layout/Message"
import Container from "../Layout/Container"
import LinkButton from "../Layout/LinkButton"
import styles from "./Projects.module.css"
import ProjectCards from "../Project/ProjectCards"
import { useState, useEffect } from "react"

function Projects(){
    const[projects, setProjects]=useState([])

    const location = useLocation()
    let message= ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(()=>{
        fetch("http://localhost:5000/projects", {
       method: "GET",
       headers: {
        'content-type': 'application/json',
       },
    }).then((resp) => resp.json())
    .then((data) =>{
        setProjects(data)

    })
    .catch((err)=> console.log(err))


    },[])

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Meus projetos</h1>
           <LinkButton to="/newproject" text="Criar projeto"/>
           </div>
            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project)=>(
                    <ProjectCards 
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category}
                        />
                ))}
            </Container>

        </div>
    )
}
export default Projects