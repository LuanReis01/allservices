
import {useState, useEffect} from "react";
import Input from "../form-input/input";
import Select from "../select";
import SubmitButton from "../submit-button";

import "./styles.css";

export default function AdvertiseForm ({ handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {} )

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
             'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
        
    },[])

   const submit = (e) => {
    e.preventDefault()
    handleSubmit(project) 
   }

   function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
    console.log(project)
   } 

     function handleCategory(e) {
    setProject({ 
        ...project,
        category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,  
    } 
   }) 
    
   }  

return(
    <form onSubmit={submit}>
           

        <Input 
        type="text"
        text="Nome do Anúncio"
        name="name"
        placeholder="Título"
        handleOnChange={handleChange}
         value={project.name  ? project.name: ''}  
        />

        <Input 
        type="text"
        text="Descrição"
        name="description"
        placeholder="Conte-nos um pouco sobre o seu serviço"
        handleOnChange={handleChange}
        value={project.description  ? project.description: ''}  
        />

        <Select
         name="category-id" 
         text="Selecione a categoria"
         options={categories}
          handleOnChange={handleCategory} 
          value={project.category ? project.category.id : ''}  
         />
        <SubmitButton text={btnText} />
        
    </form>
    )
}