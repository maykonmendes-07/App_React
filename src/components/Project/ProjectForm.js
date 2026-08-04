import { useState, useEffect} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'

function ProjectForm({btnText}) {

    const[categories,setcategories]=useState([])

        useEffect(()=>{
              fetch("http://localhost:5000/categories", {
       method: "GET",
       headers: {
        'content-type': 'application/json',
       }, 
    })
    .then((resp) => resp.json())
    .then((data) =>{
        setcategories(data)
    })
    .catch((err)=> console.log(err))
        },[])


    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="name" 
                placeholder="Insira o nome do projeto" 
            />
            
            <Input 
                type="number" 
                text="Orçamento do Projeto" 
                name="budget" 
                placeholder="Insira o orçamento total" 
            />
            
            <Select 
                name="category_id" 
                text="Selecione a categoria" 
                options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm
