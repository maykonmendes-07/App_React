import { useEffect, useState } from 'react'
import styles from './Projects.module.css'
import { useParams } from 'react-router-dom'
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'
import Projects from './Projects'

function Project() {
    const { id } = useParams()

    const [project, setProject] = useState({})

    useEffect(() => {
        if (!id) return 

        setTimeout(() => {
             fetch(`http://localhost:5000/projects/${id}`, { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log(err))
        },1000)

    }, [id])

    return (
        <>
            {Project.name ? 
                <div>
                    <Container customClass="column">
                        <div>
                            <h1>Projeto: {Project.name}</h1>
                            <button>Editar Projeto</button>
                        </div>

                    </Container>
                </div>
            :  <Loading/>
            }
        </>
    )
}

export default Project
