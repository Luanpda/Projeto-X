import { useState } from 'react'

import './App.css'
import { Cabecalho } from './components/Cabecalho/Cabecalho'
import { Anuncio } from './components/anuncio/AnuncioHorizontal'
function App() {
 

  return (
    <>
      <Cabecalho />
      <AnuncioHorizontal />
      
    </>
  )
}

export default App
