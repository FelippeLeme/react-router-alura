import React, { useEffect, useState } from 'react'
import '../assets/css/blog.css'
import ListaCategorias from '../componentes/ListaCategorias'
import ListaPost from '../componentes/ListaPost'
import { BrowserRouter as Route, Switch, Link, useParams, useRouteMatch } from 'react-router-dom'
import { busca } from '../api/api'
import SubCategoria from './SubCategoria'


const Categoria = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])
    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Noticias</h2>
            </div>

            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => {
                        return( 
                        <li className={`lista-categorias__categoria lista-categroias__categoria--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
                        </li>
                        )
                    })
                }

            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>

        </>
    )
}

export default Categoria