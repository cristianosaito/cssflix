import React from 'react'
import PageDefault from '../../components/PageDefault/PageDefault'
import { Link } from 'react-router-dom'

function Page404(){
    return(
        <PageDefault>
            <h1>Página não encontrada</h1>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default Page404