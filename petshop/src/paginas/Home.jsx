import React from 'react'
import ListaCategorias from '../componentes/ListaCategorias'
import ListaPost from '../componentes/ListaPost'
import Categoria from './Categoria'

const Home = () => {

  return (
    <main>
      <Categoria />
      <ListaCategorias />
      <ListaPost url={'/posts'}/>

    </main>
  )
}

export default Home
