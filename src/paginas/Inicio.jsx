import {useEffect, useState} from 'react'
import ListaClientes from './ListaClientes'

const Inicio = () => {
  const [information, setInformation]=useState([])
  //console.log(information)

  useEffect (()=>{
      
      const consultarAPI =async ()=>{
        const url ="http://localhost:3000/clientes" 
        const response = await fetch(url)
        const respuesta = await response.json()
        // console.log(response)
        // console.log(respuesta)
        setInformation(respuesta)
        
      }
      consultarAPI();
  }, [])

  const handleDelete = async id=>{
    //console.log("eliminando cliente", id)
    const confirmar = confirm ("Deseas eliminar este cliente?")
    if (confirmar){
      
      try {
        
        const url = `http://localhost:3000/clientes/${id}`
        const petition= await fetch(url, {
          method: "DELETE"
        });
        const response = await petition.json();
        //actualizar el state 
        
        const arrayClientes = information.filter((cliente)=> cliente.id !== id)
        setInformation(arrayClientes);
      } catch (error) {
        console.log(error)
      }
    }

  }
  
  
  return (
    <div>
        <div className='md:w-4/5 m-auto w-full bg-blue-500 py-2 flex justify-around text-white font-bold text-2xl'>
             <p>Nombre</p>
             <p>contacto</p>
             <p>empresa</p>

            </div>
      {information.map((cliente)=>{
        return (
          <ListaClientes
          cliente={cliente}
          keys={cliente.id}
          handleDelete={handleDelete}
          
          />
          
        )
        
        
      })}
    </div>
  )
}

export default Inicio