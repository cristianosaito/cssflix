import React, { useEffect,useState } from 'react'
import PageDefault from '../../../components/PageDefault/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import FormField from '../../../components/FormField/formField'
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button/Button'
import videoRepository from "../../../repositories/video"
import categoryRepository from "../../../repositories/categorias";

function CadastroVideo(){
    const history = useHistory()
    const [categorias, setCategorias] = useState([])
    const categoryTitles = categorias.map((cat)=>cat.titulo)
    const {handleChange,values} = useForm({
        titulo: "Video Padrão",
        url: "https://www.youtube.com/watch?v=vkQtRjuEvss",
        categoria: "Front End"
    })

useEffect(()=>{
    categoryRepository.getAll().then((cat)=>{
        setCategorias(cat)
    })
},[])

return(
        <PageDefault>
            <h1>Cadastro de vídeo</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                const categoriaEscolhida = categorias.find((categoria)=>{
                    return categoria.titulo === values.categoria
                })

                

                videoRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1
                }).then(()=>{
                    console.log("cadastrado com sucesso");
                    
                    history.push("/")

                })
            }}>
            <FormField
            label="Titulo do Video"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
            />
            <FormField
            label="URL"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
            />
            <FormField
            label="Categoria"
            type="text"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
            />
             <Button>
            Cadastrar
            </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
           
        </PageDefault>
    )
}

export default CadastroVideo