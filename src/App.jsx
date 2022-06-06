import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layaout from './layout/Layaout'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'
import Inicio from './paginas/Inicio'
import NewClient from './paginas/NewClient'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <BrowserRouter>
          <Routes>
              
                <Route path='/clientes' element={<Layaout/>}> 
                    <Route index element={<Inicio/>} />
                    <Route path="nuevo" element={<NuevoCliente/>} />
                    <Route path='editar/:id' element={<EditarCliente/>} />
                    <Route path=':id' element={<NewClient/>} />

                </Route>
          
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
